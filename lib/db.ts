import postgres from 'postgres'

declare global {
  // eslint-disable-next-line no-var
  var __sheDbClient: ReturnType<typeof postgres> | undefined
}

function createClient() {
  const url = process.env.POSTGRES_URL
  if (!url) {
    throw new Error('POSTGRES_URL is not set. Add it to .env.local (dev) or your hosting provider\'s environment variables (production).')
  }
  return postgres(url, {
    ssl: url.includes('localhost') || url.includes('127.0.0.1') ? false : 'require',
  })
}

function getClient() {
  if (!globalThis.__sheDbClient) {
    globalThis.__sheDbClient = createClient()
  }
  return globalThis.__sheDbClient
}

// Lazy proxy: the real connection (and the "POSTGRES_URL is not set" check)
// is only created on first actual query, not on import. Next.js imports
// every API route's module during the build's page-data-collection step,
// so an eager connection here would fail the whole build whenever
// POSTGRES_URL isn't configured yet — even for routes never called.
export const sql = new Proxy((() => {}) as unknown as ReturnType<typeof postgres>, {
  apply(_target, _thisArg, args) {
    const client = getClient()
    return (client as unknown as (...a: unknown[]) => unknown)(...args)
  },
  get(_target, prop, receiver) {
    const client = getClient()
    const value = Reflect.get(client as object, prop, receiver)
    return typeof value === 'function' ? value.bind(client) : value
  },
})

export type Submission = {
  id: number
  type: 'volunteer' | 'partner' | 'contact'
  name: string
  email: string
  phone: string | null
  message: string
  extra: Record<string, unknown> | null
  status: 'new' | 'reviewed' | 'archived'
  created_at: string
}

export type AdminUser = {
  id: number
  name: string
  email: string
  created_at: string
}

export type Post = {
  id: number
  slug: string
  category: string
  title_en: string
  title_sw: string
  excerpt_en: string
  excerpt_sw: string
  body_en: string
  body_sw: string
  image_url: string | null
  published: boolean
  published_at: string
  created_at: string
  updated_at: string
}

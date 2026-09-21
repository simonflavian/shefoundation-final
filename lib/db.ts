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

export const sql = globalThis.__sheDbClient ?? createClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.__sheDbClient = sql
}

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

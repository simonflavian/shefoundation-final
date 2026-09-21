import crypto from 'crypto'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'she_admin_session'
const MAX_AGE_SECONDS = 60 * 60 * 8

function getSecret() {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error('SESSION_SECRET is not set.')
  return secret
}

function sign(value: string) {
  const hmac = crypto.createHmac('sha256', getSecret()).update(value).digest('hex')
  return `${value}.${hmac}`
}

function verify(token: string): string | null {
  const dot = token.lastIndexOf('.')
  if (dot === -1) return null
  const value = token.slice(0, dot)
  const hmac = token.slice(dot + 1)
  const expected = crypto.createHmac('sha256', getSecret()).update(value).digest('hex')
  const a = Buffer.from(hmac)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null
  return value
}

export function checkPassword(input: string) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) throw new Error('ADMIN_PASSWORD is not set.')
  const a = Buffer.from(input)
  const b = Buffer.from(expected)
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

export async function createSession() {
  const value = `admin.${Date.now()}`
  const store = await cookies()
  store.set(COOKIE_NAME, sign(value), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE_SECONDS,
    path: '/',
  })
}

export async function destroySession() {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}

export async function isAuthenticated() {
  const store = await cookies()
  const token = store.get(COOKIE_NAME)?.value
  if (!token) return false
  const value = verify(token)
  if (!value) return false
  const timestamp = Number(value.split('.')[1])
  if (!timestamp || Date.now() - timestamp > MAX_AGE_SECONDS * 1000) return false
  return true
}

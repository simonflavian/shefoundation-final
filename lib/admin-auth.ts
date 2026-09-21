import crypto from 'crypto'
import { cookies } from 'next/headers'
import { sql } from '@/lib/db'

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

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const candidate = crypto.scryptSync(password, salt, 64)
  const expected = Buffer.from(hash, 'hex')
  return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected)
}

export async function authenticateUser(email: string, password: string) {
  const rows = await sql`SELECT id, name, email, password_hash FROM admin_users WHERE lower(email) = lower(${email})`
  const user = rows[0]
  if (!user || !verifyPassword(password, user.password_hash)) return null
  return { id: user.id as number, name: user.name as string, email: user.email as string }
}

export async function createSession(userId: number) {
  const value = `admin.${userId}.${Date.now()}`
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

function readSessionValue(value: string) {
  const parts = value.split('.')
  if (parts.length !== 3 || parts[0] !== 'admin') return null
  const userId = Number(parts[1])
  const timestamp = Number(parts[2])
  if (!userId || !timestamp || Date.now() - timestamp > MAX_AGE_SECONDS * 1000) return null
  return { userId, timestamp }
}

export async function isAuthenticated() {
  const store = await cookies()
  const token = store.get(COOKIE_NAME)?.value
  if (!token) return false
  const value = verify(token)
  if (!value) return false
  return readSessionValue(value) !== null
}

export async function getSessionUserId() {
  const store = await cookies()
  const token = store.get(COOKIE_NAME)?.value
  if (!token) return null
  const value = verify(token)
  if (!value) return null
  return readSessionValue(value)?.userId ?? null
}

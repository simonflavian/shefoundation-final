import { NextRequest, NextResponse } from 'next/server'
import { hashPassword, isAuthenticated } from '@/lib/admin-auth'
import { sql } from '@/lib/db'

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const rows = await sql`SELECT id, name, email, created_at FROM admin_users ORDER BY created_at ASC`
  return NextResponse.json({ users: rows })
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json().catch(() => null)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Name, email, and password are required.' }, { status: 400 })
  }
  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  const existing = await sql`SELECT id FROM admin_users WHERE lower(email) = lower(${email})`
  if (existing.length > 0) {
    return NextResponse.json({ error: 'A user with that email already exists.' }, { status: 409 })
  }

  const rows = await sql`
    INSERT INTO admin_users (name, email, password_hash)
    VALUES (${name}, ${email}, ${hashPassword(password)})
    RETURNING id, name, email, created_at
  `
  return NextResponse.json({ user: rows[0] })
}

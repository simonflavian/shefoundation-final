import { NextRequest, NextResponse } from 'next/server'
import { authenticateUser, createSession } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (!body.email || !body.password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
  }

  const user = await authenticateUser(body.email, body.password)
  if (!user) {
    return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 })
  }

  await createSession(user.id)
  return NextResponse.json({ ok: true })
}

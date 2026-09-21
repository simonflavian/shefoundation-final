import { NextRequest, NextResponse } from 'next/server'
import { checkPassword, createSession } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (!body.password || !checkPassword(body.password)) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  await createSession()
  return NextResponse.json({ ok: true })
}

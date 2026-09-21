import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

const VALID_TYPES = ['volunteer', 'partner', 'contact'] as const
type SubmissionType = (typeof VALID_TYPES)[number]

function isValidType(value: unknown): value is SubmissionType {
  return typeof value === 'string' && (VALID_TYPES as readonly string[]).includes(value)
}

function clean(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const type = body.type
  const name = clean(body.name, 200)
  const email = clean(body.email, 200)
  const phone = clean(body.phone, 60) || null
  const message = clean(body.message, 5000)
  const extra = body.extra && typeof body.extra === 'object' ? body.extra : null

  if (!isValidType(type)) {
    return NextResponse.json({ error: 'Invalid submission type.' }, { status: 400 })
  }
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  try {
    await sql`
      INSERT INTO submissions (type, name, email, phone, message, extra)
      VALUES (${type}, ${name}, ${email}, ${phone}, ${message}, ${extra ? sql.json(extra as object) : null})
    `
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to save submission', error)
    return NextResponse.json({ error: 'Something went wrong saving your submission.' }, { status: 500 })
  }
}

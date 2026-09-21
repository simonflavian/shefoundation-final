import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/admin-auth'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const rows = await sql`SELECT * FROM posts WHERE id = ${id}`
  if (rows.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ post: rows[0] })
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await request.json().catch(() => null)
  if (!body || !body.title_en || !body.title_sw || !body.category) {
    return NextResponse.json({ error: 'Title (EN/SW) and category are required.' }, { status: 400 })
  }

  const rows = await sql`
    UPDATE posts SET
      category = ${body.category},
      title_en = ${body.title_en},
      title_sw = ${body.title_sw},
      excerpt_en = ${body.excerpt_en ?? ''},
      excerpt_sw = ${body.excerpt_sw ?? ''},
      body_en = ${body.body_en ?? ''},
      body_sw = ${body.body_sw ?? ''},
      image_url = ${body.image_url ?? null},
      published = ${body.published ?? true},
      published_at = ${body.published_at ?? new Date().toISOString()},
      updated_at = now()
    WHERE id = ${id}
    RETURNING *
  `
  if (rows.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ post: rows[0] })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  await sql`DELETE FROM posts WHERE id = ${id}`
  return NextResponse.json({ ok: true })
}

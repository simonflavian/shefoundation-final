import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/admin-auth'
import { sql } from '@/lib/db'

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80)
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const rows = await sql`SELECT * FROM posts ORDER BY published_at DESC`
  return NextResponse.json({ posts: rows })
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json().catch(() => null)
  if (!body || !body.title_en || !body.title_sw || !body.category) {
    return NextResponse.json({ error: 'Title (EN/SW) and category are required.' }, { status: 400 })
  }

  const baseSlug = slugify(body.title_en)
  let slug = baseSlug
  for (let attempt = 1; attempt < 20; attempt++) {
    const existing = await sql`SELECT id FROM posts WHERE slug = ${slug}`
    if (existing.length === 0) break
    slug = `${baseSlug}-${attempt + 1}`
  }

  const rows = await sql`
    INSERT INTO posts (slug, category, title_en, title_sw, excerpt_en, excerpt_sw, body_en, body_sw, image_url, published, published_at)
    VALUES (
      ${slug}, ${body.category}, ${body.title_en}, ${body.title_sw},
      ${body.excerpt_en ?? ''}, ${body.excerpt_sw ?? ''},
      ${body.body_en ?? ''}, ${body.body_sw ?? ''},
      ${body.image_url ?? null}, ${body.published ?? true},
      ${body.published_at ?? new Date().toISOString()}
    )
    RETURNING *
  `
  return NextResponse.json({ post: rows[0] })
}

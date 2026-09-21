import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/admin-auth'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const type = request.nextUrl.searchParams.get('type')
  const rows = type && type !== 'all'
    ? await sql`SELECT * FROM submissions WHERE type = ${type} ORDER BY created_at DESC`
    : await sql`SELECT * FROM submissions ORDER BY created_at DESC`

  return NextResponse.json({ submissions: rows })
}

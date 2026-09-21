import { NextRequest, NextResponse } from 'next/server'
import { getSessionUserId, isAuthenticated } from '@/lib/admin-auth'
import { sql } from '@/lib/db'

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const targetId = Number(id)

  const currentUserId = await getSessionUserId()
  if (currentUserId === targetId) {
    return NextResponse.json({ error: 'You cannot delete your own account while signed in.' }, { status: 400 })
  }

  const [{ count }] = await sql`SELECT count(*)::int AS count FROM admin_users`
  if (count <= 1) {
    return NextResponse.json({ error: 'Cannot delete the only remaining admin user.' }, { status: 400 })
  }

  await sql`DELETE FROM admin_users WHERE id = ${targetId}`
  return NextResponse.json({ ok: true })
}

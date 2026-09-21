import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { sql, type AdminUser } from '@/lib/db'
import { UsersTable } from '@/components/admin/users-table'

export const metadata: Metadata = { title: 'Users', robots: { index: false, follow: false } }
export const dynamic = 'force-dynamic'

export default async function UsersPage() {
  const users = (await sql`SELECT id, name, email, created_at FROM admin_users ORDER BY created_at ASC`) as unknown as AdminUser[]

  return (
    <div className="admin-page">
      <header className="admin-page-header admin-page-header-row">
        <div>
          <h1>Users</h1>
          <p>People who can sign in to this dashboard.</p>
        </div>
        <Link className="admin-button" href="/admin/users/new"><Plus size={16} /> Add user</Link>
      </header>
      <UsersTable users={users} />
    </div>
  )
}

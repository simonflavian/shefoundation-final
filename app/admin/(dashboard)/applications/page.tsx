import type { Metadata } from 'next'
import { sql, type Submission } from '@/lib/db'
import { ApplicationsTable } from '@/components/admin/applications-table'

export const metadata: Metadata = { title: 'Applications', robots: { index: false, follow: false } }
export const dynamic = 'force-dynamic'

export default async function ApplicationsPage() {
  const submissions = (await sql`SELECT * FROM submissions ORDER BY created_at DESC`) as unknown as Submission[]

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Applications</h1>
        <p>Volunteer applications, partnership inquiries, and contact messages submitted through the site.</p>
      </header>
      <ApplicationsTable submissions={submissions} />
    </div>
  )
}

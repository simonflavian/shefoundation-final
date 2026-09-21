import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/admin-auth'
import { AdminNav } from '@/components/admin/admin-nav'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthenticated())) {
    redirect('/admin/login')
  }

  return (
    <div className="admin-shell">
      <AdminNav />
      <main className="admin-main">{children}</main>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ClipboardList, LogOut, Newspaper } from 'lucide-react'

export function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="admin-nav">
      <div className="admin-nav-brand">SHE Foundation<span>Admin</span></div>
      <nav>
        <Link href="/admin/applications" className={pathname.startsWith('/admin/applications') ? 'active' : ''}>
          <ClipboardList size={17} /> Applications
        </Link>
        <Link href="/admin/posts" className={pathname.startsWith('/admin/posts') ? 'active' : ''}>
          <Newspaper size={17} /> News posts
        </Link>
      </nav>
      <button className="admin-nav-logout" onClick={logout}><LogOut size={16} /> Sign out</button>
    </aside>
  )
}

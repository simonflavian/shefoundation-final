'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import type { AdminUser } from '@/lib/db'

export function UsersTable({ users }: { users: AdminUser[] }) {
  const router = useRouter()
  const [busyId, setBusyId] = useState<number | null>(null)
  const [error, setError] = useState('')

  async function remove(id: number) {
    if (!confirm('Remove this user? They will no longer be able to sign in.')) return
    setBusyId(id)
    setError('')
    const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
    setBusyId(null)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error || 'Failed to remove user.')
      return
    }
    router.refresh()
  }

  if (users.length === 0) return <p className="admin-empty">No users yet.</p>

  return (
    <div>
      {error && <div className="admin-error">{error}</div>}
      <div className="admin-cards">
        {users.map((u) => (
          <article key={u.id} className="admin-card">
            <div className="admin-card-top">
              <span className="admin-date">Added {new Date(u.created_at).toLocaleDateString()}</span>
            </div>
            <h3>{u.name}</h3>
            <div className="admin-card-contact">
              <a href={`mailto:${u.email}`}>{u.email}</a>
            </div>
            <div className="admin-card-actions">
              <button className="admin-icon-btn" disabled={busyId === u.id} onClick={() => remove(u.id)} aria-label="Remove">
                <Trash2 size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

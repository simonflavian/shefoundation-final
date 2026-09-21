'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import type { Submission } from '@/lib/db'

const TYPE_LABELS: Record<string, string> = { volunteer: 'Volunteer', partner: 'Partner', contact: 'Contact' }
const FILTERS = ['all', 'volunteer', 'partner', 'contact']

export function ApplicationsTable({ submissions }: { submissions: Submission[] }) {
  const router = useRouter()
  const [filter, setFilter] = useState('all')
  const [busyId, setBusyId] = useState<number | null>(null)

  const filtered = useMemo(
    () => (filter === 'all' ? submissions : submissions.filter((s) => s.type === filter)),
    [submissions, filter],
  )

  async function updateStatus(id: number, status: string) {
    setBusyId(id)
    await fetch(`/api/admin/submissions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    setBusyId(null)
    router.refresh()
  }

  async function remove(id: number) {
    if (!confirm('Delete this submission permanently?')) return
    setBusyId(id)
    await fetch(`/api/admin/submissions/${id}`, { method: 'DELETE' })
    setBusyId(null)
    router.refresh()
  }

  return (
    <div>
      <div className="admin-filter-row">
        {FILTERS.map((f) => (
          <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
            {f === 'all' ? 'All' : TYPE_LABELS[f]}
            <span>{f === 'all' ? submissions.length : submissions.filter((s) => s.type === f).length}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && <p className="admin-empty">No submissions yet.</p>}

      <div className="admin-cards">
        {filtered.map((s) => (
          <article key={s.id} className={`admin-card admin-card-${s.status}`}>
            <div className="admin-card-top">
              <span className="admin-tag">{TYPE_LABELS[s.type]}</span>
              <span className="admin-date">{new Date(s.created_at).toLocaleString()}</span>
            </div>
            <h3>{s.name}</h3>
            <div className="admin-card-contact">
              <a href={`mailto:${s.email}`}>{s.email}</a>
              {s.phone && <a href={`tel:${s.phone}`}>{s.phone}</a>}
            </div>
            <p className="admin-card-message">{s.message}</p>
            {s.extra && Object.keys(s.extra).length > 0 && (
              <div className="admin-card-extra">
                {Object.entries(s.extra).map(([k, v]) => (
                  <span key={k}><strong>{k}:</strong> {String(v)}</span>
                ))}
              </div>
            )}
            <div className="admin-card-actions">
              <select value={s.status} disabled={busyId === s.id} onChange={(e) => updateStatus(s.id, e.target.value)}>
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="archived">Archived</option>
              </select>
              <button className="admin-icon-btn" disabled={busyId === s.id} onClick={() => remove(s.id)} aria-label="Delete">
                <Trash2 size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

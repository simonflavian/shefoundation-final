'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function UserForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Failed to add user.')
        return
      }
      router.push('/admin/users')
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      <div className="admin-form-grid">
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />
        <small>At least 8 characters. They can use this to sign in right away.</small>
      </label>

      {error && <div className="admin-error">{error}</div>}

      <div className="admin-form-actions">
        <button type="submit" disabled={saving}>{saving ? 'Adding…' : 'Add user'}</button>
      </div>
    </form>
  )
}

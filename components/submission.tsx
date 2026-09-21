'use client'

import { useState } from 'react'

type SubmissionType = 'volunteer' | 'partner' | 'contact'
type Status = 'idle' | 'loading' | 'success' | 'error'

export function useSubmission(type: SubmissionType) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function submit(data: { name: string; email: string; phone?: string; message: string; extra?: Record<string, unknown> }) {
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, ...data }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return false
      }
      setStatus('success')
      return true
    } catch {
      setError('Network error. Please check your connection and try again.')
      setStatus('error')
      return false
    }
  }

  return { status, error, submit, reset: () => setStatus('idle') }
}

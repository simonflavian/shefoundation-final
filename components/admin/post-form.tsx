'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Post } from '@/lib/db'

const CATEGORIES = ['Outreach', 'Advocacy', 'Education', 'Stories']

type FormState = {
  category: string
  title_en: string
  title_sw: string
  excerpt_en: string
  excerpt_sw: string
  body_en: string
  body_sw: string
  image_url: string
  published: boolean
}

function toFormState(post?: Post): FormState {
  return {
    category: post?.category ?? CATEGORIES[0],
    title_en: post?.title_en ?? '',
    title_sw: post?.title_sw ?? '',
    excerpt_en: post?.excerpt_en ?? '',
    excerpt_sw: post?.excerpt_sw ?? '',
    body_en: post?.body_en ?? '',
    body_sw: post?.body_sw ?? '',
    image_url: post?.image_url ?? '',
    published: post?.published ?? true,
  }
}

export function PostForm({ post }: { post?: Post }) {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(toFormState(post))
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const url = post ? `/api/admin/posts/${post.id}` : '/api/admin/posts'
    const method = post ? 'PUT' : 'POST'
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Failed to save post.')
        return
      }
      router.push('/admin/posts')
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
          Category
          <select value={form.category} onChange={(e) => set('category', e.target.value)}>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label className="admin-checkbox">
          <input type="checkbox" checked={form.published} onChange={(e) => set('published', e.target.checked)} />
          Published (visible on the public site)
        </label>
      </div>

      <div className="admin-form-grid">
        <label>
          Title (English)
          <input value={form.title_en} onChange={(e) => set('title_en', e.target.value)} required />
        </label>
        <label>
          Title (Swahili)
          <input value={form.title_sw} onChange={(e) => set('title_sw', e.target.value)} required />
        </label>
      </div>

      <div className="admin-form-grid">
        <label>
          Excerpt (English)
          <textarea rows={3} value={form.excerpt_en} onChange={(e) => set('excerpt_en', e.target.value)} />
        </label>
        <label>
          Excerpt (Swahili)
          <textarea rows={3} value={form.excerpt_sw} onChange={(e) => set('excerpt_sw', e.target.value)} />
        </label>
      </div>

      <div className="admin-form-grid">
        <label>
          Full story (English)
          <textarea rows={8} value={form.body_en} onChange={(e) => set('body_en', e.target.value)} />
        </label>
        <label>
          Full story (Swahili)
          <textarea rows={8} value={form.body_sw} onChange={(e) => set('body_sw', e.target.value)} />
        </label>
      </div>

      <label>
        Image path or URL
        <input
          value={form.image_url}
          onChange={(e) => set('image_url', e.target.value)}
          placeholder="/images/your-photo.webp or https://…"
        />
        <small>Use one of the images already in /public/images, or paste a full URL. There is no file uploader yet.</small>
      </label>

      {error && <div className="admin-error">{error}</div>}

      <div className="admin-form-actions">
        <button type="submit" disabled={saving}>{saving ? 'Saving…' : post ? 'Save changes' : 'Publish post'}</button>
      </div>
    </form>
  )
}

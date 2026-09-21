'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Pencil, Trash2 } from 'lucide-react'
import type { Post } from '@/lib/db'

export function PostsTable({ posts }: { posts: Post[] }) {
  const router = useRouter()
  const [busyId, setBusyId] = useState<number | null>(null)

  async function remove(id: number) {
    if (!confirm('Delete this post permanently?')) return
    setBusyId(id)
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })
    setBusyId(null)
    router.refresh()
  }

  if (posts.length === 0) return <p className="admin-empty">No posts yet. Create your first one.</p>

  return (
    <div className="admin-cards">
      {posts.map((post) => (
        <article key={post.id} className="admin-card">
          <div className="admin-card-top">
            <span className="admin-tag">{post.category}</span>
            <span className={post.published ? 'admin-status-live' : 'admin-status-draft'}>
              {post.published ? 'Published' : 'Draft'}
            </span>
          </div>
          <h3>{post.title_en}</h3>
          <p className="admin-card-message">{post.excerpt_en}</p>
          <div className="admin-card-actions">
            <Link className="admin-button admin-button-ghost" href={`/admin/posts/${post.id}`}>
              <Pencil size={14} /> Edit
            </Link>
            <button className="admin-icon-btn" disabled={busyId === post.id} onClick={() => remove(post.id)} aria-label="Delete">
              <Trash2 size={15} />
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

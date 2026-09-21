import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { sql, type Post } from '@/lib/db'
import { PostsTable } from '@/components/admin/posts-table'

export const metadata: Metadata = { title: 'News posts', robots: { index: false, follow: false } }
export const dynamic = 'force-dynamic'

export default async function PostsPage() {
  const posts = (await sql`SELECT * FROM posts ORDER BY published_at DESC`) as unknown as Post[]

  return (
    <div className="admin-page">
      <header className="admin-page-header admin-page-header-row">
        <div>
          <h1>News posts</h1>
          <p>What shows on the public News &amp; Insights page.</p>
        </div>
        <Link className="admin-button" href="/admin/posts/new"><Plus size={16} /> New post</Link>
      </header>
      <PostsTable posts={posts} />
    </div>
  )
}

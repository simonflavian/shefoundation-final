import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sql, type Post } from '@/lib/db'
import { PostForm } from '@/components/admin/post-form'

export const metadata: Metadata = { title: 'Edit post', robots: { index: false, follow: false } }
export const dynamic = 'force-dynamic'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const rows = (await sql`SELECT * FROM posts WHERE id = ${id}`) as unknown as Post[]
  const post = rows[0]
  if (!post) notFound()

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Edit post</h1>
        <p>{post.title_en}</p>
      </header>
      <PostForm post={post} />
    </div>
  )
}

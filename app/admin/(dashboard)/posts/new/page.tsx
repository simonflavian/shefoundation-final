import type { Metadata } from 'next'
import { PostForm } from '@/components/admin/post-form'

export const metadata: Metadata = { title: 'New post', robots: { index: false, follow: false } }

export default function NewPostPage() {
  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>New post</h1>
        <p>Fill in both languages — the site switches between them for visitors.</p>
      </header>
      <PostForm />
    </div>
  )
}

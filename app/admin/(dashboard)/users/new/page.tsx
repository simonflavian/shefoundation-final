import type { Metadata } from 'next'
import { UserForm } from '@/components/admin/user-form'

export const metadata: Metadata = { title: 'Add user', robots: { index: false, follow: false } }

export default function NewUserPage() {
  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Add user</h1>
        <p>They'll be able to sign in with this email and password right away.</p>
      </header>
      <UserForm />
    </div>
  )
}

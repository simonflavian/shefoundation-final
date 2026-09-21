import type { Metadata } from 'next'
import ContactContent from '@/components/pages/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact SHE Foundation Tanzania in Dar es Salaam to learn more, partner, volunteer, or support our mission.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <ContactContent />
}

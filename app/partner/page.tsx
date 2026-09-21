import type { Metadata } from 'next'
import PartnerContent from '@/components/pages/partner-content'

export const metadata: Metadata = {
  title: 'Become a Partner',
  description: 'Partner with SHE Foundation Tanzania to advance menstrual health and inclusive education — institutional, corporate, and knowledge partnerships.',
  alternates: { canonical: '/partner' },
}

export default function PartnerPage() {
  return <PartnerContent />
}

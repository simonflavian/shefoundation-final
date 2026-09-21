import type { Metadata } from 'next'
import DonateContent from '@/components/pages/donate-content'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support menstrual dignity, disability inclusion, and education for girls in Tanzania. Give directly via CRDB Bank — She Foundation.',
  alternates: { canonical: '/donate' },
}

export default function DonatePage() {
  return <DonateContent />
}

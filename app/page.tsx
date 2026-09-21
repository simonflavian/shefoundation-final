import type { Metadata } from 'next'
import HomeContent from '@/components/pages/home-content'

export const metadata: Metadata = {
  title: 'SHE Foundation Tanzania | Menstrual Health & Disability Inclusion',
  description: 'SHE Foundation Tanzania advances menstrual health, disability inclusion, and education for every girl — across Iringa, Njombe, Mbeya, Morogoro, and Songwe.',
  alternates: { canonical: '/' },
}

export default function Page() {
  return <HomeContent />
}

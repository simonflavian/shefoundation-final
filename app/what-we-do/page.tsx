import type { Metadata } from 'next'
import WhatWeDoContent from '@/components/pages/what-we-do-content'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Explore SHE Foundation programs in menstrual health, inclusive education, WASH, and disability inclusion across five regions of Tanzania.',
  alternates: { canonical: '/what-we-do' },
}

export default function WhatWeDoPage() {
  return <WhatWeDoContent />
}

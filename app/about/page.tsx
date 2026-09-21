import type { Metadata } from 'next'
import AboutContent from '@/components/pages/about-content'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SHE Foundation Tanzania — our founding story, vision, mission, core values, and the team advancing menstrual health and disability inclusion.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutContent />
}

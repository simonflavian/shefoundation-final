import type { Metadata } from 'next'
import VolunteerContent from '@/components/pages/volunteer-content'

export const metadata: Metadata = {
  title: 'Become a Volunteer',
  description: 'Volunteer your time, voice, and skills to support menstrual dignity and inclusive education for girls with disabilities in Tanzania.',
  alternates: { canonical: '/volunteer' },
}

export default function VolunteerPage() {
  return <VolunteerContent />
}

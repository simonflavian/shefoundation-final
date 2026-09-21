import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'
import { contactInfo } from '@/lib/content'

const siteUrl = 'https://www.shefoundation.or.tz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SHE Foundation Tanzania | Menstrual Health & Disability Inclusion',
    template: '%s | SHE Foundation Tanzania',
  },
  description: 'SHE Foundation Tanzania is a registered NGO promoting menstrual health and dignity for girls with disabilities — advancing access, education, and inclusion across Tanzania.',
  keywords: ['SHE Foundation Tanzania', 'menstrual health Tanzania', 'disability inclusion Tanzania', 'girls education Tanzania', 'menstrual hygiene NGO', 'donate Tanzania NGO', 'volunteer Tanzania'],
  generator: 'Next.js',
  applicationName: 'SHE Foundation Tanzania',
  authors: [{ name: 'SHE Foundation Tanzania' }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    url: siteUrl,
    siteName: 'SHE Foundation Tanzania',
    title: 'SHE Foundation Tanzania | Menstrual Health & Disability Inclusion',
    description: 'Promoting menstrual health and dignity for girls with disabilities across Tanzania — join us in building an inclusive future.',
    images: [{ url: '/images/wedo3.webp', width: 1280, height: 1280, alt: 'SHE Foundation Tanzania community outreach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHE Foundation Tanzania',
    description: 'Promoting menstrual health and dignity for girls with disabilities across Tanzania.',
    images: ['/images/wedo3.webp'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#d70d68',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'SHE Foundation Tanzania',
  alternateName: 'Social Impact, Health Care and Education Foundation',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.webp`,
  image: `${siteUrl}/images/wedo3.webp`,
  description: 'SHE Foundation Tanzania is a registered NGO promoting menstrual health and dignity for girls with disabilities.',
  foundingDate: '2023',
  areaServed: ['Iringa', 'Njombe', 'Mbeya', 'Morogoro', 'Songwe'],
  address: { '@type': 'PostalAddress', addressLocality: 'Dar es Salaam', addressCountry: 'TZ' },
  email: contactInfo.email,
  telephone: contactInfo.phone,
  sameAs: [contactInfo.instagram],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import NewsContent from '@/components/pages/news-content'
import { sql, type Post } from '@/lib/db'

export const metadata: Metadata = {
  title: 'News & Insights',
  description: 'Stories, field notes, and updates from SHE Foundation Tanzania on menstrual health, disability inclusion, and community outreach.',
  alternates: { canonical: '/news-and-insights' },
}

export const dynamic = 'force-dynamic'

export default async function NewsPage() {
  const posts = (await sql`
    SELECT * FROM posts WHERE published = true ORDER BY published_at DESC
  `) as unknown as Post[]

  return <NewsContent posts={posts} />
}

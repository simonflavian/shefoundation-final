'use client'

import { useMemo, useState } from 'react'
import Script from 'next/script'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { news, contactInfo, images } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { PageFrame } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { InstagramIcon } from '@/components/icons'
import type { Post } from '@/lib/db'

export default function NewsContent({ posts }: { posts: Post[] }) {
  const { lang } = useLanguage()
  const t = news[lang]
  const [active, setActive] = useState<'All' | string>('All')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)))
    return ['All', ...unique]
  }, [posts])

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <PageFrame eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image={images.newsHero}>
      <section className="stories-section">
        {categories.length > 1 && (
          <div className="news-filter">
            {categories.map((cat) => (
              <button key={cat} className={active === cat ? 'active' : ''} onClick={() => setActive(cat)}>{cat}</button>
            ))}
          </div>
        )}

        {filtered.length === 0 && <p className="admin-empty">No stories published yet — check back soon.</p>}

        <div className="stories-grid">
          {filtered.map((post, i) => (
            <Reveal key={post.id} delay={i * 100} variant="up" as="article" className="story-card">
              {post.image_url && <img src={post.image_url} alt="" />}
              <div className="story-body">
                <span>{post.category}</span>
                <h2>{lang === 'sw' ? post.title_sw : post.title_en}</h2>
                <p className="excerpt">{lang === 'sw' ? post.excerpt_sw : post.excerpt_en}</p>
                <p className="meta"><CalendarDays size={13} /> {new Date(post.published_at).toLocaleDateString(lang === 'sw' ? 'sw-TZ' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                <a href={contactInfo.instagram} target="_blank" rel="noreferrer">{t.readMore} <ArrowUpRight size={16} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="insta-feed-section">
        <Reveal variant="up">
          <div className="section-label">Live from Instagram</div>
          <h2 className="section-title-lg with-text">@shefoundation_tanzania</h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <div className="elfsight-app-a571458c-d383-40d7-8a78-94685d366c37" data-elfsight-app-lazy />
        </Reveal>
      </section>

      <Reveal variant="up" className="insta-band">
        <div>
          <h3>{t.followUs}</h3>
          <p>@shefoundation_tanzania</p>
        </div>
        <a className="button button-dark" href={contactInfo.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={17} /> Instagram</a>
      </Reveal>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </PageFrame>
  )
}

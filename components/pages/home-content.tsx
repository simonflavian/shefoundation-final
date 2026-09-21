'use client'

import { ArrowRight, Globe2, HeartHandshake, Sparkles, Users } from 'lucide-react'
import { home, images, regions as regionList, common } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { SiteHeader, SiteFooter, WhatsAppButton } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { HeroCarousel } from '@/components/carousel'
import { RadialDiagram, RegionChips, StatBlock, Timeline } from '@/components/diagrams'

const pillarIcons = [HeartHandshake, Sparkles, Users, Globe2]
const pillarImages = [images.access, images.awareness, images.empower, images.resources]
const heroSlides = [images.hero, images.dignityKit, images.heroAlt, images.partner]

export default function HomeContent() {
  const { lang } = useLanguage()
  const t = home[lang]
  const misc = common[lang].misc

  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero">
        <Reveal variant="left" className="hero-copy">
          <div className="eyebrow"><span />{t.hero.eyebrow}</div>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-pink" href="/donate">{t.hero.primary}<ArrowRight size={18} /></a>
            <a className="text-link" href="/what-we-do">{t.hero.secondary}<span>↗</span></a>
          </div>
          <div className="registration">{misc.registered}</div>
        </Reveal>
        <Reveal variant="scale" delay={150} className="hero-visual">
          <div className="hero-orb" />
          <HeroCarousel images={heroSlides} alt="SHE Foundation Tanzania community outreach" />
          <div className="hero-note"><strong>{t.hero.badgeNumber}</strong><span>{t.hero.badgeText}</span></div>
        </Reveal>
      </section>

      <section id="about" className="section-grid">
        <Reveal variant="up" className="section-label">01 <span>{t.founding.kicker}</span></Reveal>
        <Reveal variant="up" delay={80}>
          <h2>{t.founding.title}</h2>
          <p className="lead">{t.founding.text1}</p>
          <p className="lead">{t.founding.text2}</p>
          <a className="text-link" href="/about">{t.founding.link} <span>↗</span></a>
        </Reveal>
        <Reveal variant="up" delay={160} className="about-aside">
          <div className="big-number">{home[lang].hero.badgeNumber}</div>
          <span>{t.hero.badgeText}</span>
        </Reveal>
      </section>

      <div className="quote-strip">
        <Reveal variant="left">
          <blockquote>“{t.founding.quote}”</blockquote>
          <cite>{t.founding.quoteAuthor}</cite>
        </Reveal>
      </div>

      <section id="work" className="work-section">
        <div className="section-heading">
          <Reveal variant="up">
            <div className="section-label">02 <span>{t.pillars.kicker}</span></div>
            <h2>{t.pillars.title}</h2>
          </Reveal>
          <Reveal variant="up" delay={100}><p>{t.pillars.text}</p></Reveal>
        </div>
        <div className="pillar-grid">
          {t.pillars.items.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length]
            return (
              <Reveal key={pillar.title} delay={index * 90} variant="up" as="article" className="pillar-card">
                <div className="pillar-image"><img src={pillarImages[index % pillarImages.length]} alt="" /><span>0{index + 1}</span></div>
                <div className="pillar-meta"><Icon size={17} /><h3>{pillar.title}</h3></div>
                <p>{pillar.text}</p>
              </Reveal>
            )
          })}
        </div>
        <RegionChips regions={regionList} label={misc.regionsServed} />
      </section>

      <section className="radial-section">
        <div className="radial-section-inner">
          <Reveal variant="left">
            <div className="section-label">03 <span>At a glance</span></div>
            <h2>{t.pillars.title}</h2>
            <p className="lead">{t.pillars.text}</p>
          </Reveal>
          <RadialDiagram items={t.pillars.items.map((p) => ({ title: p.title, text: p.text }))} />
        </div>
      </section>

      <section className="work-section challenge">
        <div className="section-heading">
          <Reveal variant="up">
            <div className="section-label">04 <span>{t.challenge.kicker}</span></div>
            <h2>{t.challenge.title}</h2>
          </Reveal>
          <Reveal variant="up" delay={100}><p>{t.challenge.text}</p></Reveal>
        </div>
        <StatBlock stats={t.challenge.stats as any} />
      </section>

      <section className="timeline-section">
        <Reveal variant="up">
          <div className="section-label">05 <span>{t.journey.kicker}</span></div>
          <h2 style={{ marginBottom: 8 }}>{t.journey.title}</h2>
        </Reveal>
        <div className="timeline-layout">
          <Timeline items={t.journey.items as any} />
          <Reveal variant="right" delay={120} className="timeline-photo">
            <img src={images.dignityKit} alt="A dignity kit being shared with a girl in a wheelchair" />
          </Reveal>
        </div>
      </section>

      <section id="impact" className="impact">
        <div className="impact-image"><img src={images.partner} alt="SHE Foundation partnership and community work" /></div>
        <div className="impact-copy">
          <Reveal variant="right">
            <div className="section-label">06 <span>Our ambition</span></div>
            <h2>A more inclusive future starts here.</h2>
            <div className="impact-row"><strong>5</strong><span>regions already reached<br /><em>and growing every year</em></span></div>
            <div className="impact-row"><strong>01</strong><span>shared belief<br /><em>that no girl is left behind</em></span></div>
          </Reveal>
        </div>
      </section>

      <section id="partner" className="partner">
        <Reveal variant="left">
          <div className="section-label">07 <span>Get involved</span></div>
          <h2>{t.partner.title}</h2>
          <p>{t.partner.text}</p>
        </Reveal>
        <Reveal variant="right" delay={100}>
          <a className="button button-dark" href="/partner">{t.partner.button}<ArrowRight size={18} /></a>
        </Reveal>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  )
}

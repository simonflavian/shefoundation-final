'use client'

import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { about, images } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { ActionBand, PageFrame } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { Timeline, TeamTree } from '@/components/diagrams'

const valueIcons = [HeartHandshake, ShieldCheck, Sparkles]

export default function AboutContent() {
  const { lang } = useLanguage()
  const t = about[lang]

  return (
    <PageFrame eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image={images.aboutHero}>
      <section className="story-section">
        <Reveal variant="left" className="story-copy">
          <div className="section-label">{t.story.kicker}</div>
          <h2>{t.story.title}</h2>
          <p>{t.story.text1}</p>
          <p>{t.story.text2}</p>
        </Reveal>
        <Reveal variant="right" delay={120} className="quote-card">
          <span>“</span>
          <p>{t.story.quote}</p>
          <strong>SHE Foundation Tanzania</strong>
        </Reveal>
      </section>

      <div className="vm-grid">
        <Reveal variant="up" as="article" className="vm-card">
          <h3>{t.vision.title}</h3>
          <p>{t.vision.text}</p>
        </Reveal>
        <Reveal variant="up" delay={100} as="article" className="vm-card">
          <h3>{t.mission.title}</h3>
          <p>{t.mission.text}</p>
        </Reveal>
      </div>

      <section className="values-section">
        <Reveal variant="up"><div className="section-label">{t.values.kicker}</div><h2 className="section-title-lg">{t.values.title}</h2></Reveal>
        <div className="values-grid">
          {t.values.items.map((value, i) => {
            const Icon = valueIcons[i % valueIcons.length]
            return (
              <Reveal key={value.title} delay={i * 100} variant="up" as="article">
                <Icon size={26} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="timeline-section">
        <Reveal variant="up">
          <div className="section-label">{t.journey.kicker}</div>
          <h2 className="section-title-lg with-text">{t.journey.title}</h2>
        </Reveal>
        <div className="timeline-layout">
          <Timeline items={t.journey.items as any} />
          <Reveal variant="right" delay={120} className="timeline-photo">
            <img src={images.community} alt="SHE Foundation team working with the community" />
          </Reveal>
        </div>
      </section>

      <section className="team-section">
        <Reveal variant="up">
          <div className="section-label">{t.team.kicker}</div>
          <h2 className="section-title-lg with-text">{t.team.title}</h2>
          <p className="section-copy">{t.team.text}</p>
        </Reveal>
        <TeamTree members={t.team.members as any} />
      </section>

      <ActionBand title={t.action.title} text={t.action.text} href="/partner" label={t.action.label} />
    </PageFrame>
  )
}

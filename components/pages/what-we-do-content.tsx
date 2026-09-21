'use client'

import { ArrowUpRight, Accessibility, BookOpen, Droplets, HandHeart } from 'lucide-react'
import { whatWeDo, images, regions as regionList, common } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { ActionBand, PageFrame } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { RegionChips, StepFlow } from '@/components/diagrams'

const programIcons = [Droplets, Accessibility, BookOpen, HandHeart]

export default function WhatWeDoContent() {
  const { lang } = useLanguage()
  const t = whatWeDo[lang]
  const misc = common[lang].misc

  return (
    <PageFrame eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image={images.access}>
      <section className="programs-section">
        <div className="program-intro">
          <Reveal variant="up">
            <div className="section-label">{t.programs.kicker}</div>
            <h2>{t.programs.title}</h2>
          </Reveal>
          <Reveal variant="up" delay={100}><p>{t.programs.text}</p></Reveal>
        </div>
        <div className="program-grid">
          {t.programs.items.map((program, i) => {
            const Icon = programIcons[i % programIcons.length]
            return (
              <Reveal key={program.title} delay={i * 90} variant="up" as="article" className="program-card">
                <div className="program-image"><img src={program.image} alt="" /><span>0{i + 1}</span></div>
                <Icon className="program-icon" size={22} />
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </Reveal>
            )
          })}
        </div>
        <RegionChips regions={regionList} label={misc.regionsServed} />
      </section>

      <section className="impact">
        <div className="impact-image"><img src={images.inclusiveClassroom} alt="A girl using a wheelchair fully included in her classroom" /></div>
        <div className="impact-copy">
          <Reveal variant="right">
            <div className="section-label">In practice</div>
            <h2>Inclusion looks like this.</h2>
            <p style={{ color: '#d4f1f2', maxWidth: 420, lineHeight: 1.7, margin: 0 }}>Every dignity kit and every accessible classroom is designed so no girl has to choose between her education and her health.</p>
          </Reveal>
        </div>
      </section>

      <section className="diagram-section">
        <Reveal variant="left">
          <div className="section-label">{t.process.kicker}</div>
          <h2>{t.process.title}</h2>
          <p>{t.process.text}</p>
        </Reveal>
        <Reveal variant="right" delay={100}>
          <StepFlow steps={t.process.steps as any} />
        </Reveal>
      </section>

      <ActionBand title={t.action.title} text={t.action.text} href="/volunteer" label={t.action.label} />
    </PageFrame>
  )
}

'use client'

import { Heart, ShieldCheck, Sparkles } from 'lucide-react'
import { donate, bankDetails, images } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { PageFrame } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { StepFlow } from '@/components/diagrams'

const impactIcons = [Heart, ShieldCheck, Sparkles]

export default function DonateContent() {
  const { lang } = useLanguage()
  const t = donate[lang]

  return (
    <PageFrame eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image={images.dignityKit}>
      <section className="donate-section">
        <Reveal variant="left" className="donate-copy">
          <div className="section-label">{t.impact.kicker}</div>
          <h2>{t.impact.title}</h2>
          <p>{t.impact.text}</p>
          <div className="donate-icons">
            {t.impact.icons.map((icon, i) => {
              const Icon = impactIcons[i % impactIcons.length]
              return <span key={icon.title}><Icon size={22} /> {icon.title}</span>
            })}
          </div>
        </Reveal>
        <Reveal variant="right" delay={120} className="donate-photo">
          <img src={images.hero} alt="Girls supported by SHE Foundation Tanzania" />
        </Reveal>
      </section>

      <Reveal variant="up" as="div" id="bank-details" className="bank-card" style={{ scrollMarginTop: 110 }}>
        <h2>{t.bank.title}</h2>
        <div className="bank-grid">
          <div><span>Bank</span><strong>{bankDetails.bankName}</strong></div>
          <div><span>Account name</span><strong>{bankDetails.accountName}</strong></div>
          <div><span>Account number</span><strong>{bankDetails.accountNumber}</strong></div>
        </div>
        <small>{t.bank.note}</small>
      </Reveal>

      <section className="bank-steps">
        <Reveal variant="up"><div className="section-label">{t.steps.kicker}</div><h2 className="section-title-lg with-text">{t.steps.title}</h2></Reveal>
        <StepFlow steps={t.steps.items as any} />
      </section>

      <section className="donation-note">
        <Reveal variant="up"><div className="section-label">{t.note.kicker}</div><h2>{t.note.title}</h2></Reveal>
        <Reveal variant="up" delay={100}>
          <p>{t.note.text}</p>
          <a className="text-link" href="/contact">{t.note.link} <span>↗</span></a>
        </Reveal>
      </section>
    </PageFrame>
  )
}

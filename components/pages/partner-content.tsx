'use client'

import { useState } from 'react'
import { ArrowRight, Building2, CheckCircle2, Handshake, LineChart } from 'lucide-react'
import { partner, images } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { ActionBand, PageFrame } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { StepFlow } from '@/components/diagrams'
import { useSubmission } from '@/components/submission'

const typeIcons = [Building2, Handshake, LineChart]

export default function PartnerContent() {
  const { lang } = useLanguage()
  const t = partner[lang]
  const { status, error, submit } = useSubmission('partner')
  const [form, setForm] = useState({ name: '', organization: '', email: '', phone: '', type: t.types.items[0]?.title ?? '', message: '' })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = await submit({
      name: form.organization ? `${form.name} (${form.organization})` : form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      extra: { organization: form.organization, partnershipType: form.type },
    })
    if (ok) setForm({ name: '', organization: '', email: '', phone: '', type: t.types.items[0]?.title ?? '', message: '' })
  }

  return (
    <PageFrame eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image={images.community}>
      <section className="partner-intro">
        <Reveal variant="left">
          <div className="section-label">{t.why.kicker}</div>
          <h2>{t.why.title}</h2>
        </Reveal>
        <Reveal variant="right" delay={100} className="partner-points">
          {t.why.points.map((point) => (
            <p key={point.n}><strong>{point.n}</strong> {point.text}</p>
          ))}
        </Reveal>
      </section>

      <section className="partner-types">
        <Reveal variant="up"><div className="section-label">{t.types.kicker}</div><h2 className="section-title-lg">{t.types.title}</h2></Reveal>
        <div className="role-grid">
          {t.types.items.map((type, i) => {
            const Icon = typeIcons[i % typeIcons.length]
            return (
              <Reveal key={type.title} delay={i * 100} variant="up" as="article">
                <Icon size={24} />
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="diagram-section">
        <Reveal variant="left">
          <div className="section-label">{t.steps.kicker}</div>
          <h2>{t.steps.title}</h2>
        </Reveal>
        <Reveal variant="right" delay={100}>
          <StepFlow steps={t.steps.items as any} />
        </Reveal>
      </section>

      <section id="partner-form" className="contact-section" style={{ scrollMarginTop: 110 }}>
        <Reveal variant="left" className="contact-details">
          <div className="section-label">Get in touch</div>
          <h2>Tell us about your organisation.</h2>
          <p>Share a few details and the type of partnership you have in mind — we'll follow up to plan next steps together.</p>
        </Reveal>
        <Reveal variant="right" delay={120}>
          {status === 'success' ? (
            <div className="form-success"><CheckCircle2 size={28} /><h3>Thank you!</h3><p>Your partnership inquiry has been received. We'll be in touch soon.</p></div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <label>Contact name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" /></label>
              <label>Organisation<input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder="Company or organisation name" /></label>
              <label>Email<input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" required placeholder="you@example.com" /></label>
              <label>Phone (optional)<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+255…" /></label>
              <label>Type of partnership
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {t.types.items.map((type) => <option key={type.title} value={type.title}>{type.title}</option>)}
                </select>
              </label>
              <label>What would you like to achieve together?<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="Tell us a little more…" /></label>
              {error && <div className="form-error">{error}</div>}
              <button className="button button-pink" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send inquiry'} <ArrowRight size={17} />
              </button>
            </form>
          )}
        </Reveal>
      </section>

      <ActionBand title={t.action.title} text={t.action.text} href="#partner-form" label={t.action.label} />
    </PageFrame>
  )
}

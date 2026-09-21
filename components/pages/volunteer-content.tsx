'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Heart, Megaphone, Users } from 'lucide-react'
import { volunteer, images } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { ActionBand, PageFrame } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { StepFlow } from '@/components/diagrams'
import { useSubmission } from '@/components/submission'

const roleIcons = [Heart, Megaphone, Users]

export default function VolunteerContent() {
  const { lang } = useLanguage()
  const t = volunteer[lang]
  const { status, error, submit } = useSubmission('volunteer')
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: t.roles.items[0]?.title ?? '', message: '' })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = await submit({ ...form, extra: { roleInterest: form.role } })
    if (ok) setForm({ name: '', email: '', phone: '', role: t.roles.items[0]?.title ?? '', message: '' })
  }

  return (
    <PageFrame eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image={images.volunteers}>
      <section className="involvement-section">
        <Reveal variant="left" className="involvement-copy">
          <div className="section-label">{t.why.kicker}</div>
          <h2>{t.why.title}</h2>
          <p>{t.why.text}</p>
          <div className="check-list">
            {t.why.checks.map((check) => (
              <span key={check}><CheckCircle2 size={17} /> {check}</span>
            ))}
          </div>
        </Reveal>
        <Reveal variant="right" delay={120} id="volunteer-form" className="volunteer-card" style={{ scrollMarginTop: 110 }}>
          <Users size={30} />
          <h3>{t.card.title}</h3>
          <p>{t.card.text}</p>
          {status === 'success' ? (
            <div className="form-success"><CheckCircle2 size={26} /><h3>Thank you!</h3><p>We received your application and will be in touch soon.</p></div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" /></label>
              <label>Email<input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" required placeholder="you@example.com" /></label>
              <label>Phone (optional)<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+255…" /></label>
              <label>Which role interests you?
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                  {t.roles.items.map((r) => <option key={r.title} value={r.title}>{r.title}</option>)}
                </select>
              </label>
              <label>Tell us about yourself<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="What draws you to this work?" /></label>
              {error && <div className="form-error">{error}</div>}
              <button className="button button-pink" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : t.card.button} <ArrowRight size={17} />
              </button>
            </form>
          )}
        </Reveal>
      </section>

      <section className="roles-section">
        <Reveal variant="up"><div className="section-label">{t.roles.kicker}</div><h2 className="section-title-lg">{t.roles.title}</h2></Reveal>
        <div className="role-grid">
          {t.roles.items.map((role, i) => {
            const Icon = roleIcons[i % roleIcons.length]
            return (
              <Reveal key={role.title} delay={i * 100} variant="up" as="article">
                <Icon size={24} />
                <h3>{role.title}</h3>
                <p>{role.text}</p>
                <div className="role-meta">
                  <span>{role.hours}</span>
                  <span>{role.where}</span>
                </div>
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

      <ActionBand title={t.action.title} text={t.action.text} href="#volunteer-form" label={t.action.label} />
    </PageFrame>
  )
}

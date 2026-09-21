'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { contact, contactInfo } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { PageFrame } from '@/components/site-shell'
import { Reveal } from '@/components/motion'
import { StepFlow } from '@/components/diagrams'
import { useSubmission } from '@/components/submission'

export default function ContactContent() {
  const { lang } = useLanguage()
  const t = contact[lang]
  const { status, error, submit } = useSubmission('contact')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = await submit(form)
    if (ok) setForm({ name: '', email: '', message: '' })
  }

  return (
    <PageFrame eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro}>
      <section className="contact-section">
        <Reveal variant="left" className="contact-details">
          <div className="section-label">{t.details.kicker}</div>
          <h2>{t.details.title}</h2>
          <div className="contact-row"><Mail /><span>{t.details.emailLabel}<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></span></div>
          <div className="contact-row"><Phone /><span>{t.details.phoneLabel}<a href={contactInfo.phoneHref}>{contactInfo.phone}</a></span></div>
          <div className="contact-row"><Clock /><span>{t.details.hoursLabel}<strong>{contactInfo.hours}</strong></span></div>
          <div className="contact-row"><MapPin /><span>{t.details.locationLabel}<strong>{contactInfo.location}</strong></span></div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          {status === 'success' ? (
            <div className="form-success"><CheckCircle2 size={28} /><h3>Thank you!</h3><p>Your message has been received. We'll get back to you soon.</p></div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <label>{t.form.name}<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder={t.form.namePh} /></label>
              <label>{t.form.email}<input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" required placeholder={t.form.emailPh} /></label>
              <label>{t.form.message}<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder={t.form.messagePh} rows={5} /></label>
              {error && <div className="form-error">{error}</div>}
              <button className="button button-pink" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : t.form.submit} <ArrowRight size={17} />
              </button>
            </form>
          )}
        </Reveal>
      </section>

      <section className="contact-next">
        <Reveal variant="up"><div className="section-label">{t.next.kicker}</div><h2 className="section-title-lg with-text">{t.next.title}</h2></Reveal>
        <StepFlow steps={t.next.items as any} />
      </section>

      <div className="map-strip">
        <iframe title={t.map.title} src="https://maps.google.com/maps?q=Dar%20es%20Salaam%2C%20Tanzania&t=&z=11&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </PageFrame>
  )
}

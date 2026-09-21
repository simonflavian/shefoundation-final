'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Mail,
  Menu,
  Phone,
  Search,
  X,
} from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { common, contactInfo, images, searchIndex } from '@/lib/content'
import { useLanguage } from '@/lib/language-context'
import { Reveal } from '@/components/motion'

export { images }

const navRoutes: Record<string, string> = {
  about: '/about',
  work: '/what-we-do',
  volunteer: '/volunteer',
  partner: '/partner',
  news: '/news-and-insights',
  contact: '/contact',
}

function useOutsideClose(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onClose])
  return ref
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage()
  const t = common[lang].topbar
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const results = searchIndex.filter((item) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return item.label[lang].toLowerCase().includes(q) || item.keywords.includes(q) || item.keywords.split(' ').some((k) => k.startsWith(q))
  })

  return (
    <div className="search-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="search-box">
        <div className="search-box-input">
          <Search size={18} />
          <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} />
          <button className="search-box-close" onClick={onClose} aria-label="Close search"><X size={20} /></button>
        </div>
        <div className="search-results">
          {results.length === 0 && <div className="search-empty">{t.searchEmpty}</div>}
          {results.map((item) => (
            <a key={item.href} href={item.href} onClick={onClose}>
              {item.label[lang]} <ArrowRight size={15} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const { lang, setLang } = useLanguage()
  const c = common[lang]
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const dropRef = useOutsideClose(() => setDropOpen(false))
  const langRef = useOutsideClose(() => setLangOpen(false))

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-links">
          <a href={contactInfo.phoneHref}><Phone size={13} /> {contactInfo.phone}</a>
          <a href={`mailto:${contactInfo.email}`}><Mail size={13} /> {contactInfo.email}</a>
        </div>
        <div className="top-bar-actions">
          <button className="top-bar-icon-btn" aria-label={c.topbar.search} onClick={() => setSearchOpen(true)}>
            <Search size={14} />
          </button>
          <div className="lang-switch" ref={langRef}>
            <button className="lang-switch-btn" onClick={() => setLangOpen((v) => !v)} aria-haspopup="true" aria-expanded={langOpen}>
              <Globe2 size={13} /> {lang.toUpperCase()} <ChevronDown size={12} />
            </button>
            {langOpen && (
              <div className="lang-switch-menu">
                <button className={lang === 'en' ? 'active' : ''} onClick={() => { setLang('en'); setLangOpen(false) }}>English <span>EN</span></button>
                <button className={lang === 'sw' ? 'active' : ''} onClick={() => { setLang('sw'); setLangOpen(false) }}>Kiswahili <span>SW</span></button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="site-header">
        <nav className="main-nav">
          <a className="brand" href="/" aria-label="SHE Foundation home">
            <img src={images.logo} alt="SHE Foundation Tanzania logo" />
          </a>
          <div className="nav-links">
            <a href="/" className={isActive('/') && pathname === '/' ? 'active' : ''}>{c.nav.home}</a>
            <a href="/about" className={isActive('/about') ? 'active' : ''}>{c.nav.about}</a>
            <a href="/what-we-do" className={isActive('/what-we-do') ? 'active' : ''}>{c.nav.work}</a>
            <div className={`nav-item${dropOpen ? ' open' : ''}`} ref={dropRef}>
              <button className={`nav-item-trigger${isActive('/volunteer') || isActive('/partner') ? ' active' : ''}`} onClick={() => setDropOpen((v) => !v)} aria-haspopup="true" aria-expanded={dropOpen}>
                {c.nav.involved} <ChevronDown size={13} />
              </button>
              <div className="nav-dropdown">
                <a href="/volunteer">{c.nav.volunteer}</a>
                <a href="/partner">{c.nav.partner}</a>
              </div>
            </div>
            <a href="/news-and-insights" className={isActive('/news-and-insights') ? 'active' : ''}>{c.nav.news}</a>
            <a href="/contact" className={isActive('/contact') ? 'active' : ''}>{c.nav.contact}</a>
          </div>
          <a className="header-cta" href="/donate">{c.nav.donate} <ArrowRight size={16} /></a>
          <button className="mobile-menu" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <div className={`mobile-panel${mobileOpen ? ' open' : ''}`}>
          <a href="/">{c.nav.home}</a>
          <a href="/about">{c.nav.about}</a>
          <a href="/what-we-do">{c.nav.work}</a>
          <a href="/volunteer">{c.nav.volunteer}</a>
          <a href="/partner">{c.nav.partner}</a>
          <a href="/news-and-insights">{c.nav.news}</a>
          <a href="/contact">{c.nav.contact}</a>
          <div className="mobile-lang">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>English</button>
            <button className={lang === 'sw' ? 'active' : ''} onClick={() => setLang('sw')}>Kiswahili</button>
          </div>
          <div className="mobile-panel-cta">
            <a className="header-cta" href="/donate">{c.nav.donate} <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  )
}

export function SiteFooter() {
  const { lang } = useLanguage()
  const c = common[lang]
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img src={images.logo} alt="SHE Foundation Tanzania logo" />
          <p>{c.footer.tagline}</p>
          <div className="footer-social">
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={16} /></a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={16} /></a>
            <a href={`mailto:${contactInfo.email}`} aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
        <div className="footer-col">
          <h3>{c.footer.connect}</h3>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
          <a href={contactInfo.phone2Href}>{contactInfo.phone2}</a>
          <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div className="footer-col">
          <h3>{c.footer.explore}</h3>
          <a href="/about">{c.nav.about}</a>
          <a href="/what-we-do">{c.nav.work}</a>
          <a href="/news-and-insights">{c.nav.news}</a>
          <a href="/volunteer">{c.nav.volunteer}</a>
          <a href="/partner">{c.nav.partner}</a>
          <a href="/donate">{c.nav.donate}</a>
        </div>
        <div className="footer-col footer-newsletter">
          <h3>{c.footer.newsletterTitle}</h3>
          <p>{c.footer.newsletterText}</p>
          <form action={`mailto:${contactInfo.email}`} method="post" encType="text/plain" onSubmit={(e) => e.stopPropagation()}>
            <input type="email" name="email" required placeholder={c.footer.newsletterPlaceholder} />
            <button type="submit">{c.footer.newsletterButton}</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {c.footer.rights}</span>
        <a href="/admin/login">Staff Login</a>
        <a href="https://www.techiq.co.tz/" target="_blank" rel="noreferrer">{c.footer.credit}</a>
      </div>
    </footer>
  )
}

export function WhatsAppButton() {
  const { lang } = useLanguage()
  const c = common[lang].whatsapp
  return (
    <a className="whatsapp" href={contactInfo.whatsapp} target="_blank" rel="noreferrer" aria-label={c.aria}>
      <span className="whatsapp-tip">{c.tooltip}</span>
      <WhatsAppIcon size={30} />
    </a>
  )
}

export function PageFrame({ children, eyebrow, title, intro, image }: { children: React.ReactNode; eyebrow: string; title: string; intro: string; image?: string }) {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <Reveal variant="up">
          <div className="eyebrow"><span />{eyebrow}</div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </Reveal>
        <div className="inner-hero-shape">
          {image && <img src={image} alt="" />}
        </div>
      </section>
      {children}
      <SiteFooter />
      <WhatsAppButton />
    </main>
  )
}

export function ActionBand({ title, text, href = '/donate', label = 'Support our mission' }: { title: string; text: string; href?: string; label?: string }) {
  return (
    <section className="action-band">
      <Reveal variant="left">
        <div className="section-label">Make a difference</div>
        <h2>{title}</h2>
        <p>{text}</p>
      </Reveal>
      <Reveal variant="right" delay={100}>
        <a className="button button-dark" href={href}>{label}<ArrowRight size={18} /></a>
      </Reveal>
    </section>
  )
}

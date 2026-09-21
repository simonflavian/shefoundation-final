'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Lang } from '@/lib/content'

type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void; toggle: () => void }

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem('she-lang')
    if (stored === 'en' || stored === 'sw') setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem('she-lang', next)
    } catch {}
  }

  const value = useMemo(() => ({ lang, setLang, toggle: () => setLang(lang === 'en' ? 'sw' : 'en') }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

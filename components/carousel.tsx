'use client'

import { useEffect, useRef, useState } from 'react'

export function HeroCarousel({ images, alt, interval = 4500 }: { images: string[]; alt: string; interval?: number }) {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function goTo(next: number) {
    if (next === current) return
    setFading(true)
    timeoutRef.current = setTimeout(() => {
      setCurrent(next)
      setFading(false)
    }, 320)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => {
        const next = (i + 1) % images.length
        goTo(next)
        return i
      })
    }, interval)
    return () => {
      clearInterval(id)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, interval])

  return (
    <div className="hero-carousel">
      <img src={images[current]} alt={alt} className={fading ? 'fading' : ''} />
      <div className="hero-carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={i === current ? 'active' : ''}
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV = [
  { id: 'about',        label: 'About'      },
  { id: 'skills',       label: 'Skills'     },
  { id: 'experience',   label: 'Experience' },
  { id: 'what-i-built', label: 'Projects'   },
  { id: 'metrics',      label: 'Metrics'    },
  { id: 'contact',      label: 'Contact'    },
]

export default function NavHeader() {
  const [active,   setActive]   = useState('about')
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const fn = () => setElevated(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <header className={`sticky top-0 z-40 bg-white border-b border-border transition-shadow duration-200 ${elevated ? 'shadow-sm' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <button
          onClick={() => scrollTo('about')}
          className="font-mono text-sm font-semibold text-slate-900 hover:text-violet transition-colors"
        >
          rajat<span className="text-violet">.</span>rout
        </button>

        <nav className="flex overflow-x-auto">
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-3.5 h-14 text-sm whitespace-nowrap transition-colors duration-150 ${
                active === id ? 'text-violet font-medium' : 'text-muted hover:text-slate-700'
              }`}
            >
              {label}
              {active === id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-violet"
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

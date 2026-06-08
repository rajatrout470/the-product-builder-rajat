'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [menuOpen, setMenuOpen] = useState(false)

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

  useEffect(() => {
    if (!menuOpen) return
    const fn = () => setMenuOpen(false)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
  }

  const openTerminal = () => {
    window.dispatchEvent(new CustomEvent('open-terminal'))
  }

  return (
    <>
      <header className={`sticky top-0 z-40 bg-white border-b border-border transition-shadow duration-200 ${elevated ? 'shadow-sm' : ''}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 gap-2">
          {/* Brand */}
          <button
            onClick={() => scrollTo('about')}
            className="font-mono text-sm font-semibold text-slate-900 hover:text-violet transition-colors shrink-0"
          >
            rajat<span className="text-violet">.</span>rout
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 justify-end">
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-3 h-14 text-sm whitespace-nowrap transition-colors duration-150 ${
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

          {/* Terminal button — always visible */}
          <button
            onClick={openTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-muted hover:text-violet hover:border-violet/40 transition-colors font-mono text-xs shrink-0"
          >
            <span><span className="text-violet">{'>'}</span>_</span>
            <span className="hidden sm:inline text-[10px] text-dim">` or Ctrl+K</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 shrink-0"
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }} className="block w-5 h-px bg-slate-800 origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 }         : { opacity: 1 }}      className="block w-5 h-px bg-slate-800" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-slate-800 origin-center" />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/10"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="fixed top-14 left-0 right-0 z-30 bg-white border-b border-border shadow-md md:hidden"
            >
              {NAV.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center justify-between w-full px-6 py-3.5 text-sm border-b border-border last:border-0 transition-colors ${
                    active === id ? 'text-violet font-medium' : 'text-slate-700'
                  }`}
                >
                  <span>{label}</span>
                  {active === id && <span className="w-1.5 h-1.5 rounded-full bg-violet" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Hero        from '@/components/Hero'
import NavHeader   from '@/components/NavTabs'
import About       from '@/components/sections/About'
import AIAgents    from '@/components/sections/AIAgents'
import Skills      from '@/components/sections/Skills'
import Experience  from '@/components/sections/Experience'
import Freelance   from '@/components/sections/Freelance'
import Projects    from '@/components/sections/Projects'
import Metrics     from '@/components/sections/Metrics'
import Contact     from '@/components/sections/Contact'
import Terminal    from '@/components/Terminal'
import CursorEffect from '@/components/CursorEffect'

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 border-t border-border scroll-mt-14">
      {children}
    </section>
  )
}

export default function Home() {
  const [explored, setExplored] = useState(false)

  const explore = useCallback((target = 'about') => {
    setExplored(true)
    // wait for the sections to mount before scrolling to them
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }, [])

  const collapse = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // let the scroll finish before the sections fade out
    setTimeout(() => setExplored(false), 350)
  }, [])

  const toggle = useCallback(() => {
    explored ? collapse() : explore()
  }, [explored, collapse, explore])

  // Deep links like /#contact skip the intro
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) explore(hash)
  }, [explore])

  return (
    <main className="min-h-screen bg-bg">
      <AnimatePresence>
        {explored && (
          <motion.div
            key="nav"
            initial={{ y: -56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -56, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="sticky top-0 z-40"
          >
            <NavHeader />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div id="hero" className="scroll-mt-14">
          <Hero explored={explored} onExplore={explore} onToggle={toggle} />
        </div>

        <AnimatePresence>
        {explored && (
        <motion.div
          key="sections"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40, transition: { duration: 0.25 } }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >

        <Section id="about">       <About />      </Section>
        <Section id="ai-agents">   <AIAgents />   </Section>
        <Section id="experience">  <Experience /> </Section>
        <Section id="freelance">   <Freelance />  </Section>
        <Section id="what-i-built"><Projects />   </Section>
        <Section id="skills">      <Skills />     </Section>
        <Section id="metrics">     <Metrics />    </Section>
        <Section id="contact">     <Contact />    </Section>
        </motion.div>
        )}
        </AnimatePresence>
      </div>

      {explored && (
      <>

      {/* Footer */}
      <footer className="border-t border-border mt-4 py-8 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted">© {new Date().getFullYear()} Rajat Kumar Rout</span>
          <span className="font-mono text-xs text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            available for hire
          </span>
        </div>
      </footer>

      {/* Resume download */}
      <a
        href="/resume"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-surface text-slate-700 dark:text-slate-300 text-sm font-medium shadow-card hover:shadow-card-hover hover:border-violet/40 hover:text-violet transition-all duration-200"
      >
        <span className="font-mono text-xs">↓</span>
        <span>Resume</span>
      </a>
      </>
      )}

      <Terminal />
      <CursorEffect />
    </main>
  )
}

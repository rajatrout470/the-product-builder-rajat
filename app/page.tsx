'use client'

import Hero        from '@/components/Hero'
import NavHeader   from '@/components/NavTabs'
import About       from '@/components/sections/About'
import Skills      from '@/components/sections/Skills'
import Experience  from '@/components/sections/Experience'
import Projects    from '@/components/sections/Projects'
import Metrics     from '@/components/sections/Metrics'
import Contact     from '@/components/sections/Contact'
import Terminal    from '@/components/Terminal'

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 border-t border-border scroll-mt-14">
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <NavHeader />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div id="hero" className="scroll-mt-14">
          <Hero />
        </div>

        <Section id="about">       <About />      </Section>
        <Section id="skills">      <Skills />     </Section>
        <Section id="experience">  <Experience /> </Section>
        <Section id="what-i-built"><Projects />   </Section>
        <Section id="metrics">     <Metrics />    </Section>
        <Section id="contact">     <Contact />    </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-4 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted">© 2025 Rajat Kumar Rout</span>
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
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-white text-slate-700 text-sm font-medium shadow-card hover:shadow-card-hover hover:border-violet/40 hover:text-violet transition-all duration-200"
      >
        <span className="font-mono text-xs">↓</span>
        <span>Resume</span>
      </a>

      <Terminal />
    </main>
  )
}

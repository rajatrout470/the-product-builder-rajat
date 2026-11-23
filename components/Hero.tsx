'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { SoundToggle } from './ClickSound'

const tagline = 'backend_engineer.service — shipping LLM agents since 2024'

const badges = [
  { label: '● available for hire', cls: 'text-violet border-violet/30 bg-violet/5' },
  { label: '4 yrs production',     cls: 'text-slate-600 dark:text-slate-300 border-border bg-surface' },
  { label: 'Bengaluru, IN',        cls: 'text-slate-600 dark:text-slate-300 border-border bg-surface' },
  { label: 'NestJS · AWS · Kafka · LLMs', cls: 'text-slate-600 dark:text-slate-300 border-border bg-surface' },
]

const stats = [
  { value: '4',   label: 'years backend' },
  { value: '3',   label: 'AI systems shipped' },
  { value: '98%', label: 'loans auto-processed' },
  { value: '40%', label: 'faster delivery w/ AI tools' },
]

export default function Hero({ explored, onExplore, onToggle }: {
  explored:  boolean
  onExplore: (target?: string) => void
  onToggle:  () => void
}) {
  const [typed, setTyped] = useState('')
  const [done,  setDone]  = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(tagline.slice(0, ++i))
      if (i >= tagline.length) { clearInterval(t); setDone(true) }
    }, 32)
    return () => clearInterval(t)
  }, [])

  return (
    <div className={`relative flex flex-col justify-center ${explored ? 'pt-16 pb-20' : 'min-h-[100svh] py-16'}`}>
      {!explored && (
        <div className="absolute top-5 right-0 z-10 flex items-center gap-2">
          <SoundToggle />
          <ThemeToggle />
        </div>
      )}
      <div className="hero-backdrop -mx-4 sm:-mx-6" />
      <div className="hero-glow -top-24 -left-24" />

      <div className="relative">
        {/* Typed line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 font-mono text-xs text-muted mb-8 min-h-[1rem]"
        >
          <span className="text-violet select-none">$</span>
          <span className="truncate">{typed}</span>
          {!done && <span className="cursor" />}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display font-extrabold text-4xl sm:text-6xl leading-[1.1] text-slate-900 dark:text-slate-100 mb-5"
        >
          Rajat Kumar Rout
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-lg sm:text-2xl font-medium leading-snug text-slate-700 dark:text-slate-300 mb-4 max-w-2xl"
        >
          Backend engineer building <span className="text-gradient font-semibold">AI agents</span> and the
          distributed systems behind them.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl"
        >
          Founding Product Engineer at FlyWl — multi-LLM chatbots with MCP tool calling, SSE streaming and
          LLM evals, on top of NestJS microservices, Kafka, ElasticSearch and AWS.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <motion.button
            onClick={onToggle}
            aria-pressed={explored}
            aria-expanded={explored}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
              explored
                ? 'border border-violet/40 bg-violet/10 text-violet'
                : 'bg-violet text-white shadow-lg shadow-violet/30'
            }`}
          >
            {!explored && (
              <span className="absolute inset-0 rounded-lg bg-violet animate-ping opacity-20" aria-hidden />
            )}
            <span className="relative">{explored ? 'Show less' : 'Explore me'}</span>
            <motion.span
              aria-hidden
              className="relative inline-block"
              animate={{ rotate: explored ? 180 : 0, y: explored ? 0 : [0, 3, 0] }}
              transition={explored ? { duration: 0.3 } : { y: { repeat: Infinity, duration: 1.4, ease: 'easeInOut' }, rotate: { duration: 0.3 } }}
            >
              ↓
            </motion.span>
          </motion.button>
          <a
            href="/resume"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-violet/40 hover:text-violet transition-colors"
          >
            Resume <span aria-hidden className="font-mono text-xs">↓</span>
          </a>
          <button
            onClick={() => onExplore('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-violet transition-colors"
          >
            Get in touch
          </button>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {badges.map((b, i) => (
            <motion.span
              key={b.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.07 }}
              className={`badge ${b.cls}`}
            >
              {b.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl border border-border bg-border shadow-card overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-4 sm:p-5">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

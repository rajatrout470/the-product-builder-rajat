'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    label: 'Current Mission',
    body:  'Building resilient backend systems at FlyWl — from search engines to credit ledgers to notification pipelines. Owning the full lifecycle from design to production.',
  },
  {
    label: 'Core Philosophy',
    body:  "Systems should be observable, reversible, and boring in production. Great engineering is mostly invisible — it handles the edge cases you hadn't thought of yet.",
  },
  {
    label: 'How I Work',
    body:  'I use Cursor AI and ChatGPT as force multipliers, not crutches. Prototype fast, measure with data, iterate. Cut feature delivery time by ~40% this way.',
  },
  {
    label: 'Beyond Code',
    body:  "Deeply interested in product strategy, fintech infra, and AI-native tooling. I work best where backend engineers have a real voice in product decisions.",
  },
]

const fade = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.45 } },
}

export default function About() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-10"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">01 — about</p>
        <h2 className="font-display font-bold text-3xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
          Who I Am
        </h2>
      </motion.div>

      {/* Terminal — intentionally dark */}
      <motion.div variants={fade} className="rounded-xl overflow-hidden border border-[#30363d] shadow-md">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">bash — rajat@dev</span>
        </div>
        <div className="bg-[#0d1117] p-5 font-mono text-sm space-y-1.5">
          <div className="flex gap-2">
            <span className="text-emerald-400 select-none">❯</span>
            <span className="text-slate-400">curl -s </span>
            <span className="text-violet-400">https://rajat.dev/api/v1/whoami</span>
          </div>
          <div className="pl-4 leading-relaxed space-y-0.5">
            {[
              ['"name"',       '"Rajat Kumar Rout"'],
              ['"role"',       '"Backend Eng / Founding Product Eng"'],
              ['"experience"', '"3+ years"'],
              ['"superpower"', '"Ambiguous problems → scalable systems"'],
              ['"location"',   '"Bengaluru, India"'],
              ['"status"',     '"AVAILABLE_FOR_HIRE"'],
              ['"stack"',      '["NestJS","Node.js","AWS","Kafka","ElasticSearch"]'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-1.5 flex-wrap">
                <span className="text-violet-400">{k}</span>
                <span className="text-slate-600">:</span>
                <span className="text-emerald-400">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 select-none">❯</span>
            <span className="cursor" />
          </div>
        </div>
      </motion.div>

      {/* Info cards */}
      <motion.div variants={fade} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-surface rounded-xl border border-border p-5 shadow-card card-hover">
            <h3 className="font-semibold text-sm text-slate-900 mb-2">{c.label}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.div variants={fade} className="rounded-xl border-l-4 border-l-violet border border-border bg-surface p-6 shadow-card">
        <p className="section-label mb-3">// summary</p>
        <p className="text-slate-600 text-sm leading-relaxed">
          I'm a backend engineer with 3+ years building microservices, event-driven systems, and fintech
          infrastructure at scale. Currently a{' '}
          <span className="font-semibold text-slate-900">Founding Product Engineer at FlyWl</span> — not
          just writing code, but helping define what gets built and why. I do my best work in small,
          high-ownership teams where engineering and product thinking are inseparable.
        </p>
      </motion.div>
    </motion.div>
  )
}

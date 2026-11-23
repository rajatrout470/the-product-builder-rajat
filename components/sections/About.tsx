'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    label: 'Current Mission',
    body:  'Owning backend systems end-to-end at FlyWl — from a multi-LLM AI chatbot with MCP tool calling to credit ledgers, search and notification pipelines.',
  },
  {
    label: 'Core Philosophy',
    body:  "Systems should be observable, reversible, and boring in production. Great engineering is mostly invisible — it handles the edge cases you hadn't thought of yet.",
  },
  {
    label: 'How I Work',
    body:  'Cursor AI and Claude Code are daily tools for boilerplate, test scaffolding and cross-module refactors — 40% faster delivery without trading off quality or reliability.',
  },
  {
    label: 'On AI Systems',
    body:  "LLMs are only useful when they're grounded, observable and safe to turn off. I treat agents like any other production service — traced, evaluated and guarded.",
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
        <h2 className="section-title">
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
              ['"experience"', '"4 years"'],
              ['"superpower"', '"Ambiguous problems → scalable systems"'],
              ['"location"',   '"Bengaluru, India"'],
              ['"status"',     '"AVAILABLE_FOR_HIRE"'],
              ['"stack"',      '["NestJS","Node.js","AWS","Kafka","ElasticSearch"]'],
              ['"ai"',         '["Claude","OpenAI","Llama 3","MCP","RAG","Langfuse"]'],
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
            <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-2">{c.label}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.div variants={fade} className="bg-surface rounded-xl border border-border p-5 shadow-card card-hover">
        <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-2">Summary</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Backend engineer with 4 years designing and shipping microservices, event-driven systems and
          RESTful APIs with NestJS and Node.js — Kafka pipelines, AWS serverless, ElasticSearch, PostgreSQL
          and vector databases. Currently{' '}
          <span className="font-semibold text-slate-900 dark:text-slate-100">Founding Product Engineer at FlyWl</span>,
          owning backend systems end-to-end, including FlyWl's multi-LLM AI chatbot (Claude, OpenAI, Llama 3) with
          streaming responses, tool calling via MCP, and LLM observability.
        </p>
      </motion.div>
    </motion.div>
  )
}

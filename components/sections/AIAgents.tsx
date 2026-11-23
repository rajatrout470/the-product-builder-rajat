'use client'

import { motion } from 'framer-motion'

/* ── Flagship: FlyWl AI Chatbot ─────────────────────────────── */

const flow = [
  { step: 'Ingest',    title: 'Documents in',          body: 'Contracts & files — PDF, Word, Excel, scanned images via OCR — become searchable context.' },
  { step: 'Serve',     title: 'NestJS SSE gateway',     body: 'JWT-authenticated sessions, token-by-token streaming, and a production kill switch.' },
  { step: 'Reason',    title: 'Provider-agnostic LLM',  body: 'Vercel AI SDK layer — Claude, GPT-4 or self-hosted Llama 3, switchable per tenant.' },
  { step: 'Act',       title: 'MCP tool calls',         body: 'Queries live AWS Marketplace + FlyWl data (listings, offers, agreements) with per-tool timeouts.' },
  { step: 'Guard',     title: 'Deterministic numbers',  body: 'Spend figures computed in code. The LLM only writes the narrative — it never generates a number.' },
  { step: 'Observe',   title: 'Trace + evaluate',       body: 'Langfuse & OpenTelemetry tracing, plus an LLM-as-judge eval suite gating every release.' },
]

const flagshipTags = [
  'Anthropic Claude', 'OpenAI GPT-4', 'Llama 3 · Ollama', 'Vercel AI SDK', 'MCP', 'Tool Calling',
  'SSE Streaming', 'RAG', 'OCR', 'Langfuse', 'OpenTelemetry', 'LLM-as-judge', 'NestJS',
]

/* ── Other AI systems ───────────────────────────────────────── */

const others = [
  {
    name:   'Laksh AI',
    where:  'NYVO · Freelance',
    kind:   'Personal-finance assistant',
    points: [
      'Intent classification routes each user message to the right planning flow',
      'Planning + guardrails keep advice inside the user’s actual financial picture',
      'Personalised recommendations generated via OpenAI on top of a 30-year projection engine',
    ],
    tags: ['OpenAI', 'Intent Classification', 'Guardrails', 'NestJS'],
  },
  {
    name:   'AI Vendor Matching',
    where:  'FlyWl',
    kind:   'Semantic search pipeline',
    points: [
      'NestJS service calls an LLM to enrich raw vendor data from the product catalog',
      'Generates embeddings and stores them in a vector DB',
      'Semantic similarity search at match time instead of keyword matching',
    ],
    tags: ['LLM Enrichment', 'Embeddings', 'Vector DB', 'Similarity Search'],
  },
]

/* ── What I've learnt ───────────────────────────────────────── */

const learnt = [
  { title: 'Multi-LLM abstraction',  body: 'One interface over Claude, OpenAI and Ollama — swap models per tenant without touching business logic.' },
  { title: 'Tool calling & MCP',     body: 'Letting agents call real systems mid-conversation, with timeouts so one slow tool never stalls a reply.' },
  { title: 'RAG & embeddings',       body: 'Grounding answers in the user’s own documents; vector search over pgvector / Pinecone-style stores.' },
  { title: 'Streaming UX',           body: 'Server-Sent Events from NestJS so users see tokens as they are generated.' },
  { title: 'Guardrails',             body: 'Intent routing, deterministic math outside the model, and a kill switch to turn AI off instantly.' },
  { title: 'Observability & evals',  body: 'Tracing every LLM call and catching answer regressions with LLM-as-judge before release.' },
]

const fade = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function AIAgents() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-8"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">02 — ai agents</p>
        <h2 className="section-title">AI Agents I’ve Built</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">
          Production LLM systems — not demos. Each one streams, calls tools, stays grounded in real data,
          and is traced and evaluated like any other backend service.
        </p>
      </motion.div>

      {/* Flagship card */}
      <motion.div variants={fade} className="gradient-border rounded-2xl">
        <div className="rounded-2xl bg-surface p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-violet">Flagship · FlyWl</span>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-slate-100 mt-1">
                AI Sales &amp; Procurement Assistant
              </h3>
            </div>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              in production
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-7">
            Sales and procurement teams chat over their own contracts and documents and get answers grounded in
            their data, live web search, and AWS Marketplace — a multi-LLM agent with tool calling, streaming,
            and built-in protection against hallucinated numbers.
          </p>

          {/* Architecture flow */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-7">
            {flow.map((f, i) => (
              <li key={f.step} className="relative rounded-xl border border-border bg-subtle p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-violet/10 text-violet font-mono text-[11px] font-semibold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{f.step}</span>
                </div>
                <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">{f.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{f.body}</p>
              </li>
            ))}
          </ol>

          <div className="flex flex-wrap gap-1.5">
            {flagshipTags.map((t) => (
              <span key={t} className="tag bg-violet/5 text-violet border-violet/20">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Other AI systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {others.map((o) => (
          <motion.div key={o.name} variants={fade} className="bg-surface rounded-xl border border-border p-6 shadow-card card-hover flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{o.where}</span>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">{o.name}</h3>
            <p className="font-mono text-xs text-violet mb-4">{o.kind}</p>
            <ul className="space-y-2 mb-5 flex-1">
              {o.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-snug">
                  <span className="text-violet font-mono flex-shrink-0">›</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {o.tags.map((t) => (
                <span key={t} className="tag bg-subtle text-slate-600 dark:text-slate-400 border-border">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* What I've learnt */}
      <motion.div variants={fade}>
        <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">What building these taught me</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {learnt.map((l) => (
            <div key={l.title} className="rounded-xl border border-border bg-surface p-4 shadow-card">
              <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">{l.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

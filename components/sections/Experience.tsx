'use client'

import { motion } from 'framer-motion'

type Job = {
  company: string
  role:    string
  period:  string
  active:  boolean
  stack:   string
  bullets: string[]
  sub?:    { title: string; bullets: string[] }
  tags:    string[]
}

const jobs: Job[] = [
  {
    company: 'FlyWl',
    role:    'Founding Product Engineer (Backend)',
    period:  'Nov 2024 – Present',
    active:  true,
    stack:   'NestJS · PostgreSQL · AWS SQS/SNS · ElasticSearch · Redis · Kafka · Vector DB · Vercel AI SDK · Claude / OpenAI',
    bullets: [
      'Architected and built multiple NestJS microservices end-to-end — seller profiles, notification engine, wallet/credit module, AWS spend modelling — each independently deployable with clean domain boundaries',
      'Designed RESTful APIs with pagination, search, filtering and PBAC role guards; implemented FUID generation, polymorphic associations and soft-delete patterns across services',
      'Built a Notification & Event Engine: SNS publisher interface, event store consumer, SuprSend (Email/Push) and Mixpanel; session IDs propagated via AsyncLocalStorage into a structured logger',
      'Engineered AI-powered vendor matching: LLM enrichment of vendor data, embeddings stored in a vector DB, semantic similarity search at match time',
      'Built a Wallet/Credit module: global ledger, ACID-safe earn/redeem/rollback flows, and a NestJS-scheduler cron for credit expiry',
      'Implemented a PBAC permission system: role/permission guards as NestJS decorators, permission management APIs, FinOps/procurement roles',
      'Built full-text and fuzzy Product Catalog search on ElasticSearch — custom analyzers, relevance scoring, multi-field boosting',
      'Use Cursor AI and Claude Code daily for boilerplate, test scaffolding and cross-module refactoring — cutting feature delivery time by 40%',
    ],
    sub: {
      title: 'FlyWl AI Chatbot — Sales & Procurement Assistant',
      bullets: [
        'Chat over uploaded contracts and documents (PDF, Word, Excel, scanned images via OCR), grounded in the user’s data, live web search and AWS Marketplace',
        'Provider-agnostic LLM layer on the Vercel AI SDK — Claude, GPT-4 and self-hosted Llama 3 (Ollama), switchable per tenant',
        'Streaming NestJS backend: token-by-token SSE, JWT-authenticated sessions, and a kill switch to disable AI instantly in production',
        'MCP tools let the bot query live AWS Marketplace and FlyWl data (listings, offers, agreements) mid-conversation, with per-tool timeouts',
        'No hallucinated figures: spend numbers are computed deterministically in code — the LLM only writes the narrative',
        'LLM observability and quality gates: Langfuse + OpenTelemetry tracing and an LLM-as-judge eval suite to catch regressions before release',
      ],
    },
    tags: ['NestJS', 'PostgreSQL', 'ElasticSearch', 'Kafka', 'Redis', 'AWS SQS/SNS', 'Vector DB', 'Vercel AI SDK', 'MCP', 'Langfuse', 'PBAC'],
  },
  {
    company: 'Klub',
    role:    'SDE1 — Backend Engineer',
    period:  'Nov 2022 – Sept 2024',
    active:  false,
    stack:   'Node.js · Express · PostgreSQL · Kafka · Camunda · AWS Lambda · Serverless',
    bullets: [
      'Built and maintained 10 Node.js microservices for fintech loan processing — each owning its DB schema, event contracts and API surface',
      'Designed serverless REST APIs on AWS Lambda (Serverless Framework) for loan applications, document storage and partner integrations',
      'Automated 98% of loan applications end-to-end with rule-engine-driven services — reduced manual ops workload by 90%',
      'Built a Kafka data pipeline for NBFC partners: schema-validated producers/consumers, dead-letter queues and retries — 70% faster data delivery SLA',
      'Optimised PostgreSQL with composite indexes and materialized views — 10× faster config lookups, 80% faster document search',
      'Managed 20 BPMN workflows in Camunda integrated with Node.js services — 50% fewer manual interventions',
      'Upgraded 7+ microservices from Node.js v12 to v18 — dependency audits, ESM migration, zero-downtime deploys',
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Kafka', 'Camunda', 'AWS Lambda', 'Serverless'],
  },
]

const fade = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-snug">
          <span className="text-dim font-mono flex-shrink-0 mt-0.5">—</span>
          {b}
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-6"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">03 — experience</p>
        <h2 className="section-title">Where I’ve Worked</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border" />

        <div className="space-y-6">
          {jobs.map((job) => (
            <motion.div key={job.company} variants={fade} className="flex gap-3 sm:gap-6">
              <div className="flex-shrink-0 w-8 flex justify-center pt-6">
                <div className={`w-2.5 h-2.5 rounded-full border-2 border-surface shadow z-10 ${job.active ? 'bg-violet' : 'bg-dim'}`} />
              </div>

              <div className="flex-1 min-w-0 bg-surface rounded-xl border border-border shadow-card p-5 sm:p-6 mb-2">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100">{job.company}</h3>
                    <p className="text-sm text-muted mt-0.5">{job.role}</p>
                    <p className="font-mono text-xs text-dim mt-1">{job.period}</p>
                  </div>
                  {job.active && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                      active
                    </span>
                  )}
                </div>
                <p className="font-mono text-[11px] text-muted italic mb-4">{job.stack}</p>

                <Bullets items={job.bullets} />

                {job.sub && (
                  <div className="mt-5 rounded-lg border border-violet/20 bg-violet/5 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-violet mb-3">
                      <span className="font-mono text-xs">✦</span>
                      {job.sub.title}
                    </p>
                    <Bullets items={job.sub.bullets} />
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-4 mt-5 border-t border-border">
                  {job.tags.map((t) => (
                    <span key={t} className="tag bg-subtle text-slate-600 dark:text-slate-400 border-border">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

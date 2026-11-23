'use client'

import { motion } from 'framer-motion'

const projects: { name: string; impact: string; desc: string; stack: string[]; url?: string }[] = [
  {
    name:   'Wallet / Credit Engine',
    impact: 'ACID-safe earn · redeem · rollback',
    desc:   'Global ledger with transactional earn/redeem/rollback flows and a NestJS-scheduler cron that expires credits on time.',
    stack:  ['NestJS', 'PostgreSQL', 'Cron'],
  },
  {
    name:   'Catalog Search Engine',
    impact: 'Full-text + fuzzy product search',
    desc:   'ElasticSearch with custom analyzers, relevance scoring and multi-field boosting over the FlyWl product catalog.',
    stack:  ['ElasticSearch', 'NestJS'],
  },
  {
    name:   'Notification & Event Engine',
    impact: 'Email · Push · Analytics from one event bus',
    desc:   'SNS publisher interface and event store consumer feeding SuprSend and Mixpanel, with session IDs traced via AsyncLocalStorage.',
    stack:  ['AWS SNS', 'SuprSend', 'Mixpanel'],
  },
  {
    name:   'PBAC Permission System',
    impact: 'Fine-grained access as decorators',
    desc:   'Role/permission guards as NestJS decorators, permission management APIs, and FinOps/procurement role definitions.',
    stack:  ['NestJS', 'PBAC', 'PostgreSQL'],
  },
  {
    name:   'Loan Automation Platform',
    impact: '98% automated · 90% less manual ops',
    desc:   'Rule-engine-driven Node.js services on AWS Lambda processing loan applications end-to-end.',
    stack:  ['Node.js', 'AWS Lambda', 'Serverless'],
  },
  {
    name:   'Kafka Partner Pipeline',
    impact: '70% faster data delivery SLA',
    desc:   'Schema-validated producers/consumers with dead-letter queues and retry logic, delivering data to NBFC partners.',
    stack:  ['Kafka', 'Node.js', 'PostgreSQL'],
  },
]

const fade = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.4 } },
}

export default function Projects() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div variants={fade} className="mb-8">
        <p className="section-label mb-2">05 — projects</p>
        <h2 className="section-title">
          What I've Built
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <motion.div key={p.name} variants={fade} className="bg-surface rounded-xl border border-border p-6 shadow-card card-hover flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">{p.name}</h3>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-violet hover:underline whitespace-nowrap"
                >
                  Visit ↗
                </a>
              )}
            </div>
            <p className="font-mono text-xs text-violet mb-3">{p.impact}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {p.stack.map((t) => (
                <span key={t} className="tag bg-subtle text-slate-600 dark:text-slate-400 border-border">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

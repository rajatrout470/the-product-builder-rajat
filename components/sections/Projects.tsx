'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name:   'Credit Engine',
    impact: 'Powers real money transactions in production',
    desc:   'Full ledger + wallet management with complete transaction lifecycle. Handles earn, redeem, expire, and rollback with ACID guarantees.',
    stack:  ['NestJS', 'PostgreSQL', 'AWS'],
  },
  {
    name:   'Catalog Search Engine',
    impact: 'High-cardinality product catalog at scale',
    desc:   'ElasticSearch-powered relevance scoring with fuzzy matching and custom analysers for domain-specific search.',
    stack:  ['ElasticSearch', 'Node.js', 'NestJS'],
  },
  {
    name:   'Notification Engine',
    impact: 'Email · SMS · Push — zero message loss',
    desc:   'Multi-channel, fully async, deduplication-safe notification system with retry semantics and delivery receipts.',
    stack:  ['AWS SQS', 'SNS', 'SuprSend'],
  },
  {
    name:   'Loan Automation Platform',
    impact: '90% manual workload eliminated',
    desc:   '98% automated loan application processing via serverless API orchestration, replacing a heavily manual ops workflow.',
    stack:  ['Node.js', 'Serverless', 'PostgreSQL'],
  },
  {
    name:   'Kafka Event Platform',
    impact: '70% faster data delivery to partners',
    desc:   'Real-time data sharing pipeline for NBFC partners. Schema-validated, idempotent consumers, dead-letter handling.',
    stack:  ['Kafka', 'Node.js', 'AWS'],
  },
  {
    name:   'BPMN Workflow Engine',
    impact: '50% fewer manual interventions',
    desc:   'Camunda-based orchestration for complex loan lifecycle management. 20+ process definitions with human task management.',
    stack:  ['Camunda', 'Node.js', 'BPMN'],
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
        <p className="section-label mb-2">04 — projects</p>
        <h2 className="font-display font-bold text-3xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
          What I've Built
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <motion.div key={p.name} variants={fade} className="bg-surface rounded-xl border border-border p-6 shadow-card card-hover flex flex-col">
            <h3 className="font-semibold text-slate-900 text-base mb-1">{p.name}</h3>
            <p className="font-mono text-xs text-violet mb-3">{p.impact}</p>
            <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {p.stack.map((t) => (
                <span key={t} className="tag bg-gray-50 text-slate-600 border-border">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'

const jobs = [
  {
    company: 'FlyWl',
    role:    'Founding Product Engineer',
    period:  'Nov 2024 – Present',
    active:  true,
    bullets: [
      'Shaped product vision, feature scoping, and roadmap alongside founders',
      'Built Seller Profile & Claim Module end-to-end (largest feature) — CRUD with pagination/search, FUID generation via nanoid, seller claim flow, PBAC guards, login refactor, company attribute updates, and vendor search by website',
      'Engineered Notification & Analytics Event Engine from scratch — event builder, SNS publisher interface, event store consumer; integrated SuprSend (Email/Push) and Mixpanel analytics; session ID propagation via AsyncLocalStorage into structured logger',
      'Implemented PBAC permission system — guards on role/permission controllers, permission management APIs (view, add, update), FinOps and procurement roles, internal user migration permissions',
      'Built AWS Spend Modelling & EDP — spend comparison, EDP commitment costs, marketplace summary, drawdown overage and dead weight loss calculations; AWS Marketplace users migration',
      'Designed AI-powered vendor matching: LLM API enriches vendor details from the product catalog, creates embeddings stored in a vector DB — enabling semantic similarity search at match time',
      'Built Wallet/Credit Module — wallet creation API, global ledger, cron job for credit expiry, expired credit balance calculations',
      'Built Product Catalog search engine (ElasticSearch), User Invitations flow (role-based access, invitedBy tracking), and AWS Cognito auth',
      'Used Cursor AI, ChatGPT, and Claude Code as force multipliers — cut feature delivery time by ~40%',
    ],
    tags: ['NestJS', 'ElasticSearch', 'AWS', 'SNS', 'Mixpanel', 'PBAC', 'SuprSend', 'LLM APIs', 'Vector DB', 'Claude Code', 'AsyncLocalStorage'],
  },
  {
    company: 'Klub',
    role:    'SDE1 — Backend Engineer',
    period:  'Nov 2022 – Sept 2024',
    active:  false,
    bullets: [
      'Automated 98% of loan applications — 90% reduction in manual ops workload',
      'Built product config system with PostgreSQL indexing — 10× faster queries',
      'Document storage with polymorphic associations — 80% faster search',
      'Kafka event-driven data platform for NBFC partners — 70% faster delivery SLA',
      'Managed 20+ BPMN workflows in Camunda — 50% fewer manual interventions',
      'Upgraded 7+ microservices from Node.js v12 to v18 with zero downtime',
    ],
    tags: ['Node.js', 'PostgreSQL', 'Kafka', 'Camunda', 'Serverless', 'ORY Auth'],
  },
]

const fade = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.45 } },
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
        <h2 className="font-display font-bold text-3xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
          Where I've Worked
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border" />

        <div className="space-y-6">
          {jobs.map((job) => (
            <motion.div key={job.company} variants={fade} className="flex gap-6">
              {/* Dot */}
              <div className="flex-shrink-0 w-8 flex justify-center pt-6">
                <div className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow z-10 ${job.active ? 'bg-violet' : 'bg-dim'}`} />
              </div>

              {/* Card */}
              <div className="flex-1 bg-surface rounded-xl border border-border shadow-card card-hover p-6 mb-2">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {job.company}
                    </h3>
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

                <ul className="space-y-2 mb-5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-slate-600 leading-snug">
                      <span className="text-dim font-mono flex-shrink-0 mt-0.5">—</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {job.tags.map((t) => (
                    <span key={t} className="tag bg-gray-50 text-slate-600 border-border">{t}</span>
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

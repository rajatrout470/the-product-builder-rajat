'use client'

import { motion } from 'framer-motion'

const gigs = [
  {
    client:  'NYVO',
    role:    'Backend Engineer · Freelance',
    period:  'Jan 2026 – Mar 2026',
    url:     'https://www.nyvo.money/',
    summary: 'Personal finance planning platform — built the backend service end-to-end.',
    bullets: [
      '30-year financial projection engine — net worth, wealth breakdown, cash flow, and FIRE sustainability scoring',
      'Goal management with auto-generated goals (emergency fund, retirement, kids’ education) and custom goals, with allocations capped at present value',
      'Laksh AI assistant — intent classification, planning, guardrails, and personalised recommendations via OpenAI',
      'Debt optimisation (prepayment, refinancing, snowball/avalanche), insurance adequacy analysis, and tax planning modules',
      'Auth with email/phone OTP, Google OAuth, JWT + HttpOnly refresh tokens, and rate limiting',
      'Dockerised deploys to AWS EC2 provisioned with Terraform',
    ],
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'OpenAI', 'AWS', 'Terraform', 'Docker'],
  },
]

const fade = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.45 } },
}

export default function Freelance() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-6"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">04 — freelance</p>
        <h2 className="section-title">
          Freelance Work
        </h2>
      </motion.div>

      <div className="space-y-4">
        {gigs.map((g) => (
          <motion.div key={g.client} variants={fade} className="bg-surface rounded-xl border border-border shadow-card card-hover p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100">
                  {g.client}
                </h3>
                <p className="text-sm text-muted mt-0.5">{g.role}</p>
                <p className="font-mono text-xs text-dim mt-1">{g.period}</p>
              </div>
              <a
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs font-mono hover:bg-violet/10 transition-colors"
              >
                {g.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗
              </a>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{g.summary}</p>

            <ul className="space-y-2 mb-5">
              {g.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-snug">
                  <span className="text-dim font-mono flex-shrink-0 mt-0.5">—</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {g.tags.map((t) => (
                <span key={t} className="tag bg-subtle text-slate-600 dark:text-slate-400 border-border">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

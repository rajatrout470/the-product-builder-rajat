'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'email',    value: 'rajatrout470@gmail.com',  href: 'mailto:rajatrout470@gmail.com',     icon: '✉'    },
  { label: 'phone',    value: '+91 9408142406',           href: 'tel:+919408142406',                 icon: '☎'    },
  { label: 'linkedin', value: 'linkedin.com/in/rajatrout',href: 'https://linkedin.com/in/rajatrout', icon: 'in'   },
  { label: 'github',   value: 'github.com/rajatrout',     href: 'https://github.com/rajatrout',      icon: '<>'   },
  { label: 'location', value: 'Bengaluru, India',         href: null,                                icon: '⊕'    },
]

const openTo = [
  'Founding / early-stage engineering roles',
  'Backend-heavy SDE2+ positions',
  'Infra-heavy product companies',
  'Fintech & financial infrastructure',
  'AI-native startups',
  'Remote or Bengaluru-based',
]

const fade = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.4 } },
}

export default function Contact() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-8"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">06 — contact</p>
        <h2 className="font-display font-bold text-3xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
          Let's Talk
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md leading-relaxed">
          Open to founding eng roles, backend-heavy SDE2+, and infra-heavy products in fintech or AI-native spaces.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact links */}
        <motion.div variants={fade} className="space-y-2.5">
          {links.map((c) =>
            c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border shadow-card hover:border-violet/40 transition-colors duration-150 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-50 border border-border flex items-center justify-center flex-shrink-0 font-mono text-xs text-slate-500 group-hover:border-violet/30 group-hover:text-violet transition-colors">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] text-muted uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm font-medium text-slate-800 truncate">{c.value}</p>
                </div>
                <span className="text-dim text-sm group-hover:text-violet transition-colors">↗</span>
              </a>
            ) : (
              <div key={c.label} className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border shadow-card">
                <div className="w-9 h-9 rounded-lg bg-gray-50 border border-border flex items-center justify-center flex-shrink-0 font-mono text-xs text-slate-500">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] text-muted uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm font-medium text-slate-800">{c.value}</p>
                </div>
              </div>
            )
          )}
        </motion.div>

        {/* Open to + CTA */}
        <motion.div variants={fade} className="space-y-4">
          <div className="bg-surface rounded-xl border border-border p-6 shadow-card">
            <h3 className="font-semibold text-slate-900 text-sm mb-4">Open to</h3>
            <ul className="space-y-2.5">
              {openTo.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="font-mono text-violet mt-0.5 flex-shrink-0 text-xs">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-violet/20 bg-violet/5 p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Building something in fintech, AI, or infra? I'd love to hear about it.
            </p>
            <a
              href="mailto:rajatrout470@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet text-white text-sm font-medium hover:bg-violet/90 transition-colors"
            >
              <span>✉</span>
              <span>Send a message</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

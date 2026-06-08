'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 98, suffix: '%', label: 'Loan Automation',  desc: 'Applications fully automated'   },
  { value: 40, suffix: '%', label: 'Faster with AI',   desc: 'Feature delivery time cut'       },
  { value: 10, suffix: '×', label: 'Query Speed',      desc: 'PostgreSQL optimisation'         },
  { value: 80, suffix: '%', label: 'Search Speed',     desc: 'Document search improvement'     },
  { value: 70, suffix: '%', label: 'Data Delivery',    desc: 'Kafka pipeline SLA gain'         },
  { value: 20, suffix: '+', label: 'BPMN Workflows',   desc: 'Camunda processes managed'       },
]

const auditLines = [
  { key: 'microservices upgraded',  val: '7',                                           valCls: 'text-emerald-400' },
  { key: 'manual workload reduced', val: '90%',                                         valCls: 'text-violet-400'  },
  { key: 'AI tooling',              val: 'Cursor AI, ChatGPT',                          valCls: 'text-amber-400'   },
  { key: 'systems shipped',         val: 'Credit Engine, Search, Notifications, Loans', valCls: 'text-sky-400'     },
  { key: 'status',                  val: 'HEALTHY ✓',                                   valCls: 'text-emerald-400' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return
    let cur = 0
    const step = value / 60
    const t = setInterval(() => {
      cur += step
      if (cur >= value) { setCount(value); clearInterval(t) } else setCount(Math.floor(cur))
    }, 1500 / 60)
    return () => clearInterval(t)
  }, [inView, value])

  return (
    <div ref={ref} className="font-display font-extrabold text-4xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
      {count}{suffix}
    </div>
  )
}

const fade = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.4 } },
}

export default function Metrics() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-8"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">05 — metrics</p>
        <h2 className="font-display font-bold text-3xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
          Impact by the Numbers
        </h2>
      </motion.div>

      <motion.div variants={fade} className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface rounded-xl border border-border p-5 shadow-card card-hover">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="font-semibold text-sm text-slate-700 mt-2">{s.label}</p>
            <p className="text-xs text-muted mt-0.5">{s.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Audit terminal — kept dark */}
      <motion.div variants={fade} className="rounded-xl overflow-hidden border border-[#30363d] shadow-md">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">system.audit</span>
        </div>
        <div className="bg-[#0d1117] p-5 font-mono text-sm space-y-2">
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className="text-emerald-400 select-none">$</span>
            <span className="text-slate-400">system.audit </span>
            <span className="text-violet-400">--since=2022</span>
          </div>
          {auditLines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex gap-2 flex-wrap"
            >
              <span className="text-slate-500">→ {l.key}</span>
              <span className="text-slate-700">:</span>
              <span className={l.valCls}>{l.val}</span>
            </motion.div>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-[#30363d] mt-2">
            <span className="text-emerald-400 select-none">❯</span>
            <span className="cursor" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

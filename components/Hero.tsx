'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const tagline = 'backend_engineer.service — running since 2022'

const badges = [
  { label: '● available for hire', cls: 'text-violet border-violet/30 bg-violet/5'  },
  { label: '3+ yrs production',    cls: 'text-slate-600 border-border bg-white'      },
  { label: 'Bengaluru, IN',        cls: 'text-slate-600 border-border bg-white'      },
  { label: 'Node · AWS · Kafka',   cls: 'text-slate-600 border-border bg-white'      },
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [done,  setDone]  = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(tagline.slice(0, ++i))
      if (i >= tagline.length) { clearInterval(t); setDone(true) }
    }, 38)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="pt-16 pb-20">
      {/* Typed line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 font-mono text-xs text-muted mb-8"
      >
        <span className="text-violet select-none">$</span>
        <span>{typed}</span>
        {!done && <span className="cursor" />}
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-sans font-bold text-4xl sm:text-5xl leading-[1.15] tracking-normal text-slate-900 mb-5"
      >
        Rajat Kumar Rout
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8"
      >
        Backend Engineer · Founding Product Engineer
      </motion.p>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-wrap gap-2"
      >
        {badges.map((b, i) => (
          <motion.span
            key={b.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.07 }}
            className={`badge ${b.cls}`}
          >
            {b.label}
          </motion.span>
        ))}
      </motion.div>

      {/* Divider scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-16 flex items-center gap-4"
      >
        <div className="h-px w-8 bg-violet/40" />
        <span className="font-mono text-[11px] text-muted tracking-widest uppercase">scroll</span>
      </motion.div>
    </div>
  )
}

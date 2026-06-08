'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Line { type: 'input' | 'output' | 'error' | 'system'; text: string }

const CMDS: Record<string, () => string[]> = {
  help: () => [
    '  Commands ─────────────────────────────',
    '  help        list all commands',
    '  whoami      print JSON bio',
    '  skills      print skill tree',
    '  experience  print career timeline',
    '  contact     print contact info',
    '  clear       clear terminal',
    '  exit        close terminal',
  ],
  whoami: () => [
    '{',
    '  "name":       "Rajat Kumar Rout",',
    '  "role":       "Backend Eng / Founding Product Eng",',
    '  "exp":        "3+ years",',
    '  "superpower": "Ambiguous problems → scalable systems",',
    '  "location":   "Bengaluru, India",',
    '  "status":     "AVAILABLE_FOR_HIRE",',
    '  "stack":      ["NestJS","Node.js","AWS","Kafka","ES"]',
    '}',
  ],
  skills: () => [
    '  Languages  TypeScript · JS · Node.js · NestJS · GraphQL',
    '  Databases  PostgreSQL · MongoDB · Redis · ElasticSearch',
    '  Cloud      AWS Lambda · SQS · SNS · S3 · Cognito',
    '  Events     Apache Kafka · BPMN · Camunda',
    '  Auth       JWT · ORY · OAuth · AWS Cognito',
    '  AI         Cursor AI · ChatGPT · Code generation',
  ],
  experience: () => [
    '  ┌ FlyWl ─────────────────────────────────',
    '  │ Founding Product Engineer  [ACTIVE]',
    '  │ Nov 2024 – Present',
    '  │ NestJS · ElasticSearch · AWS · Kafka',
    '  └──────────────────────────────────────',
    '',
    '  ┌ Klub ──────────────────────────────────',
    '  │ SDE1 Backend Engineer',
    '  │ Nov 2022 – Sept 2024',
    '  │ Node.js · PostgreSQL · Kafka · Camunda',
    '  └──────────────────────────────────────',
  ],
  contact: () => [
    '  email     rajatrout470@gmail.com',
    '  phone     +91 9408142406',
    '  linkedin  linkedin.com/in/rajatrout',
    '  github    github.com/rajatrout',
    '  location  Bengaluru, India',
  ],
}

const BOOT = [
  'rajat-portfolio v1.0.0',
  'type "help" for commands',
  '─────────────────────────────────',
]

export default function Terminal() {
  const [open, setOpen]       = useState(false)
  const [lines, setLines]     = useState<Line[]>([])
  const [input, setInput]     = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const add = useCallback((ls: Line[]) => setLines((p) => [...p, ...ls]), [])

  const openTerminal = useCallback(() => {
    setOpen(true)
    if (lines.length === 0) setLines(BOOT.map((t) => ({ type: 'system', text: t })))
  }, [lines.length])

  const run = useCallback((cmd: string) => {
    const t = cmd.trim().toLowerCase()
    add([{ type: 'input', text: `❯ ${cmd}` }])
    if (!t) return
    setHistory((p) => [cmd, ...p.slice(0, 49)])
    setHistIdx(-1)
    if (t === 'clear') { setLines([]); return }
    if (t === 'exit')  { setOpen(false); return }
    const fn = CMDS[t]
    if (fn) add(fn().map((text) => ({ type: 'output', text })))
    else    add([{ type: 'error', text: `command not found: ${t} (try "help")` }])
  }, [add])

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { run(input); setInput('') }
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const i = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(i); setInput(history[i] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const i = Math.max(histIdx - 1, -1)
      setHistIdx(i); setInput(i === -1 ? '' : history[i])
    } else if (e.key === 'Escape') setOpen(false)
  }

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === '`' && !open) { e.preventDefault(); openTerminal() }
      else if (e.ctrlKey && e.key === 'k') { e.preventDefault(); open ? setOpen(false) : openTerminal() }
      else if (e.key === 'Escape' && open) setOpen(false)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [open, openTerminal])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [lines])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80)
  }, [open])

  const lineCls = (t: Line['type']) =>
    t === 'input'  ? 'text-emerald-400' :
    t === 'error'  ? 'text-red-400'     :
    t === 'system' ? 'text-slate-500'   : 'text-slate-300'

  return (
    <>
      {/* Hint */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ delay: 2.5 }}
            className="fixed bottom-6 left-6 z-40 font-mono text-[11px] text-muted pointer-events-none hidden md:flex items-center gap-1.5"
          >
            <kbd className="px-1.5 py-0.5 rounded border border-dim bg-white text-slate-500 text-[10px]">` </kbd>
            or
            <kbd className="px-1.5 py-0.5 rounded border border-dim bg-white text-slate-500 text-[10px]">Ctrl K</kbd>
            <span>— open terminal</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={  { opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed inset-x-4 top-16 bottom-16 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[680px] md:top-20 md:bottom-20 z-50 rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#161b22] flex-shrink-0">
                <button onClick={() => setOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-500 flex-1">rajat@portfolio:~</span>
                <span className="font-mono text-xs text-slate-600">ESC to close</span>
              </div>

              {/* Output */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-0.5">
                {lines.map((l, i) => (
                  <div key={i} className={`leading-relaxed whitespace-pre-wrap ${lineCls(l.type)}`}>
                    {l.text || ' '}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-[#30363d] bg-[#161b22] flex-shrink-0">
                <span className="text-emerald-400 font-mono text-sm select-none">❯</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  className="flex-1 bg-transparent font-mono text-sm text-slate-200 outline-none caret-emerald-400 placeholder-slate-600"
                  placeholder="type a command…"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="button"], .tag, .badge, .card-hover'
const TEXT_INPUT  = 'input, textarea, [contenteditable="true"]'

export default function CursorEffect() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hover,   setHover]   = useState(false)
  const [typing,  setTyping]  = useState(false)
  const [down,    setDown]    = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Glow trails the pointer loosely
  const glowX = useSpring(x, { stiffness: 80,  damping: 20 })
  const glowY = useSpring(y, { stiffness: 80,  damping: 20 })

  useEffect(() => {
    const fine    = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const t = e.target as Element | null
      setTyping(!!t?.closest?.(TEXT_INPUT))
      setHover(!!t?.closest?.(INTERACTIVE))
    }
    const leave = () => setVisible(false)
    const press = () => setDown(true)
    const release = () => setDown(false)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    window.addEventListener('mousedown', press)
    window.addEventListener('mouseup', release)
    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      window.removeEventListener('mousedown', press)
      window.removeEventListener('mouseup', release)
    }
  }, [x, y])

  if (!enabled) return null

  const show = visible && !typing

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      {/* Soft spotlight glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: glowX, y: glowY,
          width: 360, height: 360, marginLeft: -180, marginTop: -180,
          background: 'radial-gradient(circle, rgb(var(--c-violet) / 0.10), transparent 65%)',
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Dot — grows over interactive elements, squishes on click */}
      <motion.div
        className="absolute rounded-full bg-violet"
        style={{ x, y, width: 8, height: 8, marginLeft: -4, marginTop: -4 }}
        animate={{ opacity: show ? (hover ? 0.6 : 1) : 0, scale: down ? 0.7 : hover ? 2.5 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </div>
  )
}

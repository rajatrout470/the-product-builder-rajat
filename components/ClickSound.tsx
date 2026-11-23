'use client'

import { useEffect, useState } from 'react'

const CLICKABLE = 'a, button, [role="button"], .tag, .badge, .card-hover'
const KEY = 'sound'
const EVENT = 'sound-change'

let ctx: AudioContext | null = null

export function isSoundOn() {
  try { return localStorage.getItem(KEY) !== 'off' } catch { return true }
}

/** Short, soft "tick" synthesized on the fly — no audio files. */
export function playClick() {
  if (!isSoundOn()) return
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    ctx ??= new AC()
    if (ctx.state === 'suspended') ctx.resume()

    const t = ctx.currentTime

    // 1) Crisp transient: ~12ms of decaying white noise through a bright band-pass
    const len   = Math.floor(ctx.sampleRate * 0.012)
    const buf   = ctx.createBuffer(1, len, ctx.sampleRate)
    const data  = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 4)
    const noise = ctx.createBufferSource()
    noise.buffer = buf
    const band = ctx.createBiquadFilter()
    band.type = 'bandpass'
    band.frequency.value = 4200
    band.Q.value = 1.2
    const nGain = ctx.createGain()
    nGain.gain.value = 0.35
    noise.connect(band).connect(nGain).connect(ctx.destination)
    noise.start(t)

    // 2) Tiny tonal "tick" body so it doesn't sound like static
    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(2600, t)
    osc.frequency.exponentialRampToValueAtTime(1800, t + 0.02)
    gain.gain.setValueAtTime(0.06, t)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.025)
    osc.connect(gain).connect(ctx.destination)
    osc.start(t)
    osc.stop(t + 0.03)
  } catch {}
}

/** Global listener: plays the tick when any clickable element is pressed. */
export default function ClickSound() {
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return
      if ((e.target as Element | null)?.closest?.(CLICKABLE)) playClick()
    }
    window.addEventListener('pointerdown', onDown, { passive: true })
    return () => window.removeEventListener('pointerdown', onDown)
  }, [])
  return null
}

/** Mute / unmute button, styled like ThemeToggle. */
export function SoundToggle() {
  const [on, setOn] = useState<boolean | null>(null)

  useEffect(() => {
    setOn(isSoundOn())
    const sync = () => setOn(isSoundOn())
    window.addEventListener(EVENT, sync)
    return () => window.removeEventListener(EVENT, sync)
  }, [])

  const toggle = () => {
    const next = !on
    try { localStorage.setItem(KEY, next ? 'on' : 'off') } catch {}
    setOn(next)
    window.dispatchEvent(new Event(EVENT))
  }

  return (
    <button
      onClick={toggle}
      aria-label={on ? 'Mute click sounds' : 'Unmute click sounds'}
      title={on ? 'Sound on' : 'Sound off'}
      className="flex items-center justify-center w-8 h-8 rounded-md border border-border text-muted hover:text-violet hover:border-violet/40 transition-colors shrink-0"
    >
      {on === null ? null : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          {on ? (
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
          ) : (
            <path d="m23 9-6 6M17 9l6 6" />
          )}
        </svg>
      )}
    </button>
  )
}

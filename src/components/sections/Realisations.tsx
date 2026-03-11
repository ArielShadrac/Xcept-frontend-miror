'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { realisations } from '@/lib/data'

const ILLUS = [
  // Mammography
  `<circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="1"/><circle cx="50" cy="50" r="26" stroke="currentColor" stroke-width="0.5"/><line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" stroke-width="0.5"/><line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" stroke-width="0.5"/><circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.8"/>`,
  // ECG
  `<path d="M15 70 L25 40 L35 55 L45 10 L55 80 L65 25 L75 50 L85 30 L95 70" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="45" cy="10" r="4" fill="currentColor"/><circle cx="55" cy="80" r="4" fill="currentColor"/>`,
  // Robot
  `<rect x="20" y="20" width="60" height="60" rx="8" stroke="currentColor" stroke-width="1"/><path d="M38 50 L46 58 L62 42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="20" r="7" fill="currentColor" opacity="0.5"/>`,
  // Analytics
  `<rect x="12" y="30" width="26" height="48" rx="4" stroke="currentColor" stroke-width="1"/><rect x="48" y="16" width="26" height="62" rx="4" stroke="currentColor" stroke-width="1"/><rect x="82" y="46" width="10" height="32" rx="2" fill="currentColor" opacity="0.3"/>`,
  // Globe
  `<circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="1"/><circle cx="50" cy="50" r="14" fill="currentColor" opacity="0.15"/><path d="M50 20 A30 30 0 0 1 80 50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
]

export function Realisations() {
  const headRef = useScrollReveal()
  const outerRef = useScrollReveal()
  const trackRef = useRef<HTMLDivElement>(null)
  const [cur, setCur] = useState(0)
  const TOTAL = realisations.length

  const getVis = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 900) return 1
    if (window.innerWidth <= 1100) return 2
    return 3
  }

  const maxSlide = useCallback(() => Math.max(1, TOTAL - getVis() + 1), [])

  const go = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    const cards = track.querySelectorAll('.rcard')
    if (!cards.length) return
    const w = (cards[0] as HTMLElement).offsetWidth + 16
    const next = Math.max(0, Math.min(idx, maxSlide() - 1))
    setCur(next)
    track.style.transform = `translateX(-${next * w}px)`
  }, [maxSlide])

  // Autoplay
  useEffect(() => {
    const t = setInterval(() => go(cur + 1 >= maxSlide() ? 0 : cur + 1), 5000)
    return () => clearInterval(t)
  }, [cur, go, maxSlide])

  const DOTS = Math.min(3, maxSlide())

  return (
    <section id="real" style={{ padding: '128px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div className="sec-tag">Réalisations</div>

        <div ref={headRef} className="reveal" style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56,
        }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.08 }}>
            Ce que nous avons<br />déjà{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>accompli.</em>
          </h2>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <SliderBtn dir="left"  onClick={() => go(cur - 1)} />
            <SliderBtn dir="right" onClick={() => go(cur + 1)} />
          </div>
        </div>

        {/* Track */}
        <div ref={outerRef} className="reveal" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
          <div
            ref={trackRef}
            style={{ display: 'flex', gap: 16, transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)', willChange: 'transform' }}
          >
            {realisations.map((r, i) => (
              <div key={i} className="rcard" style={{
                flex: '0 0 calc(33.333% - 11px)',
                background: 'var(--glass-bg)',
                backdropFilter: 'saturate(180%) blur(28px)',
                WebkitBackdropFilter: 'saturate(180%) blur(28px)',
                border: '1px solid var(--border-2)',
                boxShadow: 'var(--shadow-glass)',
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                transition: 'all 0.3s',
              }}>
                {/* Image */}
                <div style={{
                  height: 190, background: 'linear-gradient(135deg, var(--bg-2), var(--bg-3))',
                  position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <svg width={100} height={100} viewBox="0 0 100 100" fill="none" opacity={0.18}
                    dangerouslySetInnerHTML={{ __html: ILLUS[i] ?? ILLUS[0] }} />
                  <span style={{
                    position: 'absolute', top: 12, left: 12,
                    fontFamily: 'var(--font-geist-mono), monospace', fontSize: 9,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 10px', borderRadius: 20,
                    background: 'var(--glass-bg-2)', backdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-2)', color: 'var(--fg-2)',
                  }}>{r.tag}</span>
                </div>
                {/* Body */}
                <div style={{ padding: '22px 24px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 10, letterSpacing: '0.06em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>{r.date}</span>
                    <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 9, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 20, background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)', color: 'var(--fg-2)' }}>{r.status}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.3 }}>{r.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--fg-2)', marginBottom: 18 }}>{r.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{r.impactLabel}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--fg)' }}>{r.impactVal}</div>
                    </div>
                    <a href="#" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-3)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                      Voir
                      <svg viewBox="0 0 24 24" width={11} height={11} stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {Array.from({ length: DOTS }).map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{
              width: cur === i ? 20 : 6, height: 6,
              borderRadius: cur === i ? 3 : '50%',
              background: cur === i ? 'var(--fg-2)' : 'var(--border-2)',
              border: 'none', cursor: 'pointer', transition: 'all 0.2s', padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SliderBtn({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      width: 42, height: 42, borderRadius: 10,
      border: '1px solid var(--border-2)',
      background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
      color: 'var(--fg)', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all 0.2s',
    }}>
      <svg viewBox="0 0 24 24" width={16} height={16} stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        {dir === 'left'
          ? <polyline points="15,18 9,12 15,6" />
          : <polyline points="9,18 15,12 9,6" />
        }
      </svg>
    </button>
  )
}

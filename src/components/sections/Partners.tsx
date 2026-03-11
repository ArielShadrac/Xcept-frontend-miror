'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { partners } from '@/lib/data'

export function Partners() {
  const headRef = useScrollReveal()
  const stripRef = useScrollReveal()
  const logoRef = useScrollReveal()
  const trackRef = useRef<HTMLDivElement>(null)
  const [cur, setCur] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const TOTAL = partners.length

  const update = useCallback((idx: number, animate = true) => {
    const track = trackRef.current
    if (!track) return
    const cards = track.querySelectorAll<HTMLElement>('.pcard')
    if (!cards.length) return
    const clamped = Math.max(0, Math.min(idx, TOTAL - 1))
    const cardW = cards[0].offsetWidth + 16
    track.style.transition = animate ? 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' : 'none'
    track.style.transform = `translateX(-${clamped * cardW}px)`
    cards.forEach((c, i) => c.classList.toggle('is-active', i === clamped))
    setCur(clamped)
  }, [TOTAL])

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      setCur(prev => { const next = prev + 1 >= TOTAL ? 0 : prev + 1; update(next); return next })
    }, 4500)
  }, [TOTAL, update])

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
  }, [])

  useEffect(() => {
    update(0, false)
    startAuto()
    const onResize = () => update(cur, false)
    window.addEventListener('resize', onResize)
    return () => { stopAuto(); window.removeEventListener('resize', onResize) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const pct = TOTAL <= 1 ? 100 : (cur / (TOTAL - 1)) * 100

  return (
    <section id="partners" style={{ padding: '112px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div className="sec-tag">Partenaires</div>

        <div ref={headRef} className="reveal" style={{ marginBottom: 72 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end' }}
            className="max-[900px]:!grid-cols-1 max-[900px]:!gap-4">
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.08 }}>
              Ils nous font<br />confiance.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: 'var(--fg-2)' }}>
              Des organisations de santé, institutions académiques et ONG internationales travaillent avec nous sur le terrain.
            </p>
          </div>
        </div>

        {/* Strip */}
        <div ref={stripRef} className="reveal">
          <div style={{ position: 'relative', marginBottom: 64 }}>
            {/* Fade edges */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 80, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 80, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <div
                ref={trackRef}
                style={{ display: 'flex', gap: 16, willChange: 'transform', padding: '4px 2px' }}
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
              >
                {partners.map((p, i) => (
                  <div
                    key={i}
                    className="pcard pcard-bar"
                    style={{
                      flex: '0 0 320px',
                      background: 'var(--glass-bg)',
                      backdropFilter: 'saturate(180%) blur(28px)',
                      WebkitBackdropFilter: 'saturate(180%) blur(28px)',
                      border: '1px solid var(--border-2)',
                      boxShadow: 'var(--shadow-glass)',
                      borderRadius: 'var(--radius-md)', padding: '28px 28px 24px',
                      transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    {/* Logo */}
                    <div style={{
                      width: 64, height: 64, borderRadius: 14,
                      border: '1px solid var(--border-2)', background: 'var(--bg-2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 20, transition: 'all 0.3s',
                    }}>
                      <svg viewBox="0 0 36 36" width={36} height={36}
                        stroke="var(--fg-2)" fill="none" strokeWidth={1.2}
                        strokeLinecap="round" strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: p.logoPath }}
                      />
                    </div>

                    <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>{p.type}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--fg)', marginBottom: 10, lineHeight: 1.2 }}>{p.name}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.68, color: 'var(--fg-2)', marginBottom: 20 }}>{p.desc}</div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
                        Collaboration depuis<span style={{ display: 'block', fontSize: 11, fontWeight: 500, color: 'var(--fg-2)', marginTop: 2, letterSpacing: 0 }}>{p.since}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 9, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 20, border: '1px solid var(--border-2)', background: 'var(--glass-bg-2)', color: 'var(--fg-2)', whiteSpace: 'nowrap', transition: 'all 0.3s' }}>{p.badge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 28 }}>
              <div style={{ display: 'flex', gap: 8 }}>
                {(['left', 'right'] as const).map((dir) => (
                  <button key={dir}
                    onClick={() => { stopAuto(); update(dir === 'left' ? cur - 1 : cur + 1); startAuto() }}
                    style={{ width: 42, height: 42, borderRadius: 10, border: '1px solid var(--border-2)', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', color: 'var(--fg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                    <svg viewBox="0 0 24 24" width={16} height={16} stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {dir === 'left' ? <polyline points="15,18 9,12 15,6" /> : <polyline points="9,18 15,12 9,6" />}
                    </svg>
                  </button>
                ))}
              </div>

              <div style={{ flex: 1, height: 2, background: 'var(--border-2)', borderRadius: 1, overflow: 'hidden', margin: '0 24px' }}>
                <div style={{ height: '100%', background: 'var(--fg)', borderRadius: 1, transition: 'width 0.55s cubic-bezier(0.22,1,0.36,1)', width: `${pct}%` }} />
              </div>

              <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--fg-3)', whiteSpace: 'nowrap', minWidth: 48, textAlign: 'right' }}>
                {String(cur + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div ref={logoRef} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
          className="max-[900px]:!grid-cols-3 max-[620px]:!grid-cols-2">
          {partners.map((p) => (
            <div key={p.name} style={{ background: 'var(--bg-2)', padding: '18px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
              className="hover:!bg-[var(--glass-bg-2)]">
              <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-3)', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
                className="hover:[color:var(--fg-2)]">
                {p.name.replace('CHU ', '').replace(' / WHO Africa', ' Africa').replace('ONG', '').replace('Ministère Santé BF', 'Min. Santé').trim()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Active pcard styles */}
      <style>{`
        .pcard.is-active {
          background: var(--glass-bg-2) !important;
          border-color: var(--border-3) !important;
          box-shadow: var(--shadow-glass-lg) !important;
          transform: translateY(-4px);
        }
        .pcard-bar::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--fg);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .pcard-bar.is-active::before { transform: scaleX(1); }
        .pcard.is-active .pcard-badge { border-color: var(--border-3); color: var(--fg); }
      `}</style>
    </section>
  )
}

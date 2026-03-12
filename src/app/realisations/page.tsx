'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { realisations, testimonials, type Realisation } from '@/lib/data'

const FILTERS = ['Tout', 'Imagerie IA', 'Monitoring', 'Robotique', 'Analytics', 'Télémédecine']



function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function ProjectCard({ r }: { r: Realisation }) {
  return (
    <div style={{
      background: 'var(--bg-2)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)', padding: '36px 32px',
      display: 'flex', flexDirection: 'column', gap: 0,
      transition: 'all 0.25s', cursor: 'default',
      boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
    }} className="hover:!border-[var(--border-3)] hover:!shadow-[var(--shadow-glass-lg)] hover:!-translate-y-[2px]">
      {/* Tag row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--fg-3)', border: '1px solid var(--border-2)',
          padding: '5px 10px', borderRadius: 6,
          background: 'var(--glass-bg)',
        }}>{r.tag}</span>
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
          letterSpacing: '0.08em',
          color: r.status === 'Déployé' ? 'var(--fg-2)' : 'var(--fg-3)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: r.status === 'Déployé' ? 'var(--fg-2)' : 'var(--fg-3)',
            ...(r.status === 'En cours' ? { animation: 'pulseDot 1.8s infinite' } : {}),
          }} />
          {r.status}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.3, marginBottom: 14 }}>
        {r.title}
      </h3>

      {/* Desc */}
      <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: 28, flex: 1 }}>
        {r.desc}
      </p>

      {/* Impact metric */}
      <div style={{
        borderTop: '1px solid var(--border)', paddingTop: 20,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700,
            letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 4,
          }}>{r.impactVal}</div>
          <div style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {r.impactLabel}
          </div>
        </div>
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em',
        }}>{r.date}</span>
      </div>
    </div>
  )
}

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState('Tout')
  const heroRef  = useScrollReveal()
  const statsRef = useScrollReveal()
  const gridRef  = useScrollReveal()
  const testRef  = useScrollReveal()

  const filtered = activeFilter === 'Tout'
    ? realisations
    : realisations.filter(r => r.tag === activeFilter)

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '160px 0 100px', borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag">Réalisations</div>
          <div ref={heroRef} className="reveal"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}
            className="reveal max-[900px]:!grid-cols-1 max-[900px]:!gap-8"
          >
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95 }}>
              Ce qu'on a vraiment<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>construit et déployé.</em>
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.82, color: 'var(--fg-2)' }}>
              Pas des maquettes, pas des pilotes en silo. Des déploiements réels, en conditions réelles, dans des cliniques rurales, des ministères et des communautés où chaque diagnostic compte.
            </p>
          </div>
        </div>
      </section>



      {/* ── PROJECTS GRID ────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Projets</div>

          {/* Filter bar */}
          <div ref={gridRef} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em' }}>
                Tous les projets
              </h2>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {FILTERS.map(f => (
                  <button key={f}
                    onClick={() => setActiveFilter(f)}
                    style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                      padding: '7px 14px', borderRadius: 7, cursor: 'pointer',
                      border: `1px solid ${activeFilter === f ? 'var(--border-3)' : 'var(--border)'}`,
                      background: activeFilter === f ? 'var(--glass-bg-2)' : 'transparent',
                      color: activeFilter === f ? 'var(--fg)' : 'var(--fg-3)',
                      transition: 'all 0.18s',
                    }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
              className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
            >
              {filtered.map((r, i) => (
                <RevealSection key={r.title} delay={i * 60}>
                  <ProjectCard r={r} />
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Témoignages</div>
          <div ref={testRef} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Ce que disent ceux qui l'utilisent.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
            className="max-[900px]:!grid-cols-1"
          >
            {testimonials.map((t, i) => (
              <RevealSection key={t.name} delay={i * 80}>
                <div style={{
                  background: 'var(--glass-bg)', backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-2)',
                  borderRadius: 'var(--radius-md)', padding: '36px 32px',
                  display: 'flex', flexDirection: 'column', gap: 24,
                  boxShadow: 'var(--shadow-glass)',
                }}>
                  {/* Quote mark */}
                  <div style={{
                    fontFamily: 'Georgia, serif', fontSize: 48, lineHeight: 0.6,
                    color: 'var(--fg-4)', userSelect: 'none', marginBottom: 4,
                  }}>&ldquo;</div>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--fg-2)', flex: 1, fontStyle: 'italic' }}>
                    {t.quote}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 9,
                      background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: 11, fontWeight: 700, color: 'var(--fg-2)', flexShrink: 0,
                    }}>{t.initials}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.02em' }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 16 }}>
            Votre institution, notre prochaine réalisation.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.72 }}>
            Nous accompagnons hôpitaux, ministères et ONG dans le déploiement de solutions IA médicales adaptées à leur contexte.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/services" style={{ padding: '14px 28px', borderRadius: 10, background: 'var(--fg)', color: 'var(--bg)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              Voir nos services
            </a>
            <a href="mailto:contact@xcept-health.org" style={{ padding: '14px 28px', borderRadius: 10, border: '1px solid var(--border-2)', background: 'var(--glass-bg)', fontSize: 14, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)' }}>
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

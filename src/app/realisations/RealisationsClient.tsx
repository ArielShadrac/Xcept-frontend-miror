'use client'
import { useState } from 'react'
import type { APIRealisation, APITestimonial } from '@/lib/api'

export default function RealisationsClient({
  realisations,
  testimonials,
}: {
  realisations: APIRealisation[]
  testimonials: APITestimonial[]
}) {
  // Construit les filtres dynamiquement depuis les tags de l'API
  const tags = ['Tout', ...Array.from(new Set(realisations.map(r => r.tag_display)))]
  const [activeFilter, setActiveFilter] = useState('Tout')

  const filtered = activeFilter === 'Tout'
    ? realisations
    : realisations.filter(r => r.tag_display === activeFilter)

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
          <div
            className="reveal max-[900px]:!grid-cols-1 max-[900px]:!gap-8"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}
          >
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95 }}>
              Ce qu&apos;on a vraiment<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>accompli.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 460 }}>
              Nos projets déployés sur le terrain, les chiffres clés et les témoignages de nos partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ────────────────────────────────────────────────── */}
      <section id="projets" style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Projets</div>

          <div className="reveal">
            {/* Filter bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em' }}>
                Tous les projets
              </h2>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {tags.map(f => (
                  <button key={f} onClick={() => setActiveFilter(f)} style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '7px 14px', borderRadius: 7, cursor: 'pointer',
                    border: `1px solid ${activeFilter === f ? 'var(--border-3)' : 'var(--border)'}`,
                    background: activeFilter === f ? 'var(--glass-bg-2)' : 'transparent',
                    color: activeFilter === f ? 'var(--fg)' : 'var(--fg-3)',
                    transition: 'all 0.18s',
                  }}>{f}</button>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div
              className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
            >
              {filtered.map((r, i) => (
                <div key={r.id} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <ProjectCard r={r} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--fg-3)', fontFamily: 'var(--font-geist-mono)', fontSize: 13 }}>
                Aucun projet dans cette catégorie.
              </div>
            )}
          </div>
        </div>
      </section>

     

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ textAlign: 'center' }}>
          <div className="reveal">
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
              <a href="mailto:arielshadrac@gmail.com" style={{ padding: '14px 28px', borderRadius: 10, border: '1px solid var(--border-2)', background: 'var(--glass-bg)', fontSize: 14, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)' }}>
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

// ── ProjectCard ───────────────────────────────────────────────────────────────
function ProjectCard({ r }: { r: APIRealisation }) {
  const isDeployed = r.status === 'deployed'
  return (
    <div style={{
      background: 'var(--bg-2)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)', padding: '36px 32px',
      display: 'flex', flexDirection: 'column',
      transition: 'all 0.25s', height: '100%',
      boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
    }} className="hover:!border-[var(--border-3)] hover:!shadow-[var(--shadow-glass-lg)] hover:!-translate-y-[2px]">

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--fg-3)', border: '1px solid var(--border-2)',
          padding: '5px 10px', borderRadius: 6, background: 'var(--glass-bg)',
        }}>{r.tag_display}</span>
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
          letterSpacing: '0.08em',
          color: isDeployed ? 'var(--fg-2)' : 'var(--fg-3)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: isDeployed ? 'var(--fg-2)' : 'var(--fg-3)',
            ...(!isDeployed ? { animation: 'pulseDot 1.8s infinite' } : {}),
          }} />
          {r.status_display}
        </span>
      </div>

      <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.3, marginBottom: 14 }}>
        {r.title}
      </h3>
      <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: 28, flex: 1 }}>
        {r.description}
      </p>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700,
            letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 4,
          }}>{r.impact_value}</div>
          <div style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {r.impact_label}
          </div>
        </div>
        <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
          {r.date_label}
        </span>
      </div>
    </div>
  )
}
import type { Metadata } from 'next'
import { api, type APIChangelogEntry } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Changelog — Xcept-Health',
  description: "Historique des versions et évolutions de nos solutions médicales open source.",
}

const FALLBACK: APIChangelogEntry[] = [
  {
    id: 1, version: '0.1.0', date_label: '07 mars 2026', date: '2026-03-07', order: 0,
    title: "Sortie officielle d'EyeTrace",
    description: "Première version stable de la bibliothèque Python pour l'extraction de métriques oculaires.",
    highlights: [
      { id: 1, order: 1, text: "Module `pupil` : diamètre, variance, vitesse de constriction/dilatation, hippus" },
      { id: 2, order: 2, text: "Module `eyelids` : EAR, PERCLOS, détection des micro-sommeils" },
      { id: 3, order: 3, text: "Disponible sur PyPI et GitHub sous licence MIT" },
    ],
  },
]

export default async function ChangelogPage() {
  let entries: APIChangelogEntry[] = FALLBACK
  try {
    const data = await api.getChangelog()
    if (data.length > 0) entries = data
  } catch {
    // API down → fallback statique
  }

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* HERO */}
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
          <div className="sec-tag">Changelog</div>
          <div className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24 }}>
              L&apos;évolution de nos{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>solutions</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)' }}>
              Chaque version apporte de nouvelles métriques, des améliorations de robustesse,
              et nous rapproche d&apos;une IA médicale transparente et accessible.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">

          <div className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Journal des modifications
            </h2>
            <p style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 8, fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.06em' }}>
              {entries.length} version{entries.length > 1 ? 's' : ''}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {entries.map((v, idx) => (
              <div
                key={v.id}
                className="reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div style={{
                  display: 'grid', gridTemplateColumns: '140px 1fr',
                  gap: 48, padding: '48px 0',
                  borderBottom: idx < entries.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'start',
                }} className="max-[700px]:!grid-cols-1 max-[700px]:!gap-6">

                  {/* Version + date */}
                  <div style={{ position: 'sticky', top: 120 }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '4px 10px', borderRadius: 6,
                      border: '1px solid var(--border-2)',
                      background: 'var(--glass-bg)',
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: 13, fontWeight: 700,
                      color: 'var(--fg)', marginBottom: 10,
                    }}>
                      v{v.version}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: 10, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'var(--fg-3)',
                    }}>
                      {v.date_label}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.3 }}>
                      {v.title}
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.72, color: 'var(--fg-2)', marginBottom: 24 }}>
                      {v.description}
                    </p>
                    {v.highlights.length > 0 && (
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0 }}>
                        {v.highlights.map(h => (
                          <li key={h.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--fg-2)' }}>
                            <span style={{
                              color: 'var(--fg-3)', marginTop: 2,
                              fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                            }}>▹</span>
                            <span>{h.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
const ITEMS = [
  'IA Médicale', 'Robotique Chirurgicale', 'Imagerie Médicale',
  'Zones Rurales', 'Open Source', 'GDPR · HIPAA',
  'Edge Computing', 'Démocratiser les soins',
]

export function Marquee() {
  const all = [...ITEMS, ...ITEMS]
  return (
    <div style={{
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      padding: '14px 0', overflow: 'hidden', position: 'relative', zIndex: 1,
    }}>
      <div className="animate-marquee" style={{ display: 'flex', width: 'max-content' }}>
        {all.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 32, padding: '0 32px',
            fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', whiteSpace: 'nowrap',
          }}>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--fg-3)', flexShrink: 0 }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── METRICS ──────────────────────────────────────────────────────────────────
const METRICS = [
  { num: 'Haute précision',     lbl: 'Diagnostics IA fiables et validés' },
  { num: 'Solutions Déployées', lbl: 'Intégrations chez nos partenaires cliniques' },
  { num: 'Rapports ouverts',    lbl: 'Méthodologie et données accessibles' },
  { num: 'Analyses actives',    lbl: 'Traitement en continu de nouveaux cas' },
]

export function Metrics() {
  const ref = useScrollReveal()

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        {/* FIX: single className combining reveal + responsive grid overrides */}
        <div
          ref={ref}
          className="reveal max-[900px]:!grid-cols-2 max-[620px]:!grid-cols-1"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'var(--border)', gap: 1,
          }}
        >
          {METRICS.map((m) => (
            <div
              key={m.lbl}
              style={{ background: 'var(--bg)', padding: '28px 32px', transition: 'background 0.2s' }}
              className="hover:!bg-[var(--bg-2)]"
            >
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--fg)', lineHeight: 1.1, marginBottom: 8 }}>
                {m.num}
              </div>
              <div style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
                {m.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

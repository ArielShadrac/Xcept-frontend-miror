'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { solutions, services } from '@/lib/data'

// ─── Shared card grid ─────────────────────────────────────────────────────────
function CardGrid({ id, tag, title, sub, items }: {
  id: string
  tag: string
  title: string
  sub: string
  items: typeof solutions
}) {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id={id} style={{ padding: '128px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div className="sec-tag">{tag}</div>

        <div
          ref={headRef}
          className="reveal"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 72, alignItems: 'end' }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.08 }}
            dangerouslySetInnerHTML={{ __html: title }} />
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--fg-2)' }}>{sub}</p>
        </div>

        <div
          ref={gridRef}
          className="reveal"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1, background: 'var(--border)',
            borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          }}
          // responsive
        >
          {items.map((item) => (
            <div
              key={item.id}
              id={'anchor' in item ? (item as { anchor?: string }).anchor : undefined}
              style={{
                background: 'var(--bg)', padding: '40px 36px',
                transition: 'all 0.25s', position: 'relative', overflow: 'hidden',
              }}
              className="sol-card-hover group hover:!bg-[var(--glass-bg)]"
            >
              {/* Top hover line */}
              <span className="sol-card-hover" />

              {/* Icon */}
              <div style={{
                width: 42, height: 42,
                background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22, transition: 'all 0.22s',
              }} className="group-hover:!border-[var(--border-3)] group-hover:!bg-[var(--glass-bg-3)]">
                <svg viewBox="0 0 24 24" width={18} height={18}
                  stroke="var(--fg-2)" fill="none" strokeWidth={1.6}
                  strokeLinecap="round" strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                  className="group-hover:[stroke:var(--fg)]"
                />
              </div>

              <span style={{
                fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                letterSpacing: '0.1em', color: 'var(--fg-3)', marginBottom: 12,
                textTransform: 'uppercase', display: 'block',
              }}>{item.id}</span>

              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 10, lineHeight: 1.25 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Solutions() {
  return (
    <CardGrid
      id="solutions"
      tag="Solutions"
      title="Une technologie<br/>pensée pour le terrain."
      sub="Nos outils sont conçus en partenariat avec des cliniciens et déployés dans des contextes réels, pas seulement théoriques."
      items={solutions}
    />
  )
}

export function Services() {
  return (
    <CardGrid
      id="services"
      tag="Prestations"
      title="Nos services<br/>d'ingénierie médicale."
      sub="Du conseil à la réalisation, nous accompagnons les acteurs de santé dans leur transformation numérique et robotique."
      items={services}
    />
  )
}

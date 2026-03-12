'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { services } from '@/lib/data'

const PROCESS = [
  { n: '01', label: 'Audit & Cadrage', desc: 'Analyse des besoins cliniques, contraintes réglementaires et infrastructure existante.' },
  { n: '02', label: 'Conception', desc: 'Architecture technique, choix technologiques et prototypage avec validation clinicienne.' },
  { n: '03', label: 'Développement', desc: 'Cycles courts, tests continus, intégration des retours terrain à chaque sprint.' },
  { n: '04', label: 'Validation & Déploiement', desc: 'Tests cliniques, conformité réglementaire, déploiement et transfert de compétences.' },
]

const ENGAGEMENTS = [
  { label: 'Souveraineté des données', desc: 'Déploiement on-premise possible. Vos données médicales ne quittent jamais votre infrastructure sans votre accord.' },
  { label: 'Transfert de compétences', desc: 'Chaque mission inclut formation et documentation pour rendre vos équipes autonomes.' },
  { label: 'Tarification adaptée', desc: 'Modèles tarifaires spécifiques pour les institutions publiques, privées et ONG en Afrique.' },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function ServicesPage() {
  const heroRef    = useScrollReveal()
  const gridRef    = useScrollReveal()
  const processRef = useScrollReveal()
  const engRef     = useScrollReveal()
  const ctaRef     = useScrollReveal()

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
          <div className="sec-tag">Services</div>
          <div ref={heroRef}
              className="reveal max-[900px]:!grid-cols-1 max-[900px]:!gap-8"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}
            >
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95 }}>
              Expertise médicale,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>ingénierie ouverte.</em>
            </h1>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.78, color: 'var(--fg-2)', marginBottom: 32 }}>
                Xcept-Health accompagne cliniques, hôpitaux, ministères et startups dans leur transformation numérique médicale. Missions courtes ou partenariats longs, toujours avec un focus terrain.
              </p>
              <a href="#services-grid"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 22px', borderRadius: 9,
                  border: '1px solid var(--border-2)', background: 'var(--glass-bg)',
                  fontSize: 14, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)',
                }}>
                Voir nos services ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
      <section id="services-grid" style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Offres</div>
          <div ref={gridRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Six expertises,<br />une seule mission.
            </h2>
          </div>

          <div
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1, background: 'var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            }}
            className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
          >
            {services.map((svc) => (
              <div key={svc.id} id={svc.anchor}
                style={{
                  background: 'var(--bg)', padding: '40px 36px',
                  transition: 'all 0.25s', position: 'relative', overflow: 'hidden',
                }}
                className="sol-card-hover group hover:!bg-[var(--glass-bg)]"
              >
                <div style={{
                  width: 42, height: 42, background: 'var(--glass-bg-2)',
                  border: '1px solid var(--border-2)', borderRadius: 9,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22, transition: 'all 0.22s',
                }} className="group-hover:!border-[var(--border-3)] group-hover:!bg-[var(--glass-bg-3)]">
                  <svg viewBox="0 0 24 24" width={18} height={18}
                    stroke="var(--fg-2)" fill="none" strokeWidth={1.6}
                    strokeLinecap="round" strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: svc.icon }}
                    className="group-hover:[stroke:var(--fg)]"
                  />
                </div>
                <span style={{
                  fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                  letterSpacing: '0.1em', color: 'var(--fg-3)', marginBottom: 12,
                  textTransform: 'uppercase', display: 'block',
                }}>{svc.id}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 10, lineHeight: 1.25 }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Méthode</div>
          <div ref={processRef} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Notre façon de travailler.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
            className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
          >
            {PROCESS.map((p, i) => (
              <RevealSection key={p.n} delay={i * 70}>
                <div style={{ background: 'var(--bg)', padding: '36px 28px', height: '100%', transition: 'background 0.2s' }}
                  className="hover:!bg-[var(--glass-bg)]"
                >
                  <div style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 32, fontWeight: 700, letterSpacing: '-0.04em',
                    color: 'var(--fg-3)', marginBottom: 20, lineHeight: 1,
                  }}>{p.n}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{p.label}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ──────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Engagements</div>
          <div ref={engRef} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Ce qu'on ne négocie pas.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {ENGAGEMENTS.map((e, i) => (
              <RevealSection key={e.label} delay={i * 60}>
                <div style={{
                  background: 'var(--bg)', padding: '32px 40px',
                  display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'center',
                  transition: 'background 0.2s',
                }}
                  className="hover:!bg-[var(--glass-bg)] max-[700px]:!grid-cols-1 max-[700px]:!gap-4"
                >
                  <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em' }}>{e.label}</h3>
                  <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div ref={ctaRef} className="reveal"
            style={{
              background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(24px)',
              WebkitBackdropFilter: 'saturate(180%) blur(24px)',
              border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)',
              padding: '72px 64px', textAlign: 'center',
              boxShadow: 'var(--shadow-glass)',
            }}
          >
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Contact</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 16 }}>
              Parlons de votre projet.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', marginBottom: 40, maxWidth: 460, margin: '0 auto 40px' }}>
              Que vous soyez une clinique rurale, un ministère ou une startup de santé, nous avons un modèle d'intervention adapté.
            </p>
            <a href="mailto:contact@xcept-health.org"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 10,
                background: 'var(--fg)', color: 'var(--bg)',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}>
              Contacter l'équipe
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { solutions } from '@/lib/data'
import type { Metadata } from 'next'

// ─── PAGE META (handled via layout — export here for reference) ───────────────
// export const metadata: Metadata = { title: 'Solutions — Xcept-Health' }


const HOW = [
  {
    n: '01',
    title: 'Diagnostic',
    desc: 'Nos modèles analysent images médicales, signes vitaux et symptômes pour fournir une aide au diagnostic en temps réel, même sans connexion.',
    icon: `<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>`,
  },
  {
    n: '02',
    title: 'Intervention',
    desc: 'Assistance robotique et protocoles guidés permettent aux agents de santé non spécialisés d\'effectuer des actes médicaux de base avec précision.',
    icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>`,
  },
  {
    n: '03',
    title: 'Suivi & Alerte',
    desc: 'Monitoring continu avec alertes intelligentes envoyées aux référents médicaux. Détection précoce des complications avant qu\'elles deviennent critiques.',
    icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
  },
]

function SvgIcon({ path, size = 18 }: { path: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
      stroke="currentColor" fill="none" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: path }}
    />
  )
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function SolutionsPage() {
  const heroRef  = useScrollReveal()
  const gridRef  = useScrollReveal()
  const howRef   = useScrollReveal()
  const ctaRef   = useScrollReveal()

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '160px 0 100px', borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--fg) 4%, transparent) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag">Solutions</div>
          <div ref={heroRef} className="reveal">
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 28,
            }}>
              L'IA médicale,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>partout où elle manque.</em>
            </h1>
            <p style={{
              fontSize: 16, lineHeight: 1.75, color: 'var(--fg-2)',
              maxWidth: 560, marginBottom: 44,
            }}>
              Six technologies conçues pour les environnements à faibles ressources.
              Open source, déployables sur edge, validées cliniquement en Afrique subsaharienne.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 24px', borderRadius: 10,
                  background: 'var(--fg)', color: 'var(--bg)',
                  fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em',
                  textDecoration: 'none', transition: 'opacity 0.2s',
                }}>
                Voir sur GitHub
              </a>
              <a href="#solutions-grid"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 24px', borderRadius: 10,
                  border: '1px solid var(--border-2)',
                  background: 'var(--glass-bg)',
                  fontSize: 14, fontWeight: 500,
                  textDecoration: 'none', color: 'var(--fg)',
                  transition: 'all 0.2s',
                }}>
                Explorer les solutions ↓
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* ── SOLUTIONS GRID ───────────────────────────────────────────────── */}
      <section id="solutions-grid" style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Technologie</div>
          <div ref={gridRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Six solutions, une mission.
            </h2>
          </div>

          <div
            className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1, background: 'var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            }}
          >
            {solutions.map((sol) => (
              <div
                key={sol.id}
                style={{
                  background: 'var(--bg)', padding: '40px 36px',
                  transition: 'all 0.25s', position: 'relative', overflow: 'hidden',
                }}
                className="sol-card-hover group hover:!bg-[var(--glass-bg)]"
              >
                <div style={{
                  width: 42, height: 42,
                  background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                  borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22, transition: 'all 0.22s',
                }} className="group-hover:!border-[var(--border-3)] group-hover:!bg-[var(--glass-bg-3)]">
                  <svg viewBox="0 0 24 24" width={18} height={18}
                    stroke="var(--fg-2)" fill="none" strokeWidth={1.6}
                    strokeLinecap="round" strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: sol.icon }}
                    className="group-hover:[stroke:var(--fg)]"
                  />
                </div>
                <span style={{
                  fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                  letterSpacing: '0.1em', color: 'var(--fg-3)', marginBottom: 12,
                  textTransform: 'uppercase', display: 'block',
                }}>{sol.id}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 10, lineHeight: 1.25 }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Fonctionnement</div>
          <div ref={howRef} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Du symptôme au suivi,<br />sans rupture de chaîne.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {HOW.map((step, i) => (
              <RevealSection key={step.n} delay={i * 80}>
                <div style={{
                  background: 'var(--bg)', padding: '40px 48px',
                  display: 'grid', gridTemplateColumns: '80px 1fr',
                  gap: 32, alignItems: 'start',
                  transition: 'background 0.2s',
                }} className="hover:!bg-[var(--glass-bg)]">
                  <div style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700,
                    letterSpacing: '-0.04em', color: 'var(--fg-3)', lineHeight: 1,
                  }}>{step.n}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: 8,
                        border: '1px solid var(--border-2)',
                        background: 'var(--glass-bg-2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--fg-2)',
                      }}>
                        <SvgIcon path={step.icon} size={16} />
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.025em' }}>{step.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--fg-2)', maxWidth: 620 }}>{step.desc}</p>
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
          <div ref={ctaRef} className="reveal">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 20 }}>
              Prêt à déployer ?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', marginBottom: 40, maxWidth: 440, margin: '0 auto 40px' }}>
              Toutes nos solutions sont open source et déployables en autonomie. La documentation est disponible sur GitHub.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '14px 28px', borderRadius: 10, background: 'var(--fg)', color: 'var(--bg)',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                }}>
                Voir la documentation
              </a>
              <a href="/services"
                style={{
                  padding: '14px 28px', borderRadius: 10,
                  border: '1px solid var(--border-2)', background: 'var(--glass-bg)',
                  fontSize: 14, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)',
                }}>
                Nos services d'intégration →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

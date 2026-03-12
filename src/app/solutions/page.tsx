import type { Metadata } from 'next'
import { api, type APISolution } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Solutions — Xcept-Health',
  description: "Six technologies IA médicales open source conçues pour les environnements à faibles ressources.",
}

// ── Fallback statique ─────────────────────────────────────────────────────────
const FALLBACK_SOLUTIONS: APISolution[] = [
  { id: 1, order: 1, title: "Analyse d'Imagerie Médicale", description: "Vision par ordinateur pour la détection d'anomalies dans les radiographies, échographies et IRM, optimisée pour les faibles ressources.", icon_svg: `<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>` },
  { id: 2, order: 2, title: "Assistance Chirurgicale Robotique", description: "Bras robotiques guidés par IA pour augmenter la précision lors des interventions dans des environnements peu équipés.", icon_svg: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>` },
  { id: 3, order: 3, title: "Conformité & Sécurité des Données", description: "Architecture pensée pour GDPR et HIPAA, avec chiffrement de bout en bout et souveraineté des données médicales.", icon_svg: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>` },
  { id: 4, order: 4, title: "Plateforme Collaborative", description: "Écosystème open source permettant aux développeurs, cliniciens et chercheurs du monde entier de co-construire.", icon_svg: `<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>` },
  { id: 5, order: 5, title: "Edge & Faible Latence", description: "Modèles quantisés pour fonctionner sur Raspberry Pi, smartphones et micro-contrôleurs sans connexion stable.", icon_svg: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>` },
  { id: 6, order: 6, title: "Monitoring & Télémédecine", description: "Suivi de patients à distance avec alertes intelligentes, adaptées aux contextes de faible connectivité.", icon_svg: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>` },
]

const HOW = [
  {
    n: '01', title: 'Diagnostic',
    desc: "Nos modèles analysent images médicales, signes vitaux et symptômes pour fournir une aide au diagnostic en temps réel, même sans connexion.",
    icon: `<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>`,
  },
  {
    n: '02', title: 'Intervention',
    desc: "Assistance robotique et protocoles guidés permettent aux agents de santé non spécialisés d'effectuer des actes médicaux de base avec précision.",
    icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>`,
  },
  {
    n: '03', title: 'Suivi & Alerte',
    desc: "Monitoring continu avec alertes intelligentes envoyées aux référents médicaux. Détection précoce des complications avant qu'elles deviennent critiques.",
    icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
  },
]

// ── Page (Server Component) ───────────────────────────────────────────────────
export default async function SolutionsPage() {
  let solutions: APISolution[] = FALLBACK_SOLUTIONS
  try {
    const data = await api.getSolutions()
    if (data.length > 0) solutions = data
  } catch {
    // API down → fallback
  }

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
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--fg) 4%, transparent) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag">Solutions</div>
          <div className="reveal">
            <h1 style={{ fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 28 }}>
              L&apos;IA médicale,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>partout où elle manque.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--fg-2)', maxWidth: 560, marginBottom: 44 }}>
              Six technologies conçues pour les environnements à faibles ressources.
              Open source, déployables sur edge, validées cliniquement en Afrique subsaharienne.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 24px', borderRadius: 10,
                  background: 'var(--fg)', color: 'var(--bg)',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                }}>
                Voir sur GitHub
              </a>
              <a href="#solutions-grid" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 24px', borderRadius: 10,
                border: '1px solid var(--border-2)', background: 'var(--glass-bg)',
                fontSize: 14, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)',
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
          <div className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              {solutions.length} solution{solutions.length > 1 ? 's' : ''}, une mission.
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
            {solutions.map((sol, i) => (
              <div
                key={sol.id}
                className="reveal sol-card-hover group hover:!bg-[var(--glass-bg)]"
                style={{
                  background: 'var(--bg)', padding: '40px 36px',
                  transition: 'all 0.25s', position: 'relative', overflow: 'hidden',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="group-hover:!border-[var(--border-3)] group-hover:!bg-[var(--glass-bg-3)]"
                  style={{
                    width: 42, height: 42,
                    background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                    borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 22, transition: 'all 0.22s',
                  }}>
                  <svg viewBox="0 0 24 24" width={18} height={18}
                    stroke="var(--fg-2)" fill="none" strokeWidth={1.6}
                    strokeLinecap="round" strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: sol.icon_svg }}
                    className="group-hover:[stroke:var(--fg)]"
                  />
                </div>
                <span style={{
                  fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                  letterSpacing: '0.1em', color: 'var(--fg-3)', marginBottom: 12,
                  textTransform: 'uppercase', display: 'block',
                }}>
                  {String(sol.order).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 10, lineHeight: 1.25 }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Fonctionnement</div>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Du symptôme au suivi,<br />sans rupture de chaîne.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {HOW.map((step, i) => (
              <div
                key={step.n}
                className="reveal hover:!bg-[var(--glass-bg)]"
                style={{
                  background: 'var(--bg)', padding: '40px 48px',
                  display: 'grid', gridTemplateColumns: '80px 1fr',
                  gap: 32, alignItems: 'start', transition: 'background 0.2s',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700,
                  letterSpacing: '-0.04em', color: 'var(--fg-3)', lineHeight: 1,
                }}>{step.n}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: 8,
                      border: '1px solid var(--border-2)', background: 'var(--glass-bg-2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-2)',
                    }}>
                      <svg viewBox="0 0 24 24" width={16} height={16}
                        stroke="currentColor" fill="none" strokeWidth={1.6}
                        strokeLinecap="round" strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: step.icon }}
                      />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.025em' }}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--fg-2)', maxWidth: 620 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 20 }}>
              Prêt à déployer ?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 440, margin: '0 auto 40px' }}>
              Toutes nos solutions sont open source et déployables en autonomie.
              La documentation est disponible sur GitHub.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer"
                style={{ padding: '14px 28px', borderRadius: 10, background: 'var(--fg)', color: 'var(--bg)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Voir la documentation
              </a>
              <a href="/services"
                style={{ padding: '14px 28px', borderRadius: 10, border: '1px solid var(--border-2)', background: 'var(--glass-bg)', fontSize: 14, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)' }}>
                Nos services d&apos;intégration →
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
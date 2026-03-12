'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

// Données des versions (changelog)
const VERSIONS = [
    {
    version: '0.1.0',
    date: '09 mars 2026',
    title: 'Soummission de eyetrace au Journal of Open Source Software',
    description: `Nous avons soumis un article détaillant la bibliothèque EyeTrace, 
    ses fonctionnalités`,
    highlights: [
        'Description des modules : pupil, eyelids, gaze, head_pose, signal_analysis',
        'Présentation des métriques extraites et de leur pertinence clinique',
        'Exemples d’utilisation avec des données réelles',
    ],
    },
  {
    version: '0.1.0',
    date: '07 mars 2026',
    title: 'Sortie officielle d’EyeTrace',
    description: `Première version stable de la bibliothèque Python pour l’extraction de métriques oculaires. 
    Elle inclut plus de 50 indicateurs physiologiques et comportementaux : dynamique pupillaire, 
    mouvements palpébraux, analyse des saccades, orientation de la tête, et analyse avancée des signaux.`,
    highlights: [
      'Module `pupil` : diamètre, variance, vitesse de constriction/dilatation, hippus',
      'Module `eyelids` : EAR, PERCLOS, détection des micro-sommeils',
      'Module `gaze` : classification saccades/fixations, entropie du regard',
      'Module `head_pose` : angles de tête, détection de bâillements',
      'Module `signal_analysis` : FFT, entropie, dimension fractale, prédiction du score de Karlinska',
      'Documentation complète et exemples interactifs',
      'Disponible sur PyPI et GitHub sous licence MIT',
    ],

  },
]

// Composant réutilisable pour l'animation au scroll
function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function ChangelogPage() {
  const heroRef = useScrollReveal()
  const versionsRef = useScrollReveal()

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
          <div className="sec-tag">Changelog</div>
          <div ref={heroRef} className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24,
            }}>
              L’évolution de nos <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>solutions</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)' }}>
              Chaque version apporte de nouvelles métriques, des améliorations de robustesse,
              et nous rapproche d’une IA médicale transparente et accessible. Voici les étapes clés.
            </p>
          </div>
        </div>
      </section>

      {/* ── VERSIONS (timeline) ──────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div ref={versionsRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Journal des modifications
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {VERSIONS.map((v, idx) => (
              <RevealSection key={idx} delay={idx * 80}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr',
                  gap: 48, padding: '40px 0',
                  borderBottom: idx < VERSIONS.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'start',
                }} className="max-[700px]:!grid-cols-1 max-[700px]:!gap-6">
                  
                  {/* Version + date */}
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: 18, fontWeight: 700, letterSpacing: '-0.04em',
                      color: 'var(--fg)', marginBottom: 6,
                    }}>
                      {v.version}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--fg-3)',
                    }}>
                      {v.date}
                    </div>
                  </div>

                  {/* Description et détails */}
                  <div>
                    <h3 style={{
                      fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em',
                      marginBottom: 12, lineHeight: 1.3,
                    }}>
                      {v.title}
                    </h3>
                    <p style={{
                      fontSize: 15, lineHeight: 1.72, color: 'var(--fg-2)',
                      marginBottom: 20,
                    }}>
                      {v.description}
                    </p>
                    {v.highlights && v.highlights.length > 0 && (
                      <ul style={{
                        listStyle: 'none',
                        display: 'flex', flexDirection: 'column', gap: 8,
                        margin: 0, padding: 0,
                      }}>
                        {v.highlights.map((item, i) => (
                          <li key={i} style={{
                            display: 'flex', alignItems: 'flex-start', gap: 8,
                            fontSize: 14, color: 'var(--fg-2)',
                          }}>
                            <span style={{ color: 'var(--fg-3)' }}>▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

    
    </main>
  )
}
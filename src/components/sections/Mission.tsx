'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Mission() {
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="mission" style={{ padding: '128px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div className="sec-tag">Mission</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          className="max-[900px]:!grid-cols-1 max-[900px]:!gap-10">

          {/* Left */}
          <div ref={leftRef} className="reveal">
            <h2 style={{ fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 20 }}>
              L&apos;accès aux soins<br />n&apos;est pas une{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>exception.</em>
              <br />C&apos;est une norme.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.78, color: 'var(--fg-2)', marginBottom: 28 }}>
              Chez Xcept-Health, nous utilisons l&apos;intelligence artificielle et la robotique pour supprimer les
              barrières géographiques, économiques et technologiques qui empêchent des millions de personnes
              d&apos;accéder à des soins médicaux de qualité.
            </p>

            {/* ECG panel — IMPROVED: animated draw-on */}
            <div style={{
              marginTop: 28, background: 'var(--glass-bg)',
              backdropFilter: 'saturate(180%) blur(28px)',
              WebkitBackdropFilter: 'saturate(180%) blur(28px)',
              border: '1px solid var(--border-2)', boxShadow: 'var(--shadow-glass)',
              borderRadius: 'var(--radius-md)', padding: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 14 }}>
                <span style={{
                  fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                  letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-2)',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  {/* FIX: use global animate-pulse-dot class */}
                  <span className="animate-pulse-dot" style={{
                    width: 5, height: 5, borderRadius: '50%', background: 'var(--fg-2)',
                  }} />
                  Live
                </span>
              </div>
              <svg viewBox="0 0 300 56" preserveAspectRatio="none" style={{ width: '100%', height: 56 }}>
                {/* IMPROVEMENT: animated draw-on via stroke-dasharray */}
                <path
                  d="M0,28 L20,28 L30,28 L35,8 L40,48 L45,28 L65,28 L85,28 L90,8 L95,48 L100,28 L120,28
                     L140,28 L145,8 L150,48 L155,28 L175,28 L195,28 L200,8 L205,48 L210,28 L230,28
                     L250,28 L255,8 L260,48 L265,28 L285,28 L300,28"
                  stroke="var(--ecg-stroke)" strokeWidth={1.5} fill="none" strokeLinecap="round"
                  className="ecg-mission-path"
                />
              </svg>
            </div>
          </div>

          {/* Right — Pillars */}
          <div ref={rightRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              { n: '01 — Démocratisation', title: 'Outils open source pour tous les cliniciens', desc: "Des solutions accessibles aux chercheurs, médecins et communautés médicales, même dans les environnements les plus contraints." },
              { n: '02 — Disponibilité',   title: 'Déployable sur appareils à faible puissance', desc: "Algorithmes optimisés pour des infrastructures légères, adaptés aux zones rurales ou sous-équipées." },
              { n: '03 — Complexité',      title: 'Gestion des cas médicaux critiques', desc: "Détection d'anomalies dans les images médicales, assistance robotique et diagnostics différentiels avancés." },
            ].map((p, i) => (
              <div key={i}
                style={{
                  background: 'var(--bg-2)', border: '1px solid var(--border)',
                  padding: '26px 30px', transition: 'all 0.22s',
                  borderRadius: i === 0 ? '10px 10px 0 0' : i === 2 ? '0 0 10px 10px' : 0,
                }}
                className="hover:!bg-[var(--glass-bg-2)] hover:!border-[var(--border-3)]"
              >
                <div style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10, letterSpacing: '0.1em', color: 'var(--fg-3)', marginBottom: 10, textTransform: 'uppercase' }}>{p.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMPROVEMENT: ECG draw-on animation scoped to this section */}
      <style>{`
        .ecg-mission-path {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: ecgMissionDraw 2.4s cubic-bezier(0.22,1,0.36,1) 0.6s forwards;
        }
        @keyframes ecgMissionDraw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}

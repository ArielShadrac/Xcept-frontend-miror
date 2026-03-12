'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image'

// Données pour les piliers
const PILLARS = [
  {
    title: 'Accessibilité',
    desc: 'Développer des outils légers et déployables sur du matériel à faible coût, pour que chaque structure de santé  même la plus isolée  puisse bénéficier de diagnostics assistés par IA. Une partie de nos technologies est open source pour favoriser la recherche et la collaboration, tandis que d’autres restent propriétaires pour soutenir notre modèle économique et garantir des droits commerciaux.',
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  },
  {
    title: 'Disponibilité',
    desc: 'Garantir que nos solutions fonctionnent hors ligne, sur batteries, et dans des environnements difficiles. La technologie ne doit pas être un frein : elle doit être là quand on a besoin d’elle, qu’elle soit ouverte ou propriétaire.',
    icon: `<path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/>`,
  },
  {
    title: 'Souveraineté des données',
    desc: 'Les données de santé restent sous le contrôle des établissements qui les produisent. Déploiement on‑premise, conformité GDPR/HIPAA, et aucun lock‑in propriétaire, même pour nos composants fermés.',
    icon: `<path d="M12 2v20M2 12h20"/>`,
  },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function MissionPage() {
  const heroRef = useScrollReveal()
  const pillarsRef = useScrollReveal()
  const ctaRef = useScrollReveal()

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
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 600,
          background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--fg) 5%, transparent) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag">Notre mission</div>
          <div ref={heroRef} className="reveal" style={{ maxWidth: 800 }}>
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24,
            }}>
              Tout commence par<br />une{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>exception.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 600, marginBottom: 32 }}>
              Chez Xcept, nous transformons les défis médicaux en opportunités. 
              L’accès aux soins ne devrait pas être une exception, mais une norme 
               même dans les environnements les plus contraints.
            </p>
          
          </div>
        </div>
      </section>

      {/* ── PROBLÉMATIQUE ───────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Le problème</div>
          <div ref={pillarsRef} className="reveal">
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20 }}>
              L’inégalité d’accès aux soins<br />est la véritable exception.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.72, color: 'var(--fg-2)', maxWidth: 720, marginBottom: 48 }}>
              Des millions de personnes n’ont pas accès à un médecin spécialiste, à un équipement de diagnostic,
              ou même à une connexion stable. Nous existons pour combler ces lacunes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
          >
            {PILLARS.map((pillar, i) => (
              <RevealSection key={pillar.title} delay={i * 80}>
                <div style={{
                  background: 'var(--glass-bg)', border: '1px solid var(--border-2)',
                  borderRadius: 'var(--radius-md)', padding: '32px 28px',
                  backdropFilter: 'blur(12px)', transition: 'all 0.25s',
                  height: '100%',
                }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)]">
                  <div style={{
                    width: 44, height: 44, background: 'var(--glass-bg-2)',
                    border: '1px solid var(--border-2)', borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <svg viewBox="0 0 24 24" width={20} height={20}
                      stroke="var(--fg-2)" fill="none" strokeWidth={1.6}
                      strokeLinecap="round" strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: pillar.icon }}
                    />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--fg-2)' }}>
                    {pillar.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT NOUS AGISSONS ───────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Notre approche</div>
          <div ref={ctaRef} className="reveal" style={{ maxWidth: 680 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24 }}>
              Open source et innovation propriétaire, main dans la main.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: 36 }}>
              Nous croyons que l’impact social et la viabilité économique peuvent coexister. 
              Certains de nos composants fondamentaux sont open source (comme EyeTrace) pour 
              encourager la recherche et la collaboration mondiale. D’autres solutions, plus 
              intégrées ou spécifiques, sont développées en privé pour garantir des droits 
              commerciaux et financer notre mission. Dans tous les cas, nous privilégions des 
              architectures frugales qui fonctionnent là où les infrastructures modernes font défaut.
            </p>
          </div>

        
        </div>
      </section>

     
    </main>
  )
}
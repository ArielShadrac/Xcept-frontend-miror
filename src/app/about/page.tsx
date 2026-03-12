'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const VALUES = [
  { n: '01', label: 'Accès universel', desc: 'Chaque être humain mérite un accès à des soins de qualité, indépendamment de sa géographie ou de ses ressources.' },
  { n: '02', label: 'Transparence radicale', desc: 'Nos algorithmes, nos données d\'entraînement et nos décisions de conception sont publics et auditables.' },
  { n: '03', label: 'Impact mesurable', desc: 'Nous mesurons chaque déploiement en vies améliorées, pas en métriques de croissance.' },
  { n: '04', label: 'Co-construction', desc: 'Les solutions sont construites avec les cliniciens et communautés concernées, jamais pour eux de loin.' },
]

const TEAM = [
  {
    initials: 'AT',
    name: 'Amara Traoré',
    role: 'Co-fondateur & CEO',
    bio: 'Médecin urgentiste, ex-CHU Ouagadougou. A fondé Xcept-Health après avoir constaté les limites du diagnostic dans les zones rurales.',
  },
  {
    initials: 'SC',
    name: 'Sophie Chen',
    role: 'Co-fondatrice & CTO',
    bio: 'PhD en machine learning médical (MIT). Spécialisée dans les modèles edge-optimisés pour environnements contraints.',
  },
  {
    initials: 'MO',
    name: 'Mohamed Ouédraogo',
    role: 'Directeur Opérations Afrique',
    bio: '10 ans d\'expérience en déploiement de systèmes de santé en Afrique subsaharienne, ex-OMS et Médecins Sans Frontières.',
  },
  {
    initials: 'LB',
    name: 'Léa Bertrand',
    role: 'Lead Clinical AI',
    bio: 'Ingénieure biomédicale. Dirige la validation clinique de nos modèles et les partenariats avec les institutions académiques.',
  },
  {
    initials: 'JN',
    name: 'Jean-Paul Ndiaye',
    role: 'Lead Robotique',
    bio: 'Ingénieur mécatronique, ex-INRIA. Conçoit nos systèmes d\'assistance chirurgicale pour les environnements à faibles ressources.',
  },
  {
    initials: 'FK',
    name: 'Fatima Koné',
    role: 'Responsable Partenariats',
    bio: 'Spécialiste santé publique internationale. Coordonne les relations avec les ministères, ONG et institutions partenaires.',
  },
]

const TIMELINE = [
  { year: '2022', label: 'Fondation à Ouagadougou', desc: 'Naissance du projet dans une clinique rurale du Burkina Faso.' },
  { year: '2023', label: 'Premier déploiement clinique', desc: 'Détection mammographique au CHU Ouagadougou. 12 400+ patients analysés.' },
  { year: '2023', label: 'Partenariat OMS Afrique', desc: 'Collaboration sur les standards d\'IA médicale en zone subsaharienne.' },
  { year: '2024', label: '8 cliniques au Mali', desc: 'Monitoring cardiaque IoT. 340+ vies sauvées estimées.' },
  { year: '2024', label: 'Assistance chirurgicale', desc: 'Premier bras robotique open-hardware déployé à Abidjan.' },
  { year: '2025', label: 'Expansion Sahel', desc: 'Application mobile hors-ligne pour 220+ agents de santé communautaire.' },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function AboutPage() {
  const heroRef     = useScrollReveal()
  const valuesRef   = useScrollReveal()
  const teamHRef    = useScrollReveal()
  const timelineRef = useScrollReveal()

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO / MANIFESTE ─────────────────────────────────────────────── */}
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
          <div className="sec-tag">À propos</div>
          <div ref={heroRef} className="reveal" style={{ maxWidth: 840 }}>
            <h1 style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 36,
            }}>
              Nous croyons que l'accès aux soins<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>n'est pas un privilège.</em>
            </h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}
              className="max-[700px]:!grid-cols-1 max-[700px]:!gap-6"
            >
              <p style={{ fontSize: 15, lineHeight: 1.82, color: 'var(--fg-2)' }}>
                Xcept-Health est né d'un constat simple et brutal : des millions de personnes meurent de maladies diagnostiquables et traitables, uniquement parce qu'elles n'ont pas accès à un médecin spécialisé ou à un équipement médical de base.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.82, color: 'var(--fg-2)' }}>
                Notre réponse est technologique, mais surtout humaine : construire des outils open source, déployables en conditions réelles, avec et pour les communautés qui en ont le plus besoin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Valeurs</div>
          <div ref={valuesRef} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Ce qui nous guide.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
            className="max-[700px]:!grid-cols-1"
          >
            {VALUES.map((v, i) => (
              <RevealSection key={v.n} delay={i * 70}>
                <div style={{ background: 'var(--bg)', padding: '44px 40px', height: '100%', transition: 'background 0.2s' }}
                  className="hover:!bg-[var(--glass-bg)]"
                >
                  <div style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 28, fontWeight: 700, letterSpacing: '-0.04em',
                    color: 'var(--fg-3)', marginBottom: 20, lineHeight: 1,
                  }}>{v.n}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 12 }}>{v.label}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--fg-2)' }}>{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Équipe</div>
          <div ref={teamHRef} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Les personnes derrière l'exception.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
            className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
          >
            {TEAM.map((member, i) => (
              <RevealSection key={member.name} delay={i * 60}>
                <div style={{
                  background: 'var(--bg)', padding: '36px',
                  height: '100%', transition: 'background 0.2s', display: 'flex', flexDirection: 'column',
                }} className="hover:!bg-[var(--glass-bg)]">
                  {/* Avatar */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.05em',
                    color: 'var(--fg-2)', marginBottom: 20, flexShrink: 0,
                  }}>
                    {member.initials}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em', marginBottom: 4 }}>{member.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--fg-3)', marginBottom: 14,
                  }}>{member.role}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>{member.bio}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Histoire</div>
          <div ref={timelineRef} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              De l'idée au terrain.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {TIMELINE.map((event, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr',
                  gap: 40, padding: '32px 0',
                  borderBottom: i < TIMELINE.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'start',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 12, letterSpacing: '0.08em', color: 'var(--fg-3)',
                    paddingTop: 3,
                  }}>{event.year}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em', marginBottom: 6 }}>{event.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65 }}>{event.desc}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div style={{
            background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
            border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)',
            padding: '72px 64px', textAlign: 'center', boxShadow: 'var(--shadow-glass)',
          }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 16 }}>
              Rejoignez l'équipe.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 420, margin: '0 auto 36px', lineHeight: 1.72 }}>
              Nous cherchons des ingénieurs, cliniciens et designers qui veulent que leur travail ait un vrai impact.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '13px 26px', borderRadius: 10, background: 'var(--fg)', color: 'var(--bg)',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                }}>Contribuer sur GitHub</a>
              <a href="mailto:contact@xcept-health.org"
                style={{
                  padding: '13px 26px', borderRadius: 10, border: '1px solid var(--border-2)',
                  background: 'var(--glass-bg)', fontSize: 14, fontWeight: 500,
                  textDecoration: 'none', color: 'var(--fg)',
                }}>Nous contacter</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

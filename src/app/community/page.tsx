'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image'
import Link from 'next/link'

// Données des contributeurs principaux (à remplacer par de vraies personnes)
const CONTRIBUTORS = [
  {
    name: 'Ariel Shadrac Ouédraogo',
    role: 'Fondateur & maintainer',
    github: 'https://github.com/ariel-shadrac',
    photo: '/team/ariel.jpg', // optionnel
  },
  {
    name: 'Claire Mballa',
    role: 'Validation clinique',
    github: 'https://github.com/claire-mballa',
    photo: null,
  },
  {
    name: 'Thierno Diallo',
    role: 'Core developer',
    github: 'https://github.com/thierno-diallo',
    photo: null,
  },
  {
    name: 'Aïssatou Ndiaye',
    role: 'Community manager',
    github: 'https://github.com/assatou-ndiaye',
    photo: null,
  },
  {
    name: 'Jean Dupont',
    role: 'Documentation',
    github: 'https://github.com/jean-dupont',
    photo: null,
  },
  {
    name: 'Fatima Sy',
    role: 'UI/UX',
    github: 'https://github.com/fatima-sy',
    photo: null,
  },
]

// Événements à venir
const EVENTS = [

  {
    title: 'Formation EyeTrace',
    date: '5-6 mai 2026',
    location: 'Dakar',
    description: 'Atelier pratique pour intégrer EyeTrace dans vos projets de recherche.',
    link: '#',
  },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

// Helper pour initiales
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function CommunityPage() {
  const heroRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const contributeRef = useScrollReveal()
  const contributorsRef = useScrollReveal()
  const eventsRef = useScrollReveal()

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* Hero */}
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
          <div className="sec-tag">Communauté</div>
          <div ref={heroRef} className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24,
            }}>
              Construite <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>ensemble.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 560 }}>
              Une communauté mondiale de développeurs, cliniciens et chercheurs qui partagent
              la même ambition : rendre les soins médicaux accessibles à tous.
            </p>
          </div>
        </div>
      </section>

  
      {/* Comment contribuer */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Contribuer</div>
          <div ref={contributeRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Comment rejoindre l'aventure ?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1">
            {[
              { step: '01', title: 'Explorez nos dépôts', desc: 'Rendez-vous sur GitHub, parcourez les projets et trouvez celui qui vous intéresse.' },
              { step: '02', title: 'Rejoignez les discussions', desc: 'Posez vos questions, proposez des idées ou aidez d’autres contributeurs sur les issues.' },
              { step: '03', title: 'Soumettez une pull request', desc: 'Codez, documentez ou testez, puis ouvrez une PR pour partager votre travail.' },
            ].map((item, i) => (
              <RevealSection key={item.step} delay={i * 80}>
                <div style={{
                  background: 'var(--glass-bg)', border: '1px solid var(--border-2)',
                  borderRadius: 'var(--radius-md)', padding: '32px 28px',
                  backdropFilter: 'blur(12px)', height: '100%',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: 32, fontWeight: 700, letterSpacing: '-0.04em',
                    color: 'var(--fg-3)', marginBottom: 16, lineHeight: 1,
                  }}>{item.step}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px', borderRadius: 10,
                background: 'var(--fg)', color: 'var(--bg)',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}>
              <svg viewBox="0 0 24 24" width={16} height={16} stroke="currentColor" fill="none" strokeWidth={1.8}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
              Accéder à GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contributeurs principaux */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Contributeurs</div>
          <div ref={contributorsRef} className="reveal" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Quelques visages de la communauté
            </h2>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 20,
          }}>
            {CONTRIBUTORS.map((person, idx) => (
              <RevealSection key={person.name} delay={idx * 40}>
                <div style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 16px',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                }} className="hover:!border-[var(--border-3)] hover:!shadow-sm">
                  {/* Avatar */}
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    margin: '0 auto 16px',
                    overflow: 'hidden',
                    background: 'var(--glass-bg-2)',
                    border: '1px solid var(--border-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {person.photo ? (
                      <Image src={person.photo} alt={person.name} width={80} height={80} style={{ objectFit: 'cover' }} />
                    ) : (
                      <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 24, fontWeight: 600, color: 'var(--fg-3)' }}>
                        {getInitials(person.name)}
                      </span>
                    )}
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{person.name}</h4>
                  <div style={{ fontSize: 12, color: 'var(--fg-3)', marginBottom: 12 }}>{person.role}</div>
                  <a href={person.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-block', color: 'var(--fg-2)' }}>
                    <svg viewBox="0 0 24 24" width={18} height={18} stroke="currentColor" fill="none" strokeWidth={1.8}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                    </svg>
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Événements */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Événements</div>
          <div ref={eventsRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Prochains rendez-vous
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {EVENTS.map((event, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div style={{
                  background: 'var(--bg)', padding: '32px 40px',
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center',
                }} className="max-[700px]:!grid-cols-1">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 600 }}>{event.title}</h3>
                      <span style={{
                        fontFamily: 'var(--font-geist-mono), monospace',
                        fontSize: 10, letterSpacing: '0.08em',
                        color: 'var(--fg-3)', background: 'var(--glass-bg-2)',
                        padding: '4px 8px', borderRadius: 4,
                      }}>{event.date}</span>
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--fg-2)', marginBottom: 6 }}>{event.description}</p>
                    <div style={{ fontSize: 12, color: 'var(--fg-3)' }}>📍 {event.location}</div>
                  </div>
                  <a href={event.link} target="_blank" rel="noopener noreferrer"
                    style={{
                      padding: '8px 20px', borderRadius: 8,
                      border: '1px solid var(--border-2)',
                      background: 'var(--glass-bg)',
                      fontSize: 13, textDecoration: 'none', color: 'var(--fg)',
                      whiteSpace: 'nowrap',
                    }}>
                    En savoir plus →
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div style={{
            background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
            border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)',
            padding: '72px 64px', textAlign: 'center',
            boxShadow: 'var(--shadow-glass)',
          }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 16 }}>
              Rejoignez des centaines de passionnés
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.72 }}>
              La communauté Xcept grandit chaque jour. Ensemble, nous construisons l’avenir de la santé accessible.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '14px 32px', borderRadius: 10, background: 'var(--fg)', color: 'var(--bg)',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                }}>
                Rejoindre sur GitHub
              </a>
              <Link href="/solutions"
                style={{
                  padding: '14px 32px', borderRadius: 10, border: '1px solid var(--border-2)',
                  background: 'var(--glass-bg)', fontSize: 14, fontWeight: 500,
                  textDecoration: 'none', color: 'var(--fg)',
                }}>
                Découvrir nos projets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
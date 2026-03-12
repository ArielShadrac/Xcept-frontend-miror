'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image'

// Données de l’équipe avec photos (à remplacer par les vrais chemins)
const TEAM = [
  {
    name: 'Ariel Shadrac Ouédraogo',
    role: 'Fondateur & CEO',
    bio: 'Ingénieur en IA et entrepreneur social. Ancien chercheur en vision par ordinateur appliquée à la santé. Convaincu que la technologie peut rendre les soins accessibles partout.',
    linkedin: 'https://www.linkedin.com/in/ariel-shadrac-ouedraogo',
    photo: '/team/ariel.jpg', // À placer dans public/team/
  },
  {
    name: 'Claire Mballa',
    role: 'Directrice médicale',
    bio: 'Médecin urgentiste, ex-CHU Yaoundé. Elle assure la validation clinique de nos outils et forme les équipes terrain.',
    linkedin: '#',
    photo: null, // Pas de photo → fallback sur initiales
  },
  {
    name: 'Thierno Diallo',
    role: 'Lead développeur',
    bio: 'Expert en systèmes embarqués et optimisation de modèles pour environnements contraints. A contribué à des projets open source majeurs.',
    linkedin: '#',
    photo: null,
  },
  {
    name: 'Aïssatou Ndiaye',
    role: 'Responsable partenariats',
    bio: 'Spécialiste en santé publique, elle coordonne les relations avec les ministères, ONG et institutions académiques en Afrique de l’Ouest.',
    linkedin: '#',
    photo: null,
  },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function TeamPage() {
  const heroRef = useScrollReveal()
  const gridRef = useScrollReveal()

  // Fonction pour obtenir les initiales
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

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
          <div className="sec-tag">Notre équipe</div>
          <div ref={heroRef} className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24,
            }}>
              Les personnes derrière<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>l’exception.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 560 }}>
              Une équipe internationale de cliniciens, ingénieurs et chercheurs unie par la même conviction : l’accès aux soins ne doit plus être un privilège.
            </p>
          </div>
        </div>
      </section>

      {/* Grille de l’équipe */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div ref={gridRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Rencontrez l’équipe
            </h2>
          </div>

          <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: 64, // Espace généreux pour éviter l'effet "collé"
  padding: '40px 0',
}}>
  {TEAM.map((member, idx) => (
    <RevealSection key={member.name} delay={idx * 80}>
      <div 
        style={{
          position: 'relative',
          height: '100%',
          // On décale les cartes impaires pour créer un effet de vague innovant
          marginTop: idx % 2 !== 0 ? 40 : 0,
        }}
        className="group"
      >
        {/* L'ombre portée diffuse (Glow) qui suit la couleur de la bordure */}
        <div className="absolute -inset-2 bg-[var(--border-2)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

        <div style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--border-2)',
          borderRadius: 32,
          padding: '40px 32px 32px 32px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        }} className="hover:!border-[var(--border-3)] hover:!shadow-2xl">
          
          {/* Section Photo Innovante : Masque Organique */}
          <div style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            marginBottom: 32,
          }}>
            <div style={{
              position: 'absolute',
              inset: -8,
              border: '1px solid var(--border-2)',
              borderRadius: '24px',
              transform: 'rotate(-10deg)',
            }} className="group-hover:rotate-0 transition-transform duration-500" />
            
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'var(--bg)',
              border: '1px solid var(--border-3)',
              position: 'relative',
              zIndex: 2,
            }}>
              {member.photo ? (
                <img 
                  src={member.photo} 
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: 24, fontWeight: 700, color: 'var(--fg-3)',
                }}>
                  {member.name[0]}
                </div>
              )}
            </div>
          </div>

          {/* Badge de rôle - Style Pill Tech */}
          <div style={{
            alignSelf: 'flex-start',
            padding: '4px 12px',
            borderRadius: '100px',
            background: 'var(--bg)',
            border: '1px solid var(--border-2)',
            fontSize: 10,
            fontFamily: 'var(--font-geist-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--fg-3)',
            marginBottom: 16,
          }}>
            {member.role}
          </div>

          <h3 style={{ 
            fontSize: 24, 
            fontWeight: 700, 
            letterSpacing: '-0.04em', 
            marginBottom: 12,
            color: 'var(--fg-1)'
          }}>
            {member.name}
          </h3>

          <p style={{ 
            fontSize: 14, 
            lineHeight: 1.8, 
            color: 'var(--fg-2)', 
            marginBottom: 32, 
            flex: 1,
            fontWeight: 400
          }}>
            {member.bio}
          </p>

          {/* Social Link - Version Ultra Épurée */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 24,
            borderTop: '1px solid var(--border-2)',
          }}>
            <span style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 500 }}>Connect</span>
            {member.linkedin && member.linkedin !== '#' && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 32, height: 32,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: '1px solid var(--border-2)',
                  transition: 'all 0.3s ease'
                }}
                className="hover:!scale-110 hover:!border-[var(--fg-1)]"
              >
                <svg viewBox="0 0 24 24" width={14} height={14} stroke="var(--fg-1)" fill="none" strokeWidth={2}>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </RevealSection>
  ))}
</div>
        </div>
      </section>

      {/* CTA Rejoignez-nous */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
            border: '1px solid var(--border-2)',
            borderRadius: 'var(--radius-lg)',
            padding: '72px 64px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-glass)',
          }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 16 }}>
              Vous voulez nous rejoindre ?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.72 }}>
              Nous recrutons des talents passionnés par l’IA médicale, la robotique et l’impact social. Écrivez-nous !
            </p>
            <a href="mailto:arielshadrac@gmail.com"
              style={{
                padding: '14px 32px',
                borderRadius: 10,
                background: 'var(--fg)',
                color: 'var(--bg)',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
              }}>
              Postuler spontanément
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
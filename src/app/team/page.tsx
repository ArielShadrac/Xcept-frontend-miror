import type { Metadata } from 'next'
import { api, type APITeamMember } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Équipe — Xcept-Health',
  description: "Les cliniciens, ingénieurs et chercheurs qui construisent l'IA médicale open source pour l'Afrique.",
}

function MemberCard({ member }: { member: APITeamMember }) {
  const hasLinkedin = Boolean(member.linkedin && member.linkedin !== '#')
  const hasGithub   = Boolean(member.github   && member.github   !== '#')

  return (
    <div style={{
      background: 'var(--bg-2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'border-color 0.25s, transform 0.25s',
      display: 'flex',
      flexDirection: 'column',
    }} className="hover:!border-[var(--border-3)] hover:!-translate-y-1">

      {/* Photo / initiales */}
      <div style={{
        height: 220,
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Accent line top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, var(--fg) 0%, transparent 100%)',
          opacity: 0.15,
        }} />

        {member.photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo_url}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'var(--glass-bg-2)',
              border: '1px solid var(--border-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: 22, fontWeight: 700, color: 'var(--fg-3)',
            }}>
              {member.initials}
            </div>
            <span style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: 10, color: 'var(--fg-4)', letterSpacing: '0.08em',
            }}>
              photo à venir
            </span>
          </div>
        )}
      </div>

      {/* Infos */}
      <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Rôle */}
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--fg-3)', marginBottom: 10, display: 'block',
        }}>
          {member.role}
        </span>

        {/* Nom */}
        <h3 style={{
          fontSize: 18, fontWeight: 700,
          letterSpacing: '-0.03em', lineHeight: 1.2,
          marginBottom: 12, color: 'var(--fg)',
        }}>
          {member.name}
        </h3>

        {/* Bio */}
        <p style={{
          fontSize: 13, lineHeight: 1.8, color: 'var(--fg-2)',
          flex: 1, marginBottom: 24,
        }}>
          {member.bio}
        </p>

        {/* Liens */}
        {(hasLinkedin || hasGithub) && (
          <div style={{
            display: 'flex', gap: 8,
            paddingTop: 20, borderTop: '1px solid var(--border)',
          }}>
            {hasLinkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 12, color: 'var(--fg-3)', textDecoration: 'none',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  transition: 'color 0.2s',
                }} className="hover:!text-[var(--fg)]">
                <svg viewBox="0 0 24 24" width={13} height={13} stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            )}
            {hasGithub && (
              <a href={member.github} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 12, color: 'var(--fg-3)', textDecoration: 'none',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  transition: 'color 0.2s',
                }} className="hover:!text-[var(--fg)]">
                <svg viewBox="0 0 24 24" width={13} height={13} stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default async function TeamPage() {
  let team: APITeamMember[] = []
  try {
    team = await api.getTeam()
  } catch {
    // silencieux
  }

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '160px 0 100px',
        borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5"
          style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag">Notre équipe</div>
          <div className="reveal" style={{ maxWidth: 680 }}>
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24,
            }}>
              Les personnes<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>
                derrière l&apos;exception.
              </em>
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 520 }}>
              Cliniciens, ingénieurs, chercheurs — unis par la conviction que l&apos;accès aux soins ne doit plus être un privilège.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRILLE ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">

          {team.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: 13, color: 'var(--fg-3)',
              }}>
                L&apos;équipe arrive bientôt.
              </div>
            </div>
          ) : (
            <>
              <div className="reveal" style={{ marginBottom: 56, display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <h2 style={{
                  fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700,
                  letterSpacing: '-0.04em',
                }}>
                  Rencontrez l&apos;équipe dirigeante
                </h2>
                <span style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em',
                }}>
                  {team.length} membres
                </span>
              </div>

              <div
                className="max-[700px]:!grid-cols-2 max-[480px]:!grid-cols-1"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 20,
                }}
              >
                {team.map((member, i) => (
                  <div key={member.id} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                    <MemberCard member={member} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>



    </main>
  )
}
import type { Metadata } from 'next'
import { api, type APITestimonial } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Témoignages — Xcept-Health',
  description: "Ce que disent les cliniciens, agents de santé et contributeurs qui utilisent nos solutions sur le terrain.",
}

const FALLBACK: APITestimonial[] = [
  {
    id: 1, order: 1,
    quote: "Grâce à l'outil de détection mammographique, nous avons diagnostiqué 3 fois plus de cas précoces. C'est une révolution pour nos patients ruraux.",
    initials: 'DK', name: 'Dr. Daouda Kaboré', role: 'Oncologue — CHU Ouagadougou', avatar_url: null,
  },
  {
    id: 2, order: 2,
    quote: "L'application fonctionne même sans réseau. Mes agents communautaires l'utilisent quotidiennement pour référer les cas urgents.",
    initials: 'AT', name: 'Aminata Touré', role: 'Coordonnatrice santé — Sahel Care', avatar_url: null,
  },
  {
    id: 3, order: 3,
    quote: "Contribuer à Xcept-Health, c'est travailler sur du code qui sauve réellement des vies. La communauté est de très haute qualité.",
    initials: 'JO', name: 'Jean-Michel Ouédraogo', role: 'ML Engineer — Contributeur core', avatar_url: null,
  },
]

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} fill="none"
      stroke="var(--fg-4)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
    </svg>
  )
}

export default async function TemoignagesPage() {
  let testimonials: APITestimonial[] = FALLBACK
  try {
    const data = await api.getTestimonials()
    if (data.length > 0) testimonials = data
  } catch {
    // API down → fallback
  }

  // Sépare le premier témoignage (featured) des autres
  const [featured, ...rest] = testimonials

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
          <div className="sec-tag">Témoignages</div>
          <div className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24 }}>
              Ce qu&apos;ils disent<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>du terrain.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 520 }}>
              Cliniciens, agents communautaires et développeurs — les personnes qui utilisent
              nos outils chaque jour dans des conditions réelles.
            </p>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGE FEATURED ───────────────────────────────────────────── */}
      {featured && (
        <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
            <div className="reveal">
              <div style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'saturate(180%) blur(24px)',
                WebkitBackdropFilter: 'saturate(180%) blur(24px)',
                border: '1px solid var(--border-2)',
                borderRadius: 'var(--radius-lg)',
                padding: '64px 72px',
                boxShadow: 'var(--shadow-glass)',
                position: 'relative',
              }} className="max-[700px]:!px-10 max-[500px]:!px-6">
                <div style={{ marginBottom: 32 }}>
                  <QuoteIcon />
                </div>
                <blockquote style={{
                  fontSize: 'clamp(18px, 2.5vw, 26px)',
                  fontWeight: 400, lineHeight: 1.55,
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)', marginBottom: 40,
                  fontStyle: 'italic',
                }}>
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'var(--bg)', border: '1px solid var(--border-3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden', flexShrink: 0,
                  }}>
                    {featured.avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={featured.avatar_url} alt={featured.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 16, fontWeight: 700, color: 'var(--fg-3)' }}>
                        {featured.initials}
                      </span>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)' }}>{featured.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 2 }}>{featured.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GRILLE TÉMOIGNAGES ────────────────────────────────────────────── */}
      {rest.length > 0 && (
        <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
            <div className="sec-tag">Tous les témoignages</div>
            <div className="reveal" style={{ marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                {testimonials.length} voix du terrain.
              </h2>
            </div>

            <div
              className="max-[700px]:!grid-cols-1"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}
            >
              {rest.map((t, i) => (
                <div
                  key={t.id}
                  className="reveal"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div style={{
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '36px 32px',
                    height: '100%',
                    display: 'flex', flexDirection: 'column',
                    transition: 'all 0.25s',
                  }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg)]">

                    <div style={{ marginBottom: 20 }}>
                      <QuoteIcon />
                    </div>

                    <blockquote style={{
                      fontSize: 15, lineHeight: 1.75,
                      color: 'var(--fg-2)', fontStyle: 'italic',
                      flex: 1, marginBottom: 28,
                    }}>
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      paddingTop: 20, borderTop: '1px solid var(--border)',
                    }}>
                      <div style={{
                        width: 38, height: 38, borderRadius: '50%',
                        background: 'var(--bg)', border: '1px solid var(--border-2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden', flexShrink: 0,
                      }}>
                        {t.avatar_url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={t.avatar_url} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 13, fontWeight: 700, color: 'var(--fg-3)' }}>
                            {t.initials}
                          </span>
                        )}
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{t.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2 }}>{t.role}</div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="reveal" style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
            border: '1px solid var(--border-2)',
            borderRadius: 'var(--radius-lg)',
            padding: '72px 64px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-glass)',
          }}>
            <div className="sec-tag" style={{ justifyContent: 'center', marginBottom: 20 }}>Partager</div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 16 }}>
              Vous utilisez nos outils ?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.72 }}>
              Partagez votre expérience terrain. Votre retour aide la communauté et oriente nos priorités de développement.
            </p>
            <a href="mailto:arielshadrac@gmail.com?subject=Témoignage Xcept-Health"
              style={{
                padding: '14px 32px', borderRadius: 10,
                background: 'var(--fg)', color: 'var(--bg)',
                fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-block',
              }}>
              Envoyer mon témoignage
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
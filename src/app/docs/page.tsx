import type { Metadata } from 'next'
import Link from 'next/link'
import { api, type APIDocProject } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Documentation — Xcept-Health',
  description: "Documentation de nos projets open source.",
}

const LINK_ICONS: Record<string, string> = {
  github:      `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>`,
  readthedocs: `<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>`,
  pypi:        `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`,
  arxiv:       `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6"/>`,
  demo:        `<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>`,
  video:       `<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>`,
  other:       `<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>`,
}

export default async function DocsPage() {
  let projects: APIDocProject[] = []
  try {
    projects = await api.getDocs()
  } catch {
    // API down → liste vide
  }

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* HERO */}
      <section style={{ padding: '160px 0 100px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag">Documentation</div>
          <div className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24 }}>
              Tout ce qu&apos;il faut pour<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>construire avec Xcept.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 560 }}>
              Documentation officielle de nos projets open source. Chaque projet a sa propre page avec guides, API et ressources.
            </p>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Documentations</div>
          <div className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              {projects.length > 0 ? `${projects.length} projet${projects.length > 1 ? 's' : ''} documenté${projects.length > 1 ? 's' : ''}` : 'Nos Documentations'}
            </h2>
          </div>

          {projects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--fg-3)', fontFamily: 'var(--font-geist-mono)', fontSize: 13 }}>
              Documentation en cours de rédaction…
            </div>
          ) : (
            <div
              className="max-[900px]:!grid-cols-1"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}
            >
              {projects.map((p, i) => (
                <Link
                  key={p.id}
                  href={`/docs/${p.slug}`}
                  className="reveal hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)] hover:!-translate-y-[2px]"
                  style={{
                    display: 'block', textDecoration: 'none',
                    background: 'var(--bg-2)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                    transition: 'all 0.25s', transitionDelay: `${i * 60}ms`,
                  }}
                >
                  {/* Cover image */}
                  {p.cover_image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.cover_image_url} alt={p.name}
                      style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', borderBottom: '1px solid var(--border)' }}
                    />
                  )}

                  <div style={{ padding: '32px' }}>
                    {/* Icon + nom */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                      {p.icon_svg && (
                        <div style={{
                          width: 44, height: 44, borderRadius: 10,
                          background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <svg viewBox="0 0 24 24" width={20} height={20}
                            stroke="var(--fg-2)" fill="none" strokeWidth={1.6}
                            dangerouslySetInnerHTML={{ __html: p.icon_svg }}
                          />
                        </div>
                      )}
                      <div>
                        <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--fg)' }}>
                          {p.name}
                        </h3>
                      </div>
                    </div>

                    <p style={{ fontSize: 14, lineHeight: 1.72, color: 'var(--fg-2)', marginBottom: 20 }}>
                      {p.tagline}
                    </p>

                    <span style={{
                      fontSize: 13, color: 'var(--fg-2)', fontWeight: 500,
                      borderBottom: '1px solid var(--border-2)', paddingBottom: 2,
                    }}>
                      Voir la documentation →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 112px' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="reveal" style={{
            background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(24px)',
            border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)',
            padding: '64px 48px', textAlign: 'center', boxShadow: 'var(--shadow-glass)',
          }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 16 }}>
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.72 }}>
              Notre communauté et notre équipe sont là pour vous aider.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ padding: '14px 32px', borderRadius: 10, background: 'var(--fg)', color: 'var(--bg)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Contactez-nous
              </Link>
              <a href="https://github.com/Xcept-Health/discussions" target="_blank" rel="noopener noreferrer"
                style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid var(--border-2)', background: 'var(--glass-bg)', fontSize: 14, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)' }}>
                Forum GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
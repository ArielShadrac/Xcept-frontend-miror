import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { api, type APIDocProject, type APIDocLink } from '@/lib/api'

const LINK_ICONS: Record<string, string> = {
  github:      `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>`,
  readthedocs: `<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>`,
  pypi:        `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`,
  arxiv:       `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6"/>`,
  demo:        `<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>`,
  video:       `<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>`,
  other:       `<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>`,
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const p = await api.getDoc(params.slug)
    return { title: `${p.name} — Documentation Xcept-Health`, description: p.tagline }
  } catch {
    return { title: 'Documentation — Xcept-Health' }
  }
}

function LinkButton({ link }: { link: APIDocLink }) {
  const icon = LINK_ICONS[link.link_type] ?? LINK_ICONS.other
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '10px 20px', borderRadius: 9,
      border: '1px solid var(--border-2)', background: 'var(--glass-bg)',
      fontSize: 13, fontWeight: 500, textDecoration: 'none', color: 'var(--fg)',
      transition: 'all 0.2s',
    }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)]">
      <svg viewBox="0 0 24 24" width={14} height={14}
        stroke="currentColor" fill="none" strokeWidth={1.8}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      {link.label}
    </a>
  )
}

export default async function DocDetailPage({ params }: { params: { slug: string } }) {
  let project: APIDocProject
  try {
    project = await api.getDoc(params.slug)
  } catch {
    notFound()
  }

  const sections  = project.sections  ?? []
  const links     = project.links     ?? []
  const images    = project.images    ?? []

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* HERO */}
      <section style={{ padding: '160px 0 80px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, fontSize: 13, color: 'var(--fg-3)' }}>
            <Link href="/docs" style={{ color: 'var(--fg-3)', textDecoration: 'none' }} className="hover:!text-[var(--fg)]">
              Documentation
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--fg-2)' }}>{project.name}</span>
          </div>

          <div className="reveal" style={{ maxWidth: 800 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              {project.icon_svg && (
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg viewBox="0 0 24 24" width={24} height={24}
                    stroke="var(--fg-2)" fill="none" strokeWidth={1.6}
                    dangerouslySetInnerHTML={{ __html: project.icon_svg }}
                  />
                </div>
              )}
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95 }}>
                {project.name}
              </h1>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 640, marginBottom: 32 }}>
              {project.tagline}
            </p>

            {/* Liens externes */}
            {links.length > 0 && (
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {links.map(link => <LinkButton key={link.id} link={link} />)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      {project.cover_image_url && (
        <div style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.cover_image_url} alt={project.name}
              style={{ width: '100%', maxHeight: 480, objectFit: 'cover', borderRadius: 'var(--radius-lg)', margin: '48px 0' }}
            />
          </div>
        </div>
      )}

      {/* CONTENU PRINCIPAL */}
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ padding: '80px 0 112px' }}>
        <div
          className="max-[900px]:!grid-cols-1"
          style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 64, alignItems: 'start' }}
        >

          {/* Sections */}
          <div>
            {/* Description générale */}
            {project.description && (
              <div className="reveal" style={{ marginBottom: 64 }}>
                <div style={{
                  fontSize: 16, lineHeight: 1.85, color: 'var(--fg-2)',
                  whiteSpace: 'pre-wrap',
                }}>
                  {project.description}
                </div>
              </div>
            )}

            {/* Sections */}
            {sections.map((section, i) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="reveal"
                style={{ marginBottom: 64, transitionDelay: `${i * 60}ms` }}
              >
                <h2 style={{
                  fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700,
                  letterSpacing: '-0.03em', marginBottom: 20,
                  paddingBottom: 16, borderBottom: '1px solid var(--border)',
                }}>
                  {section.title}
                </h2>
                <div style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--fg-2)', whiteSpace: 'pre-wrap' }}>
                  {section.content}
                </div>

                {/* Images de la section */}
                {section.images && section.images.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
                    {section.images.map(img => img.image_url && (
                      <figure key={img.id} style={{ margin: 0 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.image_url} alt={img.caption || section.title}
                          style={{ width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
                        />
                        {img.caption && (
                          <figcaption style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 8, textAlign: 'center', fontFamily: 'var(--font-geist-mono), monospace' }}>
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Galerie d'images globales */}
            {images.filter(img => !img.section).length > 0 && (
              <div className="reveal" style={{ marginBottom: 64 }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                  Galerie
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                  {images.filter(img => !img.section).map(img => img.image_url && (
                    <figure key={img.id} style={{ margin: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.image_url} alt={img.caption || project.name}
                        style={{ width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
                      />
                      {img.caption && (
                        <figcaption style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 6, fontFamily: 'var(--font-geist-mono), monospace' }}>
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: 120 }}>
            {/* Table des matières */}
            {sections.length > 0 && (
              <div className="reveal" style={{
                background: 'var(--glass-bg)', border: '1px solid var(--border-2)',
                borderRadius: 'var(--radius-md)', padding: '24px',
                marginBottom: 24,
              }}>
                <div style={{ fontSize: 10, fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16 }}>
                  Sur cette page
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {sections.map(section => (
                    <a key={section.id} href={`#section-${section.id}`} style={{
                      fontSize: 13, color: 'var(--fg-2)', textDecoration: 'none',
                      paddingLeft: 12, borderLeft: '1px solid var(--border-2)',
                      transition: 'all 0.2s', lineHeight: 1.5,
                    }} className="hover:!text-[var(--fg)] hover:!border-l-[var(--fg-3)]">
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Liens rapides */}
            {links.length > 0 && (
              <div className="reveal" style={{
                background: 'var(--glass-bg)', border: '1px solid var(--border-2)',
                borderRadius: 'var(--radius-md)', padding: '24px',
              }}>
                <div style={{ fontSize: 10, fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16 }}>
                  Liens
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {links.map(link => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      fontSize: 13, color: 'var(--fg-2)', textDecoration: 'none',
                      transition: 'color 0.2s',
                    }} className="hover:!text-[var(--fg)]">
                      <svg viewBox="0 0 24 24" width={13} height={13}
                        stroke="currentColor" fill="none" strokeWidth={1.8}
                        dangerouslySetInnerHTML={{ __html: LINK_ICONS[link.link_type] ?? LINK_ICONS.other }}
                      />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

    </main>
  )
}
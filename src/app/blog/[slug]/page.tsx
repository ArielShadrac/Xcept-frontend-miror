import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { api, type APIArticle } from '@/lib/api'
import ReactMarkdown from 'react-markdown'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    try {
      const article = await api.getArticle(slug)
      return {
        title: `${article.title} — Xcept-Health`,
        description: article.description,
      }
    } catch {
      return { title: 'Article — Xcept-Health' }
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let article: APIArticle
  try {
    article = await api.getArticle(slug)
  } catch {
    notFound()
  }

  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '140px 0 80px', borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-[800px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, fontSize: 13, color: 'var(--fg-3)' }}>
            <Link href="/blog" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}
              className="hover:!text-[var(--fg)]">
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--fg-2)' }}>{article.category_name}</span>
          </div>

          <div className="reveal">
            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--fg-3)', border: '1px solid var(--border-2)',
                padding: '4px 10px', borderRadius: 5, background: 'var(--glass-bg)',
              }}>{article.category_name}</span>
              <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 11, color: 'var(--fg-3)' }}>
                {date}
              </span>
              <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 11, color: 'var(--fg-3)' }}>
                · {article.read_time} min de lecture
              </span>
            </div>

            {/* Titre */}
            <h1 style={{
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20,
            }}>
              {article.title}
            </h1>

            {/* Description */}
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--fg-2)', marginBottom: 32 }}>
              {article.description}
            </p>

            {/* Auteur */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              paddingTop: 24, borderTop: '1px solid var(--border)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: 11, fontWeight: 700, color: 'var(--fg-3)',
              }}>
                {article.author.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{article.author}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 1 }}>Équipe Xcept-Health</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ──────────────────────────────────────────────────── */}
      {article.cover_image_url && (
        <div style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[800px] mx-auto px-12 max-[900px]:px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.cover_image_url} alt={article.title}
              style={{ width: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: 'var(--radius-lg)', margin: '48px 0' }}
            />
          </div>
        </div>
      )}

      {/* ── CONTENU ──────────────────────────────────────────────────────── */}
        <section style={{ padding: '72px 0 112px' }}>
        <div className="max-w-[800px] mx-auto px-12 max-[900px]:px-5">
            <div className="reveal">
            {article.content ? (
                <ReactMarkdown
                components={{
                    h1: ({ children }) => <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 20, marginTop: 48, lineHeight: 1.2 }}>{children}</h1>,
                    h2: ({ children }) => <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16, marginTop: 40, lineHeight: 1.2 }}>{children}</h2>,
                    h3: ({ children }) => <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12, marginTop: 32 }}>{children}</h3>,
                    p:  ({ children }) => <p  style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--fg-2)', marginBottom: 20 }}>{children}</p>,
                    ul: ({ children }) => <ul style={{ paddingLeft: 20, marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</ul>,
                    ol: ({ children }) => <ol style={{ paddingLeft: 20, marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</ol>,
                    li: ({ children }) => <li style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--fg-2)' }}>{children}</li>,
                    code: ({ children, className }) => {
                    const isBlock = className?.includes('language-')
                    return isBlock ? (
                        <pre style={{
                        background: 'var(--bg-2)', border: '1px solid var(--border-2)',
                        borderRadius: 'var(--radius-sm)', padding: '20px 24px',
                        overflowX: 'auto', marginBottom: 24,
                        }}>
                        <code style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.7 }}>
                            {children}
                        </code>
                        </pre>
                    ) : (
                        <code style={{
                        fontFamily: 'var(--font-geist-mono), monospace', fontSize: 13,
                        background: 'var(--bg-2)', border: '1px solid var(--border)',
                        borderRadius: 4, padding: '2px 6px', color: 'var(--fg)',
                        }}>
                        {children}
                        </code>
                    )
                    },
                    blockquote: ({ children }) => (
                    <blockquote style={{
                        borderLeft: '2px solid var(--border-3)', paddingLeft: 20,
                        margin: '24px 0', fontStyle: 'italic',
                    }}>
                        {children}
                    </blockquote>
                    ),
                    a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{
                        color: 'var(--fg)', borderBottom: '1px solid var(--border-3)',
                        textDecoration: 'none', transition: 'border-color 0.2s',
                    }}>
                        {children}
                    </a>
                    ),
                    img: ({ src, alt }) => src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={alt ?? ''} style={{
                        width: '100%', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)', margin: '24px 0',
                    }} />
                    ) : null,
                    hr: () => <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '40px 0' }} />,
                }}
                >
                {article.content}
                </ReactMarkdown>
            ) : (
                <span style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-geist-mono), monospace', fontSize: 13 }}>
                Contenu non disponible.
                </span>
            )}
            </div>
        </div>
        </section>

      {/* ── NAVIGATION BAS DE PAGE ───────────────────────────────────────── */}
      <section style={{ padding: '0 0 112px', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[800px] mx-auto px-12 max-[900px]:px-5" style={{ paddingTop: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 14, color: 'var(--fg-2)', textDecoration: 'none',
              transition: 'color 0.2s',
            }} className="hover:!text-[var(--fg)]">
              ← Retour au blog
            </Link>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', fontFamily: 'var(--font-geist-mono), monospace' }}>
              {article.tag}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
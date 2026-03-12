'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { APIArticle, APICategory } from '@/lib/api'

export default function BlogClient({
  articles,
  categories,
}: {
  articles: APIArticle[]
  categories: APICategory[]
}) {
  const categoryNames = ['Tout', ...categories.map(c => c.name)]
    .filter((v, i, a) => a.indexOf(v) === i)

  const [activeCategory, setActiveCategory] = useState('Tout')

  const featured = articles.find(a => a.is_featured)
  const rest     = articles.filter(a => !a.is_featured)
  const filtered = activeCategory === 'Tout'
    ? rest
    : rest.filter(a => a.category_name === activeCategory)

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '160px 0 80px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag">Blog</div>
          <div className="reveal">
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24 }}>
              Terrain, technique,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>et ce qu&apos;on a vraiment appris.</em>
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--fg-2)', maxWidth: 520 }}>
              Articles de fond sur nos déploiements, nos choix techniques et nos recherches.
            </p>
          </div>
        </div>
      </section>

      {/* ── ÉTAT VIDE GLOBAL ─────────────────────────────────────────────── */}
      {articles.length === 0 && (
        <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
            <div className="reveal" style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: 40, color: 'var(--fg-4)', marginBottom: 24, lineHeight: 1,
              }}>
                ✦
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.03em', marginBottom: 12, color: 'var(--fg)' }}>
                Aucun article pour l&apos;instant
              </h2>
              <p style={{ fontSize: 14, color: 'var(--fg-3)', maxWidth: 360, margin: '0 auto', lineHeight: 1.7 }}>
                Les premiers articles arrivent bientôt. Abonnez-vous à la newsletter pour être notifié.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURED ─────────────────────────────────────────────────────── */}
      {featured && (
        <section style={{ padding: '80px 0 0', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
            <div className="sec-tag">À la une</div>
            <div className="reveal">
              <ArticleCard a={featured} size="featured" />
            </div>
            <div style={{ height: 80 }} />
          </div>
        </section>
      )}

      {/* ── GRILLE ───────────────────────────────────────────────────────── */}
      {articles.length > 0 && (
        <section style={{ padding: '112px 0' }}>
          <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
            <div className="sec-tag">Articles</div>
            <div className="reveal">

              {/* Filtres */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em' }}>
                  Tous les articles
                </h2>
                {categoryNames.length > 1 && (
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {categoryNames.map(c => (
                      <button key={c} onClick={() => setActiveCategory(c)} style={{
                        fontFamily: 'var(--font-geist-mono), monospace',
                        fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '7px 14px', borderRadius: 7, cursor: 'pointer',
                        border: `1px solid ${activeCategory === c ? 'var(--border-3)' : 'var(--border)'}`,
                        background: activeCategory === c ? 'var(--glass-bg-2)' : 'transparent',
                        color: activeCategory === c ? 'var(--fg)' : 'var(--fg-3)',
                        transition: 'all 0.18s',
                      }}>{c}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Cards */}
              {filtered.length > 0 ? (

                    <div
                    className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'start' }}
                    >
                    {filtered.map((a, i) => (
                        <div key={a.id} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                        <ArticleCard a={a} />
                        </div>
                    ))}
                    </div>
                ) : (
                <div style={{ textAlign: 'center', padding: '80px 0' }}>
                  <p style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 13, color: 'var(--fg-3)' }}>
                    Aucun article dans cette catégorie.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <NewsletterSection />
    </main>
  )
}

// ── ArticleCard ───────────────────────────────────────────────────────────────
function ArticleCard({ a, size = 'normal' }: { a: APIArticle; size?: 'featured' | 'normal' }) {
  const isFeatured = size === 'featured'
  const date = a.published_at
    ? new Date(a.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
    : ''

  return (
    <Link href={`/blog/${a.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div style={{
        background: 'var(--bg-2)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)', padding: isFeatured ? '48px 44px' : '32px 28px',
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.25s', height: '100%',
      }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg)] hover:!-translate-y-[2px]">

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isFeatured ? 24 : 18 }}>
          <span style={{
            fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--fg-3)', border: '1px solid var(--border-2)',
            padding: '4px 9px', borderRadius: 5, background: 'var(--glass-bg)',
          }}>{a.category_name}</span>
          <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10, color: 'var(--fg-3)' }}>
            {date}
          </span>
          <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10, color: 'var(--fg-3)' }}>
            · {a.read_time} min
          </span>
        </div>

        <h3 style={{
          fontSize: isFeatured ? 'clamp(20px, 2.5vw, 28px)' : 16,
          fontWeight: 600, letterSpacing: '-0.03em',
          lineHeight: 1.25, marginBottom: isFeatured ? 16 : 12,
          flex: isFeatured ? 'none' : 1, color: 'var(--fg)',
        }}>{a.title}</h3>

        <p style={{
          fontSize: 13, lineHeight: 1.78, color: 'var(--fg-2)',
          marginBottom: isFeatured ? 32 : 24, flex: 1,
          ...(isFeatured ? {} : { display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }),
        }}>{a.description}</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
            letterSpacing: '0.08em', color: 'var(--fg-3)', textTransform: 'uppercase',
          }}>{a.tag}</span>
          <span style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 500 }}>Lire →</span>
        </div>

      </div>
    </Link>
  )
}

// ── Newsletter ────────────────────────────────────────────────────────────────
function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!email) return
    setStatus('loading')
    try {
      const { api } = await import('@/lib/api')
      await api.subscribeNewsletter(email)
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{ padding: '0 0 112px' }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div style={{
          background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(24px)',
          border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)',
          padding: '64px', boxShadow: 'var(--shadow-glass)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
        }} className="max-[700px]:!grid-cols-1 max-[700px]:!gap-8 max-[700px]:!p-10">
          <div>
            <div className="sec-tag">Newsletter</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: 12 }}>
              Nouveaux articles<br />chaque mois.
            </h2>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.72 }}>
              Terrain, technique, open source. Pas de spam.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {status === 'ok' ? (
              <p style={{ fontSize: 14, color: 'var(--fg-2)', textAlign: 'center', padding: '20px 0' }}>
                ✓ Vous êtes abonné !
              </p>
            ) : (
              <>
                <input
                  type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  style={{
                    width: '100%', padding: '13px 18px',
                    background: 'var(--bg-2)', border: '1px solid var(--border-2)',
                    borderRadius: 10, fontSize: 14, color: 'var(--fg)',
                    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
                  }}
                />
                <button
                  onClick={handleSubmit} disabled={status === 'loading'}
                  style={{
                    width: '100%', padding: '13px',
                    background: 'var(--fg)', color: 'var(--bg)',
                    border: 'none', borderRadius: 10,
                    fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    opacity: status === 'loading' ? 0.6 : 1, transition: 'opacity 0.2s',
                  }}>
                  {status === 'loading' ? 'Envoi...' : "S'abonner"}
                </button>
                {status === 'error' && (
                  <p style={{ fontSize: 12, color: '#ef4444', textAlign: 'center' }}>
                    Une erreur est survenue, réessayez.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
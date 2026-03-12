'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const CATEGORIES = ['Tout', 'Recherche', 'Terrain', 'Open Source', 'Technique', 'Partenariats']

const ARTICLES = [
  {
    id: 'detection-mammographique-97',
    category: 'Recherche',
    date: '12 Fév. 2025',
    readTime: '8 min',
    featured: true,
    title: 'Comment nous avons atteint 97% de précision en détection mammographique sur tablette Android',
    desc: 'Retour d\'expérience complet sur l\'adaptation de notre modèle de vision pour fonctionner sur des appareils à faible puissance en zone rurale au Burkina Faso.',
    tag: 'Imagerie IA',
  },
  {
    id: 'deploiement-mali-cliniques',
    category: 'Terrain',
    date: '28 Jan. 2025',
    readTime: '6 min',
    featured: false,
    title: 'Déployer un système IoT médical dans 8 cliniques rurales au Mali : ce qu\'on a appris',
    desc: 'Les vraies difficultés du terrain — connectivité, formation, adoption — et les solutions concrètes que nous avons trouvées avec les équipes locales.',
    tag: 'Monitoring',
  },
  {
    id: 'llm-medical-offline',
    category: 'Technique',
    date: '14 Jan. 2025',
    readTime: '11 min',
    featured: false,
    title: 'LLM médical embarqué : architectures pour l\'inférence hors-ligne sur devices contraints',
    desc: 'Comparaison de Llama 3.2, Phi-3 Mini et Gemma 2B quantisés pour le diagnostic assisté sans connexion. Benchmarks sur Raspberry Pi 4 et smartphones Android mid-range.',
    tag: 'Technique',
  },
  {
    id: 'partenariat-oms-afrique',
    category: 'Partenariats',
    date: '5 Jan. 2025',
    readTime: '4 min',
    featured: false,
    title: 'Notre collaboration avec l\'OMS Afrique : standards IA pour la santé primaire',
    desc: 'Présentation du cadre de travail développé conjointement pour évaluer et certifier les outils IA médicaux déployés dans les contextes à faibles ressources.',
    tag: 'Institutionnel',
  },
  {
    id: 'open-source-medical-ai',
    category: 'Open Source',
    date: '18 Déc. 2024',
    readTime: '7 min',
    featured: false,
    title: 'Pourquoi l\'IA médicale doit être open source — et comment y contribuer',
    desc: 'Le manifeste technique d\'Xcept-Health : les dangers des boîtes noires en médecine, l\'importance de l\'auditabilité algorithmique, et comment rejoindre la communauté.',
    tag: 'Philosophie',
  },
  {
    id: 'stethoscope-connecte-v2',
    category: 'Technique',
    date: '2 Déc. 2024',
    readTime: '9 min',
    featured: false,
    title: 'Stéthoscope connecté v2 : du prototype à la validation clinique en 6 mois',
    desc: 'Parcours complet de conception hardware : électronique, firmware, application mobile, tests acoustiques et premiers retours des 12 médecins du panel de validation.',
    tag: 'Hardware',
  },
  {
    id: 'communaute-contributeurs-2024',
    category: 'Open Source',
    date: '15 Nov. 2024',
    readTime: '5 min',
    featured: false,
    title: 'Xcept-Health en 2024 : 340 contributeurs, 12 pays, un écosystème qui grandit',
    desc: 'Bilan annuel de la communauté open source : pull requests, issues, hackathons médicaux, et les projets les plus impactants co-construits cette année.',
    tag: 'Communauté',
  },
  {
    id: 'epidemiologie-burkina-dashboard',
    category: 'Terrain',
    date: '30 Oct. 2024',
    readTime: '6 min',
    featured: false,
    title: 'Tableau de bord épidémiologique au Burkina Faso : 45 districts couverts en temps réel',
    desc: 'Architecture technique et enjeux de déploiement du système de surveillance épidémique avec le Ministère de la Santé du Burkina Faso.',
    tag: 'Analytics',
  },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function ArticleCard({ a, size = 'normal' }: { a: typeof ARTICLES[0]; size?: 'featured' | 'normal' }) {
  const isFeatured = size === 'featured'
  return (
    <div style={{
      background: 'var(--bg-2)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)', padding: isFeatured ? '48px 44px' : '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 0,
      transition: 'all 0.25s', cursor: 'pointer',
      height: '100%',
    }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg)] hover:!-translate-y-[2px]">
      {/* Meta row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isFeatured ? 24 : 18 }}>
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--fg-3)', border: '1px solid var(--border-2)',
          padding: '4px 9px', borderRadius: 5, background: 'var(--glass-bg)',
        }}>{a.category}</span>
        <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
          {a.date}
        </span>
        <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
          · {a.readTime}
        </span>
      </div>

      <h3 style={{
        fontSize: isFeatured ? 'clamp(20px, 2.5vw, 28px)' : 16,
        fontWeight: 600, letterSpacing: '-0.03em',
        lineHeight: 1.25, marginBottom: isFeatured ? 16 : 12, flex: isFeatured ? 'none' : 1,
      }}>
        {a.title}
      </h3>

      <p style={{
        fontSize: 13, lineHeight: 1.78, color: 'var(--fg-2)',
        marginBottom: isFeatured ? 32 : 24, flex: 1,
        ...(isFeatured ? {} : { display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }),
      }}>
        {a.desc}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
          letterSpacing: '0.08em', color: 'var(--fg-3)', textTransform: 'uppercase',
        }}>{a.tag}</span>
        <span style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 500 }}>Lire →</span>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const heroRef    = useScrollReveal()
  const gridRef    = useScrollReveal()

  const featured   = ARTICLES.find(a => a.featured)
  const rest        = ARTICLES.filter(a => !a.featured)
  const filtered    = activeCategory === 'Tout'
    ? rest
    : rest.filter(a => a.category === activeCategory)

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '160px 0 80px', borderBottom: '1px solid var(--border)',
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
          <div className="sec-tag">Blog</div>
          <div ref={heroRef} className="reveal">
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24 }}>
              Terrain, technique,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>et ce qu'on a vraiment appris.</em>
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--fg-2)', maxWidth: 520 }}>
              Articles de fond sur nos déploiements, nos choix techniques et nos recherches. Écrits par l'équipe qui code et déploie en conditions réelles.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────────────────────────── */}
      {featured && (
        <section style={{ padding: '80px 0 0', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
            <div className="sec-tag">À la une</div>
            <RevealSection>
              <ArticleCard a={featured} size="featured" />
            </RevealSection>
            <div style={{ height: 80 }} />
          </div>
        </section>
      )}

      {/* ── ARTICLES GRID ────────────────────────────────────────────────── */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div className="sec-tag">Articles</div>

          {/* Filter + header */}
          <div ref={gridRef} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em' }}>
                Tous les articles
              </h2>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {CATEGORIES.map(c => (
                  <button key={c}
                    onClick={() => setActiveCategory(c)}
                    style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                      padding: '7px 14px', borderRadius: 7, cursor: 'pointer',
                      border: `1px solid ${activeCategory === c ? 'var(--border-3)' : 'var(--border)'}`,
                      background: activeCategory === c ? 'var(--glass-bg-2)' : 'transparent',
                      color: activeCategory === c ? 'var(--fg)' : 'var(--fg-3)',
                      transition: 'all 0.18s',
                    }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
              className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1"
            >
              {filtered.map((a, i) => (
                <RevealSection key={a.id} delay={i * 50}>
                  <ArticleCard a={a} />
                </RevealSection>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--fg-3)', fontFamily: 'var(--font-geist-mono)', fontSize: 13 }}>
                Aucun article dans cette catégorie pour l'instant.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section style={{ padding: '0 0 112px' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div style={{
            background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
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
                Terrain, technique, open source. Pas de spam. Désabonnement en un clic.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input type="email" placeholder="votre@email.com"
                style={{
                  width: '100%', padding: '13px 18px',
                  background: 'var(--bg-2)', border: '1px solid var(--border-2)',
                  borderRadius: 10, fontSize: 14, color: 'var(--fg)',
                  outline: 'none', boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
              />
              <button style={{
                width: '100%', padding: '13px',
                background: 'var(--fg)', color: 'var(--bg)',
                border: 'none', borderRadius: 10,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}>
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

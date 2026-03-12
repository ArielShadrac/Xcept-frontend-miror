'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Link from 'next/link'

// Données des sections de documentation
const DOC_SECTIONS = [
  {
    title: 'Guides de démarrage',
    description: 'Apprenez les bases, installez les bibliothèques et lancez vos premiers projets avec nos outils.',
    icon: `<path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />`,
    links: [
      { label: 'Installation rapide', href: '/docs/guides/installation' },
      { label: 'Premiers pas avec EyeTrace', href: '/docs/guides/eyetrace-quickstart' },
      { label: 'Configuration de l’environnement', href: '/docs/guides/environment' },
    ],
  },
  {
    title: 'Référence API',
    description: 'Documentation technique complète des modules, classes et fonctions.',
    icon: `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />`,
    links: [
      { label: 'EyeTrace API', href: '/docs/api/eyetrace' },
      { label: 'Modules Core', href: '/docs/api/core' },
      { label: 'Utilitaires', href: '/docs/api/utils' },
    ],
  },
  {
    title: 'Tutoriels avancés',
    description: 'Cas d’usage concrets, optimisation, déploiement sur le terrain.',
    icon: `<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />`,
    links: [
      { label: 'Intégrer EyeTrace dans une application mobile', href: '/docs/tutorials/mobile-integration' },
      { label: 'Déployer sur Raspberry Pi', href: '/docs/tutorials/raspberry-pi' },
      { label: 'Personnaliser les modèles', href: '/docs/tutorials/custom-models' },
    ],
  },
  {
    title: 'Documentation technique',
    description: 'Architecture, standards, contributions et bonnes pratiques.',
    icon: `<circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H5.78a1.65 1.65 0 00-1.51 1 1.65 1.65 0 00.33 1.82l.09.1A10 10 0 0012 18a10 10 0 007.22-3zM12 6V2" />`,
    links: [
      { label: 'Architecture des projets', href: '/docs/tech/architecture' },
      { label: 'Standards de code', href: '/docs/tech/coding-standards' },
      { label: 'Guide de contribution', href: '/docs/tech/contributing' },
    ],
  },
]

// Ressources externes (liens vers GitHub, ReadTheDocs, etc.)
const EXTERNAL_RESOURCES = [
  {
    name: 'GitHub',
    description: 'Code source, issues, discussions.',
    url: 'https://github.com/Xcept-Health/',
    icon: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />`,
  },
  {
    name: 'ReadTheDocs',
    description: 'Documentation hébergée (version complète).',
    url: 'https://eyetrace.readthedocs.io',
    icon: `<path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />`,
  },
  {
    name: 'Forum communauté',
    description: 'Échangez avec d’autres utilisateurs et contributeurs.',
    url: 'https://github.com/Xcept-Health//discussions',
    icon: `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />`,
  },
]

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function DocsPage() {
  const heroRef = useScrollReveal()
  const sectionsRef = useScrollReveal()
  const externalRef = useScrollReveal()

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
          <div className="sec-tag">Documentation</div>
          <div ref={heroRef} className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24,
            }}>
              Tout ce qu'il faut pour<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>construire avec Xcept.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 560 }}>
              Guides, références API, tutoriels et ressources communautaires pour exploiter pleinement nos solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Sections principales (cartes) */}
      <section style={{ padding: '112px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div ref={sectionsRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Par où commencer ?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}
            className="max-[900px]:!grid-cols-1">
            {DOC_SECTIONS.map((section, idx) => (
              <RevealSection key={section.title} delay={idx * 60}>
                <div style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px',
                  height: '100%',
                  transition: 'all 0.25s',
                }} className="hover:!border-[var(--border-3)] hover:!shadow-md">
                  {/* Icône */}
                  <div style={{
                    width: 48, height: 48,
                    background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)',
                    borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20, color: 'var(--fg-2)',
                  }}>
                    <svg viewBox="0 0 24 24" width={22} height={22} stroke="currentColor" fill="none" strokeWidth={1.6}
                      dangerouslySetInnerHTML={{ __html: section.icon }}
                    />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>
                    {section.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.7, marginBottom: 20 }}>
                    {section.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {section.links.map(link => (
                      <li key={link.href} style={{ marginBottom: 8 }}>
                        <Link href={link.href} style={{
                          fontSize: 14, color: 'var(--fg)', textDecoration: 'none',
                          borderBottom: '1px solid var(--border-2)', paddingBottom: 2,
                          transition: 'border-color 0.2s',
                        }} className="hover:!border-[var(--fg-2)]">
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources externes */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div ref={externalRef} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Ressources externes
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="max-[900px]:!grid-cols-2 max-[560px]:!grid-cols-1">
            {EXTERNAL_RESOURCES.map((res, idx) => (
              <RevealSection key={res.name} delay={idx * 60}>
                <a href={res.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--border-2)',
                    borderRadius: 'var(--radius-md)',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)]">
                  <div style={{
                    width: 40, height: 40,
                    background: 'var(--bg-2)', border: '1px solid var(--border-2)',
                    borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16, color: 'var(--fg-2)',
                  }}>
                    <svg viewBox="0 0 24 24" width={18} height={18} stroke="currentColor" fill="none" strokeWidth={1.8}
                      dangerouslySetInnerHTML={{ __html: res.icon }}
                    />
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, color: 'var(--fg)' }}>{res.name}</h4>
                  <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }}>{res.description}</p>
                </a>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA vers communauté/contact */}
      <section style={{ padding: '0 0 112px' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div style={{
            background: 'var(--glass-bg)',
            borderRadius: 'var(--radius-lg)', padding: '56px 48px',
            textAlign: 'center',
          }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, marginBottom: 16 }}>
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.8, maxWidth: 480, margin: '0 auto 24px' }}>
              Notre communauté et notre équipe sont là pour vous aider.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact"
                style={{
                  padding: '12px 28px', borderRadius: 10, background: 'var(--bg)',
                  color: 'var(--fg)', fontSize: 14, fontWeight: 600, textDecoration: 'none',
                }}>
                Contactez-nous
              </Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
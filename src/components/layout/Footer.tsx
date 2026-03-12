import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-[1] pt-[72px] pb-[36px]">
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr 1fr 1fr',
            gap: 60,
            paddingBottom: 56,
            borderBottom: '1px solid var(--border)',
            marginBottom: 32,
          }}
          className="max-[900px]:!grid-cols-2 max-[900px]:gap-9 max-[620px]:!grid-cols-1"
        >
          {/* Brand */}
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 10 }}>
              Xcept-Health
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.68, color: 'var(--fg-2)', marginBottom: 20 }}>
              IA médicale open source pour démocratiser les soins dans les environnements à faibles ressources.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {/* GitHub (externe) */}
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer" style={socStyle}>
                <svg viewBox="0 0 24 24" width={14} height={14} stroke="var(--fg-3)" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
              </a>
              {/* LinkedIn (externe) */}
              <a href="https://www.linkedin.com/company/xcept-health" target="_blank" rel="noopener noreferrer" style={socStyle}>
                <svg viewBox="0 0 24 24" width={14} height={14} stroke="var(--fg-3)" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Discord (externe – à remplacer par le vrai lien si existant) */}
              <a href="https://discord.gg/xcept-health" target="_blank" rel="noopener noreferrer" style={socStyle}>
                <svg viewBox="0 0 24 24" width={14} height={14} stroke="var(--fg-3)" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <FooterCol title="Produit" links={[
            { label: 'Solutions',       href: '/solutions' },
            { label: 'Réalisations',    href: '/realisations' },
            { label: 'Roadmap',         href: '/roadmap' },    // interne
            { label: 'Changelog',       href: '/changelog' },  // interne
          ]} />

          <FooterCol title="Ressources" links={[
            { label: 'Documentation', href: '/docs' },
            { label: 'GitHub',        href: 'https://github.com/Xcept-Health', external: true },
            { label: 'Guides cliniques', href: '/guides' },
            { label: 'Blog',          href: '/blog' },
          ]} />

          <FooterCol title="Organisation" links={[
            { label: 'Mission',        href: '/mission' },
            { label: 'Communauté',     href: '/community' },  
            { label: 'Contact',        href: '/contact' },
            { label: 'Confidentialité', href: '/privacy' },
          ]} />
        </div>

        {/* Bottom */}
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          className="max-[900px]:flex-col max-[900px]:gap-3 max-[900px]:text-center"
        >
          <p style={copyStyle}>© {year} Xcept-Health — Tout commence par une exception</p>
          <p style={copyStyle}>Pour l'accessibilité et la disponibilité des soins</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const socStyle: React.CSSProperties = {
  width: 34, height: 34, borderRadius: 9,
  border: '1px solid var(--border-2)',
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(12px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  textDecoration: 'none', transition: 'all 0.2s',
  flexShrink: 0,
}

const copyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-geist-mono), monospace',
  fontSize: 10, letterSpacing: '0.05em',
  color: 'var(--fg-3)',
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div>
      <h4 style={{
        fontFamily: 'var(--font-geist-mono), monospace',
        fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--fg-3)', marginBottom: 16,
      }}>
        {title}
      </h4>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{l.label}</a>
            ) : (
              <Link href={l.href} style={linkStyle}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const linkStyle: React.CSSProperties = {
  fontSize: 13, color: 'var(--fg-2)', textDecoration: 'none', transition: 'color 0.2s',
}
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/providers/ThemeProvider'
import { navItems } from '@/lib/data'
import { Btn } from '@/components/ui'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as Element
      if (!t.closest('nav') && !t.closest('#mobileMenu')) setMenuOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 16, left: '50%', transform: 'translateX(-50%)',
    zIndex: 1000,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 16px 0 20px',
    height: 54,
    width: 'calc(100% - 40px)',
    maxWidth: 1280,
    borderRadius: 'var(--radius-md)',
    background: 'color-mix(in srgb, var(--bg) 80%, transparent)',
    backdropFilter: 'saturate(200%) blur(32px)',
    WebkitBackdropFilter: 'saturate(200%) blur(32px)',
    border: '1px solid var(--border-2)',
    boxShadow: scrolled ? 'var(--shadow-glass-lg)' : 'var(--shadow-glass)',
    transition: 'background 0.4s ease, box-shadow 0.3s, border-color 0.4s',
  }

  const linkBase: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 400,
    textDecoration: 'none',
    color: 'var(--fg-2)',
    padding: '6px 12px',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    whiteSpace: 'nowrap',
    transition: 'all 0.18s',
    cursor: 'pointer',
  }

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            textDecoration: 'none', color: 'var(--fg)', flexShrink: 0,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em' }}>
            Xcept-Health
          </span>
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.label} style={{ position: 'relative' }} className="group">
                <Link
                  href={item.href}
                  style={linkBase}
                  className="hover:!text-[var(--fg)] hover:!bg-[var(--glass-bg-2)]"
                >
                  {item.label}
                  {item.children && (
                    <span
                      style={{ fontSize: 9, opacity: 0.5, transition: 'transform 0.2s' }}
                      className="group-hover:rotate-180"
                    >
                      ▾
                    </span>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      paddingTop: 8,
                    }}
                    className="opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none"
                  >
                    <div style={{
                      background: 'color-mix(in srgb, var(--bg) 92%, transparent)',
                      backdropFilter: 'saturate(200%) blur(40px)',
                      WebkitBackdropFilter: 'saturate(200%) blur(40px)',
                      border: '1px solid var(--border-2)',
                      borderRadius: 'var(--radius-md)',
                      padding: 6,
                      minWidth: 210,
                      boxShadow: 'var(--shadow-glass-lg)',
                    }}>
                      {item.children.map((child, ci) => {
                        if ('separator' in child) {
                          return (
                            <div
                              key={ci}
                              style={{ height: 1, background: 'var(--border)', margin: '4px 0' }}
                            />
                          )
                        }
                        return (
                          <Link
                            key={ci}
                            href={child.href}
                            style={{
                              display: 'flex', alignItems: 'center', gap: 10,
                              padding: '9px 12px', borderRadius: 8,
                              fontSize: 13, color: 'var(--fg-2)',
                              textDecoration: 'none',
                              transition: 'all 0.15s',
                            }}
                            className="hover:!text-[var(--fg)] hover:!bg-[var(--glass-bg-2)]"
                          >
                            <div style={{
                              width: 26, height: 26,
                              background: 'var(--glass-bg-2)', border: '1px solid var(--border)',
                              borderRadius: 6, display: 'flex', alignItems: 'center',
                              justifyContent: 'center', flexShrink: 0,
                            }}>
                              <svg
                                viewBox="0 0 24 24" width={12} height={12}
                                stroke="var(--fg-2)" fill="none"
                                strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
                                dangerouslySetInnerHTML={{ __html: child.icon ?? '' }}
                              />
                            </div>
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </li>
            ))}

            <li>
              <a
                href="https://github.com/Xcept-Health"
                target="_blank"
                rel="noopener noreferrer"
                style={linkBase}
                className="hover:!text-[var(--fg)] hover:!bg-[var(--glass-bg-2)]"
              >
                GitHub
              </a>
            </li>
          </ul>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {/* Theme toggle */}
          <button
            onClick={toggle}
            title="Changer le thème"
            style={{
              width: 34, height: 34, borderRadius: 9,
              border: '1px solid var(--border-2)',
              background: 'var(--glass-bg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', flexShrink: 0, transition: 'all 0.25s',
            }}
            className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)]"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width={15} height={15} stroke="var(--fg-2)" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width={15} height={15} stroke="var(--fg-2)" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>

          {/* Desktop buttons */}
          {!isMobile && (
            <>
              <Btn href="https://github.com/Xcept-Health" variant="ghost" external>
                Contribuer
              </Btn>
              <Btn href="#" variant="fill">
                Commencer
              </Btn>
            </>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{
                display: 'flex', flexDirection: 'column', gap: 4,
                cursor: 'pointer', padding: 8, background: 'none', border: 'none',
              }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block', width: 20, height: 1.5,
                    background: 'var(--fg)', borderRadius: 2, transition: 'all 0.3s',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(5.5px) rotate(45deg)'
                      : i === 2 ? 'translateY(-5.5px) rotate(-45deg)'
                      : 'none'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu (généré à partir de navItems) */}
      {isMobile && menuOpen && (
        <div
          id="mobileMenu"
          style={{
            position: 'fixed', top: 82, left: 20, right: 20,
            background: 'color-mix(in srgb, var(--bg) 96%, transparent)',
            backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid var(--border-2)',
            borderRadius: 'var(--radius-md)', padding: 12,
            zIndex: 999, display: 'flex', flexDirection: 'column', gap: 2,
            boxShadow: 'var(--shadow-glass-lg)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 14, color: 'var(--fg-2)', textDecoration: 'none',
                padding: '11px 14px', borderRadius: 9, transition: 'all 0.15s',
              }}
              className="hover:!text-[var(--fg)] hover:!bg-[var(--glass-bg-2)]"
            >
              {item.label}
            </Link>
          ))}
          <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }} />
          <a
            href="https://github.com/Xcept-Health"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14, color: 'var(--fg-2)', textDecoration: 'none',
              padding: '11px 14px', borderRadius: 9,
            }}
            className="hover:!text-[var(--fg)] hover:!bg-[var(--glass-bg-2)]"
          >
            GitHub
          </a>
        </div>
      )}
    </>
  )
}
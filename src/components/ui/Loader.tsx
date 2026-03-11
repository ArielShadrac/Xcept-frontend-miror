'use client'

import { useEffect, useState } from 'react'

export function Loader() {
  const [out, setOut] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setOut(true)
      document.body.style.overflow = ''
    }, 2600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), visibility 0.7s cubic-bezier(0.22,1,0.36,1)',
        opacity: out ? 0 : 1,
        visibility: out ? 'hidden' : 'visible',
        pointerEvents: out ? 'none' : 'auto',
      }}
    >
   
      {/* Wordmark */}
      <div className="loader-wordmark" style={{
        fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em',
        color: 'var(--fg)', marginBottom: 6,
      }}>
        Xcept-Health
      </div>

      {/* Tagline */}
      <div className="loader-tagline" style={{
        fontFamily: 'var(--font-geist-mono), monospace',
        fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--fg-3)', marginBottom: 36,
      }}>
        Tout commence par une exception
      </div>

      {/* Progress bar */}
      <div className="loader-progress-wrap" style={{
        width: 200, height: 1,
        background: 'var(--border-2)',
        borderRadius: 1, overflow: 'hidden',
      }}>
        <div className="loader-progress-bar" style={{
          height: '100%', background: 'var(--fg)', borderRadius: 1,
        }} />
      </div>

      {/* ECG */}
      <div className="loader-ecg-wrap" style={{
        position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)',
        width: 320, height: 40,
      }}>
        <svg viewBox="0 0 320 40" preserveAspectRatio="none" style={{ width: '100%', height: 40 }}>
          <path
            className="loader-ecg-path"
            d="M0,20 L28,20 L38,20 L44,4 L50,36 L56,20 L84,20
               L112,20 L118,4 L124,36 L130,20 L158,20
               L186,20 L192,4 L198,36 L204,20 L232,20
               L260,20 L266,4 L272,36 L278,20 L320,20"
            stroke="var(--ecg-stroke)"
            strokeWidth={1.5}
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
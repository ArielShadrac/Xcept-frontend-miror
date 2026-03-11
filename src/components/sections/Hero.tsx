'use client'

export function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      padding: '0 48px', paddingTop: 88,
      position: 'relative', overflow: 'hidden',
    }} className="max-[900px]:!px-5">

      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 600,
        background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--fg) 5%, transparent) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', maxWidth: 1280,
        margin: '0 auto', width: '100%',
        padding: '80px 0 40px', position: 'relative', zIndex: 1,
      }}>
        <h1 style={{
          fontWeight: 800,
          fontSize: 'clamp(56px, 8vw, 120px)',
          lineHeight: 0.91, letterSpacing: '-0.05em',
          color: 'var(--fg)', marginBottom: 6,
          opacity: 0,
          animation: 'fadeUp 0.85s 0.18s forwards',
        }}>
          Tout commence par<br />une exception.
        </h1>

        <p style={{
          fontWeight: 800,
          fontSize: 'clamp(56px, 8vw, 120px)',
          lineHeight: 0.91, letterSpacing: '-0.05em',
          color: 'var(--fg-3)', marginBottom: 52,
          opacity: 0,
          animation: 'fadeUp 0.85s 0.26s forwards',
        }}>
          Xcept-Health.
        </p>

        <p style={{
          fontSize: 17, fontWeight: 400, lineHeight: 1.72,
          color: 'var(--fg-2)', maxWidth: 480, marginBottom: 48,
          opacity: 0,
          animation: 'fadeUp 0.7s 0.36s forwards',
        }}>
          Des solutions médicales conçues pour les environnements à faibles ressources.
          Accessibles, déployables, ouverts à tous.
        </p>

        <div style={{
          display: 'flex', gap: 12, alignItems: 'center',
          opacity: 0,
          animation: 'fadeUp 0.7s 0.46s forwards',
        }}>
          <a href="#solutions" style={btnFill}>Explorer les solutions</a>
          <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer" style={btnGhost}>
            Voir sur GitHub
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 0',
        borderTop: '1px solid var(--border)',
        position: 'relative', zIndex: 1,
        opacity: 0,
        animation: 'fadeIn 0.7s 1.1s forwards',
      }} className="max-[900px]:flex-wrap max-[900px]:gap-5">
        <div style={{ display: 'flex', gap: 48 }} className="max-[900px]:gap-5 max-[900px]:flex-wrap">
          {[
            { val: 'Open',  lbl: 'Source First' },
            { val: 'GDPR',  lbl: 'HIPAA Compliant' },
            { val: 'Edge',  lbl: 'Devices Ready' },
            { val: 'FHIR',  lbl: 'Interoperable' },
          ].map((s) => (
            <div key={s.lbl} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.04em' }}>{s.val}</span>
              <span style={{
                fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
                letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)',
              }}>{s.lbl}</span>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: 'var(--font-geist-mono), monospace', fontSize: 10,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-4)',
        }}>
          <span>Continuer</span>
          <div style={{
            width: 40, height: 1, background: 'var(--fg-4)',
            position: 'relative', overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute', left: '-100%', top: 0,
              width: '100%', height: '100%',
              background: 'var(--fg-2)',
            }} className="animate-scanline" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scanline {
          0%   { left: -100%; }
          50%  { left: 100%; }
          100% { left: 100%; }
        }
        .animate-scanline { animation: scanline 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

const btnFill: React.CSSProperties = {
  fontSize: 13, fontWeight: 600,
  textDecoration: 'none', color: 'var(--bg)',
  background: 'var(--fg)', padding: '8px 18px', borderRadius: 9,
  border: '1px solid transparent', transition: 'all 0.2s', cursor: 'pointer', whiteSpace: 'nowrap',
}
const btnGhost: React.CSSProperties = {
  fontSize: 13, fontWeight: 500,
  textDecoration: 'none', color: 'var(--fg-2)',
  border: '1px solid var(--border-2)', padding: '7px 16px', borderRadius: 9,
  transition: 'all 0.2s', cursor: 'pointer', whiteSpace: 'nowrap', background: 'transparent',
}

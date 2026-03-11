'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { badges, testimonials } from '@/lib/data'

// ─── COMPLIANCE ───────────────────────────────────────────────────────────────
export function Compliance() {
  const ref = useScrollReveal()
  return (
    <div style={{ padding: '56px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div ref={ref} className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-2)', maxWidth: 280, lineHeight: 1.55 }}>
            Nos standards garantissent la protection des données médicales à chaque étape du pipeline.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {badges.map((b) => (
              <div key={b} style={{
                fontFamily: 'var(--font-geist-mono)', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-2)',
                border: '1px solid var(--border-2)', padding: '9px 16px', borderRadius: 9,
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', gap: 7, transition: 'all 0.2s', cursor: 'default',
              }} className="hover:!border-[var(--border-3)] hover:!text-[var(--fg)] hover:!bg-[var(--glass-bg-2)]">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--fg-3)', flexShrink: 0 }} />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
export function Features() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="features" style={{ padding: '128px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div className="sec-tag">Fonctionnalités clés</div>

        <div ref={headRef} className="reveal" style={{ marginBottom: 72 }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 14 }}>
            Conçus avec et par des médecins,<br />pour des médecins et pour la population.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg-2)', maxWidth: 520 }}>
            Chaque fonctionnalité répond à un besoin réel identifié sur le terrain avec nos partenaires cliniques.
          </p>
        </div>

        {/* FIX: single className — was two className attrs, losing "reveal" */}
        <div
          ref={gridRef}
          className="reveal max-[1100px]:!grid-cols-1"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
        >
          {/* Big card — spans 2 rows on desktop */}
          <div style={{
            gridRow: 'span 2',
            background: 'var(--glass-bg)', backdropFilter: 'saturate(200%) blur(40px)',
            WebkitBackdropFilter: 'saturate(200%) blur(40px)',
            border: '1px solid var(--border-2)', boxShadow: 'var(--shadow-glass-lg)',
            borderRadius: 'var(--radius-lg)', padding: 44,
            display: 'flex', flexDirection: 'column', transition: 'all 0.3s',
            position: 'relative', overflow: 'hidden',
          }} className="hover:!border-[var(--border-3)] max-[1100px]:!row-span-1">
            <div style={{ width: 48, height: 48, background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
              <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--fg-2)" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, lineHeight: 1.2 }}>Diagnostic différentiel assisté par IA</h3>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: 'var(--fg-2)', marginBottom: 16 }}>
              Notre modèle analyse les symptômes, antécédents et résultats d&apos;examens pour proposer une liste de diagnostics ordonnés par probabilité, avec explications cliniques détaillées.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--fg-2)' }}>
              Fonctionne hors-ligne sur smartphone Android. Supporte 14 langues dont le Mooré, le Dioula et le Haoussa.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 28, borderTop: '1px solid var(--border)', display: 'flex', gap: 28 }}>
              {[{ v: '97%', l: 'Précision top-3' }, { v: '14+', l: 'Langues' }, { v: '<5s', l: 'Réponse' }].map((m) => (
                <div key={m.l}>
                  <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--fg)' }}>{m.v}</div>
                  <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Small cards */}
          {[
            { icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`, title: 'Monitoring continu des signes vitaux', desc: 'Capteurs IoT + IA pour suivre fréquence cardiaque, SpO2 et tension avec alertes intelligentes.' },
            { icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`, title: 'Chiffrement médical de bout en bout', desc: 'Données patients chiffrées localement avant transmission. Conforme GDPR, HIPAA et souveraineté nationale.' },
          ].map((f) => (
            <div key={f.title} style={{
              background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(28px)',
              WebkitBackdropFilter: 'saturate(180%) blur(28px)',
              border: '1px solid var(--border-2)', boxShadow: 'var(--shadow-glass)',
              borderRadius: 'var(--radius-md)', padding: 30, transition: 'all 0.3s',
            }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)]">
              <div style={{ width: 48, height: 48, background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--fg-2)" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: f.icon }} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, lineHeight: 1.2 }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.72, color: 'var(--fg-2)' }}>{f.desc}</p>
            </div>
          ))}

          {/* IMPROVEMENT: 4th card spanning full width (from HTML) */}
          <div style={{
            gridColumn: 'span 2',
            background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(28px)',
            WebkitBackdropFilter: 'saturate(180%) blur(28px)',
            border: '1px solid var(--border-2)', boxShadow: 'var(--shadow-glass)',
            borderRadius: 'var(--radius-md)', padding: 30, transition: 'all 0.3s',
          }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)] max-[1100px]:!col-span-1">
            <div style={{ width: 48, height: 48, background: 'var(--glass-bg-2)', border: '1px solid var(--border-2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
              <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--fg-2)" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, lineHeight: 1.2 }}>Interface pour agents de santé non-spécialisés</h3>
            <p style={{ fontSize: 14, lineHeight: 1.72, color: 'var(--fg-2)' }}>
              UX simplifiée pour agents communautaires. Guides visuels, voix off et protocoles pas-à-pas en 14 langues locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export function Testimonials() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="testimonials" style={{ padding: '128px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div className="sec-tag">Témoignages</div>
        <div ref={headRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 14 }}>
            Ce qu&apos;ils disent de<br />nos{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>solutions.</em>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--fg-2)', maxWidth: 440, margin: '0 auto' }}>
            Des cliniciens et chercheurs qui utilisent Xcept-Health sur le terrain.
          </p>
        </div>
        {/* FIX: single className */}
        <div ref={gridRef} className="reveal max-[900px]:!grid-cols-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{
              background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(28px)',
              WebkitBackdropFilter: 'saturate(180%) blur(28px)',
              border: '1px solid var(--border-2)', boxShadow: 'var(--shadow-glass)',
              borderRadius: 'var(--radius-md)', padding: 30, transition: 'all 0.3s',
            }} className="hover:!border-[var(--border-3)] hover:!bg-[var(--glass-bg-2)] hover:![box-shadow:var(--shadow-glass-lg)]">
              <p style={{ fontSize: 15, lineHeight: 1.72, color: 'var(--fg)', marginBottom: 22, paddingTop: 4 }}>
                <span style={{ color: 'var(--fg-3)', fontSize: 32, lineHeight: 0, verticalAlign: '-12px', marginRight: 3 }}>&ldquo;</span>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--glass-bg-3)', border: '1px solid var(--border-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: 'var(--fg-2)', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MANIFESTO ────────────────────────────────────────────────────────────────
export function Manifesto() {
  const ref = useScrollReveal()
  return (
    <section id="manifesto" style={{ padding: '128px 0', borderBottom: '1px solid var(--border)', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div ref={ref} className="reveal" style={{ position: 'relative' }}>
          <p style={{ fontSize: 'clamp(24px, 3.5vw, 46px)', fontWeight: 300, lineHeight: 1.3, maxWidth: 800, position: 'relative', zIndex: 1, color: 'var(--fg)' }}>
            &ldquo;En Python, une <strong style={{ fontWeight: 800 }}>exception</strong> n&apos;est pas une erreur fatale — c&apos;est une opportunité de rediriger l&apos;exécution vers quelque chose de meilleur. Chez Xcept-Health, chaque défi médical est une exception que nous <strong style={{ fontWeight: 800 }}>transformons en solution.</strong>&rdquo;
          </p>
          <div style={{ marginTop: 32, fontFamily: 'var(--font-geist-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1, background: 'var(--fg-3)', display: 'block' }} />
            Xcept-Health — Manifeste fondateur
          </div>
          <div style={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-geist-sans)', fontWeight: 900, fontSize: 200, letterSpacing: '-0.08em', color: 'var(--fg)', opacity: 0.03, pointerEvents: 'none', whiteSpace: 'nowrap', userSelect: 'none', lineHeight: 1, zIndex: 0 }}>
            except:
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── COMMUNITY ────────────────────────────────────────────────────────────────
export function Community() {
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="community" style={{ padding: '128px 0', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
        <div className="sec-tag">Communauté</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'center' }}
          className="max-[900px]:!grid-cols-1 max-[900px]:!gap-10">

          <div ref={leftRef} className="reveal">
            <h2 style={{ fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.98, marginBottom: 20 }}>
              Rejoignez<br />la <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>révolution</em><br />médicale.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: 'var(--fg-2)', maxWidth: 400, marginBottom: 36 }}>
              Notre communauté mondiale de développeurs, cliniciens et chercheurs construit ensemble les outils qui sauveront des vies demain.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, textDecoration: 'none', color: 'var(--bg)', background: 'var(--fg)', padding: '8px 18px', borderRadius: 9, border: '1px solid transparent', transition: 'all 0.2s' }}>GitHub</a>
              <a href="#" style={{ fontSize: 13, fontWeight: 500, textDecoration: 'none', color: 'var(--fg-2)', border: '1px solid var(--border-2)', padding: '7px 16px', borderRadius: 9, transition: 'all 0.2s', background: 'transparent' }}>Documentation</a>
            </div>
          </div>

          <div ref={rightRef} className="reveal" style={{ background: 'var(--glass-bg)', backdropFilter: 'saturate(180%) blur(28px)', WebkitBackdropFilter: 'saturate(180%) blur(28px)', border: '1px solid var(--border-2)', boxShadow: 'var(--shadow-glass)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {[
              { n: '01', title: 'Explorer les dépôts',         desc: (<>Consultez <a href="https://github.com/Xcept-Health" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-2)', textDecoration: 'underline', textUnderlineOffset: 3 }}>github.com/Xcept-Health</a> pour découvrir nos projets actifs.</>) },
              { n: '02', title: 'Choisir une issue',           desc: (<>Parcourez les issues taguées <code style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--fg-2)', background: 'var(--glass-bg-3)', padding: '2px 6px', borderRadius: 4 }}>good-first-issue</code> ou proposez vos propres idées.</>) },
              { n: '03', title: 'Soumettre une Pull Request',  desc: 'Suivez nos guidelines de contribution. Notre équipe review sous 48h.' },
              { n: '04', title: 'Rejoindre la communauté',     desc: 'Échangez avec des développeurs et cliniciens sur notre Discord.' },
            ].map((s, i, arr) => (
              <div key={i} style={{ padding: '20px 24px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', display: 'grid', gridTemplateColumns: '28px 1fr', gap: 14, alignItems: 'start', transition: 'background 0.2s' }}
                className="hover:!bg-[var(--glass-bg-2)]">
                <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', color: 'var(--fg-3)', paddingTop: 2 }}>{s.n}</div>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{s.title}</h4>
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--fg-2)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

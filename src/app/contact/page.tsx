'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'
import { api } from '@/lib/api'

type FormState = 'idle' | 'loading' | 'success' | 'error'

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function ContactPage() {
  const heroRef = useScrollReveal()
  const formRef = useScrollReveal()
  const infoRef = useScrollReveal()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [state, setState]       = useState<FormState>('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setFeedback('')
    try {
      const res = await api.sendContact(formData)
      setFeedback(res.detail)
      setState('success')
      setFormData({ name: '', email: '', subject: 'general', message: '' })
    } catch (err: any) {
      setFeedback(err.message ?? 'Une erreur est survenue. Veuillez réessayer.')
      setState('error')
    }
  }

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
          <div className="sec-tag">Contact</div>
          <div ref={heroRef} className="reveal" style={{ maxWidth: 720 }}>
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800,
              letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 24,
            }}>
              Discutons de votre <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--fg-2)' }}>projet.</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: 'var(--fg-2)', maxWidth: 560 }}>
              Que vous soyez clinicien, développeur, institution ou simple curieux, nous sommes là pour répondre à vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire + Coordonnées */}
      <section style={{ padding: '112px 0' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
          }} className="max-[900px]:!grid-cols-1 max-[900px]:!gap-12">

            {/* Formulaire */}
            <div ref={formRef} className="reveal">
              <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 24 }}>
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {state === 'success' && (
                  <div style={{ padding: '14px 18px', background: 'var(--glass-bg-2)', border: '1px solid var(--border-3)', borderRadius: 10, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>
                    {feedback}
                  </div>
                )}
                {state === 'error' && (
                  <div style={{ padding: '14px 18px', background: 'rgba(255,80,80,0.07)', border: '1px solid rgba(255,80,80,0.25)', borderRadius: 10, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>
                    {feedback}
                  </div>
                )}
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--fg-2)' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '12px 16px', background: 'var(--bg-2)',
                      border: '1px solid var(--border)', borderRadius: 8, fontSize: 14,
                      color: 'var(--fg)', outline: 'none', transition: 'border 0.2s',
                    }}
                    className="focus:!border-[var(--border-3)]"
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--fg-2)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '12px 16px', background: 'var(--bg-2)',
                      border: '1px solid var(--border)', borderRadius: 8, fontSize: 14,
                      color: 'var(--fg)', outline: 'none',
                    }}
                    className="focus:!border-[var(--border-3)]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--fg-2)' }}>
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '12px 16px', background: 'var(--bg-2)',
                      border: '1px solid var(--border)', borderRadius: 8, fontSize: 14,
                      color: 'var(--fg)', outline: 'none', cursor: 'pointer',
                    }}
                    className="focus:!border-[var(--border-3)]"
                  >
                    <option value="general">Question générale</option>
                    <option value="contribute">Contribuer / open source</option>
                    <option value="partnership">Partenariat</option>
                    <option value="support">Support technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--fg-2)' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '12px 16px', background: 'var(--bg-2)',
                      border: '1px solid var(--border)', borderRadius: 8, fontSize: 14,
                      color: 'var(--fg)', outline: 'none', resize: 'vertical',
                    }}
                    className="focus:!border-[var(--border-3)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  style={{
                    padding: '14px 24px', background: 'var(--fg)', color: 'var(--bg)',
                    border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600,
                    cursor: state === 'loading' ? 'wait' : 'pointer',
                    opacity: state === 'loading' ? 0.6 : 1,
                    transition: 'opacity 0.2s', width: 'fit-content',
                  }}
                >
                  {state === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>

            {/* Coordonnées */}
            <div ref={infoRef} className="reveal">
              <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 24 }}>
                Autres moyens de nous joindre
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, background: 'var(--glass-bg)',
                    border: '1px solid var(--border-2)', borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--fg-2)',
                  }}>
                    <svg viewBox="0 0 24 24" width={20} height={20} stroke="currentColor" fill="none" strokeWidth={1.8}>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg-2)', marginBottom: 4 }}>Email</div>
                    <a href="mailto:arielshadrac@gmail.com" style={{ fontSize: 15, color: 'var(--fg)', textDecoration: 'none' }}>
                      arielshadrac@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, background: 'var(--glass-bg)',
                    border: '1px solid var(--border-2)', borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--fg-2)',
                  }}>
                    <svg viewBox="0 0 24 24" width={20} height={20} stroke="currentColor" fill="none" strokeWidth={1.8}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg-2)', marginBottom: 4 }}>GitHub</div>
                    <a href="https://github.com/xcept-health" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'var(--fg)', textDecoration: 'none' }}>
                      github.com/xcept-health
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, background: 'var(--glass-bg)',
                    border: '1px solid var(--border-2)', borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--fg-2)',
                  }}>
                    <svg viewBox="0 0 24 24" width={20} height={20} stroke="currentColor" fill="none" strokeWidth={1.8}>
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg-2)', marginBottom: 4 }}>LinkedIn</div>
                    <a href="https://www.linkedin.com/company/xcept-health" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'var(--fg)', textDecoration: 'none' }}>
                      linkedin.com/company/xcept-health
                    </a>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte ou localisation (optionnel) */}
      <section style={{ padding: '0 0 112px' }}>
        <div className="max-w-[1280px] mx-auto px-12 max-[900px]:px-5">
          <div style={{
            background: 'var(--glass-bg)', border: '1px solid var(--border-2)',
            borderRadius: 'var(--radius-lg)', padding: '48px',
            textAlign: 'center',
          }}>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Présence terrain</div>
            <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>Bureau principal</h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', marginBottom: 8 }}>
              Ouagadougou, Burkina Faso
            </p>
            <p style={{ fontSize: 13, color: 'var(--fg-3)' }}>
              Également disponibles à distance pour des collaborations internationales et des projets à distance.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
'use client'
import { useEffect } from 'react'

export function ScrollRevealProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    // Observer tous les éléments .reveal déjà présents
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // Observer les éléments ajoutés dynamiquement (ex: après fetch)
    const mutation = new MutationObserver(() => {
      document.querySelectorAll('.reveal:not(.on)').forEach((el) => observer.observe(el))
    })
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])

  return null
}
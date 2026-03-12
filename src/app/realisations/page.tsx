import type { Metadata } from 'next'
import { api, type APIRealisation, type APITestimonial } from '@/lib/api'
import RealisationsClient from './RealisationsClient'

export const metadata: Metadata = {
  title: 'Réalisations — Xcept-Health',
  description: "Nos projets déployés sur le terrain, les chiffres clés et les témoignages de nos partenaires.",
}

const FALLBACK_REALISATIONS: APIRealisation[] = [
  { id: 1, order: 1, tag: 'imagerie-ia', tag_display: 'Imagerie IA', date_label: 'Mars 2024', date: '2024-03-01', status: 'deployed', status_display: 'Déployé', title: 'Détection précoce du cancer du sein — CHU Ouagadougou', description: 'Modèle de vision détectant les anomalies mammographiques avec 97% de précision, sur tablette Android en zone rurale.', impact_label: 'Patients analysés', impact_value: '12 400+' },
  { id: 2, order: 2, tag: 'monitoring', tag_display: 'Monitoring', date_label: 'Juin 2024', date: '2024-06-01', status: 'deployed', status_display: 'Déployé', title: 'Suivi cardiaque IoT — 8 cliniques rurales Mali', description: 'Réseau de capteurs connectés et alertes IA pour la surveillance en temps réel sans médecin spécialisé.', impact_label: 'Vies sauvées estimées', impact_value: '340+' },
  { id: 3, order: 3, tag: 'robotique', tag_display: 'Robotique', date_label: 'Sept. 2024', date: '2024-09-01', status: 'in_progress', status_display: 'En cours', title: 'Assistant chirurgical robotique — Abidjan', description: "Bras robotique open-hardware guidé par IA pour les opérations orthopédiques en environnement contraint.", impact_label: 'Opérations assistées', impact_value: '89' },
  { id: 4, order: 4, tag: 'analytics', tag_display: 'Analytics', date_label: 'Nov. 2024', date: '2024-11-01', status: 'deployed', status_display: 'Déployé', title: 'Tableau de bord épidémique — Ministère Santé BF', description: 'Plateforme temps réel de surveillance épidémiologique avec données terrain anonymisées et IA prédictive.', impact_label: 'Districts couverts', impact_value: '45 / 70' },
  { id: 5, order: 5, tag: 'telemedecine', tag_display: 'Télémédecine', date_label: 'Jan. 2025', date: '2025-01-01', status: 'in_progress', status_display: 'En cours', title: 'Consultation IA hors-ligne — Régions Sahel Niger', description: 'Application mobile avec LLM médical embarqué pour agents de santé communautaires sans internet.', impact_label: 'Agents formés', impact_value: '220' },
]

const FALLBACK_TESTIMONIALS: APITestimonial[] = [
  { id: 1, order: 1, quote: "Grâce à l'outil de détection mammographique, nous avons diagnostiqué 3 fois plus de cas précoces. C'est une révolution pour nos patients ruraux.", initials: 'DK', name: 'Dr. Daouda Kaboré', role: 'Oncologue — CHU Ouagadougou', avatar_url: null },
  { id: 2, order: 2, quote: "L'application fonctionne même sans réseau. Mes agents communautaires l'utilisent quotidiennement pour référer les cas urgents.", initials: 'AT', name: 'Aminata Touré', role: 'Coordonnatrice santé — Sahel Care', avatar_url: null },
  { id: 3, order: 3, quote: "Contribuer à Xcept-Health, c'est travailler sur du code qui sauve réellement des vies. La communauté est de très haute qualité.", initials: 'JO', name: 'Jean-Michel Ouédraogo', role: 'ML Engineer — Contributeur core', avatar_url: null },
]

export default async function RealisationsPage() {
  let realisations: APIRealisation[] = FALLBACK_REALISATIONS
  let testimonials: APITestimonial[] = FALLBACK_TESTIMONIALS

  try {
    const [r, t] = await Promise.all([
      api.getRealisations(),
      api.getTestimonials(),
    ])
    if (r.length > 0) realisations = r
    if (t.length > 0) testimonials = t
  } catch {
    // API down → fallback
  }

  return <RealisationsClient realisations={realisations} testimonials={testimonials} />
}
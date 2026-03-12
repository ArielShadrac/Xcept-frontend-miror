/**
 * Xcept-Health — Client API Django REST
 * Toutes les fonctions fetch vers le backend Django.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1"

// ── Typage des réponses ───────────────────────────────────────────────────────

export type APISolution = {
  id: number; order: number; title: string; description: string; icon_svg: string
}

export type APIService = {
  id: number; order: number; anchor: string; title: string; description: string; icon_svg: string
}

export type APIRealisation = {
  id: number; order: number
  tag: string; tag_display: string
  date_label: string; date: string | null
  status: "deployed" | "in_progress"; status_display: string
  title: string; description: string
  impact_label: string; impact_value: string
}

export type APIPartner = {
  id: number; order: number
  partner_type: string; name: string; description: string
  badge: string; since: string; logo_svg: string; logo_image_url: string | null; website: string
}

export type APIBadge = { id: number; order: number; label: string }

export type APITestimonial = {
  id: number; order: number
  quote: string; initials: string; name: string; role: string; avatar_url: string | null
}

export type APITeamMember = {
  id: number; order: number
  name: string; role: string; bio: string
  photo_url: string | null; initials: string
  linkedin: string; github: string; twitter: string
}

export type APIArticle = {
  id: number; slug: string; tag: string; category_name: string
  title: string; description: string
  author: string; read_time: number; is_featured: boolean
  published_at: string; cover_image_url: string | null
  content?: string  // uniquement dans le détail
}

export type APICategory = { id: number; name: string; slug: string }

// ── Helpers ───────────────────────────────────────────────────────────────────

type PaginatedResponse<T> = { count: number; next: string | null; previous: string | null; results: T[] }

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE}${path}`
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },   // ISR : revalide toutes les 60s (Next.js App Router)
    ...options,
  })
  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.detail ?? `API error ${res.status} on ${url}`)
  }
  return res.json()
}

async function fetchList<T>(path: string): Promise<T[]> {
  const data = await apiFetch<PaginatedResponse<T> | T[]>(path)
  // Le router DRF renvoie { results: [] } en mode paginé, ou [] directement
  if (Array.isArray(data)) return data
  return (data as PaginatedResponse<T>).results
}


export type APIChangelogEntry = {
  id: number
  version: string
  date_label: string
  date: string | null
  title: string
  description: string
  order: number
  highlights: { id: number; order: number; text: string }[]
}


export type APIDocImage = {
  id: number; order: number; caption: string
  image_url: string | null; section: number | null
}

export type APIDocLink = {
  id: number; order: number
  label: string; url: string
  link_type: 'github' | 'readthedocs' | 'pypi' | 'arxiv' | 'demo' | 'video' | 'other'
}

export type APIDocSection = {
  id: number; order: number
  title: string; content: string
  images: APIDocImage[]
}

export type APIDocProject = {
  id: number; order: number
  slug: string; name: string; tagline: string
  icon_svg: string; cover_image_url: string | null
  // détail uniquement :
  description?: string
  sections?: APIDocSection[]
  links?: APIDocLink[]
  images?: APIDocImage[]
}

// ── Endpoints GET ─────────────────────────────────────────────────────────────

export const api = {
  // Contenu
  getSolutions:    () => fetchList<APISolution>("/content/solutions/"),
  getServices:     () => fetchList<APIService>("/content/services/"),
  getRealisations: (tag?: string) =>
    fetchList<APIRealisation>(`/content/realisations/${tag ? `?tag=${tag}` : ""}`),
  getPartners:     () => fetchList<APIPartner>("/content/partners/"),
  getBadges:       () => fetchList<APIBadge>("/content/badges/"),
  getTestimonials: () => fetchList<APITestimonial>("/content/testimonials/"),
  getChangelog: () => fetchList<APIChangelogEntry>("/content/changelog/"),

  // Documentation technique
  getDocs:    () => fetchList<APIDocProject>("/content/docs/"),
  getDoc:     (slug: string) => apiFetch<APIDocProject>(`/content/docs/${slug}/`),

  // Équipe
  getTeam: () => fetchList<APITeamMember>("/team/members/"),

  // Blog
  getCategories:  () => fetchList<APICategory>("/blog/categories/"),
  getArticles:    (params?: { category?: string; featured?: boolean }) => {
    const qs = new URLSearchParams()
    if (params?.category) qs.set("category__slug", params.category)
    if (params?.featured !== undefined) qs.set("is_featured", String(params.featured))
    return fetchList<APIArticle>(`/blog/articles/${qs.toString() ? `?${qs}` : ""}`)
  },
  getArticle: (slug: string) =>
    apiFetch<APIArticle>(`/blog/articles/${slug}/`),

  // Actions POST
  sendContact: async (data: { name: string; email: string; subject: string; message: string }) => {
    return apiFetch<{ detail: string }>("/contact/", {
      method: "POST",
      body: JSON.stringify(data),
      next: { revalidate: 0 },
    })
  },

  subscribeNewsletter: async (email: string) => {
    return apiFetch<{ detail: string }>("/blog/newsletter/", {
      method: "POST",
      body: JSON.stringify({ email }),
      next: { revalidate: 0 },
    })
  },
}

import { api, type APIArticle, type APICategory } from '@/lib/api'
import BlogClient from './BlogClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Xcept-Health',
  description: "Articles de fond sur nos déploiements, nos choix techniques et nos recherches.",
}

export default async function BlogPage() {
  let articles: APIArticle[] = []
  let categories: APICategory[] = []
  try {
    [articles, categories] = await Promise.all([
      api.getArticles(),
      api.getCategories(),
    ])
  } catch {
    // API down → tableaux vides, BlogClient affiche l'état vide
  }
  return <BlogClient articles={articles} categories={categories} />
}
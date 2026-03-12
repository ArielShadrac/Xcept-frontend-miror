import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ScrollRevealProvider } from '@/components/providers/ScrollRevealProvider'
import { Loader } from '@/components/ui/Loader'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Xcept-Health — Tout commence par une exception',
  description:
    'Des solutions médicales open source pour les environnements à faibles ressources. Accessibles, déployables, ouverts à tous.',
  keywords: ['IA médicale', 'open source', 'santé', 'Afrique', 'robotique', 'télémédecine'],
  openGraph: {
    title: 'Xcept-Health',
    description: 'IA médicale open source pour démocratiser les soins.',
    siteName: 'Xcept-Health',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={GeistSans.className}>
        <ThemeProvider>
        <ScrollRevealProvider />
          <Loader />
          <Nav />
          <main className="relative z-[1]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

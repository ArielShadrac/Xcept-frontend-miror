xcept-health/
│
├── README.md
│
├── package.json                        ← généré par create-next-app
├── tsconfig.json                       ← généré
├── next.config.ts                      ← généré
├── tailwind.config.ts                  ← REMPLACER (fourni)
├── postcss.config.mjs                  ← généré (ne pas toucher)
├── .eslintrc.json                      ← généré
├── .gitignore                          ← généré
│
├── public/                             ← généré (vide, pour assets)
│   └── ...
│
└── src/
    │
    ├── app/                            ← App Router Next.js
    │   ├── globals.css                 ← REMPLACER (fourni)
    │   ├── layout.tsx                  ← REMPLACER (fourni)
    │   ├── page.tsx                    ← REMPLACER (fourni) ← page d'accueil
    │   │
    │   ├── solutions/                  ← À créer (future)
    │   │   └── page.tsx
    │   ├── services/                   ← À créer (future)
    │   │   └── page.tsx
    │   ├── about/                      ← À créer (future)
    │   │   └── page.tsx
    │   ├── realisations/               ← À créer (future)
    │   │   └── page.tsx
    │   └── blog/                       ← À créer (future)
    │       └── page.tsx
    │
    ├── components/
    │   │
    │   ├── layout/                     ← Partagé entre toutes les pages
    │   │   ├── Nav.tsx                 ← FOURNI
    │   │   └── Footer.tsx              ← FOURNI
    │   │
    │   ├── providers/
    │   │   └── ThemeProvider.tsx       ← FOURNI (dark/light context)
    │   │
    │   ├── sections/                   ← Sections de la page d'accueil
    │   │   ├── Hero.tsx                ← FOURNI
    │   │   ├── MarqueeMetrics.tsx      ← FOURNI (Marquee + Metrics)
    │   │   ├── Mission.tsx             ← FOURNI
    │   │   ├── SolutionsServices.tsx   ← FOURNI (Solutions + Services)
    │   │   ├── Realisations.tsx        ← FOURNI (slider)
    │   │   ├── Partners.tsx            ← FOURNI (strip slider)
    │   │   └── OtherSections.tsx       ← FOURNI
    │   │       ├── Compliance
    │   │       ├── Features
    │   │       ├── Testimonials
    │   │       ├── Manifesto
    │   │       └── Community
    │   │
    │   └── ui/                         ← Composants atomiques réutilisables
    │       ├── index.tsx               ← FOURNI (Btn, SectionTag, SvgIcon)
    │       └── Loader.tsx              ← FOURNI
    │
    ├── hooks/
    │   └── useScrollReveal.ts          ← FOURNI (IntersectionObserver)
    │
    └── lib/
        └── data.ts                     ← FOURNI (toutes les données)
            ├── solutions[]
            ├── services[]
            ├── realisations[]
            ├── partners[]
            ├── badges[]
            ├── testimonials[]
            └── navItems[]
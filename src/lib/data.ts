// ─── SOLUTIONS ────────────────────────────────────────────────────────────────
export const solutions = [
  {
    id: '01',
    title: "Analyse d'Imagerie Médicale",
    desc: "Vision par ordinateur pour la détection d'anomalies dans les radiographies, échographies et IRM, optimisée pour les faibles ressources.",
    icon: `<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>`,
  },
  {
    id: '02',
    title: 'Assistance Chirurgicale Robotique',
    desc: "Bras robotiques guidés par IA pour augmenter la précision lors des interventions dans des environnements peu équipés.",
    icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>`,
  },
  {
    id: '03',
    title: 'Conformité & Sécurité des Données',
    desc: "Architecture pensée pour GDPR et HIPAA, avec chiffrement de bout en bout et souveraineté des données médicales.",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  },
  {
    id: '04',
    title: 'Plateforme Collaborative',
    desc: "Écosystème open source permettant aux développeurs, cliniciens et chercheurs du monde entier de co-construire.",
    icon: `<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>`,
  },
  {
    id: '05',
    title: 'Edge & Faible Latence',
    desc: "Modèles quantisés pour fonctionner sur Raspberry Pi, smartphones et micro-contrôleurs sans connexion stable.",
    icon: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`,
  },
  {
    id: '06',
    title: 'Monitoring & Télémédecine',
    desc: "Suivi de patients à distance avec alertes intelligentes, adaptées aux contextes de faible connectivité.",
    icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
  },
]

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const services = [
  {
    id: '01',
    anchor: 'services-dev',
    title: 'Développement logiciel médical',
    desc: 'Applications de diagnostic, logiciels pour dispositifs médicaux, interfaces DPI, conformes CE, FDA, IEC 62304.',
    icon: `<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>`,
  },
  {
    id: '02',
    anchor: 'services-ai',
    title: 'Clinical AI Engineering',
    desc: "Conception et déploiement de modèles d'IA pour l'imagerie, le diagnostic et l'aide à la décision clinique.",
    icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>`,
  },
  {
    id: '03',
    anchor: 'services-consulting',
    title: 'Consulting en santé digitale',
    desc: "Stratégie numérique, transformation digitale des établissements de santé et accompagnement réglementaire.",
    icon: `<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>`,
  },
  {
    id: '04',
    anchor: 'services-recherche',
    title: 'Recherche & Formation',
    desc: "Programmes de formation pour cliniciens et ingénieurs, projets de recherche collaborative en IA médicale.",
    icon: `<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>`,
  },
  {
    id: '05',
    anchor: 'services-dispositif',
    title: 'Conception de dispositifs médicaux',
    desc: "Stéthoscopes connectés, canules et dispositifs médicaux, de l'idée au prototype avec validation clinique.",
    icon: `<circle cx="12" cy="8" r="4"/><path d="M5 22v-4a7 7 0 0114 0v4M5 18h14M12 18v4"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/>`,
  },
  {
    id: '06',
    anchor: 'services-plateforme',
    title: 'Plateformes médicales',
    desc: "Développement de DPI sécurisés, interopérables (HL7/FHIR), avec modules de télémédecine intégrés.",
    icon: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`,
  },
]

// ─── RÉALISATIONS ─────────────────────────────────────────────────────────────
export type Realisation = {
  tag: string
  date: string
  status: 'Déployé' | 'En cours'
  title: string
  desc: string
  impactLabel: string
  impactVal: string
}

export const realisations: Realisation[] = [
  {
    tag: 'Imagerie IA',
    date: 'Mars 2024',
    status: 'Déployé',
    title: 'Détection précoce du cancer du sein — CHU Ouagadougou',
    desc: 'Modèle de vision détectant les anomalies mammographiques avec 97% de précision, sur tablette Android en zone rurale.',
    impactLabel: 'Patients analysés',
    impactVal: '12 400+',
  },
  {
    tag: 'Monitoring',
    date: 'Juin 2024',
    status: 'Déployé',
    title: 'Suivi cardiaque IoT — 8 cliniques rurales Mali',
    desc: 'Réseau de capteurs connectés et alertes IA pour la surveillance en temps réel sans médecin spécialisé.',
    impactLabel: 'Vies sauvées estimées',
    impactVal: '340+',
  },
  {
    tag: 'Robotique',
    date: 'Sept. 2024',
    status: 'En cours',
    title: 'Assistant chirurgical robotique — Abidjan',
    desc: "Bras robotique open-hardware guidé par IA pour les opérations orthopédiques en environnement contraint.",
    impactLabel: 'Opérations assistées',
    impactVal: '89',
  },
  {
    tag: 'Analytics',
    date: 'Nov. 2024',
    status: 'Déployé',
    title: 'Tableau de bord épidémique — Ministère Santé BF',
    desc: 'Plateforme temps réel de surveillance épidémiologique avec données terrain anonymisées et IA prédictive.',
    impactLabel: 'Districts couverts',
    impactVal: '45 / 70',
  },
  {
    tag: 'Télémédecine',
    date: 'Jan. 2025',
    status: 'En cours',
    title: 'Consultation IA hors-ligne — Régions Sahel Niger',
    desc: 'Application mobile avec LLM médical embarqué pour agents de santé communautaires sans internet.',
    impactLabel: 'Agents formés',
    impactVal: '220',
  },
]

// ─── PARTENAIRES ──────────────────────────────────────────────────────────────
export type Partner = {
  type: string
  name: string
  desc: string
  badge: string
  since: string
  logoPath: string
}

export const partners: Partner[] = [
  {
    type: 'Hôpital universitaire',
    name: 'CHU Ouagadougou',
    desc: "Partenaire clinique de référence au Burkina Faso pour le déploiement de nos modèles d'imagerie et de diagnostic assisté.",
    badge: 'Clinique',
    since: 'Mars 2023',
    logoPath: `<rect x="14" y="4" width="8" height="28" rx="2"/><rect x="4" y="14" width="28" height="8" rx="2"/><circle cx="18" cy="18" r="5" stroke-width="1.2" style="fill:none;stroke:currentColor"/>`,
  },
  {
    type: 'Organisation internationale',
    name: 'OMS / WHO Africa',
    desc: "Collaboration sur les standards de déploiement IA en santé primaire dans les pays à faibles ressources d'Afrique subsaharienne.",
    badge: 'International',
    since: 'Juillet 2023',
    logoPath: `<circle cx="18" cy="18" r="13" stroke-width="1.2"/><path d="M18 5 C22 11 22 25 18 31 M18 5 C14 11 14 25 18 31" stroke-width="1" fill="none"/><line x1="5" y1="18" x2="31" y2="18" stroke-width="0.8"/><path d="M7 12 Q18 8 29 12 M7 24 Q18 28 29 24" stroke-width="0.8" fill="none"/>`,
  },
  {
    type: 'ONG humanitaire',
    name: 'Sahel Care ONG',
    desc: "Déploiement des agents de santé communautaire équipés de notre application de diagnostic hors-ligne au Niger et au Mali.",
    badge: 'Terrain',
    since: 'Janvier 2024',
    logoPath: `<path d="M18 30 C18 30 6 22 6 14 A9 9 0 0 1 18 8 A9 9 0 0 1 30 14 C30 22 18 30 18 30Z" stroke-width="1.2" fill="none"/><path d="M14 16 L16 18 L22 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  },
  {
    type: 'Institution académique',
    name: 'Université de Lomé',
    desc: "Partenariat de recherche sur l'adaptation des modèles IA aux pathologies tropicales spécifiques à l'Afrique subsaharienne.",
    badge: 'Recherche',
    since: 'Septembre 2023',
    logoPath: `<path d="M18 4 L32 12 L32 14 L18 22 L4 14 L4 12 Z" stroke-width="1.2" fill="none"/><path d="M8 16 L8 26 Q18 30 28 26 L28 16" stroke-width="1.2" fill="none"/><line x1="18" y1="22" x2="18" y2="30" stroke-width="1.2"/><circle cx="30" cy="20" r="2" fill="none" stroke-width="1"/><line x1="30" y1="22" x2="30" y2="30" stroke-width="1.5"/>`,
  },
  {
    type: 'Institution gouvernementale',
    name: 'Ministère Santé BF',
    desc: "Intégration du tableau de bord épidémiologique dans les 70 districts sanitaires du Burkina Faso avec reporting temps réel.",
    badge: 'Gouvernemental',
    since: 'Octobre 2023',
    logoPath: `<path d="M18 4 L30 10 L30 22 Q30 30 18 33 Q6 30 6 22 L6 10 Z" stroke-width="1.2" fill="none"/><path d="M15 16 L15 22 M18 13 L18 22 M21 16 L21 22" stroke-width="1.4" stroke-linecap="round"/><line x1="13" y1="22" x2="23" y2="22" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    type: 'Communauté globale',
    name: 'Open Source Medical',
    desc: "Réseau mondial de développeurs et cliniciens contribuant aux standards ouverts de l'IA médicale et aux protocoles d'interopérabilité.",
    badge: 'Open Source',
    since: 'Fondation 2022',
    logoPath: `<path d="M10 18 L14 14 L10 10" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M17 22 L21 22" stroke-width="1.6" stroke-linecap="round"/><path d="M26 18 L22 14 L26 10" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="4" y="4" width="28" height="28" rx="5" stroke-width="1" fill="none"/>`,
  },
]

// ─── COMPLIANCE ───────────────────────────────────────────────────────────────
export const badges = [
  'GDPR', 'HIPAA', 'Open Source', 'ISO 27001',
  'CE Médical', 'FHIR', 'HL7', 'ICD-11', 'LOINC', 'Principe FAIR',
]

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote: "Grâce à l'outil de détection mammographique, nous avons diagnostiqué 3 fois plus de cas précoces. C'est une révolution pour nos patients ruraux.",
    initials: 'DK',
    name: 'Dr. Daouda Kaboré',
    role: 'Oncologue — CHU Ouagadougou',
  },
  {
    quote: "L'application fonctionne même sans réseau. Mes agents communautaires l'utilisent quotidiennement pour référer les cas urgents.",
    initials: 'AT',
    name: 'Aminata Touré',
    role: 'Coordonnatrice santé — Sahel Care',
  },
  {
    quote: "Contribuer à Xcept-Health, c'est travailler sur du code qui sauve réellement des vies. La communauté est de très haute qualité.",
    initials: 'JO',
    name: 'Jean-Michel Ouédraogo',
    role: 'ML Engineer — Contributeur core',
  },
]

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const navItems = [
  {
    label: 'Mission',
    href: '#mission',
    children: [
      { label: 'Notre mission', href: '#mission', icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>` },
      { label: 'Manifeste',     href: '#manifesto', icon: `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/>` },
      { separator: true },
      { label: 'Équipe',        href: '#community', icon: `<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>` },
    ],
  },
  {
    label: 'Solutions',
    href: '#solutions',
    children: [
      { label: 'Imagerie Médicale', href: '#solutions', icon: `<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>` },
      { label: 'Robotique',         href: '#solutions', icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83"/>` },
      { label: 'Télémédecine',      href: '#solutions', icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>` },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Développement médical', href: '#services-dev',        icon: `<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>` },
      { label: 'Clinical AI',           href: '#services-ai',         icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>` },
      { label: 'Consulting santé',      href: '#services-consulting', icon: `<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>` },
      { label: 'Recherche & Formation', href: '#services-recherche',  icon: `<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>` },
    ],
  },
  {
    label: 'Réalisations',
    href: '#real',
    children: [
      { label: 'Projets déployés', href: '#real',          icon: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>` },
      { label: 'Témoignages',      href: '#testimonials',  icon: `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>` },
    ],
  },
  {
    label: 'Partenaires',
    href: '#partners',
    children: [
      { label: 'Nos partenaires', href: '#partners',  icon: `<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>` },
      { label: 'Communauté',      href: '#community', icon: `<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>` },
    ],
  },
]

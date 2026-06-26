export interface BlogTile {
  path: string;
  title: string;
  /** Material icon name — used in the nav dropdown menus. */
  icon: string;
  /** Font Awesome classes — used for the home page blog tiles. */
  faIcon: string;
  /** Short category tag shown above the card title. */
  category: string;
  /** Estimated read time shown in the card footer. */
  readTime: string;
  /** CSS gradient used as the card's 16:9 banner background. */
  gradient: string;
  blurb: string;
}

/** Blog catalog — drives the home page grid and (optionally) nav. */
export const BLOGS: BlogTile[] = [
  {
    path: '/mongodb-uc-backend',
    title: 'MongoDB as the Metadata Backbone for Unity Catalog',
    icon: 'database',
    faIcon: 'fa-solid fa-database',
    category: 'Metadata Platform',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #1A73E8, #34A853)',
    blurb: 'Using MongoDB as a flexible persistence backend for Unity Catalog.',
  },
  {
    path: '/edi-ndjson',
    title: 'Parsing Healthcare EDI into NDJSON',
    icon: 'code',
    faIcon: 'fa-solid fa-file-code',
    category: 'Healthcare Data',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, #EA4335, #FBBC04)',
    blurb: 'A config-driven Spring Boot service that flattens X12 835/837 to NDJSON.',
  },
  {
    path: '/ai-native-data-mesh',
    title: 'Building an AI-Native Data Mesh with Metadata at the Core',
    icon: 'account_tree',
    faIcon: 'fa-solid fa-diagram-project',
    category: 'Data Mesh',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #9334E6, #4285F4)',
    blurb: 'Turning data platforms into governed, AI-ready data product ecosystems.',
  },
  {
    path: '/dto-blog',
    title: "The Organisational Data Twin — A Data Engineer's Guide",
    icon: 'schema',
    faIcon: 'fa-solid fa-sitemap',
    category: 'Architecture',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #00897B, #1A73E8)',
    blurb: 'Building systems that reflect operational reality, not just its history.',
  },
  {
    path: '/dto-blog-part2',
    title: 'The Storage War Underneath Your Data Twin',
    icon: 'storage',
    faIcon: 'fa-solid fa-hard-drive',
    category: 'Storage',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #5F6368, #1A73E8)',
    blurb: 'DTO Part 2 — how HTAP, zero-ETL and Databricks LTAP reshape the data pipeline seam.',
  },
  {
    path: '/genai-flow',
    title: 'Understanding the GenAI Flow: Prompt Engineering to Agentic Workflows & MCP',
    icon: 'smart_toy',
    faIcon: 'fa-solid fa-robot',
    category: 'GenAI',
    readTime: '12 min read',
    gradient: 'linear-gradient(135deg, #4285F4, #9334E6)',
    blurb: 'From a simple prompt to agents, MCP, and reasoning patterns (CoT, ReAct, ToT) — one resume use case.',
  },
];

export interface ProfileTile {
  path: string;
  title: string;
  /** Material icon name — used in the nav dropdown menus. */
  icon: string;
  /** Font Awesome classes — used for the home page profile cards. */
  faIcon: string;
  /** Short tag shown above the card title. */
  category: string;
  /** CSS gradient used as the card's 16:9 banner background. */
  gradient: string;
  blurb: string;
  /** Call-to-action shown in the card footer. */
  cta: string;
}

export const PROFILE_TILES: ProfileTile[] = [
  {
    path: '/about-me',
    title: 'About Me',
    icon: 'person',
    faIcon: 'fa-solid fa-user',
    category: 'Profile',
    gradient: 'linear-gradient(135deg, #1A73E8, #9334E6)',
    blurb: 'Background, experience, and the kind of engineering and platform work I focus on.',
    cta: 'Read more →',
  },
  {
    path: '/resume',
    title: 'Resume',
    icon: 'description',
    faIcon: 'fa-solid fa-file-lines',
    category: 'Profile',
    gradient: 'linear-gradient(135deg, #00897B, #1A73E8)',
    blurb: 'Experience, skills, and certifications — viewable here or downloadable as a PDF.',
    cta: 'View résumé →',
  },
];

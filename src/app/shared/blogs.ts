export interface BlogTile {
  path: string;
  title: string;
  icon: string;
  blurb: string;
}

/** Blog catalog — drives the home page grid and (optionally) nav. */
export const BLOGS: BlogTile[] = [
  {
    path: '/mongodb-uc-backend',
    title: 'MongoDB as the Metadata Backbone for Unity Catalog',
    icon: 'database',
    blurb: 'Using MongoDB as a flexible persistence backend for Unity Catalog.',
  },
  {
    path: '/edi-ndjson',
    title: 'Parsing Healthcare EDI into NDJSON',
    icon: 'code',
    blurb: 'A config-driven Spring Boot service that flattens X12 835/837 to NDJSON.',
  },
  {
    path: '/ai-native-data-mesh',
    title: 'Building an AI-Native Data Mesh with Metadata at the Core',
    icon: 'account_tree',
    blurb: 'Turning data platforms into governed, AI-ready data product ecosystems.',
  },
  {
    path: '/dto-blog',
    title: "The Organisational Data Twin — A Data Engineer's Guide",
    icon: 'schema',
    blurb: 'Building systems that reflect operational reality, not just its history.',
  },
];

export interface ProfileTile {
  path: string;
  title: string;
  icon: string;
}

export const PROFILE_TILES: ProfileTile[] = [
  { path: '/about-me', title: 'About Me', icon: 'person' },
  { path: '/resume', title: 'Resume', icon: 'description' },
];

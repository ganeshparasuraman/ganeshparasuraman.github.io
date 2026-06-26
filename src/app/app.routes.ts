import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Ganesh Parasuraman — Tech Blogs',
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me/about-me.component').then((m) => m.AboutMeComponent),
    title: 'About Me — Ganesh Parasuraman',
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume.component').then((m) => m.ResumeComponent),
    title: 'Resume — Ganesh Parasuraman',
  },
  {
    path: 'mongodb-uc-backend',
    loadComponent: () =>
      import('./pages/mongodb-uc/mongodb-uc.component').then((m) => m.MongodbUcComponent),
    title: 'MongoDB as the Metadata Backbone for Unity Catalog',
  },
  {
    path: 'edi-ndjson',
    loadComponent: () =>
      import('./pages/edi-ndjson/edi-ndjson.component').then((m) => m.EdiNdjsonComponent),
    title: 'Parsing Healthcare EDI into NDJSON',
  },
  {
    path: 'ai-native-data-mesh',
    loadComponent: () =>
      import('./pages/ai-data-mesh/ai-data-mesh.component').then((m) => m.AiDataMeshComponent),
    title: 'Building an AI-Native Data Mesh with Metadata at the Core',
  },
  {
    path: 'dto-blog',
    loadComponent: () => import('./pages/dto-blog/dto-blog.component').then((m) => m.DtoBlogComponent),
    title: "The Organisational Data Twin — A Data Engineer's Guide",
  },
  {
    path: 'dto-blog-part2',
    loadComponent: () =>
      import('./pages/dto-blog-part2/dto-blog-part2.component').then((m) => m.DtoBlogPart2Component),
    title: 'The Storage War Underneath Your Data Twin — HTAP, LTAP & the DTO',
  },
  {
    path: 'genai-flow',
    loadComponent: () =>
      import('./pages/genai-flow/genai-flow.component').then((m) => m.GenaiFlowComponent),
    title: 'Understanding the GenAI Flow — Prompt Engineering to Agentic Workflows & MCP',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page not found',
  },
];

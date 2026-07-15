/**
 * Shared helpers for the blog pipeline tools.
 *
 * Zero external dependencies — only the Node standard library — so the tools
 * run via `npx tsx` without adding anything to the Angular app's package.json.
 *
 * The pipeline lives natively in the repo, so a single root is resolved:
 *   - REPO_ROOT : the Angular app (the dir containing angular.json), which also
 *     holds content/, specs/, and publishing-registry.json.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Walk upward from a starting dir until angular.json is found. */
export function findRepoRoot(start: string = process.cwd()): string {
  // Prefer cwd-based discovery; fall back to walking up from this file's dir.
  for (const base of [start, HERE]) {
    let cur = resolve(base);
    while (true) {
      if (existsSync(join(cur, 'angular.json'))) return cur;
      const parent = dirname(cur);
      if (parent === cur) break;
      cur = parent;
    }
  }
  throw new Error('Could not locate angular.json (Angular app root). Run from inside the repo.');
}

/** Angular app root (directory containing angular.json) — also the pipeline root. */
export const REPO_ROOT = findRepoRoot();

// Common paths -------------------------------------------------------------

export const paths = {
  drafts: join(REPO_ROOT, 'content', 'drafts'),
  reviewed: join(REPO_ROOT, 'content', 'reviewed'),
  contentAssets: join(REPO_ROOT, 'content', 'assets'),
  registry: join(REPO_ROOT, 'publishing-registry.json'),
  mediumExport: join(REPO_ROOT, 'dist', 'medium'),
  blogsTs: join(REPO_ROOT, 'src', 'app', 'shared', 'blogs.ts'),
  routesTs: join(REPO_ROOT, 'src', 'app', 'app.routes.ts'),
  pagesDir: join(REPO_ROOT, 'src', 'app', 'pages'),
  publicDir: join(REPO_ROOT, 'public'),
  blogIndex: join(REPO_ROOT, 'public', 'blog-index.json'),
  publicBlogAssets: join(REPO_ROOT, 'public', 'assets', 'blog'),
};

/** Canonical site origin — CNAME file wins, then env, then the github.io default. */
export function siteOrigin(): string {
  if (process.env.BLOG_BASE_URL) return process.env.BLOG_BASE_URL.replace(/\/+$/, '');
  const cname = join(REPO_ROOT, 'public', 'CNAME');
  const cnameRoot = join(REPO_ROOT, 'CNAME');
  for (const f of [cname, cnameRoot]) {
    if (existsSync(f)) {
      const host = readFileSync(f, 'utf8').trim();
      if (host) return `https://${host}`;
    }
  }
  return 'https://ganeshparasuraman.github.io';
}

// Frontmatter --------------------------------------------------------------

export interface ParsedDoc {
  data: Record<string, any>;
  body: string;
}

/**
 * Minimal YAML-frontmatter parser for the shapes this pipeline uses:
 * scalars, one level of nested maps, and `- ` sequences. No external deps.
 */
export function parseFrontmatter(md: string): ParsedDoc {
  if (!md.startsWith('---')) return { data: {}, body: md };
  const lines = md.split(/\r?\n/);
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      end = i;
      break;
    }
  }
  if (end === -1) return { data: {}, body: md };

  const data: Record<string, any> = {};
  let curKey: string | null = null;
  let mode: 'array' | 'map' | null = null;

  const coerce = (raw: string): any => {
    let v = raw.trim();
    if (v === '') return '';
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      return v.slice(1, -1);
    }
    if (v === 'true') return true;
    if (v === 'false') return false;
    if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
    return v;
  };

  for (let i = 1; i < end; i++) {
    const line = lines[i];
    if (line.trim() === '' || line.trim().startsWith('#')) continue;
    const indented = /^\s+/.test(line);
    const trimmed = line.trim();

    if (indented && curKey) {
      if (trimmed.startsWith('- ')) {
        if (!Array.isArray(data[curKey])) data[curKey] = [];
        data[curKey].push(coerce(trimmed.slice(2)));
        mode = 'array';
      } else {
        const idx = trimmed.indexOf(':');
        if (idx !== -1) {
          if (typeof data[curKey] !== 'object' || Array.isArray(data[curKey])) data[curKey] = {};
          data[curKey][trimmed.slice(0, idx).trim()] = coerce(trimmed.slice(idx + 1));
          mode = 'map';
        }
      }
      continue;
    }

    const idx = trimmed.indexOf(':');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim();
    curKey = key;
    if (val === '') {
      data[key] = undefined; // resolved by following indented lines
      mode = null;
    } else {
      data[key] = coerce(val);
      curKey = null;
    }
  }

  const body = lines.slice(end + 1).join('\n').trim();
  return { data, body };
}

// blogs.ts -----------------------------------------------------------------

export interface BlogTileLike {
  path: string;
  title: string;
  icon?: string;
  faIcon?: string;
  category?: string;
  readTime?: string;
  gradient?: string;
  blurb?: string;
}

/** Load the live BLOGS array from the Angular app (the source of truth). */
export async function loadBlogs(): Promise<BlogTileLike[]> {
  const mod = await import(pathToFileURL(paths.blogsTs).href);
  return (mod.BLOGS ?? []) as BlogTileLike[];
}

/** Slug = path without the leading slash. */
export const slugOf = (p: string): string => p.replace(/^\/+/, '');

// Filesystem helpers -------------------------------------------------------

export function readJson<T = any>(file: string, fallback: T): T {
  if (!existsSync(file)) return fallback;
  try {
    return JSON.parse(readFileSync(file, 'utf8')) as T;
  } catch {
    return fallback;
  }
}

export function writeJson(file: string, value: unknown): void {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

export function listMarkdown(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md') && !f.endsWith('.normalized.md'))
    .map((f) => join(dir, f));
}

// Console helpers ----------------------------------------------------------

export const log = {
  ok: (m: string) => console.log(`  ✓ ${m}`),
  warn: (m: string) => console.warn(`  ⚠ ${m}`),
  err: (m: string) => console.error(`  ✗ ${m}`),
  head: (m: string) => console.log(`\n${m}`),
};

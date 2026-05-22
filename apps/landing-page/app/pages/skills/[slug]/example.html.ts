/*
 * /skills/<slug>/example.html — endpoint route that streams the
 * canonical example output from the repo-root `skills/<slug>/example.html`
 * (or `design-templates/<slug>/example.html`, which the catalog
 * surfaces as a skill-template-origin record).
 *
 * Serves in both dev (Astro dev server runs the endpoint live) and
 * production (Astro pre-renders into `out/skills/<slug>/example.html`
 * because `output: 'static'` is the default for this app). This
 * replaces the previous post-build copy script which only worked
 * after `pnpm build` and left dev showing 404 / SPA fallback.
 */
import type { APIRoute } from 'astro';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PAGE_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(PAGE_DIR, '..', '..', '..', '..', '..', '..');
const SKILLS_DIR = path.join(REPO_ROOT, 'skills');
const DESIGN_TEMPLATES_DIR = path.join(REPO_ROOT, 'design-templates');

function listSlugsWithExample(root: string): string[] {
  if (!existsSync(root)) return [];
  return readdirSync(root)
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .filter((name) => {
      const dir = path.join(root, name);
      if (!statSync(dir).isDirectory()) return false;
      return existsSync(path.join(dir, 'example.html'));
    });
}

export function getStaticPaths() {
  // The detail layer treats design-templates as skill-template-origin
  // records that route to `/skills/<slug>/example.html`. Aggregate
  // both source dirs here so every record with an example file gets
  // a buildable endpoint.
  const skillSlugs = listSlugsWithExample(SKILLS_DIR);
  const templateSlugs = listSlugsWithExample(DESIGN_TEMPLATES_DIR);
  const all = new Set([...skillSlugs, ...templateSlugs]);
  return Array.from(all).map((slug) => ({ params: { slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug;
  if (typeof slug !== 'string') {
    return new Response('Not found', { status: 404 });
  }
  // Prefer skills/<slug>/example.html; fall back to
  // design-templates/<slug>/example.html so legacy template bundles
  // resolve through the same route.
  const candidates = [
    path.join(SKILLS_DIR, slug, 'example.html'),
    path.join(DESIGN_TEMPLATES_DIR, slug, 'example.html'),
  ];
  for (const file of candidates) {
    if (existsSync(file)) {
      const html = readFileSync(file, 'utf-8');
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
  }
  return new Response('Not found', { status: 404 });
};

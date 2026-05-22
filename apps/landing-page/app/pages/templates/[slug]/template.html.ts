/*
 * /templates/<slug>/template.html — endpoint route that streams the
 * canonical artifact for live-artifact-origin templates (the
 * `templates/live-artifacts/<slug>/template.html` files in the repo
 * root).
 *
 * Skill-template-origin records iframe through the
 * `/skills/<slug>/example.html` endpoint (see sibling file). This
 * route only covers the live-artifact origin.
 */
import type { APIRoute } from 'astro';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PAGE_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(PAGE_DIR, '..', '..', '..', '..', '..', '..');
const LIVE_ARTIFACTS_DIR = path.join(REPO_ROOT, 'templates', 'live-artifacts');

export function getStaticPaths() {
  if (!existsSync(LIVE_ARTIFACTS_DIR)) return [];
  return readdirSync(LIVE_ARTIFACTS_DIR)
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .filter((name) => {
      const dir = path.join(LIVE_ARTIFACTS_DIR, name);
      if (!statSync(dir).isDirectory()) return false;
      return existsSync(path.join(dir, 'template.html'));
    })
    .map((slug) => ({ params: { slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug;
  if (typeof slug !== 'string') {
    return new Response('Not found', { status: 404 });
  }
  const file = path.join(LIVE_ARTIFACTS_DIR, slug, 'template.html');
  if (!existsSync(file)) {
    return new Response('Not found', { status: 404 });
  }
  const html = readFileSync(file, 'utf-8');
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
};

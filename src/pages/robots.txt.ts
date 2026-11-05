import type { APIRoute } from 'astro';
import { SITE } from '../site.config';

// Follows the "Allow search engines to index this site" switch in Site settings.
// When indexing is off, crawling stays allowed on purpose: search engines must be able to
// fetch the pages to see their "noindex" tag and drop them from results.
export const GET: APIRoute = () => {
  const body = SITE.searchIndexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`
    : `User-agent: *\nAllow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

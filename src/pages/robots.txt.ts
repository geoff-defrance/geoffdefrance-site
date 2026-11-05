import type { APIRoute } from 'astro';
import { SITE } from '../site.config';

// Follows the "Allow search engines to index this site" switch in Site settings.
// When indexing is off, crawling stays allowed on purpose: search engines must be able to
// fetch the pages to see their "noindex" tag and drop them from results.
export const GET: APIRoute = () => {
  // Content Signals (contentsignals.org) tell AI systems how the content may be used.
  // Matches the Cloudflare policy: search, AI answers and training are all allowed.
  const signals = SITE.searchIndexing
    ? 'Content-Signal: search=yes, ai-input=yes, ai-train=yes\n'
    : 'Content-Signal: search=no, ai-input=no, ai-train=no\n';
  const body = SITE.searchIndexing
    ? `User-agent: *\n${signals}Allow: /\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`
    : `User-agent: *\n${signals}Allow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

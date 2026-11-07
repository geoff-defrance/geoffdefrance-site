// llms.txt: a plain-text guide to the site for AI assistants (https://llmstxt.org).
// Built from the same content as the pages, so it stays current when copy changes in the CMS.
import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { SITE } from '../site.config';

const abs = (path: string) => new URL(path, SITE.url).href;

export const GET: APIRoute = async () => {
  const services = (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
  const home = await getEntry('pages', 'home');
  const about = await getEntry('pages', 'about');

  const lines: string[] = [];
  lines.push(`# ${SITE.name}`, '');
  lines.push(`> ${SITE.tagline}. Founded and led by ${SITE.personName} (${SITE.personTitle}), based in ${SITE.location}, working with clients across the US.`, '');
  if (home?.data?.subhead) lines.push(String(home.data.subhead), '');
  lines.push(
    `${SITE.personName} is a product and technology executive with 20+ years building and fixing subscription, streaming, digital media and eCommerce businesses, including Motor Trend OnDemand (0 to 200K+ subscribers in 18 months), FloSports (revenue from $80M to $120M+ in one year) and Kinetic (eCommerce conversion for a consumer fiber brand).`,
    '',
    'To start: book a 30-minute call or send an email (see Contact below).',
    '',
  );

  lines.push('## Services', '');
  lines.push(`- [Services overview](${abs('/services/')}): ways to work together (lead, diagnose, build)`);
  for (const s of services) {
    const price = s.data.price ? ` From $${s.data.price.toLocaleString('en-US')}.` : '';
    lines.push(`- [${s.data.serviceType}](${abs(`/services/${s.id}/`)}): ${s.data.description}${price}`);
  }
  lines.push('');

  lines.push('## Case studies', '');
  for (const w of work) {
    lines.push(`- [${w.data.cardTitle}](${abs(`/work/${w.id}/`)}): ${w.data.summary} (${w.data.metric} ${w.data.metricLabel.toLowerCase()})`);
  }
  lines.push('');

  lines.push('## About and contact', '');
  lines.push(`- [About ${SITE.personName}](${abs('/about/')}): ${about?.data?.description ?? 'Background, experience and approach.'}`);
  lines.push(`- [Contact](${abs('/contact/')}): book a 30-minute call${SITE.calendlyUrl ? ` (${SITE.calendlyUrl})` : ''} or email ${SITE.email}`);
  if (SITE.cvFile) lines.push(`- [CV (PDF)](${abs(SITE.cvFile)})`);
  lines.push(`- [LinkedIn: ${SITE.personName}](${SITE.linkedin})`);
  if ((SITE as any).companyLinkedin) lines.push(`- [LinkedIn: ${SITE.name}](${(SITE as any).companyLinkedin})`);
  lines.push('');

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

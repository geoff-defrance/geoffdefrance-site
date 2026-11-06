import { SITE } from '../site.config';

export const person = {
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.personName,
  url: `${SITE.url}/`,
  image: new URL(SITE.headshot, SITE.url).href,
  jobTitle: 'Fractional Head of Product',
  sameAs: [SITE.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Nashville', addressRegion: 'TN', addressCountry: 'US' },
  worksFor: { '@id': `${SITE.url}/#business` },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'San Francisco State University' },
};

export const business = {
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: `${SITE.url}/`,
  description: SITE.tagline,
  founder: { '@id': `${SITE.url}/#person` },
  areaServed: 'Worldwide',
  address: { '@type': 'PostalAddress', addressLocality: 'Nashville', addressRegion: 'TN', addressCountry: 'US' },
};

export const ld = (node: object) => ({ '@context': 'https://schema.org', ...node });

export const faqPage = (faqs: { q: string; a: string }[]) =>
  ld({
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  });

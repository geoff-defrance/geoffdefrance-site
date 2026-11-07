import { SITE } from '../site.config';

export const person = {
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.personName,
  url: `${SITE.url}/`,
  image: new URL(SITE.headshot, SITE.url).href,
  jobTitle: SITE.personTitle || 'Founder & Principal',
  description: 'Product and technology executive with 20+ years building and fixing subscription, streaming, digital media and eCommerce businesses. Founder of ' + SITE.name + '.',
  knowsAbout: [
    'Product leadership', 'Fractional product management', 'Subscription businesses', 'SVOD and OTT streaming',
    'Churn and retention', 'Subscription pricing and billing', 'eCommerce conversion optimization', 'A/B testing and experimentation',
    'Digital media and publishing', 'Audience engagement and ad monetization', 'Build-vs-buy and platform strategy',
    'Product discovery', 'Product organization design', 'AI-native software delivery',
  ],
  sameAs: [SITE.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Nashville', addressRegion: 'TN', addressCountry: 'US' },
  worksFor: { '@id': `${SITE.url}/#business` },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'San Francisco State University' },
    { '@type': 'Organization', name: 'Uniti Group (Kinetic)' },
    { '@type': 'Organization', name: 'FloSports' },
    { '@type': 'Organization', name: 'Circle Media (Opry Entertainment Group)' },
    { '@type': 'Organization', name: 'Motor Trend Group (Discovery)' },
    { '@type': 'Organization', name: 'Kelley Blue Book' },
    { '@type': 'Organization', name: 'Yahoo!' },
  ],
};

export const business = {
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: `${SITE.url}/`,
  description: SITE.tagline,
  logo: new URL('/images/defrance-product-partners-logo.png', SITE.url).href,
  founder: { '@id': `${SITE.url}/#person` },
  sameAs: [SITE.companyLinkedin].filter(Boolean),
  areaServed: 'Worldwide',
  address: { '@type': 'PostalAddress', addressLocality: 'Nashville', addressRegion: 'TN', addressCountry: 'US' },
};

export const ld = (node: object) => ({ '@context': 'https://schema.org', ...node });

export const faqPage = (faqs: { q: string; a: string }[]) =>
  ld({
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  });

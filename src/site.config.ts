// One place for site-wide settings. Change a value here and every page follows.
export const SITE = {
  name: 'Geoff DeFrance',
  url: 'https://geoffdefrance.com',
  tagline: 'Fractional product leadership for subscription, media and eCommerce businesses',
  email: 'geoff@geoffdefrance.com',
  linkedin: 'https://www.linkedin.com/in/geoffdefrance/',
  location: 'Nashville, Tennessee',
  // Paste your Calendly event link here, e.g. 'https://calendly.com/geoffdefrance/30min'.
  // While it is empty, every "Book a call" button goes to the Contact page instead.
  calendlyUrl: '',
};

export const bookingHref = SITE.calendlyUrl || '/contact/';

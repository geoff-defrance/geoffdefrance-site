// Site-wide settings live in src/data/settings.json, which is editable in Pages CMS
// ("Site settings"). This file just exposes them to the pages.
import settings from './data/settings.json';

export const SITE = settings;

// While calendlyUrl is empty, every "Book a call" button goes to the Contact page instead.
export const bookingHref = SITE.calendlyUrl || '/contact/';

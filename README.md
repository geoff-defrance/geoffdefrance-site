# geoffdefrance.com

The consulting site for Geoff DeFrance. It's built with [Astro](https://astro.build) and hosted on Cloudflare Pages. Every push to `main` deploys automatically.

## Where things live

| What | Where |
|---|---|
| Home page text | `src/content/pages/home.md` |
| About page text | `src/content/pages/about.md` |
| Service pages | `src/content/services/*.md` |
| Case studies | `src/content/work/*.md` |
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` tokens at the top) |
| Email, LinkedIn, Calendly link | `src/site.config.ts` |
| Redirects | `public/_redirects` |
| Headshot | `src/assets/geoff-defrance.jpg` |

## Editing

- **In a browser:** sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and open this repository. `.pages.yml` defines the editing fields.
- **With Claude:** ask for the change. Claude edits the files, and you approve them before anything goes live.

## Cloudflare Pages build settings

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Local development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

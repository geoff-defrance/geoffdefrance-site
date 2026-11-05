# geoffdefrance.com

The consulting site for Geoff DeFrance. It's built with [Astro](https://astro.build) and hosted on Cloudflare Pages. Every push to `main` deploys automatically.

## Where things live

| What | Where |
|---|---|
| Site settings (email, LinkedIn, Calendly, headshot, default closing text) | `src/data/settings.json` |
| Page text (Home, About, Services overview, Work, Contact, Privacy, 404) | `src/content/pages/*.md` |
| Service pages | `src/content/services/*.md` |
| Case studies | `src/content/work/*.md` |
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` tokens at the top) |
| Redirects | `public/_redirects` |
| Images, including the headshot | `public/images/` |

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

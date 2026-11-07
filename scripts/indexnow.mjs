// Tells IndexNow (Bing, Yandex, Seznam, Naver and others) which pages exist after each deploy,
// so they are re-crawled within hours instead of weeks. Run by .github/workflows/indexnow.yml.
// The key file lives at public/<key>.txt and must match INDEXNOW_KEY below.
const SITE = 'https://geoffdefrance.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function text(url) {
  const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.text();
}

// Wait until the deploy that triggered this run is live (key file served).
for (let i = 0; ; i++) {
  try { if ((await text(`${SITE}/${INDEXNOW_KEY}.txt`)).trim() === INDEXNOW_KEY) break; } catch {}
  if (i > 20) throw new Error('Key file not reachable; is the site deployed?');
  await sleep(15000);
}

// Respect the CMS search switch: if pages are noindex, don't ping.
if ((await text(`${SITE}/robots.txt`)).includes('search=no')) {
  console.log('Search indexing is off; skipping IndexNow.');
  process.exit(0);
}

const index = await text(`${SITE}/sitemap-index.xml`);
const maps = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const m of maps) urls.push(...[...(await text(m)).matchAll(/<loc>(.*?)<\/loc>/g)].map((x) => x[1]));
urls.push(`${SITE}/llms.txt`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'geoffdefrance.com', key: INDEXNOW_KEY, keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} for ${urls.length} URLs`);
if (res.status >= 400 && res.status !== 429) process.exit(1);

# Get Found website

Marketing site for Get Found, a service by Altura Marketing LTD. Astro + Tailwind CSS, fully static, hosted on Cloudflare Pages at getfoundwithaltura.com.

Live: https://getfoundwithaltura.com (Cloudflare Pages project `getfoundwithaltura`, deploys automatically from `main` on GitHub: alturamarketingltd/getfoundwithaltura).

## Setup status

Launched November 2026. What's configured and what's optional:

1. **Visibility check form (done).** `WEB3FORMS_ACCESS_KEY` in `src/content/site.ts` points the form at Web3Forms (free plan, 250 submissions a month). Each request arrives by email with business, city, service, email, optional phone, marketing opt-in (with the exact wording agreed to) and any `utm_*` values. Only add people to marketing emails when `marketing_consent` is true.
2. **Contact email (done).** `CONTACT_EMAIL` is hello@getfoundwithaltura.com, forwarded to Gmail by Cloudflare Email Routing.
3. **Optional call.** Set `BOOKING_URL` to a booking link to show the "Book a 15-minute call" options. Until then, "Email us" stands in.
4. **Analytics is off.** Set `ANALYTICS` in `src/content/site.ts` when you have a token. See "Analytics and events" below.

## Run it locally

Needs Node 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321. In dev, disabled buttons show a yellow "coming soon" note.

Production build and local preview:

```bash
npm run build
npm run preview
```

The build output is in `dist/`.

## Editing content

Everything editable is in **`src/content/site.ts`**: copy for every section, prices in CAD and USD, setup fees, FAQs, the booking link, contact email, Substack link, analytics settings and feature flags.

| What | Where in `site.ts` |
|---|---|
| Booking link, contact email | `BOOKING_URL`, `CONTACT_EMAIL` |
| Prices, setup fees, plan badge, tax note | `pricing` |
| FAQ questions (also feed the FAQ structured data) | `faq.items` |
| Testimonials (hidden) | `proof.enabled` plus real entries in `proof.items` |
| Video under "How it works" (hidden) | `video.enabled` plus `video.id` |
| ROI calculator defaults | `worthIt.calculator` |
| Sample report numbers | `report` |

Colours and fonts are tokens at the top of `src/styles/global.css`.

Rules for testimonials: only real, approved quotes. The section renders nothing unless `proof.enabled` is `true` and `proof.items` has at least one entry.

## Deploy to Cloudflare Pages

1. Push the project to GitHub. The repository root is the `Altura Get Found Site` folder; the site itself is in `get-found-site/`.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and pick the repository.
3. Build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `get-found-site` |
   | Environment variable | `NODE_VERSION` = `26` (also pinned in `.node-version`) |

4. Save and deploy. Every push to the production branch redeploys. Other branches get preview URLs.

No Workers, functions or environment secrets are needed.

### Connect getfoundwithaltura.com

1. In the Pages project open **Custom domains → Set up a custom domain**.
2. Enter `getfoundwithaltura.com` and confirm.
   - If the domain's DNS is already on Cloudflare, the record is created for you.
   - If not, either move the nameservers to Cloudflare (recommended, required for the apex domain) or add the CNAME record Cloudflare shows you at your registrar.
3. Repeat for `www.getfoundwithaltura.com`, then add a redirect rule (**Rules → Redirect Rules**) sending `www` to the apex so only one address is indexed.
4. Wait for the certificate to show as active, then load the site over https.

The canonical URL, sitemap and Open Graph tags all use `site.url` in `site.ts` and `site` in `astro.config.mjs`. Change both if the domain changes.

## Analytics and events

- The analytics slot is in `src/layouts/Layout.astro` and is off by default. Setting `ANALYTICS.enabled = true` with a `token` loads Cloudflare Web Analytics, which is cookieless, so no cookie banner is needed.
- Booking buttons carry `data-event="booking_cta_click"` and Substack links carry `data-event="substack_click"`, each with a `data-location`. On click the site fires a `gf:event` browser event and calls `window.gfTrack(name, detail)` if that function exists.
- **Cloudflare Web Analytics does not record custom events.** It will count page views only. To count button clicks, use a cookieless tool that supports events (for example Plausible or Fathom) and define `window.gfTrack` to forward to it, or rely on the UTM tags below and read clicks in the booking tool.
- Outbound booking and Substack links get `utm_source`, `utm_medium`, `utm_campaign` and `utm_content` (the page location). If a visitor arrives with `utm_*` parameters, those are passed through to the booking link.
- If you enable a YouTube or Vimeo video, the embed is a third party. Update the privacy page to mention it.

## Open Graph image

`public/og.png` is generated by `scripts/make-og.mjs` from the brand colours and fonts. Regenerate it only if the palette, fonts or tagline change:

```bash
npm i -D playwright
```

```bash
npx playwright install chromium
```

```bash
npm run og
```

## Structure

```
src/content/site.ts      all copy, prices, flags and settings
src/lib/cta.ts           booking link fallback logic, UTM helper, build warning
src/layouts/Layout.astro head tags, header, footer, analytics slot, small scripts
src/layouts/Legal.astro  wrapper for /privacy and /terms
src/components/          Cta, MapMock, Report, Calculator, Pricing, Proof, Video
src/pages/               index, privacy, terms, 404, robots.txt, sitemap.xml
src/styles/global.css    colour and font tokens, base styles
public/                  favicon, og.png, _headers (Cloudflare cache and security headers)
```

## Quality bar

Last production build scored 100 for performance, accessibility, best practices and SEO in Lighthouse (mobile) on all three pages. Re-run after content changes:

```bash
npx lighthouse http://localhost:4321/ --form-factor=mobile --view
```

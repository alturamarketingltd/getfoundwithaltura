// Renders a one-page visibility scorecard PDF (and a PNG preview) from a JSON data file.
// Usage, from the project root:
//   PATH="$HOME/.local/node/current/bin:$PATH" node .claude/skills/scorecard/render.mjs scorecards/<slug>/data.json
// Writes scorecard.pdf and scorecard.png next to data.json. Uses the Playwright Chromium
// installed for the site (get-found-site/node_modules).
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../../..');
const { chromium } = await import(pathToFileURL(join(root, 'get-found-site/node_modules/playwright/index.mjs')).href);

const dataPath = resolve(process.argv[2] || '');
if (!process.argv[2] || !existsSync(dataPath)) {
  console.error('Usage: node .claude/skills/scorecard/render.mjs scorecards/<slug>/data.json');
  process.exit(1);
}
const outDir = dirname(dataPath);
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

// Screenshots are referenced relative to data.json; inline them so the PDF is self-contained.
if (data.mapScreenshot && !/^data:/.test(data.mapScreenshot)) {
  const img = resolve(outDir, data.mapScreenshot);
  if (existsSync(img)) {
    const ext = img.toLowerCase().endsWith('.png') ? 'png' : 'jpeg';
    data.mapScreenshot = `data:image/${ext};base64,${readFileSync(img).toString('base64')}`;
  } else {
    console.warn(`Screenshot not found, skipping: ${img}`);
    data.mapScreenshot = '';
  }
}

const font = readFileSync(join(root, 'get-found-site/src/assets/fonts/hanken-grotesk-latin.woff2')).toString('base64');
const html = readFileSync(join(here, 'template.html'), 'utf8')
  .replace('<style>', `<style>@font-face{font-family:"Hanken Grotesk";src:url(data:font/woff2;base64,${font}) format("woff2");font-weight:100 900}`)
  .replace('<script>', `<script>window.SCORECARD=${JSON.stringify(data).replace(/</g, '\\u003c')};</script><script>`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);

// One page only: report if the content runs past the bottom of the sheet.
const overflow = await page.evaluate(() => document.body.scrollHeight - 1056);
if (overflow > 0) console.warn(`WARNING: content is ${overflow}px taller than one page. Shorten notes or gaps.`);

await page.pdf({ path: join(outDir, 'scorecard.pdf'), format: 'Letter', printBackground: true, pageRanges: '1' });
await page.screenshot({ path: join(outDir, 'scorecard.png'), fullPage: false });
await browser.close();
console.log(`Wrote ${join(outDir, 'scorecard.pdf')} and scorecard.png`);

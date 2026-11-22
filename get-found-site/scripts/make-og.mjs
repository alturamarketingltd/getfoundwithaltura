// Generates public/og.png (1200x630) from the brand colours and fonts.
// Run with: npm run og   (needs Playwright with Chromium: npm i -D playwright && npx playwright install chromium)
// Only needed again if the palette, fonts or tagline change. The PNG is committed.
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const font = (f) => readFileSync(new URL(`../src/assets/fonts/${f}`, import.meta.url)).toString('base64');
const display = font('hanken-grotesk-latin.woff2');
const body = font('hanken-grotesk-latin.woff2');

const html = `<!doctype html><html><head><style>
@font-face{font-family:D;src:url(data:font/woff2;base64,${display}) format('woff2');font-weight:100 900}
@font-face{font-family:B;src:url(data:font/woff2;base64,${body}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#002fa7;color:#e9e1d3;font-family:B;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
.w{font-family:D;font-weight:800;font-size:44px;letter-spacing:-.02em}.w i{color:#f9e14c;font-style:normal}
h1{font-family:D;font-weight:700;font-size:92px;line-height:1.02;letter-spacing:-.03em;max-width:900px}h1 b{color:#f9e14c;font-weight:700}
p{font-size:30px;color:#c9d3f5}
.pin{position:absolute;right:70px;top:150px;width:250px;height:250px;border-radius:50%;border:5px dashed #f9e14c;display:grid;place-items:center;font-family:D;font-weight:700;font-size:120px;color:#f9e14c}
</style></head><body>
<div class="w">Get Found<i>.</i></div>
<h1>Do they <b>find you</b>, or the clinic down the street?</h1>
<p>Show up on Google Maps and in AI tools. A service by Altura Marketing LTD.</p>
<div class="pin">?</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: fileURLToPath(new URL('../public/og.png', import.meta.url)), type: 'png' });
await browser.close();
console.log('Wrote public/og.png');

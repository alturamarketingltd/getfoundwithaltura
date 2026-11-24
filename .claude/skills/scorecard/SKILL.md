---
name: scorecard
description: Prepare a Get Found visibility check for a lead - research their local search, AI and profile visibility, render the one-page scorecard PDF, and draft the reply email. Use when Nathaniel pastes a visibility check request (from the Web3Forms email) or says /scorecard.
user-invocable: true
argument-hint: "[paste the visibility check request: business, city, service, email, phone]"
---

# Visibility check (scorecard)

Turn one visibility check request into: a one-page scorecard PDF in the Get Found design, plus a draft reply email Nathaniel reviews and sends himself. The site promises "a free one-page scorecard within one business day: where you show up for five local searches, how you compare with three nearby competitors, and whether ChatGPT mentions you." Deliver exactly that.

## Ground rules

- **Never invent data.** Every number and position comes from a search or tool you actually ran today. If a step can't be done, show "Not checked" rather than guessing.
- **Only public business details go into AI tools and search tools** (business name, city, type of business, website, public phone). Never paste the lead's email address or a personal phone number into ChatGPT, AI Mode or any other tool. The privacy policy commits to this.
- **Don't sign in or create accounts for Nathaniel.** If BrightLocal, ChatGPT or Google needs a login, CAPTCHA or account, stop that step and ask him to do it (or send the screenshot). Using sessions he is already signed into in the browser pane is fine.
- **No sending.** Draft the email; Nathaniel sends it. Don't submit forms or send messages on his behalf.
- Lead data stays local: work in `scorecards/<slug>/` at the project root (git-ignored). Never commit it.
- Health and fitness ad rules: in the email, don't promise rankings, patients or results.

## Steps

Start by restating the request (business, city, service, website if known) and create `scorecards/<business-slug>-<YYYY-MM-DD>/`. Find the business's Google profile and website first; if you can't confidently identify the right business, ask before continuing.

1. **Map results: five local searches.** Use BrightLocal's free Local SERP Checker (brightlocal.com/local-search-results-checker) in the browser pane, set to the lead's city, Google Maps results. Run five searches: main service + city, two common variations (e.g. "pilates classes", "reformer pilates"), the "near me" version from that location, and one niche service they offer. Record their position in the map results (or "not showing"). Save one screenshot of the main search as `map.png` in the folder. If BrightLocal is blocked, fall back to Google Maps searches with the city in the query and say so in the notes.
2. **AI answers.** Run BrightLocal's free Local AI Visibility Checker if it works without sign-in. Then ask ChatGPT and Google AI Mode 2–3 customer questions such as "Who offers [service] in [city]?" and "Best [service] in [neighbourhood]?" through the browser pane (Nathaniel's own logged-in sessions). Record whether the business is named, with a short quote of what was said. Note that AI Mode answers can vary by location.
3. **Profile vs the top 3.** From the main search, take the top 3 businesses (not the lead). In Google Maps compare: rating, review count, photo count, categories, hours, and how recently each posted. Write the 3 biggest gaps in plain language ("12 reviews vs an average of 180 for the top 3").
4. **Consistency.** Search the business name and phone number; check Apple Maps, Bing Places, Yelp and Facebook for a wrong name, phone, address or missing listing. Mark each ok / wrong / missing with a short note.
5. **Demand.** Ask Nathaniel for Google Keyword Planner volumes for the 3–5 main searches (it needs his Google Ads login). If the total is under about 50 a month, say so honestly and steer the pitch to reviews, trust and AI answers rather than map rankings.
6. **Website.** Search `site:theirdomain.com` to confirm Google has indexed it, and run PageSpeed Insights (pagespeed.web.dev) for the mobile score.

## Build the scorecard

Write `scorecards/<slug>/data.json`:

```json
{
  "business": "", "city": "", "service": "", "date": "24 November 2026",
  "searches": [{ "query": "pilates studio austin tx", "position": 7 }, { "query": "reformer pilates austin", "position": null }],
  "mapScreenshot": "map.png",
  "ai": [{ "tool": "ChatGPT", "question": "Who offers reformer pilates in Austin?", "mentioned": false, "note": "Named 4 studios, not this one." }],
  "you": { "rating": 4.9, "reviews": 12, "photos": 8, "lastPost": "Never" },
  "competitors": [{ "name": "", "rating": 4.8, "reviews": 212, "photos": 140, "lastPost": "3 days ago" }],
  "gaps": ["", "", ""],
  "consistency": [{ "site": "Apple Maps", "status": "ok" }, { "site": "Yelp", "status": "wrong", "note": "Old phone number" }],
  "website": { "url": "", "indexed": true, "mobileSpeed": 62 },
  "demand": { "total": 140, "note": "Across 4 main searches" },
  "fixFirst": ["", "", ""]
}
```

`position: null` means not showing. `status` is `ok`, `wrong` or `missing`. Use `null` for anything not checked. Keep notes short: it must fit one page.

Render it from the project root:

```bash
PATH="$HOME/.local/node/current/bin:$PATH" node .claude/skills/scorecard/render.mjs scorecards/<slug>/data.json
```

It writes `scorecard.pdf` and a `scorecard.png` preview and warns if the content spills past one page. Look at the PNG; fix overflow or anything that reads wrong, then re-render.

## Draft the reply email

Write `scorecards/<slug>/email.txt` for Nathaniel to send from hello@getfoundwithaltura.com with the PDF attached. Keep it short and plain:

1. Open with the map and AI result: "When someone nearby searches for [service], this is what they see." One or two lines, pointing to the attached scorecard.
2. Ask: "What do you want more of right now?"
3. The 3 gaps and what you'd fix first. If demand is low, say so straight.
4. Price, setup fee and a start date: setup is $500 CAD ($750 if we build their Google profile from scratch), waived on the 12-month plan; month-to-month or prepaid 6 or 12 months (prepaid is non-refundable). Check `get-found-site/src/content/site.ts` for current prices and the January spots line before quoting.
5. Close: if they're in, the agreement comes the same day and the intake call is booked before any setup.

Sign off as Nathaniel, Get Found. No ranking promises, no invented urgency.

## Finish

Tell Nathaniel: the folder path, the 3 gaps in one line each, anything you couldn't check and why, and that the PDF and email are ready for him to review and send.

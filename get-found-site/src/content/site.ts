/**
 * Get Found: all editable site content lives in this file.
 * Change copy, prices, FAQs and flags here. No layout edits needed.
 */

/* ------------------------------------------------------------------ */
/* Launch settings (PRE-LAUNCH BLOCKERS: see README)                    */
/* ------------------------------------------------------------------ */

/** Booking link for the free visibility check. Leave '' until it exists. */
export const BOOKING_URL = '';

/** Contact email. Leave '' until it exists. Used for the CTA fallback and the footer. */
export const CONTACT_EMAIL = '';

/**
 * Visibility check form backend: Web3Forms (free plan, 250 submissions a month).
 * Paste the access key from web3forms.com here. It is a public key, safe to publish:
 * it only lets this form send submissions to your inbox.
 * Leave '' and the form is hidden on the live site (main buttons fall back to booking).
 */
export const WEB3FORMS_ACCESS_KEY = '';

/** Where the form posts. Set automatically once the access key is filled in. */
export const SCORECARD_FORM_ENDPOINT = WEB3FORMS_ACCESS_KEY ? 'https://api.web3forms.com/submit' : '';

/** Subject line used when CTAs fall back to a mailto: link. */
export const CTA_EMAIL_SUBJECT = 'Free visibility check';

export const SUBSTACK_URL = 'https://substack.com/@nathanielaltura';

/**
 * Analytics slot. Off by default.
 * provider 'cloudflare' loads Cloudflare Web Analytics (cookieless) with the token below.
 */
export const ANALYTICS = {
  enabled: false,
  provider: 'cloudflare' as 'cloudflare',
  token: '',
};

/* ------------------------------------------------------------------ */
/* Brand and SEO                                                        */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'Get Found',
  url: 'https://getfoundwithaltura.com',
  company: 'Altura Marketing LTD',
  companyRegion: 'BC',
  companyCountry: 'CA',
  footerLine: 'Get Found is a service by Altura Marketing LTD.',
  title: 'Get Found | Show up on Google Maps and in AI tools',
  description:
    'Get Found is a monthly service that gives health and fitness businesses across North America better visibility on Google Maps and in AI tools like ChatGPT, with a short report every month showing what changed.',
  ogImage: '/og.png',
  ogImageAlt: 'Get Found: show up on Google Maps and in AI tools.',
};

export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

export const cta = {
  label: 'Get your free visibility check',
  shortLabel: 'Free visibility check',
  /** The optional call, offered as a secondary link. */
  callLabel: 'Questions first? Book a 15-minute call',
  callButton: 'Book a 15-minute call',
  comingSoon: 'Coming soon: set BOOKING_URL or CONTACT_EMAIL in src/content/site.ts',
};

/* ------------------------------------------------------------------ */
/* 1. Hero                                                              */
/* ------------------------------------------------------------------ */

export const hero = {
  // The highlighted part of the headline is wrapped in the accent colour.
  headlineBefore: 'When someone nearby searches for what you do, do they ',
  headlineHighlight: 'find you',
  headlineAfter: ', or the place down the street?',
  subhead:
    'More than an AI tool, without the agency price. We keep your Google profile, reviews and listings working so you show up on Google Maps and in AI tools like ChatGPT.',
  /** Who it's for, shown under the hero button. */
  builtFor: {
    lead: 'Built for',
    items: ['physio, chiro and massage clinics', 'gyms', 'fitness studios', 'recovery studios'],
  },
  reassurance: 'Free. Emailed within one business day.',
  /**
   * Limited spots line under the hero button. Keep it true: update the number as spots fill,
   * and set enabled: false once they're gone.
   */
  spots: {
    enabled: true,
    text: '5 client spots opening in January. Get your free check to secure yours.',
  },
  mock: {
    alt: 'Illustration of local map searches, such as "physio near me" and "cold plunge near me". Three nearby businesses are listed for each. Your business is not showing.',
    /** The map cycles through these searches (first one shows without JavaScript or with reduced motion). */
    scenes: [
      {
        query: 'physio near me',
        results: [
          { name: 'The physio clinic down the street', rating: '4.8', reviews: '212', note: 'Open now' },
          { name: 'Another clinic nearby', rating: '4.7', reviews: '148', note: 'Open now' },
          { name: 'A sports clinic two blocks away', rating: '4.6', reviews: '96', note: 'Closes soon' },
        ],
      },
      {
        query: 'pilates studio near me',
        results: [
          { name: 'The studio down the street', rating: '4.9', reviews: '187', note: 'Class at 6pm' },
          { name: 'Another studio nearby', rating: '4.7', reviews: '121', note: 'Open now' },
          { name: 'A gym with classes two blocks away', rating: '4.5', reviews: '264', note: 'Open now' },
        ],
      },
      {
        query: 'cold plunge near me',
        results: [
          { name: 'The recovery studio down the street', rating: '4.9', reviews: '143', note: 'Open now' },
          { name: 'A spa nearby', rating: '4.6', reviews: '310', note: 'Open now' },
          { name: 'A gym with a sauna two blocks away', rating: '4.5', reviews: '88', note: 'Closes soon' },
        ],
      },
      {
        query: 'gym near me',
        results: [
          { name: 'The gym down the street', rating: '4.7', reviews: '402', note: 'Open 24 hours' },
          { name: 'Another gym nearby', rating: '4.6', reviews: '256', note: 'Open now' },
          { name: 'A fitness studio two blocks away', rating: '4.8', reviews: '91', note: 'Open now' },
        ],
      },
      {
        query: 'massage therapist near me',
        results: [
          { name: 'The massage clinic down the street', rating: '4.9', reviews: '176', note: 'Open now' },
          { name: 'A wellness centre nearby', rating: '4.7', reviews: '133', note: 'Open now' },
          { name: 'A chiropractor two blocks away', rating: '4.6', reviews: '102', note: 'Closes soon' },
        ],
      },
    ],
    missing: { name: 'Your business', note: 'Not showing' },
  },
};

/* ------------------------------------------------------------------ */
/* 2. The problem                                                       */
/* ------------------------------------------------------------------ */

export const problem = {
  eyebrow: 'The problem',
  heading: 'Being good at what you do only helps if people can find you.',
  points: [
    {
      title: 'The map comes first',
      body: "Map results sit above everything else. That's where people check reviews, get directions and book.",
    },
    {
      title: 'People now ask AI',
      body: "More people now ask ChatGPT and Google's AI for recommendations. Those tools pull from your profile, reviews, listings and website.",
    },
    {
      title: 'Nobody has time for it',
      body: "Most practitioners and studio owners don't have time to manage any of it.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2b. Three ways to get found (comparison)                            */
/* ------------------------------------------------------------------ */

/**
 * Categories, not competitor names. Figures checked Nov 2026:
 * AI tools: typical published entry plans for Google profile tools ($25 to $100 per location).
 * Agencies: Ahrefs survey of 439 SEO providers, local SEO average $1,557/month.
 * Get Found's price is read from pricing.plans, so it follows any price change.
 */
export const comparison = {
  heading: 'Three ways to get found.',
  intro:
    "Most clinics, studios and gyms don't need a full SEO team, and AI tools on their own don't know your business. Get Found sits in between.",
  columns: ['An AI tool', 'Get Found', 'An SEO agency'],
  featured: 1,
  rows: [
    { label: 'Cost per month', cells: ['About US$25 to $100', '{price}', 'About US$1,557'] },
    {
      label: 'Who does the work',
      cells: ['Software. You set it up and check it.', 'AI-assisted, planned and checked by a person', 'A team'],
    },
    { label: 'Your time each month', cells: ['Hours', 'Under 10 minutes', 'Meetings and calls'] },
    { label: 'Health and fitness ad rules', cells: ['Not built in', 'Followed', 'Depends on the agency'] },
    { label: 'Reporting', cells: ['Dashboards to read', '3 lines plus one page', 'Often long and technical'] },
    { label: 'Content', cells: ['Often generic', 'Built on questions people near you are asking', 'Varies by package'] },
    { label: 'Commitment', cells: ['Monthly', 'Monthly, or prepay 6 or 12 months', 'Often 6 to 12 months'] },
  ],
  pricePrefix: 'From',
  footnote:
    'AI tool range: typical published entry plans for Google profile tools, November 2026. Agency figure: Ahrefs survey of 439 SEO providers.',
};

/* ------------------------------------------------------------------ */
/* 3. What you get (6 cards max)                                        */
/* ------------------------------------------------------------------ */

export const outcomes = {
  eyebrow: 'What you get',
  heading: 'More ways to be found. No extra work for you.',
  cards: [
    {
      icon: 'pin',
      title: 'Better visibility on Google Maps',
      body: 'We keep your Google profile complete, current and active, so more people nearby find you, call and book.',
    },
    {
      icon: 'spark',
      title: 'Better visibility on AI tools',
      body: 'We keep the details AI tools draw on accurate and current, and check every month whether you show up in ChatGPT and Google AI answers.',
    },
    {
      icon: 'star',
      title: 'More reviews, asked for automatically',
      body: 'Clients get a simple, polite request after a visit.',
    },
    {
      icon: 'check',
      title: 'Correct details everywhere',
      body: 'Your name, address, phone and hours, correct on Apple Maps, Bing, Yelp, Facebook and the directories people actually use.',
    },
    {
      icon: 'page',
      title: 'Content built on what locals ask',
      body: 'We look at the questions people in your area are asking about services like yours, then write a blog post each month that answers them. Reuse it on social media, in emails or in ads.',
    },
    {
      icon: 'mail',
      title: 'A short report every month',
      body: 'How many people called and asked for directions, what we did, and what changed. In plain language.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. How it works + video slot                                         */
/* ------------------------------------------------------------------ */

export const howItWorks = {
  eyebrow: 'How it works',
  heading: 'Three steps. We do almost all of it.',
  steps: [
    {
      title: 'Free visibility check',
      body: 'See where you show up today, on Google Maps and in AI tools.',
    },
    {
      title: 'Setup in about 2 weeks',
      body: 'We do it all.',
    },
    {
      title: 'Ongoing',
      body: 'We do the work. You read a short report.',
    },
  ],
};

/** Video slot under "How it works". Hidden until enabled. */
export const video = {
  enabled: false,
  heading: 'See how it works in 2 minutes',
  provider: 'youtube' as 'youtube' | 'vimeo' | 'file',
  /** YouTube or Vimeo video ID, or a file path such as '/video/get-found.mp4' when provider is 'file'. */
  id: '',
  /** Required for accessibility: describes the video. */
  title: 'How Get Found works',
  /** Optional poster image path for self-hosted video. */
  poster: '',
};

/* ------------------------------------------------------------------ */
/* 5. Sample monthly report (illustrative numbers only)                 */
/* ------------------------------------------------------------------ */

export const report = {
  eyebrow: 'The monthly report',
  heading: 'Every month, you see exactly what changed.',
  label: 'Sample report. Numbers are illustrative.',
  email: {
    from: 'Get Found',
    subject: 'Your October report',
    greeting: 'Hi there,',
    lines: [
      '38 people called you from Google and 54 asked for directions, up from 33 and 45 in September.',
      '6 new reviews came in. You showed up in 4 of the 10 AI questions we track, up from 2.',
      'Next month: a new blog post and fresh photos on your profile.',
    ],
    signoff: 'Full report attached.',
  },
  page: {
    title: 'Monthly report',
    period: 'October',
    business: 'Your business name',
    metrics: [
      { label: 'Calls', value: '38', change: 'Up 5 from last month' },
      { label: 'Direction requests', value: '54', change: 'Up 9 from last month' },
      { label: 'New reviews', value: '6', change: '87 in total' },
      { label: 'Google profile views', value: '1,240', change: 'Up 18% from last month' },
    ],
    ai: {
      label: 'AI visibility',
      value: '4 of 10',
      detail: 'tracked questions where you showed up (2 last month)',
    },
    builtLabel: 'Built so far',
    built: [
      { value: '5', label: 'blog posts published' },
      { value: '42', label: 'directory listings corrected' },
      { value: '31', label: 'new reviews since we started' },
    ],
    planLabel: "Next month's plan",
    plan: [
      'New blog post answering a local question',
      'Fresh photos on your Google profile',
      'Review requests for recent clients',
    ],
  },
};

/* ------------------------------------------------------------------ */
/* 6. Is it worth it? (ROI calculator)                                  */
/* ------------------------------------------------------------------ */

export const worthIt = {
  eyebrow: 'Is it worth it?',
  heading: 'Do the math on one new client.',
  calculator: {
    feeLabel: 'What a client pays per visit or per month',
    visitsLabel: 'Visits, or months they stay',
    defaultFee: 100,
    defaultVisits: 6,
    /** Which plan the calculator compares against (plan id from pricing.plans). */
    comparePlanId: '12-month',
    compareNote: 'Compared with the 12-month price of',
  },
  anchor: {
    // Checked Nov 2026 against ahrefs.com/blog/seo-pricing (updated Aug 2024): local SEO averages $1,557/month.
    text: 'Local SEO services average about US$1,557 a month. AI tools cost less, but leave the checking to you.',
    sourceLabel: 'Source: Ahrefs survey of 439 SEO providers',
    sourceUrl: 'https://ahrefs.com/blog/seo-pricing',
  },
  timeLine: 'Under 10 minutes a month from you.',
};

/* ------------------------------------------------------------------ */
/* 7. Why Get Found                                                     */
/* ------------------------------------------------------------------ */

export const why = {
  eyebrow: 'Why Get Found',
  heading: 'Built so you can check our work and leave anytime.',
  points: [
    {
      title: 'You own everything',
      body: 'Your Google profile, listings, domain and content stay yours. We only have manager access, and you can remove us anytime.',
    },
    {
      title: 'Check every change',
      body: 'A 3-line email and a one-page report every month. No ranking promises, just what we did and what changed.',
    },
    {
      title: 'Leave when you want',
      body: "Start month-to-month and stop anytime. Prepay 6 or 12 months when you're ready for the lower price.",
    },
  ],
  substack: {
    text: 'I write about marketing in health and fitness for business owners and marketers.',
    linkLabel: 'Read it on Substack',
  },
  /**
   * Founder block. DRAFT bio: confirm the wording and add a photo before launch.
   * photo: a file name in src/assets, e.g. 'founder.jpg' (served as AVIF/WebP at the right size). Left empty, no photo is shown.
   */
  founder: {
    name: 'Nathaniel',
    role: 'Founder, Get Found',
    photo: 'founder.jpg',
    photoAlt: 'Nathaniel, founder of Get Found',
    bio: [
      "For over 7 years I've marketed health and fitness from every side: clinics and gyms, supplement brands, and the companies that make clinic equipment.",
      "Get Found is the service I'd want if I ran a clinic, studio or gym: the work done for you, nothing you don't own, and a plain report every month so you can check it.",
      'I use AI to move faster, but every post and update is planned and checked by me before it goes live.',
    ],
    location: 'Based in BC. Working with businesses across Canada and the US.',
  },
};

/* ------------------------------------------------------------------ */
/* 8. Proof (hidden until real)                                         */
/* ------------------------------------------------------------------ */

/**
 * Keep enabled: false until you have real, approved testimonials.
 * Never add placeholder or invented quotes, names, logos or results.
 */
export const proof = {
  enabled: false,
  eyebrow: 'Results',
  heading: 'What clients say',
  items: [] as { quote: string; name: string; role?: string; business?: string }[],
};

/* ------------------------------------------------------------------ */
/* 9. Pricing                                                           */
/* ------------------------------------------------------------------ */

export type Currency = 'CAD' | 'USD';

export const pricing = {
  eyebrow: 'Pricing',
  heading: 'One service. Three ways to pay.',
  intro: 'Month-to-month, or prepay 6 or 12 months for a lower price. Everything is included in every option.',
  defaultCurrency: 'CAD' as Currency,
  setup: { CAD: 500, USD: 350 },
  plans: [
    {
      id: '12-month',
      name: '12-month plan',
      monthly: { CAD: 295, USD: 210 },
      /** Paid up front for the whole term. */
      prepaidMonths: 12,
      setupWaived: true,
      badge: 'Most popular',
    },
    {
      id: '6-month',
      name: '6-month plan',
      monthly: { CAD: 365, USD: 260 },
      prepaidMonths: 6,
      setupWaived: false,
      badge: '',
    },
    {
      id: 'monthly',
      name: 'Month-to-month',
      monthly: { CAD: 420, USD: 300 },
      prepaidMonths: 0,
      setupWaived: false,
      badge: '',
    },
  ],
  setupWaivedLabel: 'Setup waived',
  setupLine: 'Setup: $500 CAD / $350 USD, waived on the 12-month plan.',
  taxNote: 'Prices exclude applicable taxes.',
  prepaidLabel: 'paid up front',
  monthlyLabel: 'Billed monthly. Stop anytime.',
  /** Prepaid 6- and 12-month plans are paid in advance and are not refundable. */
  prepayNote: {
    heading: 'Not sure yet?',
    body: "Start month-to-month and stop anytime. Switch to a prepaid plan whenever you're ready for the lower price. Prepaid plans aren't refundable.",
  },
  includedLabel: 'Included in every option',
  includedLine: 'Everything under "More ways to be found" is included in every option.',
  included: [
    'Google Maps profile kept complete and active',
    'AI visibility tracked every month',
    'Automatic review requests',
    'Your details corrected across listings',
    'A new blog post every month',
    'A 3-line email and one-page report every month',
  ],
};

/** Website build add-on, shown as a short card under pricing. No separate price. */
export const websiteBuild = {
  eyebrow: 'Need a website?',
  heading: 'Website holding you back?',
  body: "We'll build you a new one. Your site then runs on Get Found, with hosting and updates included.",
  priceNote: 'Quoted on your call',
  ctaLabel: 'Ask about a new site',
};

/* ------------------------------------------------------------------ */
/* 10. FAQ (also output as FAQPage structured data)                     */
/* ------------------------------------------------------------------ */

export const faq = {
  eyebrow: 'FAQ',
  heading: 'Questions owners ask us',
  items: [
    {
      q: 'Who is Get Found for?',
      a: 'Health and fitness businesses across Canada and the US: physio, chiro and massage clinics, gyms, fitness studios, and recovery studios offering services like sauna and cold plunge.',
    },
    {
      q: 'Why not just use an AI tool?',
      a: "They're cheap, but on their own they post generic content, miss what makes your business different, and still need you to check their work. We use AI too, but every post and update is planned for your business, follows your profession's advertising rules, and is checked by a person before it goes live.",
    },
    {
      q: 'Why not hire an SEO agency?',
      a: "If you need a national content strategy, you might. Most local clinics, studios and gyms need their Google profile, reviews and listings done well every month. That doesn't take a $1,500-a-month retainer.",
    },
    {
      q: 'Do you guarantee rankings?',
      a: 'No. Nobody honest can. We show you exactly what changed.',
    },
    {
      q: 'How much of my time does this take?',
      a: 'About 20 minutes to start, then under 10 minutes a month.',
    },
    {
      q: 'Do I need a new website?',
      a: 'No. We work with your existing site, or host and update one we build for you (priced separately).',
    },
    {
      q: 'Do you work with businesses in the US?',
      a: 'Yes, across Canada and the US. Pricing is shown in both currencies.',
    },
    {
      q: 'Can I use the content elsewhere?',
      a: "Yes. It's yours. Each post answers a question people near you are actually asking, so it works well as social posts, emails or ad copy too.",
    },
    {
      q: 'Who owns my Google profile?',
      a: "You do. We're added as managers and you can remove us anytime.",
    },
    {
      q: "What about my clients' privacy?",
      a: 'We never see or store client or health information. We only work with your public business details.',
    },
    {
      q: 'Can I cancel?',
      a: "Month-to-month can stop anytime. Prepaid 6- and 12-month plans aren't refundable, so start month-to-month if you're unsure and switch when you're ready.",
    },
    {
      q: 'Which AI tools do you track?',
      a: 'ChatGPT, Google AI Overviews and Google AI Mode.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 11. Final CTA                                                        */
/* ------------------------------------------------------------------ */

export const finalCta = {
  heading: 'See where you stand.',
  body: 'Get a free one-page scorecard: where you show up for five local searches, how you compare with three nearby competitors, and whether ChatGPT mentions you.',
};

/**
 * Scorecard request form (lead magnet). Shown in the final section once
 * SCORECARD_FORM_ENDPOINT is set. Only promise a turnaround you can keep.
 */
export const scorecard = {
  body: "Tell us where you are and we'll email your free one-page scorecard within one business day. It shows where you appear for five local searches, how you compare with three nearby competitors, and whether ChatGPT mentions you.",
  orBook: 'Questions first?',
  notLive: 'Not live yet: set WEB3FORMS_ACCESS_KEY in src/content/site.ts',
  form: {
    businessLabel: 'Business name',
    cityLabel: 'City or neighbourhood',
    cityPlaceholder: 'Austin, TX',
    serviceLabel: 'What you do',
    servicePlaceholder: 'Pilates studio',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    phoneOptional: '(optional)',
    /** Subject line of the email Web3Forms sends you for each request. */
    notifySubject: 'New visibility check request',
    // Marketing consent wording. Optional, unticked by default. Stored with each submission.
    optIn:
      'Yes, also email me marketing tips and offers from Get Found (Altura Marketing LTD). I can unsubscribe at any time.',
    submit: 'Send me my scorecard',
    finePrint: 'We use these details to prepare and email your scorecard, and may call if you add a phone number. No health or client information needed.',
    privacyLabel: 'Privacy policy',
    success: "Thanks. Your scorecard is on its way: look for an email from us within one business day.",
    error: 'Sorry, that did not send. Please try again in a moment.',
  },
};

/* ------------------------------------------------------------------ */
/* 12. Footer                                                           */
/* ------------------------------------------------------------------ */

export const footer = {
  newsletterLabel: 'Newsletter',
  privacyLabel: 'Privacy',
  termsLabel: 'Terms',
  emailComingSoon: 'Contact email coming soon',
};

/* ------------------------------------------------------------------ */
/* Legal pages                                                          */
/* ------------------------------------------------------------------ */

export const legal = {
  draftNotice: 'Draft, review before publishing.',
  lastUpdated: 'November 2026',
};

import { BOOKING_URL, CONTACT_EMAIL, CTA_EMAIL_SUBJECT, SCORECARD_FORM_ENDPOINT } from '../content/site';

const UTM_SOURCE = 'getfoundwithaltura.com';
const UTM_MEDIUM = 'website';
const UTM_CAMPAIGN = 'get-found-site';

/** Adds UTM parameters to an outbound http(s) link. `content` says where on the page the link sits. */
export function withUtm(url: string, content: string): string {
  try {
    const u = new URL(url);
    if (!u.searchParams.has('utm_source')) u.searchParams.set('utm_source', UTM_SOURCE);
    if (!u.searchParams.has('utm_medium')) u.searchParams.set('utm_medium', UTM_MEDIUM);
    if (!u.searchParams.has('utm_campaign')) u.searchParams.set('utm_campaign', UTM_CAMPAIGN);
    u.searchParams.set('utm_content', content);
    return u.toString();
  } catch {
    return url;
  }
}

export type CtaMode = 'booking' | 'email' | 'disabled';

export const ctaMode: CtaMode = BOOKING_URL ? 'booking' : CONTACT_EMAIL ? 'email' : 'disabled';

/**
 * The visibility check (the emailed scorecard) is the main action. It is live once the form
 * endpoint is set; in dev the form always shows so it can be previewed.
 */
export const scorecardLive = Boolean(SCORECARD_FORM_ENDPOINT) || import.meta.env.DEV;

/** Main action: the scorecard form. Falls back to booking while the form has no backend. */
export function primaryHref(location: string): string | null {
  return scorecardLive ? '/#scorecard' : ctaHref(location);
}

/** Resolves the href for a booking (call) CTA, or null when neither value is set yet. */
export function ctaHref(location: string): string | null {
  if (ctaMode === 'booking') return withUtm(BOOKING_URL, location);
  if (ctaMode === 'email') {
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CTA_EMAIL_SUBJECT)}`;
  }
  return null;
}

// Printed once per dev start or build.
if (ctaMode === 'disabled') {
  console.warn(
    '\n\x1b[33m[get-found] WARNING: BOOKING_URL and CONTACT_EMAIL are both empty in src/content/site.ts.\n' +
      '            Every booking button is disabled. Do not launch like this.\x1b[0m\n',
  );
} else if (ctaMode === 'email') {
  console.warn(
    '\n\x1b[33m[get-found] NOTE: BOOKING_URL is empty. Booking buttons fall back to a mailto: link.\x1b[0m\n',
  );
}

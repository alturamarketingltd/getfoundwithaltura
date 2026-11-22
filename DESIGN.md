---
name: Get Found
description: Better visibility on Google Maps and in AI tools for health and fitness businesses.
colors:
  klein-blue: "#002fa7"
  front-desk-navy: "#001a63"
  blue-hairline: "#3355c2"
  linen: "#e9e1d3"
  linen-hairline: "#d6cbb6"
  chalk: "#f6f1e8"
  signal-yellow: "#f9e14c"
  mist: "#c9d3f5"
  slate: "#3d4565"
  hint: "#5a6280"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.6rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.3rem + 2.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  field: "12px"
  panel: "16px"
  card: "24px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "32px"
  card-padding: "28px"
  section-mobile: "72px"
  section: "112px"
  container: "72rem"
components:
  button-primary-on-blue:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.klein-blue}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-primary-on-linen:
    backgroundColor: "{colors.klein-blue}"
    textColor: "{colors.linen}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-secondary-on-linen:
    textColor: "{colors.klein-blue}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  card-on-blue:
    backgroundColor: "{colors.front-desk-navy}"
    textColor: "{colors.linen}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-padding}"
  card-on-linen:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.klein-blue}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-padding}"
  input:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.klein-blue}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
  chip-on-blue:
    textColor: "{colors.mist}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: Get Found

## Overview

**Creative North Star: "The Clinic Front Desk"**

Get Found should feel like walking up to the front desk of a well-run practice: calm, friendly, professional, and easy to book. Nothing is loud for the sake of it, every question has a plain answer, and the next step is always obvious. The visitor is a busy practitioner or studio owner who is deciding whether to trust someone with their visibility; the page earns that trust by being clear and warm, not clever.

Two grounds carry the page: deep Klein blue for the confident, "here's what we do" chapters, and warm linen for the reading and deciding chapters. Yellow is the single bright signal, the one thing on a blue surface you're meant to press or notice. Components lean warm and tactile: generous soft corners, chalk cards that lift gently off linen, and navy cards that sink slightly into blue.

**Key Characteristics:**
- Two grounds, Klein blue and linen, with a long blue chapter rather than strict alternation.
- One typeface (Hanken Grotesk) for everything, with hierarchy from weight and size.
- Yellow used sparingly, as a signal, never as decoration.
- Soft, rounded, touchable components with gentle depth.
- Plain-language copy; no labels above headings, no section numbers.

## Colors

A confident blue-and-linen pairing with one bright signal colour.

### Primary
- **Klein Blue** (#002fa7): the dark ground for hero, "What you get", the monthly report, "Why Get Found" and the FAQ; also headings and primary text on linen, and the main button on linen.

### Secondary
- **Signal Yellow** (#f9e14c): the main button on blue, the single highlighted phrase in the hero, the map's "Not showing" state, the logo dot, keyboard focus on blue and text selection.

### Neutral
- **Linen** (#e9e1d3): the light ground for reading and deciding sections; text on blue.
- **Chalk** (#f6f1e8): cards and form panels sitting on linen.
- **Front Desk Navy** (#001a63): cards and panels sitting on blue, and the mobile menu.
- **Mist** (#c9d3f5): secondary text, icons and outline chips on blue (7.2:1 on Klein Blue).
- **Slate** (#3d4565): secondary text on linen (7.2:1).
- **Hint** (#5a6280): form placeholders on linen (4.6:1).
- **Blue Hairline** (#3355c2) and **Linen Hairline** (#d6cbb6): decorative dividers and card outlines only, never text.

### Named Rules
**The One Signal Rule.** Yellow marks what to press or the single thing to notice. At most one yellow element per view besides the logo dot; never yellow icons, rules, badges or underlines.

**The Never-on-Linen Rule.** Yellow is never text on linen or chalk (about 1:1). On light grounds it may only sit behind Klein Blue text, and even that is rare.

## Typography

**Display Font:** Hanken Grotesk (with system sans fallback)
**Body Font:** Hanken Grotesk

**Character:** One friendly, highly legible grotesque does every job. Plain numerals (no slashed zeros) keep prices and stats approachable.

### Hierarchy
- **Display** (800, 2.25rem on phones to 3.6rem on desktop, 1.05, -0.03em): the hero headline only; aim for four lines or fewer on desktop.
- **Headline** (700, clamp 1.875rem to 3rem, 1.08, -0.02em): one per section.
- **Title** (700, 1.25rem to 1.5rem): card, step and plan names.
- **Body** (400, 1.125rem, 1.625): paragraphs, kept under about 70 characters a line.
- **Label** (600, 0.875rem): chips, form labels, small print.

### Named Rules
**The Heading Speaks Rule.** No small uppercase labels above headings and no 01/02/03 section numbers. If a word matters, it belongs in the heading or the body.

## Layout

A centred container (72rem) with 20px side gutters on phones and 32px from 640px up. Sections breathe: 72px of vertical padding on phones, 112px on desktop. Content sections use one column on phones, two or three from 768px. "What you get", "How it works" and the sample report form one continuous blue chapter, which deliberately breaks the blue/linen alternation. The steps read as a timeline: a vertical line on phones, horizontal from 768px. The founder photo spans the full height of the bio on tablet and desktop and sits above it on phones.

## Elevation & Depth

Gentle, ambient depth. Showcase pieces (the hero map and the sample report cards) float on a large soft shadow tinted black at 40%. Forms and the calculator sit on chalk with a faint shadow and a 1px linen hairline. Cards on blue use a darker navy fill instead of a shadow, so they sink rather than lift.

### Named Rules
**The Soft Lift Rule.** Depth is always soft and offset-free in feel: large blur, low opacity. Never hard offset shadows or coloured glows.

## Shapes

Generously rounded and touchable: 24px corners on cards and panels, 16px on inner panels and photos, 12px on form fields, and full pills for buttons and chips. Dividers are 1–2px hairlines in the surface's own hue.

## Components

### Buttons
- **Shape:** full pill (9999px), 16px × 24px padding at full size, 10px × 16px in the header.
- **Primary on blue:** Signal Yellow fill, Klein Blue text, with a small blue arrow chip.
- **Primary on linen:** Klein Blue fill, linen text.
- **Secondary:** 2px outline in the surface's text colour, no fill; used when another action leads the section.
- **Hover / Focus:** lifts 2px on hover; focus is a 3px ring offset 3px, yellow on blue and Klein Blue on linen.

### Chips
- **Style:** outline pill in Mist on blue ("Sample report", "Quoted on your call"); linen pill with blue text for the plan badge.

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** Front Desk Navy on blue; Chalk on linen.
- **Shadow Strategy:** see Elevation & Depth.
- **Border:** 1px hairline in the surface hue where cards need separation.
- **Internal Padding:** 28px, rising to 40px on larger panels.

### Inputs / Fields
- **Style:** linen fill, 2px Klein Blue border at 25% opacity, 12px corners, 16px text.
- **Focus:** 3px Klein Blue focus ring.
- **Placeholder:** Hint colour, never lighter.

### Navigation
- **Desktop:** text links in linen beside the header button.
- **Mobile:** a round menu button opening a navy panel with full-width links.

### Map Mock (signature)
A navy card with a search bar, a simplified blue street map and three ranked results; "Your business" sits last in a dashed yellow outline with a "Not showing" chip. It is the one place yellow appears more than once.

## Do's and Don'ts

### Do:
- **Do** keep each section to one main button.
- **Do** use Mist for secondary text on blue and Slate on linen.
- **Do** keep corners soft (24px cards, pill buttons) and depth gentle.
- **Do** keep Hanken Grotesk for everything.

### Don't:
- **Don't** use yellow for icons, rules, badges, numerals or highlighter underlines.
- **Don't** put a small uppercase label or number above a heading.
- **Don't** use slashed-zero or overly technical fonts.
- **Don't** use hard offset shadows or coloured glows.

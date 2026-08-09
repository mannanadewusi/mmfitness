---
name: MM Fitness
colors:
  surface: '#101417'
  surface-dim: '#101417'
  surface-bright: '#363a3d'
  surface-container-lowest: '#0b0f12'
  surface-container-low: '#181c1f'
  surface-container: '#1c2023'
  surface-container-high: '#262a2e'
  surface-container-highest: '#313539'
  on-surface: '#e0e3e7'
  on-surface-variant: '#b9ccb5'
  inverse-surface: '#e0e3e7'
  inverse-on-surface: '#2d3134'
  outline: '#849581'
  outline-variant: '#3b4b3a'
  surface-tint: '#00e55b'
  primary: '#edffe8'
  on-primary: '#003911'
  primary-container: '#00ff66'
  on-primary-container: '#007128'
  inverse-primary: '#006e27'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#f8faff'
  on-tertiary: '#27323a'
  tertiary-container: '#d4dfeb'
  on-tertiary-container: '#58636d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff83'
  primary-fixed-dim: '#00e55b'
  on-primary-fixed: '#002107'
  on-primary-fixed-variant: '#00531b'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d9e4ef'
  tertiary-fixed-dim: '#bdc8d3'
  on-tertiary-fixed: '#121d25'
  on-tertiary-fixed-variant: '#3d4851'
  background: '#101417'
  on-background: '#e0e3e7'
  surface-variant: '#313539'
typography:
  display-2xl:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 96px
---

## Brand & Style
MM Fitness is a modern, community-driven fitness brand built around helping everyday people achieve lasting results. The visual style combines **Modern Athletic Minimalism** with high approachability. The brand should feel energetic, welcoming, trustworthy, and highly professional—never intimidating, luxury-exclusive, or hyper-aggressive.

The design relies on bold typography, high contrast, clean layouts, immersive imagery, and subtle motion to encourage action without overwhelming users. Every decision reinforces that fitness is accessible to everyone in the local community regardless of age or experience level.

## Colors
The system operates on a deep dark foundation (`#0B0F12`) to maximize contrast and elevate the vibrant Electric Green accent (`#00FF66`).

- **Electric Green (#00FF66):** Represents energy, progress, health, and action. Used strictly on high-attention elements: primary buttons, active nav states, links, icons, form focus borders, and key stats. Never overused decoratively.
- **Dark Base Layers:** Surfaces move from deep dark base (`#0B0F12`) to elevated card layers (`#141A1F` & `#1F272E`) to create visual hierarchy.
- **Rhythm Sections:** Alternating long pages with lighter editorial sections (`#F4F6F8` background with `#0F1419` text) breaks scrolling monotony and creates pace.

## Photography
Photography plays a critical role in communicating trust and belonging ("I can see myself training here"). 

- **Focus:** Authentic fitness imagery showing real everyday people—beginners, men and women, personal coaching, group classes, strength training, cardio sessions, friendly interactions, clean facilities, and modern equipment.
- **Avoid:** Images that focus exclusively on elite, hyper-muscular bodybuilders.

## Typography
The system uses **Montserrat** for structural authority and **Inter** for conversational clarity.

- **Montserrat:** Hero headlines, section titles, pricing, and statistics. Kept concise, punchy, and bold.
- **Inter:** Paragraphs, form fields, navigation items, buttons, and supporting copy. Always conversational, warm, and benefit-focused.

## Layout & Spacing
Built on a strict 8-point spatial grid with a maximum container width of `1280px`.

- **Desktop (12 Columns):** Responsive grid with `32px` gutters and `48px` outer margins. Content is strictly left-aligned for fast scanning.
- **Tablet (8 Columns):** `24px` gutters.
- **Mobile (4 Columns):** `16px` outer margins.
- **Page Rhythm:** Long landing pages continuously alternate between dark and light surface sections.

## Elevation & Component Depth
Avoid heavy drop shadows. Create natural depth through subtle layering:

1. **Surface Tiers:** Layering dark surfaces (`#0B0F12` base -> `#141A1F` surface card -> `#1F272E` elevated card).
2. **Subtle Borders:** 1px borders with 10% white opacity (`rgba(255,255,255,0.1)`).
3. **Hover States:** Soft background transitions, subtle y-axis translation (`-4px`), and light scaling (up to `1.02x`).

## Components & Interactivity
- **Primary Buttons:** Electric Green (`#00FF66`) background with Black text, Pill shape (`rounded-full`), subtle elevation. Ripple effect on hover with `1.02x` scale.
- **Secondary Buttons:** Transparent fill, `1px` white border, white text. Transitions to Electric Green fill on hover.
- **Forms:** Modern and effortless with large touch targets (`≥48px`), clear labels, green focus rings, and inline validation.
- **Iconography:** Simple, rounded icons reinforcing text (Fitness, Health, Community, Coaching). Avoid decorative illustrations.
- **Motion Design:** Subtle guidance motion (`200ms`–`500ms` duration): Fade up, slide, counter ticks, button ripple, and image zoom. Fully respects `prefers-reduced-motion`.

## Page Architecture & Conversion
Every page follows a predictable structural flow:
`Navigation` → `Hero` → `Primary Content` → `Supporting Content` → `Conversion Section` → `Footer`

**Primary Conversion Goals:** Drive actions toward Online Membership Registration, Personal Training Enquiries, Class Bookings, instant WhatsApp Conversations, or Walk-in Visits. No page should contain dead ends.

## Local SEO & Content Tone
Copy must be authentic to local Nigerian customers (e.g., Lagos, Dopemu) and incorporate keywords naturally (*Gym in Dopemu, Fitness Centre in Lagos, Personal Trainer in Lagos, Weight Loss Coaching, Beginner Friendly Gym*). Avoid generic `Lorem Ipsum` filler across all project screens.
# AskSarah v2: audit, architecture, and plan

Branch: `askSarah-v2-phase1`. Nothing here is live until it merges to `main`.

## 1. What exists today (audit, Sep 23 2026)

| Area | What's there |
|---|---|
| Framework | None. Hand-written static HTML, one file per page, inline `<style>` in every page. |
| Styling | Dark violet/cyan "glow" theme (`#0c0a1a` background, gradient text, blurred orbs), Space Grotesk + Inter from Google Fonts. Copied by hand into every page. |
| CMS / content | None. Every page is edited as raw HTML. |
| Hosting | Vercel project `asksarah-ai`, auto-deploys from GitHub `sarahevansai/asksarah-ai` `main`. `cleanUrls: true`. No build step. |
| Serverless | `api/chat.js` (digital twin, OpenAI gpt-4o-mini), `api/tts.js` (ElevenLabs), `api/newsletter-feed.js`, `api/create-checkout.js` + `api/download.js` (Stripe). |
| Analytics | **None.** No GA, Plausible, or Vercel Web Analytics script on any page. |
| Email | Substack (`prsarahevans.substack.com`, PR@ctical). Link-outs and one iframe embed on `newsletter.html`. No API. |
| Commerce | Two systems: (1) **Stripe Checkout** for Claude Skills on `claude-skills.html`. Prices are hard-coded server-side in `api/create-checkout.js`, zips in `_skills/`, delivery via `api/download.js` after payment is verified. Works. (2) **Stan Store** link-outs for blueprints, the toolkit, and Perception Stack. |
| Navigation | Home, Newsletter, Live Shows, Tools, Claude Skills, then "More": About, Glossary, Press, Assessment, Perception Stack, Learn, Speaking, Connect. Hand-copied into each page, with small differences between pages. |
| SEO | Titles, descriptions, canonical, OG and JSON-LD on most pages. `sitemap.xml` (14 URLs, hand-kept), `robots.txt`, `llms.txt`. |

### Worth keeping
- The Stripe skills pipeline. It's clean, it validates price server-side, and it delivers files only after verified payment.
- 7–8 existing paid Skills that already fit the new positioning: Logic Police, Communicate Like a CEO, Delegation Brief, Meetings That Earn Their Hour, Coordinator to Owner, Learning Curve Destroyer, Build Your Own Skill, AI Slop Detector.
- The digital twin chat. It works. It moves from the homepage to `/ask` (see decisions).
- All existing articles, guides, shows, newsletter, press, speaking. None are deleted. They move to the footer and "Articles".

### Conflicts with the brief (need Sarah's call, nothing removed)
1. **Zen Media overlap in the current Skills store.** Press Release That Lands, Jaded Journalist, Crisis: First Hour, Company Boilerplate, Timely POV, AI Visibility Audit, Answer-Ready Content, Source Vetting, Editorial QA, Image Metadata, LinkedIn Thought Leader and the $125 suite are PR/agency products. They stay live on `/claude-skills` and are **not** shown on the new `/skills` library. Decide: keep selling them there, move them to Zen, or retire them.
2. **GEO 101 for Agencies** ($595, Oct 23) teaches agencies AI visibility, which is Zen territory under section 26. It's mid-launch, so the homepage keeps a small dismissible banner for it until Oct 23, then the banner turns itself off.
3. **Digital twin system prompt** (`api/chat.js`) pitches Zen services and pricing ("Strategy starts at $10K"). The old homepage FAQ schema says the same thing. Both move with the twin to `/ask`. Needs a rewrite if the twin stays on AskSarah.
4. **Visual direction.** The brief rules out neon AI gradients and purple cyberpunk, which is the current theme and what `DESIGN.md` for the brand-image skill specifies. **Decided Sep 23: keep Sarah's dark glow style, pink instead of violet/cyan.** Warm near-black backgrounds (`#0d0a0c`), pink `#f472b6` / `#db2777`, rose `#fb7185`, pink gradient buttons and headline words. The brand-image skill's `DESIGN.md` still says violet/cyan and should be updated to match.
5. **Email list.** The only list is PR@ctical on Substack, which is a PR newsletter. The new "get it the day it ships" and signup CTAs point there for now. Decide if AskSarah gets its own list (see recommendation below).
6. **Two free Skills are also in the CEO Pack** (Tell Me What I'm Missing, Meeting Before the Meeting), and the pack's "Delegate This" and "Meeting After the Meeting" overlap existing paid Delegation Brief and Meetings That Earn Their Hour. Decide: pack gets extended versions, or those come out of the pack.

## 2. Architecture

Stay static. No framework migration. Add a small content layer and a zero-dependency build script.

```
content/
  skills/<slug>.json      one file per Skill (free or paid)
  packs/<slug>.json       Skill Packs
  stack/<slug>.json       Sarah's Stack entries
  ai-uses/<slug>.json     "Things I didn't know AI could do" entries
  shortcuts/  systems/  edit/   same pattern, Phase 3
  articles.json           existing articles to surface in search/related
  _templates/             blank copies of every content type
scripts/build.mjs         reads content/, writes the pages, search-index.json, sitemap.xml
assets/site.css           one shared stylesheet for all new pages
assets/site.js            nav, search, analytics helper, checkout
```

- **Why this and not a CMS migration:** the site is 40+ hand-built pages on Vercel with working Stripe functions. A framework rewrite risks the thing that already took the store offline once. JSON files plus one build script keep every page as real static HTML (fast, indexable), and the existing pages keep working.
- **Generated pages are committed.** A GitHub Action (`.github/workflows/build-content.yml`) rebuilds them whenever `content/` changes on `main` and commits the result. Vercel's config is untouched.
- **Drafts:** any entry with `"published": false` is skipped. `DRAFTS=1 node scripts/build.mjs` renders drafts locally with a banner so you can preview.
- **Relationships:** every content type has `related_items: [{ "type": "skill", "slug": "..." }]`. The build resolves them, drops anything unpublished, and caps the list at 4.
- **Checkout safety:** the build reads prices from `api/create-checkout.js` and fails if a paid Skill's JSON price doesn't match, so the page can't advertise a price Stripe will reject.

### Editing without a developer
Recommended: **Pages CMS** (free, pagescms.org). It reads `.pages.yml` in the repo and gives you forms for each content type, then commits to GitHub, and Vercel rebuilds. No server, no database, nothing to pay for. Setup: sign in at app.pagescms.org with GitHub and pick the repo. The `.pages.yml` config isn't written yet (Phase 2). Until then, files can be edited right on github.com.

### Commerce recommendation (Phase 2)
Keep Stripe Checkout. Packs become more entries in the server price table plus a zip each. Move the price table from `api/create-checkout.js` into one shared `content/`-derived JSON so prices live in one place. Free downloads can be served as plain static files; if you want email-before-download, see below.

### Email recommendation (Phase 2)
Substack has no public subscribe API, so it can't gate a download. Options: (a) keep Substack, no gate, free Skills are just free (simplest, fits "free should feel free"); (b) a separate AskSarah list on Kit or Beehiiv with an API, used only for the Skill download flow. Recommendation: (a) now, (b) only if list growth becomes a goal.

### Analytics recommendation
Turn on **Vercel Web Analytics** in the project dashboard (no cookies, no personal data). New pages already load its script and send these events through one helper, `track()`: `skill_view`, `skill_download`, `email_signup_click`, `paid_view`, `checkout_start`, `stack_outbound`, `affiliate_click`, `search`, `related_click`. Custom events need Vercel Pro; page views work on any plan.

## 3. Phase 1 on this branch
- [x] Audit (above)
- [x] Content architecture, templates, build script, shared CSS/JS
- [x] Navigation: Skills, Sarah's Stack, Shortcuts, Systems, Sarah's Edit, About, Search
- [x] Homepage: Sarah's existing homepage (photo, digital twin chat, cards) kept by her choice, recolored pink, plus a card for the Things-AI-can-do list. The brief's long homepage copy was dropped as too text-heavy.
- [x] Skills landing, Skill detail template, 5 free Skills, 8 existing paid Skills carried over, 2 packs listed
- [x] "Things I didn't know AI could do" library + entry template + entry #1
- [x] Sarah's Stack landing + entry template (Claude drafted, not published)
- [x] Shortcuts / Systems / Sarah's Edit landing pages (honest "coming" state, no fake items)
- [x] Search page over everything published
- [x] Sitemap, canonical, OG, JSON-LD on generated pages
- [x] **Whole-site rebrand.** All 34 older pages get the new header/footer from `scripts/chrome.mjs` (the build keeps them in sync between `<!--sa:...-->` markers) and dark-pink colors via `scripts/rebrand-legacy-colors.mjs` + `assets/legacy.css`. Their content and scripts are unchanged. Hidden stand-in elements keep old scripts that look up the old nav from crashing.
- [x] Fixed two bugs that were already live: the Glossary showed zero terms (unclosed `<script>`), and Research's stats never loaded (unescaped apostrophe).
- [x] Full backup: `~/Desktop/63 💬 Ask Sarah AI/BACKUPS/asksarah-backup-2026-09-23/` (see RESTORE.md there)

### Copy I wrote that isn't from the brief (review before launch)
The brief gave names, promises and "what it does" for the five free Skills. I filled **when to use / what to give it / what you get** in short, plain lines built only from the brief's own descriptions. Every one of those lines is in `content/skills/*.json` for you to edit. **Example use cases are left empty** except Tell Me What I'm Missing, which uses your real example from the brief. I didn't make up stories in your voice.

## 4. Later phases
- **Phase 2:** pack detail pages + Stripe, free Skill files + download flow, email decision, move the price table, `/claude-skills` decision.
- **Phase 3:** Shortcuts, Systems, Edit entries; filters; rewrite the older pages' layouts natively in the new design (right now they're recolored, not redesigned).


## Design direction (Sep 23 feedback)
Sarah: too text-heavy, sounded AI-generated, wants a *sticky* site people want to be on. Rule going forward: every page leads with something to look at or do (a before/after chat, copyable prompts, text-message bubbles, a sample card), with her short lines around it. No multi-paragraph intros.

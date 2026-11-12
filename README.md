# US–Japan ECE Observer

Bilingual presentation prototype for early childhood education owners and managers.

The primary flow is Home → Country → School directory → School profile. School-level educational policy and practices are separate from country-level policy resources.

## Development

- npm install — install dependencies
- npm run dev — start the local preview
- npm run build — create dist
- npm run preview — serve the production build
- npm run lint — check code
- npm run check:routes — verify routes, links, bilingual order, search, filters and profiles
- npm run format — format source files
- npm run format:check — check formatting

Use npm.cmd on Windows if PowerShell blocks npm.ps1.

## Structure

- src/App.jsx — route definitions
- src/pages/HomePage.jsx — purpose, goals and country entry points
- src/pages/CountryPage.jsx — country introduction and directory
- src/pages/SchoolPage.jsx — individual school profile
- src/pages/CountrySectionPage.jsx — policy resources and other country topics
- src/components/country/ — country navigation and outlet layout
- src/components/directory/ — school cards, search and filters
- src/components/layout/ — header, footer and branding
- src/components/articles/ — existing Japan management samples
- src/components/common/ — shared elements
- src/data/ — countries, school records, articles, policy gateways, curriculum summaries and page copy
- src/context/ and src/hooks/ — language preference and country context
- src/styles/ — shared and explorer layouts
- scripts/check-routes.mjs — automated route and data checks

## Routes

- / — homepage; /home redirects here
- /japan and /united-states — matching country directories
- /:countrySlug/centres — directory alias
- /:countrySlug/centres/:schoolId — country-specific school profile
- /:countrySlug/sector — sourced country system and sector overview
- /:countrySlug/:sectionId — other required country topics
- /japan/operations/:articleId — existing management sample articles
- /monthly — monthly observation scope and publication status
- /about — editorial principles

The directory stores q, region and approach filters in URL search parameters. School links preserve the directory query when using the return link. Language order is saved in localStorage.

## Content and limitations

Six sample schools are stored in src/data/schools.js, three per country, with original source links and check dates. These are illustrative directory records, not a national census or ranking. Search includes English, Chinese, Japanese and declared Simplified/Traditional name variants. Fuji Kindergarten and Bing Nursery School have expanded, source-backed profiles with sample days and operating details. Bing tuition is labeled for 2026–27, and ambiguous staffing data are not converted into a ratio. Remaining unknown fields are marked as not researched in the profile. Country snapshots include a provisional 2026 Japan childcare-capacity release and 2022 US school-enrollment estimates, with their scopes and sources stated separately. Sector, provider-type, curriculum, operations, company and technology pages now contain bilingual research summaries for both countries. Company and vendor examples are limited case studies, not market rankings; company disclosures and vendor feature descriptions are identified by evidence basis. The US operations page provides source-linked compliance and management checklists, not state-specific legal advice. MonthlyUpdates contains one reviewed Japan data release; updates are curated manually. Three Japan practical articles include checkable steps and operating conditions. Two Japan practice frameworks are editorial guidance, not observed procedures. Maps, currency conversion and an editorial backend remain future work.

## Handover documents

- [Chinese README](README.zh-CN.md) — bilingual development, route, content and deployment instructions.
- [Content inventory](docs/content-inventory.md) — page coverage and known content gaps.
- [Data dictionary](docs/data-dictionary.md) — records, fields, statuses and language pairs.
- [Source register](docs/source-register.md) — cited public sources and scope notes.
- [Design resources](docs/design-resources.md) — editable source files for the visual system.
- [Issue log](docs/issue-log.md) — unresolved work and next actions.
- [School and country source tracker](docs/school-source-tracker-curriculum-updated.xlsx) — school records plus a Country sources worksheet with sector facts, direct links, evidence basis and update triggers.
- [Review log](docs/review-log.md) — dated changes and open review items.

## Hosting

Build and serve dist. Configure the host to serve index.html for application routes so deep links also work when opened or refreshed.

## Provider types

Provider Types groups actual directory records by facility category, university relationship and private provision. Groups may overlap. Each classification in src/data/schools.js records its type ID, verified status, original source URL, bilingual evidence and check date; src/data/providerTypes.js supplies definitions and the verified-only selector.

The same selector supplies directory badges, profile labels and type-page results. Missing or unsupported classifications display as pending and do not qualify a school for a group. Source verification does not imply a licensing audit, accreditation, for-profit status or a quality rating.

## GitHub Pages deployment

Vite uses /observer_website/ as its base, and BrowserRouter reads that base from import.meta.env.BASE_URL. The repository URL is https://concongeric-cmd.github.io/observer_website/. Local development is available at http://localhost:5173/observer_website/.

Run npm run build and deploy the entire dist directory. The postbuild script creates 404.html from the app shell and adds .nojekyll. Pages uses that fallback for direct links and refreshes; it preserves the route, although the initial document response has HTTP status 404.

If using GitHub Actions, upload dist after npm run build finishes. When renaming the repository or moving to a custom domain, update the Vite base accordingly.

### Required repository Pages setting

In GitHub Settings → Pages → Build and deployment, set Source to GitHub Actions. Do not deploy main / (root): that publishes the source index.html, which requests /src/main.jsx and cannot run without Vite.

Commit and push .github/workflows/deploy.yml and the deployment fixes. The workflow installs dependencies, builds the app, verifies the output and uploads only dist. Wait for Deploy website to GitHub Pages to finish before reloading the published URL. You do not need to commit dist.

Local deployment check: npm run build followed by npm run check:pages.

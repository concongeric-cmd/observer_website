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
- src/data/ — countries, school records, articles, policy gateways and page copy
- src/context/ and src/hooks/ — language preference and country context
- src/styles/ — shared and explorer layouts
- scripts/check-routes.mjs — automated route and data checks

## Routes

- / — homepage; /home redirects here
- /japan and /united-states — matching country directories
- /:countrySlug/centres — directory alias
- /:countrySlug/centres/:schoolId — country-specific school profile
- /:countrySlug/sector — country policy resource gateways
- /:countrySlug/:sectionId — other required country topics
- /japan/operations/:articleId — existing management sample articles
- /monthly — monthly observation scope and publication status
- /about — editorial principles

The directory stores q, region and approach filters in URL search parameters. School links preserve the directory query when using the return link. Language order is saved in localStorage.

## Content and limitations

Six sample schools are stored in src/data/schools.js, three per country, with original source links and check dates. These are illustrative directory records, not a national census or ranking. Profiles distinguish published school statements from uncollected data. Fees, staffing and internal strategies are not invented. National policy pages currently provide source gateways rather than a complete policy library. Monthly publishing, maps, comparisons, currency conversion and an editorial backend are future work.

## Hosting

Build and serve dist. Configure the host to serve index.html for application routes so deep links also work when opened or refreshed.

## Provider types

Provider Types groups actual directory records by facility category, university relationship and private provision. Groups may overlap. Each classification in src/data/schools.js records its type ID, verified status, original source URL, bilingual evidence and check date; src/data/providerTypes.js supplies definitions and the verified-only selector.

The same selector supplies directory badges, profile labels and type-page results. Missing or unsupported classifications display as pending and do not qualify a school for a group. Source verification does not imply a licensing audit, accreditation, for-profit status or a quality rating.

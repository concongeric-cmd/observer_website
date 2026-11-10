import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'

const output = new URL('../dist/', import.meta.url)
const html = await readFile(new URL('index.html', output), 'utf8')
assert.ok(
  !html.includes('/src/') && !html.includes('main.jsx'),
  'Deploy the built dist directory, not the source index.html',
)
const urls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(
  (match) => match[1],
)
assert.ok(
  urls.some((url) => /\/assets\/.*\.js$/.test(url)),
  'Missing production JavaScript bundle',
)
for (const url of urls) {
  if (/^https?:/.test(url)) continue
  assert.ok(
    url.startsWith('/observer_website/'),
    'Wrong GitHub Pages asset base: ' + url,
  )
  await access(new URL(url.slice('/observer_website/'.length), output))
}
assert.equal(
  await readFile(new URL('404.html', output), 'utf8'),
  html,
  'Missing or outdated route fallback',
)
await access(new URL('.nojekyll', output))
console.log(
  'GitHub Pages files verified: production bundle, repository asset paths and route fallback.',
)

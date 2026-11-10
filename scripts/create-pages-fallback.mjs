import { readFile, writeFile } from 'node:fs/promises'

// GitHub Pages serves this app shell when a client-side route is opened directly.
// Keep the requested URL so BrowserRouter can render its matching page.
const output = new URL('../dist/', import.meta.url)
const html = await readFile(new URL('index.html', output), 'utf8')
await writeFile(new URL('404.html', output), html)
await writeFile(new URL('.nojekyll', output), '')
console.log('Created GitHub Pages route fallback and .nojekyll marker.')

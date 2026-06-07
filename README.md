# ВКР Конференции — лендинг

> `vkr-conferencing-landing`

Лендинг с обзором магистерской ВКР **«Исследование подходов к разработке мобильных приложений для онлайн-конференций на основе технологий передачи мультимедийных сообщений»** (ITMO, 2026) and links to the three companion repositories.

## Stack

* **Next.js 14** (App Router) + TypeScript
* **TailwindCSS 3** for styling
* Static export — deploys cleanly to GitHub Pages / Vercel / Cloudflare Pages

## Sections

1. **Hero** — thesis title, author, supervisor, the one-sentence problem statement.
2. **Problem** — the contrast «huge demand → no reproducible comparison».
3. **Architecture** — the 4-layer component model rendered as a real diagram.
4. **Approaches** — A vs B vs C, with the Suspended-state DR numbers (0 % / 66 % / 97 %).
5. **Optimisations** — the four techniques and their cumulative effect on TTM (2780 → 1050 ms).
6. **Experiment** — the «3 / 4 / 4 / 5 / ~3000» numbers, devices, networks.
7. **Repositories** — three cards linking to the iOS, Android and Stats repos.

Every number on the page is sourced from Chapter 4 of the thesis and pinned in `src/lib/thesis-data.ts` — change a number there and it propagates to every section.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy

```bash
npm run build        # next.config.mjs has output: 'export'
npx serve out        # local preview of the static export
```

The `out/` directory is a self-contained static site, ready to publish to any CDN.

## Related repositories

* [`vkr-conferencing-ios`](https://github.com/fara0000/vkr-conferencing-ios) — iOS client
* [`vkr-conferencing-android`](https://github.com/fara0000/vkr-conferencing-android) — Android client
* [`vkr-conferencing-stats`](https://github.com/fara0000/vkr-conferencing-stats) — Python statistics + Node.js signaling server

## License

MIT. See [LICENSE](LICENSE).

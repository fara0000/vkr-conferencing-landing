import type { Dictionary } from '@/lib/i18n';
import { repositories } from '@/lib/thesis-data';

export function Repositories({ dict }: { dict: Dictionary }) {
    const t = dict.repositories;
    return (
        <section id="repositories" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">{t.title}</h2>
                <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">{t.body}</p>

                <div className="mt-10 grid lg:grid-cols-3 gap-6">
                    {repositories.map((r) => {
                        const key = r.slug.replace('vkr-conferencing-', '') as keyof typeof t.items;
                        const copy = t.items[key];
                        return (
                            <article
                                key={r.slug}
                                className="card group relative overflow-hidden flex flex-col"
                            >
                                <div
                                    className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${r.accent}`}
                                />
                                <h3 className="text-lg font-semibold text-zinc-50">{copy.title}</h3>
                                <code className="mt-1 text-xs text-zinc-400">{r.slug}</code>

                                <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{copy.summary}</p>

                                <ul className="mt-5 space-y-1.5 text-xs text-zinc-400">
                                    {copy.bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="text-accent-soft">▸</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={r.href}
                                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-surface-overlay ring-1 ring-white/10 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-accent hover:text-white transition"
                                >
                                    {t.openOnGithub}
                                </a>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

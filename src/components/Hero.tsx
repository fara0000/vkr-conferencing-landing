import type { Dictionary } from '@/lib/i18n';

export function Hero({ dict }: { dict: Dictionary }) {
    const t = dict.hero;
    return (
        <section className="relative overflow-hidden pt-20 pb-24">
            <div className="container-x">
                <div className="flex flex-wrap items-center gap-2 mb-8">
                    {t.chips.map((c) => (
                        <span key={c} className="chip">{c}</span>
                    ))}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-50">
                    {t.titleStart}{' '}
                    <span className="bg-gradient-to-r from-accent-soft via-accent to-signal-B bg-clip-text text-transparent">
                        {t.titleAccent}
                    </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg text-zinc-300 leading-relaxed">
                    {t.paragraph1.lead}
                    {t.paragraph1.connector}
                    <b>{t.paragraph1.strong1}</b>
                    {t.paragraph1.middle}
                    <b>{t.paragraph1.strong2}</b>
                    {t.paragraph1.end}
                    <b>{t.paragraph1.strong3}</b>
                    {t.paragraph1.tail}
                </p>

                <p className="mt-3 max-w-3xl text-zinc-400 leading-relaxed">{t.paragraph2}</p>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a
                        href="#approaches"
                        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow hover:bg-accent-deep transition"
                    >
                        {t.ctaPrimary}
                    </a>
                    <a
                        href="#repositories"
                        className="rounded-full bg-surface-raised ring-1 ring-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-surface-overlay transition"
                    >
                        {t.ctaSecondary}
                    </a>
                </div>

                <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                    {t.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl bg-surface-raised/60 p-4 ring-1 ring-white/5">
                            <dt className="text-2xl font-semibold text-zinc-50">{m.value}</dt>
                            <dd className="mt-1 text-xs uppercase tracking-wide text-zinc-400">{m.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

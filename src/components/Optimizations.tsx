import type { Dictionary } from '@/lib/i18n';
import { baselineTtmMs, optimizations } from '@/lib/thesis-data';

export function Optimizations({ dict }: { dict: Dictionary }) {
    const t = dict.optimizations;
    return (
        <section id="optimizations" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">{t.title}</h2>
                <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
                    {t.bodyStart}
                    <b>
                        {baselineTtmMs}
                        {t.bodyMs}
                    </b>
                    {t.bodyMiddle}
                    <b>
                        {optimizations[optimizations.length - 1].cumulativeTtmMs}
                        {t.bodyMs}
                    </b>
                    {t.bodyEnd}
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                    {optimizations.map((o, i) => {
                        const copy = t.items[i];
                        return (
                            <article key={o.name} className="card">
                                <header className="flex items-baseline gap-3">
                                    <span className="grid place-items-center rounded-full bg-accent/15 ring-1 ring-accent/40 w-8 h-8 text-sm font-semibold text-accent-soft">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-zinc-50">{copy.name}</h3>
                                </header>
                                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{copy.description}</p>

                                <div className="mt-5 flex items-baseline gap-3">
                                    <span className="font-mono text-2xl text-zinc-50">
                                        {o.cumulativeTtmMs}
                                        {t.bodyMs}
                                    </span>
                                    <span className="font-mono text-sm text-emerald-300">
                                        −{o.cumulativeDeltaPct.toFixed(1)} % {t.cumulativeSuffix}
                                    </span>
                                </div>

                                <ProgressBar value={1 - o.cumulativeTtmMs / baselineTtmMs} />
                            </article>
                        );
                    })}
                </div>

                <p className="mt-10 max-w-3xl text-zinc-400 text-sm leading-relaxed">{t.note}</p>
            </div>
        </section>
    );
}

function ProgressBar({ value }: { value: number }) {
    const pct = Math.max(0, Math.min(100, value * 100));
    return (
        <div className="mt-3 h-1.5 rounded-full bg-surface-overlay overflow-hidden">
            <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-accent-soft"
                style={{ width: `${pct}%` }}
            />
        </div>
    );
}

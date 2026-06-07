import type { Dictionary } from '@/lib/i18n';
import { approaches } from '@/lib/thesis-data';

export function Approaches({ dict }: { dict: Dictionary }) {
    const t = dict.approaches;
    return (
        <section id="approaches" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">{t.title}</h2>
                <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">{t.body}</p>

                <div className="mt-10 grid lg:grid-cols-3 gap-6">
                    {approaches.map((a) => {
                        const copy = t.data[a.id];
                        const recommended = a.id === 'C';
                        return (
                            <article
                                key={a.id}
                                className={`relative ${recommended ? 'card-glow' : 'card'} transition`}
                            >
                                <header className="flex items-baseline justify-between">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-zinc-400">
                                            Approach {a.id}
                                        </div>
                                        <h3 className="mt-1 text-lg font-semibold text-zinc-50">{a.code}</h3>
                                    </div>
                                    {recommended && (
                                        <span className="chip text-accent-soft ring-accent/40 bg-accent/10">
                                            {t.recommendedLabel}
                                        </span>
                                    )}
                                </header>

                                <p className="mt-3 text-sm text-zinc-300">{copy.oneLine}</p>

                                <div className="mt-6 space-y-3">
                                    <Metric
                                        label={t.metrics.drSuspended}
                                        value={`${Math.round(a.deliveryRatioSuspended * 100)} %`}
                                        bar={a.deliveryRatioSuspended * 100}
                                        color={a.color}
                                    />
                                    {a.ttiBackground !== null && (
                                        <Metric
                                            label={t.metrics.ttiBackground}
                                            value={`${a.ttiBackground} ms`}
                                            bar={Math.min(100, (a.ttiBackground / 2000) * 100)}
                                            color={a.color}
                                        />
                                    )}
                                    {a.ttiSuspended !== null && (
                                        <Metric
                                            label={t.metrics.ttiSuspended}
                                            value={`${a.ttiSuspended} ms`}
                                            bar={Math.min(100, (a.ttiSuspended / 2000) * 100)}
                                            color={a.color}
                                        />
                                    )}
                                </div>

                                <p className="mt-6 text-xs text-zinc-400 leading-relaxed">{copy.verdict}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Metric({
    label,
    value,
    bar,
    color,
}: {
    label: string;
    value: string;
    bar: number;
    color: string;
}) {
    return (
        <div>
            <div className="flex justify-between text-xs text-zinc-400">
                <span>{label}</span>
                <span className="font-mono text-zinc-300">{value}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-surface-overlay overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${bar}%`, background: color }} />
            </div>
        </div>
    );
}

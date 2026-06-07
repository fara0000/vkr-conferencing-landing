import { baselineTtmMs, optimizations } from '@/lib/thesis-data';

export function Optimizations() {
    return (
        <section id="optimizations" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">
                    Four optimisations of the critical path
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
                    Each optimisation removes a different phase from the establishment path, so their
                    effects compose. Numbers below are cumulative TTM medians on Wi-Fi baseline (Approach C):
                    starting at <b>{baselineTtmMs} ms</b>, the four together land at <b>1 050 ms</b> — a 2.6× speed-up.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                    {optimizations.map((o, i) => (
                        <article key={o.name} className="card">
                            <header className="flex items-baseline gap-3">
                                <span className="grid place-items-center rounded-full bg-accent/15 ring-1 ring-accent/40 w-8 h-8 text-sm font-semibold text-accent-soft">
                                    {i + 1}
                                </span>
                                <h3 className="text-lg font-semibold text-zinc-50">{o.name}</h3>
                            </header>
                            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{o.description}</p>

                            <div className="mt-5 flex items-baseline gap-3">
                                <span className="font-mono text-2xl text-zinc-50">{o.cumulativeTtmMs} ms</span>
                                <span className="font-mono text-sm text-emerald-300">
                                    −{o.cumulativeDeltaPct.toFixed(1)} % cumulative
                                </span>
                            </div>

                            <ProgressBar value={1 - o.cumulativeTtmMs / baselineTtmMs} />
                        </article>
                    ))}
                </div>

                <p className="mt-10 max-w-3xl text-zinc-400 text-sm leading-relaxed">
                    Why mutiplicative, not additive? Each technique eliminates a different independent phase
                    of the critical path (TCP/TLS, STUN, ICE gathering, DTLS) — there is no phase that two
                    techniques fight over.
                </p>
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

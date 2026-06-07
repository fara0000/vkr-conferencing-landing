import { devices, experimentMeta, networkProfiles } from '@/lib/thesis-data';

export function Experiment() {
    return (
        <section id="experiment" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">The experiment, in numbers</h2>
                <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
                    A full-factorial run: <b>{experimentMeta.approaches} approaches</b> × four lifecycle
                    states × <b>{experimentMeta.networks} network profiles</b> × <b>{experimentMeta.devices}</b>
                    {' '}devices, <b>{experimentMeta.repetitionsPerCell} samples per cell</b>. Total:
                    ~<b>{experimentMeta.callsTotal} calls</b>. Every duration is timed with a monotonic clock
                    (CACurrentMediaTime on iOS, SystemClock.elapsedRealtimeNanos on Android) and forwarded to
                    a Node.js sink for off-device aggregation.
                </p>

                <div className="mt-10 grid lg:grid-cols-2 gap-8">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">Devices</h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                            {devices.map((d) => (
                                <li key={d.model} className="flex justify-between border-b border-white/5 pb-2">
                                    <span>{d.model}</span>
                                    <span className="text-zinc-400 font-mono text-xs">{d.os}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-xs text-zinc-500">
                            Two iOS + two Android, one "clean" and one vendor build of each — to expose
                            artefacts of vendor power-saving (Samsung) and old-API behaviour (SE 2020).
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">Network profiles</h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                            {networkProfiles.map((n) => (
                                <li key={n.id} className="border-b border-white/5 pb-2">
                                    <div className="font-medium">{n.label}</div>
                                    <div className="text-xs text-zinc-500 font-mono">{n.detail}</div>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-xs text-zinc-500">
                            Profiles are reproducible at the network layer via tc-netem and Network Link
                            Conditioner — not at the operator. Same conditions, every approach, every run.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid sm:grid-cols-3 gap-6">
                    <StatCard
                        title="Statistical method"
                        body="Median + p95 (heavy-tailed latencies), 10 000-iteration percentile bootstrap, Mann–Whitney U, Kruskal–Wallis H, paired Wilcoxon."
                    />
                    <StatCard
                        title="Significance"
                        body={`α = ${experimentMeta.significanceLevel}; the thesis reports p < ${experimentMeta.publishedPThreshold} across Background/Suspended.`}
                    />
                    <StatCard
                        title="Reproducibility"
                        body="Same binary across approaches, same monotonic clock, same network profiles. The dataset behind every Chapter-4 table is pinned in vkr-conferencing-stats/data."
                    />
                </div>
            </div>
        </section>
    );
}

function StatCard({ title, body }: { title: string; body: string }) {
    return (
        <div className="card">
            <h4 className="text-sm font-semibold text-zinc-50">{title}</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{body}</p>
        </div>
    );
}

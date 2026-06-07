import { thesisMeta } from '@/lib/thesis-data';

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-24">
            <div className="container-x">
                <div className="flex flex-wrap items-center gap-2 mb-8">
                    <span className="chip">ITMO · {thesisMeta.year}</span>
                    <span className="chip">Master's thesis</span>
                    <span className="chip">Mobile · WebRTC · CallKit · ConnectionService</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-50">
                    Incoming calls on mobile,{' '}
                    <span className="bg-gradient-to-r from-accent-soft via-accent to-signal-B bg-clip-text text-transparent">
                        measured honestly.
                    </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg text-zinc-300 leading-relaxed">
                    Three architectural approaches to delivering an incoming call on iOS and Android,
                    compared side-by-side in identical conditions across <b>~3 000 calls</b>, 4 devices and
                    5 network profiles. Plus four optimisations of the establishment path that, applied together,
                    cut TTM <b>2.6×</b> by the median and <b>2.5×</b> at p95.
                </p>

                <p className="mt-3 max-w-3xl text-zinc-400 leading-relaxed">
                    Reference implementations (iOS + Android + Python stats) are public and reproducible.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a
                        href="#approaches"
                        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow hover:bg-accent-deep transition"
                    >
                        See the three approaches
                    </a>
                    <a
                        href="#repositories"
                        className="rounded-full bg-surface-raised ring-1 ring-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-surface-overlay transition"
                    >
                        Browse the repositories →
                    </a>
                </div>

                <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                    <KeyMetric value="0 → 97 %" label="DR in Suspended, A → C" />
                    <KeyMetric value="100 pp" label="absolute DR gap (A vs C)" />
                    <KeyMetric value="2 780 → 1 050 ms" label="median TTM after optimisations" />
                    <KeyMetric value="p < 0.001" label="every cross-approach difference" />
                </dl>
            </div>
        </section>
    );
}

function KeyMetric({ value, label }: { value: string; label: string }) {
    return (
        <div className="rounded-xl bg-surface-raised/60 p-4 ring-1 ring-white/5">
            <dt className="text-2xl font-semibold text-zinc-50">{value}</dt>
            <dd className="mt-1 text-xs uppercase tracking-wide text-zinc-400">{label}</dd>
        </div>
    );
}

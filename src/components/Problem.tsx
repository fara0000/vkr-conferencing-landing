export function Problem() {
    return (
        <section id="problem" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">The problem the thesis closes</h2>
                <div className="mt-8 grid lg:grid-cols-2 gap-8">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">Demand is huge</h3>
                        <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                            The mobile video-conferencing market is expected to clear <b>$70 B by 2030</b>, and
                            ≈ <b>85 % of organisations</b> already run more than one platform side by side. The
                            primary device of access is the smartphone — the platform with the strictest lifecycle
                            constraints.
                        </p>
                    </div>
                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">…and there is no honest comparison.</h3>
                        <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                            Industry vendors do not publish internal metrics. Apple and Google publish APIs but no
                            numbers. The research literature covers congestion control, performance, QoE — but not
                            the architecture of <i>incoming-call delivery</i> across mobile lifecycle states.
                        </p>
                    </div>
                </div>
                <p className="mt-10 max-w-3xl text-zinc-400 leading-relaxed">
                    What the thesis does is small but specific:{' '}
                    <span className="text-zinc-200">
                        a reproducible, single-binary comparison of three architectural approaches under identical
                        conditions, with the four metrics that actually matter (TTI, TTM, DR, RT) measured on real
                        devices over real APNs/FCM.
                    </span>
                </p>
            </div>
        </section>
    );
}

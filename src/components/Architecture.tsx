import { architectureLayers } from '@/lib/thesis-data';

export function Architecture() {
    return (
        <section id="architecture" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">
                    The four-layer component model
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
                    Each layer talks only to its neighbour — that's what keeps platform specificity
                    (PushKit, CallKit, ConnectionService, Telecom) out of the business logic. The
                    same Strategy slot in Layer 3 lets us flip between approaches A, B and C without
                    touching anything else.
                </p>

                <div className="mt-10 space-y-3">
                    {architectureLayers.map((layer) => (
                        <LayerRow key={layer.index} layer={layer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function LayerRow({
    layer,
}: {
    layer: { index: number; name: string; pattern: string; components: string[] };
}) {
    return (
        <div className="card group hover:ring-accent/20 hover:bg-surface-raised transition">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-3 lg:w-72 shrink-0">
                    <span className="grid place-items-center rounded-lg bg-accent/20 ring-1 ring-accent/40 w-9 h-9 text-sm font-semibold text-accent-soft">
                        L{layer.index}
                    </span>
                    <div>
                        <div className="font-medium text-zinc-50">{layer.name}</div>
                        <div className="text-xs text-zinc-400">{layer.pattern}</div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {layer.components.map((c) => (
                        <span
                            key={c}
                            className="rounded-md bg-surface-overlay px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10"
                        >
                            {c}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

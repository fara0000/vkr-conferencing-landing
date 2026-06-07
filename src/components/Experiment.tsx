import type { Dictionary } from '@/lib/i18n';
import { devices, experimentMeta, networkProfiles } from '@/lib/thesis-data';

export function Experiment({ dict }: { dict: Dictionary }) {
    const t = dict.experiment;
    return (
        <section id="experiment" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">{t.title}</h2>
                <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
                    {t.bodyStart}
                    <b>
                        {experimentMeta.approaches}
                        {t.bodyApproaches}
                    </b>
                    {t.bodyMiddle1}
                    <b>
                        {experimentMeta.networks}
                        {t.bodyNetworks}
                    </b>
                    {t.bodyMiddle2}
                    <b>{experimentMeta.devices}</b>
                    {t.bodyMiddle3}
                    <b>
                        {experimentMeta.repetitionsPerCell}
                        {t.bodyRepeats}
                    </b>
                    {t.bodyMiddle4}
                    <b>{experimentMeta.callsTotal}</b>
                    {t.bodyEnd}
                </p>

                <div className="mt-10 grid lg:grid-cols-2 gap-8">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">{t.devicesTitle}</h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                            {devices.map((d) => (
                                <li key={d.model} className="flex justify-between border-b border-white/5 pb-2">
                                    <span>{d.model}</span>
                                    <span className="text-zinc-400 font-mono text-xs">{d.os}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-xs text-zinc-500">{t.devicesNote}</p>
                    </div>

                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">{t.networksTitle}</h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                            {networkProfiles.map((n) => {
                                const id = n.id as keyof typeof t.networkLabels;
                                return (
                                    <li key={n.id} className="border-b border-white/5 pb-2">
                                        <div className="font-medium">{t.networkLabels[id]}</div>
                                        <div className="text-xs text-zinc-500 font-mono">{t.networkDetails[id]}</div>
                                    </li>
                                );
                            })}
                        </ul>
                        <p className="mt-4 text-xs text-zinc-500">{t.networksNote}</p>
                    </div>
                </div>

                <div className="mt-10 grid sm:grid-cols-3 gap-6">
                    {t.stats.map((s) => (
                        <div key={s.title} className="card">
                            <h4 className="text-sm font-semibold text-zinc-50">{s.title}</h4>
                            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

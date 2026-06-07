import type { Dictionary } from '@/lib/i18n';

export function Problem({ dict }: { dict: Dictionary }) {
    const t = dict.problem;
    return (
        <section id="problem" className="py-20 border-t border-white/5">
            <div className="container-x">
                <h2 className="text-3xl font-semibold tracking-tight">{t.title}</h2>
                <div className="mt-8 grid lg:grid-cols-2 gap-8">
                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">{t.demand.title}</h3>
                        <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{t.demand.body}</p>
                    </div>
                    <div className="card">
                        <h3 className="text-lg font-semibold text-zinc-50">{t.comparison.title}</h3>
                        <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{t.comparison.body}</p>
                    </div>
                </div>
                <p className="mt-10 max-w-3xl text-zinc-400 leading-relaxed">
                    {t.footer.start}
                    <span className="text-zinc-200">{t.footer.strong}</span>
                </p>
            </div>
        </section>
    );
}

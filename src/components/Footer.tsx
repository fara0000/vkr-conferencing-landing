import { thesisMeta } from '@/lib/thesis-data';

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-12">
            <div className="container-x flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 text-sm text-zinc-400">
                <div>
                    <div className="font-medium text-zinc-200">{thesisMeta.author}</div>
                    <div className="text-xs text-zinc-500">
                        Supervisor: {thesisMeta.supervisor}, {thesisMeta.university}, {thesisMeta.year}
                    </div>
                </div>
                <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                    All four repositories are MIT-licensed. Numbers on this page are sourced from Chapter 4
                    of the thesis and pinned in <code className="text-zinc-300">vkr-conferencing-stats/data</code>.
                </p>
            </div>
        </footer>
    );
}

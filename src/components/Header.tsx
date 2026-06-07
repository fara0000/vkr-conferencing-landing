export function Header() {
    return (
        <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur border-b border-white/5">
            <div className="container-x flex h-16 items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-zinc-50 font-semibold">
                    <span className="grid place-items-center w-7 h-7 rounded-md bg-accent/20 ring-1 ring-accent/40 text-accent-soft text-sm font-bold">
                        V
                    </span>
                    <span className="hidden sm:inline">VKR Conferencing</span>
                </a>
                <nav className="flex items-center gap-2 sm:gap-6 text-sm text-zinc-300">
                    <a className="hover:text-zinc-50" href="#problem">Problem</a>
                    <a className="hover:text-zinc-50" href="#architecture">Architecture</a>
                    <a className="hover:text-zinc-50" href="#approaches">Approaches</a>
                    <a className="hover:text-zinc-50" href="#experiment">Experiment</a>
                    <a
                        href="#repositories"
                        className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-white hover:bg-accent-deep transition"
                    >
                        Repos
                    </a>
                </nav>
            </div>
        </header>
    );
}

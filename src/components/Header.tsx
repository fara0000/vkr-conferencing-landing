import type { Dictionary, Locale } from '@/lib/i18n';
import { LocaleSwitcher } from './LocaleSwitcher';

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
    const t = dict.header;
    // basePath-aware "home" link: at /en/ we keep the user on /en/, at / on /.
    const home = locale === 'en' ? './' : './';
    return (
        <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur border-b border-white/5">
            <div className="container-x flex h-16 items-center justify-between gap-3">
                <a href={home} className="flex items-center gap-2 text-zinc-50 font-semibold">
                    <span className="grid place-items-center w-7 h-7 rounded-md bg-accent/20 ring-1 ring-accent/40 text-accent-soft text-sm font-bold">
                        V
                    </span>
                    <span className="hidden sm:inline">VKR Conferencing</span>
                </a>
                <nav className="flex items-center gap-2 sm:gap-5 text-sm text-zinc-300">
                    <a className="hidden sm:inline hover:text-zinc-50" href="#problem">{t.nav.problem}</a>
                    <a className="hidden sm:inline hover:text-zinc-50" href="#architecture">{t.nav.architecture}</a>
                    <a className="hidden sm:inline hover:text-zinc-50" href="#approaches">{t.nav.approaches}</a>
                    <a className="hidden sm:inline hover:text-zinc-50" href="#experiment">{t.nav.experiment}</a>
                    <a
                        href="#repositories"
                        className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-white hover:bg-accent-deep transition"
                    >
                        {t.reposButton}
                    </a>
                    <LocaleSwitcher locale={locale} dict={dict} />
                </nav>
            </div>
        </header>
    );
}

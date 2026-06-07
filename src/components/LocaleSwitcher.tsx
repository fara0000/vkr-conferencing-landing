import type { Dictionary, Locale } from '@/lib/i18n';

/**
 * Tiny two-state switcher. Since we only have two locales, a single link is
 * enough: on /ru/ it points to /en/ and vice-versa. No client-side state.
 *
 * `basePath: '/vkr-conferencing-landing'` from next.config.mjs is prepended
 * by Next automatically when the link starts with `/`, so we don't have to
 * repeat it here.
 */
export function LocaleSwitcher({ locale, dict }: { locale: Locale; dict: Dictionary }) {
    const target = locale === 'ru' ? '/en/' : '/';
    return (
        <a
            href={target}
            className="rounded-full bg-surface-raised ring-1 ring-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-surface-overlay hover:text-zinc-50 transition"
            aria-label={`Switch language to ${dict.header.switchTo}`}
        >
            {dict.header.switchTo}
        </a>
    );
}

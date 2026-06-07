/**
 * Locale-independent thesis data — every value here is a *number*, an *id*
 * or a *URL*. Translatable strings live in `i18n.ts`; components combine the
 * two by id/index.
 */

export const thesisMeta = {
    titleRu:
        'Исследование подходов к разработке мобильных приложений для онлайн-конференций на основе технологий передачи мультимедийных сообщений',
    titleEn:
        "Approaches to building mobile applications for online conferences over multimedia transmission technologies",
    author: 'Fakhri Imanzade',
    supervisor: 'Государев Илья Борисович',
    year: 2026,
};

export const approaches = [
    {
        id: 'A',
        code: 'WebSocket-Only',
        deliveryRatioSuspended: 0,
        ttiBackground: null as number | null,
        ttiSuspended: null as number | null,
        color: '#94a3b8',
    },
    {
        id: 'B',
        code: 'Push + Custom UI',
        deliveryRatioSuspended: 0.66,
        ttiBackground: 1250,
        ttiSuspended: 1680,
        color: '#0ea5e9',
    },
    {
        id: 'C',
        code: 'VoIP Push + CallKit',
        deliveryRatioSuspended: 0.97,
        ttiBackground: 720,
        ttiSuspended: 890,
        color: '#7c7cff',
    },
] as const;

export const optimizations = [
    { name: 'Pre-warming WebSocket', cumulativeTtmMs: 2150, cumulativeDeltaPct: 22.7 },
    { name: 'STUN pre-fetch', cumulativeTtmMs: 1620, cumulativeDeltaPct: 41.7 },
    { name: 'Trickle ICE', cumulativeTtmMs: 1380, cumulativeDeltaPct: 50.4 },
    { name: 'Pre-established DTLS', cumulativeTtmMs: 1050, cumulativeDeltaPct: 62.2 },
];

export const baselineTtmMs = 2780;

export const experimentMeta = {
    approaches: 3,
    metrics: 4,
    devices: 4,
    networks: 5,
    callsTotal: 3000,
    repetitionsPerCell: 50,
    repetitionsRecovery: 30,
    significanceLevel: 0.05,
    publishedPThreshold: 0.001,
    deliveryRatioGapPercentagePoints: 100,
    ttmMedianBefore: baselineTtmMs,
    ttmMedianAfter: 1050,
    ttmMedianSpeedup: 2.6,
    ttmP95Speedup: 2.5,
};

export const devices = [
    { model: 'iPhone 13', os: 'iOS 17.2' },
    { model: 'iPhone SE 2020', os: 'iOS 16.5' },
    { model: 'Pixel 7', os: 'Android 14' },
    { model: 'Galaxy A54', os: 'Android 13' },
];

export const networkProfiles = [
    { id: 'wifi' },
    { id: 'lte' },
    { id: 'lte5' },
    { id: 'handover' },
    { id: 'blackout' },
];

export const repositories = [
    {
        slug: 'vkr-conferencing-ios',
        href: 'https://github.com/fara0000/vkr-conferencing-ios',
        accent: 'from-[#7c7cff] to-[#0ea5e9]',
    },
    {
        slug: 'vkr-conferencing-android',
        href: 'https://github.com/fara0000/vkr-conferencing-android',
        accent: 'from-[#34d399] to-[#7c7cff]',
    },
    {
        slug: 'vkr-conferencing-stats',
        href: 'https://github.com/fara0000/vkr-conferencing-stats',
        accent: 'from-[#fbbf24] to-[#fb7185]',
    },
];

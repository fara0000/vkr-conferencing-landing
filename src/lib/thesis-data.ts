/**
 * Single source of truth for the numbers rendered on the page.
 *
 * Every figure here is sourced from Chapter 4 of the thesis. Update one
 * number here and it propagates to every section that references it — no
 * other component is allowed to hard-code Chapter-4 results.
 */

export const thesisMeta = {
    titleRu:
        'Исследование подходов к разработке мобильных приложений для онлайн-конференций на основе технологий передачи мультимедийных сообщений',
    titleEn:
        "Approaches to building mobile applications for online conferences over multimedia transmission technologies",
    author: 'Fakhri Imanzade',
    supervisor: 'Igor Gosudarev',
    university: 'ITMO University',
    year: 2026,
};

export const approaches = [
    {
        id: 'A',
        code: 'WebSocket-Only',
        label: 'A · WebSocket only',
        oneLine: 'No push. UI never wakes from Suspended.',
        deliveryRatioSuspended: 0,
        ttiBackground: null as number | null,
        ttiSuspended: null as number | null,
        verdict: 'Control condition. Not viable for any real product.',
        color: '#94a3b8',
    },
    {
        id: 'B',
        code: 'Push + Custom UI',
        label: 'B · Push + custom UI',
        oneLine: 'Regular APNs/FCM pushes + an in-app banner.',
        deliveryRatioSuspended: 0.66,
        ttiBackground: 1250,
        ttiSuspended: 1680,
        verdict:
            'Best-effort: works most of the time but loses one in three Suspended-state calls. UX inferior to system call UI on the lock screen.',
        color: '#0ea5e9',
    },
    {
        id: 'C',
        code: 'VoIP Push + CallKit',
        label: 'C · VoIP push + CallKit / ConnectionService',
        oneLine: 'System-managed wake-up and native call UI.',
        deliveryRatioSuspended: 0.97,
        ttiBackground: 720,
        ttiSuspended: 890,
        verdict:
            'Recommended. The only architecture that meets the thesis reliability target across every lifecycle state.',
        color: '#7c7cff',
    },
] as const;

export const optimizations = [
    {
        name: 'Pre-warming WebSocket',
        description:
            'Open the signaling channel when the app moves to foreground so the TCP+TLS handshake is already done by the time a call arrives.',
        cumulativeTtmMs: 2150,
        cumulativeDeltaPct: 22.7,
    },
    {
        name: 'STUN pre-fetch',
        description:
            'Resolve the reflexive public address at app launch — keeps the STUN exchange off the critical path.',
        cumulativeTtmMs: 1620,
        cumulativeDeltaPct: 41.7,
    },
    {
        name: 'Trickle ICE',
        description:
            'Forward ICE candidates as they appear instead of waiting for gathering to complete — overlaps the ICE phase with SDP exchange.',
        cumulativeTtmMs: 1380,
        cumulativeDeltaPct: 50.4,
    },
    {
        name: 'Pre-established DTLS',
        description:
            'Negotiate the DTLS session ahead of time so the per-call handshake is shorter. Requires server cooperation.',
        cumulativeTtmMs: 1050,
        cumulativeDeltaPct: 62.2,
    },
];

export const baselineTtmMs = 2780;

export const architectureLayers = [
    {
        index: 1,
        name: 'UI Layer',
        pattern: 'SwiftUI + Jetpack Compose, MVVM',
        components: ['Incoming Call Screen', 'Conference Screen', 'Settings', 'Auth/Onboarding'],
    },
    {
        index: 2,
        name: 'Platform APIs',
        pattern: 'iOS- and Android-specific bindings',
        components: ['PushKit / FCM Receiver', 'CallKit / ConnectionService', 'Audio Session', 'Network Observer'],
    },
    {
        index: 3,
        name: 'Business Logic',
        pattern: 'Coordinator + reactive store + Strategy',
        components: ['Call Manager', 'Signaling Client', 'State Store', 'Telemetry'],
    },
    {
        index: 4,
        name: 'Media Stack (WebRTC)',
        pattern: 'Google WebRTC — fully isolated',
        components: ['RTCPeerConnection', 'ICE/STUN/TURN Agent', 'Opus (audio)', 'H.264 (video)'],
    },
];

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
    { id: 'wifi', label: 'Wi-Fi baseline', detail: '0 ms latency add, 0 % loss' },
    { id: 'lte', label: 'LTE variable', detail: '12 Mbit/s ± 4, 60 ms ± 20, 0.5 % loss' },
    { id: 'lte5', label: 'LTE +5 % loss', detail: '5 % loss, same bandwidth/latency profile' },
    { id: 'handover', label: 'Wi-Fi → LTE handover', detail: '10 s stall + IP swap' },
    { id: 'blackout', label: '5 s / 30 s blackouts', detail: 'Full link drop for the duration' },
];

export const repositories = [
    {
        slug: 'vkr-conferencing-ios',
        title: 'iOS client',
        summary:
            'SwiftUI test bench implementing the three approaches as runtime-switchable strategies. PushKit + CallKit + Network.framework, with the four optimisations gated behind individual toggles.',
        bullets: [
            'Strategy slot — IncomingCallHandler',
            'PushKit / CallKit native integration',
            'TelemetryCollector with CACurrentMediaTime',
        ],
        href: 'https://github.com/fara0000/vkr-conferencing-ios',
        accent: 'from-[#7c7cff] to-[#0ea5e9]',
    },
    {
        slug: 'vkr-conferencing-android',
        title: 'Android client',
        summary:
            'Jetpack Compose counterpart. FCM High-Priority + Telecom self-managed ConnectionService. Identical architecture and TelemetryCollector contract.',
        bullets: [
            'FCM High-Priority + ConnectionService',
            'Telecom self-managed phone account',
            'SystemClock.elapsedRealtimeNanos timing',
        ],
        href: 'https://github.com/fara0000/vkr-conferencing-android',
        accent: 'from-[#34d399] to-[#7c7cff]',
    },
    {
        slug: 'vkr-conferencing-stats',
        title: 'Statistics & test bench',
        summary:
            'Python (NumPy, SciPy, pandas, matplotlib) pipeline that reproduces every Chapter-4 table, plus the Node.js signaling server and tc-netem profiles that drive the experiment.',
        bullets: [
            'Median, p95, bootstrap CI (10 000 it.)',
            'Mann–Whitney, Kruskal–Wallis, Wilcoxon',
            'Node 20 signaling + telemetry server',
        ],
        href: 'https://github.com/fara0000/vkr-conferencing-stats',
        accent: 'from-[#fbbf24] to-[#fb7185]',
    },
];

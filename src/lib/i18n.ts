/**
 * Lightweight, file-based i18n.
 *
 * Russian is the default (`/`) — the thesis is defended in Russian.
 * English is available at `/en/`. The pages pass the dict down as a prop;
 * components never call `useLocale()` so the whole site works with Next.js
 * static export (no client-side routing magic needed).
 */

export type Locale = 'ru' | 'en';

export const locales: Locale[] = ['ru', 'en'];

export const dictionaries = {
    ru: {
        meta: {
            title: 'ВКР Конференции — архитектура входящих вызовов на мобильных',
            description:
                'Магистерская ВКР (ИТМО, 2026): экспериментальное сравнение трёх архитектурных подходов к входящим вызовам на мобильных и четырёх техник оптимизации. Репозитории для iOS, Android и Python-статистики.',
            ogDescription:
                'Воспроизводимые измерения (n≈3000) и эталонные iOS/Android-клиенты доставки входящих вызовов на мобильном WebRTC.',
        },
        header: {
            nav: {
                problem: 'Проблема',
                architecture: 'Архитектура',
                approaches: 'Подходы',
                experiment: 'Эксперимент',
            },
            reposButton: 'Репозитории',
            switchTo: 'EN',
        },
        hero: {
            chips: ['ИТМО · 2026', 'Магистерская ВКР', 'Мобильные · WebRTC · CallKit · ConnectionService'],
            titleStart: 'Входящие вызовы на мобильных,',
            titleAccent: 'честные измерения.',
            paragraph1: {
                lead: 'Три архитектурных подхода к доставке входящего вызова на iOS и Android, ',
                strong1: '~3 000 звонков',
                middle: ', 4 устройства и 5 сетевых профилей. Плюс четыре оптимизации пути установления соединения, которые вместе сокращают TTM в ',
                strong2: '2,6×',
                end: ' по медиане и в ',
                strong3: '2,5×',
                tail: ' на p95.',
                connector: 'сравниваются в идентичных условиях на ',
            },
            paragraph2: 'Эталонные реализации (iOS + Android + Python-статистика) открыты и воспроизводимы.',
            ctaPrimary: 'Посмотреть три подхода',
            ctaSecondary: 'Открыть репозитории →',
            metrics: [
                { value: '0 → 97 %', label: 'DR в Suspended, A → C' },
                { value: '100 п.п.', label: 'абсолютный разрыв DR (A vs C)' },
                { value: '2 780 → 1 050 мс', label: 'медианный TTM после оптимизаций' },
                { value: 'p < 0,001', label: 'каждое межподходовое различие' },
            ],
        },
        problem: {
            title: 'Проблема, которую закрывает ВКР',
            demand: {
                title: 'Спрос огромен',
                body: 'Мировой рынок мобильных видеоконференций к 2030 г. превысит $70 млрд, а ≈85 % организаций уже параллельно используют две и более платформ. Основное устройство доступа — смартфон, платформа с самыми жёсткими ограничениями жизненного цикла.',
            },
            comparison: {
                title: '…но честного сравнения нет.',
                body: 'Промышленные вендоры не публикуют внутренние метрики. Apple и Google публикуют API, но без цифр. Научная литература покрывает управление перегрузкой, производительность, QoE — но не архитектуру доставки входящего вызова в условиях мобильного жизненного цикла.',
            },
            footer: {
                start: 'Что делает работа — узко и предметно: ',
                strong:
                    'воспроизводимое однобинарное сравнение трёх архитектурных подходов в одинаковых условиях, с четырьмя действительно важными метриками (TTI, TTM, DR, RT), на реальных устройствах через настоящие APNs/FCM.',
            },
        },
        architecture: {
            title: 'Четырёхуровневая компонентная модель',
            body: 'Каждый уровень говорит только с соседним — именно это изолирует платформенную специфику (PushKit, CallKit, ConnectionService, Telecom) от бизнес-логики. Один и тот же слот стратегии в уровне 3 позволяет переключать подходы A, B и C, не трогая всё остальное.',
            layers: [
                {
                    name: 'Уровень UI',
                    pattern: 'SwiftUI + Jetpack Compose, MVVM',
                    components: ['Экран входящего вызова', 'Экран конференции', 'Настройки', 'Авторизация'],
                },
                {
                    name: 'Платформенные API',
                    pattern: 'Привязки к iOS и Android',
                    components: ['PushKit / FCM Receiver', 'CallKit / ConnectionService', 'Аудиосессия', 'Network Observer'],
                },
                {
                    name: 'Бизнес-логика',
                    pattern: 'Координатор + реактивный store + Strategy',
                    components: ['Call Manager', 'Signaling Client', 'State Store', 'Telemetry'],
                },
                {
                    name: 'Медиастек (WebRTC)',
                    pattern: 'Google WebRTC — полностью изолирован',
                    components: ['RTCPeerConnection', 'ICE/STUN/TURN Agent', 'Opus (аудио)', 'H.264 (видео)'],
                },
            ],
        },
        approaches: {
            title: 'Три подхода — один бинарник',
            body: 'Все три подхода реализованы как переключаемые в рантайме стратегии внутри одного бинарника — именно это делает сравнение честным. Ниже — доля доставленных вызовов в Suspended и медианы TTI из главы 4.',
            recommendedLabel: 'рекомендуется',
            data: {
                A: {
                    oneLine: 'Без push. UI никогда не просыпается из Suspended.',
                    verdict: 'Контрольное условие. Для реального продукта не годится.',
                },
                B: {
                    oneLine: 'Обычные пуши APNs/FCM + in-app баннер.',
                    verdict:
                        'Best-effort: работает чаще всего, но теряет каждый третий вызов в Suspended. UX хуже системного экрана звонка на залоченном экране.',
                },
                C: {
                    oneLine: 'Пробуждение и UI вызова — на стороне ОС.',
                    verdict:
                        'Рекомендуется. Единственная архитектура, удовлетворяющая требованию надёжности во всех состояниях жизненного цикла.',
                },
            },
            metrics: {
                drSuspended: 'DR в Suspended',
                ttiBackground: 'TTI медиана (Background)',
                ttiSuspended: 'TTI медиана (Suspended)',
            },
        },
        optimizations: {
            title: 'Четыре оптимизации критического пути',
            bodyStart: 'Каждая оптимизация убирает свою фазу из пути установления, поэтому эффекты складываются. Цифры ниже — кумулятивная медиана TTM на Wi-Fi baseline (подход C): стартуем с ',
            bodyMs: ' мс',
            bodyMiddle: ', четыре вместе — ',
            bodyEnd: ' мс, ускорение в 2,6×.',
            cumulativeSuffix: 'кумулятивно',
            items: [
                {
                    name: 'Pre-warming WebSocket',
                    description:
                        'Открываем сигнальный канал при выходе приложения на передний план — TCP+TLS рукопожатие уже сделано к моменту звонка.',
                },
                {
                    name: 'STUN pre-fetch',
                    description:
                        'Узнаём публичный (reflexive) адрес при запуске приложения — STUN-обмен уходит с критического пути.',
                },
                {
                    name: 'Trickle ICE',
                    description:
                        'Отправляем ICE-кандидатов по мере появления, не дожидаясь завершения сбора — фаза ICE перекрывается с SDP-обменом.',
                },
                {
                    name: 'Pre-established DTLS',
                    description:
                        'Согласовываем DTLS-сессию заранее — рукопожатие на звонок короче. Требует поддержки на стороне сервера.',
                },
            ],
            note: 'Почему мультипликативно, а не аддитивно? Каждая техника убирает свою независимую фазу критического пути (TCP/TLS, STUN, сбор ICE, DTLS) — нет фазы, за которую две техники конкурируют.',
        },
        experiment: {
            title: 'Эксперимент в цифрах',
            bodyStart: 'Полнофакторный прогон: ',
            bodyApproaches: ' подходов',
            bodyMiddle1: ' × четыре состояния жизненного цикла × ',
            bodyNetworks: ' сетевых профилей',
            bodyMiddle2: ' × ',
            bodyDevices: '',
            bodyMiddle3: ' устройства, ',
            bodyRepeats: ' замеров на ячейку',
            bodyMiddle4: '. Итого ~',
            bodyTotal: '',
            bodyEnd: ' звонков. Все интервалы меряются монотонным таймером (CACurrentMediaTime на iOS, SystemClock.elapsedRealtimeNanos на Android) и уходят в Node.js-сток для офф-девайсной агрегации.',
            devicesTitle: 'Устройства',
            devicesNote:
                'Две iOS + две Android, по одной «чистой» и одной вендорской сборке — чтобы поймать артефакты вендорского энергосбережения (Samsung) и поведение старых API (SE 2020).',
            networksTitle: 'Сетевые профили',
            networksNote:
                'Профили воспроизводимы на сетевом уровне через tc-netem и Network Link Conditioner — а не у оператора. Одни и те же условия для каждого подхода, на каждом прогоне.',
            networkDetails: {
                wifi: '0 мс латентности, 0 % потерь',
                lte: '12 Мбит/с ± 4, 60 мс ± 20, 0,5 % потерь',
                lte5: '5 % потерь, та же полоса и латентность',
                handover: '10-секундный стол + смена IP',
                blackout: 'Полный разрыв на указанное время',
            },
            networkLabels: {
                wifi: 'Wi-Fi baseline',
                lte: 'LTE variable',
                lte5: 'LTE +5 % потерь',
                handover: 'Wi-Fi → LTE handover',
                blackout: 'Blackout 5 с / 30 с',
            },
            stats: [
                {
                    title: 'Статистический метод',
                    body: 'Медиана + p95 (тяжёлые хвосты задержек), бутстрап-ДИ на 10 000 итераций, Манн–Уитни U, Краскел–Уоллис H, парный Вилкоксон.',
                },
                {
                    title: 'Значимость',
                    body: 'α = 0,05; в ВКР для Background/Suspended стабильно p < 0,001.',
                },
                {
                    title: 'Воспроизводимость',
                    body: 'Один бинарник на все подходы, тот же монотонный таймер, те же сетевые профили. Датасет за каждой таблицей главы 4 закреплён в vkr-conferencing-stats/data.',
                },
            ],
        },
        repositories: {
            title: 'Три репозитория-компаньона',
            body: 'iOS и Android клиенты несут одну и ту же четырёхслойную модель и один и тот же Strategy-слот — поэтому сравнение действительно эквивалентно по бинарю. Третий репозиторий — Python-статистика плюс Node.js сигнальный сервер.',
            openOnGithub: 'Открыть на GitHub →',
            items: {
                ios: {
                    title: 'Клиент iOS',
                    summary:
                        'SwiftUI-стенд: три подхода реализованы как переключаемые в рантайме стратегии. PushKit + CallKit + Network.framework, каждая из четырёх оптимизаций — под своим тогглом.',
                    bullets: [
                        'Strategy-слот — IncomingCallHandler',
                        'Нативная интеграция PushKit / CallKit',
                        'TelemetryCollector на CACurrentMediaTime',
                    ],
                },
                android: {
                    title: 'Клиент Android',
                    summary:
                        'Аналог на Jetpack Compose. FCM High-Priority + self-managed ConnectionService. Та же четырёхслойная архитектура и тот же контракт TelemetryCollector.',
                    bullets: [
                        'FCM High-Priority + ConnectionService',
                        'Self-managed Telecom-аккаунт',
                        'Таймер SystemClock.elapsedRealtimeNanos',
                    ],
                },
                stats: {
                    title: 'Стенд и статистика',
                    summary:
                        'Python-конвейер (NumPy, SciPy, pandas, matplotlib), воспроизводящий все таблицы главы 4, плюс Node.js сигнальный сервер и tc-netem профили сетевой эмуляции.',
                    bullets: [
                        'Медиана, p95, бутстрап-ДИ (10 000 итераций)',
                        'Манн–Уитни, Краскел–Уоллис, Вилкоксон',
                        'Node 20 — сигнальный сервер + сток телеметрии',
                    ],
                },
            },
        },
        footer: {
            supervisorPrefix: 'Научный руководитель:',
            universityLabel: 'ИТМО',
            note: 'Все четыре репозитория под лицензией MIT. Цифры на этой странице взяты из главы 4 ВКР и закреплены в',
        },
    },
    en: {
        meta: {
            title: 'VKR Conferencing — Mobile incoming-call architecture',
            description:
                "Master's thesis (ITMO, 2026): an experimental comparison of three architectural approaches to incoming calls on mobile, plus four optimisation techniques. Companion repositories for iOS, Android and Python statistics.",
            ogDescription:
                'Reproducible measurements (n≈3000) and reference iOS/Android clients for incoming-call delivery on mobile WebRTC.',
        },
        header: {
            nav: {
                problem: 'Problem',
                architecture: 'Architecture',
                approaches: 'Approaches',
                experiment: 'Experiment',
            },
            reposButton: 'Repos',
            switchTo: 'РУ',
        },
        hero: {
            chips: ['ITMO · 2026', "Master's thesis", 'Mobile · WebRTC · CallKit · ConnectionService'],
            titleStart: 'Incoming calls on mobile,',
            titleAccent: 'measured honestly.',
            paragraph1: {
                lead: 'Three architectural approaches to delivering an incoming call on iOS and Android, ',
                strong1: '~3 000 calls',
                middle: ', 4 devices and 5 network profiles. Plus four optimisations of the establishment path that, applied together, cut TTM ',
                strong2: '2.6×',
                end: ' by the median and ',
                strong3: '2.5×',
                tail: ' at p95.',
                connector: 'compared side-by-side in identical conditions across ',
            },
            paragraph2: 'Reference implementations (iOS + Android + Python stats) are public and reproducible.',
            ctaPrimary: 'See the three approaches',
            ctaSecondary: 'Browse the repositories →',
            metrics: [
                { value: '0 → 97 %', label: 'DR in Suspended, A → C' },
                { value: '100 pp', label: 'absolute DR gap (A vs C)' },
                { value: '2 780 → 1 050 ms', label: 'median TTM after optimisations' },
                { value: 'p < 0.001', label: 'every cross-approach difference' },
            ],
        },
        problem: {
            title: 'The problem the thesis closes',
            demand: {
                title: 'Demand is huge',
                body: 'The mobile video-conferencing market is expected to clear $70 B by 2030, and ≈85 % of organisations already run more than one platform side by side. The primary device of access is the smartphone — the platform with the strictest lifecycle constraints.',
            },
            comparison: {
                title: '…and there is no honest comparison.',
                body: 'Industry vendors do not publish internal metrics. Apple and Google publish APIs but no numbers. The research literature covers congestion control, performance, QoE — but not the architecture of incoming-call delivery across mobile lifecycle states.',
            },
            footer: {
                start: 'What the thesis does is small but specific: ',
                strong:
                    'a reproducible, single-binary comparison of three architectural approaches under identical conditions, with the four metrics that actually matter (TTI, TTM, DR, RT) measured on real devices over real APNs/FCM.',
            },
        },
        architecture: {
            title: 'The four-layer component model',
            body: "Each layer talks only to its neighbour — that's what keeps platform specificity (PushKit, CallKit, ConnectionService, Telecom) out of the business logic. The same Strategy slot in Layer 3 lets us flip between approaches A, B and C without touching anything else.",
            layers: [
                {
                    name: 'UI Layer',
                    pattern: 'SwiftUI + Jetpack Compose, MVVM',
                    components: ['Incoming Call Screen', 'Conference Screen', 'Settings', 'Auth/Onboarding'],
                },
                {
                    name: 'Platform APIs',
                    pattern: 'iOS- and Android-specific bindings',
                    components: ['PushKit / FCM Receiver', 'CallKit / ConnectionService', 'Audio Session', 'Network Observer'],
                },
                {
                    name: 'Business Logic',
                    pattern: 'Coordinator + reactive store + Strategy',
                    components: ['Call Manager', 'Signaling Client', 'State Store', 'Telemetry'],
                },
                {
                    name: 'Media Stack (WebRTC)',
                    pattern: 'Google WebRTC — fully isolated',
                    components: ['RTCPeerConnection', 'ICE/STUN/TURN Agent', 'Opus (audio)', 'H.264 (video)'],
                },
            ],
        },
        approaches: {
            title: 'Three approaches, one binary',
            body: "All three approaches are implemented as runtime-switchable strategies inside the same binary — that's what makes the comparison honest. Below: the Suspended-state delivery ratio and the TTI medians from Chapter 4.",
            recommendedLabel: 'recommended',
            data: {
                A: {
                    oneLine: 'No push. UI never wakes from Suspended.',
                    verdict: 'Control condition. Not viable for any real product.',
                },
                B: {
                    oneLine: 'Regular APNs/FCM pushes + an in-app banner.',
                    verdict:
                        'Best-effort: works most of the time but loses one in three Suspended-state calls. UX inferior to system call UI on the lock screen.',
                },
                C: {
                    oneLine: 'System-managed wake-up and native call UI.',
                    verdict:
                        'Recommended. The only architecture that meets the thesis reliability target across every lifecycle state.',
                },
            },
            metrics: {
                drSuspended: 'DR in Suspended',
                ttiBackground: 'TTI median (Background)',
                ttiSuspended: 'TTI median (Suspended)',
            },
        },
        optimizations: {
            title: 'Four optimisations of the critical path',
            bodyStart:
                'Each optimisation removes a different phase from the establishment path, so their effects compose. Numbers below are cumulative TTM medians on Wi-Fi baseline (Approach C): starting at ',
            bodyMs: ' ms',
            bodyMiddle: ', the four together land at ',
            bodyEnd: ' ms — a 2.6× speed-up.',
            cumulativeSuffix: 'cumulative',
            items: [
                {
                    name: 'Pre-warming WebSocket',
                    description:
                        'Open the signaling channel when the app moves to foreground so the TCP+TLS handshake is already done by the time a call arrives.',
                },
                {
                    name: 'STUN pre-fetch',
                    description:
                        'Resolve the reflexive public address at app launch — keeps the STUN exchange off the critical path.',
                },
                {
                    name: 'Trickle ICE',
                    description:
                        'Forward ICE candidates as they appear instead of waiting for gathering to complete — overlaps the ICE phase with SDP exchange.',
                },
                {
                    name: 'Pre-established DTLS',
                    description:
                        'Negotiate the DTLS session ahead of time so the per-call handshake is shorter. Requires server cooperation.',
                },
            ],
            note: 'Why multiplicative, not additive? Each technique eliminates a different independent phase of the critical path (TCP/TLS, STUN, ICE gathering, DTLS) — there is no phase that two techniques fight over.',
        },
        experiment: {
            title: 'The experiment, in numbers',
            bodyStart: 'A full-factorial run: ',
            bodyApproaches: ' approaches',
            bodyMiddle1: ' × four lifecycle states × ',
            bodyNetworks: ' network profiles',
            bodyMiddle2: ' × ',
            bodyDevices: '',
            bodyMiddle3: ' devices, ',
            bodyRepeats: ' samples per cell',
            bodyMiddle4: '. Total: ~',
            bodyTotal: '',
            bodyEnd:
                ' calls. Every duration is timed with a monotonic clock (CACurrentMediaTime on iOS, SystemClock.elapsedRealtimeNanos on Android) and forwarded to a Node.js sink for off-device aggregation.',
            devicesTitle: 'Devices',
            devicesNote:
                'Two iOS + two Android, one "clean" and one vendor build of each — to expose artefacts of vendor power-saving (Samsung) and old-API behaviour (SE 2020).',
            networksTitle: 'Network profiles',
            networksNote:
                'Profiles are reproducible at the network layer via tc-netem and Network Link Conditioner — not at the operator. Same conditions, every approach, every run.',
            networkDetails: {
                wifi: '0 ms latency add, 0 % loss',
                lte: '12 Mbit/s ± 4, 60 ms ± 20, 0.5 % loss',
                lte5: '5 % loss, same bandwidth/latency profile',
                handover: '10 s stall + IP swap',
                blackout: 'Full link drop for the duration',
            },
            networkLabels: {
                wifi: 'Wi-Fi baseline',
                lte: 'LTE variable',
                lte5: 'LTE +5 % loss',
                handover: 'Wi-Fi → LTE handover',
                blackout: '5 s / 30 s blackouts',
            },
            stats: [
                {
                    title: 'Statistical method',
                    body: 'Median + p95 (heavy-tailed latencies), 10 000-iteration percentile bootstrap, Mann–Whitney U, Kruskal–Wallis H, paired Wilcoxon.',
                },
                {
                    title: 'Significance',
                    body: 'α = 0.05; the thesis reports p < 0.001 across Background/Suspended.',
                },
                {
                    title: 'Reproducibility',
                    body: 'Same binary across approaches, same monotonic clock, same network profiles. The dataset behind every Chapter-4 table is pinned in vkr-conferencing-stats/data.',
                },
            ],
        },
        repositories: {
            title: 'Three companion repositories',
            body: 'The iOS and Android clients ship the same four-layer model with the same Strategy slot, so the comparison really is binary-equivalent. The third repository is the Python statistical pipeline plus the Node.js signalling server.',
            openOnGithub: 'Open on GitHub →',
            items: {
                ios: {
                    title: 'iOS client',
                    summary:
                        'SwiftUI test bench implementing the three approaches as runtime-switchable strategies. PushKit + CallKit + Network.framework, with the four optimisations gated behind individual toggles.',
                    bullets: [
                        'Strategy slot — IncomingCallHandler',
                        'PushKit / CallKit native integration',
                        'TelemetryCollector with CACurrentMediaTime',
                    ],
                },
                android: {
                    title: 'Android client',
                    summary:
                        'Jetpack Compose counterpart. FCM High-Priority + Telecom self-managed ConnectionService. Identical architecture and TelemetryCollector contract.',
                    bullets: [
                        'FCM High-Priority + ConnectionService',
                        'Telecom self-managed phone account',
                        'SystemClock.elapsedRealtimeNanos timing',
                    ],
                },
                stats: {
                    title: 'Statistics & test bench',
                    summary:
                        'Python (NumPy, SciPy, pandas, matplotlib) pipeline that reproduces every Chapter-4 table, plus the Node.js signaling server and tc-netem profiles that drive the experiment.',
                    bullets: [
                        'Median, p95, bootstrap CI (10 000 it.)',
                        'Mann–Whitney, Kruskal–Wallis, Wilcoxon',
                        'Node 20 signaling + telemetry server',
                    ],
                },
            },
        },
        footer: {
            supervisorPrefix: 'Supervisor:',
            universityLabel: 'ITMO University',
            note: 'All four repositories are MIT-licensed. Numbers on this page are sourced from Chapter 4 of the thesis and pinned in',
        },
    },
} as const satisfies Record<Locale, unknown>;

export type Dictionary = (typeof dictionaries)['ru'];

export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale] as Dictionary;
}

/** Path prefix for a given locale — used by `LocaleSwitcher`. */
export const localePaths: Record<Locale, string> = {
    ru: '/',
    en: '/en/',
};

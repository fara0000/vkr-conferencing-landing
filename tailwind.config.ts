import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto'],
                mono: ['ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
            },
            colors: {
                surface: {
                    DEFAULT: '#0a0a0f',
                    raised: '#13131c',
                    overlay: '#1b1b27',
                },
                accent: {
                    DEFAULT: '#7c7cff',
                    soft: '#a4a4ff',
                    deep: '#4f46e5',
                },
                signal: {
                    A: '#94a3b8',
                    B: '#0ea5e9',
                    C: '#7c7cff',
                },
            },
            boxShadow: {
                glow: '0 0 40px -10px rgba(124, 124, 255, 0.5)',
            },
        },
    },
    plugins: [],
};

export default config;

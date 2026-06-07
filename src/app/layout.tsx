import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'VKR Conferencing — Mobile incoming-call architecture',
    description:
        "Master's thesis (ITMO, 2026): an experimental comparison of three architectural approaches to incoming calls on mobile, plus four optimisation techniques. Companion repositories for iOS, Android and Python statistics.",
    metadataBase: new URL('https://vkr-conferencing.example'),
    openGraph: {
        title: 'VKR Conferencing',
        description:
            "Reproducible measurements (n≈3000) and reference iOS/Android clients for incoming-call delivery on mobile WebRTC.",
        type: 'website',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased selection:bg-accent/30">{children}</body>
        </html>
    );
}

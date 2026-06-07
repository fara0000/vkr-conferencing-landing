import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://fara0000.github.io/vkr-conferencing-landing/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className="dark">
            <body className="antialiased selection:bg-accent/30">{children}</body>
        </html>
    );
}

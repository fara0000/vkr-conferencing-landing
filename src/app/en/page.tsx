import type { Metadata } from 'next';
import { Approaches } from '@/components/Approaches';
import { Architecture } from '@/components/Architecture';
import { Experiment } from '@/components/Experiment';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Optimizations } from '@/components/Optimizations';
import { Problem } from '@/components/Problem';
import { Repositories } from '@/components/Repositories';
import { getDictionary } from '@/lib/i18n';

const dict = getDictionary('en');

export const metadata: Metadata = {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
        title: dict.meta.title,
        description: dict.meta.ogDescription,
        type: 'website',
    },
};

export default function EnglishPage() {
    return (
        <>
            <Header dict={dict} locale="en" />
            <main>
                <Hero dict={dict} />
                <Problem dict={dict} />
                <Architecture dict={dict} />
                <Approaches dict={dict} />
                <Optimizations dict={dict} />
                <Experiment dict={dict} />
                <Repositories dict={dict} />
            </main>
            <Footer dict={dict} />
        </>
    );
}

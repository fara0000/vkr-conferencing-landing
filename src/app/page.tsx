import { Approaches } from '@/components/Approaches';
import { Architecture } from '@/components/Architecture';
import { Experiment } from '@/components/Experiment';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Optimizations } from '@/components/Optimizations';
import { Problem } from '@/components/Problem';
import { Repositories } from '@/components/Repositories';

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Problem />
                <Architecture />
                <Approaches />
                <Optimizations />
                <Experiment />
                <Repositories />
            </main>
            <Footer />
        </>
    );
}

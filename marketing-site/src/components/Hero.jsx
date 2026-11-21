import { ArrowRight, ShieldCheck, Recycle, Coins, Lock } from 'lucide-react';
import BrandMark from './BrandMark.jsx';

export default function Hero() {
    return (
        <section
        id="top"
        className="relative overflow-hidden bg-primary text-surface"
        >
        {/* Subtle Sea Glass Corner Glow (kept clear of logo & text per Section 2.3) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-surface-alt/15 blur-3xl"
        />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-surface-alt/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-6">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-alt/30 bg-primary-dark/60 px-4 py-1.5 text-xs font-medium text-surface">
                <span
                    className="h-2 w-2 rounded-full bg-accent"
                    aria-hidden="true"
                />
                Sri Lanka’s Circular Student Marketplace • Phase 1 Web Prototype
                </div>

                {/* Official Warm Ivory Logo on Petrol Teal */}
                <div className="mb-6">
                <BrandMark variant="ivory" size="lg" />
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-surface md:text-4xl">
                Nothing useful should go unused
                <span className="text-accent" aria-hidden="true">
                    .
                </span>
                </h1>

                <p className="mt-4 max-w-prose text-base leading-relaxed text-surface/90 sm:text-lg">
                ATHAMARU is a trust-centric second-hand web marketplace built for
                Sri Lankan university students. Buy and sell textbooks, laptops,
                furniture, and bicycles with seller-reported condition scores,
                rule-based LKR price estimates, and verified student sellers.
                </p>

                {/* Primary & Secondary CTAs (44px min touch targets) */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                    href="#waitlist"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-surface px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-bg focus-visible:outline-surface"
                >
                    Join Early Access Waitlist
                    <ArrowRight className="h-5 w-5 text-accent" aria-hidden="true" />
                </a>
                <a
                    href="#features"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-surface/50 bg-transparent px-6 py-3 text-base font-semibold text-surface transition-colors hover:bg-primary-dark focus-visible:outline-surface"
                >
                    Explore Prototype Features
                </a>
                </div>

                {/* 3 Circular Pillars */}
                <div className="mt-10 grid grid-cols-1 gap-4 border-t border-surface-alt/20 pt-6 sm:grid-cols-3">
                <div className="flex items-center gap-2.5 text-sm text-surface">
                    <Recycle
                    className="h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                    />
                    <span>Extend product life</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-surface">
                    <Coins
                    className="h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                    />
                    <span>Fair LKR estimates</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-surface">
                    <ShieldCheck
                    className="h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                    />
                    <span>Verified student trust</span>
                </div>
                </div>
            </div>

            {/* Right Column: Liquid-Glass macOS Browser Window Preview */}
            <div className="lg:col-span-6">
                <div className="rounded-xl border border-surface/25 bg-surface/10 p-2.5 shadow-lg backdrop-blur-md ring-1 ring-inset ring-surface/15 sm:p-3">
                {/* Translucent macOS Title Bar */}
                <div className="mb-2.5 grid grid-cols-3 items-center px-1.5 pt-0.5">
                    {/* Authentic macOS Traffic Light Buttons */}
                    <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-mac-red ring-1 ring-inset ring-ink/25" />
                    <span className="h-3 w-3 rounded-full bg-mac-yellow ring-1 ring-inset ring-ink/25" />
                    <span className="h-3 w-3 rounded-full bg-mac-green ring-1 ring-inset ring-ink/25" />
                    </div>

                    {/* Centered Frosted URL Pill */}
                    <div className="flex justify-center">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-surface/20 bg-primary-dark/60 px-3.5 py-1 text-xs font-medium text-surface backdrop-blur-sm">
                        <Lock className="h-3 w-3 shrink-0 text-surface-alt" aria-hidden="true" />
                        <span>athamaru.lk</span>
                    </div>
                    </div>

                    {/* Right Spacer for True Center Alignment */}
                    <div aria-hidden="true" />
                </div>

                {/* Crisp, Uncropped Prototype Screenshot */}
                <div className="overflow-hidden rounded-lg border border-surface/20 bg-surface">
                    <img
                    src="/images/hero-mockup.png"
                    alt="ATHAMARU web marketplace prototype preview showing the welcome screen, landing page, sign-up form, and marketplace home"
                    className="block h-auto w-full"
                    />
                </div>
                </div>

                <p className="mt-3 text-center text-xs font-medium text-surface-alt sm:text-right">
                Web-first prototype designed for Sri Lankan university campuses (LKR)
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}
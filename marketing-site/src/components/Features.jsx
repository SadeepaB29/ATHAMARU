import {
    UserCheck,
    BadgeCheck,
    ClipboardList,
    Calculator,
    SlidersHorizontal,
    MessageSquare,
    Scale,
    Info,
    } from 'lucide-react';

    const PHASE_1_FEATURES = [
    {
        icon: UserCheck,
        title: 'Student Buyer & Seller Accounts',
        description:
        'Quick registration and login built around Sri Lankan university buyers and sellers trading textbooks, electronics, furniture, bicycles, and dorm essentials.',
    },
    {
        icon: BadgeCheck,
        title: 'One-Time Verified Seller Badge',
        badge: 'Verified seller',
        description:
        'Manual seller identity verification adds peer accountability. This badge confirms seller identity only—not an independent inspection or certificate of item authenticity.',
    },
    {
        icon: ClipboardList,
        title: 'Guided Listing & Condition Score',
        label: 'Seller-reported',
        description:
        'Structured prompts capture age, usage, defects, accessories, proof of purchase, and photos to produce a clear seller-reported condition score and wear summary.',
    },
    {
        icon: Calculator,
        title: 'Rule-Based Suggested LKR Price Range',
        label: 'Estimate',
        description:
        'Uses reference prices, age, and condition to estimate a fair LKR price range. Sellers set the final price and provide a short reason if priced outside the range.',
    },
    {
        icon: SlidersHorizontal,
        title: 'Category, Price, Condition & Location Filters',
        description:
        'Narrow listings quickly by item category, LKR budget, seller-reported condition grade, and nearby university or city location.',
    },
    {
        icon: MessageSquare,
        title: 'In-App Messaging & In-Person Handover',
        description:
        'Coordinate questions and arrange a safe in-person meetup directly inside the platform without sharing personal phone numbers prematurely.',
    },
    {
        icon: Scale,
        title: 'Dispute Reporting, Penalties & Appeals',
        description:
        'Report misleading listings or handover issues for moderator review, backed by proportionate account penalties and a fair appeals process.',
    },
    ];

    const SHOWCASE_SCREENS = [
    {
        image: '/images/feature-auth.png',
        alt: 'ATHAMARU student sign-in and account registration interface in Petrol Teal and Warm Ivory',
        tag: 'Accounts & Verification',
        title: 'Clean Student Onboarding & Verified Identity',
        caption:
        'Seamless login and account creation designed for Sri Lankan university students, paired with one-time manual seller verification.',
    },
    {
        image: '/images/feature-condition.png',
        alt: 'ATHAMARU guided item listing workflow displaying seller-reported condition score and wear details',
        tag: 'Seller-reported Condition',
        title: 'Guided Listing & Seller-Reported Condition Score',
        caption:
        'Captures age, wear, defects, accessories, and proof of purchase upfront so buyers know what to expect before messaging.',
    },
    {
        image: '/images/feature-pricing.png',
        alt: 'ATHAMARU marketplace view illustrating rule-based LKR price estimate and category filters',
        tag: 'LKR Price Estimate',
        title: 'Rule-Based LKR Price Range & Smart Filters',
        caption:
        'Clear LKR price estimates calculated from reference prices, age, and condition—helping both sides agree on a fair deal faster.',
    },
    ];

    export default function Features() {
    return (
        <section
        id="features"
        className="border-y border-line bg-surface py-16 lg:py-20"
        >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            {/* Section Heading */}
            <div className="max-w-prose">
            <p className="text-sm font-semibold text-accent-dark">
                Phase 1 Prototype Capabilities
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Built for clarity at every step of the trade
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Every feature in our Phase 1 web marketplace targets the real trust
                gaps students face when buying and selling second-hand items in Sri
                Lanka.
            </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PHASE_1_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                <article
                    key={feature.title}
                    className="flex flex-col rounded-xl border border-line bg-bg p-6 shadow-sm"
                >
                    <div className="mb-4 flex items-center justify-between gap-2">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    {feature.badge && (
                        <span
                        title="Identity was checked; this does not certify item authenticity."
                        className="inline-flex items-center gap-1 rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-primary"
                        >
                        <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                        {feature.badge}
                        </span>
                    )}
                    {feature.label && (
                        <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
                        {feature.label}
                        </span>
                    )}
                    </div>

                    <h3 className="text-xl font-semibold text-ink">
                    {feature.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {feature.description}
                    </p>
                </article>
                );
            })}
            </div>

            {/* Honest Transparency Disclaimer Banner */}
            <div
            role="note"
            className="mt-8 flex flex-col gap-3 rounded-xl border border-line bg-surface-alt/50 p-5 sm:flex-row sm:items-start"
            >
            <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-ink">
                <strong className="font-semibold text-primary">
                Transparency Commitment:
                </strong>{' '}
                Condition scores are <strong>Seller-reported</strong> summaries
                generated from the guided listing form, and suggested LKR price
                ranges are <strong>Estimate</strong> values—not guaranteed
                valuations. The <strong>Verified seller</strong> badge confirms
                seller identity only (using dummy verification data in this academic
                prototype) and is not a physical inspection or authenticity
                certificate. Always inspect items in person before completing
                payment.
            </p>
            </div>

            {/* Prototype Screenshot Showcase */}
            <div className="mt-16">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                <h3 className="text-xl font-semibold text-ink md:text-2xl">
                    Prototype UI Showcase
                </h3>
                <p className="mt-1 text-base text-ink-muted">
                    Screens from our active ATHAMARU web application prototype.
                </p>
                </div>
                <span className="inline-flex w-fit rounded-full bg-surface-alt px-3.5 py-1 text-xs font-medium text-primary">
                Web App • Mobile &amp; Desktop Responsive
                </span>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {SHOWCASE_SCREENS.map((screen) => (
                <figure
                    key={screen.title}
                    className="flex flex-col overflow-hidden rounded-xl border border-line bg-bg shadow-sm"
                >
                    <div className="overflow-hidden border-b border-line bg-surface">
                    <img
                        src={screen.image}
                        alt={screen.alt}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover"
                    />
                    </div>
                    <figcaption className="flex flex-1 flex-col p-5">
                    <span className="mb-2 inline-flex w-fit rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-primary">
                        {screen.tag}
                    </span>
                    <h4 className="text-lg font-medium text-ink">
                        {screen.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {screen.caption}
                    </p>
                    </figcaption>
                </figure>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
}
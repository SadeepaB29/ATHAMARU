import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const PROBLEMS = [
    {
        title: 'Inconsistent & Missing Item Details',
        detail:
        'Generic classifieds like ikman or Facebook Marketplace rarely show item age, actual wear, defects, included accessories, or repair history.',
    },
    {
        title: 'Guesswork Over Fair Second-Hand Prices',
        detail:
        'Students are left guessing whether an asking price is fair or inflated, leading to awkward haggling and abandoned chats.',
    },
    {
        title: 'Low Peer-to-Peer Trust',
        detail:
        'Anonymous accounts and unverified profiles make it risky to buy laptops, textbooks, or bikes from strangers online.',
    },
    {
        title: 'No Structured Dispute Support',
        detail:
        'If an item fails to match its listing during handover, generic platforms leave buyers and sellers with no clear reporting or moderation path.',
    },
    ];

    const SOLUTIONS = [
    {
        title: 'Guided Condition & Wear Disclosures',
        detail:
        'Every listing captures age, usage, defects, accessories, proof of purchase, and photos to produce a clear seller-reported condition score.',
    },
    {
        title: 'Rule-Based Suggested LKR Price Range',
        detail:
        'Reference prices, age, and condition generate a transparent price estimate. Sellers set the final price and explain if it falls outside the range.',
    },
    {
        title: 'One-Time Verified Seller Badge',
        detail:
        'Manual seller identity checks add accountability so student buyers know who they are dealing with before arranging a meetup.',
    },
    {
        title: 'In-App Messaging, Handovers & Moderation',
        detail:
        'Chat inside ATHAMARU, follow a clear in-person handover flow, and rely on moderator dispute reviews, proportionate penalties, and appeals.',
    },
    ];

    export default function ProblemSolution() {
    return (
        <section id="problem" className="bg-bg py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="max-w-prose">
            <p className="text-sm font-semibold text-accent-dark">
                Why ATHAMARU Exists
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Generic classifieds weren’t built for student trust
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Buying second-hand on campus shouldn’t feel like a gamble. Here is
                how ATHAMARU replaces vague listings with structured transparency.
            </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Problem Card */}
            <article className="rounded-xl border border-line bg-surface p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-bg text-accent">
                    <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-ink md:text-2xl">
                    Existing Classifieds
                    </h3>
                    <p className="text-sm text-ink-muted">
                    ikman, Facebook Marketplace &amp; group chats
                    </p>
                </div>
                </div>

                <ul className="space-y-4">
                {PROBLEMS.map((item) => (
                    <li key={item.title} className="flex gap-3">
                    <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                    />
                    <div>
                        <h4 className="text-lg font-medium text-ink">
                        {item.title}
                        </h4>
                        <p className="mt-1 text-base leading-relaxed text-ink-muted">
                        {item.detail}
                        </p>
                    </div>
                    </li>
                ))}
                </ul>
            </article>

            {/* ATHAMARU Solution Card */}
            <article className="rounded-xl border border-primary-dark bg-primary p-6 text-surface shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-dark text-accent">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-surface md:text-2xl">
                    The ATHAMARU Solution
                    </h3>
                    <p className="text-sm text-surface-alt">
                    Structured transparency for Sri Lankan university students
                    </p>
                </div>
                </div>

                <ul className="space-y-4">
                {SOLUTIONS.map((item) => (
                    <li key={item.title} className="flex gap-3">
                    <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0 text-accent"
                        aria-hidden="true"
                    />
                    <div>
                        <h4 className="text-lg font-medium text-surface">
                        {item.title}
                        </h4>
                        <p className="mt-1 text-base leading-relaxed text-surface/90">
                        {item.detail}
                        </p>
                    </div>
                    </li>
                ))}
                </ul>
            </article>
            </div>
        </div>
        </section>
    );
}
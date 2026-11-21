import { useState } from 'react';
import {
    Search,
    FileCheck2,
    MessageCircle,
    Handshake,
    UserPlus,
    ClipboardEdit,
    Tag,
    } from 'lucide-react';

    const FLOWS = {
    buyer: {
        label: 'For Student Buyers',
        steps: [
        {
            step: '01',
            icon: Search,
            title: 'Filter by Campus Needs',
            description:
            'Browse textbooks, electronics, furniture, or bicycles filtered by category, LKR budget, condition grade, and location.',
        },
        {
            step: '02',
            icon: FileCheck2,
            title: 'Review Condition & LKR Estimate',
            description:
            'Check the seller-reported condition score, wear summary, photos, defects, and how the asking price compares to the suggested estimate.',
        },
        {
            step: '03',
            icon: MessageCircle,
            title: 'Chat with Verified Sellers',
            description:
            'Use in-app messaging to confirm details and agree on a safe, public campus or nearby meetup location.',
        },
        {
            step: '04',
            icon: Handshake,
            title: 'Inspect & Complete Handover',
            description:
            'Meet in person, verify the item matches the listing disclosures, settle directly in LKR, and mark the handover complete.',
        },
        ],
    },
    seller: {
        label: 'For Verified Student Sellers',
        steps: [
        {
            step: '01',
            icon: UserPlus,
            title: 'Create Account & Get Verified',
            description:
            'Register as a student seller and complete the one-time manual identity verification check to earn your Verified seller badge.',
        },
        {
            step: '02',
            icon: ClipboardEdit,
            title: 'Complete the Guided Listing',
            description:
            'Add photos plus item age, usage, defects, accessories, and proof of purchase to generate a clear seller-reported condition score.',
        },
        {
            step: '03',
            icon: Tag,
            title: 'Set Your Fair LKR Price',
            description:
            'Review the rule-based suggested price estimate, set your final asking price, and add a brief reason if priced outside the range.',
        },
        {
            step: '04',
            icon: Handshake,
            title: 'Message & Hand Over In Person',
            description:
            'Respond to interested student buyers via in-app chat and complete a transparent, in-person campus handover.',
        },
        ],
    },
    };

    export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState('buyer');
    const currentFlow = FLOWS[activeTab];

    return (
        <section id="how-it-works" className="bg-bg py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-prose">
                <p className="text-sm font-semibold text-accent-dark">
                Simple 4-Step Flow
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                How ATHAMARU works
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Clear steps for both student buyers and verified sellers, always
                ending in a safe, direct in-person handover.
                </p>
            </div>

            {/* Accessible Tab Switcher (44px min height) */}
            <div
                role="tablist"
                aria-label="Choose buyer or seller flow"
                className="inline-flex w-fit rounded-lg border border-line bg-surface p-1 shadow-sm"
            >
                {Object.entries(FLOWS).map(([key, flow]) => {
                const isSelected = activeTab === key;
                return (
                    <button
                    key={key}
                    type="button"
                    role="tab"
                    id={`tab-${key}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${key}`}
                    onClick={() => setActiveTab(key)}
                    className={`min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition-colors sm:px-5 sm:text-base ${
                        isSelected
                        ? 'bg-primary text-surface'
                        : 'text-ink-muted hover:text-primary'
                    }`}
                    >
                    {flow.label}
                    </button>
                );
                })}
            </div>
            </div>

            {/* Steps Grid */}
            <ol
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
            {currentFlow.steps.map((item) => {
                const Icon = item.icon;
                return (
                <li
                    key={item.step}
                    className="flex flex-col rounded-xl border border-line bg-surface p-6 shadow-sm"
                >
                    <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-alt text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xl font-bold text-ink-muted">
                        {item.step}
                    </span>
                    </div>
                    <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {item.description}
                    </p>
                </li>
                );
            })}
            </ol>
        </div>
        </section>
    );
}
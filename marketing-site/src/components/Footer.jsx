import { Mail, Instagram } from 'lucide-react';
import BrandMark from './BrandMark.jsx';

const QUICK_LINKS = [
    { label: 'Problem & Solution', href: '#problem' },
    { label: 'Phase 1 Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Team', href: '#team' },
    { label: 'Join Waitlist', href: '#waitlist' },
    { label: 'FAQ', href: '#faq' },
    ];

    function TikTokIcon({ className }) {
    return (
        <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
        >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
    );
    }

    export default function Footer({ onOpenPrivacy }) {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-surface">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
            <div className="grid gap-10 md:grid-cols-12">
            {/* Left Column: Official Warm Ivory Brand Logo & Summary */}
            <div className="md:col-span-5">
                <a
                href="#top"
                aria-label="ATHAMARU — Back to top"
                className="inline-flex min-h-[44px] items-center rounded-lg focus-visible:outline-surface"
                >
                <BrandMark variant="ivory" size="sm" />
                </a>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-surface/85">
                A trust-centric circular second-hand web marketplace built for Sri
                Lankan university students. Nothing useful should go unused.
                </p>
            </div>

            {/* Middle Column: Quick Links */}
            <div className="md:col-span-3">
                <h2 className="text-sm font-semibold text-surface-alt">
                Quick Links
                </h2>
                <ul className="mt-3 space-y-1 text-sm">
                {QUICK_LINKS.map((link) => (
                    <li key={link.href}>
                    <a
                        href={link.href}
                        className="inline-flex min-h-[20px] items-center text-surface/85 transition-colors hover:text-surface focus-visible:outline-surface"
                    >
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Right Column: Contact, Privacy & Right-Aligned Social Icons */}
            <div className="flex flex-col md:col-span-4 md:items-end md:text-right">
                <h2 className="text-sm font-semibold text-surface-alt">
                Contact &amp; Privacy
                </h2>
                <ul className="mt-3 space-y-1 text-sm text-surface/90">
                <li>
                    <a
                    href="mailto:hello@athamaru.com"
                    className="inline-flex min-h-[20px] items-center gap-2 transition-colors hover:text-surface-alt focus-visible:outline-surface"
                    >
                    <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                    hello@athamaru.com
                    </a>
                </li>
                <li>
                    <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="inline-flex min-h-[44px] items-center underline underline-offset-4 transition-colors hover:text-surface-alt focus-visible:outline-surface"
                    >
                    Read Waitlist Privacy Notice
                    </button>
                </li>
                </ul>

                {/* Social Icons (Instagram + TikTok) Right-Aligned with 44x44px Targets */}
                <div className="mt-4 flex items-center gap-3 md:justify-end">
                <a
                    href="https://www.instagram.com/athamaru?lqvp=MTBlb2M4djJhamxqMg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow ATHAMARU on Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-alt/40 text-surface transition-colors hover:border-surface hover:bg-primary-dark focus-visible:outline-surface"
                >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                    href="https://www.tiktok.com/@athamaru.lk?_r=1&_t=ZS-9Bc3zqCwUMO"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow ATHAMARU on TikTok"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-alt/40 text-surface transition-colors hover:border-surface hover:bg-primary-dark focus-visible:outline-surface"
                >
                    <TikTokIcon className="h-5 w-5" />
                </a>
                </div>
            </div>
            </div>

            {/* Clean Academic Disclaimer & Copyright (No Group CS-77 suffix) */}
            <div className="mt-10 border-t border-surface-alt/20 pt-6 text-sm leading-relaxed text-surface/80 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <p>
                <strong className="font-semibold text-surface">
                Academic Coursework Disclaimer:
                </strong>{' '}
                ATHAMARU is a student prototype developed for the Agile Team Project
                module (5COSC021C.Y / 5COSC021W) at the Informatics Institute of
                Technology (IIT), affiliated with the University of Westminster.
            </p>
            <p className="mt-3 shrink-0 sm:mt-0">&copy; {year} ATHAMARU.</p>
            </div>
        </div>
        </footer>
    );
}
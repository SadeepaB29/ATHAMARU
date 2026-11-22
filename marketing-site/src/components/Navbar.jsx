import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import BrandMark from './BrandMark.jsx';

const NAV_LINKS = [
    { label: 'Problem', href: '#problem' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    ];

    export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-md">
        <nav
            aria-label="Primary navigation"
            className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6"
        >
            {/* Official Petrol Teal Logo on Warm Ivory Surface */}
            <a
            href="#top"
            aria-label="ATHAMARU — Back to top"
            className="inline-flex min-h-[44px] items-center rounded-lg px-1 transition-opacity hover:opacity-90"
            >
            <BrandMark variant="teal" size="sm" />
            </a>

            {/* Desktop Links */}
            <ul className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => (
                <li key={link.href}>
                <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-ink-muted transition-colors hover:text-primary"
                >
                    {link.label}
                </a>
                </li>
            ))}
            </ul>

            {/* Desktop Primary CTA */}
            <div className="hidden md:block">
            <a
                href="#waitlist"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-surface transition-colors hover:bg-primary-dark"
            >
                Join Waitlist
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            </div>

            {/* Accessible 44x44px Mobile Menu Button */}
            <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-primary transition-colors hover:bg-bg md:hidden"
            >
            {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
            ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
            )}
            </button>
        </nav>

        {/* Mobile Dropdown Navigation */}
        {mobileOpen && (
            <div
            id="mobile-nav-menu"
            className="border-t border-line bg-surface px-4 pt-3 pb-5 shadow-sm md:hidden"
            >
            <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                <li key={link.href}>
                    <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-ink transition-colors hover:bg-bg hover:text-primary"
                    >
                    {link.label}
                    </a>
                </li>
                ))}
            </ul>
            <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-surface transition-colors hover:bg-primary-dark"
            >
                Join Waitlist
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            </div>
        )}
        </header>
    );
}
import { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  // Close modal with Escape key for WCAG 2.2 AA keyboard accessibility
    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-xs"
        onClick={onClose}
        >
        <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-line bg-surface p-6 shadow-lg sm:p-8"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-primary">
                <Shield className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2
                id="privacy-modal-title"
                className="text-xl font-semibold text-ink md:text-2xl"
                >
                Waitlist Privacy Notice
                </h2>
            </div>

            <button
                type="button"
                onClick={onClose}
                aria-label="Close Privacy Notice"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-bg hover:text-ink"
            >
                <X className="h-5 w-5" aria-hidden="true" />
            </button>
            </div>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
                <strong className="font-semibold text-ink">
                1. What we collect:
                </strong>{' '}
                When you submit the ATHAMARU early access waitlist form, we collect
                only your name, university email address, preferred role (Buyer,
                Seller, or Both), and any optional message you choose to share.
            </p>
            <p>
                <strong className="font-semibold text-ink">
                2. Why we collect it:
                </strong>{' '}
                Your details are used strictly to notify you about early student
                testing for ATHAMARU and to gather feedback for our university Agile
                Team Project (IIT / University of Westminster).
            </p>
            <p>
                <strong className="font-semibold text-ink">
                3. What we do not collect:
                </strong>{' '}
                This marketing site does not collect National Identity Card (NIC)
                photos, bank details, or payment card information. Our coursework
                prototype uses dummy identity verification data only.
            </p>
            <p>
                <strong className="font-semibold text-ink">
                4. Storage and third parties:
                </strong>{' '}
                When deployed with Formspree, form submissions are transmitted
                securely over HTTPS to Formspree for team review. We never sell or
                share your email with third-party advertisers.
            </p>
            <p>
                <strong className="font-semibold text-ink">
                5. Deletion requests:
                </strong>{' '}
                You may request removal of your waitlist entry at any time by
                emailing{' '}
                <a
                href="mailto:hello@athamaru.com"
                className="font-semibold text-accent-dark underline underline-offset-2 hover:text-primary"
                >
                hello@athamaru.com
                </a>
                .
            </p>
            </div>

            <div className="mt-6 flex justify-end">
            <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[44px] items-center rounded-lg bg-primary px-6 py-2.5 text-base font-semibold text-surface transition-colors hover:bg-primary-dark"
            >
                Close
            </button>
            </div>
        </div>
        </div>
    );
}
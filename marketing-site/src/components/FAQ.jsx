import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
    {
        id: 'faq-safety',
        question: 'How does ATHAMARU keep student buyers and sellers safe?',
        answer:
        'ATHAMARU combines one-time seller identity verification, structured seller-reported condition disclosures, in-app messaging, and a clear in-person handover flow. If a listing is misleading or a handover dispute occurs, users can submit a report for moderator review, which can lead to proportionate penalties with a fair appeals process.',
    },
    {
        id: 'faq-verified',
        question: 'What does the "Verified seller" badge actually mean?',
        answer:
        'The Verified seller badge confirms that a seller has completed our one-time manual identity verification check. It confirms seller identity only—it is not an independent physical inspection or a certificate of item authenticity. Our academic prototype uses dummy identity data and does not collect real NIC photos.',
    },
    {
        id: 'faq-pricing',
        question: 'How does the suggested LKR price estimate work?',
        answer:
        'Our rule-based pricing engine calculates a suggested LKR price range using category reference prices, item age, and the seller-reported condition score. This range is an estimate to guide fair discussions—sellers always set the final asking price and simply add a brief reason if they price outside the suggested range.',
    },
    {
        id: 'faq-handover',
        question: 'How do payments and handovers work? Is there delivery or escrow?',
        answer:
        'ATHAMARU Phase 1 focuses purely on peer-to-peer local trades in Sri Lankan Rupees (LKR). Buyers and sellers coordinate via in-app chat and meet in person (such as on campus or in a public place) to inspect the item and complete the handover directly. We do not offer courier delivery, warehouses, escrow, or installments.',
    },
    {
        id: 'faq-prototype',
        question: 'Is ATHAMARU live today or an academic prototype?',
        answer:
        'ATHAMARU is currently an academic Phase 1 web prototype developed for the Agile Team Project module (5COSC021C.Y / 5COSC021W) at the Informatics Institute of Technology (University of Westminster). Joining the waitlist registers your interest for early student testing and feedback.',
    },
    ];

    export default function FAQ() {
    const [openId, setOpenId] = useState(FAQ_ITEMS[0].id);

    const toggleItem = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section
        id="faq"
        className="border-t border-line bg-surface py-16 lg:py-20"
        >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div>
            <p className="text-sm font-semibold text-accent-dark">
                Frequently Asked Questions
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Honest answers, no fine print
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Everything you need to know about our Phase 1 features, safety
                boundaries, and academic prototype status.
            </p>
            </div>

            <div className="mt-8 divide-y divide-line rounded-xl border border-line bg-bg shadow-sm">
            {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                <div key={item.id} className="px-5 py-2 sm:px-6">
                    <h3>
                    <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`${item.id}-content`}
                        onClick={() => toggleItem(item.id)}
                        className="flex min-h-[44px] w-full items-center justify-between gap-4 py-3 text-left text-base font-semibold text-ink transition-colors hover:text-primary"
                    >
                        <span>{item.question}</span>
                        <ChevronDown
                        className={`h-5 w-5 shrink-0 text-accent transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                        />
                    </button>
                    </h3>
                    {isOpen && (
                    <div
                        id={`${item.id}-content`}
                        className="pb-4 pr-8 text-base leading-relaxed text-ink-muted"
                    >
                        {item.answer}
                    </div>
                    )}
                </div>
                );
            })}
            </div>
        </div>
        </section>
    );
}
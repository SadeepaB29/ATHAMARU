import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Replace with your Formspree form ID (e.g., 'xkgbwqrz') before live deployment.
// While set to 'YOUR_FORMSPREE_ID', the form runs in local validation + confirmation mode for viva demos.
const YOUR_FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

const INITIAL_FORM = {
    name: '',
    email: '',
    role: 'Both',
    message: '',
    privacyAccepted: false,
};

        export default function WaitlistForm({ onOpenPrivacy }) {
        const [formData, setFormData] = useState(INITIAL_FORM);
        const [errors, setErrors] = useState({});
        const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
        const [statusMessage, setStatusMessage] = useState('');

        const validate = () => {
            const newErrors = {};

            if (!formData.name.trim() || formData.name.trim().length < 2) {
            newErrors.name = 'Enter your full name using at least 2 characters.';
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
            newErrors.email =
                'Enter a valid university email address, such as name@iit.ac.lk.';
            }

            if (!['Buyer', 'Seller', 'Both'].includes(formData.role)) {
            newErrors.role = 'Choose whether you plan to join as a Buyer, Seller, or Both.';
            }

            if (!formData.privacyAccepted) {
            newErrors.privacyAccepted =
                'Tick the box to agree to the Privacy Notice before submitting.';
            }

            return newErrors;
        };

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
            }));
            if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const validationErrors = validate();

            if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus('error');
            setStatusMessage(
                'Some required details are missing or invalid. Review the highlighted fields below.'
            );
            return;
            }

            setStatus('submitting');
            setStatusMessage('');

            // Graceful local confirmation mode for viva demonstrations
            if (YOUR_FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
            await new Promise((resolve) => setTimeout(resolve, 500));
            setStatus('success');
            setStatusMessage(
                `Thanks, ${formData.name.trim()}! You are on the ATHAMARU early access waitlist as a ${formData.role.toLowerCase()} (local demo confirmation).`
            );
            setFormData(INITIAL_FORM);
            return;
            }

            try {
            const response = await fetch(`https://formspree.io/f/${YOUR_FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                },
                body: JSON.stringify({
                name: formData.name.trim(),
                email: formData.email.trim(),
                role: formData.role,
                message: formData.message.trim(),
                privacyAccepted: true,
                }),
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setStatus('success');
            setStatusMessage(
                `Thanks, ${formData.name.trim()}! Your early access request has been received. We will contact ${formData.email.trim()} when student testing opens.`
            );
            setFormData(INITIAL_FORM);
            } catch {
            setStatus('error');
            setStatusMessage(
                'We could not submit the form right now. Try again or email hello@athamaru.com.'
            );
            }
        };

        return (
            <section id="waitlist" className="bg-bg py-16 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
                <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm lg:grid lg:grid-cols-12">
                {/* Left Petrol Teal Brand Panel */}
                <div className="flex flex-col justify-between bg-primary p-6 text-surface sm:p-8 lg:col-span-5">
                    <div>
                    <p className="text-sm font-medium text-surface-alt">
                        Early Access &amp; Student Feedback
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-surface md:text-3xl">
                        Join the ATHAMARU student waitlist
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-surface/90">
                        Be among the first Sri Lankan university students to test our
                        Phase 1 web prototype, list pre-loved textbooks or electronics,
                        and help shape a more transparent campus marketplace.
                    </p>
                    </div>

                    <ul className="mt-8 space-y-2.5 border-t border-surface-alt/20 pt-6 text-sm text-surface">
                    <li>• Free to join for university buyers and sellers</li>
                    <li>• Built exclusively for Sri Lanka (LKR)</li>
                    <li>• Zero spam — updates only for early access testing</li>
                    </ul>
                </div>

                {/* Right Form Panel */}
                <div className="p-6 sm:p-8 lg:col-span-7">
                    {status === 'success' ? (
                    <div
                        role="status"
                        aria-live="polite"
                        className="flex h-full flex-col items-start justify-center rounded-xl border border-success bg-surface p-6"
                    >
                        <div className="flex items-center gap-2 text-success">
                        <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
                        <h3 className="text-xl font-semibold text-success">
                            You’re on the list
                        </h3>
                        </div>
                        <p className="mt-3 text-base leading-relaxed text-ink">
                        {statusMessage}
                        </p>
                        <button
                        type="button"
                        onClick={() => {
                            setStatus('idle');
                            setStatusMessage('');
                        }}
                        className="mt-6 inline-flex min-h-[44px] items-center rounded-lg border border-primary bg-surface px-5 py-2.5 text-base font-semibold text-primary transition-colors hover:bg-bg"
                        >
                        Submit another response
                        </button>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        {status === 'error' && statusMessage && (
                        <div
                            role="alert"
                            className="flex items-start gap-2.5 rounded-lg border border-danger bg-surface px-4 py-3 text-sm font-medium text-danger"
                        >
                            <AlertCircle
                            className="mt-0.5 h-5 w-5 shrink-0"
                            aria-hidden="true"
                            />
                            <span>{statusMessage}</span>
                        </div>
                        )}

                        {/* Full Name */}
                        <div>
                        <label
                            htmlFor="waitlist-name"
                            className="block text-sm font-semibold text-ink"
                        >
                            Full name (required)
                        </label>
                        <input
                            id="waitlist-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g., Sinali Premarathne"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`mt-1.5 block min-h-[44px] w-full rounded-lg border bg-surface px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted ${
                            errors.name ? 'border-danger' : 'border-line-input'
                            }`}
                        />
                        {errors.name && (
                            <p
                            id="name-error"
                            className="mt-1.5 flex items-center gap-1.5 text-sm text-danger"
                            >
                            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>{errors.name}</span>
                            </p>
                        )}
                        </div>

                        {/* University Email */}
                        <div>
                        <label
                            htmlFor="waitlist-email"
                            className="block text-sm font-semibold text-ink"
                        >
                            University email (required)
                        </label>
                        <input
                            id="waitlist-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g., name@iit.ac.lk"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={
                            errors.email ? 'email-error' : 'email-help'
                            }
                            className={`mt-1.5 block min-h-[44px] w-full rounded-lg border bg-surface px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted ${
                            errors.email ? 'border-danger' : 'border-line-input'
                            }`}
                        />
                        {errors.email ? (
                            <p
                            id="email-error"
                            className="mt-1.5 flex items-center gap-1.5 text-sm text-danger"
                            >
                            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                            </p>
                        ) : (
                            <p id="email-help" className="mt-1.5 text-sm text-ink-muted">
                            We use this only to invite you to student prototype testing.
                            </p>
                        )}
                        </div>

                        {/* Role Selection */}
                        <fieldset>
                        <legend className="block text-sm font-semibold text-ink">
                            I plan to join as a (required)
                        </legend>
                        <div className="mt-2 grid grid-cols-3 gap-3">
                            {['Buyer', 'Seller', 'Both'].map((roleOption) => {
                            const checked = formData.role === roleOption;
                            return (
                                <label
                                key={roleOption}
                                className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border px-3 py-2 text-base font-semibold transition-colors ${
                                    checked
                                    ? 'border-primary bg-surface-alt text-primary'
                                    : 'border-line-input bg-surface text-ink-muted hover:border-primary hover:text-primary'
                                }`}
                                >
                                <input
                                    type="radio"
                                    name="role"
                                    value={roleOption}
                                    checked={checked}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                {roleOption}
                                </label>
                            );
                            })}
                        </div>
                        </fieldset>

                        {/* Optional Message */}
                        <div>
                        <label
                            htmlFor="waitlist-message"
                            className="block text-sm font-semibold text-ink"
                        >
                            Message (optional)
                        </label>
                        <textarea
                            id="waitlist-message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="What items would you like to buy or sell on campus?"
                            className="mt-1.5 block w-full rounded-lg border border-line-input bg-surface px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted"
                        />
                        </div>

                        {/* Mandatory Privacy Notice Checkbox */}
                        <div>
                        <div className="flex items-start gap-3">
                            <input
                            id="waitlist-privacy"
                            name="privacyAccepted"
                            type="checkbox"
                            required
                            checked={formData.privacyAccepted}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.privacyAccepted)}
                            aria-describedby={
                                errors.privacyAccepted ? 'privacy-error' : undefined
                            }
                            className="mt-0.5 h-5 w-5 shrink-0 rounded border border-line-input accent-primary"
                            />
                            <label
                            htmlFor="waitlist-privacy"
                            className="text-sm leading-relaxed text-ink-muted"
                            >
                            I agree to the{' '}
                            <button
                                type="button"
                                onClick={onOpenPrivacy}
                                className="font-semibold text-accent-dark underline underline-offset-2 hover:text-primary"
                            >
                                Privacy Notice
                            </button>{' '}
                            and consent to my contact details being used for ATHAMARU
                            waitlist updates and academic prototype feedback (required).
                            </label>
                        </div>
                        {errors.privacyAccepted && (
                            <p
                            id="privacy-error"
                            className="mt-1.5 flex items-center gap-1.5 text-sm text-danger"
                            >
                            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>{errors.privacyAccepted}</span>
                            </p>
                        )}
                        </div>

                        {/* Primary Submit Button */}
                        <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-surface transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-muted"
                        >
                        {status === 'submitting' ? (
                            <>
                            <Loader2
                                className="h-5 w-5 animate-spin"
                                aria-hidden="true"
                            />
                            Please wait...
                            </>
                        ) : (
                            <>
                            Join Early Access Waitlist
                            <ArrowRight className="h-5 w-5" aria-hidden="true" />
                            </>
                        )}
                        </button>
                    </form>
                    )}
                </div>
                </div>
            </div>
            </section>
        );
}
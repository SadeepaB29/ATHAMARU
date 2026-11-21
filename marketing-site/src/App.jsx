import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProblemSolution from './components/ProblemSolution.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Team from './components/Team.jsx';
import WaitlistForm from './components/WaitlistForm.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      {/* WCAG 2.2 AA Skip-to-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:inline-flex focus:min-h-[44px] focus:items-center focus:rounded-lg focus:bg-primary focus:px-5 focus:py-2.5 focus:text-base focus:font-semibold focus:text-surface focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Team />
        <WaitlistForm onOpenPrivacy={() => setIsPrivacyOpen(true)} />
        <FAQ />
      </main>

      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
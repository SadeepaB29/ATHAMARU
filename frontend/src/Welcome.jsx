import React from 'react';
import './Welcome.css';
import athamaruLogo from './assets/designsandbackgrounds/Athamaru logo with transparent background.png';
import welcomeBackdrop from './assets/designsandbackgrounds/athamaru-figma-layers/sign-in/01-clean-teal-backdrop.png';
import welcomeGlassTop from './assets/designsandbackgrounds/Welcome Page/Glass/Top-left.png';
import welcomeGlassBottom from './assets/designsandbackgrounds/Welcome Page/Glass/Bottom-right.png';
import welcomeButton from './assets/designsandbackgrounds/Welcome Page/Button.png';
import welcomeBenefits from './assets/designsandbackgrounds/Welcome Page/Benefits.png';

export default function Welcome({ onGetStarted }) {
  return (
    <main className="welcome-page">
      <div className="welcome-art" aria-hidden="true">
        <img className="welcome-art-backdrop" src={welcomeBackdrop} alt="" />
        <img className="welcome-glass welcome-glass-top" src={welcomeGlassTop} alt="" />
        <img className="welcome-glass welcome-glass-bottom" src={welcomeGlassBottom} alt="" />
      </div>
      <div className="welcome-content">
        <div className="welcome-logo">
          <img src={athamaruLogo} alt="ATHAMARU" className="welcome-logo-image" />
        </div>
        <p className="welcome-tagline">Nothing useful should go unused<span>.</span></p>
        <button className="get-started-btn" type="button" onClick={onGetStarted} aria-label="Get started">
          <img src={welcomeButton} alt="" aria-hidden="true" />
        </button>
        <img className="welcome-benefits" src={welcomeBenefits} alt="Extend product life. Make it more affordable. Reduce waste together." />
      </div>
    </main>
  );
}

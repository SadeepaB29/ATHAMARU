import React from 'react';
import './Welcome.css';
import athamaruLogo from './assets/designsandbackgrounds/athamaru logo with transparent background.png';
export default function Welcome() {
    return (
        <main className="welcome-page">

            <div className="welcome-content">

                {/* ATHAMARU LOGO */}
                <div className="welcome-logo">
                    <img
                        src={athamaruLogo}
                        alt="ATHAMARU Logo"
                        className="welcome-logo-image"
                    />
                </div>

                {/* TAGLINE */}
                <p className="welcome-tagline">
                    Nothing useful should go unused<span>.</span>
                </p>

                {/* GET STARTED BUTTON */}
                <button className="get-started-btn" type="button">
                    <span>Get started</span>
                    <span className="arrow">→</span>
                </button>

                {/* BENEFITS */}
                <div className="welcome-benefits">

                    <div className="benefit">
                        <span className="benefit-icon">♻</span>
                        <span>Extend<br />product life</span>
                    </div>

                    <div className="benefit-divider"></div>

                    <div className="benefit">
                        <span className="benefit-icon">♧</span>
                        <span>Make it more<br />affordable</span>
                    </div>

                    <div className="benefit-divider"></div>

                    <div className="benefit">
                        <span className="benefit-icon">♧</span>
                        <span>Reduce<br />waste together</span>
                    </div>

                </div>

            </div>

        </main>
    );
}
import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from './Welcome';
import AuthPage from './AuthPage';

function getScreenFromHash() {
  if (window.location.hash === '#/sign-up') return 'signup';
  if (window.location.hash === '#/sign-in') return 'signin';
  return 'welcome';
}

export default function App() {
  const [screen, setScreen] = useState(getScreenFromHash);

  useEffect(() => {
    const syncScreen = () => setScreen(getScreenFromHash());
    window.addEventListener('hashchange', syncScreen);
    return () => window.removeEventListener('hashchange', syncScreen);
  }, []);

  const navigate = (nextScreen) => {
    const hash = nextScreen === 'signup'
      ? '#/sign-up'
      : nextScreen === 'signin'
        ? '#/sign-in'
        : '';

    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    setScreen(nextScreen);
  };

  if (screen === 'welcome') {
    return <Welcome onGetStarted={() => navigate('signin')} />;
  }

  return <AuthPage mode={screen} onNavigate={navigate} />;
}

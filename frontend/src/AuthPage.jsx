import React, { useState } from 'react';
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react';
import './AuthPage.css';

import athamaruLogo from './assets/designsandbackgrounds/Athamaru logo with transparent background.png';
import googleLogo from './assets/designsandbackgrounds/google-g.svg';
import signInBackdrop from './assets/designsandbackgrounds/athamaru-figma-layers/sign-in/01-clean-teal-backdrop.png';
import signInGlassTop from './assets/designsandbackgrounds/athamaru-figma-layers/sign-in/02-glass-top-left.png';
import signInObjects from './assets/designsandbackgrounds/athamaru-figma-layers/sign-in/03-objects-and-wood-table.png';
import signInGlassBottom from './assets/designsandbackgrounds/athamaru-figma-layers/sign-in/04-glass-bottom-right.png';
import signUpBackdrop from './assets/designsandbackgrounds/athamaru-figma-layers/create-account/01-clean-teal-backdrop.png';
import signUpGlassTop from './assets/designsandbackgrounds/athamaru-figma-layers/create-account/02-glass-top-left.png';
import signUpGlassBehind from './assets/designsandbackgrounds/athamaru-figma-layers/create-account/03-round-glass-behind-objects.png';
import signUpObjects from './assets/designsandbackgrounds/athamaru-figma-layers/create-account/04-objects-and-wood-table.png';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Brand({ layout = 'signin', onClick }) {
  return (
    <a
      className={`auth-brand auth-brand-${layout}`}
      href="#/"
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      aria-label="ATHAMARU home"
    >
      <img src={athamaruLogo} alt="ATHAMARU" />
    </a>
  );
}

function InputField({ id, label, placeholder, icon: Icon, value, onChange, type = 'text', error, autoComplete, showPassword, onTogglePassword }) {
  return (
    <div className={`auth-field ${label ? 'auth-field-labelled' : 'auth-field-plain'}`}>
      {label && <label className="auth-label" htmlFor={id}>{label}</label>}
      <div className={`auth-input-wrap ${error ? 'has-error' : ''}`}>
        <Icon className="auth-input-icon" size={23} strokeWidth={1.65} aria-hidden="true" />
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          required
        />
        {onTogglePassword && (
          <button className="auth-visibility-btn" type="button" onClick={onTogglePassword} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? <EyeOff size={22} strokeWidth={1.7} /> : <Eye size={22} strokeWidth={1.7} />}
          </button>
        )}
      </div>
      {error && <p className="auth-field-error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  );
}

function GoogleButton({ onClick }) {
  return (
    <button className="auth-google-btn" type="button" onClick={onClick}>
      <img className="auth-google-icon" src={googleLogo} alt="" aria-hidden="true" />
      <span>Continue with Google</span>
    </button>
  );
}

function ArtworkLayers({ mode }) {
  const layers = mode === 'signup'
    ? [
        { src: signUpBackdrop, name: 'Teal textured backdrop' },
        { src: signUpGlassTop, name: 'Top-left glass detail' },
        { src: signUpGlassBehind, name: 'Decorative glass behind objects' },
        { src: signUpObjects, name: 'Plant, books, camera, headphones and wooden table' },
      ]
    : [
        { src: signInBackdrop, name: 'Teal textured backdrop' },
        { src: signInGlassTop, name: 'Top-left glass detail' },
        { src: signInObjects, name: 'Camera, books, headphones and wooden table' },
        { src: signInGlassBottom, name: 'Bottom-right glass detail' },
      ];

  return (
    <div className={`auth-art-layer-stack auth-art-layer-stack-${mode}`} aria-hidden="true">
      {layers.map((layer, index) => (
        <img
          className="auth-art-layer"
          key={layer.name}
          src={layer.src}
          alt=""
          draggable="false"
          style={{ zIndex: index }}
        />
      ))}
    </div>
  );
}

export default function AuthPage({ mode = 'signin', onNavigate }) {
  const isSignUp = mode === 'signup';
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
    rememberMe: false,
  });
  const [visible, setVisible] = useState({ password: false, confirmPassword: false });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setMessage('');
  };

  const validate = () => {
    const next = {};
    if (isSignUp && !values.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!emailPattern.test(values.email.trim())) next.email = 'Enter a valid email address.';
    if (!values.password) next.password = 'Please enter your password.';
    else if (isSignUp && values.password.length < 8) next.password = 'Use at least 8 characters.';
    if (isSignUp && values.confirmPassword !== values.password) next.confirmPassword = 'Your passwords do not match.';
    if (isSignUp && !values.acceptedTerms) next.acceptedTerms = 'Please accept the Terms and Conditions.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');
    if (!validate()) return;
    setMessage('Your details are valid. Authentication has not been connected yet.');
  };

  const togglePassword = (field) => {
    setVisible((current) => ({ ...current, [field]: !current[field] }));
  };

  const handleGoogle = () => setMessage('Google sign-in will be available when authentication is connected.');

  return (
    <main className={`auth-page ${isSignUp ? 'auth-page-signup' : 'auth-page-signin'}`}>
      <section className="auth-art-panel" aria-label="ATHAMARU marketplace">
        <ArtworkLayers mode={isSignUp ? 'signup' : 'signin'} />
        {isSignUp ? (
          <>
            <Brand layout="signup" onClick={() => onNavigate('welcome')} />
            <div className="auth-art-copy auth-art-copy-signup">
              <h2>Your next<br />chapter<br />starts here.</h2>
              <p>Join Sri Lanka’s circular marketplace to buy, sell, swap, rent, donate and extend the life of useful things.</p>
            </div>
          </>
        ) : (
          <>
            <Brand layout="signin" onClick={() => onNavigate('welcome')} />
            <div className="auth-art-copy auth-art-copy-signin">
              <h2>Another find.<br />Another beginning.</h2>
              <p>Good things deserve another life.</p>
            </div>
          </>
        )}
      </section>

      <section className="auth-form-panel">
        <div className="auth-form-container">
          <header className="auth-heading">
            <h1>{isSignUp ? 'Create your account' : 'Welcome back.'}</h1>
            <p>{isSignUp ? "It's quick, easy and free." : 'Your next favourite is waiting.'}</p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {isSignUp ? (
              <>
                <InputField id="fullName" label="Full name" placeholder="Enter your full name" icon={UserRound} value={values.fullName} onChange={update} autoComplete="name" error={errors.fullName} />
                <InputField id="email" label="Email" placeholder="Enter your email address" icon={Mail} value={values.email} onChange={update} type="email" autoComplete="email" error={errors.email} />
                <InputField id="password" label="Password" placeholder="Create a password" icon={LockKeyhole} value={values.password} onChange={update} type={visible.password ? 'text' : 'password'} autoComplete="new-password" error={errors.password} showPassword={visible.password} onTogglePassword={() => togglePassword('password')} />
                <InputField id="confirmPassword" label="Confirm password" placeholder="Confirm your password" icon={LockKeyhole} value={values.confirmPassword} onChange={update} type={visible.confirmPassword ? 'text' : 'password'} autoComplete="new-password" error={errors.confirmPassword} showPassword={visible.confirmPassword} onTogglePassword={() => togglePassword('confirmPassword')} />
                <div className="auth-terms">
                  <label className="auth-checkbox-label">
                    <input type="checkbox" name="acceptedTerms" checked={values.acceptedTerms} onChange={update} aria-invalid={Boolean(errors.acceptedTerms)} />
                    <span>I agree to the <a href="#terms" onClick={(event) => event.preventDefault()}>Terms of Service</a> and <a href="#privacy" onClick={(event) => event.preventDefault()}>Privacy Policy</a>.</span>
                  </label>
                  {errors.acceptedTerms && <p className="auth-field-error" role="alert">{errors.acceptedTerms}</p>}
                </div>
              </>
            ) : (
              <>
                <InputField id="email" placeholder="Email address" icon={Mail} value={values.email} onChange={update} type="email" autoComplete="email" error={errors.email} />
                <InputField id="password" placeholder="Password" icon={LockKeyhole} value={values.password} onChange={update} type={visible.password ? 'text' : 'password'} autoComplete="current-password" error={errors.password} showPassword={visible.password} onTogglePassword={() => togglePassword('password')} />
                <div className="auth-form-options">
                  <label className="auth-checkbox-label">
                    <input type="checkbox" name="rememberMe" checked={values.rememberMe} onChange={update} />
                    <span>Remember me</span>
                  </label>
                  <button className="auth-text-link" type="button" onClick={() => setMessage('Password reset will be available when authentication is connected.')}>Forgot password?</button>
                </div>
              </>
            )}

            {message && <p className="auth-status" role="status">{message}</p>}

            <button className="auth-submit-btn" type="submit">
              <span>{isSignUp ? 'Create account' : 'Log in'}</span>
              <ArrowRight className="auth-submit-arrow" size={30} strokeWidth={1.45} aria-hidden="true" />
            </button>
          </form>

          <div className="auth-divider"><span />or<span /></div>
          <GoogleButton onClick={handleGoogle} />

          <p className="auth-switch">
            {isSignUp ? 'Already a member?' : 'New to Athamaru?'}{' '}
            <button type="button" onClick={() => onNavigate(isSignUp ? 'signin' : 'signup')}>
              {isSignUp ? 'Log in' : 'Create an account'}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

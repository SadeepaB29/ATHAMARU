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
import signInArtwork from './assets/designsandbackgrounds/athamaru-sign-in-background.jpg';
import signUpArtwork from './assets/designsandbackgrounds/athamaru-create-account-background.jpg';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({ id, label, icon: Icon, type = 'text', value, onChange, placeholder, autoComplete, error, trailing }) {
  return (
    <div className="auth-field">
      <label className="auth-label" htmlFor={id}>{label}</label>
      <div className={`auth-input-wrap ${error ? 'has-error' : ''}`}>
        <Icon className="auth-input-icon" size={21} strokeWidth={1.7} aria-hidden="true" />
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
        {trailing}
      </div>
      {error && <p className="auth-field-error" id={`${id}-error`} role="alert">{error}</p>}
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
    rememberMe: true,
  });
  const [visible, setVisible] = useState({ password: false, confirmPassword: false });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setMessage('');
  };

  const validate = () => {
    const next = {};
    if (isSignUp && !values.fullName.trim()) {
      next.fullName = 'Please enter your full name.';
    }
    if (!emailPattern.test(values.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    if (!values.password) {
      next.password = 'Please enter your password.';
    } else if (isSignUp && values.password.length < 8) {
      next.password = 'Your password must be at least 8 characters.';
    }
    if (isSignUp && values.confirmPassword !== values.password) {
      next.confirmPassword = 'Your passwords do not match.';
    }
    if (isSignUp && !values.acceptedTerms) {
      next.acceptedTerms = 'Please agree to the Terms and Conditions.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');
    if (!validate()) return;
    setMessage('Your details look good. Authentication is not connected yet, so no account has been created.');
  };

  const toggleVisibility = (field) => {
    setVisible((current) => ({ ...current, [field]: !current[field] }));
  };

  const artwork = isSignUp ? signUpArtwork : signInArtwork;

  return (
    <main className={`auth-page ${isSignUp ? 'auth-page-signup' : 'auth-page-signin'}`}>
      <section
        className="auth-art-panel"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(5, 47, 44, .08), rgba(5, 47, 44, .08)), url("${artwork}")` }}
        aria-label="ATHAMARU circular marketplace"
      >
        <a className="auth-brand" href="#/" onClick={(event) => { event.preventDefault(); onNavigate('welcome'); }} aria-label="ATHAMARU home">
          <img src={athamaruLogo} alt="ATHAMARU" />
        </a>
        <div className="auth-art-copy">
          <h2>Your next chapter starts here.</h2>
          <p>Join Sri Lanka’s circular marketplace to buy, sell, swap, rent, donate and extend the life of useful things.</p>
        </div>
        <span className="auth-art-caption">A more thoughtful way to pass things on.</span>
      </section>

      <section className="auth-form-panel">
        <div className="auth-form-container">
          <div className="auth-mobile-brand">
            <img src={athamaruLogo} alt="ATHAMARU" />
          </div>

          <header className="auth-heading">
            <p className="auth-eyebrow">ATHAMARU ACCOUNT</p>
            <h1>{isSignUp ? 'Create your account' : 'Welcome back'}</h1>
            <p className="auth-subtitle">
              {isSignUp
                ? 'Join ATHAMARU and give useful things a new life.'
                : 'Sign in to continue your journey with ATHAMARU.'}
            </p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {isSignUp && (
              <Field
                id="fullName"
                label="Full name"
                icon={UserRound}
                value={values.fullName}
                onChange={update}
                placeholder="Enter your full name"
                autoComplete="name"
                error={errors.fullName}
              />
            )}

            <Field
              id="email"
              label="Email address"
              icon={Mail}
              type="email"
              value={values.email}
              onChange={update}
              placeholder="Enter your email address"
              autoComplete="email"
              error={errors.email}
            />

            <Field
              id="password"
              label="Password"
              icon={LockKeyhole}
              type={visible.password ? 'text' : 'password'}
              value={values.password}
              onChange={update}
              placeholder={isSignUp ? 'Create a password (8+ characters)' : 'Enter your password'}
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              error={errors.password}
              trailing={
                <button className="auth-visibility-btn" type="button" onClick={() => toggleVisibility('password')} aria-label={visible.password ? 'Hide password' : 'Show password'}>
                  {visible.password ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              }
            />

            {isSignUp && (
              <Field
                id="confirmPassword"
                label="Confirm password"
                icon={LockKeyhole}
                type={visible.confirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={update}
                placeholder="Confirm your password"
                autoComplete="new-password"
                error={errors.confirmPassword}
                trailing={
                  <button className="auth-visibility-btn" type="button" onClick={() => toggleVisibility('confirmPassword')} aria-label={visible.confirmPassword ? 'Hide confirm password' : 'Show confirm password'}>
                    {visible.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                }
              />
            )}

            {!isSignUp ? (
              <div className="auth-form-options">
                <label className="auth-checkbox-label">
                  <input type="checkbox" name="rememberMe" checked={values.rememberMe} onChange={update} />
                  <span>Remember me</span>
                </label>
                <button className="auth-text-link" type="button" onClick={() => setMessage('Password reset is not connected yet. Please contact the ATHAMARU team for help.')}>
                  Forgot password?
                </button>
              </div>
            ) : (
              <div className="auth-terms">
                <label className="auth-checkbox-label">
                  <input type="checkbox" name="acceptedTerms" checked={values.acceptedTerms} onChange={update} aria-invalid={Boolean(errors.acceptedTerms)} />
                  <span>I agree to the <a href="#terms" onClick={(event) => event.preventDefault()}>Terms and Conditions</a>.</span>
                </label>
                {errors.acceptedTerms && <p className="auth-field-error" role="alert">{errors.acceptedTerms}</p>}
              </div>
            )}

            {message && <p className="auth-status" role="status">{message}</p>}

            <button className="auth-submit-btn" type="submit">
              <span>{isSignUp ? 'Create account' : 'Sign in'}</span>
              <ArrowRight size={23} strokeWidth={1.7} aria-hidden="true" />
            </button>
          </form>

          <p className="auth-switch">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button type="button" onClick={() => onNavigate(isSignUp ? 'signin' : 'signup')}>
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>
          <button className="auth-back-home" type="button" onClick={() => onNavigate('welcome')}>
            Back to welcome page
          </button>
        </div>
      </section>
    </main>
  );
}

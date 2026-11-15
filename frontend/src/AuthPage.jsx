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

import signInArtwork from './assets/designsandbackgrounds/athamaru-sign-in-background.jpg';
import signUpArtwork from './assets/designsandbackgrounds/athamaru-create-account-background.jpg';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Brand({ layout = 'stacked', onClick }) {
  return (
    <button className={`auth-brand auth-brand-${layout}`} type="button" onClick={onClick} aria-label="ATHAMARU home">
      <span className="auth-brand-symbol" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="auth-brand-word">athamaru</span>
    </button>
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
            {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
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
      <span className="auth-google-g" aria-hidden="true">G</span>
      <span>Continue with Google</span>
    </button>
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
      <section
        className="auth-art-panel"
        style={{ backgroundImage: `url("${isSignUp ? signUpArtwork : signInArtwork}")` }}
        aria-label="ATHAMARU marketplace"
      >
        {isSignUp ? (
          <>
            <Brand layout="horizontal" onClick={() => onNavigate('welcome')} />
            <div className="auth-art-copy auth-art-copy-signup">
              <h2>Your next<br />chapter<br />starts here.</h2>
              <p>Join Sri Lanka’s circular marketplace to buy, sell, swap, rent, donate and extend the life of useful things.</p>
            </div>
          </>
        ) : (
          <>
            <Brand layout="stacked" onClick={() => onNavigate('welcome')} />
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
              <ArrowRight size={25} strokeWidth={1.7} aria-hidden="true" />
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

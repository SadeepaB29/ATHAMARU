import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    location: 'Colombo',
    interest: 'Thrift (Buy pre-owned goods)'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting user data to Athamaru:", formData);
    alert("Welcome to Athamaru! Registration completed successfully.");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center p-4 font-sans w-full">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden border border-emerald-900/20 text-left">

        {/* Top Header / Step Counter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-600 text-white font-bold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
              Athamaru
            </span>
            <span className="text-xs text-gray-400 font-medium">Step {step} of 4</span>
          </div>
          <span className="text-xs text-emerald-700 font-semibold">Circular Marketplace</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-2 rounded-full mb-8 overflow-hidden">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-400 ease-in-out"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* STEP 1: Welcome & Account Credentials */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your next chapter starts here.</h2>
            <p className="text-gray-600 mb-6 text-sm">Join Sri Lanka's circular marketplace to buy, sell, swap, and rent. Nothing useful should go unused.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm text-gray-900 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm text-gray-900 bg-white"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.email || !formData.password}
                className="w-full mt-2 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 transition shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Personal Details */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us who you are</h2>
            <p className="text-gray-600 mb-6 text-sm">Help other community members trust and recognize you.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Sadeepa Bandara"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm text-gray-900 bg-white"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-sm cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.fullName}
                  className="w-2/3 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 transition text-sm shadow-lg shadow-emerald-600/20 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Location Setup */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Where are you located?</h2>
            <p className="text-gray-600 mb-6 text-sm">We'll show you relevant items, thrift options, and swaps nearby.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">City / Region</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white text-sm text-gray-900"
                >
                  <option value="Colombo">Colombo</option>
                  <option value="Moratuwa">Moratuwa</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Hambantota">Hambantota</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-sm cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-2/3 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm shadow-lg shadow-emerald-600/20 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Primary Intent */}
        {step === 4 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What brings you here?</h2>
            <p className="text-gray-600 mb-5 text-sm">Choose your primary focus to personalize your marketplace experience.</p>

            <div className="space-y-2.5 mb-6">
              {[
                'Thrift (Buy pre-owned goods)',
                'Swap items with others',
                'Rent equipment or gear',
                'Donate unused items'
              ].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition text-sm ${formData.interest === option ? 'border-emerald-600 bg-emerald-50 font-medium text-emerald-950' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                >
                  <input
                    type="radio"
                    name="interest"
                    value={option}
                    checked={formData.interest === option}
                    onChange={handleChange}
                    className="text-emerald-600 focus:ring-emerald-500 mr-3 h-4 w-4"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-sm cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                Complete Sign Up
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
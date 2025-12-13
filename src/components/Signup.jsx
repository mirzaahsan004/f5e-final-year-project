// src/components/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !email || !password || !confirm) {
      setError("Please complete all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    // placeholder: call API to create account
    alert(`Account created (demo): ${fullName} — ${email}`);
    // after successful registration, navigate to /login
    navigate("/login");
  }

  return (
    <div className="page-wrapper">
      <div className="login-card" role="main" aria-labelledby="signup-heading">
        <div className="login-top">
          <svg className="brain-small" width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="g3" x1="0" x2="1">
                <stop offset="0" stopColor="var(--neon-cyan-start)" />
                <stop offset="1" stopColor="var(--neon-cyan-end)" />
              </linearGradient>
            </defs>
            <path d="M22 9c-4 0-8 4-8 9v4" stroke="url(#g3)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 9c4 0 8 4 8 9v4" stroke="url(#g3)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 34c0 7-2 13-2 17s4 4 6 4 4-2 6-4 2-9 2-17" stroke="url(#g3)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 34c0 7 2 13 2 17s-4 4-6 4-4-2-6-4-2-9-2-17" stroke="url(#g3)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h2 id="signup-heading" className="login-title">Create Account</h2>
          <p className="login-sub">Register to use AI Resume Analyzer — quick, free, and secure.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {error && <div className="login-error">{error}</div>}

          <label className="field">
            <span className="label-text">Full name</span>
            <input className="input" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" required />
          </label>

          <label className="field">
            <span className="label-text">Email</span>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          </label>

          <label className="field">
            <span className="label-text">Password</span>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </label>

          <label className="field">
            <span className="label-text">Confirm password</span>
            <input className="input" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" required />
          </label>

          <button className="btn btn-primary" type="submit">Create account</button>

          <div className="create-account">
            <span>Already have an account?</span>
            <Link className="signup-link" to="/login">Sign in →</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// src/components/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // no auth - direct navigation for frontend testing
    navigate("/dashboard");
  }

  return (
    <div className="page-wrapper">
      <div className="login-card" role="main" aria-labelledby="login-heading">
        <div className="login-top">
          {/* svg brain */}
          <svg className="brain-small" width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0" stopColor="var(--neon-cyan-start)" />
                <stop offset="1" stopColor="var(--neon-cyan-end)" />
              </linearGradient>
            </defs>
            <path d="M22 9c-4 0-8 4-8 9v4" stroke="url(#g2)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 9c4 0 8 4 8 9v4" stroke="url(#g2)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 34c0 7-2 13-2 17s4 4 6 4 4-2 6-4 2-9 2-17" stroke="url(#g2)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 34c0 7 2 13 2 17s-4 4-6 4-4-2-6-4-2-9-2-17" stroke="url(#g2)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h2 id="login-heading" className="login-title">Sign in</h2>
          <p className="login-sub">Enter your credentials to access AI Resume Analyzer.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="label-text">Email</span>
            <input className="input" type="email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>

          <label className="field">
            <span className="label-text">Password</span>
            <input className="input" type="password" placeholder="••••••••" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </label>

          <button className="btn btn-primary" type="submit">Sign In</button>

          <div className="login-foot">
            <label className="remember"><input type="checkbox" /> Remember me</label>
            <a className="forgot" href="#!">Forgot password?</a>
          </div>

          <div className="create-account">
            <span>Don’t have an account?</span>
            <Link className="signup-link" to="/signup">Create an account →</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

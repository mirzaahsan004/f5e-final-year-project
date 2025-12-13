// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="home-card" role="main" aria-labelledby="ai-title">
        <div className="card-inner">
          <div className="logo-wrap" aria-hidden="true">
            <svg className="brain" width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="var(--neon-cyan-start)" />
                  <stop offset="1" stopColor="var(--neon-cyan-end)" />
                </linearGradient>
              </defs>
              <path d="M22 9c-4 0-8 4-8 9v4" stroke="url(#g1)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M42 9c4 0 8 4 8 9v4" stroke="url(#g1)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 34c0 7-2 13-2 17s4 4 6 4 4-2 6-4 2-9 2-17" stroke="url(#g1)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M42 34c0 7 2 13 2 17s-4 4-6 4-4-2-6-4-2-9-2-17" stroke="url(#g1)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 id="ai-title" className="card-title">AI RESUME ANALYZER</h1>

          <p className="card-sub">
            Analyze and optimize your resume with AI-powered insights — highlight strengths, suggest improvements,
            and increase your interview chances.
          </p>

          <div className="card-buttons">
            <Link to="/login" className="btn-link">
              <button className="btn btn-signin" type="button">
                <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="7" y="5" width="10" height="14" rx="2" stroke="#042" strokeWidth="1.2" fill="none" />
                </svg>
                <span>Sign In</span>
              </button>
            </Link>

            <button className="btn btn-getstarted" type="button" onClick={() => { /* add action later */ }}>
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2l1.6 3.9L17 7l-3.4 1.1L12 12l-1.6-3.9L7 7l3.4-1.1L12 2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

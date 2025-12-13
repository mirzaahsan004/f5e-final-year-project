// src/components/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const featureCards = [
  {
    id: 1,
    title: "Upload CV",
    subtitle: "Upload your resume for AI-powered analysis",
    btnText: "Get Started",
    btnGradient: "linear-gradient(90deg, #00dfff, #7ad8ff)",
    cardClass: "card-cyan",
    route: "/upload",
  },
  {
    id: 2,
    title: "Job Keywords", 
    subtitle: "Enter job queries to optimize your resume",
    btnText: "Get Started",
    btnGradient: "linear-gradient(90deg, #9b6bff, #2ee6b8)",
    cardClass: "card-purple",
    route: "/jobsearch",
  },
  {
    id: 3,
    title: "Job Matches",
    subtitle: "View AI-matched job recommendations",
    btnText: "Get Started", 
    btnGradient: "linear-gradient(90deg, #2ee6b8, #ff8c8c)",
    cardClass: "card-green",
    route: "/matches",
  },
];

const recentActivity = [
  {
    title: "Resume Analysis",
    subtitle: "Software Engineer - Google", 
    score: "95%",
    time: "2 hours ago",
  },
  {
    title: "Keyword Optimization",
    subtitle: "React Developer - Microsoft",
    score: "87%",
    time: "1 day ago",
  },
  {
    title: "CV Upload",
    subtitle: "Updated resume.pdf",
    score: "92%", 
    time: "3 days ago",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="dashboard-page" role="main">
      <header className="dash-header">
        <div className="welcome">
          <h2 className="welcome-title">Welcome Back</h2>
          <p className="welcome-sub">
            Ready to optimize your career with AI insights?
          </p>
        </div>

        <nav className="top-actions" aria-label="top-navigation">
          <button className="nav-item">Skills</button>
          <button className="nav-item">Pitch</button>
          <button className="nav-item">Settings</button>
          <button className="nav-item">Logout</button>
        </nav>
      </header>

      {/* Features row */}
      <section className="features-grid" aria-label="features">
        {featureCards.map((c) => (
          <article className={`feature-card ${c.cardClass}`} key={c.id}>
            <div className="feature-icon"></div>
            <h3 className="feature-title">{c.title}</h3>
            <p className="feature-sub">{c.subtitle}</p>
            <button
              className="feature-btn"
              style={{ background: c.btnGradient }}
              onClick={() => navigate(c.route)}
            >
              {c.btnText}
            </button>
          </article>
        ))}
      </section>

      {/* Lower section */}
      <section className="lower-grid" aria-label="lower">
        <div className="recent-card">
          <div className="card-header">
            <h4>Recent Activity</h4>
            <button className="view-all">View All</button>
          </div>

          <ul className="activity-list">
            {recentActivity.map((item, idx) => (
              <li className="activity-item" key={idx}>
                <div className="act-left">
                  <div className="act-icon"></div>
                  <div className="act-text">
                    <div className="act-title">{item.title}</div>
                    <div className="act-sub">{item.subtitle}</div>
                  </div>
                </div>

                <div className="act-right">
                  <div className="act-score">{item.score}</div>
                  <div className="act-time">{item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="stats-card">
          <h4 className="stats-title">Quick Stats</h4>

          <div className="score-display">
            <div className="score-text">91%</div>
            <div className="score-label">Overall Score</div>
          </div>

          <div className="metrics">
            <div className="metric">
              <div className="metric-num">12</div>
              <div className="metric-sub">Analyses Complete</div>
            </div>
            <div className="metric">
              <div className="metric-num highlight">5</div>
              <div className="metric-sub">CVs Optimized</div>
            </div>
          </div>

          <button className="report-btn">View Detailed Report</button>
        </aside>
      </section>
    </main>
  );
}
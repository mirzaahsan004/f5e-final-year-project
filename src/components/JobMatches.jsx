// src/components/JobMatches.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobMatches.css";

export default function JobMatches() {
  const navigate = useNavigate();

  // sample data to render multiple job cards like screenshot
  const summaryStats = [
    { id: 1, value: 2, label: "Perfect Matches", icon: "fas fa-bullseye" },
    { id: 2, value: 4, label: "High Matches", icon: "fas fa-chart-line" },
    { id: 3, value: "90.5%", label: "Avg Match Score", icon: "fas fa-percent" },
    { id: 4, value: 3, label: "New Today", icon: "fas fa-sparkles" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechFlow Solutions",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      salary: "PKR 200,000 - 300,000",
      match: 96,
      tags: ["React", "TypeScript", "Node.js", "4+ years experience", "REST APIs"],
      benefits: ["Health Insurance", "Remote Work", "Learning Budget", "Stock Options"],
      highlights: [
        "Your React expertise perfectly matches our tech stack",
        "5+ years experience exceeds our 4-year requirement",
        "Previous work with TypeScript and Node.js is highly relevant",
        "Your portfolio shows strong UI/UX skills we value",
      ],
      posted: "2 hours ago",
      applicants: 12,
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "Digital Innovations Ltd",
      location: "Lahore, Pakistan",
      type: "Remote",
      salary: "PKR 180,000 - 250,000",
      match: 92,
      tags: ["Full Stack", "Node.js", "React", "API Design"],
      benefits: ["Remote Work", "Flexible Hours"],
      highlights: [
        "Strong frontend + backend experience",
        "Experience with scalable systems",
        "Comfortable working asynchronously",
      ],
      posted: "5 hours ago",
      applicants: 8,
    },
  ];

  return (
    <div className="matches-page">
      <div className="matches-container">
        {/* Header */}
        <header className="matches-header">
          <div className="mh-left">
            <button className="back-btn" onClick={() => navigate("/dashboard")}>
              <i className="fas fa-arrow-left"></i>
              <span>GO BACK</span>
            </button>

            <div className="mh-title-block">
              <h1 className="mh-title">AI Job Recommendations</h1>
              <p className="mh-sub">Personalized job matches based on your CV analysis</p>
            </div>
          </div>

          <div className="mh-right">
            <div className="ai-badge"><i className="fas fa-robot"></i> AI Powered</div>
            <div className="matches-found">4 matches found</div>
          </div>
        </header>

        {/* Summary stat boxes */}
        <section className="summary-row" aria-hidden>
          {summaryStats.map(s => (
            <div key={s.id} className="stat-card">
              <div className="stat-icon"><i className={s.icon}></i></div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Job cards */}
        <main className="cards-list">
          {jobs.map(job => (
            <article key={job.id} className="job-card" role="article">
              <div className="job-card-inner">
                <div className="job-row header-row">
                  <div className="job-left">
                    <h2 className="job-title">{job.title}</h2>
                    <a className="company-link">{job.company}</a>

                    <div className="meta-row">
                      <span className="meta-item"><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                      <span className="meta-sep">•</span>
                      <span className="meta-item">{job.type}</span>
                      <span className="meta-sep">•</span>
                      <span className="meta-item">{job.salary}</span>
                    </div>
                  </div>

                  <div className="job-right">
                    <div className="match-pill">
                      <div className="match-percent">{job.match}%</div>
                      <div className="match-label">Match Score</div>
                    </div>
                  </div>
                </div>

                <p className="job-desc">
                  Join our innovative team to build next-generation web applications using React, TypeScript, and modern development practices.
                </p>

                {/* Requirements tags */}
                <div className="section requirements">
                  <div className="section-heading">
                    <i className="fas fa-check-circle"></i> Requirements
                  </div>
                  <div className="tags-row">
                    {job.tags.map((t, i) => (
                      <span key={i} className="chip">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Why box */}
                <div className="why-box">
                  <div className="why-title"><i className="fas fa-info-circle"></i> Why this job suits you</div>
                  <ul className="why-list">
                    {job.highlights.map((h, i) => (
                      <li key={i}>
                        <i className="fas fa-dot-circle"></i>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="section benefits">
                  <div className="section-heading">
                    <i className="fas fa-gift"></i> Benefits
                  </div>
                  <div className="tags-row benefits-row">
                    {job.benefits.map((b, i) => (
                      <span key={i} className="chip benefit">{b}</span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="card-footer">
                  <div className="footer-left">
                    <span className="post-info"><i className="far fa-clock"></i> Posted {job.posted}</span>
                    <span className="applicants"><i className="fas fa-user-friends"></i> {job.applicants} applicants</span>
                  </div>

                  <div className="footer-right">
                    <button className="btn secondary"><i className="far fa-file-alt"></i> Generate Pitch</button>
                    <button className="btn primary"><i className="fas fa-arrow-right"></i> Apply Now</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}

// src/components/JobSearch.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobSearch.css";

export default function JobSearch() {
  const navigate = useNavigate();

  return (
    <div className="jobsearch-body">
      <div className="jobsearch-container">

        {/* Header */}
        <div className="jobsearch-header">
          
          {/* Go Back */}
          <div className="go-back" onClick={() => navigate("/dashboard")}>
            <i className="fas fa-arrow-left"></i>
            <span>Go Back</span>
          </div>

          {/* Title */}
          <div className="jobsearch-title">
            <h2><i className="fas fa-magnifying-glass"></i> Job Search</h2>
            <p>Find your perfect career opportunity with AI-powered matching</p>
          </div>

          {/* Smart Matching */}
          <div className="smart-match">
            <i className="fas fa-bullseye"></i>
            <span>Smart Matching Enabled</span>
          </div>
        </div>

        {/* Search Card */}
        <div className="jobsearch-card">

          {/* Natural Language Search */}
          <div className="search-section">
            <h3>
              <i className="fas fa-wand-magic-sparkles"></i> Natural Language Search
            </h3>

            <div className="search-input-group">
              <input
                type="text"
                placeholder="e.g., entry-level software engineer jobs in Islamabad"
              />
              <button className="search-btn">
                <i className="fas fa-search"></i> Search
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="filters-row">
            <div className="filter-box">
              <label>
                <i className="fas fa-location-dot"></i> Location
              </label>
              <select>
                <option>Select location</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
              </select>
            </div>

            <div className="filter-box">
              <label>
                <i className="fas fa-briefcase"></i> Job Type
              </label>
              <select>
                <option>Select job type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
              </select>
            </div>

            <div className="filter-box">
              <label>
                <i className="fas fa-industry"></i> Industry
              </label>
              <select>
                <option>Select industry</option>
                <option>IT</option>
                <option>Marketing</option>
                <option>Finance</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

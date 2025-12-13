// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import UploadCV from "./components/UploadCV"; // ✅ Added import
import JobSearch from "./components/JobSearch";
import JobMatches from "./components/JobMatches";
export default function App() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadCV />} /> {/* ✅ Added route */}
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/matches" element={<JobMatches />} />
      </Routes>
    </>
  );
}

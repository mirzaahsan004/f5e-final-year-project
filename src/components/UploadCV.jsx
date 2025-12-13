// src/components/UploadCV.jsx
import React from "react";
import "./UploadCV.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UploadCV() {
  const navigate = useNavigate();

  return (
    <div className="uploadcv-page">
      <div className="uploadcv-container">
        <div className="uploadcv-header">
          <button className="go-back" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} />
            GO BACK
          </button>
        </div>

        <div className="uploadcv-content">
          <div className="uploadcv-title">
            <h1>CV Upload & Analysis</h1>
            <p>Upload your resume for AI-powered insights and optimization</p>
          </div>

          <div className="uploadcv-card">
            <div className="upload-section">
              <div className="upload-icon">
                <div className="icon-circle">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path 
                      d="M14 3v4a1 1 0 0 0 1 1h4" 
                      stroke="#00dfff" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" 
                      stroke="#00dfff" 
                      strokeWidth="1.5"
                    />
                    <path 
                      d="M12 11v6" 
                      stroke="#00dfff" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="m9 14 3-3 3 3" 
                      stroke="#00dfff" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2>Upload Your Resume</h2>
                <p>Upload your CV in PDF or DOCX format for AI-powered analysis</p>
              </div>

              <div className="divider"></div>

              <div className="uploadcv-dragarea">
                <div className="drag-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path 
                      d="M14 3v4a1 1 0 0 0 1 1h4" 
                      stroke="#8b9bad" 
                      strokeWidth="1.2" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" 
                      stroke="#8b9bad" 
                      strokeWidth="1.2"
                    />
                    <path 
                      d="M12 11v6" 
                      stroke="#8b9bad" 
                      strokeWidth="1.2" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="m9 14 3-3 3 3" 
                      stroke="#8b9bad" 
                      strokeWidth="1.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Drag and drop your resume here</h3>
                <p>or click to browse files</p>
                <button className="choose-btn">Choose File</button>
                <p className="file-info">Supports PDF and DOCX files up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
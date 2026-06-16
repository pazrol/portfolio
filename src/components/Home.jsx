import React, { useState } from "react";
import "./Home.css"; // Removed the unused Navbar import from here

const Home = () => {
  // State for the 3D tilt effect
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();

    // Calculate cursor position relative to the card
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    // Calculate rotation based on center (max tilt 15 degrees)
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    );
  };

  const handleMouseLeave = () => {
    // Reset to original position when mouse leaves
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
  };

  return (
    <>
      <div className="home-page-bg">
        {/* Decorative Glow Effects */}
        <div className="glow-top-left" />
        <div className="glow-bottom-right" />

        <div className="home-container">
          {/* Left Side Content */}
          <div className="hero-content">
            <p className="status-badge">
              <span className="ping-dot">
                <span className="ping-animation"></span>
                <span className="ping-core"></span>
              </span>
              Available for opportunities
            </p>

            <h1 className="main-title">Izairy Fazrul</h1>

            <h2 className="sub-title">
              Currently Pursuing Bachelor In Information Technology (Hons) in
              Cyber Security
            </h2>

            <p className="description">
              Passionated about securing digital landscapes. Exploring
              vulnerabilities, building secure systems, and turning complex
              security challenges into robust defense mechanisms.
            </p>

            {/* Cyber Security Skill Tags */}
            <div className="tech-stack">
              {[
                "Network Security",
                "Penetration Testing",
                "Python",
                "Linux",
                "React.js",
              ].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side "ID Card / Lanyard" Area */}
          <div className="lanyard-area">
            {/* Lanyard Strap */}
            <div className="lanyard-strap" />

            {/* ID Card Wrapper for 3D Effect */}
            <div
              className="lanyard-card-wrapper"
              style={{ transform: transformStyle }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Lanyard Clip */}
              <div className="lanyard-clip" />

              {/* The Card */}
              <div className="id-card">
                {/* Card Header Hole */}
                <div className="card-slot" />

                {/* Profile Image Area */}
                <div className="profile-image-area">
                  <img
                    src="https://via.placeholder.com/300x400/1a1a1a/ffffff?text=Your+Photo+Here"
                    alt="Izairy Fazrul"
                    className="./pazrol.jpeg"
                  />
                </div>

                {/* Card Details */}
                <div className="card-details">
                  <h3 className="card-name">Izairy Fazrul</h3>
                  <div className="card-divider" />
                  <p className="card-role">CYBER SECURITY // UPTM</p>

                  <div className="card-footer">
                    <div className="mini-qr">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="card-id">ID: 2026-CS-IF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import RetroScrollbar from "./RetroScrollbar";
import about from "../assets/aboutMe.png"
import useDraggable from "./useDraggable";


export default function AboutMe({ onClose }) {

  const { position, isDragging, dragRef, handleMouseDown } = useDraggable({ 
    x: window.innerWidth / 2 - 400, 
    y: window.innerHeight / 2 - 300 
  });

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const openEmail = () => {
    window.location.href = "mailto:agarwalkeshav8399@gmail.com";
  };

  const windowStyle = {
    position: 'absolute',
    width: '800px',
    height: '600px',
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: isDragging ? 1004 : 1002,
    cursor: isDragging ? 'grabbing' : 'default'
  };

  return (
    <div ref={dragRef} className="mac-window popup-window about-me-window" style={windowStyle}>
      <div 
        className="mac-window-header draggable-header"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="left-line-sub" />
        <div className="mac-window-title">About Me</div>
        <div className="right-line-sub" />
      </div>
      <div className="mac-window-subheader-sub">
        <span>Personal Info</span>
        <span>64 MB in disk</span>
        <span>128 MB available</span>
      </div>
      <div className="" style={{ height: '525px' }}>
        <RetroScrollbar variant = "-aboutme">
          <div className="about-me-content">
            {/* Profile Image */}
            <div className="profile-image-container">
              <img src={about} alt="" width="95%" height="auto" />
            </div>

            {/* About Me Text */}
            <div className="about-me-text">
              <h2 className="about-me-title">Hello, I'm Keshav!</h2>
              <p>
                I'm a passionate software developer and a computer science student pursuing a Master's degree at the University of Illinois Urbana-Champaign. I have experience in web development, mobile applications, deep learning, and GenAI systems and I love building innovative solutions that make a real impact. Oh and I love taking part in hackathons!
              </p>
              <p>
                Recently, I am venturing into spatial computing and LLMs and looking for ways to combine the powers of both into impactful solutions. All of my classes revolve around these areas so I am excited to learn and contribute to them in my upcoming projects which I would update in here as they progress.
              </p>
              <p>
                When I'm not coding, you can find me throwing hoops, doing muay thai or jamming to some pop music. 
              </p>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
              <h3 className="contact-title">Get in Touch</h3>
              <div className="contact-grid">
                <div className="contact-item" onClick={() => openLink("https://github.com/InfamousBolt")}>
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">GitHub</div>
                    <div className="contact-value">@InfamousBolt</div>
                  </div>
                </div>

                <div className="contact-item" onClick={() => openLink("https://linkedin.com/in/keshav-agarwal-b39322192/")}>
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">LinkedIn</div>
                    <div className="contact-value">Keshav Agarwal</div>
                  </div>
                </div>

                <div className="contact-item" onClick={openEmail}>
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.91l9.637-7.089h.727c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">agarwalkeshav8399@gmail.com</div>
                  </div>
                </div>

                <div className="contact-item" onClick={() => openLink("https://your-portfolio-website.com")}>
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">Website</div>
                    <div className="contact-label">(This makes it a recursion)</div>
                    <div className="contact-value">Portfolio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RetroScrollbar>
      </div>
    </div>
  );
}
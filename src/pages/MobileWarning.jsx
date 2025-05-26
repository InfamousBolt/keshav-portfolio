import React, { useState, useEffect } from 'react';

const MobileWarning = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // Check screen width
      const isSmallScreen = window.innerWidth <= 768;
      
      // Check if it's a touch device
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Check user agent for mobile devices
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileUA = mobileRegex.test(navigator.userAgent);
      
      const mobile = isSmallScreen || (isTouchDevice && isMobileUA);
      setIsMobile(mobile);
      setShowWarning(mobile);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  if (!isMobile || !showWarning) {
    return children;
  }

  return (
    <div className="mobile-warning-screen">
      <div className="retro-warning-container">
        <div className="warning-window">
          <div className="warning-header">
            <div className="warning-title-bar">
              <div className="header-lines left-lines"></div>
              <div className="warning-title">System Alert</div>
              <div className="header-lines right-lines"></div>
            </div>
          </div>
          
          <div className="warning-content">
            <div className="warning-icon">
              <div className="retro-computer">
                <div className="computer-screen"></div>
                <div className="computer-base"></div>
              </div>
            </div>
            
            <div className="warning-message">
              <h2>Desktop Experience Recommended</h2>
              <p>
                This retro portfolio is designed for desktop computers and larger screens 
                to provide the authentic vintage Mac OS experience.
              </p>
              <p>
                For the best experience, please visit this site on:
              </p>
              <ul>
                <li>🖥️ Desktop Computer</li>
                <li>💻 Laptop</li>
                <li>📱 Tablet (landscape mode)</li>
              </ul>
              <p className="recommendation">
                <strong>Minimum recommended screen width: 1024px</strong>
              </p>
            </div>
          </div>
          
          <div className="warning-actions">
            <button className="retro-btn primary-btn" onClick={() => window.close()}>
              Close Tab
            </button>
            
          </div>
          
          <div className="warning-footer">
            <div className="footer-text">
              Thank you for understanding! - Keshav's Portfolio
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'Chicago';
          src: url('/fonts/DePixelHalbfett.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .mobile-warning-screen {
          min-height: 100vh;
          background: repeating-linear-gradient(
            45deg,
            #b4d3dc,
            #b4d3dc 5px,
            #c3d9df 5px,
            #c3d9df 10px
          );
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-family: 'Chicago', 'DePixel', monospace;
        }

        .retro-warning-container {
          max-width: 500px;
          width: 100%;
        }

        .warning-window {
          background: white;
          border: 3px solid black;
          box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
          font-family: 'Chicago', monospace;
        }

        .warning-header {
          background: white;
          border-bottom: 2px solid black;
        }

        .warning-title-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
        }

        .header-lines {
          width: 80px;
          height: 12px;
          background: repeating-linear-gradient(
            to right,
            black,
            black 2px,
            white 2px,
            white 4px
          );
        }

        .warning-title {
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          flex: 1;
        }

        .warning-content {
          padding: 30px 25px;
          text-align: center;
        }

        .warning-icon {
          margin-bottom: 25px;
          display: flex;
          justify-content: center;
        }

        .retro-computer {
          width: 80px;
          height: 80px;
          position: relative;
        }

        .computer-screen {
          width: 60px;
          height: 45px;
          background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
          border: 3px solid black;
          border-radius: 4px;
          margin: 0 auto 5px;
          position: relative;
        }

        .computer-screen::after {
          content: "⚠";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ff6b00;
          font-size: 24px;
          font-weight: bold;
        }

        .computer-base {
          width: 80px;
          height: 25px;
          background: linear-gradient(145deg, #f0f0f0, #d0d0d0);
          border: 2px solid black;
          border-radius: 0 0 8px 8px;
          position: relative;
        }

        .computer-base::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 8px;
          background: #888;
          border-radius: 0 0 4px 4px;
        }

        .warning-message h2 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #333;
          border-bottom: 2px solid black;
          padding-bottom: 8px;
        }

        .warning-message p {
          margin-bottom: 15px;
          line-height: 1.5;
          font-size: 14px;
          color: #444;
        }

        .warning-message ul {
          text-align: left;
          margin: 20px 0;
          padding-left: 0;
          list-style: none;
        }

        .warning-message li {
          padding: 8px 0;
          font-size: 14px;
          color: #333;
          border-bottom: 1px dotted #ccc;
        }

        .recommendation {
          background: #ffffcc;
          border: 2px solid #ffcc00;
          padding: 10px;
          margin: 20px 0;
          font-size: 13px !important;
        }

        .warning-actions {
          display: flex;
          justify-content: center;
          gap: 15px;
          padding: 20px 25px;
          border-top: 2px solid black;
          background: #f8f8f8;
        }

        .retro-btn {
          font-family: 'Chicago', monospace;
          font-size: 14px;
          padding: 8px 20px;
          border: 3px outset #c0c0c0;
          background: #c0c0c0;
          cursor: pointer;
          transition: all 0.1s;
          min-width: 120px;
        }

        .retro-btn:hover {
          background: #d0d0d0;
        }

        .retro-btn:active {
          border-style: inset;
          background: #b0b0b0;
        }

        .primary-btn {
          background: #0066cc;
          color: white;
          border-color: #0066cc;
          font-weight: bold;
        }

        .primary-btn:hover {
          background: #0080ff;
          border-color: #0080ff;
        }

        .primary-btn:active {
          background: #0055aa;
        }

        .secondary-btn {
          background: #f0f0f0;
          color: #333;
          border-color: #999;
        }

        .warning-footer {
          background: #e0e0e0;
          border-top: 1px solid #999;
          padding: 8px 12px;
          text-align: center;
        }

        .footer-text {
          font-size: 12px;
          color: #666;
          font-style: italic;
        }

        /* Responsive adjustments for very small screens */
        @media (max-width: 480px) {
          .retro-warning-container {
            margin: 10px;
          }
          
          .warning-content {
            padding: 20px 15px;
          }
          
          .warning-message h2 {
            font-size: 18px;
          }
          
          .warning-actions {
            flex-direction: column;
            gap: 10px;
          }
          
          .retro-btn {
            width: 100%;
          }
        }

        /* Animation for the warning icon */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .computer-screen {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default MobileWarning;
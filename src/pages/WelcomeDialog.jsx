import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomeDialog() {
  const [swapped, setSwapped] = useState(false);
  const navigate = useNavigate();

  const handleNoHover = () => {
    setSwapped(!swapped);
  };

  const handleYesClick = () => {
    navigate("/signin");
  };

  return (
    <div className="retro-screen">
      <div className="retro-alert-dialog">
        <div className="alert-content">
          <div className="alert-icon">
            {/* Pixelated warning triangle icon */}
            <svg width="60" height="60" viewBox="0 0 12 12" shapeRendering="crispEdges">
              <path d="M6,1 L11,10 L1,10 Z" stroke="black" strokeWidth="0.5" fill="white" />
              <text x="6" y="9" fontSize="6" textAnchor="middle" fontWeight="bold" style={{fontFamily: 'monospace'}}>!</text>
            </svg>
          </div>
          <div className="alert-text">
            You will be redirected to Keshav's porfolio in a retro look. Do you want to proceed?
          </div>
        </div>
        <div className={`alert-buttons ${swapped ? "swapped" : ""}`}>
          <button className="alert-cancel-btn" onMouseEnter={handleNoHover} onClick={(e) => e.preventDefault()}>Cancel</button>
          <button className="alert-confirm-btn" onClick={handleYesClick}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

{/* <div className={`dialog-buttons ${swapped ? "swapped" : ""}`}>
          <button onClick={handleYesClick}>Yes</button>
          <button onMouseEnter={handleNoHover} onClick={(e) => e.preventDefault()}>No</button>
        </div> */}
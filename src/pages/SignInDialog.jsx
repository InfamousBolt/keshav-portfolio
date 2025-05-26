// Alternative version using the hook - replace your SignInDialog.jsx with this:

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import profilePic from "../assets/me.jpeg";
import logo from "../assets/logo.png";
import { useLoginAudio } from "./useLoginAudio";

export default function SignInDialog() {
  const [password, setPassword] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  // Use the login audio hook
  const { playLoginSuccess, playLoginError } = useLoginAudio();

  const handleLogin = () => {
    if (password === "password") {
      // Play success sound
      playLoginSuccess();
      
      // Small delay before navigation to let sound play
      setTimeout(() => {
        navigate("/retro");
      }, 300);
    } else {
      // Play error sound
      playLoginError();
      setError("Incorrect password");
    }
  };

  // Handle Enter key press for login
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="signin-screen">
      <div className="login-box">
        <div className="apple-logo">
          <img src={logo} alt="logo" className="logo-pic"/>
        </div>
        <h2>NotSoMac OS X</h2>
        <p className="mac-sub">Keshav's NotSoMac</p>
        <div className="profile-box">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <p className="username">Keshav</p>
          <input
            type="password"
            className="password-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          {error && <div className="error-text">{error}</div>}
        </div>
        <div className="login-actions">
          <button className="retro-btn" onClick={() => navigate("/")}>Back</button>
          <button className="retro-btn" onClick={() => setHintVisible(!hintVisible)}>
            Forgot Password
          </button>
          <button className="retro-btn" onClick={handleLogin}>Log In</button>
        </div>
        {hintVisible && 
        <>
          <p className="hint">Hint: password is <strong>password</strong></p>
          <p className="hint">A cyber security engineer won't do this!</p>
        </>
        }
      </div>
    </div>
  );
}
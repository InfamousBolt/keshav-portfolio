import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeDialog from "./pages/WelcomeDialog";
import SignInDialog from "./pages/SignInDialog";
import RetroMacPortfolio from "./pages/RetroMacPortfolio";
import MobileWarning from "./pages/MobileWarning"; // Add this import

export default function App() {
  return (
    <MobileWarning>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeDialog />} />
          <Route path="/signin" element={<SignInDialog />} />
          <Route path="/retro" element={<RetroMacPortfolio />} />
        </Routes>
      </Router>
    </MobileWarning>
  );
}
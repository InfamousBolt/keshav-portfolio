import React, { useState, useEffect } from "react";
import "../App.css";
import RetroScrollbar from "./RetroScrollbar";
import ProjectPage from "./ProjectPage";
import AboutMe from "./AboutMe";
import projectData from "./projectData";
import logo from "../assets/logo.png";
import folder from "../assets/folder.png";
import file from "../assets/file.png";
import { useNavigate } from "react-router-dom";
import DraggableWindow from "./DraggableWindow";
import PDFViewer from "./PDFViewer";
import RetroIPod from "./RetroIpod";
import { useWindowAudio } from './useWindowAudio';


export default function App() {
  // Your existing state variables
  const [darkMode, setDarkMode] = useState(false);
  const [viewMenuOpen, setViewMenuOpen] = useState(false);
  const [notSoMacOSMenuOpen, setNotSoMacOSMenuOpen] = useState(false);
  const [alertBox, setAlertBox] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);
  const [shakeWindow, setShakeWindow] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [windowPositions, setWindowPositions] = useState({});
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [showIPod, setShowIPod] = useState(false);
  const { playWindowOpenSound, playWindowCloseSound } = useWindowAudio();

  const navigate = useNavigate();

  const initialPositions = [
    { top: '80px', left: '80px' },
    { top: '80px', right: '80px' },
    { bottom: '80px', left: '80px' },
    { bottom: '80px', right: '80px' }
  ];

  // Define project categories and subprojects - now using the projectData
  const projectCategories = {
    "Frontend": [
      { name: "EduFlood+", type: "project" },
      { name: "Lexical RTE", type: "project" },
      { name: "ADIP Cochlear Implants", type: "project" },
      { name: "RentIt", type: "project" }
    ],
    "AI and Vision": [
      { name: "HMM POS Tagger", type: "project" },
      { name: "Neural Network Image Classifier", type: "project" },
      { name: "Diffusion Models on MNIST", type: "project" },
      { name: "YOLO Object Detection", type: "project" }
    ],
    "LLMs": [
      { name: "LLM Bias Examination", type: "project" },
      { name: "Docker Distributed LLM", type: "project" }
    ]
  };

  useEffect(() => {
    const updateCursor = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    if (darkMode) {
      document.body.classList.add("retro-dark");
      window.addEventListener("mousemove", updateCursor);
    } else {
      document.body.classList.remove("retro-dark");
      window.removeEventListener("mousemove", updateCursor);
    }

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, [darkMode]);

  const handleFileClick = () => {
    setViewMenuOpen(false);
    setNotSoMacOSMenuOpen(false);
    setAlertBox(true);
  };

  const handleViewClick = () => {
    setViewMenuOpen(!viewMenuOpen);
    setNotSoMacOSMenuOpen(false);
  };

  const handleSpecialClick = () => {
    setViewMenuOpen(false);
    setNotSoMacOSMenuOpen(false);
    setShowIPod(true);
  };

  const handleNotSoMacOSLogoClick = () => {
    setNotSoMacOSMenuOpen(!notSoMacOSMenuOpen);
    setViewMenuOpen(false);
  };

  const handleFolderClick = (name) => {
    if (name === "About Me") {
      setShowAboutMe(true);
      playWindowOpenSound(); // Play sound when opening About Me
      return;
    }
    
    if (openWindows.find(win => win.name === name)) {
      setShakeWindow(name);
      setTimeout(() => setShakeWindow(null), 500);
      return;
    }
    
    const pos = initialPositions[openWindows.length % initialPositions.length];
    const newWindow = { name, pos };
    setOpenWindows((prev) => [...prev, newWindow]);
    playWindowOpenSound();
    
    // Initialize position for dragging
    const pixelPos = {
      x: pos.left ? parseInt(pos.left) : window.innerWidth - parseInt(pos.right || '80px') - 300,
      y: pos.top ? parseInt(pos.top) : window.innerHeight - parseInt(pos.bottom || '80px') - 300
    };
    setWindowPositions(prev => ({
      ...prev,
      [name]: pixelPos
    }));
  };

  const closeWindow = (name) => {
    setOpenWindows((prev) => prev.filter((win) => win.name !== name));
    setWindowPositions(prev => {
      const newPositions = { ...prev };
      delete newPositions[name];
      return newPositions;
    });
    if (name === "Projects") {
      setCurrentProject(null);
    }
  };

  const handleProjectClick = (projectName) => {
    // Only open project if it exists in projectData or if it's a placeholder
    if (projectData[projectName] || !['EduFlood+', 'Lexical RTE'].includes(projectName)) {
      setCurrentProject(projectName);
      playWindowOpenSound(); // Play sound when opening project

    }
  };

  const closeProjectPage = () => {
    setCurrentProject(null);
  };

  const updateWindowPosition = (windowName, newPosition) => {
    setWindowPositions(prev => ({
      ...prev,
      [windowName]: newPosition
    }));
  };

  const closeAboutMe = () => {
    setShowAboutMe(false);
  };

  const closePDFViewer = () => {
    setShowPDFViewer(false);
  };


  const renderProjectsContent = () => {
    const categories = Object.keys(projectCategories);
    
    return (
      <RetroScrollbar>
      <div className="project-list">
        {categories.map((category, index) => (
          <div key={index} className="project-item" onClick={() => handleFolderClick(category)}>
            <div className="project-icon"><img src={folder} alt="folder" className="file-folder-icons"/></div>
            <div className="project-name">{category}</div>
          </div>
        ))}
      </div>
      </RetroScrollbar>
    );
  };

  const renderCategoryContent = (category) => {
    const projects = projectCategories[category] || [];
    
    return (
      <RetroScrollbar>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item" 
               onClick={project.type === "project" ? () => handleProjectClick(project.name) : () => handleFolderClick(project.name)}>
            <div className="project-icon">
              <img 
                src={project.type === "project" ? file : folder} 
                alt={project.type === "project" ? "file" : "folder"} 
                className="file-folder-icons"
              />
            </div>
            <div className="project-name">{project.name}</div>
          </div>
        ))}
      </div>
      </RetroScrollbar>
    );
  };

  const renderSkillsContent = () => {
    const skills = [
      { label: "JavaScript", level: 90 },
      { label: "Python", level: 88 },
      { label: "Pytorch", level: 78 },
      { label: "C++", level: 80 },
      { label: "ReactJS", level: 90 },
      { label: "Flutter", level: 85 },
      { label: "Unreal Engine 5", level: 75 },

    ];
    
    return (
      <RetroScrollbar>
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-entry">
            <div className="skill-label">{skill.label}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </RetroScrollbar>
    );
  };

  const renderWindowContent = (name) => {
    switch (name) {
      case "Skills":
        return renderSkillsContent();
      case "Projects":
        return renderProjectsContent();
      case "Frontend":
      case "AI and Vision":
      case "LLMs":
        return renderCategoryContent(name);
      default:
        return <p>This is the content of {name}.</p>;
    }
  };

  // Calculate number of items in each window
  const getItemCount = (windowName) => {
    if (windowName === "Projects") {
      return Object.keys(projectCategories).length;
    } else if (projectCategories[windowName]) {
      return projectCategories[windowName].length;
    } else {
      return 4; // Default value
    }
  };

  return (
    <div className="retro-screen">
      <div className="menu-bar">
        <img src={logo} alt="logo" className="logo-pic-menu" onClick={handleNotSoMacOSLogoClick}/>
        <span className="menu-item" onClick={handleFileClick}>File</span>
        <span className="menu-item" onClick={handleViewClick}>View</span>
        <span className="menu-item" onClick={handleSpecialClick}>Special</span>

        {viewMenuOpen && (
          <div className="dropdown view-dropdown">
            <div className="dropdown-item" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </div>
          </div>
        )}
      </div>

      {notSoMacOSMenuOpen && (
          <div className="dropdown notSoMacOS-dropdown">
            <div className="dropdown-item" onClick={() => navigate("/signin")}>Logout</div>
          </div>
      )}

      <div className="desktop">
        <div className="mac-window">
          <div className="mac-window-header">
            <div className="left-line" />
            <div className="mac-window-title">Untitled folder</div>
            <div className="right-line" />
          </div>
          <div className="mac-window-subheader">
            <span>4 items</span>
            <span>64 MB in disk</span>
            <span>128 MB available</span>
          </div>
          <div className="mac-window-body">
            <div className="folder-list">
              <Folder name="Projects" onClick={() => handleFolderClick("Projects")} />
              <Folder name="Skills" onClick={() => handleFolderClick("Skills")} />
              <Folder name="About Me" onClick={() => handleFolderClick("About Me")} />
              <Folder name="Resume.pdf" isFile={true} onClick={() => {
                setShowPDFViewer(true);
                playWindowOpenSound();
              }} />
            </div>
          </div>
        </div>

        {openWindows.map((win) => {
          const currentPosition = windowPositions[win.name] || { x: 80, y: 80 };
          
          return (
            <DraggableWindow
              key={win.name}
              windowName={win.name}
              initialPosition={currentPosition}
              onPositionChange={updateWindowPosition}
              isShaking={shakeWindow === win.name}
              headerContent={
                <>
                  <button className="close-button" onClick={() => closeWindow(win.name)}>✖</button>
                  <div className="left-line-sub" />
                  <div className="mac-window-title">{win.name}</div>
                  <div className="right-line-sub" />
                </>
              }
              bodyContent={
                <>
                  <div className="mac-window-subheader-sub">
                    <span>{(win.name == "Skills" ? 7 : getItemCount(win.name))} items</span>
                    <span>64 MB in disk</span>
                    <span>128 MB available</span>
                  </div>
                  <div className="mac-window-body">
                    {renderWindowContent(win.name)}
                  </div>
                </>
              }
            />
          );
        })}

        {currentProject && (
          <ProjectPage 
            project={currentProject} 
            onClose={closeProjectPage} 
          />
        )}

        {showAboutMe && (
          <AboutMe onClose={closeAboutMe} />
        )}

        {showPDFViewer && (
          <PDFViewer onClose={closePDFViewer} pdfPath="/resume.pdf" />
        )}

      </div>

      {darkMode && <div className="dark-overlay"></div>}

      {alertBox && (
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
                You do not have the permission to create or edit files.
              </div>
            </div>
            <div className="alert-buttons">
              <button className="alert-cancel-btn" onClick={() => setAlertBox(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
      {showIPod && (
        <RetroIPod onClose={() => setShowIPod(false)} />
      )}
    </div>
  );
}

function Folder({ name, isFile = false, onClick }) {
  return (
    <div className="folder" onClick={onClick}>
      <div className="folder-icon">{isFile ? <img src={file} alt="file" className="file-folder-icons"/> : <img src={folder} alt="folder" className="file-folder-icons"/>}</div>
      <div className="folder-name">{name}</div>
    </div>
  );
}
import React from "react";
import RetroScrollbar from "./RetroScrollbar";
import projectData from "./projectData";
import useDraggable from "./useDraggable";


export default function ProjectPage({ project, onClose }) {

  const { position, isDragging, dragRef, handleMouseDown } = useDraggable({ 
    x: window.innerWidth / 2 - 325, 
    y: window.innerHeight / 2 - 250 
  });

  const openGithubRepo = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  // Get project data or use fallback if project doesn't exist in data
  const data = projectData[project] || {
    title: project,
    tagline: "Project details coming soon...",
    githubUrl: "https://github.com/yourusername",
    sections: [
      {
        type: "section",
        title: "About",
        content: "This project is currently under development. Check back later for more information!"
      }
    ]
  };

  // Render a section with potential subsections
  const renderSection = (section, index) => {
    return (
      <div key={index}>
        <h2 className="retro-subtitle">{section.title}</h2>
        {section.content && (
          <div className="section-content">
            {section.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
        
        {section.subsections && section.subsections.map((subsection, idx) => (
          <div key={idx}>
            <h3 className="retro-subsubtitle">{subsection.title}</h3>
            <p>{subsection.content}</p>
          </div>
        ))}
      </div>
    );
  };

  const windowStyle = {
    position: 'absolute',
    width: '650px',
    height: '500px',
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: isDragging ? 1004 : 1002,
    cursor: isDragging ? 'grabbing' : 'default'
  };

  return (
    <div ref={dragRef} className="mac-window popup-window project-window" style={windowStyle}>
      <div 
        className="mac-window-header draggable-header" 
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="left-line-sub" />
        <div className="mac-window-title">{data.title}</div>
        <div className="right-line-sub" />
      </div>
      <div className="mac-window-subheader-sub">
        <span>Project Details</span>
        <span>64 MB in disk</span>
        <span>128 MB available</span>
      </div>
      <div className="mac-window-body" style={{ height: '425px' }}>
        <RetroScrollbar>
          <div className="retro-readme">
            <h1 className="retro-title">{data.title}</h1>
            <div className="retro-tagline">{data.tagline}</div>
            
            {data.sections.map((section, index) => renderSection(section, index))}
            
            <button 
              className="retro-button" 
              onClick={() => openGithubRepo(data.githubUrl)}
            >
              View on GitHub
            </button>
          </div>
        </RetroScrollbar>
      </div>
    </div>
  );
}
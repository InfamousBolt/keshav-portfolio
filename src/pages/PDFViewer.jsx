import React from "react";
import RetroScrollbar from "./RetroScrollbar";
import useDraggable from "./useDraggable";

export default function PDFViewer({ onClose, pdfPath = "/resume.pdf" }) {
  const { position, isDragging, dragRef, handleMouseDown } = useDraggable({ 
    x: window.innerWidth / 2 - 400, 
    y: window.innerHeight / 2 - 350 
  });

  const downloadPDF = () => {
    // Check if PDF exists before downloading
    fetch(pdfPath)
      .then(response => {
        if (response.ok) {
          // PDF exists, proceed with download
          const link = document.createElement('a');
          link.href = pdfPath;
          link.download = 'Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // PDF doesn't exist, show alert
          alert('Resume file not found. Please ensure the PDF is uploaded to the public folder.');
        }
      })
      .catch(error => {
        console.error('Error checking PDF:', error);
        alert('Unable to download resume at this time.');
      });
  };

  const windowStyle = {
    position: 'absolute',
    width: '800px',
    height: '700px',
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: isDragging ? 1004 : 1002,
    cursor: isDragging ? 'grabbing' : 'default'
  };

  return (
    <div ref={dragRef} className="mac-window popup-window pdf-viewer-window" style={windowStyle}>
      <div 
        className="mac-window-header draggable-header" 
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="left-line-sub" />
        <div className="mac-window-title">Resume.pdf</div>
        <div className="right-line-sub" />
      </div>
      <div className="mac-window-subheader-sub">
        <span>PDF Document</span>
        <span>1.2 MB in size</span>
        <span>Portable Document</span>
      </div>
      <div className="pdf-viewer-body" style={{ height: '625px' }}>
        <RetroScrollbar variant="-pdf">
          <div className="pdf-content">
            {/* PDF Embed Container */}
            <div className="pdf-embed-container">
              <embed
                src={pdfPath}
                type="application/pdf"
                width="100%"
                height="500px"
                className="retro-pdf-embed"
                onError={() => {
                  console.log('PDF failed to load');
                }}
              />
              {/* Enhanced Fallback */}
              <div className="pdf-fallback">
                <div className="pdf-icon">📄</div>
                <h3>Resume Not Available</h3>
                <p>The resume PDF file could not be loaded.</p>
                <p>Please ensure the PDF file is placed in the <code>/public</code> folder.</p>
                <p>Expected location: <code>/public/resume.pdf</code></p>
              </div>
            </div>
            
            {/* Download Section */}
            <div className="pdf-download-section">
              <h3 className="download-title">Download Resume</h3>
              <p className="download-description">
                Click the button below to download a copy of the resume to your computer.
              </p>
              <button className="retro-download-button" onClick={downloadPDF}>
                <span className="download-icon">⬇</span>
                Download PDF
              </button>
            </div>
          </div>
        </RetroScrollbar>
      </div>
    </div>
  );
}
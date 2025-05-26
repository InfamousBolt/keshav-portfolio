import React, { useState, useEffect, useRef } from "react";

const RetroScrollbar = ({ children, variant="" }) => {
  const contentRef = useRef(null);
  const thumbRef = useRef(null);
  const trackRef = useRef(null);
  const [thumbHeight, setThumbHeight] = useState(30);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScroll, setStartScroll] = useState(0);

  const wrapperClass = `retro-scroll-wrapper${variant}`
  const contentClass = `retro-scroll-content${variant}`

  // Calculate thumb dimensions based on content
  useEffect(() => {
    const calculateThumbHeight = () => {
      if (!contentRef.current || !trackRef.current) return;
      
      const { scrollHeight, clientHeight } = contentRef.current;
      const trackHeight = trackRef.current.clientHeight;
      const ratio = clientHeight / scrollHeight;
      const newThumbHeight = Math.max(30, trackHeight * ratio);
      
      setThumbHeight(newThumbHeight);
    };

    calculateThumbHeight();
    window.addEventListener('resize', calculateThumbHeight);
    
    return () => {
      window.removeEventListener('resize', calculateThumbHeight);
    };
  }, []);

  // Update thumb position when content is scrolled
  const handleScroll = () => {
    if (!contentRef.current || !trackRef.current || isDragging) return;
    
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    const trackHeight = trackRef.current.clientHeight;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    const maxThumbTop = trackHeight - thumbHeight;
    
    setThumbTop(scrollRatio * maxThumbTop);
  };

  // Handle scrollbar thumb dragging
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.clientY);
    setStartScroll(thumbTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !contentRef.current || !trackRef.current) return;
    
    const deltaY = e.clientY - startY;
    const trackHeight = trackRef.current.clientHeight;
    const maxThumbTop = trackHeight - thumbHeight;
    const newThumbTop = Math.max(0, Math.min(startScroll + deltaY, maxThumbTop));
    
    setThumbTop(newThumbTop);
    
    const { scrollHeight, clientHeight } = contentRef.current;
    const scrollRatio = newThumbTop / maxThumbTop;
    contentRef.current.scrollTop = scrollRatio * (scrollHeight - clientHeight);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach global mouse events for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startY, startScroll]);

  // Handle arrow button clicks
  const scrollUp = () => {
    if (!contentRef.current) return;
    contentRef.current.scrollTop -= 20;
  };

  const scrollDown = () => {
    if (!contentRef.current) return;
    contentRef.current.scrollTop += 20;
  };

  return (
    <div className={wrapperClass}>
      <div 
        className={contentClass}
        ref={contentRef}
        onScroll={handleScroll}
      >
        {children}
      </div>
      
      <div className="retro-scrollbar">
        <div className="retro-scroll-arrow" onClick={scrollUp}>▲</div>
        <div className="retro-scroll-track" ref={trackRef}>
          <div 
            className="retro-scroll-thumb"
            ref={thumbRef}
            style={{ 
              height: `${thumbHeight}px`, 
              top: `${thumbTop}px` 
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
        <div className="retro-scroll-arrow" onClick={scrollDown}>▼</div>
      </div>
    </div>
  );
};

export default RetroScrollbar;
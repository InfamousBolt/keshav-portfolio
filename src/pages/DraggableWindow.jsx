import React, { useCallback, useEffect } from "react";
import useDraggable from "./useDraggable";

const DraggableWindow = ({ 
  headerContent,
  bodyContent,
  windowName, 
  initialPosition, 
  onPositionChange, 
  className = "", 
  style = {},
  isShaking = false 
}) => {
  const { position, isDragging, dragRef, handleMouseDown } = useDraggable(initialPosition);

  // Use useCallback to prevent unnecessary re-renders
  const handlePositionChange = useCallback((newPosition) => {
    if (onPositionChange) {
      onPositionChange(windowName, newPosition);
    }
  }, [windowName, onPositionChange]);

  // Update parent component when position changes, but throttle it
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handlePositionChange(position);
    }, 16); // Throttle to ~60fps

    return () => clearTimeout(timeoutId);
  }, [position, handlePositionChange]);

  const windowStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: isDragging ? 1003 : 1001,
    cursor: isDragging ? 'grabbing' : 'default',
    width: '300px', // Default width for popup windows
    ...style
  };

  return (
    <div
      ref={dragRef}
      className={`mac-window popup-window ${className} ${isShaking ? "shake" : ""} ${isDragging ? "dragging" : ""}`}
      style={windowStyle}
    >
      <div 
        className="mac-window-header draggable-header" 
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {headerContent}
      </div>
      {bodyContent}
    </div>
  );
};

export default DraggableWindow;
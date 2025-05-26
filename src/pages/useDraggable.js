// useDraggable.js
import { useState, useRef, useEffect } from 'react';

const useDraggable = (initialPosition = { x: 0, y: 0 }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const dragRef = useRef(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });

  // Only update position if it hasn't been initialized or if dragging hasn't started
  useEffect(() => {
    if (!isInitialized && !isDragging) {
      setPosition(initialPosition);
      setIsInitialized(true);
    }
  }, [initialPosition, isInitialized, isDragging]);

  const handleMouseDown = (e) => {
    if (!dragRef.current) return;
    
    setIsDragging(true);
    
    const rect = dragRef.current.getBoundingClientRect();
    dragStart.current = {
      x: e.clientX,
      y: e.clientY
    };
    
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    
    const newPosition = {
      x: position.x + deltaX,
      y: position.y + deltaY
    };
    
    // Keep window within viewport bounds
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = dragRef.current?.offsetWidth || 300;
    const elementHeight = dragRef.current?.offsetHeight || 200;
    
    newPosition.x = Math.max(0, Math.min(newPosition.x, windowWidth - elementWidth));
    newPosition.y = Math.max(0, Math.min(newPosition.y, windowHeight - elementHeight));
    
    setPosition(newPosition);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }
  }, [isDragging, position]);

  return {
    position,
    isDragging,
    dragRef,
    handleMouseDown,
    setPosition
  };
};

export default useDraggable;
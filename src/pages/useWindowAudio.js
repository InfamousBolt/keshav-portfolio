// Custom hook for window audio - create this as src/hooks/useWindowAudio.js

import { useRef, useCallback } from 'react';

export const useWindowAudio = (audioPath = '/audio/window-open.mp3') => {
  const audioRef = useRef(null);
  
  // Initialize audio
  const initAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioPath);
      audioRef.current.volume = 0.3; // Adjust volume (0.0 to 1.0)
      audioRef.current.preload = 'auto';
    }
  }, [audioPath]);

  // Play window open sound
  const playWindowOpenSound = useCallback(() => {
    initAudio();
    
    if (audioRef.current) {
      // Reset audio to beginning
      audioRef.current.currentTime = 0;
      
      // Play with error handling
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
        // Fail silently - don't break the user experience
      });
    }
  }, [initAudio]);

  // Play window close sound (optional - different sound)
  const playWindowCloseSound = useCallback(() => {
    // You can add a different sound for closing if desired
    // For now, we'll use the same sound but at lower volume
    initAudio();
    
    if (audioRef.current) {
      const originalVolume = audioRef.current.volume;
      audioRef.current.volume = originalVolume * 0.5; // Quieter for close
      audioRef.current.currentTime = 0;
      
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
      
      // Restore original volume after playing
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = originalVolume;
        }
      }, 200);
    }
  }, [initAudio]);

  return {
    playWindowOpenSound,
    playWindowCloseSound
  };
};
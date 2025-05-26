// Create this as src/hooks/useLoginAudio.js

import { useRef, useCallback } from 'react';

export const useLoginAudio = () => {
  const successAudioRef = useRef(null);
  const errorAudioRef = useRef(null);
  
  // Initialize audio files
  const initAudio = useCallback(() => {
    if (!successAudioRef.current) {
      successAudioRef.current = new Audio('/audio/login-success.mp3');
      successAudioRef.current.volume = 0.4;
      successAudioRef.current.preload = 'auto';
    }
    
    if (!errorAudioRef.current) {
      errorAudioRef.current = new Audio('/audio/login-error.mp3');
      errorAudioRef.current.volume = 0.4;
      errorAudioRef.current.preload = 'auto';
    }
  }, []);

  // Play success sound
  const playLoginSuccess = useCallback(() => {
    initAudio();
    if (successAudioRef.current) {
      successAudioRef.current.currentTime = 0;
      successAudioRef.current.play().catch(error => {
        console.log('Login success audio failed:', error);
      });
    }
  }, [initAudio]);

  // Play error sound
  const playLoginError = useCallback(() => {
    initAudio();
    if (errorAudioRef.current) {
      errorAudioRef.current.currentTime = 0;
      errorAudioRef.current.play().catch(error => {
        console.log('Login error audio failed:', error);
      });
    }
  }, [initAudio]);

  return {
    playLoginSuccess,
    playLoginError
  };
};
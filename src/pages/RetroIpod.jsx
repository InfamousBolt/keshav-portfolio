import React, { useState, useEffect, useRef } from 'react';

const RetroIPod = ({ onClose }) => {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [showSongCover, setShowSongCover] = useState(false);
  const audioRef = useRef(null);

  const mainMenu = [
    { name: 'Playlists', screen: 'playlists' },
    { name: 'Artists', screen: 'artists' },
    { name: 'Songs', screen: 'songs' },
  ];

  const songs = [
    { 
      name: "Keshav's fav song that he sung to avoid copyrights", 
      artist: "Mystery Artist",
      // Using a placeholder audio URL - in real implementation, you'd use your audio file
      audioUrl: "/audio/keshavs-fav-song.mp3",
      coverUrl: "/images/spoofCover.png"
    }
  ];

  const artists = [
    { name: 'Mystery Artist', songCount: 1 }
  ];

  const playlists = [
    { name: 'My Favorites', songCount: 1 },
    { name: 'Recently Added', songCount: 1 }
  ];

  const contacts = [
    { name: 'Keshav', number: '+1-234-567-8900' }
  ];

  const settings = [
    { name: 'Backlight', value: 'Auto' },
    { name: 'Sound Check', value: 'Off' },
    { name: 'About', value: '' }
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      e.preventDefault();
      
      switch(e.key) {
        case 'ArrowUp':
          handleScrollUp();
          break;
        case 'ArrowDown':
          handleScrollDown();
          break;
        case 'Enter':
        case ' ':
          handleCenterButton();
          break;
        case 'Escape':
        case 'Backspace':
          handleMenuButton();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentScreen, selectedIndex, isPlaying, showSongCover]);

  const handleScrollUp = () => {
    if (showSongCover) return;
    
    const currentMenu = getCurrentMenu();
    setSelectedIndex(prev => prev > 0 ? prev - 1 : currentMenu.length - 1);
  };

  const handleScrollDown = () => {
    if (showSongCover) return;
    
    const currentMenu = getCurrentMenu();
    setSelectedIndex(prev => prev < currentMenu.length - 1 ? prev + 1 : 0);
  };

  const handleCenterButton = () => {
    if (showSongCover) {
      // Toggle play/pause when viewing song cover
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play().catch(error => {
          console.error('Audio play failed:', error);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
      return;
    }

    const currentMenu = getCurrentMenu();
    const selectedItem = currentMenu[selectedIndex];

    if (currentScreen === 'main') {
      setCurrentScreen(selectedItem.screen);
      setSelectedIndex(0);
    } else if (currentScreen === 'songs' && selectedItem.name === "Keshav's fav song that he sung to avoid copyrights") {
      setCurrentSong(selectedItem);
      setShowSongCover(true);
      setIsPlaying(true);
      // Play the song with error handling
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Audio play failed:', error);
          setIsPlaying(false);
          alert('Unable to play audio file. Please check if the file exists and is in a supported format (MP3, WAV, OGG).');
        });
      }
    }
  };

  const handleMenuButton = () => {
    if (showSongCover) {
      setShowSongCover(false);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } else if (currentScreen !== 'main') {
      setCurrentScreen('main');
      setSelectedIndex(0);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (showSongCover && audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  const handleNext = () => {
    if (showSongCover && audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.duration || 0, audioRef.current.currentTime + 10);
    }
  };

  const getCurrentMenu = () => {
    switch(currentScreen) {
      case 'main': return mainMenu;
      case 'songs': return songs;
      case 'artists': return artists;
      case 'playlists': return playlists;
      case 'contacts': return contacts;
      case 'settings': return settings;
      default: return mainMenu;
    }
  };

  const getScreenTitle = () => {
    switch(currentScreen) {
      case 'main': return 'NotSoiPod';
      case 'songs': return 'Songs';
      case 'artists': return 'Artists';
      case 'playlists': return 'Playlists';
      case 'contacts': return 'Contacts';
      case 'settings': return 'Settings';
      default: return 'NotSoiPod';
    }
  };

  const renderScreen = () => {
    if (showSongCover && currentSong) {
      return (
        <div className="ipod-song-display">
          <div className="song-cover">
            <img src={currentSong.coverUrl} alt="Album Cover" style={{height:"40px",width:"50px"}}/>
          </div>
          <div className="song-info">
            <div className="song-title">Keshav's fav song...</div>
            <div className="song-artist">{currentSong.artist}</div>
          </div>
          <div className="playback-status">
            {isPlaying ? '▶' : '⏸'} {isPlaying ? 'Playing' : 'Paused'}
          </div>
        </div>
      );
    }

    const currentMenu = getCurrentMenu();
    
    return (
      <div className="ipod-menu">
        {currentMenu.map((item, index) => (
          <div 
            key={index}
            className={`ipod-menu-item ${index === selectedIndex ? 'selected' : ''}`}
          >
            <span className="menu-text">
              {item.name}
              {item.songCount && ` (${item.songCount})`}
              {item.number && ` - ${item.number}`}
              {item.value && ` - ${item.value}`}
            </span>
            <span className="menu-arrow">›</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="ipod-overlay">
      <div className="ipod-container">
        <div className="ipod-body">
          {/* Screen */}
          <div className="ipod-screen">
            <div className="ipod-header">
              <div className="ipod-title">{getScreenTitle()}</div>
              <div className="ipod-battery">🔋</div>
            </div>
            <div className="ipod-display">
              {renderScreen()}
            </div>
          </div>

          {/* Click Wheel */}
          <div className="ipod-wheel">
            <div className="wheel-outer">
              <div className="wheel-button wheel-menu" onClick={handleMenuButton}>
                MENU
              </div>
              <div className="wheel-button wheel-prev" onClick={handlePrevious}>
                ⏮
              </div>
              <div className="wheel-button wheel-next" onClick={handleNext}>
                ⏭
              </div>
              <div className="wheel-button wheel-play" onClick={handleCenterButton}>
                ⏯
              </div>
              <div className="wheel-center" onClick={handleCenterButton}>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="ipod-instructions">
            Use arrow keys to navigate • Enter/Space to select • Escape to go back
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.audioUrl}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onError={(e) => {
            console.error('Audio error:', e);
            setIsPlaying(false);
            alert('Audio file could not be loaded. Please check the file path and format.');
          }}
          onLoadStart={() => console.log('Audio loading started')}
          onCanPlay={() => console.log('Audio can play')}
          preload="metadata"
        />
      )}

      <style jsx>{`
        .ipod-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          font-family: 'Lucida Grande', 'Segoe UI', sans-serif;
        }

        .ipod-container {
          background: linear-gradient(145deg, #f0f0f0, #d0d0d0);
          border-radius: 25px;
          padding: 20px;
          box-shadow: 
            inset 0 0 0 2px #bbb,
            0 10px 30px rgba(0, 0, 0, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.8);
          width: 280px;
          height: 480px;
        }

        .ipod-body {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ipod-screen {
          width: 240px;
          height: 180px;
          background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
          border-radius: 8px;
          border: 2px solid #333;
          box-shadow: 
            inset 0 0 0 1px #555,
            inset 0 2px 8px rgba(0, 0, 0, 0.8);
          margin-bottom: 30px;
          overflow: hidden;
        }

        .ipod-header {
          background: linear-gradient(to bottom, #4a4a4a, #3a3a3a);
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #555;
        }

        .ipod-title {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
        }

        .ipod-battery {
          color: #0f0;
          font-size: 12px;
        }

        .ipod-display {
          flex: 1;
          background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
          color: #fff;
          overflow-y: auto;
        }

        .ipod-menu {
          padding: 8px 0;
        }

        .ipod-menu-item {
          padding: 6px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ipod-menu-item.selected {
          background: linear-gradient(to right, #0066cc, #0080ff);
          color: white;
        }

        .ipod-menu-item:not(.selected):hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .menu-text {
          font-size: 13px;
        }

        .menu-arrow {
          font-size: 14px;
          opacity: 0.7;
        }

        .ipod-song-display {
          padding: 20px;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .song-cover {
          margin-bottom: 15px;
        }

        .song-cover img {
          width: 100px;
          height: 100px;
          border-radius: 4px;
          border: 1px solid #555;
        }

        .song-info {
          margin-bottom: 15px;
        }

        .song-title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 4px;
        }

        .song-artist {
          font-size: 12px;
          opacity: 0.8;
        }

        .playback-status {
          font-size: 12px;
          opacity: 0.7;
        }

        .ipod-wheel {
          width: 200px;
          height: 200px;
          position: relative;
        }

        .wheel-outer {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(145deg, #e6e6e6, #cccccc);
          box-shadow: 
            inset 0 0 0 3px #bbb,
            0 4px 12px rgba(0, 0, 0, 0.2),
            inset 0 2px 0 rgba(255, 255, 255, 0.8);
          position: relative;
        }

        .wheel-button {
          position: absolute;
          color: #333;
          font-size: 10px;
          font-weight: bold;
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.1s;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .wheel-button:hover {
          color: #000;
          background: rgba(255, 255, 255, 0.2);
        }

        .wheel-button:active {
          color: #000;
          background: rgba(255, 255, 255, 0.3);
        }

        .wheel-menu {
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 20px;
        }

        .wheel-prev {
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 40px;
          font-size: 14px;
        }

        .wheel-next {
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 40px;
          font-size: 14px;
        }

        .wheel-play {
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 20px;
          font-size: 14px;
        }

        .wheel-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(145deg, #f0f0f0, #d8d8d8);
          box-shadow: 
            inset 0 0 0 2px #ccc,
            0 2px 4px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: background 0.1s;
        }

        .wheel-center:hover {
          background: linear-gradient(145deg, #f5f5f5, #e0e0e0);
        }

        .wheel-center:active {
          background: linear-gradient(145deg, #e8e8e8, #d0d0d0);
          box-shadow: 
            inset 0 0 0 2px #ccc,
            0 1px 2px rgba(0, 0, 0, 0.2),
            inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .ipod-instructions {
          margin-top: 15px;
          font-size: 10px;
          color: #666;
          text-align: center;
          line-height: 1.3;
        }

        /* Scrollbar styling for the menu */
        .ipod-display::-webkit-scrollbar {
          width: 6px;
        }

        .ipod-display::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        .ipod-display::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 3px;
        }

        .ipod-display::-webkit-scrollbar-thumb:hover {
          background: #777;
        }
      `}</style>
    </div>
  );
};

export default RetroIPod;
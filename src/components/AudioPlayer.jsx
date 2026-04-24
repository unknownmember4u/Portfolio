import React, { useState, useEffect, useRef } from 'react';
import { connectAudioElement } from '../utils/audioAnalyzer';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.5;
          connectAudioElement(audioRef.current);
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("Autoplay blocked. Monitoring global interaction to unlock...");
        
        const unlockEvents = ['click', 'keydown', 'touchstart', 'mousedown'];
        
        const handleUnlock = async () => {
           if (audioRef.current && audioRef.current.paused) {
             try {
               connectAudioElement(audioRef.current);
               await audioRef.current.play();
               setIsPlaying(true);
               
               // Success! Clean up all listeners
               unlockEvents.forEach(event => {
                 document.removeEventListener(event, handleUnlock);
               });
             } catch(e) {
               console.error("Audio unlock failed:", e);
             }
           }
        };

        unlockEvents.forEach(event => {
          document.addEventListener(event, handleUnlock, { once: true });
        });
      }
    };
    
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bg-music.mp3" loop />
      <button 
        onClick={togglePlay}
        style={{
          position: 'fixed',
          bottom: '5rem', 
          right: '2rem',
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid var(--primary-color)',
          color: 'var(--primary-color)',
          padding: '12px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 10px rgba(0, 255, 65, 0.2)',
          transition: 'all 0.2s ease',
          backdropFilter: 'blur(4px)'
        }}
        onMouseOver={(e) => {
           e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.6)';
           e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
           e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.2)';
           e.currentTarget.style.transform = 'scale(1)';
        }}
        title={isPlaying ? "Pause Ambient Background Music" : "Play Ambient Background Music"}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        )}
      </button>
    </>
  );
};

export default AudioPlayer;

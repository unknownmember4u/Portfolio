import React, { useState, useEffect } from 'react';

const bootMessages = [
  "Loading Linux linux...",
  "Loading initial ramdisk...",
  "Starting systemd-udevd version 253.1-1-arch",
  "Starting Show Plymouth Boot Screen...",
  "Started Forward Password Requests to Plymouth Directory Watch.",
  "Reached target Local Encrypted Volumes.",
  "[  OK  ] Reached target Paths.",
  "[  OK  ] Reached target Slices.",
  "[  OK  ] Listening on Device-mapper event daemon FIFOs.",
  "[  OK  ] Listening on Process Core Dump Socket.",
  "[  OK  ] Listening on initctl Compatibility Named Pipe.",
  "[  OK  ] Listening on Journal Socket (/dev/log).",
  "[  OK  ] Listening on Journal Socket.",
  "[  OK  ] Listening on udev Control Socket.",
  "[  OK  ] Listening on udev Kernel Socket.",
  "Mounting Huge Pages File System...",
  "Mounting POSIX Message Queue File System...",
  "Mounting Kernel Debug File System...",
  "[  OK  ] Started Remount Root and Kernel File Systems.",
  "[  OK  ] Reached target Local File Systems (Pre).",
  "[  OK  ] Reached target Local File Systems.",
  "Starting Network Time Synchronization...",
  "[  OK  ] Started Network Time Synchronization.",
  "Starting Update UTMP about System Boot/Shutdown...",
  "[  OK  ] Reached target System Initialization.",
  "[  OK  ] Started Daily Cleanup of Temporary Directories.",
  "[  OK  ] Reached target Basic System.",
  "Starting Network Service...",
  "[  OK  ] Started Network Service.",
  "Starting Login Service...",
  "[  OK  ] Started Login Service.",
  "[  OK  ] Reached target Multi-User System.",
  "[  OK  ] Reached target Graphical Interface.",
  "Starting load user profile...",
  "Welcome to Prakash Gond Portfolio!"
];

const BootSequence = ({ onComplete }) => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) {
      const handleStart = () => setStarted(true);
      window.addEventListener('keydown', handleStart);
      window.addEventListener('click', handleStart);
      return () => {
        window.removeEventListener('keydown', handleStart);
        window.removeEventListener('click', handleStart);
      };
    }

    if (currentIndex < bootMessages.length) {
      const isFast = currentIndex > 2 && currentIndex < bootMessages.length - 2;
      const timeoutTime = isFast ? Math.random() * 20 + 10 : Math.random() * 200 + 100;

      const timer = setTimeout(() => {
        setMessages(prev => [...prev, bootMessages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, timeoutTime);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete, started]);

  if (!started) {
    return (
      <div style={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        color: 'var(--primary-color)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>[ SYSTEM READY ]</div>
        <div className="cursor-blink" style={{ fontSize: '1rem' }}>PRESS ANY KEY TO BOOT _</div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', opacity: 0.8 }}>
      {messages.map((msg, idx) => (
        <div key={idx} style={{
          color: msg.includes('[  OK  ]') ? 'var(--primary-color)' : msg.includes('Welcome') ? 'var(--secondary-cyan)' : 'inherit',
          marginBottom: '2px'
        }}>
          {msg}
        </div>
      ))}
    </div>
  );
};

export default BootSequence;

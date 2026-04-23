import React, { useState, useEffect } from 'react';

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-GB', { hour12: false });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'var(--border-color)',
      color: 'var(--primary-color)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9rem',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.2rem 1rem',
      zIndex: 1000,
      borderBottom: '1px solid #222'
    }}>
      <div style={{ fontWeight: 'bold' }}>
        prakash@arch:~$
      </div>
      <div className="text-amber">
        [ {timeString} ]
      </div>
    </div>
  );
};

export default TopBar;

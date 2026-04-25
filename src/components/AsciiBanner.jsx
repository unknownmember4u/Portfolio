import React from 'react';

const AsciiBanner = () => {
  return (
    <div 
      style={{ 
        margin: '1rem 0', 
        fontFamily: "'Minangrasa', cursive",
        fontSize: 'clamp(3rem, 10vw, 7.5rem)', 
        color: 'var(--primary-color)',
        textShadow: '0 0 15px var(--primary-color)',
        lineHeight: '1',
        letterSpacing: '3px',
        padding: '1rem 0',
        textAlign: 'center',
        width: '100%',
        wordBreak: 'break-word'
      }}
    >
      Prakash
    </div>
  );
};

export default AsciiBanner;

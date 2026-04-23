import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

const PromptWrapper = ({ command, children, delay = 0, onComplete, executeDelay = 400 }) => {
  const [typed, setTyped] = useState(false);
  const [executed, setExecuted] = useState(false);

  useEffect(() => {
    if (typed) {
      const timer = setTimeout(() => {
        setExecuted(true);
        if (onComplete) onComplete();
      }, executeDelay);
      return () => clearTimeout(timer);
    }
  }, [typed, executeDelay, onComplete]);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span className="text-green" style={{ marginRight: '8px' }}>
          prakash@archlinux<span className="text-cyan">~</span>$ 
        </span>
        <Typewriter 
          text={command} 
          delay={delay} 
          onComplete={() => setTyped(true)} 
        />
        {!executed && typed && <span className="cursor-blink" style={{ background: 'var(--primary-color)', width: '8px', height: '16px', display: 'inline-block', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}></span>}
      </div>
      {executed && (
        <div style={{ paddingLeft: '0' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PromptWrapper;

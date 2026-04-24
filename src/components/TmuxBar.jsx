import React, { useState, useEffect } from 'react';

const TmuxBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call
    handleScroll();

    // Setup generic mutation observer to detect doc height changes dynamically
    const observer = new MutationObserver(handleScroll);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const progressInt = Math.round(scrollProgress);
  const totalBlocks = 8;
  const activeBlocks = Math.round((progressInt / 100) * totalBlocks);
  const barStr = '█'.repeat(activeBlocks) + '░'.repeat(totalBlocks - activeBlocks);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'var(--primary-color)',
      color: 'var(--bg-color)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.85rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.1rem 0.5rem',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((label, idx) => (
          <span
            key={label}
            style={{ fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => scrollToId(label === 'about' ? 'manpage' : label)}
          >
            [{idx + 1}:{label}]
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span className="hide-on-mobile" style={{ opacity: 0.8 }}>Portfolio [more to add]</span>
      </div>
    </div>
  );
};

export default TmuxBar;

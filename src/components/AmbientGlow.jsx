import React, { useEffect, useState } from 'react';

const AmbientGlow = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      // Throttle mouse moves via requestAnimationFrame to keep it performant
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, rgba(0, 255, 65, 0.04), transparent 80%)`,
        transition: 'background 0.1s easeOut'
      }}
    />
  );
};

export default AmbientGlow;

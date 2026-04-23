import React, { useState, useRef, useEffect } from 'react';
import PromptWrapper from './PromptWrapper';

const ScrollSection = ({ id, command, children, delay = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} style={{ minHeight: '30vh', padding: '2rem 0', position: 'relative' }}>
      {isVisible && (
        <PromptWrapper command={command} delay={delay}>
          {children}
        </PromptWrapper>
      )}
      {!isVisible && (
        <div style={{ opacity: 0.1, color: 'var(--primary-color)' }}>
          [ Waiting for intersection point ... ]
        </div>
      )}
    </section>
  );
};

export default ScrollSection;

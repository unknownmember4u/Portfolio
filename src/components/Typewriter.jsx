import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay = 0, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (!hasStarted) {
      timeoutId = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(timeoutId);
    }

    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(typingInterval);
        if (onComplete) onComplete();
      }
    }, speed + Math.random() * 20); // Add jitter for "human" feel

    return () => clearInterval(typingInterval);
  }, [text, delay, speed, hasStarted, onComplete]);

  return <span>{displayedText}</span>;
};

export default Typewriter;

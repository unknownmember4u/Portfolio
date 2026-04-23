import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "Cloud Computing & DevOps", 
  "Linux Enthusiast", 
  "Hackathon Winner", 
  "Open Source Contributor", 
  "unknownmember4u"
];

const TypewriterCycler = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[index];

    if (isDeleting) {
      setTypingSpeed(50);
      if (text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(100);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, typingSpeed);
      }
    } else {
      if (text === currentPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait before deleting
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, typingSpeed]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '1.5rem' }}>
      <span className="text-green">{text}</span>
      <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        style={{ 
          display: 'inline-block', 
          width: '8px', 
          height: '18px', 
          backgroundColor: 'var(--primary-color)', 
          marginLeft: '4px' 
        }}
      />
    </div>
  );
};

export default TypewriterCycler;

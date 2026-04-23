import React from 'react';
import { motion } from 'framer-motion';

const TerminalWindow = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        border: '1px solid #333',
        borderRadius: '8px',
        backgroundColor: 'var(--bg-color)',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '900px',
        margin: '2rem auto',
        flexShrink: 0
      }}
    >
      <div style={{
        backgroundColor: '#1E1E1E',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #333',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
        </div>
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#aaa',
          fontSize: '0.85rem'
        }}>
          prakash@arch:~$
        </div>
      </div>
      <div style={{ padding: '1.5rem', minHeight: '60vh', overflowY: 'auto' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;

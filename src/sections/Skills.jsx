import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MatrixRain from '../components/MatrixRain';

const TuiPanel = ({ title, children }) => {
  return (
    <div className="tui-panel" style={{ 
      width: '100%', 
      maxWidth: '72ch', 
      marginBottom: '1rem', 
      color: '#ccc', 
      fontSize: '0.9rem',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--secondary-cyan)',
      padding: '0.5rem 0'
    }}>
      <div style={{ 
        position: 'absolute', 
        top: '-0.7rem', 
        left: '1rem', 
        backgroundColor: 'var(--bg-color)', 
        padding: '0 0.5rem',
        color: 'var(--secondary-cyan)'
      }}>
        [{title}]
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

const SkillRow = ({ name, percent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const barWidth = 20; // Smaller for mobile, scales up via flex
  const filledCount = Math.round((percent / 100) * barWidth);
  const emptyCount = barWidth - filledCount;

  return (
    <div
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0.2rem 1rem', 
        cursor: 'crosshair', 
        position: 'relative',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ width: '12ch', flexShrink: 0, color: isHovered ? 'var(--primary-color)' : 'inherit' }}>
        {name}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: '150px' }}>
        <div style={{ display: 'flex', letterSpacing: '-1px' }}>
          <span className={isHovered ? 'text-amber' : 'text-green'}>{'█'.repeat(filledCount)}</span>
          <span style={{ color: '#333' }}>{'░'.repeat(emptyCount)}</span>
        </div>
        <div style={{ width: '4ch', textAlign: 'right' }}>{percent}%</div>
      </div>

      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '-24px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#0a0a0a',
          border: '1px solid var(--secondary-amber)',
          color: 'var(--secondary-amber)',
          padding: '2px 8px',
          fontSize: '0.8rem',
          zIndex: 10,
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 6px rgba(0,0,0,0.5)'
        }}>
          [INFO] {name} loaded
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '2rem', position: 'relative', overflow: 'visible' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.8 }}>
        <MatrixRain />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '1rem', color: '#666', fontStyle: 'italic' }}>
          # ambient mode engaged
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <TuiPanel title="Cloud & DevOps">
            <SkillRow name="AWS" percent={85} />
            <SkillRow name="Cloud Infra" percent={60} />
            <SkillRow name="Docker" percent={70} />
            <SkillRow name="Git & GitHub" percent={80} />
            <SkillRow name="Ansible" percent={55} />
            <SkillRow name="Systemd" percent={50} />
          </TuiPanel>

          <TuiPanel title="Tools & Environ">
            <SkillRow name="Linux (Arch)" percent={85} />
            <SkillRow name="Vim/Terminal" percent={70} />
          </TuiPanel>

          <TuiPanel title="ML & Data">
            <SkillRow name="Core ML" percent={65} />
          </TuiPanel>

          <TuiPanel title="Languages">
            <SkillRow name="Python" percent={55} />
            <SkillRow name="Java" percent={65} />
          </TuiPanel>

          <TuiPanel title="Other">
            <SkillRow name="Adobe Photoshop" percent={85} />
          </TuiPanel>
        </div>

        {/* Neofetch color palette strip */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', gap: '0.25rem' }}>
          {['#0A0A0A', '#FF5F56', '#27C93F', '#FFBD2E', '#00FFFF', '#FF00FF', '#00FF41', '#FFFFFF'].map((color, idx) => (
            <span key={idx} style={{ color: color, fontSize: '1.2rem', lineHeight: '1' }}>■</span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Skills;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MatrixRain from '../components/MatrixRain';

const TuiPanel = ({ title, widthCh = 46, children }) => {
  const topLength = widthCh - 4 - title.length;
  const topLine = `┌─ ${title} ` + '─'.repeat(topLength > 0 ? topLength : 0) + '┐';
  const bottomLine = '└' + '─'.repeat(widthCh - 2) + '┘';

  return (
    <div className="tui-panel" style={{ width: `${widthCh}ch`, maxWidth: '100%', overflowX: 'auto', marginBottom: '1rem', color: '#ccc', fontSize: '0.9rem' }}>
      <div className="text-cyan" style={{ whiteSpace: 'pre' }}>{topLine}</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
      <div className="text-cyan" style={{ whiteSpace: 'pre' }}>{bottomLine}</div>
    </div>
  );
};

const SkillRow = ({ name, percent, widthCh = 46 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const barWidth = 10;
  const filledCount = Math.round((percent / 100) * barWidth);
  const emptyCount = barWidth - filledCount;
  
  const nameMaxLen = 16;
  const truncatedName = name.length > nameMaxLen ? name.substring(0, nameMaxLen - 2) + '..' : name;
  const namePadded = truncatedName.padEnd(nameMaxLen, ' ');
  const pctStr = `${percent}%`.padStart(4, ' ');
  
  const innerContentLength = nameMaxLen + 2 + barWidth + 2 + 4; // 16 + 2 + 10 + 2 + 4 = 34
  const spaces = Math.max(0, widthCh - 2 - innerContentLength);
  const padRight = ' '.repeat(spaces);

  return (
    <div 
      style={{ display: 'flex', whiteSpace: 'pre', cursor: 'crosshair', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-cyan">│</span>
      <span style={{ color: isHovered ? 'var(--primary-color)' : 'inherit', marginLeft: '1ch' }}>
        {namePadded} [<span className={isHovered ? 'text-amber' : 'text-green'}>{'█'.repeat(filledCount)}</span><span style={{color: '#444'}}>{'░'.repeat(emptyCount)}</span>] {pctStr}{padRight.substring(1)}
      </span>
      <span className="text-cyan">│</span>
      
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
          [INFO] {name} loaded successfully.
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <TuiPanel title="Cloud & DevOps">
            <SkillRow name="AWS" percent={80} />
            <SkillRow name="Cloud Infra" percent={75} />
            <SkillRow name="Docker" percent={85} />
            <SkillRow name="Git & GitHub" percent={90} />
            <SkillRow name="Ansible" percent={70} />
            <SkillRow name="Systemd" percent={65} />
            <SkillRow name="Shell Script" percent={80} />
          </TuiPanel>

          <TuiPanel title="Languages">
            <SkillRow name="Python" percent={85} />
            <SkillRow name="Java" percent={80} />
            <SkillRow name="JavaScript" percent={75} />
            <SkillRow name="Rust" percent={60} />
            <SkillRow name="Bash/Shell" percent={85} />
          </TuiPanel>

          <TuiPanel title="ML & Data">
            <SkillRow name="TensorFlow" percent={70} />
            <SkillRow name="Core ML" percent={65} />
            <SkillRow name="Data Analysis" percent={75} />
          </TuiPanel>

          <TuiPanel title="Tools & Environ">
            <SkillRow name="Linux (Arch)" percent={90} />
            <SkillRow name="Vim/Terminal" percent={85} />
            <SkillRow name="Adobe Photoshop" percent={60} />
          </TuiPanel>

          <TuiPanel title="Certifications">
            <SkillRow name="RSOC" percent={100} />
            <SkillRow name="ECOHON" percent={100} />
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

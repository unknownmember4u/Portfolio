import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MatrixRain from '../components/MatrixRain';

const TuiPanel = ({ title, widthCh = 80, children }) => {
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

const SkillRow = ({ name, percent, widthCh = 80 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const barWidth = 35;
  const filledCount = Math.round((percent / 100) * barWidth);
  const emptyCount = barWidth - filledCount;

  const nameMaxLen = 20;
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
        {namePadded} [<span className={isHovered ? 'text-amber' : 'text-green'}>{'█'.repeat(filledCount)}</span><span style={{ color: '#444' }}>{'░'.repeat(emptyCount)}</span>] {pctStr}{padRight.substring(1)}
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start' }}>

          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TuiPanel title="Cloud & DevOps">
              <SkillRow name="AWS" percent={85} />
              <SkillRow name="Cloud Infra" percent={60} />
              <SkillRow name="Docker" percent={70} />
              <SkillRow name="Git & GitHub" percent={80} />
              <SkillRow name="Ansible" percent={55} />
              <SkillRow name="Systemd" percent={50} />
            </TuiPanel>

            <TuiPanel title="Languages">
              <SkillRow name="Python" percent={55} />
              <SkillRow name="Java" percent={65} />
            </TuiPanel>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TuiPanel title="Tools & Environ">
              <SkillRow name="Linux (Arch)" percent={85} />
              <SkillRow name="Vim/Terminal" percent={70} />
            </TuiPanel>

            <TuiPanel title="Certifications & Wins">
              <SkillRow name="TECHXION-2.0" percent={100} msg="[★] WINNER - Overall Champion" />
              <SkillRow name="CODE-LEAGUE-1.0" percent={95} msg="[🥈] 1st RUNNER UP" />
              <SkillRow name="HACKBYTE 4.0" percent={85} />
              <SkillRow name="RSOC" percent={100} msg="Ranked Participant" />
              <SkillRow name="ECOHON" percent={100} msg="Ranked Participant" />
              <SkillRow name="BYTEQUEST" percent={80} />
              <SkillRow name="TECHMENTORX" percent={75} />
              <SkillRow name="HACKATHONIX-2.0" percent={90} />
              <SkillRow name="BUILD.EXE" percent={80} />
            </TuiPanel>

            <TuiPanel title="ML & Data">
              <SkillRow name="Core ML" percent={65} />
            </TuiPanel>

            <TuiPanel title="Other">
              <SkillRow name="Adobe Photoshop" percent={85} />
            </TuiPanel>

          </div>

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

import React from 'react';
import { motion } from 'framer-motion';

const HLine = ({ left, right }) => (
  <div style={{ display: 'flex', width: '100%' }}>
    <div>{left}</div>
    <div style={{ flex: 1, overflow: 'hidden', whiteSpace: 'nowrap' }}>{'─'.repeat(300)}</div>
    <div>{right}</div>
  </div>
);

const ScoreRow = ({ icon, title, status }) => {
  return (
    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <div style={{ width: '1ch' }}>│</div>
      <div style={{ flex: 1, display: 'flex', padding: '0 2ch', alignItems: 'center', whiteSpace: 'nowrap', minWidth: 0 }}>
        <div style={{ width: '3ch', textAlign: 'center' }}>{icon}</div>
        <div style={{ width: '1ch' }}> </div>
        <div style={{ flexShrink: 0 }}>{title}</div>
        <div style={{ flex: 1, color: '#555', overflow: 'hidden', minWidth: 0, margin: '0 1.5ch' }}>
          {'.'.repeat(200)}
        </div>
        <div style={{ flexShrink: 0, textAlign: 'right' }}>{status}</div>
      </div>
      <div style={{ width: '1ch' }}>│</div>
    </div>
  );
};

const AchievementCard = ({ title, imgUrl, commandIdx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ marginBottom: '2rem' }}
    >
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.5, repeat: 3 }}
        style={{ color: 'var(--secondary-amber)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.85rem' }}
      >
        [NEW ACHIEVEMENT UNLOCKED]
      </motion.div>

      <div style={{ color: '#ccc', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
        <span className="text-green">prakash@arch</span><span className="text-cyan">~</span>$ chafa {title}.jpg
      </div>

      <div style={{
        border: '2px solid var(--primary-color)',
        padding: '2px',
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        backgroundColor: '#0a0a0a'
      }}>
        {/* Fake inline scanline specifically for the image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 50%, rgba(0, 0, 0, 0.3) 50%)',
          backgroundSize: '100% 4px',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            filter: 'contrast(1.2) sepia(1) hue-rotate(80deg) saturate(3) brightness(0.8)', // Forces a green tint terminal look
            zIndex: 1
          }}
        />
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-cyan"
        style={{
          margin: '0 0 2rem 0',
          lineHeight: '1.2',
          fontSize: '0.9rem',
          textShadow: '0 0 5px var(--secondary-cyan)',
          overflowX: 'auto',
          paddingBottom: '1rem'
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <HLine left="┌" right="┐" />
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '1ch' }}>│</div>
            <div style={{ flex: 1, textAlign: 'center' }}>[HACKATHONS] prakash@arch — ACHIEVEMENTS UNLOCKED</div>
            <div style={{ width: '1ch' }}>│</div>
          </div>
          <HLine left="├" right="┤" />

          <ScoreRow icon="👑" title="TECHXION-2.0 WINNER" status="[WINNER]" />
          <ScoreRow icon="🥈" title="CODE-LEAGUE-1.0" status="[RUNNER-UP]" />
          <ScoreRow icon="⚡" title="HACKBYTE 4.0" status="[FINALIST]" />
          <ScoreRow icon="🔐" title="RSOC" status="[FINALIST]" />
          <ScoreRow icon="🌿" title="ECOHON" status="[FINALIST]" />
          <ScoreRow icon="⚙️" title="BYTEQUEST" status="[FINALIST]" />
          <ScoreRow icon="📋" title="TECHMENTORX" status="[FINALIST]" />
          <ScoreRow icon="🚀" title="HACKATHONIX-2.0" status="[FINALIST]" />
          <ScoreRow icon="🛠️" title="BUILD.EXE" status="[FINALIST]" />
          <ScoreRow icon="⏱️" title="TECHSPRINT" status="[FINALIST]" />

          <HLine left="└" right="┘" />
        </div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        <AchievementCard
          title="hackathon_win_1"
          imgUrl="https://placehold.co/600x400/101010/00ff41/png?text=HACKATHON+WIN+1+IMG"
          commandIdx={1}
        />
        <AchievementCard
          title="hackathon_tech_demo"
          imgUrl="https://placehold.co/600x400/101010/00ff41/png?text=HACKATHON+TECH+DEMO"
          commandIdx={2}
        />
        <AchievementCard
          title="cert_rsoc_eco_hon"
          imgUrl="https://placehold.co/600x400/101010/00ff41/png?text=CERTIFICATE+RECORDS"
          commandIdx={3}
        />
      </div>
    </div>
  );
};

export default Achievements;

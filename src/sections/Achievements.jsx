import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const AchievementCard = ({ title, imgUrl, onClick }) => {
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

      <div
        onClick={() => onClick(imgUrl)}
        style={{
          border: '2px solid var(--primary-color)',
          padding: '2px',
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          backgroundColor: '#0a0a0a',
          cursor: 'zoom-in'
        }}
      >
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
  const [selectedImg, setSelectedImg] = React.useState(null);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              cursor: 'zoom-out',
              padding: '2rem'
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                border: '4px solid var(--primary-color)',
                boxShadow: '0 0 30px var(--primary-color)'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: 'var(--primary-color)',
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'var(--font-mono)'
            }}>
              [ ESC / CLICK TO CLOSE ]
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          title="techxion_winner"
          imgUrl="/achievements/techxion_winner.jpeg"
          onClick={setSelectedImg}
        />
        <AchievementCard
          title="codeleague_1st_runner_up"
          imgUrl="/achievements/codeleague.jpeg"
          onClick={setSelectedImg}
        />
        <AchievementCard
          title="hackbyte_iiitdmj_4th_rank"
          imgUrl="/achievements/hackbyte_rank.jpeg"
          onClick={setSelectedImg}

        />
      </div>
    </div>
  );
};

export default Achievements;

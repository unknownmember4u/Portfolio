import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hackathons = [
  { title: 'TECHXION-2.0', status: 'WINNER', color: 'var(--secondary-amber)' },
  { title: 'CODE-LEAGUE-1.0', status: 'RUNNER-UP', color: 'var(--secondary-cyan)' },
  { title: 'HACKBYTE 4.0', status: 'FINALIST', color: 'var(--primary-color)' },
  { title: 'RSOC', status: 'FINALIST', color: '#ccc' },
  { title: 'ECOHON', status: 'FINALIST', color: '#ccc' },
  { title: 'BYTEQUEST', status: 'FINALIST', color: '#ccc' },
  { title: 'TECHMENTORX', status: 'FINALIST', color: '#ccc' },
  { title: 'HACKATHONIX-2.0', status: 'FINALIST', color: '#ccc' },
  { title: 'BUILD.EXE', status: 'FINALIST', color: '#ccc' },
  { title: 'TECHSPRINT', status: 'FINALIST', color: '#ccc' }
];

const AchievementGalleryCard = ({ title, imgUrl, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={() => onClick(imgUrl)}
      className="glass-card"
      style={{
        cursor: 'zoom-in',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        borderRadius: '8px',
        position: 'relative'
      }}>
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ color: 'var(--secondary-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
        view
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div style={{ marginBottom: '4rem' }}>
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
              padding: '2rem',
              backdropFilter: 'blur(5px)'
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              style={{
                maxWidth: '95%',
                maxHeight: '80vh',
                border: '1px solid var(--primary-color)',
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            <div style={{
              position: 'fixed',
              top: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#000',
              fontSize: 'clamp(0.7rem, 2.5vw, 1rem)',
              fontWeight: 'bold',
              fontFamily: 'var(--font-mono)',
              backgroundColor: 'var(--primary-color)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              zIndex: 10000,
              whiteSpace: 'nowrap'
            }}>
              TAP TO CLOSE
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* Hackathon Badges */}
        <div className="glass-card">
          <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--secondary-cyan)' }}>//</span> Hackathon Standings
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {hackathons.map((hack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${hack.color}40`,
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{hack.icon}</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '0.9rem' }}>{hack.title}</span>
                  <span style={{ color: hack.color, fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>{hack.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--secondary-cyan)' }}>//</span> Memories
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <AchievementGalleryCard
              title="TechXion Winner"
              imgUrl="/achievements/techxion_winner.jpeg"
              onClick={setSelectedImg}
            />
            <AchievementGalleryCard
              title="Code League Runner Up"
              imgUrl="/achievements/codeleague.jpeg"
              onClick={setSelectedImg}
            />
            <AchievementGalleryCard
              title="Hackbyte Rank"
              imgUrl="/achievements/hackbyte_rank.jpeg"
              onClick={setSelectedImg}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievements;

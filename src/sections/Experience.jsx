import React from 'react';
import { motion } from 'framer-motion';

const defaultData = [
  { role: 'New Horizons', type: 'Upcoming', date: '2026-Beyond', detail: 'Awaiting initialization sequence for upcoming roles and opportunities.', status: 'SCHEDULED', color: 'var(--secondary-cyan)' },
  { role: 'BTech CSE @ RBU', type: 'Education', date: '2025-2028', detail: 'Pursuing Bachelor of Technology in Computer Science and Engineering. Active member of competitive programming societies.', status: 'RUNNING', color: 'var(--primary-color)' },
  { role: 'Cloud Intern @ Informatrix', type: 'Experience', date: 'Jan-Jun 2025', detail: 'Spearheaded infrastructure automation utilizing Docker and AWS. Reduced deployment overhead significantly.', status: 'COMPLETED', color: 'var(--secondary-amber)' },
  { role: 'Diploma CE @ GPC', type: 'Education', date: '2022-2025', detail: 'Completed Diploma in Computer Engineering. Developed robust structural foundations in software philosophy.', status: 'COMPLETED', color: '#888' },
];

const Experience = () => {
  return (
    <div style={{ marginBottom: '4rem', position: 'relative' }}>
      {/* Vertical Line */}
      <div style={{
        position: 'absolute',
        left: '1.5rem',
        top: '1rem',
        bottom: '1rem',
        width: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        zIndex: 0
      }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {defaultData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}
          >
            {/* Timeline Node */}
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-color)',
              border: `2px solid ${item.color}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              boxShadow: `0 0 10px ${item.color}40`
            }}>
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: item.color }}></div>
            </div>

            {/* Content Card */}
            <div className="glass-card" style={{ flexGrow: 1, padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                <h3 style={{ margin: 0, color: '#fff', fontSize: '1.3rem' }}>{item.role}</h3>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: item.color,
                  border: `1px solid ${item.color}40`,
                  backgroundColor: `${item.color}10`,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '12px'
                }}>
                  [{item.status}]
                </span>
              </div>
              
              <div style={{ color: 'var(--secondary-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {item.type} | {item.date}
              </div>
              
              <p style={{ color: '#ccc', margin: 0, lineHeight: '1.6' }}>
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

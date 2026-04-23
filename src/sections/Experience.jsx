import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultData = [
  { user: 'prakash', pid: '001', cpu: 85.0, mem: 90.0, role: 'Cloud Intern @ Informatrix', status: 'RUNNING', date: 'Jan-Jun 2025', detail: 'Spearheaded infrastructure automation utilizing Docker and AWS. Reduced deployment overhead significantly.' },
  { user: 'prakash', pid: '002', cpu: 70.0, mem: 75.0, role: 'BTech CSE @ RBU', status: 'RUNNING', date: '2025-2028', detail: 'Pursuing Bachelor of Technology in Computer Science and Engineering. Active member of competitive programming societies.' },
  { user: 'prakash', pid: '003', cpu: 60.0, mem: 65.0, role: 'Diploma CE @ GPC', status: 'EXITED', date: '2022-2025', detail: 'Completed Diploma in Computer Engineering. Developed robust structural foundations in software philosophy.' },
  { user: 'root',    pid: '000', cpu: 0.1,  mem: 0.1,  role: 'New Horizons', status: 'SCHEDULED', date: '2026-Beyond', detail: 'Awaiting initialization sequence for upcoming roles.' }
];

const Experience = () => {
  const [data, setData] = useState(defaultData);
  const [sortConfig, setSortConfig] = useState({ key: 'pid', direction: 'asc' });
  const [isSorting, setIsSorting] = useState(false);
  const [hoveredPid, setHoveredPid] = useState(null);

  const handleSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    
    setIsSorting(true);
    setSortConfig({ key, direction });

    setTimeout(() => {
      const sortedData = [...data].sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setData(sortedData);
      setIsSorting(false);
    }, 500);
  };

  const padRight = (str, len) => str.toString().padEnd(len, ' ');
  const padLeft = (str, len) => str.toString().padStart(len, ' ');

  const getStatusBadge = (status) => {
    if (status === 'RUNNING') return <span className="text-green">[{status}] <span style={{ animation: 'blink 1s step-end infinite' }}>●</span></span>;
    if (status === 'EXITED') return <span className="text-amber">[{status}]  </span>;
    if (status === 'SCHEDULED') return <span className="text-cyan">[{status}]</span>;
    return <span>[{status}]</span>;
  };

  return (
    <div style={{ marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
      {isSorting && (
        <div style={{ color: 'var(--secondary-cyan)', marginBottom: '1rem', fontStyle: 'italic' }}>
          * Sorting by {sortConfig.key.toUpperCase()}... Please wait.
        </div>
      )}
      
      {!isSorting && (
        <div style={{ width: '100%', overflowX: 'auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', borderBottom: '1px solid #333', paddingBottom: '0.5rem', fontWeight: 'bold', color: 'var(--secondary-cyan)' }}>
            <div style={{ width: '10%', cursor: 'pointer' }} onClick={() => handleSort('user')}>USER</div>
            <div style={{ width: '10%', cursor: 'pointer' }} onClick={() => handleSort('pid')}>PID</div>
            <div style={{ width: '10%', cursor: 'pointer' }} onClick={() => handleSort('cpu')}>%CPU</div>
            <div style={{ width: '10%', cursor: 'pointer' }} onClick={() => handleSort('mem')}>%MEM</div>
            <div style={{ width: '25%', cursor: 'pointer' }} onClick={() => handleSort('role')}>ROLE</div>
            <div style={{ width: '35%', cursor: 'pointer' }} onClick={() => handleSort('status')}>STATUS</div>
          </div>
          
          {/* Body */}
          <div>
            {data.map((row) => (
              <div 
                key={row.pid}
                onMouseEnter={() => setHoveredPid(row.pid)}
                onMouseLeave={() => setHoveredPid(null)}
                style={{ 
                  borderBottom: '1px dashed #222', 
                  backgroundColor: hoveredPid === row.pid ? 'rgba(0, 255, 65, 0.05)' : 'transparent',
                  transition: 'background-color 0.2s',
                  padding: '0.5rem 0'
                }}
              >
                <div style={{ display: 'flex', color: '#ccc' }}>
                  <div style={{ width: '10%' }}>{row.user}</div>
                  <div style={{ width: '10%' }}>{row.pid}</div>
                  <div style={{ width: '10%' }}>{row.cpu.toFixed(1)}</div>
                  <div style={{ width: '10%' }}>{row.mem.toFixed(1)}</div>
                  <div style={{ width: '25%', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.role}</div>
                  <div style={{ width: '35%', display: 'flex', gap: '1rem' }}>
                    <div style={{ minWidth: '100px' }}>{getStatusBadge(row.status)}</div>
                    <div style={{ color: '#888' }}>{row.date}</div>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredPid === row.pid && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '1rem', marginTop: '0.5rem', backgroundColor: '#111', borderLeft: '2px solid var(--secondary-cyan)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <p style={{ color: '#aaa', margin: 0, paddingRight: '1rem' }}>{row.detail}</p>
                          <button 
                            style={{
                              backgroundColor: 'transparent',
                              border: '1px solid var(--secondary-amber)',
                              color: 'var(--secondary-amber)',
                              padding: '2px 8px',
                              cursor: 'pointer',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.8rem',
                              whiteSpace: 'nowrap'
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              alert(`Permission denied: Cannot kill process ${row.pid}. Process is critical to system operation.`);
                            }}
                          >
                            kill -9 {row.pid}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;

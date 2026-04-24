import React from 'react';
import { motion } from 'framer-motion';

const projectsList = [
  {
    title: 'NyayMitra',
    desc: 'An AI-powered Legal Aid platform designed to provide accessible legal information and assistance based on complex local laws.',
    link: 'https://github.com/unknownmember4u/NyayMitra'
  },
  {
    title: 'Daemon',
    desc: 'A system-level daemon developed in Python for extensive background task scheduling and system monitoring overhead.',
    link: 'https://github.com/unknownmember4u/Daemon'
  },
  {
    title: 'stellar-state',
    desc: 'A blazing-fast library bridging low-level state management systems developed meticulously in pure Rust.',
    link: 'https://github.com/unknownmember4u/stellar-state'
  },
  {
    title: 'PRnote',
    desc: 'A streamlined web-based utility designed for seamlessly managing personal development notes and snippet artifacts.',
    link: 'https://github.com/unknownmember4u/PRnote'
  },
  {
    title: 'PentestIQ',
    desc: 'A comprehensive reconnaissance and payload generation wrapper system designed for intelligent penetration testing workflows.',
    link: 'https://github.com/unknownmember4u/PentestIQ'
  },
  {
    title: 'YatraSathi',
    desc: 'A modern mobility routing and travel-management system delivering optimized paths and regional hackathon assistance.',
    link: 'https://github.com/unknownmember4u/Hack-Arena-OverClocked'
  },
  {
    title: 'Automated Backup/Restore System',
    desc: 'A production-ready containerized shell-based DevOps utility that efficiently automates database snapshots and native restores.',
    link: 'https://github.com/unknownmember4u/Automated-Backup-Restore-System'
  },
  {
    title: 'Downloads Organizer',
    desc: 'An Arch Linux system daemon leveraging deployment scripts to perpetually categorize and organize your local file pathways.',
    link: 'https://github.com/unknownmember4u/Downloads-Organizer'
  },
  {
    title: 'AI-Veritas',
    desc: 'A specialized verification engine utilizing AI models to actively cross-reference and definitively fact-check online claims.',
    link: 'https://github.com/unknownmember4u/Ai-Veritas'
  }
];

const ProjectCard = ({ proj }) => {
  return (
    <div style={{ display: 'flex', fontFamily: 'var(--font-mono)', paddingBottom: '2.5rem' }}>
      <div className="text-amber" style={{ width: '2.5rem', fontSize: '1.5rem', lineHeight: '1.1' }}>*</div>
      <div style={{ flex: 1, borderLeft: '1px solid #333', paddingLeft: '1.5rem' }}>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.8rem' }}>
          <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold' }}>{proj.title}</span>

          <a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              padding: '0.4rem 0.8rem',
              backgroundColor: 'rgba(0, 255, 65, 0.05)',
              border: '1px solid var(--primary-color)',
              color: 'var(--primary-color)',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = 'rgba(0, 255, 65, 0.2)'; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = 'rgba(0, 255, 65, 0.05)'; }}
          >
            [🔗 View on GitHub]
          </a>
        </div>

        <div style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.6' }}>
          {proj.desc}
        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '2rem', fontSize: '1rem' }}
    >
      <div style={{ marginBottom: '2.5rem', color: '#666', fontStyle: 'italic', fontSize: '0.9rem' }}>
        # active repositories compiled natively
      </div>

      {projectsList.map((proj) => (
        <ProjectCard key={proj.title} proj={proj} />
      ))}

    </motion.div>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';

const projectsList = [
  {
    title: 'NyayMitra',
    desc: 'An AI-powered Legal Aid platform designed to provide accessible legal information and assistance based on complex local laws.',
    link: 'https://github.com/unknownmember4u/NyayMitra',
    tags: ['AI', 'Legal Tech', 'Fullstack']
  },
  {
    title: 'Daemon',
    desc: 'A system-level daemon developed in Python for extensive background task scheduling and system monitoring overhead.',
    link: 'https://github.com/unknownmember4u/Daemon',
    tags: ['Python', 'System Tools', 'Linux']
  },
  {
    title: 'PRnote',
    desc: 'A streamlined web-based utility designed for seamlessly managing personal development notes and snippet artifacts.',
    link: 'https://github.com/unknownmember4u/PRnote',
    tags: ['Web App', 'Productivity']
  },
  {
    title: 'PentestIQ',
    desc: 'A comprehensive reconnaissance and payload generation wrapper system designed for intelligent penetration testing workflows.',
    link: 'https://github.com/unknownmember4u/PentestIQ',
    tags: ['Cybersecurity', 'Automation']
  },
  {
    title: 'Downloads Organizer',
    desc: 'An Arch Linux system daemon leveraging deployment scripts to perpetually categorize and organize your local file pathways.',
    link: 'https://github.com/unknownmember4u/Downloads-Organizer',
    tags: ['Bash', 'Automation', 'Linux']
  }
];

const ProjectCard = ({ proj, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card" 
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0, color: '#fff', fontSize: '1.4rem' }}>{proj.title}</h3>
        <a
          href={proj.link}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{ padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}
          aria-label={`View ${proj.title} on GitHub`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>

      <p style={{ color: '#ccc', flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.5' }}>
        {proj.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {proj.tags && proj.tags.map(tag => (
          <span key={tag} style={{ 
            fontSize: '0.75rem', 
            fontFamily: 'var(--font-mono)', 
            color: 'var(--secondary-cyan)', 
            backgroundColor: 'rgba(0, 255, 255, 0.1)', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px' 
          }}>
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem', color: 'var(--muted-text)', fontFamily: 'var(--font-mono)' }}>
        <span style={{ color: 'var(--secondary-amber)' }}>$</span> ls -la ./active_repositories
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {projectsList.map((proj, idx) => (
          <ProjectCard key={proj.title} proj={proj} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

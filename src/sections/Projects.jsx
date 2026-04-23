import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsList = [
  {
    sha: 'a3f9c12',
    title: 'NyayMitra — AI Legal Aid platform',
    subtitle: 'Built with JavaScript | AI/ML integration | Social Impact',
    desc: 'An AI-powered Legal Aid platform designed to provide accessible legal information and assistance based on complex local laws.',
    tech: 'JavaScript, AI/ML',
    repo: '#'
  },
  {
    sha: 'b4a8e3f',
    title: 'AI-Veritas — AI verification/fact-check tool',
    subtitle: 'Built with JavaScript | Fact Checking',
    desc: 'A verification engine utilizing AI models to cross-reference and fact-check articles and claims in real-time.',
    tech: 'JavaScript',
    repo: '#'
  },
  {
    sha: 'c9d1a2b',
    title: 'PentestIQ — Penetration testing intelligence tool',
    subtitle: 'Built with JavaScript | Cybersecurity',
    desc: 'A comprehensive reconnaissance and payload generation wrapper designed for intelligent penetration testing workflows.',
    tech: 'JavaScript',
    repo: '#'
  },
  {
    sha: 'd2f8e1a',
    title: 'Automated Backup/Restore System',
    subtitle: 'DevOps utility, containerized (2 stars)',
    desc: 'A production-ready containerized shell-based DevOps utility that automates database snapshots and scheduled backups natively.',
    tech: 'Shell, Docker',
    repo: '#'
  },
  {
    sha: 'e5b7c8d',
    title: 'Downloads Organizer',
    subtitle: 'Ansible + systemd Arch Linux tool (3 stars)',
    desc: 'An Arch Linux system daemon wrapped in Ansible deployment playbooks to perpetually categorize and organize local file downloads via magic numbers.',
    tech: 'Shell, Ansible, systemd',
    repo: '#'
  },
  {
    sha: 'f1a9b2c',
    title: 'Daemon',
    subtitle: 'Python project',
    desc: 'A system-level daemon developed in Python for extensive background task scheduling and monitoring overhead.',
    tech: 'Python',
    repo: '#'
  },
  {
    sha: 'g8c3d4e',
    title: 'stellar-state',
    subtitle: 'Rust project (1 star)',
    desc: 'A blazing-fast library bridging low-level state management systems developed meticulously in pure Rust.',
    tech: 'Rust',
    repo: '#'
  }
];

const ProjectCommit = ({ proj, isLast }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ display: 'flex', fontFamily: 'var(--font-mono)' }}>
      {/* Branch Graph */}
      <div className="text-amber" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '2rem', paddingRight: '0.5rem' }}>
        <div style={{ fontSize: '1.2rem', lineHeight: '1rem', marginTop: '0.2rem' }}>*</div>
        {!isLast && <div style={{ flex: 1, borderLeft: '1px solid var(--secondary-amber)', marginTop: '0.2rem', minHeight: '3rem' }}></div>}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: isLast ? '0' : '1.5rem', cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
        <div style={{ color: '#ccc' }}>
          <span className="text-amber">commit {proj.sha}</span> <span className="text-cyan">(HEAD -&gt; main, origin/main)</span>
        </div>
        <div style={{ color: '#aaa', margin: '0.25rem 0' }}>
          Author: <span style={{ color: '#fff' }}>Prakash Gond &lt;unknownmember4u@gmail.com&gt;</span><br/>
          Date:   <span style={{ color: '#fff' }}>2025</span>
        </div>
        
        <div style={{ paddingLeft: '2rem', marginTop: '0.5rem', color: '#fff' }}>
          <div style={{ fontWeight: 'bold' }}>feat: {proj.title}</div>
          <div style={{ color: '#888', marginTop: '0.25rem' }}>{proj.subtitle}</div>
          <div style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
            <span className="text-green">[● Live]</span> <span className="text-cyan">[◉ GitHub]</span>
          </div>
        </div>

        {/* Expanded Diff View */}
        <AnimatePresence>
          {expanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden', paddingLeft: '2rem', marginTop: '1rem' }}
            >
              <div style={{ backgroundColor: '#111', border: '1px solid #333', padding: '1rem', color: '#ccc', fontSize: '0.9rem' }}>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>diff --git a/projects/{proj.sha} b/projects/{proj.sha}</div>
                <div className="text-cyan">index 0000000..{proj.sha} 100644</div>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>--- /dev/null</div>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>+++ b/projects/{proj.sha}/README.md</div>
                <div className="text-cyan">@@ -0,0 +1,5 @@</div>
                <div className="text-green">+ # Description</div>
                <div className="text-green">+ {proj.desc}</div>
                <div className="text-green">+ </div>
                <div className="text-green">+ # Tech Stack</div>
                <div className="text-green">
                  + {proj.tech.split(',').map(t => `[${t.trim()}]`).join(' ')}
                </div>
                {proj.repo !== '#' && (
                  <>
                    <div className="text-green">+ </div>
                    <div className="text-green">+ Link: <a href={proj.repo} target="_blank" rel="noreferrer" className="text-cyan">{proj.repo}</a></div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
      style={{ marginBottom: '2rem', fontSize: '0.9rem' }}
    >
      <div style={{ marginBottom: '1.5rem', color: '#666', fontStyle: 'italic' }}>
        # git log --graph --oneline --decorate
      </div>
      
      {projectsList.map((proj, idx) => (
        <ProjectCommit key={proj.sha} proj={proj} isLast={idx === projectsList.length - 1} />
      ))}
    </motion.div>
  );
};

export default Projects;

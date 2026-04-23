import React from 'react';
import { motion } from 'framer-motion';

const ManPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        marginBottom: '2rem', 
        lineHeight: '1.4',
        position: 'relative',
        color: '#ffffff', // White body text
        padding: '1rem',
        border: '1px solid #333',
        backgroundColor: '#0a0a0a',
        // Faint scan-line effect
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(20, 20, 20, 0.25) 50%)',
        backgroundSize: '100% 4px',
        maxHeight: '400px',
        overflowY: 'auto'
      }}
    >
      {/* Fake scroll indicator */}
      <div style={{
        position: 'absolute',
        right: '4px',
        top: '10px',
        bottom: '10px',
        width: '8px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '4px'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          width: '100%',
          height: '20%',
          backgroundColor: 'var(--secondary-amber)',
          borderRadius: '4px'
        }}></div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold' }}>
        <span>PRAKASH_GOND(1)</span>
        <span>USER COMMANDS</span>
        <span>PRAKASH_GOND(1)</span>
      </div>

      <div style={{ paddingLeft: '1rem', paddingRight: '1.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h3 className="text-amber" style={{ margin: '0 0 0.5rem -1rem' }}>NAME</h3>
          <p style={{ paddingLeft: '2rem' }}>prakash-gond — Cloud & DevOps Engineer, CSE Student</p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 className="text-amber" style={{ margin: '0 0 0.5rem -1rem' }}>SYNOPSIS</h3>
          <p style={{ paddingLeft: '2rem', fontWeight: 'bold' }}>prakash [--build cloud] [--deploy devops] [--debug life]</p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 className="text-amber" style={{ margin: '0 0 0.5rem -1rem' }}>DESCRIPTION</h3>
          <p style={{ paddingLeft: '2rem', marginBottom: '0.5rem' }}>
            Currently pursuing BTech in Computer Science at Shri Ramdeobaba
            College of Engineering and Management (RBU '28). 
          </p>
          <p style={{ paddingLeft: '2rem', marginBottom: '0.5rem' }}>
            Completed Diploma
            in Computer Engineering from Government Polytechnic College (GPN '25).
          </p>
          <p style={{ paddingLeft: '2rem' }}>
            Ex-Intern at Informatrix IT, Nagpur (Jan–Jun 2025).
          </p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 className="text-amber" style={{ margin: '0 0 0.5rem -1rem' }}>OPTIONS</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '2rem' }}>
            <li><span style={{ fontWeight: 'bold' }}>--cloud</span><span style={{ display: 'inline-block', width: '3rem' }}></span>AWS, cloud infrastructure, deployment</li>
            <li><span style={{ fontWeight: 'bold' }}>--devops</span><span style={{ display: 'inline-block', width: '2rem' }}></span>Docker, automation, CI/CD pipelines</li>
            <li><span style={{ fontWeight: 'bold' }}>--ml</span><span style={{ display: 'inline-block', width: '4rem' }}></span>Core ML, TensorFlow, data analysis</li>
            <li><span style={{ fontWeight: 'bold' }}>--linux</span><span style={{ display: 'inline-block', width: '2rem' }}></span>Arch Linux, shell scripting, system admin</li>
            <li><span style={{ fontWeight: 'bold' }}>--hackathon</span><span style={{ display: 'inline-block', width: '0rem', marginRight: '1rem' }}></span>Competitive builder, problem solver</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 className="text-amber" style={{ margin: '0 0 0.5rem -1rem' }}>BUGS</h3>
          <p style={{ paddingLeft: '2rem' }}>Still searching for free time.</p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 className="text-amber" style={{ margin: '0 0 0.5rem -1rem' }}>SEE ALSO</h3>
          <p style={{ paddingLeft: '2rem' }}>github(1), linkedin(1), email(1)</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ManPage;

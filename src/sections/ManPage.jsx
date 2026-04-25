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

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span>PRAKASH GOND</span>
        <span>USER COMMANDS</span>
        <span className="hide-on-mobile">PRAKASH GOND</span>
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
            Aspiring DevOps and Cloud Engineer with hands-on experience in AWS, Docker, and Jenkins. Skilled in building CI/CD pipelines, automating workflows, and deploying scalable applications. Developed an end-to-end machine learning project with automated retraining and cloud storage integration. Strong foundation in Linux and system monitoring tools like Prometheus and Nagios.
          </p>
          <p style={{ paddingLeft: '2rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
            <span style={{ fontStyle: 'italic' }}>"Whether it's scaling servers to meet sudden demand, architecting resilient pipelines, or training models to see the unseen, the principles of Mondstadt guide me: freedom of exploration, and the drive to soar higher."</span>
          </p>
          <p style={{ paddingLeft: '2rem', marginBottom: '0.5rem' }}>
            Currently pursuing BTech in Computer Science at Shri Ramdeobaba College of Engineering and Management (RBU '28). Completed Diploma in Computer Engineering from Government Polytechnic College (GPN '25).
          </p>
          <p style={{ paddingLeft: '2rem' }}>
            Ex-Intern at Informatrix IT, Nagpur (Jan–Jun 2025).
          </p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 className="text-amber" style={{ margin: '0 0 0.5rem -1rem' }}>OPTIONS</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '2rem', wordBreak: 'break-word' }}>
            <li style={{ marginBottom: '0.3rem' }}><span style={{ fontWeight: 'bold' }}>--cloud</span> — AWS, cloud infrastructure, deployment</li>
            <li style={{ marginBottom: '0.3rem' }}><span style={{ fontWeight: 'bold' }}>--devops</span> — Docker, automation, CI/CD pipelines</li>
            <li style={{ marginBottom: '0.3rem' }}><span style={{ fontWeight: 'bold' }}>--ml</span> — Core ML, TensorFlow, data analysis</li>
            <li style={{ marginBottom: '0.3rem' }}><span style={{ fontWeight: 'bold' }}>--linux</span> — Arch Linux, shell scripting, system admin</li>
            <li style={{ marginBottom: '0.3rem' }}><span style={{ fontWeight: 'bold' }}>--hackathon</span> — Competitive builder, problem solver</li>
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

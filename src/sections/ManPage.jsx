import React from 'react';
import { motion } from 'framer-motion';

const ManPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card"
      style={{
        marginBottom: '2rem',
        lineHeight: '1.6',
        position: 'relative',
        color: '#E2E8F0', // Uses new softer text color
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <h2 style={{ margin: 0, color: '#fff', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          About Me
        </h2>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--secondary-cyan)', fontSize: '0.9rem', backgroundColor: 'rgba(0, 255, 255, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
          prakash-gond
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div>
          <p style={{ marginBottom: '1rem' }}>
            I am an aspiring <strong>DevOps and Cloud Engineer</strong> with hands-on experience in AWS, Docker, and Jenkins. My passion lies in building robust CI/CD pipelines, automating complex workflows, and deploying scalable applications that can withstand heavy demand.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Beyond infrastructure, I have developed end-to-end machine learning projects featuring automated retraining cycles and seamless cloud storage integrations. I hold a strong foundation in Linux administration and system monitoring tools like Prometheus and Nagios.
          </p>
          <p style={{ color: 'var(--primary-color)', fontStyle: 'italic', borderLeft: '3px solid var(--primary-color)', paddingLeft: '1rem', margin: '1.5rem 0', backgroundColor: 'rgba(0, 255, 65, 0.05)', padding: '1rem' }}>
            "Whether it's scaling servers to meet sudden demand, architecting resilient pipelines, or training models to see the unseen, the principles of Mondstadt guide me: freedom of exploration, and the drive to soar higher."
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Education & Experience</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
            <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '6px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--secondary-amber)' }}></span>
              <strong>BTech in Computer Science</strong> <br/>
              <span style={{ fontSize: '0.9rem', color: '#aaa' }}>Shri Ramdeobaba College (RBU '28)</span>
            </li>
            <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '6px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--secondary-cyan)' }}></span>
              <strong>Diploma in Computer Engineering</strong> <br/>
              <span style={{ fontSize: '0.9rem', color: '#aaa' }}>Government Polytechnic College (GPN '25)</span>
            </li>
            <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '6px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }}></span>
              <strong>Cloud Intern</strong> <br/>
              <span style={{ fontSize: '0.9rem', color: '#aaa' }}>Informatrix IT, Nagpur (Jan–Jun 2025)</span>
            </li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Core Focus</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Cloud Infrastructure', 'CI/CD Automation', 'Machine Learning', 'Linux SysAdmin', 'Competitive Solving'].map(tag => (
              <span key={tag} style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '20px', 
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ManPage;


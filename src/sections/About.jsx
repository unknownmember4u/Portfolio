import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--primary-color)', marginLeft: '0.5rem', marginBottom: '2rem' }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <h2 className="text-cyan">Prakash Gond</h2>
        <p><strong>Title:</strong> Computer Science Engineering Student @ Ramdeobaba University (BTech '28)</p>
        <p><strong>Location:</strong> Nagpur, India</p>
      </div>
      <div>
        <p>
          I am a passionate Cloud & DevOps enthusiast and a Linux power user.
          I love exploring system architecture, automating workflows, and building
          scalable infrastructure. When I'm not in the terminal, I'm participating
          in hackathons and pushing the limits of what's possible with code.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          Status: <span className="text-amber">[ Active and ready for new challenges ]</span>
        </p>
      </div>
    </motion.div>
  );
};

export default About;

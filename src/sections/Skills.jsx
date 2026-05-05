import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Cloud Infra', 'Docker', 'Git & GitHub', 'Ansible', 'Systemd'],
    color: 'var(--primary-color)'
  },
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'Bash Scripting', 'C++'],
    color: 'var(--secondary-cyan)'
  },
  {
    category: 'Tools & Environ',
    skills: ['Linux (Arch)', 'Vim/Terminal', 'Prometheus', 'Nagios'],
    color: 'var(--secondary-amber)'
  },
  {
    category: 'ML & Data',
    skills: ['Core ML', 'TensorFlow', 'Data Analysis'],
    color: '#FF00FF'
  },
  {
    category: 'Other',
    skills: ['Adobe Photoshop', 'Problem Solving'],
    color: '#888'
  }
];

const SkillCategoryCard = ({ category, skills, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h3 style={{ 
        color: '#fff', 
        fontSize: '1.2rem', 
        marginBottom: '1.5rem', 
        borderBottom: `1px solid ${color}40`, 
        paddingBottom: '0.5rem',
        display: 'inline-block' 
      }}>
        <span style={{ color: color, marginRight: '0.5rem' }}>//</span>
        {category}
      </h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        {skills.map(skill => (
          <span 
            key={skill} 
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: '#ccc',
              transition: 'all 0.2s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = color;
              e.target.style.color = '#fff';
              e.target.style.boxShadow = `0 0 10px ${color}30`;
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
              e.target.style.color = '#ccc';
              e.target.style.boxShadow = 'none';
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {skillsData.map((data, idx) => (
          <SkillCategoryCard 
            key={data.category} 
            category={data.category} 
            skills={data.skills} 
            color={data.color} 
            index={idx} 
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

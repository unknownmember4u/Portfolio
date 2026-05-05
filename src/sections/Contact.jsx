import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sendResponse, setSendResponse] = useState(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!subject || !body) {
      setSendResponse('[ERROR] Subject and body are required.');
      return;
    }
    setSendResponse('[PROCESSING] Preparing message dispatch...');
    setTimeout(() => {
      setSendResponse('[OK] Ready! Opening mail client...');
      window.open(`mailto:unknownmember4u@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      setSubject('');
      setBody('');
      setTimeout(() => setSendResponse(null), 3000);
    }, 800);
  };

  const socialLinks = [
    {
      label: 'Email', val: 'prakashgond.mail@gmail.com', link: 'mailto:prakashgond.mail@gmail.com', icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
      )
    },
    {
      label: 'LinkedIn', val: 'linkedin.com/in/prakash-gond', link: 'https://linkedin.com/in/prakash-gond', icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
      )
    },
    {
      label: 'GitHub', val: 'github.com/unknownmember4u', link: 'https://github.com/unknownmember4u', icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
      )
    },
    {
      label: 'Phone', val: '+91 9022514183', link: 'tel:+919022514183', icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
      )
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ marginBottom: '2rem' }}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

        {/* Contact Form */}
        <div className="glass-card">
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--primary-color)' }}>//</span> Send a Transmission
          </h3>
          <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#ccc', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Job Opportunity / Networking"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '0.8rem',
                  borderRadius: '6px',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#ccc', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>Message</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Hello Prakash..."
                rows={5}
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '0.8rem',
                  borderRadius: '6px',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.8rem' }}>
              Dispatch Payload 🚀
            </button>

            {sendResponse && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: sendResponse.includes('ERROR') ? 'var(--error-red)' : 'var(--primary-color)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                {sendResponse}
              </motion.div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {socialLinks.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                color: '#fff',
                padding: '1rem 1.5rem'
              }}
            >
              <div style={{ color: 'var(--secondary-cyan)', display: 'flex', alignItems: 'center' }}>
                {item.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold' }}>{item.label}</span>
                <span style={{ color: '#ccc', fontSize: '0.85rem' }}>{item.val}</span>
              </div>
            </motion.a>
          ))}

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: 'auto', paddingTop: '1rem' }}
          >
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '1rem', borderColor: 'var(--secondary-amber)', color: 'var(--secondary-amber)', backgroundColor: 'rgba(255, 179, 0, 0.1)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
              View Full Resume (Logs)
            </button>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;

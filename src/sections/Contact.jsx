import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [stage, setStage] = useState(0);
  const [actionResponse, setActionResponse] = useState(null);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sendResponse, setSendResponse] = useState(null);

  useEffect(() => {
    // Sequence the SSH connection fake loading
    const t1 = setTimeout(() => setStage(1), 800); // Show "yes" typing
    const t2 = setTimeout(() => setStage(2), 1500); // Show connection successful and menu

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleAction = (id, actionStr, textToCopy, linkUrl) => {
    setActionResponse(`[OK] Executing option [${id}]...`);

    setTimeout(() => {
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        setActionResponse(`[COPIED] ${textToCopy} copied to clipboard!`);
      } else {
        setActionResponse(`[OK] ${actionStr}`);
      }

      if (linkUrl) {
        if (linkUrl.startsWith('http') || linkUrl.startsWith('mailto') || linkUrl.startsWith('tel')) {
          window.open(linkUrl, '_blank');
        }
      }
    }, 500);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!subject || !body) {
      setSendResponse('[ERROR] Missing arguments: --subject and --body are required.');
      return;
    }
    setSendResponse('[PROCESSING] Resolving DNS and establishing SMTP handshake...');
    setTimeout(() => {
      setSendResponse('[OK] Message dispatched successfully to prakash@arch!');
      setSubject('');
      setBody('');

      // Attempt generic mailto fallback or clear
      window.open(`mailto:unknownmember4u@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }, 1500);
  };

  return (
    <div style={{ marginBottom: '4rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', lineHeight: '1.5' }}>

      {/* 1. SSH Auth Sequence */}
      <div style={{ color: '#ccc', marginBottom: '1rem' }}>
        <div>The authenticity of host 'prakash-gond.dev' can't be established.</div>
        <div>RSA key fingerprint is SHA256:prakashgond2025...</div>
        <div>
          Are you sure you want to continue connecting? (yes/no):{' '}
          {stage >= 1 && <span className="text-green">yes</span>}
        </div>
      </div>

      {/* 2. Menu Display */}
      {stage >= 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-cyan" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Welcome to Prakash's Contact Server
          </div>
          <div style={{ color: '#555', marginBottom: '1rem' }}>
            ────────────────────────────────────
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', color: '#ccc' }}>
            {[
              {
                id: 1, label: 'Send Email', val: 'unknownmember4u@gmail.com', link: 'mailto:unknownmember4u@gmail.com', copy: 'unknownmember4u@gmail.com', msg: 'Opening email client...',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                )
              },
              {
                id: 2, label: 'LinkedIn', val: 'linkedin.com/in/prakash-gond', link: 'https://linkedin.com/in/prakash-gond', copy: null, msg: 'Opening LinkedIn...',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )
              },
              {
                id: 3, label: 'GitHub', val: 'github.com/unknownmember4u', link: 'https://github.com/unknownmember4u', copy: null, msg: 'Opening GitHub...',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                )
              },
              {
                id: 4, label: 'Phone', val: '+91 9022514183', link: 'tel:+919022514183', copy: '+91 9022514183', msg: 'Calling...',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                )
              },
              {
                id: 5, label: 'Exit', val: 'Close connection', link: null, copy: null, msg: 'Connection closed.',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                )
              }
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleAction(opt.id, opt.msg, opt.copy, opt.link)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
                className="contact-opt"
              >
                <div style={{ display: 'flex', alignItems: 'center', width: '2.5rem', color: 'var(--primary-color)' }}>{opt.icon}</div>
                <div style={{ width: '9rem' }}>{opt.label}</div>
                <div className="text-cyan" style={{ width: '2rem' }}>→</div>
                <div>{opt.val}</div>
              </div>
            ))}
          </div>

          {/* Spacer block style to allow hover styles */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .contact-opt:hover { background-color: rgba(0, 255, 65, 0.1); }
            .icon-link {
              color: var(--primary-color);
              transition: all 0.2s ease;
            }
            .icon-link:hover {
              color: #fff;
              transform: translateY(-2px) scale(1.1);
              filter: drop-shadow(0 0 10px var(--primary-color));
            }
          `}} />

          {/* Interactive Response */}
          <div style={{ marginBottom: '2rem', height: '1.5rem', color: 'var(--primary-color)' }}>
            Enter selection:{' '}
            {actionResponse && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {actionResponse}
              </motion.span>
            )}
            {!actionResponse && <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>}
          </div>

          <div style={{ color: '#555', marginBottom: '1.5rem' }}>
            ────────────────────────────────────
          </div>

          {/* Form UI */}
          <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="text-green">prakash@arch</span><span className="text-cyan">~</span>$ send --to=<span className="text-amber">prakash</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingLeft: '1rem' }}>
              <span className="text-cyan">--subject=</span>
              <span style={{ color: '#aaa' }}>'</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                autoComplete="off"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  width: '200px'
                }}
              />
              <span style={{ color: '#aaa' }}>'</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', paddingLeft: '1rem' }}>
              <span className="text-cyan">--body=</span>
              <span style={{ color: '#aaa' }}>'</span>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={3}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  width: '300px',
                  resize: 'none'
                }}
              />
              <span style={{ color: '#aaa' }}>'</span>
            </div>

            <div style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
              <button
                type="submit"
                style={{
                  background: 'rgba(255, 179, 0, 0.1)',
                  border: '1px solid var(--secondary-amber)',
                  color: 'var(--secondary-amber)',
                  padding: '4px 12px',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                [ENTER ↵]
              </button>
            </div>

            <div style={{ minHeight: '1.5rem', marginTop: '0.5rem', color: sendResponse?.includes('ERROR') ? '#ff5f56' : 'var(--primary-color)' }}>
              {sendResponse && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {sendResponse}
                </motion.span>
              )}
            </div>
          </form>

          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <span className="text-green">prakash@archlinux</span><span className="text-cyan">~</span>$ */}
            </div>
            <button
              type="button"
              onClick={() => window.open('/resume.pdf', '_blank')}
              style={{
                background: 'rgba(100, 255, 218, 0.1)',
                border: '1px solid var(--primary-color)',
                color: 'var(--primary-color)',
                padding: '4px 12px',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              [SEE LOGS 📄]
            </button>
            <span className="cursor-blink" style={{ background: 'var(--primary-color)', width: '8px', height: '18px', display: 'inline-block', animation: 'blink 1s step-end infinite' }}></span>
          </div>

        </motion.div>
      )}
    </div>
  );
};

export default Contact;

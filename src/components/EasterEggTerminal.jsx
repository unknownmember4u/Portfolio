import React, { useState, useEffect, useRef } from 'react';
import Neofetch from '../sections/Neofetch';
import MatrixRain from './MatrixRain';

const AVAILABLE_COMMANDS = [
  'whoami', 'ls projects/', 'cat about.txt', 'ping linkedin.com', 
  'neofetch', 'cmatrix', 'exit', 'clear', 'help'
];

const EasterEggTerminal = ({ onClose }) => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'zsh: session established.' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [matrixActive, setMatrixActive] = useState(false);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-focus input on render and clicks
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // Scroll to bottom every time history updates
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [history]);

  // Tab completion hint logic
  const getHint = () => {
    if (!inputVal) return '';
    const match = AVAILABLE_COMMANDS.find(cmd => cmd.startsWith(inputVal.toLowerCase()));
    return match ? match.slice(inputVal.length) : '';
  };
  const hint = getHint();

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (hint) {
        setInputVal(inputVal + hint);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIdx < cmdHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  const processCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    // Append to command history
    setCmdHistory(prev => [...prev, cmd]);
    setHistoryIdx(-1);

    // Create log entry for the command executed
    const cmdLog = { 
      type: 'input', 
      content: <><span className="text-green">prakash@arch</span><span className="text-cyan">~</span>$ {cmd}</> 
    };
    
    let outputLog = { type: 'output', content: '' };
    
    const c = cmd.toLowerCase();

    if (c === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (c === 'exit') {
      onClose();
      return;
    } else if (c === 'cmatrix') {
      setMatrixActive(true);
      setTimeout(() => setMatrixActive(false), 5000);
      outputLog.content = 'matrix initialized... terminating after 5s';
    } else if (c === 'whoami') {
      outputLog.content = 'prakash-gond — cloud devops hacker';
    } else if (c === 'ls projects/') {
      outputLog.content = (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', color: 'var(--secondary-cyan)' }}>
          <div>NyayMitra</div><div>AI-Veritas</div>
          <div>PentestIQ</div><div>automated-backup</div>
          <div>downloads-organizer</div><div>Daemon</div>
          <div>stellar-state</div>
        </div>
      );
    } else if (c === 'cat about.txt') {
      outputLog.content = (
        <div>
          <p>Arch Linux power user, AWS & Docker enthusiast.</p>
          <p>BTech CSE student diving deep into Cloud, InfoSec, and low-level Linux architecture.</p>
        </div>
      );
    } else if (c === 'ping linkedin.com') {
      outputLog.content = (
        <div>
          <div>PING linkedin.com (108.174.10.10) 56(84) bytes of data.</div>
          <div>64 bytes from linkedin.com: icmp_seq=1 ttl=115 time=23.4 ms</div>
          <div>64 bytes from linkedin.com: icmp_seq=2 ttl=115 time=21.2 ms</div>
          <div>64 bytes from linkedin.com: icmp_seq=3 ttl=115 time=22.8 ms</div>
          <br/>
          <div>--- linkedin.com ping statistics ---</div>
          <div>3 packets transmitted, 3 received, 0% packet loss</div>
          <div className="text-amber">[LINK] <a href="https://linkedin.com/in/prakash-gond" target="_blank" rel="noreferrer" className="text-cyan">https://linkedin.com/in/prakash-gond</a></div>
        </div>
      );
    } else if (c === 'neofetch') {
      outputLog.content = <div style={{ transform: 'scale(0.8)', transformOrigin: 'left top' }}><Neofetch /></div>;
    } else if (c === 'help') {
      outputLog.content = `Available commands: ${AVAILABLE_COMMANDS.join(', ')}`;
    } else {
      outputLog.content = `zsh: command not found: ${cmd}`;
    }

    setHistory(prev => [...prev, cmdLog, outputLog]);
    setInputVal('');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(13, 13, 13, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        padding: '1rem',
        color: '#ccc',
        overflowY: 'auto'
      }}
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      {/* Cmatrix Overlay */}
      {matrixActive && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
          <MatrixRain />
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {history.map((log, idx) => (
          <div key={idx} style={{ marginBottom: '0.5rem', wordBreak: 'break-all' }}>
            {log.content}
          </div>
        ))}

        <form onSubmit={processCommand} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="text-green" style={{ marginRight: '8px' }}>
            prakash@arch<span className="text-cyan">~</span>$ 
          </span>
          <div style={{ position: 'relative', flex: 1, display: 'flex' }}>
            <span style={{ color: '#fff', whiteSpace: 'pre' }}>{inputVal}</span>
            <span style={{ color: '#555', pointerEvents: 'none' }}>{hint}</span>
            <span className="cursor-blink" style={{ background: 'var(--primary-color)', width: '8px', height: '18px', display: 'inline-block', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}></span>
            
            <input 
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck="false"
              autoFocus
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                opacity: 0,
                cursor: 'text'
              }}
            />
          </div>
        </form>
        <div ref={bottomRef} style={{ height: '50px' }}></div>
      </div>
      
      {/* Absolute close button */}
      <button 
        onClick={onClose}
        style={{
          position: 'absolute', top: '10px', right: '10px', zIndex: 10,
          background: 'transparent', color: 'var(--error-red)', border: '1px solid var(--error-red)', padding: '2px 8px', cursor: 'pointer', fontFamily: 'var(--font-mono)'
        }}
      >
        [ EXIT ]
      </button>
    </div>
  );
};

export default EasterEggTerminal;

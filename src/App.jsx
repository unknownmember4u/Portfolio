import React, { useState, useEffect } from 'react';
import BootSequence from './sections/BootSequence';
import TopBar from './components/TopBar';
import TmuxBar from './components/TmuxBar';
import ScrollSection from './components/ScrollSection';
import PromptWrapper from './components/PromptWrapper'; // Kept for immediate hero
import Neofetch from './sections/Neofetch';
import AsciiBanner from './components/AsciiBanner';
import TypewriterCycler from './components/TypewriterCycler';
import CavaVisualizer from './components/CavaVisualizer';
import ManPage from './sections/ManPage';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import EasterEggTerminal from './components/EasterEggTerminal';
import AmbientGlow from './components/AmbientGlow';
import MatrixRain from './components/MatrixRain';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [bootStrapDone, setBootStrapDone] = useState(false);
  const [heroDone, setHeroDone] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);

  useEffect(() => {
    // Reset scroll smoothly on reload
    window.scrollTo(0, 0);

    let keyBuffer = '';
    const handleKeyDown = (e) => {
      // Direct ~ toggle
      if (e.key === '~' || e.key === '`') {
        setEasterEggActive(true);
      }
      
      // Sudo word detection
      if (e.key.length === 1) { // Normal keys
        keyBuffer += e.key.toLowerCase();
        if (keyBuffer.length > 4) keyBuffer = keyBuffer.slice(-4);
        if (keyBuffer === 'sudo') {
          setEasterEggActive(true);
          keyBuffer = '';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="crt" style={{ 
      minHeight: '100vh', 
      paddingTop: '2.5rem',  // TopBar Space
      paddingBottom: '3rem', // TmuxBar Space
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0, opacity: 0.8 }}>
         <MatrixRain />
      </div>
      <AmbientGlow />
      <AudioPlayer />
      <TopBar />
      
      <div className="main-content-container" style={{ 
        width: '100%', 
        padding: '1rem 5%', 
        maxWidth: '1600px', 
        margin: '0 auto',
        zIndex: 1
      }}>
        {!bootStrapDone ? (
          <BootSequence onComplete={() => setBootStrapDone(true)} />
        ) : (
          <div id="home">
            {/* Immediate hero load */}
            <PromptWrapper 
              command="neofetch" 
              delay={500} 
              onComplete={() => setHeroDone(true)}
            >
              {heroDone && (
                <div style={{ 
                  marginBottom: '4rem', 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '2rem', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '100%',
                  textAlign: 'center' 
                }}>
                  <div style={{ flexShrink: 0, scale: 'calc(min(1, 80vw / 400px))' }}>
                    <Neofetch />
                  </div>
                  
                  <div style={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    overflow: 'hidden',
                    maxWidth: '100%' 
                  }}>
                    <AsciiBanner />
                    <TypewriterCycler />
                  </div>
                </div>
              )}
            </PromptWrapper>

            {heroDone && (
              <>
                <ScrollSection id="cava" command="cava" delay={100}>
                  <CavaVisualizer />
                </ScrollSection>

                <ScrollSection id="manpage" command="man prakash" delay={500}>
                  <ManPage />
                </ScrollSection>

                <ScrollSection id="skills" command="cd /skills && ls -la" delay={500}>
                  <Skills />
                </ScrollSection>
                
                <ScrollSection id="experience" command="ps aux --experience" delay={500}>
                  <Experience />
                </ScrollSection>

                <ScrollSection id="projects" command="git log --graph --projects" delay={500}>
                  <Projects />
                </ScrollSection>
                
                <ScrollSection id="achievements" command="cat ctf_scoreboard.txt" delay={500}>
                  <Achievements />
                </ScrollSection>

                <ScrollSection id="contact" command="ssh contact@prakash-gond.dev" delay={500}>
                  <Contact />
                </ScrollSection>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '4rem 0 2rem 0',
                  padding: '0 1rem',
                  width: '100%',
                }}>
                  <div style={{
                    color: 'var(--error-red)',
                    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: '0 0 8px rgba(255, 59, 59, 0.4)',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                    border: '1px dashed var(--error-red)',
                    padding: '1rem 2rem'
                  }}>
                    "If you can't get my portfolio, means you are'nt capable !!"
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '2rem', paddingBottom: '4rem' }}>
                  <span className="text-green" style={{ marginRight: '8px' }}>
                    prakash@archlinux<span className="text-cyan">~</span>$ 
                  </span>
                  <span className="cursor-blink" style={{ background: 'var(--primary-color)', width: '8px', height: '16px', display: 'inline-block', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}></span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <TmuxBar />

      {easterEggActive && (
        <EasterEggTerminal onClose={() => setEasterEggActive(false)} />
      )}
    </div>
  );
}

export default App;

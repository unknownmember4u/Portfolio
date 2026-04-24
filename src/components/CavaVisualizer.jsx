import React, { useRef, useEffect } from 'react';
import { getAnalyser, getFrequencyData } from '../utils/audioAnalyzer';

const CavaVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      const dataArray = getFrequencyData();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const numBars = 64;
      const barWidth = (canvas.width / numBars) * 2;
      let x = 0;

      if (!dataArray) {
        // Fallback or empty state if no audio is playing
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      for (let i = 0; i < numBars; i++) {
        const value = dataArray[i];
        const percent = value / 255;
        const barHeight = percent * canvas.height;

        // Draw bar with neon glow style
        ctx.fillStyle = `rgba(0, 255, 65, ${0.4 + percent * 0.6})`;
        ctx.fillRect(
          x, 
          canvas.height - barHeight, 
          barWidth - 2, 
          barHeight
        );

        x += barWidth;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ marginBottom: '0.5rem', color: '#666', fontStyle: 'italic' }}>
        # ambient mode engaged
      </div>
      <canvas 
        ref={canvasRef} 
        width={800} 
        height={100} 
        style={{ 
          width: '100%', 
          height: '100px', 
          display: 'block',
          backgroundColor: 'rgba(0, 255, 65, 0.02)',
          borderLeft: '2px solid var(--primary-color)'
        }}
      />
    </div>
  );
};

export default CavaVisualizer;

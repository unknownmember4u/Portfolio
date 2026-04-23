import React, { useRef, useEffect } from 'react';

const CavaVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const numBars = 64;
    const barWidth = canvas.width / numBars;
    let heights = new Array(numBars).fill(0).map(() => Math.random() * canvas.height);
    let targetHeights = new Array(numBars).fill(0).map(() => Math.random() * canvas.height);

    const render = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numBars; i++) {
        // Smoothly interpolate to target height
        heights[i] += (targetHeights[i] - heights[i]) * 0.1;

        // Change target occasionally
        if (Math.random() < 0.05) {
          // Create some wave-like structure by basing target on sine of time and index
          const wave = Math.sin(time * 0.002 + i * 0.2) * 0.5 + 0.5;
          const noise = Math.random();
          targetHeights[i] = (wave * 0.6 + noise * 0.4) * canvas.height;
        }

        // Draw bar
        ctx.fillStyle = '#00FF41';
        ctx.fillRect(
          i * barWidth, 
          canvas.height - heights[i], 
          barWidth - 2, 
          heights[i]
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

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

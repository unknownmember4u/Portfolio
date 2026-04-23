import React, { useRef, useEffect } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set actual internal canvas resolution to match its styled size
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|:;"<>,.?/~`';
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    const drops = [];

    // Initialize drops
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height; 
    }

    let animationFrameId;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (time) => {
      animationFrameId = requestAnimationFrame(draw);
      
      const deltaTime = time - lastTime;
      if (deltaTime > interval) {
        lastTime = time - (deltaTime % interval);
        
        ctx.fillStyle = 'rgba(10, 10, 10, 0.15)'; // Fade effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF41'; // Green text
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        // Update columns count in case of resize
        const currentColumns = Math.floor(canvas.width / fontSize);
        if (currentColumns > drops.length) {
          for (let i = drops.length; i < currentColumns; i++) {
               drops[i] = Math.random() * canvas.height;
          }
        }

        for (let i = 0; i < currentColumns; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.35, // Increased background layer opacity
        pointerEvents: 'none'
      }}
    />
  );
};

export default MatrixRain;

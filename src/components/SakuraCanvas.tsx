import React, { useEffect, useRef } from 'react';

interface SakuraCanvasProps {
  enabled?: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  phase: number;
  swaySpeed: number;
  color: string;
}

export const SakuraCanvas: React.FC<SakuraCanvasProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalCount = Math.min(Math.floor(window.innerWidth / 35), 45);
    const petals: Petal[] = [];

    const petalColors = [
      'rgba(255, 183, 197, ',
      'rgba(255, 192, 203, ',
      'rgba(254, 205, 211, ',
      'rgba(244, 114, 182, ',
      'rgba(251, 113, 133, ',
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 1.2 + 0.3,
        speedY: Math.random() * 1.5 + 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.8,
        opacity: Math.random() * 0.5 + 0.35,
        phase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.scale(Math.cos(p.phase), 1);

      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(
        p.size * 0.8,
        -p.size * 0.8,
        p.size * 0.9,
        p.size * 0.4,
        0,
        p.size
      );
      ctx.bezierCurveTo(
        -p.size * 0.9,
        p.size * 0.4,
        -p.size * 0.8,
        -p.size * 0.8,
        0,
        -p.size
      );

      const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
      grad.addColorStop(0, `${p.color}${p.opacity})`);
      grad.addColorStop(0.7, `${p.color}${p.opacity * 0.8})`);
      grad.addColorStop(1, `${p.color}${p.opacity * 0.4})`);

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(244, 63, 94, 0.4)';
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.phase += p.swaySpeed;
        p.rotation += p.rotationSpeed;
        p.x += p.speedX + Math.sin(p.phase) * 0.8;
        p.y += p.speedY;

        // Wrap around
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      id="sakura-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
    />
  );
};

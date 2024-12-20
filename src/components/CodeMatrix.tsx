import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}()=+-*&^%$#@!';

export function CodeMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;
    let drops: number[] = [];
    
    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = 400;
      drops = Array(Math.floor(canvas.width / 20)).fill(0);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#22c55e'; // Updated to bg-green-500 color
      ctx.font = '15px monospace';
      
      const offsetX = (mousePosition.current.x - canvas.width / 2) * 0.05;
      const offsetY = (mousePosition.current.y - canvas.height / 2) * 0.05;

      drops.forEach((drop, i) => {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * 20 + offsetX;
        const y = drop * 20 + offsetY;
        
        ctx.fillText(char, x, y);
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative h-[400px] w-full overflow-hidden my-20"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center z-10 px-6 py-8 rounded-xl bg-black/50 backdrop-blur-sm border border-emerald-500/20"
        >
        <div className='flex flex-col md:flex-row items-center'>
  <div className="flex flex-col">
    <h3 className="text-3xl font-bold mb-4">
      <span className="bg-gradient-to-r text-green-400  bg-clip-text">
        Code Coffee Continue
      </span>
    </h3>
    <p className="text-green-500 max-w-md mb-4 md:mb-0 hidden md:block">
      Move your mouse to interact with the matrix
    </p>
  </div>
  <img
    src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525"
    className="h-10 w-10 md:ml-4 md:h-16 md:w-16 hidden md:block"
    alt="Golden Retriever"
  />
</div>

        </motion.div>
      </div>
    </motion.div>
  );
}

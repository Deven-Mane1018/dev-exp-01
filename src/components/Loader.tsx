import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [dots, setDots] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setDots('.'.repeat(count % 15));
      if (count > 20) {
        clearInterval(interval);
        setDone(true);
        setTimeout(onComplete, 800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[11px] uppercase tracking-widest text-ink/60"
      >
        reading deven.json {dots.padEnd(14, ' ')} {done ? 'done' : ''}
      </motion.div>
    </motion.div>
  );
}

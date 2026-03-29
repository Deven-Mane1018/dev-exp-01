import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Fade "Mane." out as we scroll
  const maneOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const maneY = useTransform(scrollY, [0, 300], [0, -100]);
  
  // "Deven" stays pinned but fades slightly
  const devenOpacity = useTransform(scrollY, [200, 500], [1, 0.15]);
  
  // Parallax for the descriptor
  const descriptorY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section ref={containerRef} className="relative h-screen w-full px-8 pt-24 md:px-16 lg:px-24">
      <div className="relative z-10">
        <motion.div 
          style={{ opacity: devenOpacity }}
          className="fixed left-8 top-24 md:left-16 lg:left-24 z-0"
        >
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] leading-[0.9] font-serif tracking-tighter md:text-[10vw]"
          >
            Deven
          </motion.h1>
        </motion.div>
        
        <motion.div 
          style={{ opacity: maneOpacity, y: maneY }}
          className="mt-[10vw] md:mt-[9vw] relative z-10"
        >
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] leading-[0.9] font-serif tracking-tighter md:text-[10vw]"
          >
            Mane<motion.span 
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ 
                duration: 3, 
                times: [0, 0.5, 1], 
                ease: "easeInOut",
                repeat: 0
              }}
              className="text-accent inline-block"
            >
              .
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ y: descriptorY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 md:mt-48"
        >
          <p className="font-sans text-[10px] font-medium tracking-[0.3em] text-ink/60 uppercase">
            AI Engineer &nbsp;·&nbsp; Researcher &nbsp;·&nbsp; Builder
          </p>
        </motion.div>
      </div>
    </section>
  );
}

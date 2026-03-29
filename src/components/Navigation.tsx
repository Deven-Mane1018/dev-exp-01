import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { cn } from '@/src/lib/utils';

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'work', label: 'The Work' },
  { id: 'research', label: 'Research' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-8 top-1/2 z-40 -translate-y-1/2 hidden lg:block"
    >
      <div className="relative flex flex-col items-end gap-8">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={cn(
              "mono text-[9px] uppercase tracking-[0.2em] transition-all duration-500 origin-right rotate-90 whitespace-nowrap interactive",
              activeSection === section.id ? "text-accent opacity-100" : "text-ink opacity-30 hover:opacity-100 hover:text-accent"
            )}
          >
            {section.label}
          </button>
        ))}
        
        {/* Progress Line */}
        <div className="absolute -right-4 top-0 h-full w-[1px] bg-ink/10">
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="h-full w-full bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}

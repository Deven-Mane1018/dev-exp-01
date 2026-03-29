import { motion } from 'motion/react';
import RevealText from './RevealText';

const CONTACT_LINKS = [
  { label: 'deven.collab@gmail.com', href: 'mailto:deven.collab@gmail.com' },
  { label: 'linkedin.com/in/deven-mane1018', href: 'https://linkedin.com/in/deven-mane1018' },
  { label: 'github.com/Deven-Mane1018', href: 'https://github.com/Deven-Mane1018' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 min-h-[80vh] flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <RevealText>
          <h2 className="serif text-6xl md:text-8xl lg:text-9xl mb-16">
            Let's talk.
          </h2>
        </RevealText>

        <div className="space-y-8">
          {CONTACT_LINKS.map((link, i) => (
            <div key={i} className="group relative w-fit interactive">
              <a 
                href={link.href}
                className="serif text-2xl md:text-4xl lg:text-5xl text-ink/80 hover:text-ink transition-all duration-500 ease-in-out block group-hover:translate-x-2"
              >
                {link.label}
              </a>
              <motion.div 
                className="absolute -bottom-2 left-0 h-[1px] bg-accent w-0 group-hover:w-full"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <footer className="mt-32 pt-16 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="mono text-[9px] tracking-[0.2em] text-ink/30 uppercase">
          Deven Kishor Mane · 2025 · Built with intention.
        </p>
        <div className="flex gap-8">
          <span className="mono text-[9px] tracking-[0.2em] text-ink/30 uppercase">Nashik / Pune</span>
          <span className="mono text-[9px] tracking-[0.2em] text-ink/30 uppercase">GMT+5:30</span>
        </div>
      </footer>
    </section>
  );
}

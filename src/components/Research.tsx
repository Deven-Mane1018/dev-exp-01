import { motion } from 'motion/react';
import RevealText from './RevealText';

const PAPERS = [
  {
    id: 'I',
    title: 'NeuraSoul — Cognitive AI Identity Cloning System',
    meta: 'AI · Cognitive Computing · Published 2025',
    abstract: 'A framework for synthesizing digital identities through behavioral analysis and neural pattern matching. This research explores the ethical and technical boundaries of cognitive replication in real-time environments.',
    link: '#'
  },
  {
    id: 'II',
    title: 'Automated Specimen Preparation as per IS 1098 & IS 10810',
    meta: 'Industrial AI · Standards Automation · Published 2024',
    abstract: 'Implementation of computer vision and robotic process automation to standardize industrial specimen preparation. This system reduces human error in material testing by 98% while ensuring strict adherence to IS standards.',
    link: '#'
  }
];

export default function Research() {
  return (
    <section id="research" className="py-32 px-8 md:px-16 lg:px-24 bg-surface/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <RevealText>
          <blockquote className="serif italic text-3xl md:text-5xl lg:text-6xl text-ink/90 mb-32 leading-[1.1] md:w-3/4">
            "Two published papers before graduating. Most people wait until after."
          </blockquote>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {PAPERS.map((paper) => (
            <div key={paper.id} className="relative interactive group">
              <span className="serif text-4xl text-ink/20 absolute -left-8 -top-4 md:-left-12 group-hover:text-accent/20 transition-colors duration-500">{paper.id}.</span>
              <div className="pt-4">
                <h3 className="serif text-2xl md:text-3xl mb-4 leading-tight">{paper.title}</h3>
                <p className="mono text-[10px] uppercase tracking-widest text-accent mb-6">{paper.meta}</p>
                <p className="font-sans text-sm leading-relaxed text-ink/70 mb-8">
                  {paper.abstract}
                </p>
                <a 
                  href={paper.link}
                  className="editorial-underline font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-accent hover:opacity-70 transition-opacity"
                >
                  [ Read Paper → ]
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

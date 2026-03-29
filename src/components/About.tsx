import { motion } from 'motion/react';
import RevealText from './RevealText';

const QA = [
  {
    q: 'ON BACKGROUND',
    a: 'BCA student. Ajeenkya D.Y. Patil University. Graduating 2026. Based between Nashik and Pune.'
  },
  {
    q: 'ON WHAT DRIVES IT',
    a: 'The gap between what AI can do and what most people think it can do. That gap is where interesting work happens.'
  },
  {
    q: 'ON THE OTHER SIDE',
    a: '2× National Swimming Champion. State-level Badminton. 450km endurance cycling. The same obsession, different terrain.'
  },
  {
    q: 'ON WHERE THIS GOES',
    a: "Founder's Office intern at Buildrcad since February 2025. Embedded at the decision layer of an early-stage startup. Learning what it costs to build something real."
  }
];

const STATS = [
  { label: 'YEARS EXPERIENCE', value: '2+' },
  { label: 'HACKATHONS WON', value: '2' },
  { label: 'TEAMS DEFEATED', value: '10,000+' },
  { label: 'PAPERS PUBLISHED', value: '2' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-24"
          >
            {QA.map((item, i) => (
              <div key={i} className="max-w-2xl">
                <RevealText>
                  <h4 className="mono text-[10px] tracking-[0.3em] text-ink/40 mb-6 uppercase">
                    {item.q}
                  </h4>
                </RevealText>
                <p className="serif text-2xl md:text-3xl leading-snug text-ink/90">
                  {item.a}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-4 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-32 space-y-8 border-l border-ink/10 pl-8"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="interactive group">
                <p className="mono text-[9px] tracking-[0.2em] text-ink/40 mb-1 uppercase group-hover:text-accent transition-colors duration-500">
                  {stat.label}
                </p>
                <p className="serif text-3xl font-medium group-hover:translate-x-1 transition-transform duration-500">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

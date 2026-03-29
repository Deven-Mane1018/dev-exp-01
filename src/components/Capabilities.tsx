import { motion } from 'motion/react';

const SKILLS = [
  { name: 'Python', weight: 'font-bold', size: 'text-4xl md:text-6xl' },
  { name: 'TensorFlow', weight: 'font-medium', size: 'text-3xl md:text-5xl' },
  { name: 'React', weight: 'font-semibold', size: 'text-4xl md:text-6xl' },
  { name: 'MERN Stack', weight: 'font-normal', size: 'text-2xl md:text-4xl' },
  { name: 'Node.js', weight: 'font-medium', size: 'text-3xl md:text-5xl' },
  { name: 'YOLOv8', weight: 'font-bold', size: 'text-4xl md:text-6xl' },
  { name: 'XGBoost', weight: 'font-semibold', size: 'text-3xl md:text-5xl' },
  { name: 'Keras', weight: 'font-light', size: 'text-2xl md:text-4xl' },
  { name: 'OpenCV', weight: 'font-bold', size: 'text-4xl md:text-6xl' },
  { name: 'Scikit-learn', weight: 'font-medium', size: 'text-3xl md:text-5xl' },
  { name: 'SHAP', weight: 'font-semibold', size: 'text-2xl md:text-4xl' },
  { name: 'Pandas', weight: 'font-normal', size: 'text-3xl md:text-5xl' },
  { name: 'End-to-End ML', weight: 'font-bold', size: 'text-4xl md:text-6xl' },
  { name: 'System Architecture', weight: 'font-light', size: 'text-2xl md:text-4xl' },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 px-8 md:px-16 lg:px-24 bg-ink text-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-8 text-center">
          {SKILLS.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.03, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`${skill.weight} ${skill.size} font-sans tracking-tighter hover:text-accent transition-all duration-500 cursor-default interactive hover:scale-105 inline-block`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

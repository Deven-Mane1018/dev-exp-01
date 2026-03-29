import { motion } from 'motion/react';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import RevealText from './RevealText';

const PROJECTS = [
  {
    id: '01',
    title: 'NeuraSoul',
    role: 'Cognitive AI System · Lead Architect',
    year: '2025 —',
    description: 'Advanced cognitive computing framework designed for high-fidelity identity cloning and behavioral synthesis. Built on top of proprietary transformer architectures.',
    tech: 'Python, PyTorch, Transformers, FastAPI',
    link: '#'
  },
  {
    id: '02',
    title: 'SIH 2025 · Team Velocis',
    role: 'Hardware AI · IIT Kharagpur · 1st Place',
    year: '2025',
    description: 'Winner of Smart India Hackathon 2025. Developed an edge-AI solution for real-time industrial monitoring and predictive maintenance.',
    tech: 'C++, TensorFlow Lite, Jetson Nano, MQTT',
    link: '#'
  },
  {
    id: '03',
    title: 'SIH 2024 · Team CultivateX',
    role: 'AI Radio System · MP Police · 2nd Place',
    year: '2024',
    description: 'Runner-up at SIH 2024. Engineered an intelligent radio communication system for law enforcement, featuring real-time speech-to-text and intent analysis.',
    tech: 'Python, Whisper, React, Node.js',
    link: '#'
  },
  {
    id: '04',
    title: 'AEON AI',
    role: 'Real-time Hazard Detection · YOLOv8',
    year: '2024',
    description: 'Computer vision platform for industrial safety. Detects PPE violations and hazardous conditions with sub-50ms latency.',
    tech: 'YOLOv8, OpenCV, Python, Docker',
    link: '#'
  },
  {
    id: '05',
    title: 'HireWise',
    role: 'AI Hiring Platform · MERN + GPT',
    year: '2024',
    description: 'Automated recruitment pipeline that leverages LLMs for resume parsing, candidate ranking, and initial screening interviews.',
    tech: 'MongoDB, Express, React, Node.js, OpenAI',
    link: '#'
  },
  {
    id: '06',
    title: 'Netflix Churn Predictor',
    role: 'XGBoost · SHAP · Behavioral ML',
    year: '2023',
    description: 'Machine learning model predicting user churn with 94% accuracy. Utilizes SHAP values for model interpretability and feature importance.',
    tech: 'Python, XGBoost, Scikit-learn, SHAP',
    link: '#'
  }
];

interface ProjectRowProps {
  project: typeof PROJECTS[0];
  key?: any;
}

function ProjectRow({ project }: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className={cn(
        "group relative border-t border-ink/10 transition-all duration-700 ease-in-out overflow-hidden interactive",
        isHovered ? "bg-surface" : "bg-transparent"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle magnetic spotlight effect */}
      <motion.div 
        className="absolute pointer-events-none w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: mousePos.x - 128,
          y: mousePos.y - 128,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center px-4 py-10 md:px-8">
        <span className="mono text-[10px] text-ink/40 w-12 mb-2 md:mb-0">{project.id}</span>
        <h3 className="serif text-2xl md:text-3xl flex-1">{project.title}</h3>
        <span className="font-sans text-xs text-ink/60 flex-1 mt-1 md:mt-0">{project.role}</span>
        <span className="mono text-[10px] text-ink/40 w-24 text-right mt-2 md:mt-0">{project.year}</span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-8 md:px-8 md:ml-12 max-w-2xl">
          <p className="font-sans text-sm leading-relaxed text-ink/80 mb-4">
            {project.description}
          </p>
          <div className="flex items-end justify-between">
            <span className="mono text-[9px] uppercase tracking-wider text-ink/40">
              Stack: {project.tech}
            </span>
            <a 
              href={project.link}
              className="group/link flex items-center gap-1 text-[10px] uppercase tracking-widest font-medium text-accent"
            >
              View Project 
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <RevealText>
          <h2 className="serif text-5xl md:text-7xl mb-24 leading-tight">
            Selected Work,<br />
            2023 — Present
          </h2>
        </RevealText>

        <div className="border-b border-ink/10">
          {PROJECTS.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ArrowUpRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

// Interactive Project Card with 3D Tilt, Cursor Light, and Staggered Element Reveals
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
    setSpotlightPos({ x, y });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRotateX(0);
          setRotateY(0);
        }}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          backgroundColor: 'var(--bg-card)',
          borderColor: isHovered ? 'var(--border-accent)' : 'var(--border-main)',
          boxShadow: isHovered ? 'var(--panel-shadow), 0 0 25px rgba(6, 182, 212, 0.15)' : 'var(--panel-shadow)',
        }}
        className="rounded-3xl border transition-colors duration-300 flex flex-col justify-between overflow-hidden group relative h-full backdrop-blur-md"
      >
        {/* Dynamic Cursor Spotlight Reflection */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(6, 182, 212, 0.12), transparent 70%)`
            }}
          />
        )}

        {/* 1. Image / Preview Enters First */}
        <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: 'var(--bg-page)' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 transition-opacity duration-300"
            style={{ backgroundImage: `linear-gradient(to top, var(--bg-card) 0%, transparent 60%)` }}
          />
          
          {/* Badge Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span 
              className="px-2.5 py-1 rounded-lg backdrop-blur-md border text-[10px] font-mono text-cyan-500 dark:text-cyan-300 font-semibold uppercase shadow-sm"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-main)'
              }}
            >
              {project.badge}
            </span>
          </div>

          {/* Live Indicator */}
          {project.liveUrl && (
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-500 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE</span>
            </div>
          )}
        </div>

        {/* Card Body with Staggered Motion */}
        <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
          <div>
            {/* 2. Title Follows */}
            <h3 
              className="text-lg font-display font-bold tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h3>
            
            {/* 3. Description Follows */}
            <p 
              className="text-xs leading-relaxed font-sans mb-4 line-clamp-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>

            {/* Problem & Solution Snippet */}
            <div 
              className="p-3 rounded-xl border text-[11px] mb-4 transition-colors"
              style={{
                backgroundColor: 'var(--bg-card-subtle)',
                borderColor: 'var(--border-subtle)'
              }}
            >
              <span className="text-cyan-500 dark:text-cyan-400 font-mono font-semibold block mb-1">
                Problem Solved:
              </span>
              <p className="font-sans line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                {project.problem}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div 
                  key={idx} 
                  className="p-2 rounded-lg border"
                  style={{
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderColor: 'var(--border-subtle)'
                  }}
                >
                  <span className="text-[9px] font-mono uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                    {m.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-500 dark:text-cyan-300">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* 4. Technology Tags Appear */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.slice(0, 4).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md border text-[10px] font-mono transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-cyan-500 dark:text-cyan-400">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* 5. Buttons Appear Last */}
          <div 
            className="pt-4 border-t flex items-center justify-between"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-cyan-500"
              style={{ color: 'var(--text-secondary)' }}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-mono font-semibold text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors group/btn"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                Research Codebase
              </span>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'fullstack' | 'civic'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const filterTabs = [
    { label: 'All Projects', value: 'all', count: PROJECTS.length },
    { label: 'AI & Deep Learning', value: 'ai', count: PROJECTS.filter(p => p.category === 'ai').length },
    { label: 'Full-Stack & Web', value: 'fullstack', count: PROJECTS.filter(p => p.category === 'fullstack').length },
    { label: 'Civic & Infrastructure', value: 'civic', count: PROJECTS.filter(p => p.category === 'civic').length }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 relative border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-page)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Production <span className="text-gradient-cyan">Projects & Systems</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Real repositories, verified live deployments, and deep learning architectures built for real-world utility.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-glow-cyan border-cyan-400/50'
                    : 'hover:text-cyan-500'
                }`}
                style={{
                  backgroundColor: isSelected ? undefined : 'var(--bg-card)',
                  borderColor: isSelected ? undefined : 'var(--border-main)',
                  color: isSelected ? undefined : 'var(--text-secondary)'
                }}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isSelected ? 'bg-black/20 text-white' : 'bg-cyan-500/10 text-cyan-500 font-semibold'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Direct Link Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(139, 92, 246, 0.08) 100%)',
            borderColor: 'var(--border-accent)',
            boxShadow: 'var(--panel-shadow)'
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 
                className="text-base font-display font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Looking for more technical implementations?
              </h4>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                Browse all 15+ public repositories, pull requests, and commit histories on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/chandana-builds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-mono font-semibold transition-all shadow-glow-cyan hover:scale-[1.02] shrink-0"
          >
            <span>Visit @chandana-builds</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

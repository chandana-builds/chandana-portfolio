import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  ExternalLink,
  FileText,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResumeModal, 
  onDownloadResume 
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = PERSONAL_INFO.subtitles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.subtitles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // 3D Card tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Dynamic Headlines */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Availability Badge */}
            <div 
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-6 backdrop-blur-md shadow-sm transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-accent)',
                color: 'var(--text-primary)'
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-cyan-500 dark:text-cyan-300 font-medium">Available for AI/ML Roles & Freelance</span>
            </div>

            {/* Main Name Greeting */}
            <h1 
              className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold tracking-tight leading-[1.1] mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Hi, I'm <span className="text-gradient-cyan">Gurrapu Chandana</span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="font-mono text-xl sm:text-2xl mr-2" style={{ color: 'var(--text-muted)' }}>
                &gt;
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-500 dark:text-cyan-400 min-h-[32px]">
                {displayText}
              </span>
              <span className="w-2.5 h-6 bg-cyan-500 dark:bg-cyan-400 ml-1 animate-pulse"></span>
            </div>

            {/* Concise Professional Story */}
            <p 
              className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-sans"
              style={{ color: 'var(--text-secondary)' }}
            >
              B.Tech in Computer Science & Engineering specializing in <span className="text-cyan-500 dark:text-cyan-300 font-semibold">Artificial Intelligence & Machine Learning</span> at Balaji Institute of Technology & Science (CGPA: 8.7/10). 
              Currently an <span className="text-violet-500 dark:text-violet-300 font-semibold">AI Project Intern at Infosys Springboard</span> building multilingual RAG systems, and lead researcher in satellite image restoration with <span className="text-cyan-500 dark:text-cyan-300 font-semibold">GeoRestore-AI</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm shadow-glow-cyan hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onDownloadResume}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:border-cyan-500/50"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-main)',
                  color: 'var(--text-primary)'
                }}
              >
                <Download className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border text-xs font-mono transition-all hover:text-cyan-500"
                style={{
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-muted)'
                }}
                title="Quick preview resume PDF"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Preview PDF</span>
              </button>
            </div>

            {/* Social Links & Quick Verified Connect */}
            <div 
              className="flex items-center gap-4 pt-6 border-t w-full"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
                Connect:
              </span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border transition-colors hover:text-cyan-500"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border transition-colors hover:text-blue-500"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl border transition-colors hover:text-emerald-500"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:underline flex items-center gap-1 ml-auto font-medium"
              >
                <span>{PERSONAL_INFO.email}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: High-Tech Glassmorphic Identity Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'none',
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-accent)',
                boxShadow: 'var(--panel-shadow)'
              }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-3 border backdrop-blur-xl shadow-2xl group transition-colors"
            >
              {/* Outer Cyber Accent Rings */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-violet-600/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity -z-10" />

              {/* Top Card HUD bar */}
              <div 
                className="flex items-center justify-between px-3 py-2 border-b mb-3 text-[11px] font-mono"
                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span className="text-cyan-500 dark:text-cyan-300 font-semibold">IDENTITY // VERIFIED</span>
                </div>
                <span>LOC: IN-TS</span>
              </div>

              {/* Portrait Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border" style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border-subtle)' }}>
                <img
                  src={PERSONAL_INFO.images.portrait}
                  alt="Gurrapu Chandana - AI/ML Engineer & Full-Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-85"
                  style={{ backgroundImage: `linear-gradient(to top, var(--bg-card) 0%, transparent 60%)` }}
                />

                {/* Bottom Overlay Info Tag */}
                <div 
                  className="absolute bottom-4 left-4 right-4 p-3 rounded-xl border backdrop-blur-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-main)'
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                      Gurrapu Chandana
                    </span>
                    <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 font-semibold">
                      B.Tech AI & ML
                    </span>
                  </div>
                  <p className="text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                    Infosys Virtual Intern 7.0 &middot; GeoRestore-AI Lead
                  </p>
                </div>
              </div>

              {/* Floating Technology Badge HUD */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div 
                  className="p-2 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span className="block text-cyan-500 dark:text-cyan-400 font-bold text-xs">8.7</span>
                  <span>CGPA</span>
                </div>
                <div 
                  className="p-2 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span className="block text-violet-500 dark:text-violet-400 font-bold text-xs">15+</span>
                  <span>GitHub Repos</span>
                </div>
                <div 
                  className="p-2 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span className="block text-emerald-500 dark:text-emerald-400 font-bold text-xs">6+</span>
                  <span>Live Deployed</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Highlight Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-main)',
                boxShadow: 'var(--panel-shadow)'
              }}
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-cyan-300 group-hover:to-violet-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono mt-1 uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

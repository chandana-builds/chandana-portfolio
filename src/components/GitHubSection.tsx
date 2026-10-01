import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitFork, 
  Star, 
  ExternalLink, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const topRepos = [
    {
      name: "GeoRestore-AI",
      desc: "Generative AI Framework for Cloud Removal and Reconstruction of Satellite Imagery with cGANs.",
      lang: "Python / PyTorch",
      color: "#3572A5",
      url: "https://github.com/chandana-builds/GeoRestore-AI",
      stars: 1,
      forks: 0
    },
    {
      name: "ghmc-resolve-hub",
      desc: "Municipal grievance tracking and geospatial civic resolution platform built for Hyderabad.",
      lang: "TypeScript",
      color: "#3178c6",
      url: "https://github.com/chandana-builds/ghmc-resolve-hub",
      stars: 1,
      forks: 0
    },
    {
      name: "KisanSetu-e-Mandi",
      desc: "Smart Mandi Slot Booking & Queue Management Platform for Smart India Hackathon (SIH).",
      lang: "JavaScript",
      color: "#f1e05a",
      url: "https://github.com/chandana-builds/KisanSetu-e-Mandi",
      stars: 1,
      forks: 0
    },
    {
      name: "Heritage-kiosk",
      desc: "Interactive Cultural Portal & Museum Guide Kiosk built on Next.js 16 and React 19.",
      lang: "TypeScript",
      color: "#3178c6",
      url: "https://github.com/chandana-builds/Heritage-kiosk",
      stars: 1,
      forks: 0
    },
    {
      name: "MediVerse-web-frontend",
      desc: "Unified healthcare emergency dispatch and diagnostic triage application.",
      lang: "JavaScript",
      color: "#f1e05a",
      url: "https://github.com/chandana-builds/MediVerse-web-frontend",
      stars: 0,
      forks: 0
    },
    {
      name: "stress-detection-ai",
      desc: "Multi-modal AI application detecting stress levels using OpenCV face tracking & NLP sentiment.",
      lang: "Python",
      color: "#3572A5",
      url: "https://github.com/chandana-builds/stress-detection-ai",
      stars: 0,
      forks: 0
    }
  ];

  const languages = [
    { name: "Python", share: "38%", color: "bg-blue-500" },
    { name: "TypeScript", share: "27%", color: "bg-cyan-500" },
    { name: "JavaScript", share: "22%", color: "bg-amber-500" },
    { name: "C & Systems", share: "8%", color: "bg-violet-500" },
    { name: "HTML & CSS", share: "5%", color: "bg-rose-500" }
  ];

  return (
    <section 
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
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>OPEN SOURCE ACTIVITY</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            GitHub <span className="text-gradient-cyan">Engineering Hub</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Real codebases, active public repositories, and continuous algorithmic problem-solving.
          </p>
        </motion.div>

        {/* Top GitHub Profile Overview Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl border mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-md transition-colors"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-main)',
            boxShadow: 'var(--panel-shadow)'
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border shrink-0" style={{ borderColor: 'var(--border-accent)' }}>
              <img
                src={PERSONAL_INFO.images.square}
                alt="chandana-builds avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 
                  className="text-xl font-display font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  chandana-builds
                </h3>
                <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 font-semibold">
                  PUBLIC
                </span>
              </div>
              <p className="text-xs font-mono mt-1" style={{ color: 'var(--text-secondary)' }}>
                B.Tech Student | Exploring Web Development & AI
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                <span>15 Public Repos</span>
                <span>&middot;</span>
                <span className="text-cyan-500 dark:text-cyan-400">chandanagurrapu6@gmail.com</span>
              </div>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-glow-cyan hover:opacity-90 transition-all shrink-0 hover:scale-[1.02]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Language Breakdown Visualizer */}
        <div 
          className="p-6 rounded-2xl border mb-10 transition-colors"
          style={{
            backgroundColor: 'var(--bg-card-subtle)',
            borderColor: 'var(--border-subtle)'
          }}
        >
          <div className="flex items-center justify-between text-xs font-mono mb-3" style={{ color: 'var(--text-muted)' }}>
            <span>REPOSITORY LANGUAGE DISTRIBUTION</span>
            <span className="text-cyan-500 dark:text-cyan-400 font-semibold">VERIFIED FROM REPOSITORIES</span>
          </div>

          {/* Bar */}
          <div className="h-3 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden flex mb-4">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className={`${lang.color} h-full transition-all`}
                style={{ width: lang.share }}
                title={`${lang.name}: ${lang.share}`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
            {languages.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                <span>{lang.name}</span>
                <span style={{ color: 'var(--text-muted)' }}>({lang.share})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topRepos.map((repo, idx) => (
            <motion.a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border transition-all duration-300 group flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-main)',
                boxShadow: 'var(--panel-shadow)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-500" />
                    <h4 
                      className="text-sm font-mono font-bold group-hover:text-cyan-500 transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 transition-colors group-hover:text-cyan-500" style={{ color: 'var(--text-muted)' }} />
                </div>

                <p 
                  className="text-xs font-sans leading-relaxed mb-4 line-clamp-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {repo.desc}
                </p>
              </div>

              <div 
                className="flex items-center justify-between text-xs font-mono pt-3 border-t"
                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-500" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

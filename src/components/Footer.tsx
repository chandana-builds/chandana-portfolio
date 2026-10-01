import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  FileDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
  onDownloadResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="border-t relative overflow-hidden py-14 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-card-subtle)',
        borderColor: 'var(--border-main)'
      }}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-glow-cyan">
                <div 
                  className="w-full h-full rounded-[11px] flex items-center justify-center font-display font-black text-cyan-400 text-xs tracking-wider"
                  style={{ backgroundColor: 'var(--bg-page)' }}
                >
                  CG
                </div>
              </div>
              <span 
                className="font-display font-bold text-lg"
                style={{ color: 'var(--text-primary)' }}
              >
                Gurrapu Chandana
              </span>
            </div>

            <p 
              className="text-xs max-w-md font-sans leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI/ML Engineer & Full-Stack Developer specializing in Generative AI, Retrieval-Augmented Generation, and satellite remote sensing.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-500 dark:text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Built with curiosity, mathematical precision & AI.</span>
            </div>
          </div>

          {/* Quick Links & Actions */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
              <a href="#journey" className="hover:text-cyan-500 transition-colors">Journey</a>
              <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-cyan-500 transition-colors">Experience</a>
              <a href="#freelance" className="hover:text-cyan-500 transition-colors">Services</a>
              <button 
                onClick={onOpenResumeModal}
                className="hover:text-cyan-500 transition-colors flex items-center gap-1"
              >
                <FileDown className="w-3 h-3" />
                Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
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
                aria-label="GitHub"
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
                aria-label="LinkedIn"
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
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-500 dark:text-cyan-300 transition-colors"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div 
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          style={{ color: 'var(--text-muted)' }}
        >
          <div>
            &copy; {new Date().getFullYear()} Gurrapu Chandana. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Designed & Engineered in India</span>
            <span>&middot;</span>
            <span className="text-cyan-500 dark:text-cyan-400">Warangal, Telangana</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

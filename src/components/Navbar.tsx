import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileDown, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'journey', 'skills', 'projects', 'featured', 'experience', 'certificates', 'freelance', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Case Study', href: '#featured', id: 'featured' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certificates', id: 'certificates' },
    { name: 'Services', href: '#freelance', id: 'freelance' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-xl border-b shadow-lg'
          : 'py-5 bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent',
        borderColor: isScrolled ? 'var(--border-main)' : 'transparent',
        boxShadow: isScrolled ? 'var(--panel-shadow)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
            <div 
              className="w-full h-full rounded-[11px] flex items-center justify-center font-display font-black text-cyan-400 text-sm tracking-wider"
              style={{ backgroundColor: 'var(--bg-page)' }}
            >
              CG
            </div>
          </div>
          <div className="flex flex-col">
            <span 
              className="font-display font-bold text-base tracking-tight group-hover:text-cyan-400 transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              Gurrapu Chandana
            </span>
            <span className="text-[11px] font-mono text-cyan-500 dark:text-cyan-400 tracking-widest uppercase flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AI/ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav 
          className="hidden xl:flex items-center gap-1 border px-3 py-1.5 rounded-full backdrop-blur-md transition-colors"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-main)'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-500 dark:text-cyan-300 bg-cyan-500/10 shadow-sm font-semibold'
                    : 'hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                style={{
                  color: isActive ? undefined : 'var(--text-secondary)'
                }}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full shadow-[0_0_8px_#38bdf8]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Animated Day/Night Toggle */}
          <ThemeToggle />

          {/* Quick Resume View */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium border transition-all hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-300"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-main)',
              color: 'var(--text-secondary)'
            }}
            title="View Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Resume</span>
          </button>

          {/* Hire Me CTA */}
          <a
            href="#freelance"
            className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-glow-cyan hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-200" />
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button + Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border transition-colors"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-main)',
              color: 'var(--text-primary)'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden fixed inset-x-0 top-[65px] border-b px-6 py-6 backdrop-blur-2xl shadow-2xl transition-all"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-main)'
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-cyan-500/10 transition-colors flex items-center justify-between"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-cyan-500">#</span>
              </a>
            ))}

            <div className="pt-4 border-t flex flex-col gap-2" style={{ borderColor: 'var(--border-main)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-cyan-500/30 text-cyan-500 dark:text-cyan-300 bg-cyan-500/10 text-sm font-medium"
              >
                <FileDown className="w-4 h-4" />
                View / Download Resume
              </button>

              <a
                href="#freelance"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm shadow-glow-cyan"
              >
                <Sparkles className="w-4 h-4" />
                Hire Me for AI & Web Projects
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

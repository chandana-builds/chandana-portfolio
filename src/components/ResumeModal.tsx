import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl h-[90vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition-colors"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-accent)',
          boxShadow: 'var(--panel-shadow)'
        }}
      >
        {/* Header */}
        <div 
          className="p-4 sm:px-6 border-b flex items-center justify-between"
          style={{
            backgroundColor: 'var(--bg-card-subtle)',
            borderColor: 'var(--border-subtle)'
          }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl border flex items-center justify-center text-cyan-500"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)'
              }}
            >
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 
                className="text-base font-display font-bold flex items-center gap-2"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>Gurrapu Chandana — Official Resume</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                  VERIFIED
                </span>
              </h3>
              <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                AI/ML Engineer &middot; B.Tech CSE (AI & ML) &middot; Warangal, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-glow-cyan hover:opacity-90 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-mono transition-colors hover:text-cyan-500"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)'
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)'
              }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Embed */}
        <div className="flex-1 p-2 overflow-hidden relative" style={{ backgroundColor: 'var(--bg-page)' }}>
          <iframe
            src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0`}
            title="Gurrapu Chandana Resume"
            className="w-full h-full rounded-2xl border"
            style={{ borderColor: 'var(--border-subtle)' }}
          />
        </div>

        {/* Footer info strip */}
        <div 
          className="p-3 px-6 border-t flex flex-wrap items-center justify-between text-xs font-mono"
          style={{
            backgroundColor: 'var(--bg-card-subtle)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-muted)'
          }}
        >
          <span>CGPA: 8.7/10.0 &middot; Infosys Virtual Intern 7.0 &middot; Balaji Institute of Tech</span>
          <span className="text-cyan-500 dark:text-cyan-400 font-semibold">chandanagurrapu6@gmail.com</span>
        </div>

      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT...');

  useEffect(() => {
    const statuses = [
      'INITIALIZING AI ENGINE...',
      'LOADING DEEP LEARNING WEIGHTS...',
      'INDEXING GEORESTORE SATELLITE TILES...',
      'CONNECTING RAG VECTOR KNOWLEDGE...',
      'READY // GURRAPU CHANDANA'
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 250);
          return 100;
        }

        const stepIdx = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        if (stepIdx !== currentStep) {
          currentStep = stepIdx;
          setStatusText(statuses[stepIdx]);
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#07090E] flex flex-col items-center justify-center p-6 select-none">
      {/* Background glow */}
      <div className="w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] absolute pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
        
        {/* Monogram emblem */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-[1.5px] shadow-glow-cyan mb-6 animate-pulse">
          <div className="w-full h-full bg-[#090C15] rounded-[15px] flex items-center justify-center font-display font-black text-cyan-400 text-xl tracking-wider">
            CG
          </div>
        </div>

        {/* Name Title */}
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-widest uppercase mb-2">
          CHANDANA
        </h1>

        <p className="text-xs font-mono text-cyan-400 mb-6 flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" />
          <span>{statusText}</span>
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>AI SYSTEM BOOT</span>
          <span>{progress}%</span>
        </div>

      </div>
    </div>
  );
};

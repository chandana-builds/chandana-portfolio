import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center h-9 w-16 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
        isDark ? 'bg-[#141B2D] border border-cyan-500/30' : 'bg-slate-200 border border-slate-300'
      } ${className}`}
    >
      {/* Background icon hints */}
      <span className="sr-only">Toggle theme</span>
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Moon className={`w-3.5 h-3.5 transition-opacity ${isDark ? 'text-violet-400 opacity-80' : 'opacity-0'}`} />
        <Sun className={`w-3.5 h-3.5 transition-opacity ${isDark ? 'opacity-0' : 'text-amber-500 opacity-80'}`} />
      </div>

      {/* Animated sliding thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        animate={{
          x: isDark ? 0 : 28,
        }}
        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md z-10 ${
          isDark 
            ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 shadow-glow-cyan' 
            : 'bg-white text-amber-500 shadow-[0_2px_8px_rgba(0,0,0,0.15)]'
        }`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 fill-current text-white" />
          ) : (
            <Sun className="w-4 h-4 fill-current text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
};

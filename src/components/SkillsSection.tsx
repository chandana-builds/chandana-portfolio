import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Search, 
  Terminal, 
  Code2, 
  BrainCircuit, 
  Database, 
  Layers, 
  Wrench, 
  Globe2, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Interactive 3D Tilt Card with cursor spotlight
interface SkillCardProps {
  skill: {
    name: string;
    level: string;
    category: string;
  };
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
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

    // Subtle 3D tilt calculation
    const rotX = ((y - centerY) / centerY) * -9;
    const rotY = ((x - centerX) / centerX) * 9;

    setRotateX(rotX);
    setRotateY(rotY);
    setSpotlightPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setSpotlightPos({ x: -100, y: -100 });
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30';
      case 'Advanced':
        return 'bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/30';
      case 'Proficient':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/30';
      case 'Certified':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Machine')) return <BrainCircuit className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
    if (category.includes('Language')) return <Code2 className="w-4 h-4 text-violet-500 dark:text-violet-400" />;
    if (category.includes('Web') || category.includes('Full Stack')) return <Layers className="w-4 h-4 text-blue-500 dark:text-blue-400" />;
    if (category.includes('Database')) return <Database className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
    if (category.includes('Geospatial')) return <Globe2 className="w-4 h-4 text-teal-500 dark:text-teal-400" />;
    return <Wrench className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28, scale: 0.96, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ 
        duration: 0.45, 
        delay: (index % 5) * 0.06, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          backgroundColor: 'var(--bg-card)',
          borderColor: isHovered ? 'var(--border-accent)' : 'var(--border-main)',
          boxShadow: isHovered ? 'var(--panel-shadow), 0 0 20px rgba(6, 182, 212, 0.15)' : 'var(--panel-shadow)',
        }}
        className="relative p-4 rounded-2xl border backdrop-blur-md overflow-hidden flex flex-col justify-between h-[116px] group cursor-pointer transition-colors duration-300"
      >
        {/* Dynamic Spotlight Follower */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(150px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(6, 182, 212, 0.15), transparent 70%)`
            }}
          />
        )}

        {/* Top: Icon & Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <div 
            className="w-8 h-8 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: 'var(--bg-card-subtle)',
              borderColor: 'var(--border-subtle)'
            }}
          >
            {getCategoryIcon(skill.category)}
          </div>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-medium ${getLevelBadgeClass(skill.level)}`}>
            {skill.level}
          </span>
        </div>

        {/* Bottom: Name & Category */}
        <div className="relative z-10">
          <h4 
            className="text-sm font-display font-bold tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            {skill.name}
          </h4>
          <p 
            className="text-[11px] font-mono truncate mt-0.5"
            style={{ color: 'var(--text-muted)' }}
          >
            {skill.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allSkills = SKILL_CATEGORIES.flatMap(cat => 
    cat.skills.map(s => ({ ...s, category: cat.category }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryNames = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  return (
    <section 
      id="skills" 
      className="py-24 relative border-t transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-page)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-600/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-600 dark:text-violet-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Comprehensive <span className="text-gradient-violet">Technical Stack</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Organized strictly by verified engineering competencies across deep learning, geospatial analysis, modern frameworks, and production tools.
          </p>
        </motion.div>

        {/* Filter Controls: Search & Category Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {categoryNames.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-glow-cyan border-cyan-400/50'
                      : 'hover:text-cyan-500 dark:hover:text-cyan-300'
                  }`}
                  style={{
                    backgroundColor: isSelected ? undefined : 'var(--bg-card)',
                    borderColor: isSelected ? undefined : 'var(--border-main)',
                    color: isSelected ? undefined : 'var(--text-secondary)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search 
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2" 
              style={{ color: 'var(--text-muted)' }}
            />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-main)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

        </div>

        {/* Skills Grid - Progressive Scroll Reveal + Smooth Filter Animations */}
        <motion.div 
          layout 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <SkillCard
                key={`${skill.name}-${skill.category}`}
                skill={skill}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div 
            className="py-16 text-center rounded-2xl border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-main)'
            }}
          >
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              No technologies found matching "<span className="text-cyan-500">{searchQuery}</span>" in {selectedCategory}.
            </p>
          </div>
        )}

        {/* Category Breakdown Deep Dive Panels */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-main)',
                boxShadow: 'var(--panel-shadow)'
              }}
            >
              <div 
                className="flex items-center justify-between pb-3 border-b mb-4"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <h3 
                  className="text-base font-display font-bold group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {cat.category}
                </h3>
                <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold">
                  {cat.skills.length} skills
                </span>
              </div>
              <p 
                className="text-xs mb-4 font-sans line-clamp-2"
                style={{ color: 'var(--text-muted)' }}
              >
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg border text-[11px] font-mono transition-colors hover:border-cyan-500/40 hover:text-cyan-500"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

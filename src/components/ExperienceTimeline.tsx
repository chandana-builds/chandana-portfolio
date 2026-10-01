import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  GraduationCap
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section 
      id="experience" 
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-600 dark:text-violet-300 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Professional <span className="text-gradient-violet">Experience & Research</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Verified internships, institutional research engagements, and engineering simulations.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          {/* Animated Vertical line indicator */}
          <div 
            className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5"
            style={{
              background: 'linear-gradient(to bottom, #06b6d4, #8b5cf6, transparent)'
            }}
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const isCurrent = exp.status === 'current';
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="relative md:pl-20 group"
                >
                  {/* Glowing Timeline Node */}
                  <div 
                    className={`hidden md:flex absolute left-5 top-7 w-6 h-6 rounded-full border-2 items-center justify-center -translate-x-1/2 transition-transform duration-300 group-hover:scale-125 z-10 ${
                      isCurrent 
                        ? 'bg-cyan-500 border-white shadow-glow-cyan text-slate-950 ring-4 ring-cyan-500/20' 
                        : 'border-cyan-500/40'
                    }`}
                    style={{
                      backgroundColor: isCurrent ? '#06b6d4' : 'var(--bg-card)',
                      borderColor: isCurrent ? '#ffffff' : 'var(--border-accent)'
                    }}
                  >
                    <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-white' : 'bg-cyan-500'}`} />
                  </div>

                  {/* Experience Card with Stagger & Elevation */}
                  <div 
                    className="p-6 sm:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: isCurrent ? 'var(--border-accent)' : 'var(--border-main)',
                      boxShadow: isCurrent ? 'var(--panel-shadow), 0 0 25px rgba(6, 182, 212, 0.15)' : 'var(--panel-shadow)'
                    }}
                  >
                    {/* Header */}
                    <div 
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b mb-4"
                      style={{ borderColor: 'var(--border-subtle)' }}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 
                            className="text-lg sm:text-xl font-display font-bold group-hover:text-cyan-500 transition-colors"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold">
                              CURRENT ENGAGEMENT
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-xs font-mono text-cyan-500 dark:text-cyan-400">
                          <span className="flex items-center gap-1 font-semibold">
                            <Building2 className="w-3.5 h-3.5 text-slate-400" />
                            {exp.company}
                          </span>
                          <span>&middot;</span>
                          <span style={{ color: 'var(--text-muted)' }}>{exp.type}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        <div className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                          <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed font-sans">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Pills */}
                    <div 
                      className="flex flex-wrap gap-2 pt-2 border-t"
                      style={{ borderColor: 'var(--border-subtle)' }}
                    >
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg border text-xs font-mono transition-colors"
                          style={{
                            backgroundColor: 'var(--bg-card-subtle)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-12 border-t"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-cyan-500" />
            <h3 
              className="text-xl font-display font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Academic Foundation & Specialization
            </h3>
          </div>

          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl border shadow-2xl backdrop-blur-md"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-accent)',
              boxShadow: 'var(--panel-shadow)'
            }}
          >
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                  B.Tech CSE (Artificial Intelligence & Machine Learning)
                </span>
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  June 2024 – June 2028
                </span>
              </div>

              <h4 
                className="text-2xl font-display font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Balaji Institute of Technology and Science
              </h4>
              <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                Warangal, Telangana, India
              </p>

              <p 
                className="text-sm leading-relaxed font-sans pt-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                Rigorous curriculum covering Deep Learning, NLP, Computer Vision, Distributed Systems, Algorithms, and Software Engineering. Maintained a consistently high academic standing with practical real-world capstone executions.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {['Deep Learning & cGANs', 'Data Structures & Algorithms', 'RAG & Knowledge Retrieval', 'Operating Systems & Networks'].map((course, cIdx) => (
                  <span 
                    key={cIdx}
                    className="px-3 py-1 rounded-lg border text-xs font-mono"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="lg:col-span-4 p-6 rounded-2xl border text-center flex flex-col items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-card-subtle)',
                borderColor: 'var(--border-accent)'
              }}
            >
              <span className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                Cumulative Performance
              </span>
              <div className="text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 my-2">
                8.7 / 10.0
              </div>
              <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-medium">
                Verified up to 5th Semester
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

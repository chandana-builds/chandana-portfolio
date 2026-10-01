import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Brain, 
  Globe, 
  Sparkles,
  CheckCircle2,
  MapPin,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Generative AI & RAG",
      desc: "Architecting context-aware LLM pipelines, vector databases (ChromaDB), and retrieval chains that deliver factual, hallucination-resistant domain advisory."
    },
    {
      icon: Globe,
      title: "Geospatial & Satellite AI",
      desc: "Applying Conditional GANs and Deep Residual Autoencoders to restore cloud-occluded satellite imagery while strictly preserving NDVI surface reflectance."
    },
    {
      icon: Code2,
      title: "Production Web Engineering",
      desc: "Building low-latency full-stack applications with React, Next.js, Node.js, and FastAPI, prioritizing modularity, clean APIs, and rapid responsiveness."
    },
    {
      icon: Flame,
      title: "Real-World Impact First",
      desc: "Tackling tangible challenges — from agricultural mandi congestion and municipal grievance tracking to clinical healthcare triage."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden border-t transition-colors duration-300"
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Engineering AI That Solves <span className="text-gradient-cyan">Measurable Problems</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            I don't build toy projects. I design software and train deep learning models that handle noisy real-world data, bridge regional language divides, and optimize critical civic and agricultural processes.
          </p>
        </motion.div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Portrait & Highlights */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 relative"
          >
            <div 
              className="relative rounded-3xl overflow-hidden p-2 border backdrop-blur-xl shadow-2xl transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-accent)',
                boxShadow: 'var(--panel-shadow)'
              }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{ backgroundColor: 'var(--bg-page)' }}>
                <img
                  src={PERSONAL_INFO.images.square}
                  alt="Gurrapu Chandana"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90"
                  style={{ backgroundImage: `linear-gradient(to top, var(--bg-card) 0%, transparent 60%)` }}
                />
                
                {/* Overlay Badge */}
                <div 
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border backdrop-blur-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-main)'
                  }}
                >
                  <div className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold mb-1">
                    ACADEMIC & PROFESSIONAL CREDENTIAL
                  </div>
                  <div className="text-sm font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                    Gurrapu Chandana
                  </div>
                  <p className="text-xs font-sans mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    B.Tech CSE (AI & ML) &middot; Balaji Institute of Tech & Science
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: In-Depth Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 
              className="text-2xl sm:text-3xl font-display font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              From Mathematical Foundations to Deployed Intelligent Systems
            </h3>
            
            <p 
              className="text-sm sm:text-base leading-relaxed mb-4 font-sans"
              style={{ color: 'var(--text-secondary)' }}
            >
              My engineering journey is defined by a passion for solving difficult technical bottlenecks. 
              As a B.Tech Computer Science student specializing in AI & Machine Learning, I have spent hundreds of hours analyzing satellite spectral signatures, fine-tuning neural architectures, and assembling full-stack production environments.
            </p>

            <p 
              className="text-sm sm:text-base leading-relaxed mb-6 font-sans"
              style={{ color: 'var(--text-secondary)' }}
            >
              In my research on <span className="text-cyan-500 font-semibold">GeoRestore-AI</span>, I observed how cloud occlusion blinds remote-sensing satellites during critical monsoon crop seasons. Rather than applying generic filters, I engineered a deep generative model that reconstructs ground features while strictly preserving the integrity of normalized difference vegetation indices (NDVI).
            </p>

            {/* Quick check bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "CGPA: 8.7 / 10.0 across 5 rigorous semesters",
                "Infosys Virtual Internship 7.0 (RAG & LLMs)",
                "Smart India Hackathon (SIH) KisanSetu Innovation",
                "Proven deployments across Streamlit, Vercel & Render"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Location & Contact Bar */}
            <div 
              className="p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 text-xs font-mono"
              style={{
                backgroundColor: 'var(--bg-card-subtle)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)'
              }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span style={{ color: 'var(--text-secondary)' }}>Warangal, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-violet-500" />
                <span style={{ color: 'var(--text-secondary)' }}>Class of 2028 (Graduation)</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-500" />
                <span style={{ color: 'var(--text-secondary)' }}>Available for Immediate Roles</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* 4 Pillars of Engineering Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl border transition-all duration-300 group shadow-lg backdrop-blur-md"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-main)',
                  boxShadow: 'var(--panel-shadow)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderColor: 'var(--border-accent)'
                  }}
                >
                  <Icon className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                </div>
                <h4 
                  className="text-base font-display font-bold mb-2 group-hover:text-cyan-500 transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {pillar.title}
                </h4>
                <p 
                  className="text-xs leading-relaxed font-sans"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

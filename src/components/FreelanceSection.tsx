import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  Bot, 
  Database, 
  Globe2, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
}

const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'ai-ml-dev',
    title: 'AI & Machine Learning Development',
    tagline: 'Custom Deep Learning & Computer Vision Architectures',
    description: 'Custom neural architectures for classification, object detection, residual image restoration, and predictive modeling using PyTorch and TensorFlow.',
    icon: <BrainCircuit className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    deliverables: [
      'Model architecture design & GPU training pipelines',
      'Dataset curation, augmentation & validation',
      'TensorFlow / PyTorch production export & ONNX quantization'
    ]
  },
  {
    id: 'genai-rag',
    title: 'GenAI & RAG Applications',
    tagline: 'Context-Aware Intelligence & Retrieval Pipelines',
    description: 'Production-ready Retrieval-Augmented Generation systems connecting LLMs to private enterprise databases, PDF archives, and multi-modal knowledge bases.',
    icon: <Bot className="w-6 h-6 text-violet-500 dark:text-violet-400" />,
    deliverables: [
      'Vector database setup (ChromaDB / Pinecone / FAISS)',
      'Hybrid semantic retrieval with re-ranking & citations',
      'LangChain / LlamaIndex pipeline integration with guardrails'
    ]
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Web Development',
    tagline: 'Modern, Scalable Web Applications',
    description: 'End-to-end web engineering with React, TypeScript, Next.js, and Node.js. High-performance frontends backed by robust REST & GraphQL APIs.',
    icon: <Layers className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    deliverables: [
      'Responsive, accessible, and cinematic UI/UX',
      'Server-side rendering, API routes & database modeling',
      'Production deployment on Vercel / AWS / Docker'
    ]
  },
  {
    id: 'ai-web-apps',
    title: 'AI-Powered Web Applications',
    tagline: 'Bridging Neural Networks & Interactive UIs',
    description: 'Seamless integration of machine learning inference directly into web applications, featuring real-time visualization, live camera feeds, and Streamlit/Gradio dashboards.',
    icon: <Sparkles className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    deliverables: [
      'Real-time streaming inference via WebSockets / SSE',
      'Interactive dashboards for data exploration & insights',
      'FastAPI / Flask microservices backing modern frontends'
    ]
  },
  {
    id: 'data-automation',
    title: 'Data & Automation Solutions',
    tagline: 'Pipeline Engineering & Analytical Workflows',
    description: 'Automated data extraction, preprocessing pipelines, geospatial multi-band raster analysis, and custom Python automation scripts.',
    icon: <Database className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    deliverables: [
      'Automated ETL pipelines and scheduled tasks',
      'Geospatial raster analysis with rasterio / GDAL / OpenCV',
      'Structured analytical reports and visualization suites'
    ]
  }
];

interface FreelanceSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const FreelanceSection: React.FC<FreelanceSectionProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = (serviceTitle: string) => {
    if (onSelectService) onSelectService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="freelance" 
      className="py-24 relative border-t transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-page)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 rounded-full blur-[150px] pointer-events-none" />

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
            <span>ENGINEERING SERVICES & CAPABILITIES</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Have an Idea? <span className="text-gradient-cyan">Let's Build It.</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            I partner with founders, research teams, and enterprises to develop high-performance AI solutions, bespoke RAG systems, and production full-stack web platforms.
          </p>
        </motion.div>

        {/* Services Grid with 3D Hover & Cursor Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VERIFIED_SERVICES.map((service, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl border flex flex-col justify-between group shadow-xl backdrop-blur-md transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isHovered ? 'var(--border-accent)' : 'var(--border-main)',
                  boxShadow: isHovered ? 'var(--panel-shadow), 0 0 25px rgba(6, 182, 212, 0.15)' : 'var(--panel-shadow)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <motion.div 
                      animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <span 
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border font-semibold tracking-wider uppercase"
                      style={{
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      VERIFIED SKILL
                    </span>
                  </div>

                  <h3 
                    className="text-lg font-display font-bold group-hover:text-cyan-500 transition-colors mb-1.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p 
                    className="text-xs font-sans leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono block font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Core Deliverables:
                    </span>
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs font-sans" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive CTA Button */}
                <div 
                  className="pt-4 border-t"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <button
                    onClick={() => scrollToContact(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-mono font-semibold transition-all group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-glow-cyan"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-main)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

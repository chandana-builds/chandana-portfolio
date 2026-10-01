import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  AlertCircle,
  Cpu,
  Layers,
  BarChart3,
  Flame,
  Binary
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { FEATURED_PROJECT } from '../data/portfolioData';

interface StoryStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: string;
  highlights: string[];
  metric?: { label: string; value: string };
}

const STORY_STAGES: StoryStage[] = [
  {
    id: 'problem',
    step: '01 / 06',
    title: 'The Real-World Problem',
    subtitle: 'Optical Satellite Sensor Occlusion',
    icon: <AlertCircle className="w-4 h-4 text-rose-500" />,
    content: 'Thick and thin cloud coverage permanently occludes optical satellite constellations (Sentinel-2, Landsat 8/9). Over 67% of tropical and sub-tropical earth observation tiles are corrupted, preventing timely flood assessment, disaster response, and precision agriculture.',
    highlights: [
      'Over 67% global tropical imagery corrupted by cloud cover',
      'Disaster relief teams delayed by days waiting for clear orbital passes',
      'Precision agriculture cannot monitor crop yields during cloudy monsoon months'
    ],
    metric: { label: 'Global Imagery Loss', value: '~67% Occluded' }
  },
  {
    id: 'research',
    step: '02 / 06',
    title: 'Research & Current Limitations',
    subtitle: 'Spectral Distortion in Generative Models',
    icon: <Binary className="w-4 h-4 text-amber-500" />,
    content: 'Traditional CycleGANs and diffusion models generate visually plausible terrain but severely alter quantitative spectral reflectance values. In scientific remote sensing, this invalidates crucial agricultural indices like NDVI and NDWI.',
    highlights: [
      'Standard GANs introduce "hallucinated" land features and phantom structures',
      'Autoencoders blur high-frequency edge boundaries and road networks',
      'Destruction of Near-Infrared (NIR) band calibration necessary for vegetation metrics'
    ],
    metric: { label: 'Traditional Distortion', value: '> 14% NDVI Error' }
  },
  {
    id: 'solution',
    step: '03 / 06',
    title: 'The AI Solution: GeoRestore',
    subtitle: 'Physics-Guided Multi-Spectral Deep Learning',
    icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    content: 'GeoRestore AI introduces a physics-constrained residual architecture that couples cloud-penetrating spatial attention with multi-spectral band alignment. It reconstructs occluded pixels while strictly enforcing radiometric and spectral conservation laws.',
    highlights: [
      'Physics-guided residual learning preserves physical radiance values',
      'Dual-stream spatial attention isolates cloud masks without touching clear regions',
      'Guarantees preservation of multi-spectral signatures across all 4 optical bands'
    ],
    metric: { label: 'Reconstruction Fidelity', value: '32.4 dB PSNR' }
  },
  {
    id: 'architecture',
    step: '04 / 06',
    title: 'System Architecture',
    subtitle: '5-Stage Deep Residual Pipeline',
    icon: <Layers className="w-4 h-4 text-violet-400" />,
    content: 'The end-to-end model is structured as a hierarchical encoder-decoder pipeline with residual skip connections, multi-head attention gates, and perceptual loss constraints computed across high-resolution ground truth.',
    highlights: [
      'Spectral Band Alignment & Atmospheric Correction Layer',
      'Spatial-Spectral Attention Encoder isolating cloud density gradients',
      'Residual Bottleneck Blocks preserving structural topography',
      'Multi-Scale Feature Aggregation & Radiometric Discriminator'
    ],
    metric: { label: 'Perceptual Metric', value: '0.91 SSIM' }
  },
  {
    id: 'implementation',
    step: '05 / 06',
    title: 'Production Implementation',
    subtitle: 'PyTorch, Rasterio & Streamlit Cloud',
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    content: 'Engineered as a robust pipeline capable of streaming multi-gigabyte GeoTIFF tiles. Accelerated with GPU tensor operations and deployed via an interactive web interface allowing real-time tile upload and instant spectral comparison.',
    highlights: [
      'Developed with PyTorch, TorchVision, and OpenCV for GPU acceleration',
      'Geospatial raster processing pipeline using rasterio and GDAL',
      'Deployed live on Streamlit Cloud with side-by-side cloud vs restored viewer'
    ],
    metric: { label: 'Inference Speed', value: '< 1.8s / Tile' }
  },
  {
    id: 'result',
    step: '06 / 06',
    title: 'Empirical Results & Impact',
    subtitle: 'Scientific Accuracy Verified',
    icon: <BarChart3 className="w-4 h-4 text-cyan-400" />,
    content: 'Benchmarked across diverse Earth observation ecosystems including crop plantations, mountainous terrains, and urban centers. Outperformed baseline autoencoders with 98.7% NDVI agricultural index retention.',
    highlights: [
      '98.7% crop health index (NDVI) preservation compared to clear-sky truth',
      'Zero hallucinated artifacts verified against cloudless temporal composites',
      'Open-source repository with full reproducible code and sample datasets'
    ],
    metric: { label: 'Vegetation Accuracy', value: '98.7% NDVI' }
  }
];

export const FeaturedProjectCaseStudy: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = STORY_STAGES[activeStageIndex];

  return (
    <section 
      id="featured" 
      className="py-24 relative border-t transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-page)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE PRODUCT CASE STUDY</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            GeoRestore <span className="text-gradient-cyan">AI Framework</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            A step-by-step engineering story: From atmospheric satellite sensor distortion to physics-guided deep learning restoration.
          </p>
        </motion.div>

        {/* Story Stepper Navigation Bar */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {STORY_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-glow-cyan border-cyan-400/50 scale-105'
                    : 'hover:text-cyan-500'
                }`}
                style={{
                  backgroundColor: isActive ? undefined : 'var(--bg-card)',
                  borderColor: isActive ? undefined : 'var(--border-main)',
                  color: isActive ? undefined : 'var(--text-secondary)'
                }}
              >
                <span>{stage.step.split(' ')[0]}</span>
                <span className="hidden sm:inline">{stage.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Card Container */}
        <div 
          className="rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl transition-colors duration-300"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-main)',
            boxShadow: 'var(--panel-shadow)'
          }}
        >
          {/* Top Meta Bar */}
          <div 
            className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b mb-8"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-cyan-500 dark:text-cyan-300 uppercase tracking-wider">
                {FEATURED_PROJECT.badge}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-md border" style={{ backgroundColor: 'var(--bg-card-subtle)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                Stage: {activeStage.step}
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={FEATURED_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-mono transition-all hover:border-cyan-500/50 hover:text-cyan-500"
                style={{
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderColor: 'var(--border-main)',
                  color: 'var(--text-secondary)'
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>

              {FEATURED_PROJECT.liveUrl && (
                <a
                  href={FEATURED_PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-glow-cyan hover:opacity-90 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live App</span>
                </a>
              )}
            </div>
          </div>

          {/* Main Grid: Scroll Story Stage vs Sticky HUD Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Cols: Changing Narrative Stage */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Stage Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                        {activeStage.icon}
                      </div>
                      <span className="text-xs font-mono text-cyan-500 font-semibold tracking-wider uppercase">
                        {activeStage.subtitle}
                      </span>
                    </div>
                    <h3 
                      className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {activeStage.title}
                    </h3>
                  </div>

                  {/* Stage Narrative Content */}
                  <p 
                    className="text-sm sm:text-base leading-relaxed font-sans"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {activeStage.content}
                  </p>

                  {/* Bullet Highlights */}
                  <div 
                    className="p-5 rounded-2xl border space-y-2.5"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-subtle)'
                    }}
                  >
                    <span className="text-[11px] font-mono text-cyan-500 font-semibold tracking-wider uppercase block mb-1">
                      Key Technical Insights:
                    </span>
                    {activeStage.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs font-sans" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Metric Badge */}
                  {activeStage.metric && (
                    <div 
                      className="p-4 rounded-xl border flex items-center justify-between"
                      style={{
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    >
                      <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        {activeStage.metric.label}:
                      </span>
                      <span className="text-lg font-display font-bold text-cyan-500 dark:text-cyan-400">
                        {activeStage.metric.value}
                      </span>
                    </div>
                  )}

                  {/* Stage Navigation Footer */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                      disabled={activeStageIndex === 0}
                      className="px-4 py-2 rounded-xl text-xs font-mono border transition-all disabled:opacity-40"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-main)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      ← Previous Stage
                    </button>

                    <button
                      onClick={() => setActiveStageIndex((prev) => Math.min(STORY_STAGES.length - 1, prev + 1))}
                      disabled={activeStageIndex === STORY_STAGES.length - 1}
                      className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan transition-all disabled:opacity-40 flex items-center gap-1.5"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right 5 Cols: Earth Observation Interactive Visual HUD */}
            <div className="lg:col-span-5 relative">
              <div 
                className="rounded-2xl overflow-hidden border p-1 group transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderColor: 'var(--border-accent)',
                  boxShadow: 'var(--panel-shadow)'
                }}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--bg-page)' }}>
                  <img
                    src={FEATURED_PROJECT.image}
                    alt="Satellite Earth Observation with GeoRestore AI"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80"
                    style={{ backgroundImage: `linear-gradient(to top, var(--bg-card) 0%, transparent 60%)` }}
                  />

                  {/* Satellite HUD Overlay */}
                  <div className="absolute top-3 left-3 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Globe className="w-3 h-3 text-cyan-400" />
                      <span>MISSION: SENTINEL-2 / LANDSAT</span>
                    </div>
                    <span>BAND: MULTISPECTRAL // NIR + RGB</span>
                  </div>

                  {/* Stage Dynamic HUD indicator */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/90 backdrop-blur-md border border-cyan-500/30 text-xs">
                    <div className="flex items-center justify-between text-white font-semibold mb-1">
                      <span className="text-cyan-300 font-mono">Restoration Metric: 32.4 dB</span>
                      <span className="text-emerald-400 font-mono">98.7% NDVI</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-mono">
                      Active Stage: {activeStage.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="mt-4 pt-2">
                <span className="text-xs font-mono block mb-2" style={{ color: 'var(--text-muted)' }}>
                  Technologies Verified:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_PROJECT.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg border text-xs font-mono text-cyan-500 dark:text-cyan-300 transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link Button */}
              {FEATURED_PROJECT.liveUrl && (
                <a
                  href={FEATURED_PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-medium transition-all"
                >
                  <span>Launch Live Streamlit Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

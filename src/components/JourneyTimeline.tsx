import React, { useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring 
} from 'framer-motion';
import { 
  GraduationCap, 
  Cpu, 
  Briefcase, 
  Trophy, 
  Award, 
  Target, 
  Compass, 
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface MilestoneStation {
  id: string;
  stationNum: string;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  skills: string[];
  icon: React.ElementType;
  accent: string;
}

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Calculate top percentage for the futuristic vehicle
  const vehicleTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const vehicleBeamOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0.3, 0.9, 0.9, 0.4]);

  const stations: MilestoneStation[] = [
    {
      id: "education",
      stationNum: "STATION 01",
      tag: "ACADEMIC FOUNDATION",
      date: "2024 – 2028",
      title: "Balaji Institute of Technology & Science",
      subtitle: "B.Tech Computer Science & Engineering (AI & ML) — CGPA 8.7/10.0",
      description: "Commenced undergraduate engineering with intensive focus on deep learning, mathematics, algorithm design, and distributed systems. Built strong core competencies in Python, C, Java, and database systems.",
      highlights: [
        "Consistent academic excellence with 8.7/10 CGPA across semesters",
        "Deep exploration of Computer Vision, NLP, and Deep Learning theory",
        "Active lead in college coding circles and technical symposiums"
      ],
      skills: ["Deep Learning", "Data Structures", "Python", "OOP", "DBMS"],
      icon: GraduationCap,
      accent: "from-cyan-500 to-blue-500"
    },
    {
      id: "projects",
      stationNum: "STATION 02",
      tag: "CORE AI & SOFTWARE PROJECTS",
      date: "2025 – 2026",
      title: "GeoRestore AI & Full-Stack Systems",
      subtitle: "Physics-Guided Satellite Cloud Removal & Digital Platforms",
      description: "Pioneered GeoRestore-AI to solve heavy atmospheric cloud occlusion in optical satellite imagery using Conditional GANs, preserving NDVI reflectance. Shipped full-stack platforms including MediVerse and Voice Bridge.",
      highlights: [
        "GeoRestore-AI achieved 32.4 dB PSNR and 98.7% NDVI fidelity",
        "Shipped MediVerse healthcare emergency triage ecosystem",
        "Deployed Voice Bridge real-time speech translation portal"
      ],
      skills: ["PyTorch", "cGANs", "OpenCV", "Remote Sensing", "React", "Node.js"],
      icon: Cpu,
      accent: "from-blue-500 to-indigo-500"
    },
    {
      id: "internships",
      stationNum: "STATION 03",
      tag: "VIRTUAL & INDUSTRY INTERNSHIPS",
      date: "April 2026 – Present",
      title: "Infosys Springboard & Science Cadet Corps",
      subtitle: "AI Project Intern (Virtual 7.0) & Sustainability Engineering",
      description: "Spearheading a Multilingual Agricultural Advisory AI System at Infosys Springboard using LLMs and Retrieval-Augmented Generation (RAG). Completed 70-hour interdisciplinary training in HAZOP risk analysis and sustainability at SCC-A.",
      highlights: [
        "Architecting RAG pipelines indexing spatial agricultural data and microclimate telemetry",
        "Developed 'CHANDANA' AI Learning Buddy for student doubt resolution",
        "Completed HAZOP risk profiling and technical site studies at IMD & NEERI"
      ],
      skills: ["RAG", "LLMs", "LangChain", "Vector DB", "HAZOP Analysis", "SDLC"],
      icon: Briefcase,
      accent: "from-violet-500 to-purple-500"
    },
    {
      id: "hackathons",
      stationNum: "STATION 04",
      tag: "HACKATHONS & CIVIC IMPACT",
      date: "2026",
      title: "Smart India Hackathon & GHMC Resolve Hub",
      subtitle: "Smart Mandi Queue Management & Hyderabad Civic Grievance System",
      description: "Designed KisanSetu for the Smart India Hackathon (SIH) to eliminate farmer harvest congestion at agricultural mandis. Built GHMC Resolve Hub providing geospatial complaint routing for municipal services in Hyderabad.",
      highlights: [
        "KisanSetu digital slot scheduler targeting crop spoilage at mandis",
        "GHMC Resolve Hub with geolocation issue mapping and citizen tracking",
        "Production deployment on Vercel with 98/100 Lighthouse performance"
      ],
      skills: ["Next.js 14", "TypeScript", "Geospatial APIs", "Tailwind CSS", "Civic Tech"],
      icon: Trophy,
      accent: "from-amber-500 to-orange-500"
    },
    {
      id: "certifications",
      stationNum: "STATION 05",
      tag: "VERIFIED INDUSTRY CREDENTIALS",
      date: "2025 – 2026",
      title: "SAP Code Unnati & Tata Group Simulation",
      subtitle: "Advanced Tech Training & GenAI Powered Risk Analytics",
      description: "Certified through SAP CSR initiative & Edunet Foundation (ID: CU26_32528) covering Data Analytics, DSA, and Python. Completed Tata Group Forage simulation delivering predictive delinquency modeling and explainable AI.",
      highlights: [
        "SAP & Edunet Foundation Code Unnati certification (CU26_32528)",
        "Tata Group GenAI Data Analytics completion with verified credential",
        "All credentials backed by downloadable verifiable PDF documents"
      ],
      skills: ["Data Analytics", "Predictive AI", "Competitive Coding", "Risk Modeling"],
      icon: Award,
      accent: "from-emerald-500 to-teal-500"
    },
    {
      id: "focus",
      stationNum: "STATION 06",
      tag: "CURRENT TECHNICAL HORIZON",
      date: "Present",
      title: "Generative AI, RAG & Production Engineering",
      subtitle: "Building Context-Aware Agents & High-Throughput Web Applications",
      description: "Actively deepening expertise in Agentic AI workflows, vector retrieval optimization, multi-modal vision systems, and high-performance full-stack architectures ready for enterprise adoption.",
      highlights: [
        "Experimenting with hybrid vector indexing and cross-encoder re-ranking",
        "Expanding satellite imagery restoration to multi-temporal datasets",
        "Available for immediate AI/ML roles, internships, and freelance projects"
      ],
      skills: ["Agentic Workflows", "Vector Search", "FastAPI", "Full-Stack", "Model Optimization"],
      icon: Target,
      accent: "from-cyan-400 to-violet-500"
    },
    {
      id: "goals",
      stationNum: "STATION 07",
      tag: "FUTURE HORIZON & DESTINATION",
      date: "Next Station: Tomorrow",
      title: "Building Scalable AI Solutions Globally",
      subtitle: "Let's Collaborate, Innovate & Build",
      description: "My goal is to translate cutting-edge artificial intelligence into resilient, accessible software that impacts lives — from agriculture and environmental monitoring to modern healthcare.",
      highlights: [
        "Open to challenging full-time AI/ML Engineering roles",
        "Collaborating on freelance AI, web applications, and RAG pipelines",
        "Connect directly to start a project or discuss an engineering opportunity"
      ],
      skills: ["Engineering Leadership", "Applied AI", "Client Solutions", "Impact"],
      icon: Compass,
      accent: "from-blue-500 to-cyan-400"
    }
  ];

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="py-28 relative overflow-hidden bg-theme-page transition-colors duration-400"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-violet-600/5 dark:bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-500 dark:text-cyan-300 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>PROGRESSIVE CAREER EXPEDITION</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-theme-primary tracking-tight"
          >
            The Engineering <span className="text-gradient-cyan">Journey</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-theme-secondary max-w-2xl font-sans"
          >
            Scroll downward as my professional transit vehicle travels along the timeline, illuminating milestones from academic foundation to current breakthroughs.
          </motion.p>
        </div>

        {/* Cinematic Vertical Timeline Canvas Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Guide Track (Unlit Rail) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-slate-300 dark:bg-white/10 rounded-full" />

          {/* Illuminated Progress Track (Linked to Scroll) */}
          <motion.div
            style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 rounded-full shadow-[0_0_12px_#06b6d4] z-10"
          />

          {/* Futuristic Cyber Transit Pod / Vehicle (Synchronized to Scroll) */}
          <motion.div
            style={{ 
              top: vehicleTop,
              y: '-50%'
            }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-transform"
          >
            {/* Aerodynamic Capsule Hull */}
            <div className="relative w-10 h-14 rounded-2xl bg-[#090D18] border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.8)] flex flex-col items-center justify-between p-1.5 overflow-hidden">
              
              {/* Vehicle Directional Headlights / Conical Beam */}
              <motion.div 
                style={{ opacity: vehicleBeamOpacity }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-28 h-20 bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent clip-path-polygon pointer-events-none"
              />

              {/* Glowing Internal Power Core */}
              <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] animate-ping opacity-75 mt-1" />
              
              {/* Ion Engine Thrusters */}
              <div className="w-full flex items-center justify-center gap-1 mb-0.5">
                <span className="w-1.5 h-2 rounded-full bg-violet-400 shadow-[0_0_6px_#a855f7]" />
                <span className="w-2 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
                <span className="w-1.5 h-2 rounded-full bg-violet-400 shadow-[0_0_6px_#a855f7]" />
              </div>
            </div>

            {/* Floating HUD Speed Badge */}
            <div className="hidden lg:flex items-center gap-1.5 absolute left-14 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/85 border border-cyan-500/40 backdrop-blur-md text-[10px] font-mono text-cyan-300 whitespace-nowrap shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>TRANSIT // ACTIVE SCROLL</span>
            </div>
          </motion.div>

          {/* Stations & Milestones Grid */}
          <div className="space-y-16 sm:space-y-24 pt-6 pb-12">
            {stations.map((station, index) => {
              const isEven = index % 2 === 0;
              const Icon = station.icon;

              return (
                <div 
                  key={station.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Station Marker on Central Rail */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.7, opacity: 0.6 }}
                      whileInView={{ scale: 1.1, opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4 }}
                      className="w-10 h-10 rounded-2xl bg-theme-card border-2 border-cyan-500/40 shadow-glow-cyan flex items-center justify-center text-cyan-400"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Milestone Card Content */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className={`p-6 sm:p-8 rounded-3xl bg-theme-card border border-theme-main hover:border-cyan-500/40 transition-all duration-300 shadow-xl group ${
                        isEven ? 'md:mr-10' : 'md:ml-10'
                      }`}
                    >
                      {/* Top Station Tag & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-theme-subtle mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-300 border border-cyan-500/25 font-bold">
                            {station.stationNum}
                          </span>
                          <span className="text-[11px] font-mono text-theme-muted uppercase tracking-wider">
                            {station.tag}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold">
                          {station.date}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-display font-bold text-theme-primary group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors mb-1">
                        {station.title}
                      </h3>
                      <p className="text-xs font-mono text-violet-500 dark:text-violet-300 mb-3">
                        {station.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-theme-secondary font-sans leading-relaxed mb-4">
                        {station.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {station.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-theme-secondary">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-theme-subtle">
                        {station.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-theme-subtle border border-theme-subtle text-[11px] font-mono text-theme-secondary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'civic' | 'research';
  badge: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  metrics: { label: string; value: string }[];
  image: string;
  screenshots?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  status: 'current' | 'completed';
  description: string;
  bullets: string[];
  technologies: string[];
  badgeColor: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  verificationUrl?: string;
  downloadPath?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  location: string;
  score: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Gurrapu Chandana",
  shortName: "Chandana",
  headline: "AI/ML Engineer & Full-Stack Developer",
  subtitles: [
    "AI/ML Engineer & Researcher",
    "Generative AI & RAG Specialist",
    "Full-Stack Web Architect",
    "Geospatial AI & Remote Sensing Innovator",
    "Freelance Solutions Engineer"
  ],
  bio: "B.Tech Computer Science & Engineering (AI & ML) student at Balaji Institute of Technology and Science (CGPA: 8.7/10). Experienced in architecting production-grade Generative AI, Retrieval-Augmented Generation (RAG) pipelines, satellite remote sensing restoration with cGANs, and scalable full-stack applications. Proven track record at Infosys Springboard and Tata Group.",
  email: "chandanagurrapu6@gmail.com",
  phone: "+91 8106185417",
  location: "Warangal, Telangana, India",
  github: "https://github.com/chandana-builds",
  linkedin: "https://www.linkedin.com/in/chandana-gurrapu-58787a337/",
  stats: [
    { label: "Academic CGPA", value: "8.7 / 10" },
    { label: "Public Repositories", value: "15+" },
    { label: "Live Deployments", value: "6+" },
    { label: "Industry & AI Internships", value: "3+" },
  ],
  images: {
    portrait: "/chandana_portrait.jpg",
    square: "/chandana.jpg"
  },
  resumePath: "/Chandana_Gurrapu_Resume.pdf"
};

export const FEATURED_PROJECT: Project = {
  id: "georestore-ai",
  title: "GeoRestore-AI",
  category: "ai",
  badge: "Flagship Deep Learning & Earth Observation",
  tagline: "Physics-Guided & Deep Residual Cloud Removal for Satellite Imagery",
  description: "A state-of-the-art Generative AI framework designed to remove atmospheric cloud occlusion and reconstruct high-fidelity optical satellite imagery while strictly preserving vegetation indices (NDVI) and surface reflectance.",
  problem: "Cloud cover obstructs up to 67% of global optical satellite imagery at any given moment, severely degrading crop monitoring, disaster assessment, urban planning, and environmental analytics.",
  solution: "Engineered an end-to-end deep learning pipeline combining Conditional Generative Adversarial Networks (cGANs) with Deep Residual Autoencoders and physics-guided reflectance constraints to restore obscured terrestrial spectral bands.",
  architecture: [
    "Input Layer: Cloud-masked Sentinel-2 / Landsat optical multiband tiles",
    "Generative Core: Deep Residual Encoder-Decoder with skip connections",
    "Adversarial Discriminator: PatchGAN discriminator for texture realism",
    "Loss Optimization: Hybrid L1 + Perceptual VGG Loss + Spectral Consistency Loss",
    "Output Pipeline: Quantitative validation using PSNR, SSIM, and NDVI retention"
  ],
  techStack: ["PyTorch", "Python", "OpenCV", "Remote Sensing", "cGANs", "Deep Residual Networks", "Streamlit", "QGIS", "NumPy"],
  githubUrl: "https://github.com/chandana-builds/GeoRestore-AI",
  liveUrl: "https://georestore-ai-w7stmkvh8dvowuaoxxnlsk.streamlit.app/",
  featured: true,
  metrics: [
    { label: "Peak Signal-to-Noise (PSNR)", value: "32.4 dB" },
    { label: "Structural Similarity (SSIM)", value: "0.942" },
    { label: "Spectral Fidelity (NDVI)", value: "98.7% Retained" },
    { label: "Live Web Inference", value: "< 2.1s" }
  ],
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
};

export const PROJECTS: Project[] = [
  FEATURED_PROJECT,
  {
    id: "kisansetu-agri-ai",
    title: "Multilingual Agricultural Advisory AI & KisanSetu",
    category: "ai",
    badge: "Smart India Hackathon (SIH) & Infosys AI",
    tagline: "RAG-Powered Multilingual Agro-Advisory & Smart Mandi Queue Management",
    description: "An intelligent localized agricultural intelligence system powered by Large Language Models (LLMs) and Vector RAG pipelines, combined with an automated mandi slot booking platform for farmers.",
    problem: "Smallholder farmers face linguistic barriers, inaccurate weather/soil advisories, and severe harvest congestion at Mandis leading to crop spoilage and exploitation.",
    solution: "Built a conversational AI assistant supporting regional Indian dialects using LangChain & Vector Databases for microclimate/crop disease advisory, integrated with an automated mandi queue slot scheduler.",
    architecture: [
      "Vector Storage: ChromaDB indexing ICAR crop databases, soil health metrics, and regional agricultural bulletins",
      "Retrieval: Hybrid dense vector retrieval with cross-encoder re-ranking",
      "LLM Synthesis: Prompt-engineered dialect localization with fallback safety filters",
      "Mandi Engine: Real-time slot booking algorithm minimizing yard congestion"
    ],
    techStack: ["LLMs", "Retrieval-Augmented Generation (RAG)", "LangChain", "Vector DB", "Python", "JavaScript", "Render"],
    githubUrl: "https://github.com/chandana-builds/KisanSetu-e-Mandi",
    liveUrl: "https://kisansetu-e-mandi.onrender.com/",
    metrics: [
      { label: "Supported Languages", value: "Multilingual" },
      { label: "Advisory Query Accuracy", value: "94.5%" },
      { label: "Mandi Wait Time Cut", value: "60%" }
    ],
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "mediverse",
    title: "MediVerse — Smart Hospital & Emergency Care",
    category: "fullstack",
    badge: "Healthcare Full-Stack Ecosystem",
    tagline: "Unified Digital Patient Journey, AI Symptom Triage & Emergency Response",
    description: "A comprehensive digital health ecosystem connecting patients, doctors, diagnostic labs, and emergency ambulance dispatchers through real-time telemetry and AI diagnostic decision support.",
    problem: "Fragmented hospital workflows and slow emergency dispatch systems cause critical delays in emergency patient care.",
    solution: "Engineered a responsive full-stack platform featuring automated clinical triage, live ambulance tracking, appointment scheduling, and patient history synchronization.",
    architecture: [
      "Client Layer: React.js with modular component architecture and real-time state management",
      "API Layer: RESTful Express/Node.js microservices with JWT authentication",
      "AI Engine: Python-based symptom risk prediction and triage severity categorization",
      "Data Persistence: Cloud database with encrypted health records"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Python", "REST APIs", "Machine Learning", "Vercel"],
    githubUrl: "https://github.com/chandana-builds/MediVerse-web-frontend",
    liveUrl: "https://mediverse-frontend-gamma.vercel.app/",
    metrics: [
      { label: "Emergency Response Lag", value: "< 350ms" },
      { label: "Triage Accuracy", value: "91.8%" },
      { label: "Active Modules", value: "6 Subsystems" }
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ghmc-resolve-hub",
    title: "GHMC Resolve Hub",
    category: "civic",
    badge: "Smart City Infrastructure",
    tagline: "Municipal Grievance Receiving, Geospatial Tracking & Resolution Hub",
    description: "An enterprise-grade civic grievance platform tailored for the Greater Hyderabad Municipal Corporation (GHMC) to log, geolocate, prioritize, and monitor public infrastructure issues.",
    problem: "Citizens struggle with opaque civic complaint reporting, while municipal workers lack unified location tracking and status verification.",
    solution: "Developed an interactive Next.js application with geolocation tagging, real-time ticket escalation, ward-level categorization, and resolution transparency.",
    architecture: [
      "Frontend: Next.js 14 App Router, Server Components, and Tailwind CSS",
      "Geospatial Module: Interactive coordinates capture and ward mapping",
      "Workflow Engine: Status lifecycle tracking (Open -> Assigned -> In Progress -> Resolved)",
      "Citizen Dashboard: Real-time ticket lookup by complaint tracking ID"
    ],
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Geospatial APIs", "Vercel"],
    githubUrl: "https://github.com/chandana-builds/ghmc-resolve-hub",
    liveUrl: "https://ghmc-resolve-hub.vercel.app/",
    metrics: [
      { label: "Deployment", value: "Production Vercel" },
      { label: "City Scope", value: "Hyderabad" },
      { label: "Lighthouse Score", value: "98/100" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "stress-detection-ai",
    title: "Multimodal Stress Detection AI",
    category: "ai",
    badge: "Computer Vision & Affective Computing",
    tagline: "Real-Time Facial Emotion Tracking & Text Sentiment Analysis",
    description: "An advanced multi-modal affective computing system that estimates psychological stress levels by fusing facial micro-expressions via webcam with natural language sentiment.",
    problem: "Early psychological burnout and stress often go unnoticed until clinical intervention is required.",
    solution: "Combined OpenCV facial landmark tracking with deep convolutional neural networks and NLP sentiment transformers into an interactive real-time assessment suite.",
    architecture: [
      "Visual Stream: Haar Cascade / MTCNN facial detection + CNN emotion classification",
      "Text Stream: DistilBERT sentiment extraction from user self-reflections",
      "Multimodal Fusion: Weighted confidence scoring for composite stress metric",
      "Live Deployment: Hugging Face Spaces interactive application"
    ],
    techStack: ["Python", "Computer Vision", "OpenCV", "PyTorch", "NLP", "Hugging Face Spaces", "Streamlit"],
    githubUrl: "https://github.com/chandana-builds/stress-detection-ai",
    liveUrl: "https://huggingface.co/spaces/chandana987/stress-detection-ai",
    metrics: [
      { label: "Frame Rate", value: "30+ FPS" },
      { label: "Emotion Classes", value: "7 Universal" },
      { label: "Accuracy", value: "89.4%" }
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "voice-bridge",
    title: "Voice Bridge — Real-Time Speech Translator",
    category: "ai",
    badge: "Speech AI & Accessibility",
    tagline: "Instant Bi-directional Voice & Text Translation across Global Languages",
    description: "A low-latency speech-to-speech and text translation web interface empowering instant cross-lingual communication through native browser speech recognition and synthesis APIs.",
    problem: "Real-time communication across regional and global language barriers remains clumsy without expensive specialized hardware.",
    solution: "Designed an intuitive audio visualizer interface that continuously captures microphone streams, transcribes utterances, translates target languages, and synthesizes audio responses.",
    architecture: [
      "Web Speech Recognition: High-accuracy continuous audio capture",
      "Translation Engine: Neural machine translation API connectors",
      "Audio Synthesis: Responsive pitch-modulated Web Speech Synthesis",
      "UI: Cyberpunk waveform visualizer with reactive state indicators"
    ],
    techStack: ["JavaScript", "Web Speech API", "Text-to-Speech", "HTML5", "CSS3", "Vercel"],
    githubUrl: "https://github.com/chandana-builds/Voice-Bridge",
    liveUrl: "https://voice-bridge-teal.vercel.app/",
    metrics: [
      { label: "Translation Latency", value: "< 800ms" },
      { label: "Browser Compatibility", value: "100% Modern" },
      { label: "Setup Required", value: "Zero Install" }
    ],
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "empowerher",
    title: "EmpowerHer — Women Safety & Wellness Hub",
    category: "fullstack",
    badge: "Social Impact & Safety",
    tagline: "One-Touch Emergency SOS, AI Support Chatbot & Verified Community Resources",
    description: "A comprehensive digital security and wellness portal providing women with rapid emergency alert broadcasting, geolocation transmission, legal guidance, and community support forums.",
    problem: "In distress situations, every second counts; women need emergency broadcasting and immediate access to verified safety mechanisms.",
    solution: "Engineered emergency SOS triggers, automated location dispatch to trusted contacts, safety route recommendations, and an empathetic AI assistance chatbot.",
    architecture: [
      "Emergency Protocol: Geolocation streaming with immediate SMS/alert webhook trigger",
      "Chatbot Assistant: Intent-trained support bot for emergency protocols and legal rights",
      "Community Groups: Moderated discussions and peer-to-peer verification",
      "Ticketing: Discreet safety concern reporting workflow"
    ],
    techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Vercel"],
    githubUrl: "https://github.com/chandana-builds/EmpowerHer",
    liveUrl: "https://empower-her-five.vercel.app/",
    metrics: [
      { label: "SOS Trigger Delay", value: "< 1s" },
      { label: "Security", value: "End-to-End Encrypted" },
      { label: "Status", value: "Live" }
    ],
    image: "/projects/home.png"
  },
  {
    id: "heritage-kiosk",
    title: "Heritage Kiosk — Interactive Cultural Portal",
    category: "fullstack",
    badge: "Next.js 16 & Cultural Preservation",
    tagline: "Modern Museum & Monument Exploration Guide with High-Performance UI",
    description: "A kiosk-optimized interactive web experience showcasing historical monuments, artifacts, audio walkthroughs, and archaeological archives with sub-second page transitions.",
    problem: "Traditional museum and heritage displays lack engaging digital touchpoints for younger generations and international visitors.",
    solution: "Created an immersive kiosk UI built on Next.js 16 and React 19 featuring curated timelines, multi-angle imagery, and localized cultural narratives.",
    architecture: [
      "Frontend: Next.js 16 with React 19 concurrency primitives",
      "Styling: Tailwind CSS v4 design tokens for ultra-responsive touch displays",
      "Interactive Gallery: High-resolution zoomable artifact viewing"
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/chandana-builds/Heritage-kiosk",
    metrics: [
      { label: "Architecture", value: "Next.js 16 & React 19" },
      { label: "Touch Latency", value: "0ms" },
      { label: "Visual Fidelity", value: "Ultra HD" }
    ],
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200&auto=format&fit=crop"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "infosys-7",
    role: "AI Project Intern — Virtual Internship 7.0",
    company: "Infosys Springboard",
    type: "Virtual / Remote",
    period: "July 2026 – Present",
    location: "Remote, India",
    status: "current",
    description: "Spearheading the engineering of an enterprise-grade multilingual Agricultural Advisory AI System powered by Large Language Models (LLMs) and advanced Retrieval-Augmented Generation (RAG).",
    bullets: [
      "Building a multilingual Agricultural Advisory AI System using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) for localized crop advisory across regional languages.",
      "Developing high-throughput data pipelines to process, clean, and vectorize spatial agricultural data and microclimate indicators into vector stores for retrieval-based recommendations.",
      "Designing natural language processing interfaces for complex agricultural inquiries and contextual query resolution under real-world agricultural constraints."
    ],
    technologies: ["LLMs", "RAG", "LangChain", "Vector Databases", "Python", "NLP", "Prompt Engineering"],
    badgeColor: "cyan"
  },
  {
    id: "scc-a",
    role: "Summer Intern — Engineering & Sustainability",
    company: "Science Cadet Corps (SCC-A)",
    type: "Technical Site & Site Studies",
    period: "May 2026 – June 2026",
    location: "On-Site, India",
    status: "completed",
    description: "Completed an intensive 70-hour interdisciplinary engineering and environmental safety program with field studies at IMD and NEERI.",
    bullets: [
      "Completed a 70-hour interdisciplinary engineering internship covering environmental engineering, sustainability, and industrial process safety.",
      "Analyzed commercial water and air purification architectures, domestic ventilation dynamics, and green engineering methods.",
      "Performed Hazard and Operability (HAZOP) risk analysis for industrial polymerization systems and conducted technical field studies at IMD and NEERI."
    ],
    technologies: ["HAZOP Analysis", "Environmental Engineering", "Process Safety", "Data Logging"],
    badgeColor: "emerald"
  },
  {
    id: "infosys-empowher",
    role: "AI Intern — Empow(h)er Capstone Internship",
    company: "Infosys Springboard",
    type: "Virtual Internship",
    period: "April 2026 – June 2026",
    location: "Remote, India",
    status: "completed",
    description: "Developed and shipped “CHANDANA”, an autonomous AI-powered Learning Buddy leveraging Generative AI, conversational workflows, and prompt engineering.",
    bullets: [
      "Engineered 'CHANDANA', an interactive AI learning companion utilizing Generative AI, prompt engineering, and conversational AI agents.",
      "Implemented Python-based AI agent workflows for automated student doubt resolution, adaptive content generation, and intent classification.",
      "Applied structured Software Development Life Cycle (SDLC) best practices and defended the capstone deliverables before senior industry mentors."
    ],
    technologies: ["Generative AI", "Conversational AI", "Prompt Engineering", "Python", "SDLC"],
    badgeColor: "blue"
  },
  {
    id: "tata-forage",
    role: "GenAI Powered Data Analytics Simulation",
    company: "Tata Group – Forage",
    type: "Industry Simulation",
    period: "April 2026",
    location: "Remote",
    status: "completed",
    description: "Simulated enterprise-level predictive customer risk analytics, delinquency modeling, and agentic AI collections strategies.",
    bullets: [
      "Executed exploratory data analysis (EDA) on large financial credit portfolios for customer delinquency risk profiling.",
      "Formulated predictive machine learning models and an agentic AI collection strategy incorporating fairness, explainability, and regulatory compliance metrics.",
      "Produced executive business reports and data storytelling dashboards for strategic leadership decision-making."
    ],
    technologies: ["Data Analytics", "Agentic AI", "Predictive Modeling", "Risk Analytics", "Explainable AI"],
    badgeColor: "amber"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Balaji Institute of Technology and Science",
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    period: "June 2024 – June 2028",
    location: "Warangal, Telangana, India",
    score: "CGPA: 8.7 / 10.0 (up to 5th Semester)",
    highlights: [
      "Specialized coursework in Deep Learning, Natural Language Processing, Computer Vision, and Distributed Computing.",
      "Core focus on practical AI system deployment, geospatial data intelligence, and full-stack software architecture.",
      "Active contributor to hackathons, technical symposia, and coding initiatives."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "sap-code-unnati",
    title: "Code Unnati Program — Advanced Tech Training",
    issuer: "SAP & Edunet Foundation",
    date: "2025 – 2026",
    credentialId: "CU26_32528",
    skills: ["Python", "Object-Oriented Programming", "Data Analytics", "DBMS", "Data Structures & Algorithms", "Competitive Coding"],
    downloadPath: "/certificates/Edunet_SAP_CodeUnnati_Completion_Certificate.pdf"
  },
  {
    id: "tata-genai",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group & Forage",
    date: "April 2026",
    credentialId: "qzPFjq346yKPnX5jG / 68bd7c199551f2412c552aab",
    skills: ["Predictive Risk Modeling", "Delinquency AI", "Agentic AI Strategy", "Exploratory Data Analysis", "Executive Data Storytelling"],
    downloadPath: "/certificates/TATA_GenAI Powered Data Analytics_certificate.pdf"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "AI & Machine Learning",
    description: "Deep learning models, generative architectures, and retrieval pipelines",
    skills: [
      { name: "Generative AI", level: "Advanced", icon: "Brain" },
      { name: "RAG (Retrieval-Augmented Gen)", level: "Advanced", icon: "Database" },
      { name: "PyTorch", level: "Advanced", icon: "Flame" },
      { name: "OpenCV & Computer Vision", level: "Advanced", icon: "Eye" },
      { name: "NLP & Transformers", level: "Intermediate", icon: "MessageSquare" },
      { name: "LangChain", level: "Advanced", icon: "Link" },
      { name: "Scikit-Learn", level: "Advanced", icon: "Cpu" },
      { name: "Hugging Face Spaces", level: "Advanced", icon: "Smile" },
      { name: "Prompt Engineering", level: "Expert", icon: "Terminal" },
      { name: "NumPy & Pandas", level: "Expert", icon: "BarChart" }
    ]
  },
  {
    category: "Geospatial & Remote Sensing",
    description: "Satellite imagery processing, atmospheric correction, and spectral indices",
    skills: [
      { name: "Satellite Image Processing", level: "Advanced", icon: "Globe" },
      { name: "Cloud Removal (cGANs)", level: "Advanced", icon: "CloudRain" },
      { name: "NDVI Spectral Indices", level: "Advanced", icon: "Activity" },
      { name: "Spatial Data Analysis", level: "Intermediate", icon: "MapPin" },
      { name: "QGIS", level: "Intermediate", icon: "Layers" },
      { name: "Deep Residual Autoencoders", level: "Advanced", icon: "Maximize" }
    ]
  },
  {
    category: "Programming Languages",
    description: "Core languages for systems, algorithms, and applications",
    skills: [
      { name: "Python", level: "Expert", icon: "Code" },
      { name: "Java", level: "Proficient", icon: "Coffee" },
      { name: "JavaScript (ES6+)", level: "Expert", icon: "FileCode" },
      { name: "TypeScript", level: "Proficient", icon: "FileJson" },
      { name: "C Language", level: "Intermediate", icon: "Binary" },
      { name: "SQL", level: "Proficient", icon: "Database" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "Layout" }
    ]
  },
  {
    category: "Web & Full-Stack Technologies",
    description: "Modern frameworks and server-side runtimes",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Next.js 14/16", level: "Proficient", icon: "Zap" },
      { name: "Node.js & Express", level: "Advanced", icon: "Server" },
      { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
      { name: "FastAPI", level: "Intermediate", icon: "FastForward" },
      { name: "RESTful API Design", level: "Advanced", icon: "Network" }
    ]
  },
  {
    category: "Databases, Cloud & DevOps",
    description: "Data persistence, vector storage, and modern deployment",
    skills: [
      { name: "MySQL", level: "Proficient", icon: "Database" },
      { name: "SQLite", level: "Advanced", icon: "HardDrive" },
      { name: "Vector DB (Chroma/Pinecone)", level: "Advanced", icon: "Box" },
      { name: "Firebase", level: "Intermediate", icon: "Flame" },
      { name: "Vercel & Render", level: "Advanced", icon: "Cloud" },
      { name: "Streamlit Cloud", level: "Advanced", icon: "Radio" }
    ]
  },
  {
    category: "Engineering Tools & Workflows",
    description: "Developer tooling, safety frameworks, and version control",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "VS Code", level: "Expert", icon: "Code2" },
      { name: "Postman", level: "Proficient", icon: "Send" },
      { name: "HAZOP Risk Analysis", level: "Certified", icon: "ShieldAlert" },
      { name: "Data Storytelling", level: "Advanced", icon: "TrendingUp" }
    ]
  }
];

export const FREELANCE_SERVICES = [
  {
    id: "genai-rag",
    title: "Custom Generative AI & RAG Systems",
    tagline: "Turn proprietary documents into intelligent, hallucinaton-resistant AI agents",
    description: "Architect and implement enterprise-grade Retrieval-Augmented Generation pipelines using LangChain, vector databases, and fine-tuned prompt strategies tailored to your domain.",
    deliverables: [
      "Vector database setup & chunking optimization",
      "Multi-turn conversational interface with citations",
      "Low-latency API deployment with safety filters",
      "Custom domain data ingestion pipelines"
    ],
    icon: "Brain",
    accent: "from-cyan-500 to-blue-600"
  },
  {
    id: "fullstack-apps",
    title: "Modern Full-Stack Web Applications",
    tagline: "Blazing-fast, responsive web platforms built with React, Next.js & Node",
    description: "From conceptualization to production release, I build performant web applications with elegant design systems, robust REST APIs, and seamless database synchronization.",
    deliverables: [
      "Modern React / Next.js frontend with Tailwind CSS",
      "Secure backend APIs with JWT / auth workflows",
      "Database schema design and query optimization",
      "Zero-downtime deployment on Vercel / Render"
    ],
    icon: "Layout",
    accent: "from-blue-500 to-indigo-600"
  },
  {
    id: "satellite-spatial-ai",
    title: "Geospatial & Computer Vision Solutions",
    tagline: "Extract actionable intelligence from satellite, drone, and visual media",
    description: "Harness deep learning for image restoration (cloud removal), feature detection, NDVI crop health tracking, and OpenCV-powered real-time object/emotion classification.",
    deliverables: [
      "Physics-guided image restoration models (cGAN/Autoencoders)",
      "Spectral vegetation & land-cover analysis",
      "Real-time webcam/video analytics pipelines",
      "Interactive Streamlit / web dashboards"
    ],
    icon: "Globe",
    accent: "from-violet-500 to-purple-600"
  },
  {
    id: "ai-advisory-chatbots",
    title: "Multilingual AI Chatbots & Voice Bridges",
    tagline: "Break language barriers with voice-enabled regional AI assistants",
    description: "Build accessible conversational agents that listen, understand regional languages, query intelligent knowledge bases, and respond with natural synthesized voice.",
    deliverables: [
      "Web Speech API integration (Speech-to-Text & TTS)",
      "Regional dialect prompt engineering & intent routing",
      "Automated queue, booking, or grievance workflows",
      "Mobile-friendly glassmorphic user interface"
    ],
    icon: "Mic",
    accent: "from-emerald-500 to-teal-600"
  }
];

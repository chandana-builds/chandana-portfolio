<div align="center">

# 🌐 Gurrapu Chandana — Personal Portfolio & AI Showcase

[![Live Demo](https://img.shields.io/badge/Live%20Demo-chandana--portfolio--q6rl.onrender.com-06B6D4?style=for-the-badge&logo=render&logoColor=white)](https://chandana-portfolio-q6rl.onrender.com/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<p align="center">
  <strong>A cinematic, interactive, and high-performance personal portfolio engineered for an AI/ML Engineer & Full-Stack Developer.</strong>
</p>

[Explore Live Deployment 🚀](https://chandana-portfolio-q6rl.onrender.com/) • [View Verified Resume 📄](https://chandana-portfolio-q6rl.onrender.com/#about) • [GitHub Profile 💻](https://github.com/chandana-builds) • [LinkedIn 💼](https://linkedin.com/in/chandana-gurrapu)

---

</div>

## 📌 Executive Summary

This portfolio represents the engineering portfolio and verified technical background of **Gurrapu Chandana**, a B.Tech Computer Science & Engineering (Artificial Intelligence & Machine Learning) student at **Balaji Institute of Technology and Science** (CGPA: **8.7 / 10.0**), an **AI Project Intern at Infosys Springboard** (Virtual Internship 7.0), and lead researcher on **GeoRestore-AI** (satellite remote sensing restoration).

The web application is designed with motion design principles, progressive scroll storytelling, glassmorphism, responsive 3D micro-interactions, and a custom Day/Night theme system.

---

## ✨ Key Architectural Features

### 🚄 1. Cinematic Scroll-Synchronized Journey Timeline
- **Concept:** As visitors scroll down the page, a futuristic transport capsule travels along a vertical track between career milestones.
- **Scroll Tracking:** Built with Framer Motion (`useScroll` and `useSpring`), ensuring fluid physics linked directly to user scrolling.
- **Progressive Illumination:** The timeline rail illuminates as the vehicle passes each milestone:
  - `Station 01`: **Academic Foundation** — Balaji Institute of Tech & Science (8.7 CGPA)
  - `Station 02`: **Production Projects** — GeoRestore AI & KisanSetu e-Mandi
  - `Station 03`: **Industry Experience** — Infosys Springboard Virtual 7.0 & Science Cadet Corps
  - `Station 04`: **Hackathons** — Smart India Hackathon (SIH) 2024 Finalist
  - `Station 05`: **Certifications** — SAP Code Unnati, Tata Group & Infosys AI
  - `Station 06`: **Current Focus** — Multilingual RAG & Deep Learning Systems
  - `Station 07`: **Destination** — Contact & Client Collaboration Terminal

### 🌓 2. Persistent Day/Night Theme System
- Complete theme switching between high-contrast dark mode and crisp modern light mode without jarring color inversions.
- Backed by persistent `localStorage` and `prefers-color-scheme` media query detection in `ThemeContext`.
- Spring-animated toggle pill with rotating Sun/Moon iconography.
- Semantic CSS color tokens (`--bg-page`, `--bg-card`, `--text-primary`, `--border-main`, `--panel-shadow`) for smooth transitions.

### 🧠 3. Comprehensive Technical Stack with 3D Interaction
- **Progressive Discovery:** Skill cards reveal row-by-row on scroll (`whileInView` with staggered delays).
- **Interactive 3D Tilt:** Real-time mouse position tracking tilts each card in 3D perspective with a dynamic cursor spotlight reflection.
- **Strict Hierarchy:** Grouped into verified engineering competencies (AI & ML, Programming Languages, Web & Full Stack, Databases, Developer Tools, Geospatial / Remote Sensing) without arbitrary percentages.
- **Animated Layout Filtering:** Powered by `AnimatePresence` and layout animations for instant category filtering and technology search.

### 🛰️ 4. Flagship Case Study: GeoRestore AI
- **Interactive 6-Stage Product Story:** Problem → Research → Solution → Architecture → Implementation → Empirical Results.
- Quantitative metrics: **32.4 dB PSNR**, **0.91 SSIM**, and **98.7% NDVI** agricultural crop reflectance preservation.
- Direct link to the live Streamlit interactive cloud restoration dashboard.

### 💼 5. Verified Experience & Academic Track Record
- **Infosys Springboard Virtual Internship 7.0:** Multilingual Agricultural Advisory RAG Pipeline.
- **Science Cadet Corps (SCC-A):** 70-hour interdisciplinary training in sustainability, process safety, and HAZOP risk analysis (IMD & NEERI field studies).
- **Infosys Empow(h)er AI Capstone:** Conversational AI Learning Buddy with personalized multi-turn workflows.
- **Tata Group (Forage):** Data visualization simulation for risk and business metrics.
- **Balaji Institute of Technology & Science:** B.Tech CSE (AI & ML) with an 8.7/10 CGPA through 5 semesters.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Build & Tooling** | [Vite 8](https://vitejs.dev/) |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com/), Semantic CSS Tokens, Glassmorphism |
| **Motion & Animation** | [Framer Motion](https://www.framer.com/motion/), Canvas Confetti |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/), Custom SVGs |
| **Deployment Platform** | [Render](https://render.com/) (Automated via `render.yaml`) |

---

## 📂 Project Structure

```text
chandana-portfolio/
├── public/
│   ├── Chandana_Gurrapu_Resume.pdf  # Verified Resume PDF
│   ├── certificates/                # Downloadable credentials
│   ├── projects/                    # High-res project previews
│   └── chandana_portrait.jpg        # Professional photography
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx         # Identity & engineering philosophy
│   │   ├── CertificationsSection.tsx# Verified credentials + in-modal preview
│   │   ├── ContactSection.tsx       # Journey destination + inquiry form
│   │   ├── CustomCursor.tsx         # Responsive interactive pointer
│   │   ├── ExperienceTimeline.tsx   # Verified work history & education
│   │   ├── FeaturedProjectCaseStudy.tsx # 6-stage GeoRestore case study
│   │   ├── Footer.tsx               # Copyright & quick navigation
│   │   ├── FreelanceSection.tsx     # Specialized engineering services
│   │   ├── GitHubSection.tsx        # Repositories & language distribution
│   │   ├── Hero.tsx                 # Dynamic headline, typewriter & 3D HUD
│   │   ├── InteractiveBackground.tsx# Constellation canvas particle mesh
│   │   ├── JourneyTimeline.tsx      # Scroll-linked futuristic pod & rail
│   │   ├── LoadingScreen.tsx        # System bootloader sequence
│   │   ├── Navbar.tsx               # Navigation + ThemeToggle
│   │   ├── ProjectsSection.tsx      # Filterable production showcase
│   │   ├── ResumeModal.tsx          # In-browser full PDF viewer
│   │   ├── SkillsSection.tsx        # 3D interactive skill cards
│   │   └── ThemeToggle.tsx          # Spring-based day/night switcher
│   ├── context/
│   │   └── ThemeContext.tsx         # Persistent theme provider
│   ├── data/
│   │   └── portfolioData.ts         # Verified profile data & projects
│   ├── App.tsx                      # Root application layout
│   ├── index.css                    # Semantic design tokens & utilities
│   └── main.tsx                     # Entry point
├── render.yaml                      # Infrastructure-as-code deployment config
└── vite.config.ts                   # Vite bundler configuration
```

---

## ⚡ Local Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chandana-builds/chandana-portfolio.git
   cd chandana-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized static output in `./dist`.

---

## 🌐 Live Production Deployment

The portfolio is continuously deployed on **Render**:
🔗 **[https://chandana-portfolio-q6rl.onrender.com](https://chandana-portfolio-q6rl.onrender.com/)**

Configuration is automated via [`render.yaml`](./render.yaml):
- **Service Type:** Static Site / Web Service
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `./dist`
- **Routing:** Single Page Application (SPA) rewrite to `/index.html`

---

## 📬 Contact & Inquiries

- **Email:** [chandanagurrapu6@gmail.com](mailto:chandanagurrapu6@gmail.com)
- **LinkedIn:** [linkedin.com/in/chandana-gurrapu](https://linkedin.com/in/chandana-gurrapu)
- **GitHub:** [github.com/chandana-builds](https://github.com/chandana-builds)
- **Location:** Warangal, Telangana, India

---

<div align="center">
  <sub>Designed & Engineered with mathematical rigor, curiosity & AI by <strong>Gurrapu Chandana</strong>.</sub>
</div>

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ThemeProvider } from './context/ThemeContext';
import { InteractiveBackground } from './components/InteractiveBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjectCaseStudy } from './components/FeaturedProjectCaseStudy';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { GitHubSection } from './components/GitHubSection';
import { FreelanceSection } from './components/FreelanceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { LoadingScreen } from './components/LoadingScreen';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedFreelanceService, setSelectedFreelanceService] = useState<string>('Generative AI & RAG Pipeline');

  const handleDownloadResume = () => {
    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    // Programmatically trigger download of verified PDF
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePath;
    link.download = 'Gurrapu_Chandana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedFreelanceService(serviceTitle);
  };

  return (
    <ThemeProvider>
      <div 
        className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-400"
        style={{
          backgroundColor: 'var(--bg-page)',
          color: 'var(--text-primary)'
        }}
      >
        {/* Loading Sequence */}
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}

        {/* Interactive Background Particles & Mesh */}
        <InteractiveBackground />

        {/* Mouse Responsive Custom Cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
            onDownloadResume={handleDownloadResume}
          />

          <AboutSection />

          <JourneyTimeline />

          <SkillsSection />

          <FeaturedProjectCaseStudy />

          <ProjectsSection />

          <ExperienceTimeline />

          <CertificationsSection />

          <GitHubSection />

          <FreelanceSection onSelectService={handleSelectService} />

          <ContactSection selectedService={selectedFreelanceService} />
        </main>

        {/* Footer */}
        <Footer
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        {/* In-Browser Resume PDF Viewer Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          onDownload={handleDownloadResume}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

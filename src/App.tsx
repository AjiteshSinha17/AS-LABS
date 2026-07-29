import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DossierAbout } from './components/DossierAbout';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Leadership } from './components/Leadership';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { GitHubHub } from './components/GitHubHub';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Timeline } from './components/Timeline';
import { FutureGoals } from './components/FutureGoals';
import { TransmissionContact } from './components/TransmissionContact';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'dossier', 'experience', 'research', 'skills', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#010304] text-[#e5e5e5] font-body-text antialiased selection:bg-emerald-500 selection:text-black relative">
      
      {/* Fixed Atmospheric Artwork & Dark Glass Background Layer matching reference images */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base Obsidian Background */}
        <div className="absolute inset-0 bg-[#010304]"></div>

        {/* Top Background Artwork Layer (Dark Mossy Gothic Mansion Vibe) */}
        <div 
          className="absolute top-0 left-0 w-full h-[100vh] opacity-50 mix-blend-screen bg-cover bg-center filter brightness-90 contrast-150 saturate-150 hue-rotate-[25deg]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop')`,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
          }}
        ></div>

        {/* Lower Background Artwork Layer (Dark Tempest Sea & Silhouette Vibe) */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[110vh] opacity-45 mix-blend-lighten bg-cover bg-center filter brightness-85 contrast-160 saturate-130"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&auto=format&fit=crop')`,
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
          }}
        ></div>

        {/* Cinematic Deep Emerald & Dark Teal Fog Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-emerald-500/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] -left-[200px] w-[800px] h-[800px] bg-teal-500/15 rounded-full blur-[180px]"></div>
        <div className="absolute top-[75%] -right-[200px] w-[900px] h-[900px] bg-emerald-600/20 rounded-full blur-[200px]"></div>

        {/* Dark Edges Vignette & Color Grade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.95)] pointer-events-none"></div>
      </div>

      {/* Header Bar */}
      <Header
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Sections with Glass Containers */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <FeaturedProjects />
        <DossierAbout />
        <Education />
        <Experience />
        <Leadership />
        <Research />
        <Skills />
        <GitHubHub />
        <Services />
        <Achievements />
        <Timeline />
        <FutureGoals />
        <TransmissionContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Recruiter Resume Summary Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;

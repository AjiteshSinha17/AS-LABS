import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileText, Terminal } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface HeaderProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal, onOpenResume, activeSection }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = soundFx.toggleSound();
    setSoundEnabled(newState);
    soundFx.playClick();
  };

  const navLinks = [
    { id: 'projects', label: 'Projects', num: '01' },
    { id: 'dossier', label: 'Profile', num: '02' },
    { id: 'experience', label: 'Experience', num: '03' },
    { id: 'research', label: 'Research', num: '04' },
    { id: 'skills', label: 'Skills', num: '05' },
    { id: 'services', label: 'Services', num: '06' },
    { id: 'contact', label: 'Contact', num: '07' },
  ];

  const scrollToSection = (id: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#03090b]/85 backdrop-blur-2xl border-b border-emerald-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.7)] py-2.5'
          : 'bg-[#03090b]/60 backdrop-blur-xl border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity with User Photo */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.5)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all duration-300">
                <img
                  src="/profile.jpg"
                  alt="Ajitesh Sinha"
                  className="w-full h-full rounded-full object-cover object-top border border-black/80"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#03090b] shadow-[0_0_8px_rgba(16,185,129,1)] animate-pulse" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight uppercase leading-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                <span>Ajitesh Sinha</span>
              </h1>
              <p className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase mt-0.5 opacity-90">
                Flutter Developer & AI Engineer
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-mono text-[11px] uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-emerald-400' : 'text-emerald-500/60'}`}>{link.num}.</span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions & Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Audio' : 'Enable Audio'}
            className="p-2 text-emerald-400 hover:text-white bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 rounded-lg transition-all"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-40" />}
          </button>

          {/* Coordinates Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>28.6139°N</span>
          </div>

          {/* Resume Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenResume();
            }}
            className="px-3.5 py-1.5 bg-white/5 border border-white/15 hover:border-emerald-500/60 text-white hover:text-emerald-400 font-mono text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>RESUME</span>
          </button>

          {/* Terminal Button */}
          <button
            onClick={() => {
              soundFx.playTerminalBeep();
              onOpenTerminal();
            }}
            className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.35)]"
          >
            <Terminal className="w-4 h-4" />
            <span>TERMINAL</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              soundFx.playTerminalBeep();
              onOpenTerminal();
            }}
            className="p-2 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold rounded-lg"
            title="Open CLI Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 border border-white/10 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#03090b]/95 backdrop-blur-2xl border-b border-emerald-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left font-mono text-xs py-2.5 px-3.5 rounded-lg border uppercase flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
                      : 'bg-white/5 border-white/10 text-white/80 hover:border-emerald-500/40'
                  }`}
                >
                  <span className="text-emerald-500">{link.num}.</span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-4 py-2 bg-white/5 border border-white/20 text-white text-xs font-mono uppercase rounded-lg flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>VIEW RESUME</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="px-4 py-2 bg-emerald-500 text-black text-xs font-mono font-bold uppercase rounded-lg flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              <Terminal className="w-4 h-4" />
              <span>CLI TERMINAL</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

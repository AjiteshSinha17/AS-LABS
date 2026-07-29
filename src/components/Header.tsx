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
    { id: 'github', label: 'Telemetry', num: '06' },
    { id: 'services', label: 'Services', num: '07' },
    { id: 'contact', label: 'Contact', num: '08' },
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
          ? 'bg-[#03090b]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3'
          : 'bg-[#03090b]/50 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-black text-base italic shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform">
              AS
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight uppercase leading-none text-white group-hover:text-emerald-400 transition-colors">
                Ajitesh Sinha
              </h1>
              <p className="text-[10px] text-emerald-500 font-mono tracking-[0.2em] uppercase mt-0.5">
                Flutter Developer & AI Engineer
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-white/50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-200 hover:text-white flex items-center gap-1.5 py-1 ${
                  isActive ? 'text-white font-bold border-b-2 border-emerald-500' : 'hover:border-b border-emerald-500/40'
                }`}
              >
                <span className="text-emerald-500/70 text-[10px]">{link.num}.</span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions & Terminal Button */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Interface Audio' : 'Enable Interface Audio'}
            className="p-2 text-emerald-400 hover:bg-emerald-500/10 border border-white/10 rounded transition-all"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-40" />}
          </button>

          {/* Signal Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>28.6139°N</span>
          </div>

          {/* Resume Modal Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenResume();
            }}
            className="px-3 py-1.5 bg-white/5 border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-400 transition-all flex items-center gap-1.5 rounded-sm"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span>RESUME</span>
          </button>

          {/* Terminal Button */}
          <button
            onClick={() => {
              soundFx.playTerminalBeep();
              onOpenTerminal();
            }}
            className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-all active:scale-95 flex items-center gap-2 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]"
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
            className="p-2 bg-emerald-500/10 border border-emerald-500 text-emerald-400 text-xs font-mono font-bold rounded"
            title="Open CLI Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 border border-white/10 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left font-mono text-xs py-2 px-3 bg-white/5 border border-white/10 text-white hover:border-emerald-500 uppercase flex items-center gap-2"
              >
                <span className="text-emerald-500">{link.num}.</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-4 py-2 bg-white/5 border border-white/20 text-white text-xs font-mono uppercase flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>VIEW RESUME</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="px-4 py-2 bg-emerald-500 text-black text-xs font-mono font-bold uppercase flex items-center gap-2"
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

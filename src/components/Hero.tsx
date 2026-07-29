import React from 'react';
import { Terminal, Shield, ArrowDown, MapPin, Award, BookOpen, Layers, Sparkles, ExternalLink, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const scrollToProjects = () => {
    soundFx.playClick();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-transparent">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission Identifier Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 uppercase tracking-widest shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Personnel Dossier // SYS_ID: AS-2027</span>
            </div>

            {/* Main Hero Headline */}
            <div>
              <p className="text-xs sm:text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                <span>SCALABLE MOBILE SOLUTIONS</span>
              </p>
              <h1 className="text-[40px] sm:text-[58px] md:text-[68px] lg:text-[76px] font-bold leading-[0.92] tracking-tighter uppercase text-white mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                FLUTTER <br/> DEVELOPER & <br/> <span className="text-emerald-500">MOBILE ARCHITECT.</span>
              </h1>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light max-w-2xl drop-shadow">
              {PERSONAL_INFO.hero.summary}
            </p>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded shadow-md">
                <div className="text-white/40 text-[10px] uppercase">GRADUATION</div>
                <div className="text-white font-bold mt-0.5">{PERSONAL_INFO.education.graduation}</div>
                <div className="text-emerald-500 text-[10px]">{PERSONAL_INFO.education.university}</div>
              </div>

              <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded shadow-md">
                <div className="text-white/40 text-[10px] uppercase">CURRENT STATUS</div>
                <div className="text-emerald-500 font-bold mt-0.5">● OPERATIONAL</div>
                <div className="text-white/60 text-[10px]">Open to Internships & Roles</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded shadow-md">
                <div className="text-white/40 text-[10px] uppercase">COORDINATES</div>
                <div className="text-white font-bold mt-0.5">GREATER NOIDA</div>
                <div className="text-emerald-500 text-[10px]">{PERSONAL_INFO.contact.coordinates}</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3.5 bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-widest rounded hover:bg-emerald-400 transition-all duration-200 flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95 cursor-pointer"
              >
                <span>ENTER MAINFRAME</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFx.playTerminalBeep();
                  onOpenTerminal();
                }}
                className="px-5 py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white hover:border-emerald-500 hover:text-emerald-400 font-mono font-bold text-xs uppercase tracking-widest rounded transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer shadow-lg"
              >
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span>TERMINAL</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                className="px-4 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:border-emerald-500 font-mono text-xs uppercase tracking-wider rounded transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4 text-emerald-500" />
                <span>RESUME</span>
              </button>
            </div>
          </div>

          {/* Tactical Profile Visual Card (Col 8 to 12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative glass-card glass-card-hover rounded-xl p-6 shadow-2xl space-y-6 transition-all border border-emerald-500/30">
              
              {/* Profile Image & Badge Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-white/10">
                <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-2 border-emerald-500 bg-black/60 flex-shrink-0 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <img
                      src="https://github.com/AjiteshSinha17.png"
                      alt="Ajitesh Sinha"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black shadow-[0_0_8px_rgba(16,185,129,1)] animate-pulse"></div>
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider">
                    <Shield className="w-3 h-3 text-emerald-500" />
                    <span>VERIFIED PROFILE</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1">
                    AJITESH SINHA
                  </h2>
                  <p className="font-mono text-xs text-emerald-400 font-semibold">
                    FLUTTER DEVELOPER & ARCHITECT
                  </p>
                  <p className="font-mono text-[11px] text-white/60">
                    B.Tech CSE (2023 - 2027) • Greater Noida
                  </p>
                </div>
              </div>

              {/* Quick Bio Info */}
              <div className="space-y-2 text-xs font-mono text-white/80 bg-black/40 backdrop-blur-md p-3.5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between text-[10px] text-emerald-500 font-bold uppercase tracking-widest border-b border-white/10 pb-1 mb-2">
                  <span>SPECIALIZATION MATRIX</span>
                  <span className="text-white/40">SYS_VER 4.0</span>
                </div>
                <p className="text-white/80 leading-relaxed font-sans text-xs">
                  Mobile architect focused on building high-throughput Flutter applications, reactive state management (Riverpod/Bloc), custom native integrations, and resilient REST/Go backends.
                </p>
              </div>

              {/* Verified Badges & Stats */}
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-500 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="font-bold text-[10px] uppercase tracking-wider">EXPERIENCE</span>
                  </div>
                  <div className="text-white font-bold text-sm">3 Internships</div>
                  <div className="text-white/40 text-[10px]">Flutter & Backends</div>
                </div>

                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-500 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-[10px] uppercase tracking-wider">RESEARCH</span>
                  </div>
                  <div className="text-white font-bold text-sm">ISCJ Journal</div>
                  <div className="text-white/40 text-[10px]">Peer-Reviewed</div>
                </div>

                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-500 mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="font-bold text-[10px] uppercase tracking-wider">LEADERSHIP</span>
                  </div>
                  <div className="text-white font-bold text-sm">Club President</div>
                  <div className="text-white/40 text-[10px]">Technical Lead</div>
                </div>

                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-500 mb-1">
                    <Layers className="w-4 h-4" />
                    <span className="font-bold text-[10px] uppercase tracking-wider">PROJECTS</span>
                  </div>
                  <div className="text-white font-bold text-sm">5 Deployed</div>
                  <div className="text-white/40 text-[10px]">Mobile & Web</div>
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="pt-1 flex items-center justify-between gap-2 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 rounded text-center text-white hover:text-emerald-400 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 rounded text-center text-white hover:text-emerald-400 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  <span>GITHUB</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

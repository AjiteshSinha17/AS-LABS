import React from 'react';
import { ArrowUp, Terminal, Shield, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO, SEO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent border-t border-white/10 pt-16 pb-12 text-white/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & Short Bio (Col 1 to 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 animate-pulse rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              <span className="text-xl font-bold uppercase tracking-tight text-white">
                AJITESH_SINHA <span className="text-emerald-500 text-xs font-mono font-normal">// PORTFOLIO_V.4</span>
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              {SEO_DATA.longBio}
            </p>
            <div className="font-mono text-xs text-emerald-500 font-bold">
              GREATER NOIDA COLLEGE // AKTU B.TECH CSE (2023 - 2027)
            </div>
          </div>

          {/* Quick Nav Links (Col 6 to 8) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-emerald-500 font-bold uppercase tracking-wider">MAINFRAME NAVIGATION</div>
            <ul className="space-y-1.5 text-white/70 font-light">
              <li><a href="#projects" className="hover:text-emerald-400">&gt; FEATURED_PROJECTS</a></li>
              <li><a href="#dossier" className="hover:text-emerald-400">&gt; PERSONNEL_DOSSIER</a></li>
              <li><a href="#experience" className="hover:text-emerald-400">&gt; FLUTTER_INTERNSHIPS</a></li>
              <li><a href="#research" className="hover:text-emerald-400">&gt; ISCJ_RESEARCH_PAPER</a></li>
              <li><a href="#skills" className="hover:text-emerald-400">&gt; TECHNICAL_SKILLS</a></li>
              <li><a href="#github" className="hover:text-emerald-400">&gt; GITHUB_HUB</a></li>
              <li><a href="#contact" className="hover:text-emerald-400">&gt; CONTACT_TRANSMISSION</a></li>
            </ul>
          </div>

          {/* SEO Metadata & Telemetry (Col 9 to 12) */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-emerald-500 font-bold uppercase tracking-wider">SYSTEM TELEMETRY</div>
            <div className="p-3 glass-card rounded space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-white/40">COORDINATES:</span>
                <span className="text-white font-bold">{PERSONAL_INFO.contact.coordinates}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">SYSTEM UPTIME:</span>
                <span className="text-emerald-500 font-bold">99.98% OPERATIONAL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">BUILD TARGET:</span>
                <span className="text-white">PRODUCTION_V4.0</span>
              </div>
            </div>

            {/* SEO Keywords Badges */}
            <div className="flex flex-wrap gap-1 pt-1">
              {SEO_DATA.keywords.slice(0, 6).map((kw, idx) => (
                <span key={idx} className="px-1.5 py-0.5 bg-white/5 backdrop-blur-md text-white/40 text-[9px] rounded border border-white/5">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Lower Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="text-white/40">
            © {new Date().getFullYear()} AJITESH SINHA. ALL RIGHTS RESERVED. ARCHITECTED WITH FLUTTER & FULL-STACK NODE/VITE.
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 text-white hover:text-emerald-400 rounded transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

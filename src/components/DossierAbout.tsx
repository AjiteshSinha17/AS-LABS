import React from 'react';
import { UserCheck, ShieldCheck, Cpu, Code2, Database, Smartphone, CheckCircle } from 'lucide-react';
import { ABOUT_ME, PERSONAL_INFO } from '../data/portfolioData';

export const DossierAbout: React.FC = () => {
  const competencies = [
    { label: "FLUTTER & DART MOBILE", level: 94, detail: "Cross-platform iOS/Android, Clean Architecture, Bloc/Riverpod" },
    { label: "BACKEND & REST APIS", level: 88, detail: "Node.js, Express, Go Fiber, Low-Latency Networking" },
    { label: "DATABASE SYSTEMS", level: 85, detail: "Firestore Real-time, PostgreSQL, SQLite, Hive" },
    { label: "AI & COMPUTER VISION", level: 79, detail: "Gemini API, OpenAI SDK, OpenCV Face Recognition" },
  ];

  return (
    <section id="dossier" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Section 02 // Profile Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            ABOUT <span className="text-emerald-500">AJITESH SINHA</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            Computer Science Engineering Student @ Greater Noida College (AKTU, 2027) | Flutter & Full-Stack Developer
          </p>
        </div>

        {/* Dossier Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Detailed Narrative (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 text-base text-white/80 leading-relaxed font-light">
            
            {/* Engineering Journey */}
            <div className="p-6 glass-card glass-card-hover rounded-lg space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-tight">
                <Code2 className="w-5 h-5 text-emerald-500" />
                <span>The Engineering Journey</span>
              </h3>
              <p>{ABOUT_ME.journey}</p>
            </div>

            {/* Why Flutter & Scalable Mobile */}
            <div className="p-6 glass-card glass-card-hover rounded-lg space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-tight">
                <Smartphone className="w-5 h-5 text-emerald-500" />
                <span>Why Flutter & Mobile Architecture</span>
              </h3>
              <p>{ABOUT_ME.whyFlutter}</p>
              <p>{ABOUT_ME.scalableMobile}</p>
            </div>

            {/* Backend & AI Passion */}
            <div className="p-6 glass-card glass-card-hover rounded-lg space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-tight">
                <Cpu className="w-5 h-5 text-emerald-500" />
                <span>Backend Engineering & AI Expansion</span>
              </h3>
              <p>{ABOUT_ME.backendAndAI}</p>
            </div>

            {/* Core Philosophies */}
            <div className="p-6 glass-card glass-card-hover rounded-lg space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-tight">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Core Engineering Principles</span>
              </h3>
              <ul className="space-y-2.5">
                {ABOUT_ME.corePhilosophy.map((philosophy, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{philosophy}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Competency Meters & Stats (Col 8 to 12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Competencies Widget */}
            <div className="p-6 glass-card glass-card-hover border-emerald-500/30 rounded-lg space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-md font-bold text-white uppercase tracking-wider">
                  SYSTEM_COMPETENCY_INDEX
                </h3>
                <span className="font-mono text-xs text-emerald-500">VER 4.0</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {competencies.map((comp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-white font-bold">
                      <span>{comp.label}</span>
                      <span className="text-emerald-500">{comp.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        style={{ width: `${comp.level}%` }}
                      ></div>
                    </div>
                    <div className="text-[10px] text-white/40">{comp.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="p-6 glass-card glass-card-hover rounded-lg space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-tight">
                ACADEMIC & PROFESSIONAL HIGHLIGHTS
              </h3>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded">
                  <div className="text-emerald-500 font-extrabold text-lg">3 INTERNSHIPS</div>
                  <div className="text-white/40 text-[10px] mt-0.5">GreenCreon, SOS42, Talking Crooks</div>
                </div>

                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded">
                  <div className="text-emerald-500 font-extrabold text-lg">ISCJ JOURNAL</div>
                  <div className="text-white/40 text-[10px] mt-0.5">ClgZone Research Paper</div>
                </div>

                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded">
                  <div className="text-emerald-500 font-extrabold text-lg">CLUB PRESIDENT</div>
                  <div className="text-white/40 text-[10px] mt-0.5">Technical Society Head</div>
                </div>

                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded">
                  <div className="text-emerald-500 font-extrabold text-lg">B.TECH CSE</div>
                  <div className="text-white/40 text-[10px] mt-0.5">AKTU Expected 2027</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

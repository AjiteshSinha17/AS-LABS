import React from 'react';
import { Briefcase, Building, CheckCircle2, Award, Code2, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Section 03 // Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            FLUTTER DEVELOPER <span className="text-emerald-500">INTERNSHIPS</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            3 software engineering internship engagements delivering production code, API integrations, and UI components.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card glass-card-hover rounded-lg p-6 md:p-8 relative space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-emerald-500/10 backdrop-blur-md text-emerald-400 font-mono text-xs uppercase font-bold rounded border border-emerald-500/20">
                      INTERNSHIP 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-white/40">{exp.period}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                    {exp.role} <span className="text-emerald-500">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-white/70 mt-1 font-light">
                    {exp.overview}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-emerald-500 bg-white/5 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded self-start lg:self-center">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs text-emerald-500 uppercase tracking-wider font-bold">
                  KEY RESPONSIBILITIES & TECHNICAL EXECUTION:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/80 font-light">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 bg-white/5 backdrop-blur-md p-3 rounded border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contributions & Skills Gained Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded space-y-2">
                  <span className="font-mono text-xs text-emerald-500 uppercase font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>MAJOR CONTRIBUTIONS</span>
                  </span>
                  <ul className="space-y-1 text-xs text-white/70">
                    {exp.contributions.map((c, cIdx) => (
                      <li key={cIdx}>• {c}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded space-y-2">
                  <span className="font-mono text-xs text-emerald-500 uppercase font-bold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>SKILLS GAINED</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skillsGained.map((sg, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-white/10 text-white text-[10px] font-mono rounded">
                        {sg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-white/40 uppercase font-bold mr-2">TECH STACK:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

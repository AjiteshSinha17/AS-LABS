import React from 'react';
import { Clock, GraduationCap, Briefcase, Award, Shield, Milestone } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap className="w-4 h-4 text-emerald-500" />;
      case 'career': return <Briefcase className="w-4 h-4 text-emerald-500" />;
      case 'research': return <Award className="w-4 h-4 text-emerald-500" />;
      case 'leadership': return <Shield className="w-4 h-4 text-emerald-500" />;
      default: return <Milestone className="w-4 h-4 text-emerald-500" />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Clock className="w-3.5 h-3.5" />
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            ENGINEERING <span className="text-emerald-500">TIMELINE</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            Chronological milestones from academic foundations to production internships and future aspirations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-emerald-500/30 ml-4 md:ml-8 space-y-8 pl-6 md:pl-10">
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#03090b] border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>

              {/* Card Container */}
              <div className="glass-card glass-card-hover rounded-lg p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                  <span className="flex items-center gap-2 text-xs font-mono text-emerald-500 font-bold">
                    {getTypeIcon(item.type)}
                    <span>{item.stage}</span>
                  </span>
                  <span className="px-2.5 py-0.5 bg-white/5 backdrop-blur-md text-white font-mono text-xs border border-white/10 rounded font-bold">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-white pt-1">
                  {item.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

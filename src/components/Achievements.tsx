import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Badges & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            HONORS & <span className="text-emerald-500">ACHIEVEMENTS</span>
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="glass-card glass-card-hover rounded-lg p-5 space-y-3 transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="px-2 py-0.5 bg-emerald-500/10 backdrop-blur-md text-emerald-400 font-mono text-[10px] font-bold uppercase rounded border border-emerald-500/30">
                  {ach.category}
                </span>
                <span className="font-mono text-[10px] text-white/40">{ach.badgeCode}</span>
              </div>

              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                {ach.title}
              </h3>

              <p className="text-xs text-white/70 leading-relaxed font-light">
                {ach.description}
              </p>

              <div className="pt-2 font-mono text-[10px] text-emerald-500 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>VERIFIED DATE: {ach.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

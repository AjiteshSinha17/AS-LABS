import React from 'react';
import { Shield, Users, Award, CheckCircle2, Calendar } from 'lucide-react';
import { LEADERSHIP } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-16 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Shield className="w-3.5 h-3.5" />
            <span>Community & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            LEADERSHIP <span className="text-emerald-500">& ORGANIZATIONAL ROLES</span>
          </h2>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP.map((lead) => (
            <div
              key={lead.id}
              className="glass-card glass-card-hover rounded-lg p-6 space-y-5"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 bg-emerald-500/10 backdrop-blur-md text-emerald-400 font-mono text-xs uppercase font-bold rounded border border-emerald-500/20">
                    LEADERSHIP
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mt-1">
                    {lead.title}
                  </h3>
                  <p className="font-mono text-xs text-emerald-500 mt-0.5">
                    {lead.organization}
                  </p>
                </div>
                <span className="text-xs font-mono text-white/60 bg-white/5 backdrop-blur-md px-2.5 py-1 border border-white/10 rounded flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-500" />
                  <span>{lead.period}</span>
                </span>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold">RESPONSIBILITIES:</h4>
                <ul className="space-y-2 text-xs text-white/80 font-light">
                  {lead.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded space-y-1">
                <span className="font-mono text-[10px] text-emerald-500 uppercase font-bold flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>KEY OUTCOMES</span>
                </span>
                <ul className="space-y-1 text-xs text-white">
                  {lead.highlights.map((h, idx) => (
                    <li key={idx}>• {h}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

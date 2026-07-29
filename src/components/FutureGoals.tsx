import React from 'react';
import { Target, Compass, BookOpen, CheckCircle } from 'lucide-react';
import { FUTURE_GOALS } from '../data/portfolioData';

export const FutureGoals: React.FC = () => {
  return (
    <section id="goals" className="py-16 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Target className="w-3.5 h-3.5" />
            <span>Future Horizon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            FUTURE GOALS & <span className="text-emerald-500">ASPIRATIONS</span>
          </h2>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Short-Term Goals */}
          <div className="glass-card glass-card-hover rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Target className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                SHORT-TERM OBJECTIVES
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              {FUTURE_GOALS.shortTerm.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Long-Term Vision */}
          <div className="glass-card glass-card-hover rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Compass className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                LONG-TERM VISION
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              {FUTURE_GOALS.longTerm.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning & Skill Aspirations */}
          <div className="glass-card glass-card-hover rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                LEARNING ROADMAP
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              {FUTURE_GOALS.learningGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

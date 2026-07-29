import React from 'react';
import { BookOpen, Award, FileText, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { RESEARCH_DATA } from '../data/portfolioData';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research & Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            PUBLISHED <span className="text-emerald-500">RESEARCH PAPER</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            Peer-reviewed academic research published in the International Study of Computer Science Journals (ISCJ).
          </p>
        </div>

        {/* Research Paper Card Case Study */}
        <div className="glass-card glass-card-hover rounded-lg p-6 md:p-8 space-y-6 relative overflow-hidden border-emerald-500/40">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* Title & Publication Badge */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/40 font-mono text-xs uppercase font-bold rounded flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>PEER-REVIEWED PUBLICATION</span>
                </span>
                <span className="text-xs font-mono text-emerald-500 font-bold">
                  JOURNAL: {RESEARCH_DATA.publication}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                {RESEARCH_DATA.title}
              </h3>
              <p className="font-mono text-xs text-white/50">
                AUTHOR: Ajitesh Sinha | COMPUTER SCIENCE ENGINEERING RESEARCH
              </p>
            </div>

            <a
              href="https://github.com/AjiteshSinha17/clg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500 text-black font-mono text-xs font-bold uppercase rounded hover:bg-emerald-400 transition-all flex items-center gap-2 self-start lg:self-center shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Research Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/80 font-light">
            
            <div className="p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg space-y-2">
              <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>RESEARCH OBJECTIVE</span>
              </h4>
              <p>{RESEARCH_DATA.researchObjective}</p>
            </div>

            <div className="p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg space-y-2">
              <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>PROBLEM STATEMENT</span>
              </h4>
              <p>{RESEARCH_DATA.problemStatement}</p>
            </div>

            <div className="p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg space-y-2">
              <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>METHODOLOGY & ARCHITECTURE</span>
              </h4>
              <p>{RESEARCH_DATA.methodology}</p>
            </div>

            <div className="p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg space-y-2">
              <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>RESULTS & EMPIRICAL EVALUATION</span>
              </h4>
              <p>{RESEARCH_DATA.results}</p>
            </div>

          </div>

          {/* Learning Outcomes */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold">KEY RESEARCH OUTCOMES & TECHNICAL GAINS:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {RESEARCH_DATA.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded text-white flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Used */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-xs font-mono text-white/40 uppercase font-bold mr-2">STACK USED IN RESEARCH:</span>
            {RESEARCH_DATA.technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Layers, ExternalLink, Github, Cpu, Bot, Zap, ShieldCheck, CheckCircle2, X, ArrowRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { soundFx } from '../utils/audio';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'FLUTTER', 'AI', 'BACKEND', 'E-COMMERCE'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'ALL') return true;
    if (filter === 'FLUTTER') return proj.tech.includes('Flutter');
    if (filter === 'AI') return proj.tech.includes('Gemini API') || proj.tech.includes('OpenCV') || proj.tech.includes('OpenAI SDK');
    if (filter === 'BACKEND') return proj.tech.includes('Go Fiber') || proj.tech.includes('Node.js') || proj.tech.includes('REST APIs');
    if (filter === 'E-COMMERCE') return proj.title.includes('Shopping');
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#00dbe9]" />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#00dbe9]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#00dbe9]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#00dbe9]" />;
      default: return <Layers className="w-5 h-5 text-[#00dbe9]" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Layers className="w-3.5 h-3.5" />
            <span>Section 01 // Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            ENGINEERED <span className="text-emerald-500">SYSTEMS & APPS</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            5 production-ready mobile and full-stack software applications built with Flutter, Firebase, Go Fiber, and AI models.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setFilter(cat);
              }}
              className={`px-4 py-2 rounded uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filter === cat
                  ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-white/5 backdrop-blur-md text-white/70 border border-white/10 hover:border-emerald-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card glass-card-hover rounded-lg p-6 space-y-5 flex flex-col justify-between relative group"
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    {getIcon(proj.iconName)}
                    <span className="font-mono text-xs font-bold text-emerald-500">{proj.modNumber}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-500/10 backdrop-blur-md text-emerald-400 font-mono text-[10px] uppercase font-bold rounded border border-emerald-500/30">
                    {proj.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-xs text-emerald-500 font-medium mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-xs text-white/70 line-clamp-3 leading-relaxed font-light">
                  {proj.description}
                </p>
              </div>

              {/* Tech Pills */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-white/5 backdrop-blur-md text-white/70 text-[10px] font-mono border border-white/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics & Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="font-mono text-[10px]">
                    <span className="text-white/40 uppercase">{proj.metricsLabel}: </span>
                    <span className="text-emerald-500 font-bold">{proj.metricsValue}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 text-white/70 hover:text-emerald-400 rounded transition-all"
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedProject(proj);
                      }}
                      className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-mono text-xs font-bold uppercase rounded transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>CASE STUDY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="glass-modal rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative">
            
            {/* Close Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                setSelectedProject(null);
              }}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-emerald-400 bg-white/5 border border-white/10 rounded transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-white/10 pb-4 space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold rounded">
                  {selectedProject.modNumber}
                </span>
                <span className="font-mono text-xs text-emerald-500">{selectedProject.status}</span>
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
                {selectedProject.title}
              </h2>
              <p className="font-mono text-sm text-emerald-500">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Project Overview */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs text-emerald-500 uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>SYSTEM OVERVIEW</span>
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {selectedProject.overview}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded space-y-1.5">
                <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold">PROBLEM STATEMENT</h4>
                <p className="text-xs text-white/70">{selectedProject.problemStatement}</p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded space-y-1.5">
                <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold">ENGINEERED SOLUTION</h4>
                <p className="text-xs text-white/70">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs text-emerald-500 uppercase font-bold">CORE FEATURES & CAPABILITIES</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded space-y-1">
                <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold">ARCHITECTURE</h4>
                <p className="text-xs text-white/70">{selectedProject.architecture}</p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded space-y-1">
                <h4 className="font-mono text-xs text-emerald-500 uppercase font-bold">KEY LEARNINGS</h4>
                <p className="text-xs text-white/70">{selectedProject.keyLearnings}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-white/5 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/30">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-500 text-black font-mono text-xs font-bold uppercase rounded hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <Github className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

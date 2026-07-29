import React, { useState } from 'react';
import { Cpu, Search, Filter, Sparkles, Code, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const isCategoryMatch = selectedCategory === 'ALL' || selectedCategory === cat.category;
    if (!isCategoryMatch) return null;

    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Cpu className="w-3.5 h-3.5" />
            <span>Section 04 // Technical Skills Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            ENGINEERING <span className="text-emerald-500">CAPABILITIES</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            Comprehensive breakdown of programming languages, frameworks, backend architecture, and AI tooling.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-emerald-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills (e.g., Flutter, Go, Gemini, Firebase)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 focus:border-emerald-500 rounded text-xs font-mono text-white placeholder-white/40 outline-none transition-all"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded whitespace-nowrap uppercase transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-500 text-black font-bold shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                      : 'bg-white/5 backdrop-blur-md text-white/70 border border-white/10 hover:border-emerald-500/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catItem: any, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-lg p-5 space-y-4"
            >
              <h3 className="text-md font-bold text-white uppercase tracking-tight border-b border-white/10 pb-2 flex items-center justify-between">
                <span>{catItem.category}</span>
                <span className="text-xs font-mono text-emerald-500">{catItem.skills.length} SKILLS</span>
              </h3>

              <div className="space-y-3 font-mono text-xs">
                {catItem.skills.map((s: any, sIdx: number) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{s.name}</span>
                      </span>
                      {s.tag && (
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-[10px] rounded border border-emerald-500/30">
                          {s.tag}
                        </span>
                      )}
                    </div>

                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-700 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                        style={{ width: `${s.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Banner */}
        <div className="mt-10 p-6 glass-card glass-card-hover border-emerald-500/40 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 backdrop-blur-md rounded border border-emerald-500/40 text-emerald-500">
              <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <div className="text-emerald-500 font-bold uppercase">CURRENT LEARNING & ADVANCEMENT TRACK</div>
              <div className="text-white/70">Actively exploring Advanced Go Backend Patterns, Microservices, and Edge ML in Flutter.</div>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-white">Go Fiber</span>
            <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-white">TensorFlow Lite</span>
            <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-white">Docker</span>
          </div>
        </div>

      </div>
    </section>
  );
};

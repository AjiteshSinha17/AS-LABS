import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const coursework = [
    "Data Structures & Algorithms (C++)",
    "Object-Oriented Programming (Java / C++)",
    "Database Management Systems (SQL & Relational)",
    "Operating Systems & System Architecture",
    "Computer Networks & Protocols",
    "Software Engineering & Agile Methodologies"
  ];

  return (
    <section id="education" className="py-16 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            EDUCATION & <span className="text-emerald-500">FOUNDATIONS</span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="glass-card glass-card-hover rounded-lg p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-emerald-500/10 backdrop-blur-md text-emerald-400 font-mono text-xs uppercase font-bold rounded mb-2 border border-emerald-500/20">
                DEGREE PROGRAM
              </span>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                {PERSONAL_INFO.education.degree} in {PERSONAL_INFO.education.branch}
              </h3>
              <p className="font-mono text-base text-emerald-500 font-medium mt-1">
                {PERSONAL_INFO.education.college}
              </p>
              <p className="font-mono text-xs text-white/50">
                Affiliated with {PERSONAL_INFO.education.university}
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2 font-mono text-xs text-white/70">
              <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded text-emerald-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>2023 — EXPECTED MAY 2027</span>
              </span>
              <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PERSONAL_INFO.education.location}</span>
              </span>
            </div>
          </div>

          {/* Key Academic Coursework */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-emerald-500 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>CORE COMPUTER SCIENCE COURSEWORK</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
              {coursework.map((course, idx) => (
                <div key={idx} className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

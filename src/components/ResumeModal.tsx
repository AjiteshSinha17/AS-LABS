import React from 'react';
import { FileText, Download, Printer, X, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="glass-modal border-2 border-emerald-500 rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-10 space-y-8 shadow-[0_0_50px_rgba(16,185,129,0.3)] relative">
        
        {/* Controls Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 print:hidden">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs font-bold">
            <FileText className="w-4 h-4" />
            <span>RECRUITER_RESUME_SUMMARY // AJITESH_SINHA</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-500 text-black font-mono text-xs font-bold uppercase rounded hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-2 text-white/60 hover:text-emerald-400 bg-white/5 border border-white/10 rounded cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Container */}
        <div id="resume-printable" className="space-y-6 text-white font-body-text">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm text-emerald-500 font-bold uppercase font-mono">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-white/70">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-500" />{PERSONAL_INFO.contact.email}</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-500" />{PERSONAL_INFO.contact.phone}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-500" />{PERSONAL_INFO.contact.location}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-emerald-500">
              <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub: @AjiteshSinha17</a>
              <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              {PERSONAL_INFO.hero.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              EDUCATION
            </h2>
            <div>
              <div className="flex justify-between text-xs font-bold text-white">
                <span>{PERSONAL_INFO.education.degree} in {PERSONAL_INFO.education.branch}</span>
                <span className="text-emerald-500 font-mono">{PERSONAL_INFO.education.graduation}</span>
              </div>
              <div className="text-xs text-white/70 font-light">{PERSONAL_INFO.education.college} ({PERSONAL_INFO.education.university})</div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              WORK EXPERIENCE
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>{exp.role} @ {exp.company}</span>
                  <span className="text-emerald-500 font-mono">{exp.period}</span>
                </div>
                <p className="text-[11px] text-white/40">{exp.overview}</p>
                <ul className="list-disc list-inside text-xs text-white/70 font-light space-y-0.5 pt-1">
                  {exp.responsibilities.slice(0, 4).map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Research & Leadership */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              RESEARCH & LEADERSHIP
            </h2>
            <div className="text-xs text-white/70 font-light space-y-1">
              <div><strong className="text-white">Published Research (ISCJ):</strong> ClgZone - Campus Community Networking & Academic Synchronization.</div>
              <div><strong className="text-white">Technical Club President:</strong> Organized college hackathons and mentored 50+ students in Flutter development.</div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              KEY PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/70">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-2.5 bg-[#121212] border border-white/10 rounded space-y-1">
                  <div className="font-bold text-white">{p.title}</div>
                  <div className="text-[10px] text-emerald-500">{p.tech.slice(0, 4).join(', ')}</div>
                  <div className="text-[11px] font-light">{p.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 font-mono text-[11px] text-white/70">
              <div><strong className="text-white">Mobile:</strong> Flutter, Dart, Riverpod, Bloc</div>
              <div><strong className="text-white">Backend:</strong> Node.js, Express, Go Fiber</div>
              <div><strong className="text-white">Cloud/DB:</strong> Firebase, PostgreSQL, SQLite</div>
              <div><strong className="text-white">AI/ML:</strong> Gemini API, OpenCV, Python</div>
              <div><strong className="text-white">Tools:</strong> Git, GitHub, Postman, Figma</div>
              <div><strong className="text-white">CS Core:</strong> DSA, OOP, Clean Architecture</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

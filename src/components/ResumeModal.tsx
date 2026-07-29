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

  const handleDownloadActualPdf = () => {
    soundFx.playClick();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ajitesh_Sinha_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdfInTab = () => {
    soundFx.playClick();
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="glass-modal border-2 border-emerald-500 rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-10 space-y-8 shadow-[0_0_50px_rgba(16,185,129,0.3)] relative">
        
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 print:hidden">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs font-bold">
            <FileText className="w-4 h-4" />
            <span>OFFICIAL_RESUME // AJITESH_SINHA.PDF</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
        

            <button
              onClick={handleViewPdfInTab}
              className="px-3.5 py-2 bg-white/5 border border-white/20 hover:border-emerald-500 text-white hover:text-emerald-400 font-mono text-xs uppercase rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>OPEN / PRINT PDF</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-2 text-white/60 hover:text-emerald-400 bg-white/5 border border-white/10 rounded-full cursor-pointer"
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
              Flutter Developer & AI Engineer
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-white/70">
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-500" />6387643564</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-500" />ajiteshsinha2004@gmail.com</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-500" />Greater Noida, Uttar Pradesh</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-emerald-500 pt-1">
              <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/AjiteshSinha</a>
              <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/ajiteshsinha</a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              EDUCATION
            </h2>
            <div>
              <div className="flex justify-between text-xs font-bold text-white">
                <span>Greater Noida College, AKTU — Bachelor of Technology in Computer Science</span>
                <span className="text-emerald-500 font-mono">Expected May 2027</span>
              </div>
              <div className="text-xs text-white/70 font-light mt-1">
                <strong>Relevant Coursework:</strong> Data Structures and Algorithms (C++), Prob & Stat in CS (Python), Intro to CS II (C++), Linear Algebra w/ Computational Applications (Python)
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              WORK EXPERIENCE
            </h2>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-white">
                <span>Flutter Intern @ GreenCreon LLP</span>
                <span className="text-emerald-500 font-mono">July 2025 – October 2025 | Remote</span>
              </div>
              <ul className="list-disc list-inside text-xs text-white/80 font-light space-y-1 pt-1">
                <li>Designed and developed scalable cross-platform mobile application interfaces using Flutter, delivering responsive and visually consistent experiences across Android and iOS devices.</li>
                <li>Integrated RESTful APIs, implemented efficient state management solutions, and optimized dynamic UI rendering to improve application performance and user engagement.</li>
                <li>Collaborated closely with backend developers and remote teams to validate API responses, resolve integration issues, and ensure seamless end-to-end functionality.</li>
                <li>Refactored reusable widgets and modularized application architecture, significantly improving maintainability, scalability, and development efficiency.</li>
                <li>Performed debugging and performance optimization using Flutter DevTools, reducing UI lag, improving app responsiveness, and enhancing overall user experience.</li>
              </ul>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-white">
                <span>Flutter Developer Intern @ SOS 42</span>
                <span className="text-emerald-500 font-mono">February 2026 – April 2026 | Remote</span>
              </div>
              <ul className="list-disc list-inside text-xs text-white/80 font-light space-y-1 pt-1">
                <li>Developed feature-rich Flutter applications with clean architecture principles, reusable components, and adaptive UI designs for improved scalability and maintainability.</li>
                <li>Implemented API integrations, asynchronous data handling, and state management techniques to build smooth, high-performance mobile experiences.</li>
                <li>Enhanced application stability by identifying and fixing UI, navigation, and runtime issues, resulting in improved usability and reduced crash scenarios.</li>
                <li>Optimized application workflows and frontend logic to improve rendering speed, responsiveness, and overall application efficiency.</li>
                <li>Worked in a collaborative remote development environment, participating in technical discussions, feature planning, testing, and iterative product improvements.</li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/80">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-1">
                <div className="font-bold text-white text-sm">ClgJone App</div>
                <div className="text-[10px] text-emerald-400 font-mono">Flutter, Dart, Firebase, Cloud Firestore, Firebase Authentication</div>
                <p className="text-[11px] font-light text-white/70">
                  Built a cross-platform student utility application providing centralized access to academic resources such as notes, updates, and announcements with real-time data sync using Firebase.
                </p>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-1">
                <div className="font-bold text-white text-sm">Face Recognition Attendance App</div>
                <div className="text-[10px] text-emerald-400 font-mono">Flutter, Python, OpenCV, Flask, Firebase</div>
                <p className="text-[11px] font-light text-white/70">
                  Built an automated attendance system leveraging facial recognition for secure, contactless tracking with Haar Cascade and Flask backend.
                </p>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-1">
                <div className="font-bold text-white text-sm">Lucid AI (AI Roadmap Chatbot)</div>
                <div className="text-[10px] text-emerald-400 font-mono">Python, TensorFlow, Flutter, Firebase</div>
                <p className="text-[11px] font-light text-white/70">
                  Designed an interactive chatbot delivering personalized learning roadmaps across AI/ML, NLP, and web development using LLMs and TensorFlow.
                </p>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-1">
                <div className="font-bold text-white text-sm">Shopping App</div>
                <div className="text-[10px] text-emerald-400 font-mono">Flutter, Dart, Firebase, Stripe</div>
                <p className="text-[11px] font-light text-white/70">
                  Developed a mobile e-commerce platform with product browsing, cart, and secure Stripe payment integration with real-time product sync.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-emerald-500 uppercase font-bold border-b border-white/10 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono text-xs text-white/80">
              <div><strong className="text-white">Languages:</strong> Dart, Python, C, C++, Bash (Basic)</div>
              <div><strong className="text-white">Development:</strong> Flutter, REST API Integration, State Management, Responsive UI</div>
              <div><strong className="text-white">Backend & Cloud:</strong> Firebase, Cloud Firestore, Firebase Auth, Flask, MySQL</div>
              <div><strong className="text-white">AI & Computer Vision:</strong> TensorFlow, OpenCV, Facial Recognition, AI Chatbot</div>
              <div><strong className="text-white">Tools:</strong> Git, GitHub, Docker, Postman, Android Studio, VS Code</div>
              <div><strong className="text-white">Core Concepts:</strong> DSA, Scalable Architecture, Real-Time Data Sync, Optimization</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

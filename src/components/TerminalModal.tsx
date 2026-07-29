import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Send, Sparkles, CornerDownLeft } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  response: string | React.ReactNode;
  isAi?: boolean;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'sys.init',
      response: `[SYS_ONLINE]: Ajitesh Sinha Tactical Portfolio Terminal v4.0.0
Type 'help' for available CLI commands or 'ai <question>' to ask the Gemini AI Recruiter Assistant about Ajitesh's Flutter skills, experience, or projects.`,
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = async (cmdString: string) => {
    const trimmed = cmdString.trim();
    if (!trimmed) return;

    soundFx.playTerminalBeep();
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    let responseNode: React.ReactNode = '';

    if (mainCmd === 'clear') {
      setLogs([]);
      setInput('');
      return;
    }

    if (mainCmd === 'exit' || mainCmd === 'quit') {
      onClose();
      return;
    }

    if (mainCmd === 'help') {
      responseNode = (
        <div className="space-y-1 font-mono text-xs text-white/70">
          <div className="text-emerald-500 font-bold">AVAILABLE COMMANDS:</div>
          <div><span className="text-emerald-500 font-bold">help</span> - Display this help menu</div>
          <div><span className="text-emerald-500 font-bold">about</span> - View Ajitesh Sinha's background summary</div>
          <div><span className="text-emerald-500 font-bold">skills</span> - Display technical skill matrix</div>
          <div><span className="text-emerald-500 font-bold">projects</span> - List 5 core engineered applications</div>
          <div><span className="text-emerald-500 font-bold">experience</span> - View 3 Flutter Developer internships</div>
          <div><span className="text-emerald-500 font-bold">research</span> - Read ClgZone ISCJ published paper summary</div>
          <div><span className="text-emerald-500 font-bold">contact</span> - Show direct contact coordinates</div>
          <div><span className="text-emerald-500 font-bold">ai &lt;query&gt;</span> - Query Gemini AI Recruiter Assistant</div>
          <div><span className="text-emerald-500 font-bold">clear</span> - Clear terminal logs</div>
          <div><span className="text-emerald-500 font-bold">exit</span> - Close CLI Terminal</div>
        </div>
      );
    } else if (mainCmd === 'about' || mainCmd === 'dossier') {
      responseNode = (
        <div className="space-y-1 text-xs text-white/70 font-mono">
          <div className="text-emerald-500 font-bold">AJITESH SINHA // FLUTTER & FULL-STACK DEVELOPER</div>
          <div>• B.Tech Computer Science Engineering @ Greater Noida College (AKTU, 2027)</div>
          <div>• 3 Flutter Developer Internships (GreenCreon LLP, SOS42, Talking Crooks)</div>
          <div>• Technical Club President & Published Researcher in ISCJ Journal</div>
          <div>• Location: Greater Noida, UP, India (28.6139°N 77.2090°E)</div>
        </div>
      );
    } else if (mainCmd === 'skills') {
      responseNode = (
        <div className="space-y-1 text-xs font-mono text-white/70">
          <div className="text-emerald-500 font-bold">PRIMARY TECHNICAL STACK:</div>
          <div>• Mobile: Flutter (94%), Dart, Clean Architecture, Provider, Riverpod, Bloc</div>
          <div>• Languages: C++, Java, Python, JavaScript, TypeScript, Go</div>
          <div>• Backend: Node.js, Express, Go Fiber, REST APIs, PostgreSQL, SQLite</div>
          <div>• Cloud & AI: Firebase (Firestore, Auth), Gemini API, OpenCV Face Rec</div>
        </div>
      );
    } else if (mainCmd === 'projects') {
      responseNode = (
        <div className="space-y-1 text-xs font-mono text-white/70">
          <div className="text-emerald-500 font-bold">FEATURED ENGINEERED APPLICATIONS:</div>
          <div>1. ClgZone - Academic & Student Community Ecosystem (Flutter, Firebase)</div>
          <div>2. Lucid AI - Learning Roadmap Chatbot (Flutter, Gemini API, Node.js)</div>
          <div>3. Shopping App - Cross-Platform E-Commerce Mobile Engine (Flutter, REST)</div>
          <div>4. OrderSync - Order & Inventory Sync System (Flutter, Go Fiber, Postgres)</div>
          <div>5. Face Recognition Attendance - AI Biometric App (Flutter, Python, OpenCV)</div>
        </div>
      );
    } else if (mainCmd === 'experience') {
      responseNode = (
        <div className="space-y-1 text-xs font-mono text-white/70">
          <div className="text-emerald-500 font-bold">FLUTTER DEVELOPER INTERNSHIPS:</div>
          <div>1. GreenCreon LLP - REST API, Firebase, Widget Refactoring</div>
          <div>2. SOS42 - Clean Architecture, State Management, API Integration</div>
          <div>3. Talking Crooks - Responsive UI, Figma to Code, Offline Caching</div>
        </div>
      );
    } else if (mainCmd === 'research') {
      responseNode = (
        <div className="space-y-1 text-xs font-mono text-white/70">
          <div className="text-emerald-500 font-bold">RESEARCH PUBLICATION (ISCJ):</div>
          <div>Title: "ClgZone: Unified Digital Ecosystem for Campus Community Networking"</div>
          <div>Journal: International Study of Computer Science Journals (ISCJ)</div>
          <div>Outcomes: Reduced campus information lookup latency by 75%.</div>
        </div>
      );
    } else if (mainCmd === 'contact') {
      responseNode = (
        <div className="space-y-1 text-xs font-mono text-white/70">
          <div className="text-emerald-500 font-bold">DIRECT CONTACT COORDINATES:</div>
          <div>• Email: ajiteshsinha2004@gmail.com</div>
          <div>• Phone: +91 6387643564</div>
          <div>• Location: Greater Noida, Uttar Pradesh, India</div>
          <div>• GitHub: https://github.com/AjiteshSinha17</div>
          <div>• LinkedIn: https://www.linkedin.com/in/ajitesh-sinha-501124295/</div>
        </div>
      );
    } else if (mainCmd === 'ai' || (mainCmd !== 'help' && mainCmd !== 'about' && mainCmd !== 'skills' && mainCmd !== 'projects' && mainCmd !== 'experience' && mainCmd !== 'contact' && mainCmd !== 'research')) {
      // Send query to Gemini AI Terminal endpoint
      const query = mainCmd === 'ai' ? args : trimmed;
      if (!query) {
        responseNode = <span className="text-amber-400">Please provide a prompt. Example: 'ai Why hire Ajitesh?'</span>;
      } else {
        setIsAiProcessing(true);
        try {
          const aiRes = await fetch('/api/terminal/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: query }),
          });
          const aiData = await aiRes.json();
          responseNode = (
            <div className="text-white font-mono text-xs whitespace-pre-wrap leading-relaxed border-l-2 border-emerald-500 pl-3 my-1">
              {aiData.reply || '[SYS_INFO]: No response generated.'}
            </div>
          );
        } catch (e) {
          responseNode = (
            <span className="text-emerald-500 font-mono text-xs">
              [SYS_INFO]: Ajitesh Sinha is a Flutter Developer, Mobile & Backend Engineer (3 internships, ISCJ paper, Technical Club President). Email: ajiteshsinha2004@gmail.com
            </span>
          );
        } finally {
          setIsAiProcessing(false);
        }
      }
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: trimmed,
        response: responseNode,
        isAi: mainCmd === 'ai',
      },
    ]);

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div
        className={`glass-modal border-2 border-emerald-500 rounded-lg w-full flex flex-col overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all duration-300 ${
          isExpanded ? 'h-[95vh] max-w-6xl' : 'h-[650px] max-w-4xl'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="bg-black/60 backdrop-blur-md border-b border-emerald-500/40 px-4 py-2.5 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 text-emerald-500 font-bold">
            <TerminalIcon className="w-4 h-4" />
            <span>AJITESH_SINHA // COMMAND_LINE_INTERFACE (V4.0)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-white/60 hover:text-emerald-400 cursor-pointer"
              title={isExpanded ? 'Minimize' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1 text-white/60 hover:text-red-400 cursor-pointer"
              title="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body Output Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 font-mono text-xs leading-relaxed text-white">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <span className="text-white/40">ajitesh@portfolio:~$</span>
                <span>{log.command}</span>
              </div>
              <div className="text-white/70 pl-4">{log.response}</div>
            </div>
          ))}

          {isAiProcessing && (
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>GEMINI AI RECRUITER ASSISTANT PROCESSING QUERY...</span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="bg-[#121212] border-t border-emerald-500/40 p-3 flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-500 font-bold">ajitesh@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'about', 'projects', 'skills', or 'ai <question>'..."
            className="flex-1 bg-transparent border-none text-white outline-none placeholder-white/30"
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-3 py-1 bg-emerald-500 text-black font-bold uppercase rounded hover:bg-emerald-400 flex items-center gap-1 cursor-pointer"
          >
            <span>RUN</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};

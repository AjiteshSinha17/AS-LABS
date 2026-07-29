import React from 'react';
import { Smartphone, Database, Server, Bot, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-emerald-500" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-500" />;
      case 'Server': return <Server className="w-6 h-6 text-emerald-500" />;
      case 'Bot': return <Bot className="w-6 h-6 text-emerald-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      default: return <Smartphone className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Zap className="w-3.5 h-3.5" />
            <span>Professional Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            SERVICES & <span className="text-emerald-500">CAPABILITIES</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            Specialized engineering services for startups, enterprises, and mobile product development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="glass-card glass-card-hover rounded-lg p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg w-fit">
                  {getServiceIcon(serv.icon)}
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  {serv.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {serv.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <span className="font-mono text-[10px] text-emerald-500 uppercase font-bold">CORE DELIVERABLES:</span>
                <ul className="space-y-1.5 text-xs text-white/80 font-light">
                  {serv.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{del}</span>
                    </li>
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

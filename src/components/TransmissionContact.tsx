import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Globe, CheckCircle2, AlertCircle, Copy, Check, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const TransmissionContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [responseState, setResponseState] = useState<{
    success: boolean;
    message: string;
    id?: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setResponseState({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Subject, Message).',
      });
      return;
    }

    setSending(true);
    setResponseState(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        soundFx.playSuccess();
        setResponseState({
          success: true,
          message: 'Transmission successfully received and logged in secure database.',
          id: data.transmissionId,
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setResponseState({
          success: false,
          message: data.error || 'Failed to transmit message. Please try again.',
        });
      }
    } catch (err: any) {
      setResponseState({
        success: false,
        message: 'Network error submitting form. Please check connection or email directly.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
            <Send className="w-3.5 h-3.5" />
            <span>Section 05 // Transmission Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            INITIATE <span className="text-emerald-500">COMMUNICATION</span>
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-2xl font-light">
            Available for Flutter Developer roles, full-stack software engineering internships, technical collaborations, and research inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card glass-card-hover border-emerald-500/40 rounded-lg p-6 space-y-6">
              <div className="border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                  DIRECT TRANSMISSION METRICS
                </h3>
                <p className="font-mono text-xs text-emerald-500">AJITESH SINHA // PERSONAL CONTACT</p>
              </div>

              {/* Email */}
              <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <div>
                    <div className="font-mono text-[10px] text-white/40 uppercase">EMAIL ADDRESS</div>
                    <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="font-mono text-xs text-white hover:text-emerald-400">
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 bg-white/10 border border-white/10 text-emerald-400 hover:bg-emerald-500 hover:text-black rounded transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">TELEPHONE</div>
                  <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="font-mono text-xs text-white hover:text-emerald-400">
                    {PERSONAL_INFO.contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">LOCATION</div>
                  <div className="font-mono text-xs text-white">{PERSONAL_INFO.contact.location}</div>
                  <div className="font-mono text-[10px] text-emerald-500">{PERSONAL_INFO.contact.coordinates}</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 space-y-2">
                <div className="font-mono text-[10px] text-white/40 uppercase">EXTERNAL PROFILES</div>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 text-white hover:text-emerald-400 rounded text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 text-white hover:text-emerald-400 rounded text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LINKEDIN</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.contact.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 text-white hover:text-emerald-400 rounded text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>WEB</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Form (Col 6 to 12) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card glass-card-hover border-white/10 focus-within:border-emerald-500/60 rounded-lg p-6 md:p-8 space-y-5">
              
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                    SEND TRANSMISSION PAYLOAD
                  </h3>
                  <p className="font-mono text-xs text-emerald-500">SECURE END-TO-END MESSAGE FORM</p>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>

              {responseState && (
                <div
                  className={`p-4 rounded border text-xs font-mono flex items-start gap-3 ${
                    responseState.success
                      ? 'bg-emerald-500/10 backdrop-blur-md border-emerald-500 text-white'
                      : 'bg-red-500/10 backdrop-blur-md border-red-500 text-red-300'
                  }`}
                >
                  {responseState.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold">{responseState.message}</div>
                    {responseState.id && (
                      <div className="text-[10px] text-emerald-500 mt-1">
                        TRANSMISSION_ID: {responseState.id}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                
                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Technical Recruiter / Hiring Lead"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 focus:border-emerald-500 rounded text-white outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 focus:border-emerald-500 rounded text-white outline-none transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                
                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase">TELEPHONE (OPTIONAL)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 focus:border-emerald-500 rounded text-white outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase">TRANSMISSION SUBJECT *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Flutter Developer Role Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 focus:border-emerald-500 rounded text-white outline-none transition-all"
                  />
                </div>

              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <label className="text-white/70 uppercase">MESSAGE PAYLOAD *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Type your message, opportunity details, or technical query here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 focus:border-emerald-500 rounded text-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-widest rounded hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{sending ? 'LOGGING TRANSMISSION...' : 'TRANSMIT MESSAGE PAYLOAD'}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

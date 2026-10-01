import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  CheckCircle2,
  Sparkles,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: selectedService || 'Generative AI & RAG Pipeline',
    budget: '$500 - $2,000',
    timeline: 'Within 2-4 weeks',
    description: '',
    honeypot: '' // spam filter
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot detected

    if (!formData.name || !formData.email || !formData.description) {
      setErrorMsg('Please complete all required fields (Name, Email, and Project Description).');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    // Simulate sending message
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative border-t transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-page)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Journey Destination Marker */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          {/* Futuristic Destination Station Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-300 text-xs font-mono mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Compass className="w-3.5 h-3.5 text-cyan-500" />
            <span>JOURNEY DESTINATION // TERMINAL 01</span>
          </div>

          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's Build Something <span className="text-gradient-cyan">Meaningful.</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            The journey leads here. Whether you have an upcoming AI project, a full-time engineering opportunity, or wish to explore a collaboration — my inbox is open.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6"
          >
            <div 
              className="p-8 rounded-3xl border shadow-xl space-y-6 backdrop-blur-md transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-main)',
                boxShadow: 'var(--panel-shadow)'
              }}
            >
              <h3 
                className="text-xl font-display font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Direct Contact Channels
              </h3>
              <p 
                className="text-xs font-sans leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I actively respond to recruiter inquiries, client projects, and academic research collaborations.
              </p>

              {/* Email Card with Copy Button */}
              <div 
                className="p-4 rounded-2xl border flex items-center justify-between group transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderColor: 'var(--border-subtle)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                      Direct Email
                    </span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs sm:text-sm font-mono text-cyan-500 hover:underline font-medium"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl border transition-colors hover:text-cyan-500"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-main)',
                    color: 'var(--text-secondary)'
                  }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div 
                className="p-4 rounded-2xl border flex items-center justify-between group transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderColor: 'var(--border-subtle)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                      Phone / WhatsApp
                    </span>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`} 
                      className="text-xs sm:text-sm font-mono text-emerald-500 hover:underline font-medium"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl border transition-colors hover:text-emerald-500"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-main)',
                    color: 'var(--text-secondary)'
                  }}
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div 
                className="p-4 rounded-2xl border flex items-center gap-3 transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card-subtle)',
                  borderColor: 'var(--border-subtle)'
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>
                    Base Location
                  </span>
                  <span className="text-xs sm:text-sm font-mono" style={{ color: 'var(--text-primary)' }}>
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Verified Professional Links */}
              <div 
                className="pt-4 border-t"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <span className="text-xs font-mono block mb-3 uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
                  Developer & Professional Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-600 dark:text-blue-300 hover:bg-blue-600/20 text-xs font-mono font-medium transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-mono font-medium transition-all hover:border-cyan-500/40"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-main)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div 
              className="p-8 sm:p-10 rounded-3xl border shadow-2xl relative backdrop-blur-md transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-accent)',
                boxShadow: 'var(--panel-shadow)'
              }}
            >
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 
                    className="text-2xl font-display font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Inquiry Transmitted Successfully!
                  </h3>
                  <p 
                    className="text-sm max-w-md font-sans mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Thank you, <span className="text-cyan-500 font-semibold">{formData.name}</span>. Your project message has been received. I will review the specifications and reply to <span className="text-cyan-500 font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        projectType: 'Generative AI & RAG Pipeline',
                        budget: '$500 - $2,000',
                        timeline: 'Within 2-4 weeks',
                        description: '',
                        honeypot: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl border text-xs font-mono font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-main)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot for spam bots */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <h3 
                      className="text-xl font-display font-bold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Project Inquiry & Collaboration
                    </h3>
                    <p 
                      className="text-xs font-sans mb-6"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Tell me about your software requirements, timeline, or open engineering role.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-300 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-card-subtle)',
                          borderColor: 'var(--border-main)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-card-subtle)',
                          borderColor: 'var(--border-main)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme AI Labs"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-card-subtle)',
                          borderColor: 'var(--border-main)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-card-subtle)',
                          borderColor: 'var(--border-main)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="AI & Machine Learning Development">AI & Machine Learning Development</option>
                        <option value="Generative AI & RAG Pipeline">Generative AI & RAG Pipeline</option>
                        <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                        <option value="AI-Powered Web Application">AI-Powered Web Application</option>
                        <option value="Data & Automation Solutions">Data & Automation Solutions</option>
                        <option value="Full-Time / Internship Opportunity">Full-Time / Internship Opportunity</option>
                        <option value="Other Custom Engineering">Other Custom Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-card-subtle)',
                          borderColor: 'var(--border-main)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="Under $500">Under $500 (Prototype / Consultation)</option>
                        <option value="$500 - $2,000">$500 – $2,000 (MVP / Feature)</option>
                        <option value="$2,000 - $5,000">$2,000 – $5,000 (Full Production App)</option>
                        <option value="$5,000+">$5,000+ (Enterprise Architecture)</option>
                        <option value="Employment Offer">Full-Time / Competitive Offer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Expected Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-card-subtle)',
                          borderColor: 'var(--border-main)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="Immediate (< 1 week)">Immediate (&lt; 1 week)</option>
                        <option value="Within 2-4 weeks">Within 2–4 weeks</option>
                        <option value="1-2 months">1–2 months</option>
                        <option value="Flexible">Flexible Schedule</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Project Description & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe the objective, target user base, or technology preferences..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none font-sans transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderColor: 'var(--border-main)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-xs sm:text-sm shadow-glow-cyan hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center pt-2" style={{ color: 'var(--text-muted)' }}>
                    🔒 Protected by spam screening. Direct transmission to chandanagurrapu6@gmail.com
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

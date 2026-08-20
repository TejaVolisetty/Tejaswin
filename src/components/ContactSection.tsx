import React, { useState } from 'react';
import { SectionId } from '../types';
import { IMAGES, PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Instagram,
  Send,
  Sparkles,
  Rocket,
  Users,
  MessageCircle,
  CheckCircle2,
  Globe,
  ArrowRight,
} from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: "Let's Work Together",
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      // reset after 4s
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: "Let's Work Together",
          message: '',
        });
      }, 4000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-20 pb-12 scroll-mt-0 border-t border-white/5"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.heroBoyDock}
          alt="Contact Japanese Anime Twilight Landscape"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c16]/95 via-[#0b0c16]/85 to-[#0b0c16]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pt-4">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
          <div className="flex flex-col items-start gap-1">
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display leading-tight">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-500 font-serif">
                What's Next.
              </span>
            </h2>
          </div>

          <div className="text-right hidden lg:block">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400">
              IDEAS × PEOPLE × IMPACT
            </span>
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column: Intro Badges & Japanese Lantern Seal */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {PERSONAL_INFO.aboutLong.slice(0, 160)}... I'm always open to meaningful conversations, exciting opportunities, and collaborations that create real impact.
            </p>

            {/* 3 Interest Badges */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3 hover:border-rose-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">New Opportunities</span>
                  <span className="text-[10px] text-neutral-400">Let's grow together</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3 hover:border-rose-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Project Collaborations</span>
                  <span className="text-[10px] text-neutral-400">Ideas into reality</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3 hover:border-rose-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Just a Friendly Chat</span>
                  <span className="text-[10px] text-neutral-400">Good ideas start with a hello</span>
                </div>
              </div>
            </div>

            {/* Japanese Signoff Card */}
            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <span className="font-serif-jp text-rose-400 text-xs font-bold">未来へ</span>
                <span className="text-neutral-500 text-xs">|</span>
                <span className="font-serif-jp text-neutral-300 text-xs">また、どこかで</span>
              </div>
              <span className="text-[9px] font-mono text-neutral-500 uppercase">
                UNTIL WE MEET AGAIN
              </span>
            </div>
          </div>

          {/* Center Column: Interactive Contact Form */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-panel p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">Send Me a Message</h3>
                </div>
                <span className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                  Your Message Matters <Sparkles className="w-2.5 h-2.5" />
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center justify-center text-center gap-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">Message Received!</h4>
                  <p className="text-xs text-neutral-300 max-w-xs">
                    Thank you for reaching out, {formData.name || 'friend'}! I will respond to your email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-neutral-400 font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-rose-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-neutral-400 font-medium mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-rose-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 font-medium mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:outline-none focus:border-rose-500 transition-colors"
                    >
                      <option value="Let's Work Together">Let's Work Together</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Hiring / Internship Opportunity">Hiring / Internship Opportunity</option>
                      <option value="Tech Discussion / Coffee Chat">Tech Discussion / Coffee Chat</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell me about your ideas, opportunities, or just say hello..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Social Connect Circles */}
            <div className="glass-panel p-3 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-bold text-white font-display">Connect With Me</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-sky-400/50 flex items-center justify-center text-neutral-300 hover:text-sky-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-white/50 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.xTwitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-white/50 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                  title="X (Twitter)"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-red-500/50 flex items-center justify-center text-neutral-300 hover:text-red-500 transition-colors"
                  title="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-rose-400/50 flex items-center justify-center text-neutral-300 hover:text-rose-400 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Info & Torii Sunset Card */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            
            {/* Get in Touch Card */}
            <div className="glass-panel p-4 rounded-2xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white font-display mb-1">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Get in Touch</span>
              </div>
              <p className="text-[10px] text-neutral-400 mb-3 leading-relaxed">
                Feel free to reach out through any of these platforms. I usually respond within 24 hours.
              </p>

              <div className="flex flex-col gap-2 text-xs">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-xl bg-black/40 border border-white/5 hover:border-rose-500/40 transition-all flex items-center gap-2.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <Mail className="w-3 h-3" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[9px] text-neutral-500 block">Email</span>
                    <span className="text-[11px] font-medium text-white truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-2 rounded-xl bg-black/40 border border-white/5 hover:border-rose-500/40 transition-all flex items-center gap-2.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 block">Phone</span>
                    <span className="text-[11px] font-medium text-white font-mono">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 block">Location</span>
                    <span className="text-[11px] font-medium text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Worldwide Status */}
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center gap-2 text-[10px] text-neutral-300">
                  <Globe className="w-3 h-3 text-rose-400" />
                  <span>Open to opportunities worldwide</span>
                </div>
              </div>
            </div>

            {/* Torii Gate Card */}
            <div className="glass-panel p-3 rounded-2xl relative overflow-hidden min-h-[110px] flex flex-col justify-between">
              <img
                src={IMAGES.toriiSunset}
                alt="Torii Gate"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10">
                <span className="text-[11px] font-bold text-white font-display block">
                  New Connections.
                </span>
                <span className="text-[10px] text-rose-300 block">
                  Bigger Horizons.
                </span>
              </div>
              <div className="relative z-10 flex justify-end">
                <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-[0_0_10px_#f43f5e]">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

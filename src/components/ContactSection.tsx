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
  Copy,
  Check,
  ExternalLink,
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
  const [submitStatus, setSubmitStatus] = useState<'success' | 'client_fallback'>('success');
  const [copied, setCopied] = useState(false);

  const mailSubject = `Portfolio Message: ${formData.subject} - from ${formData.name || 'Visitor'}`;
  const mailBody = `Hi Teja Swin,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}`;
  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const handleCopyMessage = () => {
    const text = `To: ${PERSONAL_INFO.email}\nSubject: ${mailSubject}\n\n${mailBody}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    try {
      // Use activated FormSubmit endpoint token with clear labels
      const formEndpoint = 'https://formsubmit.co/ajax/1ffb398bd0b7ee395ae49f6925871c95';
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Portfolio Message from ${formData.name} [${formData.subject}]`,
          _replyto: formData.email,
          _template: 'box',
          _captcha: 'false',
          'Sender Name': formData.name,
          'Sender Email': formData.email,
          'Subject / Topic': formData.subject,
          'Message': formData.message,
          'Received At': new Date().toLocaleString(),
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('client_fallback');
      }
    } catch {
      setSubmitStatus('client_fallback');
    } finally {
      setIsSending(false);
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: "Let's Work Together",
      message: '',
    });
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

            {/* Signoff Card */}
            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between mt-2">
              <span className="text-xs font-medium text-rose-400">Let's Create Together</span>
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                Open to Opportunities
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
                <div className="py-6 px-2 flex flex-col items-center justify-center text-center gap-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/70 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      {submitStatus === 'success' ? 'Message Dispatched!' : 'Message Ready to Send!'}
                    </h4>
                    <p className="text-xs text-neutral-300 max-w-sm mt-1 leading-relaxed">
                      Thank you for reaching out, <span className="text-rose-400 font-semibold">{formData.name || 'friend'}</span>! Your message has been prepared for{' '}
                      <span className="text-white font-mono">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>

                  {/* Direct 1-Click Send / Backup Actions */}
                  <div className="w-full max-w-sm bg-black/50 border border-white/10 rounded-xl p-3 flex flex-col gap-2 mt-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 text-left">
                      Direct Email Options
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-rose-950/50 hover:bg-rose-900/70 border border-rose-500/40 text-rose-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow-[0_0_12px_rgba(225,29,72,0.25)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Gmail</span>
                      </a>
                      <a
                        href={mailtoUrl}
                        className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Mail App</span>
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="w-full py-1.5 rounded-lg bg-black/60 hover:bg-black/90 border border-white/10 text-neutral-300 hover:text-white text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Details</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 cursor-pointer mt-1"
                  >
                    Send another message
                  </button>
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

                  {/* Direct mail alternative strip */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1 text-[10px]">
                      <Sparkles className="w-3 h-3 text-rose-400" /> Direct email:
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent("Collaboration Inquiry - Teja Swin Volisetty")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-rose-500/20 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 transition-all flex items-center gap-1 text-[10px]"
                      >
                        <Mail className="w-3 h-3 text-rose-400" />
                        <span>Gmail Web</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all text-[10px]"
                      >
                        <span>Mail App</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Social Connect Circles */}
            <div className="glass-panel p-3.5 rounded-2xl flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white font-display">Connect With Me</span>
                <span className="text-[10px] text-neutral-400">Verified links & direct contact</span>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-sky-400/70 hover:text-sky-400 hover:bg-sky-950/40 flex items-center justify-center text-neutral-300 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  title="VOLISETTY TEJASWIN | LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-white/70 hover:text-white hover:bg-neutral-800 flex items-center justify-center text-neutral-300 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                  title="TejaVolisetty (TEJASWIN) | GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-rose-400/70 hover:text-rose-400 hover:bg-rose-950/40 flex items-center justify-center text-neutral-300 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                {PERSONAL_INFO.xTwitter && (
                  <a
                    href={PERSONAL_INFO.xTwitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-white/70 hover:text-white flex items-center justify-center text-neutral-300 transition-all"
                    title="X (Twitter)"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {PERSONAL_INFO.youtube && (
                  <a
                    href={PERSONAL_INFO.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-red-500/70 hover:text-red-500 flex items-center justify-center text-neutral-300 transition-all"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                )}
                {PERSONAL_INFO.instagram && (
                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-rose-400/70 hover:text-rose-400 flex items-center justify-center text-neutral-300 transition-all"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
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

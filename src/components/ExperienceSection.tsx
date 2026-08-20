import React from 'react';
import { SectionId } from '../types';
import {
  IMAGES,
  EXPERIENCES,
  TIMELINE,
} from '../data/portfolioData';
import {
  ArrowRight,
  Sprout,
  Cog,
  Laptop,
  Building2,
  Users,
  Rocket,
  Lightbulb,
  Send,
  BarChart3,
  Heart,
  Briefcase,
  Sparkles,
} from 'lucide-react';

interface ExperienceSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onNavigate }) => {
  const getMilestoneIcon = (name: string) => {
    switch (name) {
      case 'sprout':
        return <Sprout className="w-3.5 h-3.5 text-emerald-400" />;
      case 'gear':
        return <Cog className="w-3.5 h-3.5 text-rose-400" />;
      case 'laptop':
        return <Laptop className="w-3.5 h-3.5 text-pink-400" />;
      case 'building':
        return <Building2 className="w-3.5 h-3.5 text-sky-400" />;
      case 'users':
        return <Users className="w-3.5 h-3.5 text-purple-400" />;
      case 'rocket':
        return <Rocket className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-rose-400" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-20 pb-12 scroll-mt-0 border-t border-white/5"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.heroBoyDock}
          alt="Experience Journey Anime Landscape"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c16]/95 via-[#0b0c16]/85 to-[#0b0c16]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pt-4">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-2 max-w-xl">
            {/* Eyebrow */}
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span>MY JOURNEY</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-tight">
              Experience <br />
              Shapes <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-500 font-serif">Better</span> <br />
              Versions.
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Every experience adds a new layer to my story — learning, building, collaborating, and growing.
            </p>
          </div>

          {/* Top Right Stats Pill */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
              DIFFERENT PLACES. SAME DREAM.
            </span>

            <div className="glass-panel p-3 rounded-2xl flex items-center gap-4 text-center">
              <div>
                <span className="text-base font-bold text-white font-mono">3+</span>
                <span className="block text-[10px] text-neutral-400">Internships</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-white font-mono">5+</span>
                <span className="block text-[10px] text-neutral-400">Collaborations</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-white font-mono">10+</span>
                <span className="block text-[10px] text-neutral-400">Tech Initiatives</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-rose-400 font-mono">∞</span>
                <span className="block text-[10px] text-neutral-400">Learning Ahead</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Journey Timeline Card */}
        <div className="pt-6">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
                <h3 className="text-sm font-bold text-white font-display">Professional Journey</h3>
              </div>
              <span className="text-[10px] text-rose-400 font-mono tracking-wider">
                A TIMELINE OF GROWTH →
              </span>
            </div>

            {/* Glowing Horizontal Timeline Steps */}
            <div className="relative pt-2 pb-2 overflow-x-auto">
              <div className="min-w-[650px] relative flex items-start justify-between gap-4">
                
                {/* Connecting Line */}
                <div className="absolute top-4 left-6 right-6 h-[2px] bg-gradient-to-r from-emerald-500 via-rose-500 to-amber-500 opacity-60 z-0" />

                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[110px] group">
                    {/* Node circle */}
                    <div className="w-8 h-8 rounded-full bg-[#10111e] border-2 border-rose-500/60 group-hover:border-rose-400 group-hover:scale-110 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(225,29,72,0.4)]">
                      {getMilestoneIcon(item.iconName)}
                    </div>

                    {/* Year badge */}
                    <span className="mt-2 text-xs font-mono font-bold text-rose-400">
                      {item.year}
                    </span>

                    {/* Title */}
                    <span className="text-[11px] font-medium text-white leading-tight mt-1">
                      {item.title}
                    </span>

                    {/* Subtitle */}
                    <span className="text-[9px] text-neutral-400 leading-tight mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Key Experiences + What I Learned */}
        <div className="pt-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Key Experiences (Left) */}
          <div className="lg:col-span-7 glass-panel p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white font-display">Key Experiences</h3>
                <span className="text-[10px] text-rose-400 font-mono hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {/* 1. Deloitte Data Analytics Job Simulation */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3 hover:border-emerald-500/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#86BC25]/20 border border-[#86BC25]/40 flex items-center justify-center text-[#86BC25] shrink-0 font-bold font-mono text-[10px]">
                    DEL
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white">Data Analytics Job Simulation</h4>
                      <span className="text-[10px] font-mono text-emerald-400">Aug 2026</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 font-light mt-1 leading-relaxed">
                      Deloitte Australia (via Forage) — Forensic dataset investigation, Excel modeling & stakeholder reporting.
                    </p>
                  </div>
                </div>

                {/* 2. Research & Development Projects */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3 hover:border-rose-500/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white">Research & Development Projects</h4>
                      <span className="text-[10px] font-mono text-neutral-400">2024 – 2026</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 font-light mt-1 leading-relaxed">
                      Built AI-powered systems in Computer Vision, Deep Learning, and Full Stack Development.
                    </p>
                  </div>
                </div>

                {/* 3. Team Collaborations */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3 hover:border-rose-500/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white">Team Collaborations</h4>
                      <span className="text-[10px] font-mono text-neutral-400">2023 – Present</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 font-light mt-1 leading-relaxed">
                      Worked in diverse teams, improved communication, leadership, and problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What I Learned (Right) */}
          <div className="lg:col-span-5 glass-panel p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white font-display">What I Learned</h3>
                <span className="text-[10px] text-rose-400 font-mono">Growth Never Stops</span>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-black/40 border border-white/5">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Adaptability</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">
                      Embracing change and new challenges with a positive mindset.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-black/40 border border-white/5">
                  <Send className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Real-world Problem Solving</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">
                      Turning ideas into practical solutions that create value.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-black/40 border border-white/5">
                  <BarChart3 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Teamwork & Leadership</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">
                      Growing together, achieving more.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-black/40 border border-white/5">
                  <Heart className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Resilience</span>
                    <span className="text-[10px] text-neutral-400 leading-tight">
                      Learning from failures and coming back stronger.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="text-[10px] text-neutral-400">
                <span className="block font-medium text-neutral-200">Experience • Learn • Evolve</span>
              </div>

              <button
                id="experience-next-chapter-btn"
                onClick={() => onNavigate('certifications')}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-[0_0_15px_rgba(225,29,72,0.5)] flex items-center gap-1.5"
              >
                <span>Next Chapter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

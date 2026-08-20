import React from 'react';
import { SectionId } from '../types';
import { IMAGES, PERSONAL_INFO } from '../data/portfolioData';
import {
  MapPin,
  GraduationCap,
  Target,
  Brain,
  Zap,
  Heart,
  Leaf,
  BookOpen,
  Gamepad2,
  PenTool,
  Compass,
  ArrowRight,
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-20 pb-12 scroll-mt-0 border-t border-white/5"
    >
      {/* Background Anime Room Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.aboutDesk}
          alt="Developer Workspace Looking At Mount Fuji"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c16]/95 via-[#0b0c16]/75 to-[#0b0c16]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-black/60" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pt-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading, Calligraphy Scroll & Story Intro */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            
            {/* Japanese Hanging Scroll Motif */}
            <div className="hidden sm:flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
              <div className="font-serif-jp text-rose-400 font-bold text-sm tracking-widest">
                継続は力なり
              </div>
              <div className="w-[1px] h-4 bg-white/20" />
              <div className="text-[11px] text-neutral-300 tracking-wider uppercase font-mono">
                Discipline Creates Freedom
              </div>
              <span className="w-4 h-4 rounded bg-rose-600/80 text-white font-serif-jp text-[10px] flex items-center justify-center font-bold">
                夢
              </span>
            </div>

            {/* Eyebrow */}
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span>× ABOUT ME ×</span>
            </div>

            {/* Display Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-tight">
              More <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-500 font-serif">
                Than Code
              </span>
            </h2>

            {/* Paragraph Bio */}
            <p className="text-sm sm:text-base text-neutral-200/90 max-w-md font-light leading-relaxed">
              A curious mind, a creative soul, and a builder at heart. I turn ideas into impact through technology.
            </p>

            {/* CTA Button */}
            <button
              id="about-know-story-cta"
              onClick={() => onNavigate('experience')}
              className="group px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-black/60 hover:bg-rose-950/80 border border-rose-500/50 hover:border-rose-400 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(225,29,72,0.3)]"
            >
              <span>Know My Story</span>
              <ArrowRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Bottom Quote Pill */}
            <div className="mt-4 sm:mt-8 p-3.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-3">
              <span className="text-2xl text-rose-500 font-serif leading-none">“</span>
              <div className="text-xs text-neutral-200">
                <span className="font-display italic">Same Dreams. Bigger Reality.</span>
                <span className="block text-[10px] text-rose-400 font-mono mt-0.5">— TEJA SWIN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Cards, Stats, Drivers & Hobbies */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Card 1: Who I Am */}
            <div className="glass-panel p-5 rounded-2xl">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <h3 className="text-base font-bold text-white font-display">Who I Am</h3>
                <div className="text-[10px] text-rose-400 font-mono tracking-wider font-semibold">
                  STUDENT / DEVELOPER / LEARNER / CREATOR
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                {PERSONAL_INFO.aboutLong}
              </p>
              
              {/* Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/5 text-[11px] text-neutral-300">
                  <div className="w-6 h-6 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 block">Based in</span>
                    <span className="font-medium text-white">Vijayawada, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/5 text-[11px] text-neutral-300">
                  <div className="w-6 h-6 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 block">B.Tech CSE</span>
                    <span className="font-medium text-white">KL University</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/5 text-[11px] text-neutral-300">
                  <div className="w-6 h-6 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 block">Focused on</span>
                    <span className="font-medium text-white">AI & Innovation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 4-Column Stat Pill */}
            <div className="glass-panel py-3 px-4 rounded-2xl grid grid-cols-4 gap-2 text-center">
              <div>
                <span className="text-base font-bold text-white font-mono">3+</span>
                <span className="block text-[10px] text-neutral-400">Years Learning</span>
              </div>
              <div className="border-l border-white/10">
                <span className="text-base font-bold text-white font-mono">7+</span>
                <span className="block text-[10px] text-neutral-400">Projects</span>
              </div>
              <div className="border-l border-white/10">
                <span className="text-base font-bold text-white font-mono">6+</span>
                <span className="block text-[10px] text-neutral-400">Certifications</span>
              </div>
              <div className="border-l border-white/10">
                <span className="text-base font-bold text-rose-400 font-mono">∞</span>
                <span className="block text-[10px] text-neutral-400">Ideas to Build</span>
              </div>
            </div>

            {/* Card 3: What Drives Me & Torii Quote side by side */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Drivers */}
              <div className="md:col-span-7 glass-panel p-4 rounded-2xl flex flex-col justify-between">
                <h4 className="text-xs font-semibold text-white font-display mb-3">What Drives Me</h4>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex flex-col items-start gap-1 p-2 rounded-xl bg-black/40 border border-white/5">
                    <Brain className="w-4 h-4 text-rose-400" />
                    <span className="text-[11px] font-medium text-white">Learn Continuously</span>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 rounded-xl bg-black/40 border border-white/5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px] font-medium text-white">Build Innovative Solutions</span>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 rounded-xl bg-black/40 border border-white/5">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span className="text-[11px] font-medium text-white">Create Positive Impact</span>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 rounded-xl bg-black/40 border border-white/5">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] font-medium text-white">Grow Everyday</span>
                  </div>
                </div>
              </div>

              {/* Torii Card */}
              <div className="md:col-span-5 glass-panel p-3 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[140px]">
                <img
                  src={IMAGES.toriiSunset}
                  alt="Torii Gate Sunset"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative z-10 p-2">
                  <p className="font-display italic text-sm text-white drop-shadow">
                    “A better tomorrow is a debug away.”
                  </p>
                  <div className="w-8 h-[2px] bg-rose-500 mt-2 rounded-full" />
                </div>
              </div>
            </div>

            {/* Card 4: Beyond the Screen */}
            <div className="glass-panel p-4 rounded-2xl">
              <h4 className="text-xs font-semibold text-white font-display mb-3">Beyond the Screen</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-rose-400" />
                  <span className="text-[11px] text-neutral-300">Reading Books</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1.5">
                  <Gamepad2 className="w-4 h-4 text-purple-400" />
                  <span className="text-[11px] text-neutral-300">Playing Games</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1.5">
                  <PenTool className="w-4 h-4 text-sky-400" />
                  <span className="text-[11px] text-neutral-300">Writing Stories</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] text-neutral-300">Exploring New Things</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

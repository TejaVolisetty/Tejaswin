import React from 'react';
import { SectionId } from '../types';
import { IMAGES, PERSONAL_INFO } from '../data/portfolioData';
import { Brain, Code, Cloud, BarChart3, ArrowRight } from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-20 pb-12 scroll-mt-0"
    >
      {/* Background Graphic with Scenic Anime Illustration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.heroBoyDock}
          alt="Scenic Mount Fuji Japanese Anime Landscape"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
        />
        {/* Cinematic Vignette & Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-black/60" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pt-6 lg:pt-10">
        
        {/* Top Hero Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 text-left">
            {/* Spaced Eyebrow */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span>Technology</span>
              <span className="text-rose-500 font-bold">×</span>
              <span>Analytics</span>
              <span className="text-rose-500 font-bold">×</span>
              <span>Impact</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.08]">
              Hi, I’m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-500 font-serif">
                {PERSONAL_INFO.shortName}
              </span> <br />
              Volisetty.
            </h1>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg text-neutral-200/90 max-w-xl font-light leading-relaxed drop-shadow-md">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                id="home-explore-cta"
                onClick={() => onNavigate('projects')}
                className="group px-6 py-3 rounded-full text-sm font-medium text-white bg-black/60 hover:bg-rose-950/80 border border-rose-500/50 hover:border-rose-400 transition-all duration-300 flex items-center gap-2.5 shadow-[0_0_20px_rgba(225,29,72,0.35)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Floating Zen Quote Card */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-start pt-2">
            <div className="max-w-xs text-left lg:text-right bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
              <p className="font-display italic text-lg sm:text-xl text-neutral-100 leading-snug">
                “A calm mind builds extraordinary things.”
              </p>
              <div className="w-12 h-[2px] bg-rose-500 mt-3 lg:ml-auto rounded-full shadow-[0_0_8px_#f43f5e]" />
            </div>
          </div>
        </div>

        {/* Bottom Floating Feature Cards & Quick Stats Bar */}
        <div className="pt-8 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
          {/* 4 Feature Domain Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* AI & ML */}
            <div
              onClick={() => onNavigate('skills')}
              className="glass-panel p-3.5 rounded-2xl cursor-pointer hover:border-rose-500/50 hover:bg-rose-950/20 transition-all duration-300 group flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <Brain className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">AI & ML</span>
                <span className="text-[11px] text-neutral-400">Smarter solutions</span>
              </div>
            </div>

            {/* Data Analytics */}
            <div
              onClick={() => onNavigate('skills')}
              className="glass-panel p-3.5 rounded-2xl cursor-pointer hover:border-rose-500/50 hover:bg-rose-950/20 transition-all duration-300 group flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Data Analytics</span>
                <span className="text-[11px] text-neutral-400">Data-driven insights</span>
              </div>
            </div>

            {/* Full Stack */}
            <div
              onClick={() => onNavigate('projects')}
              className="glass-panel p-3.5 rounded-2xl cursor-pointer hover:border-rose-500/50 hover:bg-rose-950/20 transition-all duration-300 group flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <Code className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Full Stack</span>
                <span className="text-[11px] text-neutral-400">End-to-end development</span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div
              onClick={() => onNavigate('certifications')}
              className="glass-panel p-3.5 rounded-2xl cursor-pointer hover:border-rose-500/50 hover:bg-rose-950/20 transition-all duration-300 group flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Cloud & DevOps</span>
                <span className="text-[11px] text-neutral-400">Scalable infrastructure</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Card on Right */}
          <div className="lg:col-span-4 glass-panel p-3.5 rounded-2xl flex items-center justify-around text-center">
            <div className="cursor-pointer" onClick={() => onNavigate('projects')}>
              <span className="text-lg font-bold text-white font-mono">7+</span>
              <span className="block text-[11px] text-neutral-400">Projects</span>
            </div>
            <div className="w-[1px] h-7 bg-white/10" />
            <div className="cursor-pointer" onClick={() => onNavigate('certifications')}>
              <span className="text-lg font-bold text-white font-mono">6+</span>
              <span className="block text-[11px] text-neutral-400">Certifications</span>
            </div>
            <div className="w-[1px] h-7 bg-white/10" />
            <div className="cursor-pointer" onClick={() => onNavigate('about')}>
              <span className="text-lg font-bold text-white font-mono">3+</span>
              <span className="block text-[11px] text-neutral-400">Years Learning</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

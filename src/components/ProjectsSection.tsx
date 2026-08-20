import React, { useState } from 'react';
import { SectionId, Project } from '../types';
import {
  IMAGES,
  PROJECTS,
  CAPSTONE_PROJECT,
} from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import {
  ArrowRight,
  Sparkles,
  Target,
  Code2,
  Cpu,
  Rocket,
  Palette,
  Server,
  TrendingUp,
} from 'lucide-react';

interface ProjectsSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-20 pb-12 scroll-mt-0 border-t border-white/5"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.heroBoyDock}
          alt="Projects Scenic Anime Landscape"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c16]/95 via-[#0b0c16]/85 to-[#0b0c16]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pt-4">
        
        {/* Top Header Row with Eyebrow, Headline & Stats Card */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <div className="flex flex-col items-start gap-2 max-w-xl">
            {/* Eyebrow */}
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span>FEATURED WORK</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-tight">
              Projects <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-500 font-serif">
                That Matter.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Turning ideas into real-world solutions with technology, creativity, and purpose.
            </p>
          </div>

          {/* Right Stats Card & Floating Quote */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="text-left lg:text-right">
              <p className="font-display italic text-sm text-neutral-200">
                “Not just projects, but problems solved.”
              </p>
            </div>

            <div className="glass-panel p-3 rounded-2xl flex items-center gap-4 text-center">
              <div>
                <span className="text-base font-bold text-white font-mono">4+</span>
                <span className="block text-[10px] text-neutral-400">Major Projects</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-white font-mono">2+</span>
                <span className="block text-[10px] text-neutral-400">Ongoing Projects</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-rose-400 font-mono">1</span>
                <span className="block text-[10px] text-neutral-400">Capstone</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-rose-400 font-mono">∞</span>
                <span className="block text-[10px] text-neutral-400">Ideas Ahead</span>
              </div>
            </div>
          </div>

        </div>

        {/* Project Cards Grid + Capstone Highlight Card */}
        <div className="pt-6 grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
          
          {/* 4 Standard Project Cards */}
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                {/* Image Banner */}
                <div className="relative h-32 w-full overflow-hidden bg-black/60">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10111e] via-transparent to-transparent" />
                  
                  {/* Category Tags */}
                  <div className="absolute bottom-2 left-2.5 flex flex-wrap gap-1">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-black/70 backdrop-blur-sm text-neutral-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white font-display mb-1.5 group-hover:text-rose-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] text-neutral-300 font-light line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* View Button */}
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                    <button
                      id={`project-btn-${proj.id}`}
                      className="text-xs font-medium text-rose-400 group-hover:text-rose-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {proj.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 1 Capstone Highlight Card */}
          <div className="xl:col-span-4 glass-panel-accent rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-xs text-rose-400 font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Capstone Project</span>
              </div>
              <span className="font-serif-jp text-rose-300/80 text-xs tracking-widest writing-vertical">
                より良い未来へ
              </span>
            </div>

            {/* Visual preview */}
            <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3 border border-rose-500/20">
              <img
                src={CAPSTONE_PROJECT.image}
                alt="Capstone Project Torii Sunset"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div>
              <h3 className="text-base font-bold text-white font-display mb-1.5">
                {CAPSTONE_PROJECT.title}
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-3">
                {CAPSTONE_PROJECT.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {CAPSTONE_PROJECT.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-[10px] bg-black/60 text-rose-300 border border-rose-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Big Action Button */}
            <button
              id="capstone-view-full-btn"
              onClick={() => setSelectedProject(CAPSTONE_PROJECT)}
              className="w-full py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] flex items-center justify-center gap-2"
            >
              <span>View Full Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Project Highlights Row */}
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* 4 Highlights */}
          <div className="lg:col-span-8 glass-panel p-3 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-2 text-center sm:text-left">
              <Target className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <span className="text-[11px] font-semibold text-white block">Real Problems</span>
                <span className="text-[10px] text-neutral-400">Real Solutions</span>
              </div>
            </div>

            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 px-2 text-center sm:text-left">
              <Code2 className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <span className="text-[11px] font-semibold text-white block">End-to-End</span>
                <span className="text-[10px] text-neutral-400">Development</span>
              </div>
            </div>

            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 px-2 text-center sm:text-left">
              <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <span className="text-[11px] font-semibold text-white block">Modern Tech</span>
                <span className="text-[10px] text-neutral-400">Stack</span>
              </div>
            </div>

            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 px-2 text-center sm:text-left">
              <Rocket className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-[11px] font-semibold text-white block">Measurable</span>
                <span className="text-[10px] text-neutral-400">Impact</span>
              </div>
            </div>
          </div>

          {/* Workflow Pipeline Step Pill */}
          <div className="lg:col-span-4 glass-panel p-2.5 rounded-2xl flex items-center justify-between text-[11px] text-neutral-300">
            <div className="flex items-center gap-1">
              <Palette className="w-3.5 h-3.5 text-rose-400" />
              <span>Design</span>
            </div>
            <ArrowRight className="w-3 h-3 text-neutral-500" />
            <div className="flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Develop</span>
            </div>
            <ArrowRight className="w-3 h-3 text-neutral-500" />
            <div className="flex items-center gap-1">
              <Server className="w-3.5 h-3.5 text-purple-400" />
              <span>Deploy</span>
            </div>
            <ArrowRight className="w-3 h-3 text-neutral-500" />
            <div className="flex items-center gap-1">
              <Rocket className="w-3.5 h-3.5 text-amber-400" />
              <span>Impact</span>
            </div>
          </div>

        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

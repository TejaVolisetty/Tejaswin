import React, { useState } from 'react';
import { SectionId } from '../types';
import {
  IMAGES,
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  SKILL_PROFICIENCY,
  TOOLS_I_USE,
} from '../data/portfolioData';
import {
  Brain,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Database,
  Cloud,
  Container,
  GitBranch,
  Eye,
  Activity,
  ArrowRight,
  TrendingUp,
  Users,
  Wrench,
  Sparkles,
} from 'lucide-react';

interface SkillsSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'core' | 'cloud'>('all');

  const filteredSkills = TECHNICAL_SKILLS.filter(
    (s) => activeTab === 'all' || s.category === activeTab
  );

  const getTechIcon = (name: string) => {
    const lname = name.toLowerCase();
    if (lname.includes('python')) return <Terminal className="w-5 h-5 text-sky-400" />;
    if (lname.includes('sql')) return <Database className="w-5 h-5 text-teal-400" />;
    if (lname.includes('excel')) return <Activity className="w-5 h-5 text-emerald-400" />;
    if (lname.includes('analytics')) return <TrendingUp className="w-5 h-5 text-emerald-400" />;
    if (lname.includes('cleaning') || lname.includes('filter')) return <Cpu className="w-5 h-5 text-teal-300" />;
    if (lname.includes('statistical') || lname.includes('analysis')) return <TrendingUp className="w-5 h-5 text-purple-400" />;
    if (lname.includes('java')) return <Code2 className="w-5 h-5 text-orange-400" />;
    if (lname.includes('react')) return <Layers className="w-5 h-5 text-cyan-400" />;
    if (lname.includes('machine learning')) return <Brain className="w-5 h-5 text-pink-400" />;
    if (lname.includes('deep learning')) return <Activity className="w-5 h-5 text-purple-400" />;
    if (lname.includes('computer vision')) return <Eye className="w-5 h-5 text-rose-400" />;
    if (lname.includes('aws')) return <Cloud className="w-5 h-5 text-amber-500" />;
    if (lname.includes('docker')) return <Container className="w-5 h-5 text-blue-500" />;
    if (lname.includes('git')) return <GitBranch className="w-5 h-5 text-orange-500" />;
    if (lname.includes('linux')) return <Terminal className="w-5 h-5 text-yellow-300" />;
    if (lname.includes('tensorflow')) return <Brain className="w-5 h-5 text-amber-500" />;
    if (lname.includes('opencv')) return <Eye className="w-5 h-5 text-indigo-400" />;
    return <Code2 className="w-5 h-5 text-rose-400" />;
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-20 pb-12 scroll-mt-0 border-t border-white/5"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.heroBoyDock}
          alt="Skills Scenic Anime Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c16]/95 via-[#0b0c16]/80 to-[#0b0c16]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pt-4">
        
        {/* Top Header & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading, Calligraphy & Quote */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            
            {/* Japanese Hanging Scroll */}
            <div className="hidden sm:flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
              <div className="font-serif-jp text-rose-400 font-bold text-sm tracking-widest">
                学びは、終わりのない旅
              </div>
              <span className="w-4 h-4 rounded bg-rose-600/80 text-white font-serif-jp text-[10px] flex items-center justify-center font-bold">
                夢
              </span>
            </div>

            {/* Eyebrow */}
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span>MY SKILLS</span>
            </div>

            {/* Display Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-tight">
              Skills <br />
              Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-500 font-serif">
                Futures.
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-200/90 max-w-md font-light leading-relaxed">
              A blend of technology, creativity, and continuous learning.
            </p>

            {/* CTA */}
            <button
              id="skills-explore-cta"
              onClick={() => onNavigate('projects')}
              className="group px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-black/60 hover:bg-rose-950/80 border border-rose-500/50 hover:border-rose-400 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(225,29,72,0.3)]"
            >
              <span>Explore My Skills</span>
              <ArrowRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Floating Quote */}
            <div className="mt-4 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-xs">
              <p className="font-display italic text-sm text-neutral-200">
                “Better Skills Brighter Tomorrow”
              </p>
              <div className="w-10 h-[2px] bg-rose-500 mt-2 rounded-full" />
            </div>
          </div>

          {/* Right Column: Technical Skills & Soft Skills Grid */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Technical Skills Card */}
            <div className="glass-panel p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <h3 className="text-base font-bold text-white font-display">Technical Skills</h3>
                </div>
                <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                  Growing Everyday <TrendingUp className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Skills Interactive Badges Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                {TECHNICAL_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-rose-500/40 hover:bg-rose-950/30 transition-all duration-300 flex flex-col items-center gap-1.5 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-black/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getTechIcon(skill.name)}
                    </div>
                    <span className="text-[11px] font-medium text-neutral-200 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="glass-panel p-4 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <h3 className="text-sm font-bold text-white font-display">Soft Skills</h3>
                </div>
                <span className="text-[10px] text-neutral-400 font-mono">
                  People × Ideas × Impact
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {SOFT_SKILLS.map((soft) => (
                  <div
                    key={soft.name}
                    className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1 text-center"
                  >
                    <div className="w-6 h-6 rounded-lg bg-rose-950/60 border border-rose-500/20 flex items-center justify-center text-rose-400">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-medium text-white">{soft.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Proficiency Bars + Tools I Use */}
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Skill Proficiency Bars */}
          <div className="lg:col-span-7 glass-panel p-4 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <h4 className="text-xs font-bold text-white font-display">Skill Proficiency</h4>
              </div>
              <span className="text-[10px] text-rose-400 font-mono">Consistent Progress</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {SKILL_PROFICIENCY.map((item) => (
                <div key={item.name} className="flex flex-col gap-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-neutral-300">{item.name}</span>
                    <span className="font-mono text-rose-400 font-medium">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.6)] transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools I Use */}
          <div className="lg:col-span-5 glass-panel p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <h4 className="text-xs font-bold text-white font-display">Tools I Use</h4>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono">
                The Right Tools, Bigger Possibilities
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {TOOLS_I_USE.map((tool) => (
                <div
                  key={tool.name}
                  className="p-2 rounded-xl bg-black/40 border border-white/5 hover:border-rose-500/40 transition-all flex flex-col items-center gap-1 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-black/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Wrench className="w-3 h-3 text-rose-400" />
                  </div>
                  <span className="text-[10px] font-medium text-neutral-300 text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Next Chapter Brush Button */}
            <div className="mt-3 pt-2 border-t border-white/5 flex justify-end">
              <button
                id="skills-next-dream-cta"
                onClick={() => onNavigate('projects')}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-rose-600 hover:bg-rose-700 shadow-[0_0_15px_rgba(225,29,72,0.5)] flex items-center gap-2 transition-all"
              >
                <span className="font-serif-jp">次の夢へ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

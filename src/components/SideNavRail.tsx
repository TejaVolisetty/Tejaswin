import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

interface SideNavRailProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onNextSection: () => void;
}

const SECTIONS: { id: SectionId; num: string; label: string }[] = [
  { id: 'home', num: '01', label: 'Home' },
  { id: 'about', num: '02', label: 'About' },
  { id: 'skills', num: '03', label: 'Skills' },
  { id: 'projects', num: '04', label: 'Projects' },
  { id: 'experience', num: '05', label: 'Experience' },
  { id: 'certifications', num: '06', label: 'Certifications' },
  { id: 'contact', num: '07', label: 'Contact' },
];

export const SideNavRail: React.FC<SideNavRailProps> = ({
  activeSection,
  onNavigate,
  onNextSection,
}) => {
  return (
    <>
      {/* Desktop Left Stepper Rail */}
      <div
        id="side-nav-rail"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-start gap-5 pointer-events-auto select-none"
      >
        <div className="relative flex flex-col gap-4 pl-3">
          {/* Vertical connecting line */}
          <div className="absolute left-[3px] top-1 bottom-1 w-[1px] bg-gradient-to-b from-white/20 via-rose-500/40 to-white/20" />

          {SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`side-step-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className="group flex items-center gap-3 text-left transition-all relative py-0.5"
              >
                {/* Step Indicator Dot */}
                <div className="relative -ml-[13px] flex items-center justify-center">
                  {isActive ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e] ring-2 ring-rose-500/30" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/90 group-hover:scale-125 transition-all" />
                  )}
                </div>

                {/* Step Number & Label */}
                <div className="flex flex-col">
                  <span
                    className={`text-[11px] font-mono tracking-wider transition-colors ${
                      isActive ? 'text-rose-400 font-semibold' : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`text-xs transition-colors ${
                      isActive ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scroll To Explore Button */}
        <div className="mt-4 pt-3 flex flex-col items-center gap-1.5 pl-1">
          <span className="text-[10px] text-neutral-400 font-light tracking-wide text-center">
            Scroll<br />to explore
          </span>
          <button
            id="scroll-explore-button"
            onClick={onNextSection}
            title="Next section"
            className="w-7 h-7 rounded-full border border-white/20 bg-black/40 hover:bg-rose-950/60 hover:border-rose-500/60 flex items-center justify-center transition-all group shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          >
            <ArrowDown className="w-3.5 h-3.5 text-neutral-300 group-hover:text-rose-400 transition-colors animate-bounce" />
          </button>
        </div>
      </div>

      {/* Mobile Floating Bottom Bar */}
      <div className="fixed bottom-3 left-4 right-4 z-30 md:hidden flex items-center justify-between px-3 py-2 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="flex items-center gap-1 overflow-x-auto py-1">
          {SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-2.5 py-1 rounded-xl text-xs whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-rose-600/90 text-white font-medium shadow-[0_0_12px_rgba(225,29,72,0.6)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

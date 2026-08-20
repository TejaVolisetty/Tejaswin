import React from 'react';
import { SectionId } from '../types';
import { AudioZenPlayer } from './AudioZenPlayer';
import { Flower2, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  sakuraEnabled: boolean;
  onToggleSakura: () => void;
}

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  sakuraEnabled,
  onToggleSakura,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
      {/* Brand Logo with Japanese Seal */}
      <div
        id="navbar-logo-button"
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <span className="font-script text-3xl sm:text-4xl text-white tracking-wide transition-transform group-hover:scale-105">
          Teja
        </span>
        <span className="w-6 h-6 rounded bg-rose-600/90 text-white font-serif-jp text-xs flex items-center justify-center shadow-[0_0_12px_rgba(225,29,72,0.6)] font-bold">
          夢
        </span>
      </div>

      {/* Center Nav Links */}
      <nav id="navbar-links" className="hidden md:flex items-center gap-7 lg:gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`relative text-sm font-medium transition-colors py-1 ${
                isActive ? 'text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Sakura Petals Toggle */}
        <button
          id="sakura-toggle-button"
          onClick={onToggleSakura}
          title={sakuraEnabled ? "Pause Sakura Petals" : "Enable Sakura Petals"}
          className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-full text-xs font-medium flex items-center gap-1 transition-all border ${
            sakuraEnabled
              ? 'bg-rose-950/40 border-rose-500/40 text-rose-300'
              : 'bg-black/30 border-white/10 text-neutral-400 hover:text-rose-300'
          }`}
        >
          <Flower2 className={`w-3.5 h-3.5 ${sakuraEnabled ? 'text-rose-400 animate-spin-slow' : ''}`} />
          <span className="hidden lg:inline">{sakuraEnabled ? "Sakura" : "Sakura"}</span>
        </button>

        {/* Ambient Zen Audio */}
        <AudioZenPlayer />

        {/* Let's Connect CTA Button matching exact screenshot */}
        <button
          id="navbar-connect-button"
          onClick={() => onNavigate('contact')}
          className="relative group px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-black/60 hover:bg-rose-950/60 border border-white/15 hover:border-rose-500/60 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping absolute left-3.5" />
          <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
          <span>Let's Connect</span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
        </button>
      </div>
    </header>
  );
};

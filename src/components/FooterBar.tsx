import React from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Twitter, Youtube, Instagram, Sparkles, Mail } from 'lucide-react';

interface FooterBarProps {
  activeSection: SectionId;
  onNextSection?: () => void;
}

export const FooterBar: React.FC<FooterBarProps> = ({ activeSection, onNextSection }) => {
  return (
    <footer className="w-full py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 bg-black/70 backdrop-blur-md text-xs text-neutral-400 z-30">
      {/* Left side motif + tagline */}
      <div className="flex items-center gap-3">
        {/* Red Japanese Flower/Shuriken Crest */}
        <div className="w-5 h-5 rounded-full bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.4)]">
          <Sparkles className="w-3 h-3 text-rose-400" />
        </div>

        {activeSection === 'home' && (
          <span className="tracking-wide">
            <span className="text-white font-medium">Discipline Today</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-rose-400 font-medium">Dreams Tomorrow</span>
          </span>
        )}

        {activeSection === 'about' && (
          <span className="tracking-wide">
            <span className="text-white font-medium">Build</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-white font-medium">Learn</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-white font-medium">Create</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-rose-400 font-medium">Inspire</span>
          </span>
        )}

        {activeSection === 'skills' && (
          <div className="flex items-center gap-4 flex-wrap">
            <span className="italic font-display text-neutral-300">Same Tools. New Dreams.</span>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <span className="hidden md:inline text-rose-300 font-mono">∞ Curiosity</span>
            <span className="hidden md:inline text-neutral-300">100% Commitment</span>
            <span className="hidden md:inline text-neutral-400">Always Learning</span>
          </div>
        )}

        {activeSection === 'projects' && (
          <span className="tracking-wide">
            <span className="text-white font-medium">Build</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-white font-medium">Learn</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-white font-medium">Share</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-rose-400 font-medium">Grow</span>
          </span>
        )}

        {activeSection === 'experience' && (
          <span className="tracking-wide">
            <span className="text-neutral-300">Built with Passion</span>
            <span className="text-neutral-600 mx-2">—</span>
            <span className="text-rose-400 font-medium">Turning Experience into Opportunity</span>
          </span>
        )}

        {activeSection === 'certifications' && (
          <span className="tracking-wide italic text-neutral-300 font-display">
            “Today a Learner, Tomorrow a Leader.” <span className="not-italic text-rose-400 font-sans font-medium text-[11px] ml-1.5">— TEJA SWIN VOLISETTY</span>
          </span>
        )}

        {activeSection === 'contact' && (
          <span className="tracking-wide">
            <span className="text-white font-medium">Build</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-white font-medium">Learn</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-white font-medium">Create</span>
            <span className="text-neutral-500 mx-2">×</span>
            <span className="text-rose-400 font-medium">Inspire</span>
          </span>
        )}
      </div>

      {/* Right side social links and author info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="VOLISETTY TEJASWIN | LinkedIn"
            className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-sky-400/60 hover:text-sky-400 hover:bg-sky-950/30 flex items-center justify-center text-neutral-400 transition-all"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="TejaVolisetty (TEJASWIN) | GitHub"
            className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-white/60 hover:text-white hover:bg-neutral-800 flex items-center justify-center text-neutral-400 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            title={`Email: ${PERSONAL_INFO.email}`}
            className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-rose-400/60 hover:text-rose-400 hover:bg-rose-950/30 flex items-center justify-center text-neutral-400 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
          {PERSONAL_INFO.xTwitter && (
            <a
              href={PERSONAL_INFO.xTwitter}
              target="_blank"
              rel="noopener noreferrer"
              title="X / Twitter"
              className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-white/60 hover:text-white flex items-center justify-center text-neutral-400 transition-all"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          )}
          {PERSONAL_INFO.youtube && (
            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-red-500/60 hover:text-red-500 flex items-center justify-center text-neutral-400 transition-all"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          )}
          {PERSONAL_INFO.instagram && (
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-7 h-7 rounded-full bg-black/60 border border-white/10 hover:border-rose-400/60 hover:text-rose-400 flex items-center justify-center text-neutral-400 transition-all"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <span className="text-neutral-600 hidden sm:inline">|</span>

        {activeSection === 'contact' ? (
          <span className="text-neutral-300">
            Thank you for visiting <span className="text-neutral-600">—</span> <span className="text-rose-400 font-serif-jp">See you in the next chapter ⛩️</span>
          </span>
        ) : (
          <span className="text-neutral-300">
            Built with Passion by <span className="text-rose-400 font-medium hover:underline cursor-pointer">Teja</span>
          </span>
        )}
      </div>
    </footer>
  );
};

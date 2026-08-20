import React, { useState } from 'react';
import { SectionId, Certification } from '../types';
import {
  IMAGES,
  CERTIFICATIONS,
  UNLOCKED_SKILL_CATEGORIES,
} from '../data/portfolioData';
import { CredentialModal } from './CredentialModal';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cloud,
  Brain,
  Database,
  Cog,
  Share2,
  BarChart3,
  Code2,
  Shield,
  BookOpen,
  Award,
} from 'lucide-react';

interface CertificationsSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [page, setPage] = useState(0);

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'cloud':
        return <Cloud className="w-3.5 h-3.5 text-sky-400" />;
      case 'brain':
        return <Brain className="w-3.5 h-3.5 text-rose-400" />;
      case 'database':
        return <Database className="w-3.5 h-3.5 text-emerald-400" />;
      case 'settings':
        return <Cog className="w-3.5 h-3.5 text-amber-400" />;
      case 'share-2':
        return <Share2 className="w-3.5 h-3.5 text-purple-400" />;
      case 'bar-chart':
        return <BarChart3 className="w-3.5 h-3.5 text-pink-400" />;
      case 'code':
        return <Code2 className="w-3.5 h-3.5 text-blue-400" />;
      case 'shield':
        return <Shield className="w-3.5 h-3.5 text-teal-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-rose-400" />;
    }
  };

  const getIssuerLogo = (issuer: string) => {
    switch (issuer.toLowerCase()) {
      case 'microsoft':
        return (
          <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
            <div className="bg-[#F25022] rounded-[1px]" />
            <div className="bg-[#7FBA00] rounded-[1px]" />
            <div className="bg-[#00A4EF] rounded-[1px]" />
            <div className="bg-[#FFB900] rounded-[1px]" />
          </div>
        );
      case 'oracle':
        return <div className="w-4 h-2.5 rounded-full border-2 border-red-500" />;
      case 'aviatrix':
        return <div className="w-3.5 h-3.5 rotate-45 bg-orange-500 rounded-[2px]" />;
      case 'mongodb':
        return <div className="w-3 h-4 bg-emerald-500 rounded-full" />;
      case 'github':
        return <div className="w-3.5 h-3.5 rounded-full bg-white text-black text-[8px] font-bold flex items-center justify-center">GH</div>;
      default:
        return <Award className="w-3.5 h-3.5 text-rose-400" />;
    }
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-20 pb-12 scroll-mt-0 border-t border-white/5"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.heroBoyDock}
          alt="Certifications Scenic Anime Landscape"
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
              <span>CERTIFICATIONS</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-tight">
              Certified <br />
              for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-500 font-serif">Bigger</span> <br />
              Tomorrow.
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Continuous learning fuels my journey. These certifications represent my commitment to growth, innovation, and real-world impact.
            </p>

            <button
              id="certs-view-credentials-btn"
              onClick={() => setSelectedCert(CERTIFICATIONS[0])}
              className="mt-1 group px-5 py-2 rounded-full text-xs font-medium text-white bg-black/60 hover:bg-rose-950/80 border border-rose-500/50 hover:border-rose-400 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(225,29,72,0.3)]"
            >
              <span>View My Credentials</span>
              <ArrowRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Top Right Stats Pill */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <div className="text-left lg:text-right">
              <p className="font-display italic text-sm text-neutral-200">
                “A certified mind builds limitless opportunities.”
              </p>
            </div>

            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
              LEARN × CERTIFY × GROW × IMPACT
            </span>

            <div className="glass-panel p-3 rounded-2xl flex items-center gap-4 text-center">
              <div>
                <span className="text-base font-bold text-white font-mono">7+</span>
                <span className="block text-[10px] text-neutral-400">Certifications</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-white font-mono">3</span>
                <span className="block text-[10px] text-neutral-400">Cloud Platforms</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-white font-mono">5+</span>
                <span className="block text-[10px] text-neutral-400">Skill Domains</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div>
                <span className="text-base font-bold text-rose-400 font-mono">∞</span>
                <span className="block text-[10px] text-neutral-400">Endless Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="pt-6">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
                <h3 className="text-sm font-bold text-white font-display">My Certifications</h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-neutral-400 font-mono">
                  VALID SKILLS. REAL IMPACT.
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="p-1 rounded-lg bg-black/40 text-neutral-400 hover:text-white disabled:opacity-30 border border-white/5"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page >= 1}
                    className="p-1 rounded-lg bg-black/40 text-neutral-400 hover:text-white disabled:opacity-30 border border-white/5"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 8 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-rose-500/40 hover:bg-rose-950/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Top Row: Issuer Logo & Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-black/60 flex items-center justify-center">
                          {getIssuerLogo(cert.issuer)}
                        </div>
                        <span className="text-[10px] font-medium text-neutral-300 bg-white/5 px-2 py-0.5 rounded">
                          {cert.issuerBadge}
                        </span>
                      </div>
                      {cert.code && (
                        <span className="text-[10px] font-mono text-rose-400 font-semibold">
                          {cert.code}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h4 className="text-xs font-bold text-white group-hover:text-rose-300 transition-colors leading-snug mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-neutral-400 line-clamp-2 leading-relaxed">
                      {cert.subtitle}
                    </p>
                  </div>

                  {/* Bottom Date & Verified Status */}
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-neutral-400 font-mono">{cert.date}</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Verified ✓
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Unlocked Banner */}
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          <div className="lg:col-span-8 glass-panel p-3 rounded-2xl">
            <div className="text-[10px] font-semibold text-neutral-300 font-display mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-rose-400" />
              Skills Unlocked
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {UNLOCKED_SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="p-1.5 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2 text-[10px] text-neutral-300"
                >
                  {getCategoryIcon(cat.icon)}
                  <span className="truncate">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 glass-panel p-3 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-white block">Keep Learning.</span>
              <span className="text-[10px] text-neutral-400">Keep Building. Keep Evolving.</span>
            </div>
            <button
              id="certs-explore-more-btn"
              onClick={() => onNavigate('contact')}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-rose-600 hover:bg-rose-700 transition-all flex items-center gap-1.5"
            >
              <span>Explore More</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>

      {/* Credential Modal */}
      <CredentialModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

import React from 'react';
import { Certification } from '../types';
import { X, CheckCircle, ExternalLink, ShieldCheck, Award, Calendar, Sparkles } from 'lucide-react';

interface CredentialModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div
      id="credential-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#10111e] border border-rose-500/30 p-6 shadow-[0_0_50px_rgba(225,29,72,0.3)] text-left"
      >
        {/* Close Button */}
        <button
          id="credential-modal-close"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/50 text-neutral-400 hover:text-white hover:bg-rose-950/60 border border-white/10 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Issuer Badge & Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white border border-white/10 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-rose-400" />
            {cert.issuer}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Credential
          </span>
        </div>

        {/* Certificate Title */}
        <h3 className="text-xl font-bold text-white font-display mb-1">
          {cert.title}
        </h3>
        <p className="text-xs text-neutral-400 mb-4">
          {cert.subtitle}
        </p>

        {/* Verification Details Box */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 mb-5 text-xs">
          <div className="flex justify-between items-center text-neutral-300">
            <span className="text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Issued Date
            </span>
            <span className="font-mono text-white font-medium">{cert.date}</span>
          </div>

          {cert.credentialId && (
            <div className="flex justify-between items-center text-neutral-300">
              <span className="text-neutral-400">Credential ID</span>
              <span className="font-mono text-rose-400">{cert.credentialId}</span>
            </div>
          )}

          <div className="flex justify-between items-center text-neutral-300">
            <span className="text-neutral-400">Verification Status</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Active & Authentic
            </span>
          </div>
        </div>

        {/* Verified Skills */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            Validated Skills & Competencies
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs bg-rose-950/40 text-rose-200 border border-rose-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="flex justify-end">
          <a
            href={cert.verifyUrl || "https://learn.microsoft.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,29,72,0.4)]"
          >
            <span>Verify on Issuer Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

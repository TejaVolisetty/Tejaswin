import React from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Cpu,
  Sparkles,
  AlertTriangle,
  Zap,
  GitBranch,
  ShieldCheck,
  Server,
  Monitor,
  HardDrive
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0f101c] border border-rose-500/30 p-5 sm:p-7 shadow-[0_0_60px_rgba(225,29,72,0.3)] text-left scrollbar-thin scrollbar-thumb-rose-500/30"
      >
        {/* Close Button */}
        <button
          id="project-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-neutral-300 hover:text-white hover:bg-rose-950/80 border border-white/10 transition-all shadow-lg"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Image Banner */}
        <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f101c] via-[#0f101c]/30 to-transparent" />
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/80 backdrop-blur-md text-rose-300 border border-rose-500/30 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Category */}
        <div className="flex items-center gap-2 text-xs text-rose-400 font-mono font-medium mb-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{project.category}</span>
          {project.isCapstone && (
            <span className="px-2.5 py-0.5 rounded-full bg-rose-600/30 text-rose-300 border border-rose-500/40 text-[9px] uppercase font-bold tracking-wider">
              Capstone Flagship
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
          {project.fullDescription || project.description}
        </p>

        {/* Problem Statement Summary Section */}
        {project.problemStatement && (
          <div className="mb-6 p-4.5 rounded-2xl bg-black/50 border border-white/10 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Problem Statement & Architectural Solutions
            </h4>

            {/* Challenges */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">
                Key Industry Challenges
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.problemStatement.challenges.map((c, i) => (
                  <div key={i} className="p-3 rounded-xl bg-red-950/20 border border-red-500/20 text-xs">
                    <span className="font-semibold text-red-300 block mb-1">{c.title}</span>
                    <span className="text-neutral-400 font-light text-[11px] leading-snug block">{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">
                Engineered Solutions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.problemStatement.solutions.map((s, i) => (
                  <div key={i} className="p-3 rounded-xl bg-rose-950/25 border border-rose-500/30 text-xs">
                    <span className="font-semibold text-rose-300 block mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      {s.title}
                    </span>
                    <span className="text-neutral-300 font-light text-[11px] leading-snug block">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI & Recommendation Workflow Section */}
        {project.workflow && (
          <div className="mb-6 p-4.5 rounded-2xl bg-black/50 border border-white/10 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 text-rose-400">
              <GitBranch className="w-4 h-4 text-sky-400" />
              AI & Recommendation Workflow Pipeline
            </h4>

            {/* Pipeline Stage Pills */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-200">
              {project.workflow.pipeline.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2.5 py-1 rounded-lg bg-rose-950/60 border border-rose-500/30 text-[11px] font-mono text-rose-300">
                    {step}
                  </span>
                  {idx < project.workflow.pipeline.length - 1 && (
                    <span className="text-rose-500/70 font-bold">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Two-Tower Math Equation Box */}
            {project.workflow.equation && (
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-black/60 border border-rose-500/40 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 font-semibold block">
                  Two-Tower Session Scoring Formula
                </span>
                <div className="font-mono text-xs sm:text-sm text-white font-semibold tracking-wide bg-black/60 p-2.5 rounded-lg border border-white/10 overflow-x-auto text-rose-200">
                  {project.workflow.equation}
                </div>
                {project.workflow.equationNote && (
                  <span className="text-[11px] text-neutral-400 italic block font-light">
                    {project.workflow.equationNote}
                  </span>
                )}
              </div>
            )}

            {/* Stages Breakdown */}
            <div className="space-y-2">
              {project.workflow.stages.map((stage, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-950 text-rose-400 border border-rose-500/30 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-white block mb-0.5">{stage.name}</span>
                    <span className="text-neutral-300 font-light text-[11px] leading-relaxed block">{stage.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive / Visual System Architecture Flow Diagram for Discovery Engine */}
        {project.id.includes('discovery-engine') && (
          <div className="mb-6 p-4.5 rounded-2xl bg-black/60 border border-rose-500/30 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 text-rose-400">
              <Zap className="w-4 h-4 text-amber-400" />
              System Architecture & Event Execution Flow
            </h4>

            <div className="p-4 rounded-xl bg-[#090a12] border border-white/10 text-xs space-y-4">
              {/* Client Layer */}
              <div className="text-center p-2.5 rounded-lg bg-rose-950/40 border border-rose-500/40 font-semibold text-white">
                👤 User / Browser (React 19 + Vite + Tailwind v4)
              </div>

              {/* 3 Main Endpoints Branch */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Branch 1 */}
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/80 text-amber-300 border border-amber-500/40">
                    POST /events
                  </span>
                  <div className="text-[10px] text-neutral-400 space-y-1">
                    <p>➔ Anonymize PII</p>
                    <p>➔ DPDP Guardrail</p>
                    <p className="text-rose-300 font-mono">/logs/audit_log.csv</p>
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/80 text-sky-300 border border-sky-500/40">
                    GET /recommendations
                  </span>
                  <div className="text-[10px] text-neutral-400 space-y-1">
                    <p>Consent Granted?</p>
                    <p className="text-emerald-400 font-medium">Yes: Two-Tower Scorer</p>
                    <p className="text-amber-400 font-medium">No: Popularity Fallback</p>
                  </div>
                </div>

                {/* Branch 3 */}
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/80 text-purple-300 border border-purple-500/40">
                    GET /search
                  </span>
                  <div className="text-[10px] text-neutral-400 space-y-1">
                    <p>SentenceTransformer</p>
                    <p className="text-purple-300 font-mono">FAISS IndexFlatIP (&lt;5ms)</p>
                    <p>➔ Two-Tower Scorer</p>
                  </div>
                </div>
              </div>

              {/* Execution Guardrails & Response */}
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 text-center space-y-2">
                <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-neutral-200">
                  <span className="px-2 py-1 rounded bg-black/60 border border-white/10">35% Category Diversity Guardrail</span>
                  <span>➔</span>
                  <span className="px-2 py-1 rounded bg-black/60 border border-white/10">Explainability Engine (Rule-based)</span>
                  <span>➔</span>
                  <span className="px-2 py-1 rounded bg-rose-950/80 text-rose-300 border border-rose-500/40">@track_latency Guardrail</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-mono pt-1">
                  ⚡ JSON Response returned in &lt;80ms
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
              Key Features & Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categorized Tech Stack */}
        {project.techStackCategorized ? (
          <div className="mb-6 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-rose-400" />
              Categorized Technology Stack
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Backend */}
              {project.techStackCategorized.backend && (
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs">
                  <span className="font-mono text-rose-400 text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Server className="w-3 h-3" /> Backend
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStackCategorized.backend.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-neutral-200 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Frontend */}
              {project.techStackCategorized.frontend && (
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs">
                  <span className="font-mono text-sky-400 text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Monitor className="w-3 h-3" /> Frontend
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStackCategorized.frontend.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-neutral-200 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Infrastructure */}
              {project.techStackCategorized.infrastructure && (
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs">
                  <span className="font-mono text-purple-400 text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                    <HardDrive className="w-3 h-3" /> Infrastructure
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStackCategorized.infrastructure.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-neutral-200 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          project.techStack && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-rose-400" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs bg-black/50 text-neutral-200 border border-white/10 flex items-center gap-1"
                  >
                    <Cpu className="w-3 h-3 text-rose-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )
        )}

        {/* Metrics Highlight */}
        {project.metrics && (
          <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/40 mb-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-xs text-neutral-300 font-medium">Benchmark Performance</span>
            <span className="text-xs font-mono text-rose-300 font-bold text-center sm:text-right">{project.metrics}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-full text-xs font-medium text-white bg-black/70 hover:bg-black border border-white/20 flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Github className="w-4 h-4 text-neutral-200" />
              <span>Source Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-full text-xs font-medium text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, CheckCircle2, AlertTriangle, Dumbbell, ShieldCheck, Play } from 'lucide-react';

export interface ExerciseDetail {
  name: string;
  category: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  tempo: string;
  cues: string[];
  commonFaults: string[];
  videoThumbnail: string;
}

interface ExerciseModalProps {
  exercise: ExerciseDetail | null;
  onClose: () => void;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({ exercise, onClose }) => {
  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-brand-950 border border-white/20 rounded-lg shadow-2xl overflow-hidden my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-brand-400 hover:text-white rounded-full bg-black/70 hover:bg-black transition-colors"
          aria-label="Close Movement Guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Visual Header */}
        <div className="relative h-56 sm:h-64 w-full bg-brand-900 overflow-hidden">
          <img
            src={exercise.videoThumbnail}
            alt={exercise.name}
            className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-black/60" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center mb-3">
              <Play className="w-6 h-6 text-accent-gold fill-accent-gold ml-1" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent-champagne bg-black/60 px-3 py-1 rounded-sm border border-white/10">
              4K Multi-Angle Biomechanics Masterclass
            </span>
          </div>

          <div className="absolute bottom-4 left-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-gold">
              {exercise.category}
            </span>
            <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight mt-0.5">
              {exercise.name}
            </h3>
          </div>
        </div>

        {/* Biomechanics Breakdown */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Muscle Recruitment Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-sm bg-brand-900/60 border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400 block mb-1">
                Primary Target Activation:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {exercise.primaryMuscles.map((m, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-0.5 rounded-sm bg-accent-gold/15 text-accent-champagne border border-accent-gold/30">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-sm bg-brand-900/60 border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400 block mb-1">
                Stabilizers & Synergists:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {exercise.secondaryMuscles.map((m, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-0.5 rounded-sm bg-white/5 text-brand-300 border border-white/10">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Execution Cues */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent-gold" />
              <span>Biomechanical Setup & Execution Cues:</span>
            </h4>
            <div className="space-y-2">
              {exercise.cues.map((cue, idx) => (
                <div key={idx} className="p-3 rounded-sm bg-brand-900/40 border border-white/5 text-xs text-brand-200 flex items-start gap-2.5">
                  <span className="font-mono text-accent-gold font-bold">{idx + 1}.</span>
                  <span className="font-light leading-relaxed">{cue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Faults to Avoid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Common Faults to Eliminate:</span>
            </h4>
            <div className="space-y-2">
              {exercise.commonFaults.map((fault, idx) => (
                <div key={idx} className="p-3 rounded-sm bg-red-950/20 border border-red-500/20 text-xs text-brand-300 flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span className="font-light leading-relaxed">{fault}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-brand-900 border-t border-white/10 flex items-center justify-between text-xs font-mono text-brand-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent-gold" />
            <span>FIT90 Biomechanical Certification Standard</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white text-brand-950 font-bold uppercase rounded-sm hover:bg-accent-champagne transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Play, ShieldCheck, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fade-in">
      <div className="relative w-full max-w-4xl bg-brand-950 border border-white/20 rounded-lg overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-brand-400 hover:text-white rounded-full bg-black/70 hover:bg-black transition-colors"
          aria-label="Close Brand Film"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Visual Simulation Canvas */}
        <div className="relative aspect-video w-full bg-brand-950 flex flex-col items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85"
            alt="FIT90 Brand Film Cinema"
            className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-black/60" />

          {/* Cinematic Play / Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center mb-6 group cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-accent-gold fill-accent-gold ml-1" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono tracking-widest text-accent-champagne uppercase mb-3">
              <Sparkles className="w-3 h-3 text-accent-gold" />
              <span>Official 90-Day Documentary Trailer</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight max-w-xl">
              "THE ARCHITECTURE OF PHYSICAL EXCELLENCE"
            </h3>
            <p className="text-xs sm:text-sm text-brand-300 font-light mt-2 max-w-md">
              A cinematic look into the daily training, metabolic science, and cognitive discipline of FIT90 athletes across 14 countries.
            </p>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-5 sm:p-6 bg-brand-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-400">
            <ShieldCheck className="w-4 h-4 text-accent-gold" />
            <span>Ready to write your next 90 days?</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-accent-champagne text-brand-950 font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-lg"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
};


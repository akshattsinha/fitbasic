import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface AwwwardsFinalProps {
  onOpenCheckout: () => void;
}

export const AwwwardsFinal: React.FC<AwwwardsFinalProps> = ({ onOpenCheckout }) => {
  return (
    <>
      {/* SECTION 07 — FINAL CTA */}
      <section className="relative min-h-[85vh] w-full flex flex-col justify-between overflow-hidden bg-cream-50 border-t border-forest/10">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <div className="absolute inset-0 bg-noise opacity-40 z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-rose/60 via-lavender/50 to-transparent blur-[130px] animate-mesh-2" />
          <div className="absolute bottom-0 left-0 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-peach/65 via-powder/45 to-transparent blur-[125px] animate-mesh-1" />
        </div>

        {/* Full-Width Natural Light Photograph Canvas */}
        <div className="absolute inset-0 z-0 opacity-80">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2400&q=90"
            alt="FIT90 Transformation Finale in Natural Warm Light"
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.94]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/40" />
        </div>

        {/* Space top */}
        <div className="w-full" />

        {/* Center Campaign Statement */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center my-auto py-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-peach-dark" />
            <span className="text-[11px] font-mono uppercase tracking-luxury text-forest/70 font-medium">
              Spring 2026 Registration
            </span>
          </div>

          <h2 className="font-serif text-5xl sm:text-8xl lg:text-9xl text-forest uppercase tracking-tight leading-[0.92] mb-12 font-normal">
            YOUR NEXT 90 DAYS <br />
            <span className="italic font-light text-forest/75">START HERE.</span>
          </h2>

          <div>
            <button
              onClick={onOpenCheckout}
              className="group inline-flex items-center gap-3 px-10 sm:px-14 py-5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:shadow-glass-hover hover:scale-[1.02] shadow-elevated"
            >
              <span>START FIT90</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Space bottom */}
        <div className="w-full" />
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="bg-cream py-14 border-t border-forest/10 text-xs font-mono tracking-luxury text-forest/50 uppercase">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl tracking-tight text-forest normal-case">
              FIT<span className="italic font-light text-forest/70">90</span>
            </span>
            <span className="text-forest/20">•</span>
            <span className="text-[11px] text-forest/60">A Lifestyle Architecture Company</span>
          </div>

          <div className="flex items-center gap-8 text-[11px]">
            <a href="#philosophy" className="hover:text-forest transition-colors">Philosophy</a>
            <a href="#journey" className="hover:text-forest transition-colors">The 90 Days</a>
            <a href="#experience" className="hover:text-forest transition-colors">The System</a>
            <a href="#stories" className="hover:text-forest transition-colors">Results</a>
            <a href="#pricing" className="hover:text-forest transition-colors">Tuition</a>
          </div>

          <div className="text-[11px] text-forest/40">
            © 2026 FIT90 Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

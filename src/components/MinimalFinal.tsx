import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MinimalFinalProps {
  onOpenCheckout: () => void;
}

export const MinimalFinal: React.FC<MinimalFinalProps> = ({ onOpenCheckout }) => {
  return (
    <>
      {/* 06. FINAL STATEMENT */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-between overflow-hidden bg-noir border-t border-white/[0.06]">
        {/* Full-Screen Dramatic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2400&q=90"
            alt="FIT90 Transformation Finale"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.3] brightness-[0.32]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/70" />
        </div>

        {/* Space top */}
        <div className="w-full" />

        {/* Center Campaign Statement */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center my-auto">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-6">
            The Decision
          </p>

          <h2 className="font-serif text-5xl sm:text-8xl lg:text-9xl text-ivory uppercase tracking-tight leading-[0.95] mb-12 font-normal">
            YOUR NEXT 90 DAYS <br />
            <span className="italic font-light text-ivory/80">START NOW.</span>
          </h2>

          <div>
            <button
              onClick={onOpenCheckout}
              className="group inline-flex items-center gap-3 px-10 sm:px-14 py-5 bg-ivory text-noir text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-white shadow-2xl"
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
      <footer className="bg-noir py-12 border-t border-white/[0.06] text-xs font-mono tracking-luxury text-ivory/40 uppercase">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl tracking-tight text-ivory normal-case">
              FIT<span className="italic">90</span>
            </span>
            <span className="text-ivory/20">•</span>
            <span className="text-[11px]">Lifestyle Architecture</span>
          </div>

          <div className="flex items-center gap-8 text-[11px]">
            <a href="#philosophy" className="hover:text-ivory transition-colors">Philosophy</a>
            <a href="#journey" className="hover:text-ivory transition-colors">Journey</a>
            <a href="#offer" className="hover:text-ivory transition-colors">Enrollment</a>
          </div>

          <div className="text-[11px] text-ivory/30">
            © 2026 FIT90 Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};


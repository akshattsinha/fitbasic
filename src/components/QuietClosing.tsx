import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface QuietClosingProps {
  onOpenCheckout: () => void;
}

export const QuietClosing: React.FC<QuietClosingProps> = ({ onOpenCheckout }) => {
  return (
    <>
      {/* 08. CLOSING HERO CANVAS */}
      <section className="relative min-h-[85vh] w-full flex flex-col justify-between overflow-hidden bg-champagne border-t border-[#343630]/[0.08]">
        {/* Full-Width Natural Light Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2400&q=90"
            alt="FIT90 Transformation Finale in Natural Warm Light"
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/60 to-transparent" />
        </div>

        {/* Top Space */}
        <div className="w-full" />

        {/* Center Campaign Statement */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center my-auto py-16">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-6">
            The Next Step
          </p>

          <h2 className="font-serif text-5xl sm:text-8xl lg:text-9xl text-charcoal uppercase tracking-tight leading-[0.95] mb-12 font-normal">
            YOUR NEXT CHAPTER <br />
            <span className="italic font-light text-charcoal/70">STARTS HERE.</span>
          </h2>

          <div>
            <button
              onClick={onOpenCheckout}
              className="group inline-flex items-center gap-3 px-10 sm:px-14 py-5 bg-charcoal text-ivory text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-charcoal/90 shadow-elevated"
            >
              <span>BEGIN YOUR FIT90 JOURNEY</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Space */}
        <div className="w-full" />
      </section>

      {/* ELEGANT MINIMAL FOOTER */}
      <footer className="bg-ivory py-14 border-t border-[#343630]/[0.08] text-xs font-mono tracking-luxury text-charcoal/50 uppercase">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl tracking-tight text-charcoal normal-case">
              FIT<span className="italic font-light">90</span>
            </span>
            <span className="text-charcoal/30">•</span>
            <span className="text-[11px] text-charcoal/60">Quiet Luxury Lifestyle Architecture</span>
          </div>

          <div className="flex items-center gap-8 text-[11px]">
            <a href="#philosophy" className="hover:text-charcoal transition-colors">Philosophy</a>
            <a href="#journey" className="hover:text-charcoal transition-colors">Journey</a>
            <a href="#pricing" className="hover:text-charcoal transition-colors">Enrollment</a>
          </div>

          <div className="text-[11px] text-charcoal/40">
            © 2026 FIT90 Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};


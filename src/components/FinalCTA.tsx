import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Globe, Heart } from 'lucide-react';

interface FinalCTAProps {
  onOpenCheckout: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenCheckout }) => {
  return (
    <>
      {/* Dramatic Closing Hero Section */}
      <section className="relative py-28 sm:py-40 bg-brand-950 overflow-hidden border-b border-white/10">
        {/* Cinematic Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
            alt="FIT90 Transformation Finale"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/70 to-brand-950/90" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-accent-gold/10 blur-[150px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-3.5 h-3.5 text-accent-champagne" />
            <span className="text-[11px] font-mono tracking-widest text-brand-300 uppercase">
              Spring 2026 Cohort Registration
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.95] mb-8">
            THE NEXT 90 DAYS <br />
            <span className="font-serif italic font-normal gold-gradient-text">
              WILL PASS ANYWAY.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-brand-300 font-light leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
            Make them count. Start building the habits, strength and discipline that move your life forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-accent-champagne text-brand-950 font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-sm transition-all duration-300 shadow-2xl hover:shadow-accent-gold/25"
            >
              <span>START FIT90</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-mono text-brand-300 hover:text-white px-7 py-4 rounded-sm border border-white/15 hover:border-white/40 transition-all duration-300"
            >
              Review Investment Details
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 text-xs font-mono text-brand-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              14-Day Guarantee
            </span>
            <span>•</span>
            <span>Instant Digital Access</span>
            <span>•</span>
            <span>Strictly Capped Enrollment</span>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-brand-950 text-brand-400 text-xs font-mono py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-sm bg-brand-900 border border-white/15 flex items-center justify-center">
                  <span className="font-display font-bold text-base text-accent-champagne">F</span>
                </div>
                <span className="font-display tracking-[0.25em] text-lg font-bold text-white">
                  FIT<span className="text-accent-gold">90</span>
                </span>
              </div>
              <p className="text-brand-300 text-xs font-sans font-light leading-relaxed max-w-sm">
                FIT90 is an elite lifestyle transformation architecture designed to help high-achievers construct sustainable habits, physical strength, and daily cognitive discipline.
              </p>
              <div className="text-[11px] text-brand-500">
                Zurich • London • New York • Singapore
              </div>
            </div>

            {/* Links: Program */}
            <div className="space-y-3">
              <div className="text-white uppercase tracking-widest text-[11px] font-bold">
                Program Systems
              </div>
              <ul className="space-y-2 text-brand-400">
                <li><a href="#philosophy" className="hover:text-white transition-colors">Four Pillars</a></li>
                <li><a href="#journey" className="hover:text-white transition-colors">90-Day Curriculum</a></li>
                <li><a href="#included" className="hover:text-white transition-colors">Deliverables</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Member Sanctum</a></li>
              </ul>
            </div>

            {/* Links: Evidence */}
            <div className="space-y-3">
              <div className="text-white uppercase tracking-widest text-[11px] font-bold">
                Evidence & Trust
              </div>
              <ul className="space-y-2 text-brand-400">
                <li><a href="#transformations" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Tuition & Enrollment</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">14-Day Guarantee</a></li>
              </ul>
            </div>

            {/* Links: Governance */}
            <div className="space-y-3">
              <div className="text-white uppercase tracking-widest text-[11px] font-bold">
                Legal & Governance
              </div>
              <ul className="space-y-2 text-brand-400">
                <li><a href="#faq" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Privacy Charter</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Health Advisory</a></li>
                <li><a href="mailto:concierge@fit90.com" className="hover:text-white transition-colors">Executive Concierge</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-brand-500">
            <div>
              © 2026 FIT90 Inc. All Rights Reserved. Not a medical treatment program.
            </div>
            <div className="flex items-center gap-4">
              <span>Standard SSL 256-Bit Architecture</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-accent-gold" />
                Global Cohort Active
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};


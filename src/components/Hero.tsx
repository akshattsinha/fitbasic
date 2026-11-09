import React from 'react';
import { ArrowUpRight, ChevronDown, Play, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenVideoModal }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden border-b border-white/10">
      {/* Background Cinematic Visual & Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2400&q=90"
          alt="FIT90 Premium Athletic Training"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.18] saturate-[0.85]"
          fetchPriority="high"
        />
        {/* Layered luxury lighting gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/10 via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative Brand Watermark / Architectural Grid */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] hidden lg:block">
        <span className="font-display font-black text-[22vw] leading-none text-white tracking-tighter">
          FIT90
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-16 md:pt-28 pb-12 w-full my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-3.5 h-3.5 text-accent-champagne" />
            <span className="text-[11px] font-mono tracking-widest text-brand-200 uppercase">
              The Premier 90-Day Lifestyle Architecture
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.92] mb-6">
            <span className="block text-white">90 DAYS.</span>
            <span className="block gold-gradient-text italic font-serif font-normal">
              A DIFFERENT YOU.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-brand-300 font-light leading-relaxed max-w-2xl mb-10 text-pretty">
            {HERO_DATA.supportingCopy}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenCheckout}
              className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-accent-champagne text-brand-950 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 shadow-2xl hover:shadow-accent-gold/20"
            >
              <span>{HERO_DATA.primaryCTA}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href="#philosophy"
              className="inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest font-mono text-brand-200 hover:text-white px-7 py-4 rounded-sm border border-white/15 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <span>{HERO_DATA.secondaryCTA}</span>
              <ChevronDown className="w-4 h-4 text-brand-400 group-hover:text-white" />
            </a>

            {onOpenVideoModal && (
              <button
                onClick={onOpenVideoModal}
                className="inline-flex items-center justify-center sm:justify-start gap-2.5 text-xs text-brand-400 hover:text-accent-gold font-mono tracking-wider transition-colors py-2 px-3"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                <span>Brand Film (01:45)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hero Footing Metrics Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-brand-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {HERO_DATA.stats.map((stat, idx) => (
            <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-brand-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Floating Scroll Indicator */}
      <a
        href="#philosophy"
        className="hidden xl:flex absolute bottom-24 right-10 z-20 flex-col items-center gap-2 text-brand-400 hover:text-white transition-colors"
        aria-label="Scroll down to philosophy"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest [writing-mode:vertical-lr]">
          Scroll to Explore
        </span>
        <div className="w-4 h-7 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent-gold rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};


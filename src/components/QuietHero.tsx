import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface QuietHeroProps {
  onOpenCheckout: () => void;
}

export const QuietHero: React.FC<QuietHeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-ivory pt-24 sm:pt-32 pb-12 overflow-hidden">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typography Column */}
          <div className="lg:col-span-7">
            {/* Minimal Eyebrow */}
            <div className="inline-block text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-6">
              A 90-Day Lifestyle Transformation
            </div>

            {/* Oversized Editorial Headline */}
            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl text-charcoal tracking-tight uppercase leading-[0.9] mb-8 font-normal">
              <span className="block font-sans font-light tracking-tight text-charcoal">
                90 DAYS.
              </span>
              <span className="block italic text-charcoal/80 font-light">
                A DIFFERENT YOU.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-2xl text-charcoal/70 font-light tracking-wide max-w-xl mb-12 font-sans leading-relaxed text-pretty">
              A more intentional approach to fitness, health and everyday living.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href="#philosophy"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-charcoal/85 shadow-soft-luxury"
              >
                <span>DISCOVER FIT90</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-luxury font-medium text-charcoal/70 hover:text-charcoal px-6 py-4 border border-charcoal/15 hover:border-charcoal/30 transition-all duration-300"
              >
                <span>ENROLL IN SPRING COHORT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Luxury Warm-Toned Editorial Photography Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-champagne shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=90"
                alt="FIT90 Athletic Editorial in Warm Light"
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] saturate-[0.9] hover:scale-105 transition-transform duration-1000 ease-out"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 text-[10px] font-mono tracking-luxury text-white/80 uppercase">
                Campaign Edition 01
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Footnote */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full pt-8 border-t border-[#343630]/[0.08] flex items-center justify-between text-[11px] font-mono tracking-luxury text-charcoal/40 uppercase">
        <span>Spring Cohort</span>
        <span className="hidden sm:inline">Movement • Nutrition • Daily Rhythm</span>
        <a href="#philosophy" className="hover:text-charcoal transition-colors">
          Explore Philosophy ↓
        </a>
      </div>
    </section>
  );
};


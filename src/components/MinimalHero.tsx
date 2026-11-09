import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MinimalHeroProps {
  onOpenCheckout: () => void;
}

export const MinimalHero: React.FC<MinimalHeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-between overflow-hidden bg-noir">
      {/* Cinematic Full-Bleed Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2400&q=90"
          alt="FIT90 Athlete Campaign"
          className="w-full h-full object-cover object-center filter grayscale-[35%] brightness-[0.38] contrast-[1.2] scale-100 animate-cinematic"
          fetchPriority="high"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/60" />
      </div>

      {/* Spacing for Header */}
      <div className="w-full pt-20" />

      {/* Main Campaign Statement */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full pb-16 sm:pb-24 my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow Label */}
          <p className="text-[11px] sm:text-xs uppercase tracking-luxury text-ivory/60 mb-6 font-mono">
            A 90-Day Lifestyle Transformation
          </p>

          {/* Headline */}
          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl text-ivory tracking-tight uppercase leading-[0.92] mb-8 font-normal">
            <span className="block font-sans font-light tracking-tight text-white">
              90 DAYS.
            </span>
            <span className="block italic text-ivory font-light">
              A DIFFERENT YOU.
            </span>
          </h1>

          {/* Small Supporting Line */}
          <p className="text-base sm:text-xl text-ivory/70 font-light tracking-wide max-w-xl mb-12 font-sans">
            Transform the way you move, live and feel.
          </p>

          {/* One Single Elegant CTA */}
          <div>
            <button
              onClick={onOpenCheckout}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-ivory text-noir text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-white"
            >
              <span>BEGIN YOUR JOURNEY</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full pb-8 flex items-center justify-between text-[11px] font-mono tracking-luxury text-ivory/40 uppercase">
        <span>Spring Cohort</span>
        <span className="hidden sm:inline">Move • Nourish • Recover</span>
        <a href="#philosophy" className="hover:text-ivory transition-colors">
          Scroll Down ↓
        </a>
      </div>
    </section>
  );
};


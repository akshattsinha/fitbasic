import React from 'react';
import { AmbientGradients } from './AmbientGradients';

const PRINCIPLES = [
  {
    number: "01",
    title: "Movement Architecture",
    description: "Periodized resistance training and joint longevity protocols that build enduring physical confidence without exhaustion."
  },
  {
    number: "02",
    title: "Conscious Fuel",
    description: "Flexible nutritional mechanics that support demanding careers and executive dining without neurotic restriction."
  },
  {
    number: "03",
    title: "Trained Discipline",
    description: "Replacing erratic motivation with daily non-negotiables that make consistent execution automatic and effortless."
  },
  {
    number: "04",
    title: "Deep Recovery",
    description: "Circadian synchronization, parasympathetic wind-downs, and sleep architecture designed for cellular restoration."
  }
];

export const WarmPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-28 sm:py-44 bg-champagne-soft border-t border-delicate overflow-hidden">
      {/* Soft Moving Ambient Background Gradients */}
      <AmbientGradients variant="section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Editorial Headline & Narrative */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-6">
            The Philosophy
          </p>

          <h2 className="font-serif text-4xl sm:text-7xl lg:text-8xl text-charcoal uppercase tracking-tight leading-[0.98] mb-8 font-normal">
            A BETTER YOU <br />
            <span className="italic font-light text-charcoal/70">IS BUILT DAILY.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-charcoal/75 font-light max-w-2xl leading-relaxed tracking-wide font-sans text-pretty">
            FIT90 is not a temporary workout challenge. It is an intentional 90-day lifestyle architecture that aligns physical movement, metabolic nutrition, and daily habits into a permanent standard.
          </p>
        </div>

        {/* Full-Width Luxury Photography in Natural Light */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-ivory shadow-elevated border border-delicate mb-16 sm:mb-20">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2400&q=90"
            alt="Tranquil Movement in Natural Morning Light"
            className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98] hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-[11px] font-mono uppercase tracking-luxury text-white/90">
            Plate 02 — Quiet Sovereignty & Poise
          </div>
        </div>

        {/* Four Structured Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-delicate">
          {PRINCIPLES.map((item) => (
            <div key={item.number} className="space-y-3">
              <span className="font-mono text-xs text-taupe tracking-luxury block">
                {item.number}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/content';

export const Philosophy: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = PHILOSOPHY_PILLARS[activePillarIndex];

  return (
    <section id="philosophy" className="relative py-24 sm:py-32 bg-brand-950 border-b border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
            <span className="w-6 h-px bg-accent-gold" />
            <span>The Core Philosophy</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[1.05] mb-6">
            IT’S NOT JUST ABOUT <br />
            <span className="font-serif italic font-normal gold-gradient-text">
              LOOKING DIFFERENT.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-300 font-light leading-relaxed">
            A temporary diet can change your weight. A temporary workout plan can change your sweat rate. But unless you transform the daily architecture of how you move, nourish, think, and recover, you will inevitably revert to your prior baseline. FIT90 is engineered to build a permanent, elevated standard of everyday living.
          </p>
        </div>

        {/* Desktop Interactive Pillar Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Navigation / List (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const isActive = idx === activePillarIndex;
              return (
                <button
                  key={pillar.number}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`text-left p-6 rounded-sm transition-all duration-300 border ${
                    isActive
                      ? 'bg-brand-900 border-accent-gold/40 shadow-xl shadow-black/50 translate-x-2'
                      : 'bg-brand-900/40 border-white/5 hover:bg-brand-900/70 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono tracking-widest text-brand-400">
                      PILLAR {pillar.number}
                    </span>
                    <span
                      className={`text-xs font-mono transition-transform duration-300 ${
                        isActive ? 'text-accent-gold translate-x-1' : 'text-brand-500'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <h3
                    className={`font-display text-xl sm:text-2xl font-bold tracking-tight uppercase transition-colors ${
                      isActive ? 'text-white' : 'text-brand-300'
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-400 mt-1 line-clamp-1 font-light">
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Pillar Detailed Editorial Card (Right Column) */}
          <div className="lg:col-span-7 bg-brand-900/80 border border-white/10 rounded-sm overflow-hidden flex flex-col backdrop-blur-xl">
            {/* Visual Image Banner with Subtle Zoom */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-brand-950">
              <img
                key={activePillar.image}
                src={activePillar.image}
                alt={activePillar.title}
                className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1] transition-all duration-700 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />
              <div className="absolute top-5 left-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-xs uppercase tracking-widest rounded-sm">
                System Protocol {activePillar.number}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-accent-gold text-sm tracking-widest">
                    SYSTEM {activePillar.number}
                  </span>
                  <span className="text-brand-500 text-xs font-mono">•</span>
                  <span className="text-brand-400 text-xs font-mono tracking-wider uppercase">
                    Non-Negotiable Architecture
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase mb-4">
                  {activePillar.title} — {activePillar.subtitle}
                </h3>

                <p className="text-brand-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                  {activePillar.description}
                </p>

                {/* Key Takeaways */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-4">
                    Tactical Deliverables:
                  </h4>
                  <ul className="space-y-3">
                    {activePillar.takeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-brand-200">
                        <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                        <span className="font-light">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-brand-400 font-mono">
                <span>Integrated into all 90 days</span>
                <span className="text-accent-champagne">100% Scientifically Supported</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';

interface Stage {
  number: string;
  days: string;
  title: string;
  sentence: string;
  image: string;
}

const STAGES: Stage[] = [
  {
    number: "01",
    days: "DAYS 01–30",
    title: "FOUNDATION",
    sentence: "Attune the physical baseline. Establish movement proficiency, circadian synchronization, and non-negotiable daily rhythms.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "02",
    days: "DAYS 31–60",
    title: "PROGRESSION",
    sentence: "Elevate capacity. Introduce progressive resistance, metabolic density, and unbreakable psychological momentum.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "03",
    days: "DAYS 61–90",
    title: "TRANSFORMATION",
    sentence: "Embody the standard. Consolidate peak physical stamina and intuitive nourishment into a permanent way of living.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=85"
  }
];

export const QuietJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="journey" className="relative py-28 sm:py-44 bg-ivory border-t border-[#343630]/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-4">
              The Architecture
            </p>
            <h2 className="font-serif text-4xl sm:text-7xl text-charcoal uppercase tracking-tight font-normal">
              THE 90-DAY <span className="italic font-light text-charcoal/70">JOURNEY.</span>
            </h2>
          </div>
          <div className="text-xs font-mono tracking-luxury text-charcoal/50 uppercase">
            Three Sequential Phases
          </div>
        </div>

        {/* Refined Horizontal Timeline Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#343630]/[0.1] mb-12">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`text-left py-8 sm:py-10 px-6 sm:px-8 transition-all duration-500 border-b md:border-b-0 md:border-r last:border-r-0 border-[#343630]/[0.1] relative group ${
                  isActive ? 'bg-champagne/60' : 'hover:bg-champagne/30'
                }`}
              >
                {/* Active Indicator Top Border */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-charcoal" />
                )}

                <div className="flex items-center justify-between text-xs font-mono tracking-luxury text-charcoal/50 mb-3">
                  <span>STAGE {stage.number}</span>
                  <span className="text-[10px]">{stage.days}</span>
                </div>

                <h3 className={`font-serif text-2xl sm:text-3xl uppercase tracking-tight transition-colors ${
                  isActive ? 'text-charcoal' : 'text-charcoal/50 group-hover:text-charcoal/80'
                }`}>
                  {stage.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Cinematic Active Stage Canvas */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-champagne shadow-elevated">
          <img
            key={STAGES[activeStage].image}
            src={STAGES[activeStage].image}
            alt={STAGES[activeStage].title}
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.88] transition-all duration-700 animate-scale-gentle"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent pointer-events-none" />

          {/* Minimal Phase Text Overlay */}
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-xl text-white">
            <span className="text-xs font-mono uppercase tracking-luxury text-white/70 block mb-2">
              Phase {STAGES[activeStage].number} — {STAGES[activeStage].days}
            </span>
            <p className="text-lg sm:text-2xl font-light leading-relaxed font-sans text-pretty">
              {STAGES[activeStage].sentence}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


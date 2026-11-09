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
    sentence: "Rebuild movement mechanics, establish baseline nutrition awareness, and anchor non-negotiable daily rhythms.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "02",
    days: "DAYS 31–60",
    title: "PROGRESSION",
    sentence: "Advance physical capacity through progressive resistance, metabolic density, and unbreakable momentum.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "03",
    days: "DAYS 61–90",
    title: "TRANSFORMATION",
    sentence: "Consolidate peak conditioning into an autonomic standard that carries far beyond ninety days.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=2000&q=85"
  }
];

export const MinimalJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="journey" className="relative py-28 sm:py-44 bg-noir border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-luxury text-ivory/40 mb-4">
              The Architecture
            </p>
            <h2 className="font-serif text-4xl sm:text-7xl text-ivory uppercase tracking-tight font-normal">
              THE 90-DAY <span className="italic font-light text-ivory/80">JOURNEY.</span>
            </h2>
          </div>
          <div className="text-xs font-mono tracking-luxury text-ivory/50 uppercase">
            Three Sequential Phases
          </div>
        </div>

        {/* Horizontal Timeline Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/[0.08] mb-12">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`text-left py-8 sm:py-10 px-4 sm:px-6 transition-all duration-500 border-b md:border-b-0 md:border-r last:border-r-0 border-white/[0.08] relative group ${
                  isActive ? 'bg-surface' : 'hover:bg-surface/50'
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-ivory" />
                )}

                <div className="flex items-center justify-between text-xs font-mono tracking-luxury text-ivory/40 mb-3">
                  <span>PHASE {stage.number}</span>
                  <span className="text-[10px]">{stage.days}</span>
                </div>

                <h3 className={`font-serif text-2xl sm:text-3xl uppercase tracking-tight transition-colors ${
                  isActive ? 'text-ivory' : 'text-ivory/50 group-hover:text-ivory/80'
                }`}>
                  {stage.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Cinematic Active Visual Canvas */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-surface">
          <img
            key={STAGES[activeStage].image}
            src={STAGES[activeStage].image}
            alt={STAGES[activeStage].title}
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.2] brightness-[0.4] transition-all duration-700 animate-cinematic"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-transparent to-transparent pointer-events-none" />

          {/* Minimal Phase Text Overlay */}
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-luxury text-ivory/50 block mb-2">
              Phase {STAGES[activeStage].number} — {STAGES[activeStage].days}
            </span>
            <p className="text-lg sm:text-2xl font-light text-ivory leading-relaxed font-sans">
              {STAGES[activeStage].sentence}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


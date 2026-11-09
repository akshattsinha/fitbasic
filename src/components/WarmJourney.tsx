import React, { useState } from 'react';
import { AmbientGradients } from './AmbientGradients';

interface Chapter {
  number: string;
  days: string;
  title: string;
  tagline: string;
  summary: string;
  focus: string[];
  image: string;
}

const CHAPTERS: Chapter[] = [
  {
    number: "01",
    days: "DAYS 01–30",
    title: "FOUNDATION",
    tagline: "Build the baseline.",
    summary: "Establish movement competence, calibrate baseline metabolic energy, and anchor non-negotiable daily morning and evening rituals.",
    focus: [
      "Movement screening & compound joint stabilization",
      "Calibrate baseline caloric equilibrium & 1.8g protein/kg",
      "Anchor morning sunlight & sleep synchronization"
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "02",
    days: "DAYS 31–60",
    title: "PROGRESSION",
    tagline: "Become stronger through consistency.",
    summary: "Advance physical output through periodized overload, metabolic density, and nutrient timing that sustains executive stamina.",
    focus: [
      "Progressive overload protocols & muscle density",
      "Strategic nutrient timing around training windows",
      "Dining-out & executive travel adherence framework"
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "03",
    days: "DAYS 61–90",
    title: "TRANSFORMATION",
    tagline: "Make the new standard yours.",
    summary: "Consolidate physical stamina and mental discipline into an intuitive, autonomic lifestyle that continues far beyond Day 90.",
    focus: [
      "Peak athletic conditioning & muscular definition",
      "Transition from tracking to intuitive regulation",
      "Lifetime exit strategy to prevent reversion"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=85"
  }
];

export const WarmJourney: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="journey" className="relative py-28 sm:py-44 bg-ivory border-t border-delicate overflow-hidden">
      {/* Soft Moving Ambient Background Gradients */}
      <AmbientGradients variant="section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-4">
              The Curriculum
            </p>
            <h2 className="font-serif text-4xl sm:text-7xl text-charcoal uppercase tracking-tight font-normal">
              THE 90-DAY <span className="italic font-light text-charcoal/70">JOURNEY.</span>
            </h2>
          </div>
          <div className="text-xs font-mono tracking-luxury text-charcoal/50 uppercase">
            Three Progressive Chapters
          </div>
        </div>

        {/* Horizontal Timeline Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-delicate-darker mb-12 bg-ivory/60 backdrop-blur-sm">
          {CHAPTERS.map((ch, idx) => {
            const isActive = idx === activeChapter;
            return (
              <button
                key={ch.number}
                onClick={() => setActiveChapter(idx)}
                className={`text-left py-8 sm:py-10 px-6 sm:px-8 transition-all duration-500 border-b md:border-b-0 md:border-r last:border-r-0 border-delicate relative group ${
                  isActive ? 'bg-champagne/50' : 'hover:bg-champagne/25'
                }`}
              >
                {/* Active Indicator Top Border */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-charcoal" />
                )}

                <div className="flex items-center justify-between text-xs font-mono tracking-luxury text-charcoal/50 mb-3">
                  <span>CHAPTER {ch.number}</span>
                  <span className="text-[10px] bg-ivory/80 px-2 py-0.5 rounded-sm border border-delicate">{ch.days}</span>
                </div>

                <h3 className={`font-serif text-2xl sm:text-3xl uppercase tracking-tight transition-colors ${
                  isActive ? 'text-charcoal' : 'text-charcoal/50 group-hover:text-charcoal/80'
                }`}>
                  {ch.title}
                </h3>
                <p className="text-xs font-serif italic text-charcoal/60 mt-1">
                  "{ch.tagline}"
                </p>
              </button>
            );
          })}
        </div>

        {/* Cinematic Active Chapter Canvas with Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-champagne-light/50 border border-delicate shadow-elevated p-6 sm:p-10">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-champagne border border-delicate">
            <img
              key={CHAPTERS[activeChapter].image}
              src={CHAPTERS[activeChapter].image}
              alt={CHAPTERS[activeChapter].title}
              className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.92] transition-all duration-700 animate-scale-gentle"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 text-[10px] font-mono tracking-luxury text-white/90 uppercase">
              Phase {CHAPTERS[activeChapter].number} — {CHAPTERS[activeChapter].days}
            </div>
          </div>

          {/* Narrative & Focus Column */}
          <div className="lg:col-span-6 flex flex-col justify-between p-2 sm:p-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-luxury text-taupe block mb-2">
                Chapter Objective
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal uppercase tracking-tight mb-4">
                {CHAPTERS[activeChapter].title}: {CHAPTERS[activeChapter].tagline}
              </h3>
              <p className="text-sm sm:text-base text-charcoal/75 font-light leading-relaxed font-sans mb-8">
                {CHAPTERS[activeChapter].summary}
              </p>

              <div className="space-y-3 pt-6 border-t border-delicate">
                <span className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 block mb-2">
                  Key Strategic Deliverables:
                </span>
                {CHAPTERS[activeChapter].focus.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/80 font-light font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-delicate text-[11px] font-mono text-charcoal/50 mt-6 flex items-center justify-between">
              <span>Biometric Milestone Review</span>
              <span className="text-charcoal/70">Documented in Protocol Vault</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


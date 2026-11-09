import React, { useState } from 'react';
import { Calendar, Dumbbell, Utensils, Brain, ShieldCheck, ArrowRight } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/content';

export const JourneyTimeline: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeChapter = CHAPTERS_DATA[activeChapterIndex];

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-brand-950 border-b border-white/10 overflow-hidden">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
              <span className="w-6 h-px bg-accent-gold" />
              <span>The 90-Day Curriculum</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
              THREE DISTINCT <br />
              <span className="font-serif italic font-normal gold-gradient-text">
                CHAPTERS OF MASTERY.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-brand-300 font-light leading-relaxed">
            Progress is not linear; it is structured. The 90 days are divided into three synchronized phases that progressively challenge your neuromuscular system and habit psychology.
          </p>
        </div>

        {/* Chapter Phase Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CHAPTERS_DATA.map((chapter, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <button
                key={chapter.id}
                onClick={() => setActiveChapterIndex(idx)}
                className={`relative text-left p-6 sm:p-7 rounded-sm border transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-900 border-accent-gold/50 shadow-2xl shadow-black/80 ring-1 ring-accent-gold/30'
                    : 'bg-brand-900/40 border-white/10 hover:bg-brand-900/70 hover:border-white/20'
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold via-accent-champagne to-accent-gold" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono tracking-widest text-accent-champagne">
                    CHAPTER {chapter.chapterNumber}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-brand-300">
                    {chapter.days}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-1">
                  {chapter.title}
                </h3>
                <p className="font-serif italic text-accent-gold text-sm">
                  "{chapter.tagline}"
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Detailed Cinematic Showcase */}
        <div className="bg-brand-900/90 border border-white/10 rounded-sm overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-brand-950">
              <img
                key={activeChapter.image}
                src={activeChapter.image}
                alt={activeChapter.title}
                className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15] transition-all duration-700 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-900" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-brand-950/80 backdrop-blur-md border border-white/10 rounded-sm">
                <div className="flex items-center gap-2 text-accent-gold font-mono text-xs uppercase tracking-widest mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Milestone Audit</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {activeChapter.milestoneAudit}
                </div>
              </div>
            </div>

            {/* Content Specifications Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-brand-400 mb-2">
                  <span>Curriculum Breakdown</span>
                  <span>•</span>
                  <span className="text-accent-gold">{activeChapter.days}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-3">
                  {activeChapter.title}: {activeChapter.tagline}
                </h3>

                <p className="text-brand-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                  {activeChapter.description}
                </p>

                {/* 4 Protocol Dimension Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-sm bg-brand-950/60 border border-white/5">
                    <div className="flex items-center gap-2 text-accent-gold text-xs font-mono uppercase tracking-wider mb-2">
                      <Dumbbell className="w-4 h-4" />
                      <span>Training Split</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-200 font-light leading-relaxed">
                      {activeChapter.trainingSplit}
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-brand-950/60 border border-white/5">
                    <div className="flex items-center gap-2 text-accent-gold text-xs font-mono uppercase tracking-wider mb-2">
                      <Utensils className="w-4 h-4" />
                      <span>Nutrition Strategy</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-200 font-light leading-relaxed">
                      {activeChapter.nutritionFocus}
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-brand-950/60 border border-white/5">
                    <div className="flex items-center gap-2 text-accent-gold text-xs font-mono uppercase tracking-wider mb-2">
                      <Brain className="w-4 h-4" />
                      <span>Mindset & Discipline</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-200 font-light leading-relaxed">
                      {activeChapter.mindsetProtocol}
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-brand-950/60 border border-white/5">
                    <div className="flex items-center gap-2 text-accent-gold text-xs font-mono uppercase tracking-wider mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Primary Objective</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-200 font-light leading-relaxed">
                      {activeChapter.objective}
                    </p>
                  </div>
                </div>

                {/* Tactical Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-3">
                    Core Phase Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeChapter.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Integrity Notice */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-brand-500 font-mono">
                <span>Adaptive load adjustment applied automatically</span>
                <span className="flex items-center gap-1 text-brand-400">
                  Documented in FIT90 Protocol Handbook <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


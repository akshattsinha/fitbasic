import React, { useState } from 'react';
import { ShieldCheck, Quote, ChevronLeft, ChevronRight, Award, SlidersHorizontal } from 'lucide-react';
import { TRANSFORMATION_STORIES } from '../data/content';

export const TransformationStories: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage for before/after split
  const activeStory = TRANSFORMATION_STORIES[activeStoryIndex];

  const handlePrev = () => {
    setActiveStoryIndex((prev) => (prev === 0 ? TRANSFORMATION_STORIES.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setActiveStoryIndex((prev) => (prev === TRANSFORMATION_STORIES.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  return (
    <section id="transformations" className="relative py-24 sm:py-32 bg-brand-950 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
              <span className="w-6 h-px bg-accent-gold" />
              <span>Real Transformations</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
              MEASURED PROGRESS. <br />
              <span className="font-serif italic font-normal gold-gradient-text">
                PERMANENT STANDARDS.
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="p-3 rounded-sm border border-white/10 hover:border-white/30 text-brand-300 hover:text-white transition-all bg-brand-900/60"
              aria-label="Previous Transformation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-brand-400">
              0{activeStoryIndex + 1} / 0{TRANSFORMATION_STORIES.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-sm border border-white/10 hover:border-white/30 text-brand-300 hover:text-white transition-all bg-brand-900/60"
              aria-label="Next Transformation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transformation Showcase Card */}
        <div className="bg-brand-900/90 border border-white/10 rounded-sm overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Interactive Comparison Slider (Left 5 cols) */}
            <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[500px] overflow-hidden bg-brand-950 select-none">
              {/* After Image (Background) */}
              <img
                src={activeStory.afterImg}
                alt={`${activeStory.name} After FIT90`}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
              />

              {/* Before Image (Foreground with Clip Path) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={activeStory.beforeImg}
                  alt={`${activeStory.name} Before FIT90`}
                  className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[40%] brightness-[0.7]"
                />
              </div>

              {/* Split Line & Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-accent-gold z-20 cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-brand-950 border-2 border-accent-gold text-accent-gold flex items-center justify-center shadow-xl">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Native Range Slider overlay for touch/mouse */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag to compare before and after transformation"
              />

              {/* Badges on Visual */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-sm bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-widest text-brand-300">
                Day 01 (Baseline)
              </div>
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-sm bg-accent-gold/90 backdrop-blur-md text-brand-950 text-[11px] font-mono font-bold uppercase tracking-widest">
                Day 90 (Outcome)
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-3 py-2 rounded-sm border border-white/10">
                <span>← Drag slider to compare →</span>
                <span className="text-accent-champagne">{sliderPosition}% Visible</span>
              </div>
            </div>

            {/* Narrative & Metrics Column (Right 7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                {/* Verification Badge */}
                <div className="flex items-center gap-2 text-accent-gold text-xs font-mono uppercase tracking-widest mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{activeStory.verificationBadge}</span>
                  <span className="text-brand-500">•</span>
                  <span className="text-brand-400">{activeStory.program}</span>
                </div>

                {/* Client Profile */}
                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
                  {activeStory.name}, <span className="font-light text-brand-400">{activeStory.age}</span>
                </h3>
                <div className="text-xs font-mono text-brand-400 mt-1 mb-6">
                  {activeStory.role} — {activeStory.location}
                </div>

                {/* Narrative Summary */}
                <p className="text-brand-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {activeStory.summary}
                </p>

                {/* Quote Box */}
                <div className="p-5 rounded-sm bg-brand-950/70 border-l-2 border-accent-gold mb-8 relative">
                  <Quote className="w-6 h-6 text-accent-gold/30 absolute top-3 right-3" />
                  <p className="font-serif italic text-white text-base leading-relaxed pr-6">
                    "{activeStory.quote}"
                  </p>
                </div>

                {/* Quantitative Metric Grid */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-3">
                    Documented 90-Day Progression:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-sm bg-brand-950 border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-brand-400 block">Weight Delta</span>
                      <span className="text-lg font-display font-bold text-accent-champagne mt-0.5 block">
                        {activeStory.metrics.weightDelta}
                      </span>
                    </div>

                    <div className="p-3 rounded-sm bg-brand-950 border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-brand-400 block">Body Fat Shift</span>
                      <span className="text-lg font-display font-bold text-white mt-0.5 block">
                        {activeStory.metrics.bodyFatDelta}
                      </span>
                    </div>

                    <div className="p-3 rounded-sm bg-brand-950 border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-brand-400 block">Habit Adherence</span>
                      <span className="text-lg font-display font-bold text-white mt-0.5 block">
                        {activeStory.metrics.habitScore}
                      </span>
                    </div>

                    <div className="p-3 rounded-sm bg-brand-950 border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-brand-400 block">Strength PR</span>
                      <span className="text-lg font-display font-bold text-accent-gold mt-0.5 block">
                        {activeStory.metrics.strengthMetric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ethical Disclaimer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-brand-500">
                <Award className="w-4 h-4 text-accent-gold shrink-0" />
                <span>
                  Case studies represent disciplined execution of the FIT90 daily protocols. Individual adaptation varies based on biological baseline and consistency.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { ShieldCheck, Quote, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { AmbientGradients } from './AmbientGradients';

interface ClientCase {
  name: string;
  role: string;
  location: string;
  age: number;
  summary: string;
  quote: string;
  metrics: {
    weightDelta: string;
    bodyFatDelta: string;
    habitScore: string;
    strengthMetric: string;
  };
  beforeImg: string;
  afterImg: string;
  verificationBadge: string;
}

const CASES: ClientCase[] = [
  {
    name: "Marcus Vance",
    role: "Managing Director, Private Equity",
    location: "London, UK",
    age: 39,
    summary: "Constant international travel and erratic hours left Marcus fatigued. In 90 days, he rebuilt physical stamina, lost 19.2 lbs of fat, and increased compound deadlift by 35kg.",
    quote: "FIT90 transformed how I operate in the boardroom and with my family. The daily habit framework made discipline automatic even when living out of hotels.",
    metrics: {
      weightDelta: "-19.2 lbs",
      bodyFatDelta: "-7.4%",
      habitScore: "96.4%",
      strengthMetric: "+35kg Deadlift"
    },
    beforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    verificationBadge: "Verified Client Profile"
  },
  {
    name: "Elena Rostova",
    role: "Creative Director & Mother of 2",
    location: "Zurich, Switzerland",
    age: 35,
    summary: "Frustrated by years of extreme calorie deficits, Elena learned sustainable nutritional mechanics, built lean muscular posture, and restored deep sleep.",
    quote: "No food guilt, no two-hour gym sessions. The clarity and strength I built during these 90 days completely transformed my energy and physical confidence.",
    metrics: {
      weightDelta: "-13.5 lbs",
      bodyFatDelta: "-5.8%",
      habitScore: "98.1%",
      strengthMetric: "+25kg Hip Thrust"
    },
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    verificationBadge: "Verified Client Profile"
  },
  {
    name: "David Chen",
    role: "Fintech Co-Founder",
    location: "Singapore",
    age: 43,
    summary: "Suffered from chronic desk posture and elevated blood pressure. FIT90 restructured his circadian rhythm, introduced progressive resistance, and reduced body fat from 23.5% to 15.2%.",
    quote: "The system is engineered for busy professionals who demand results without fluff. It is easily the highest-ROI investment I made in my health.",
    metrics: {
      weightDelta: "-22.0 lbs",
      bodyFatDelta: "-8.3%",
      habitScore: "95.0%",
      strengthMetric: "+40kg Squat"
    },
    beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    verificationBadge: "Verified Client Profile"
  }
];

export const WarmStories: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const currentCase = CASES[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? CASES.length - 1 : prev - 1));
    setSliderPos(50);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === CASES.length - 1 ? 0 : prev + 1));
    setSliderPos(50);
  };

  return (
    <section id="stories" className="relative py-28 sm:py-44 bg-ivory border-t border-delicate overflow-hidden">
      {/* Soft Moving Ambient Background Gradients */}
      <AmbientGradients variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-4">
              Real Transformations
            </p>
            <h2 className="font-serif text-4xl sm:text-7xl text-charcoal uppercase tracking-tight font-normal">
              MEASURED PROGRESS. <br />
              <span className="italic font-light text-charcoal/70">PERMANENT STANDARDS.</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 bg-champagne-light/70 hover:bg-champagne border border-delicate text-charcoal transition-colors rounded-none"
              aria-label="Previous Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-charcoal/50 tracking-luxury">
              0{activeIdx + 1} / 0{CASES.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 bg-champagne-light/70 hover:bg-champagne border border-delicate text-charcoal transition-colors rounded-none"
              aria-label="Next Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transformation Showcase Card */}
        <div className="bg-champagne-light/50 border border-delicate shadow-elevated grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Visual Interactive Comparison Slider (Left 5 cols) */}
          <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[480px] bg-champagne overflow-hidden select-none">
            {/* After Image */}
            <img
              src={currentCase.afterImg}
              alt={`${currentCase.name} After`}
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05]"
            />

            {/* Before Image with Clip */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={currentCase.beforeImg}
                alt={`${currentCase.name} Before`}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[30%] brightness-[0.9]"
              />
            </div>

            {/* Split Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-ivory z-20 cursor-ew-resize flex items-center justify-center shadow-lg"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-ivory text-charcoal border border-charcoal/20 flex items-center justify-center shadow-md">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Native Slider Input for touch/mouse */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag to compare before and after"
            />

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-sm bg-ivory/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-luxury text-charcoal border border-delicate">
              Day 01 Baseline
            </div>
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-sm bg-charcoal text-ivory text-[10px] font-mono uppercase tracking-luxury">
              Day 90 Outcome
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[10px] font-mono text-charcoal/70 bg-ivory/80 backdrop-blur-md px-3 py-1.5 border border-delicate">
              <span>← Drag slider to compare →</span>
              <span>{sliderPos}% Revealed</span>
            </div>
          </div>

          {/* Narrative & Metrics Column (Right 7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-taupe text-xs font-mono uppercase tracking-luxury mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentCase.verificationBadge}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal uppercase tracking-tight">
                {currentCase.name}, <span className="font-light text-charcoal/60">{currentCase.age}</span>
              </h3>
              <div className="text-xs font-mono text-charcoal/60 mt-1 mb-6">
                {currentCase.role} — {currentCase.location}
              </div>

              <p className="text-charcoal/75 text-sm sm:text-base font-light leading-relaxed mb-6 font-sans">
                {currentCase.summary}
              </p>

              {/* Quote Box */}
              <div className="p-5 rounded-sm bg-ivory/80 border-l-2 border-taupe mb-8 relative">
                <Quote className="w-6 h-6 text-taupe/30 absolute top-3 right-3" />
                <p className="font-serif italic text-charcoal text-base leading-relaxed pr-6">
                  "{currentCase.quote}"
                </p>
              </div>

              {/* Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-ivory border border-delicate text-center">
                  <span className="text-[10px] font-mono uppercase text-charcoal/50 block">Weight Delta</span>
                  <span className="text-lg font-serif font-bold text-charcoal">{currentCase.metrics.weightDelta}</span>
                </div>
                <div className="p-3 bg-ivory border border-delicate text-center">
                  <span className="text-[10px] font-mono uppercase text-charcoal/50 block">Body Fat Delta</span>
                  <span className="text-lg font-serif font-bold text-charcoal">{currentCase.metrics.bodyFatDelta}</span>
                </div>
                <div className="p-3 bg-ivory border border-delicate text-center">
                  <span className="text-[10px] font-mono uppercase text-charcoal/50 block">Habit Adherence</span>
                  <span className="text-lg font-serif font-bold text-charcoal">{currentCase.metrics.habitScore}</span>
                </div>
                <div className="p-3 bg-ivory border border-delicate text-center">
                  <span className="text-[10px] font-mono uppercase text-charcoal/50 block">Strength PR</span>
                  <span className="text-lg font-serif font-bold text-charcoal">{currentCase.metrics.strengthMetric}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-delicate text-[11px] font-mono text-charcoal/50">
              Documented adherence to the FIT90 daily protocols. Results reflect individual starting baselines.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


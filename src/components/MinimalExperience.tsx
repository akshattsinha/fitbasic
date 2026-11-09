import React, { useState } from 'react';
import { Dumbbell, Utensils, CheckCircle2, TrendingUp } from 'lucide-react';

interface Inclusion {
  number: string;
  title: string;
  caption: string;
}

const INCLUSIONS: Inclusion[] = [
  {
    number: "01",
    title: "Periodized Training Curriculum",
    caption: "Twelve weeks of progressive compound resistance, mobility, and metabolic conditioning engineered for gym or premier home spaces."
  },
  {
    number: "02",
    title: "Precision Nutrition Protocol",
    caption: "A flexible macronutrient and caloric framework aligned with your metabolic rate, travel demands, and social reality."
  },
  {
    number: "03",
    title: "Daily Habit Operating System",
    caption: "Non-negotiable daily anchors covering circadian light, restorative sleep hygiene, and cognitive focus."
  },
  {
    number: "04",
    title: "The Digital Member Sanctum",
    caption: "A distraction-free web platform for session logging, tempo intervals, and high-definition movement instruction."
  }
];

export const MinimalExperience: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="experience" className="relative py-28 sm:py-44 bg-noir border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-ivory/40 mb-4">
            The Deliverables
          </p>
          <h2 className="font-serif text-4xl sm:text-7xl text-ivory uppercase tracking-tight font-normal">
            THE FIT90 <span className="italic font-light text-ivory/80">EXPERIENCE.</span>
          </h2>
        </div>

        {/* Asymmetrical Luxury Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Inclusions List */}
          <div className="lg:col-span-6 space-y-10 sm:space-y-12">
            {INCLUSIONS.map((item, idx) => {
              const isActive = idx === activeItem;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveItem(idx)}
                  className={`cursor-pointer transition-all duration-300 pb-8 border-b border-white/[0.08] ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs text-ivory/60 tracking-luxury">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-ivory/70 font-light leading-relaxed font-sans pl-8 max-w-lg">
                    {item.caption}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Premium Digital Interface Mockup */}
          <div className="lg:col-span-6 bg-surface border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] text-xs font-mono text-ivory/40">
              <span className="tracking-luxury uppercase">FIT90 OS • Member Sanctum</span>
              <span>Day 34 / 90</span>
            </div>

            {/* Active Mockup Screen */}
            <div className="py-8 space-y-6">
              {activeItem === 0 && (
                <div className="animate-cinematic space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-ivory/40 block">Today’s Session</span>
                  <div className="font-serif text-2xl sm:text-3xl text-ivory uppercase">Upper Push & Core Longevity</div>
                  <div className="text-xs font-mono text-ivory/60">4 Movements • 45 Mins • RPE 8.0</div>
                  <div className="p-4 bg-noir border border-white/[0.06] text-xs font-mono space-y-2 mt-4">
                    <div className="flex justify-between text-ivory">
                      <span>1. Incline Barbell Press</span>
                      <span>4 × 8 @ 85kg</span>
                    </div>
                    <div className="flex justify-between text-ivory/60">
                      <span>2. Overhead Neutral DB Press</span>
                      <span>3 × 10 @ 28kg</span>
                    </div>
                    <div className="flex justify-between text-ivory/60">
                      <span>3. Weighted Dips</span>
                      <span>3 × 12 @ +10kg</span>
                    </div>
                  </div>
                </div>
              )}

              {activeItem === 1 && (
                <div className="animate-cinematic space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-ivory/40 block">Nutritional Framework</span>
                  <div className="font-serif text-2xl sm:text-3xl text-ivory uppercase">2,450 KCAL • 195G PROTEIN</div>
                  <div className="text-xs font-mono text-ivory/60">Calculated for metabolic density & lean recomposition</div>
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="p-3 bg-noir border border-white/[0.06] text-center">
                      <span className="text-[10px] font-mono text-ivory/40 block">Protein</span>
                      <span className="text-base font-serif text-ivory">195g</span>
                    </div>
                    <div className="p-3 bg-noir border border-white/[0.06] text-center">
                      <span className="text-[10px] font-mono text-ivory/40 block">Carbs</span>
                      <span className="text-base font-serif text-ivory">230g</span>
                    </div>
                    <div className="p-3 bg-noir border border-white/[0.06] text-center">
                      <span className="text-[10px] font-mono text-ivory/40 block">Fats</span>
                      <span className="text-base font-serif text-ivory">65g</span>
                    </div>
                  </div>
                </div>
              )}

              {activeItem === 2 && (
                <div className="animate-cinematic space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-ivory/40 block">Daily Discipline Scorecard</span>
                  <div className="font-serif text-2xl sm:text-3xl text-ivory uppercase">34 CONSECUTIVE DAYS</div>
                  <div className="text-xs font-mono text-ivory/60">98.2% Adherence to Core Non-Negotiables</div>
                  <div className="space-y-2 pt-2 text-xs font-mono">
                    <div className="p-2.5 bg-noir border border-white/[0.06] flex items-center justify-between text-ivory">
                      <span>Morning Sunlight & Hydration</span>
                      <span className="text-ivory/50">Completed</span>
                    </div>
                    <div className="p-2.5 bg-noir border border-white/[0.06] flex items-center justify-between text-ivory">
                      <span>Training Session</span>
                      <span className="text-ivory/50">Completed</span>
                    </div>
                  </div>
                </div>
              )}

              {activeItem === 3 && (
                <div className="animate-cinematic space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-ivory/40 block">Member Sanctum</span>
                  <div className="font-serif text-2xl sm:text-3xl text-ivory uppercase">DISTRACTION-FREE PLATFORM</div>
                  <div className="text-xs font-mono text-ivory/60">Seamless across mobile, tablet and desktop</div>
                  <div className="p-4 bg-noir border border-white/[0.06] text-xs font-mono text-ivory/70 leading-relaxed">
                    Zero ads. Zero community spam. Direct, focused access to your daily curriculum, exercise video masterclasses, and metrics vault.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-ivory/40">
              <span>Instant Digital Delivery Upon Enrollment</span>
              <span>iOS & Android Compatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


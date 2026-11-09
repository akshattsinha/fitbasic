import React, { useState } from 'react';

interface Inclusion {
  number: string;
  title: string;
  caption: string;
}

const INCLUSIONS: Inclusion[] = [
  {
    number: "01",
    title: "Periodized Movement Architecture",
    caption: "Twelve weeks of progressive compound resistance and restorative mobility, engineered for premier gym environments or private home spaces."
  },
  {
    number: "02",
    title: "Metabolic Nutrition Protocol",
    caption: "A flexible macronutrient and whole-food culinary framework aligned with your metabolic rate, executive travel, and social dining."
  },
  {
    number: "03",
    title: "Circadian & Habit Operating System",
    caption: "Non-negotiable daily anchors covering morning light exposure, parasympathetic sleep hygiene, and cognitive focus."
  },
  {
    number: "04",
    title: "The Digital Member Sanctum",
    caption: "An uncluttered, distraction-free platform for session logging, tempo intervals, and high-definition movement instruction."
  }
];

export const QuietExperience: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="experience" className="relative py-28 sm:py-44 bg-champagne border-t border-[#343630]/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-4">
            The Deliverables
          </p>
          <h2 className="font-serif text-4xl sm:text-7xl text-charcoal uppercase tracking-tight font-normal">
            THE FIT90 <span className="italic font-light text-charcoal/70">EXPERIENCE.</span>
          </h2>
        </div>

        {/* Asymmetrical Luxury Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Inclusions List */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {INCLUSIONS.map((item, idx) => {
              const isActive = idx === activeItem;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveItem(idx)}
                  className={`cursor-pointer transition-all duration-300 pb-8 border-b border-[#343630]/[0.1] ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs text-charcoal/50 tracking-luxury">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-charcoal/75 font-light leading-relaxed font-sans pl-8 max-w-lg">
                    {item.caption}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Premium Device & Interface Mockup in Pure Luxury Light */}
          <div className="lg:col-span-6 bg-ivory border border-[#343630]/[0.08] p-6 sm:p-10 shadow-elevated relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-[#343630]/[0.08] text-xs font-mono text-charcoal/50">
              <span className="tracking-luxury uppercase">FIT90 OS • Member Sanctum</span>
              <span>Day 34 / 90</span>
            </div>

            {/* Active Mockup Screen */}
            <div className="py-8 space-y-6">
              {activeItem === 0 && (
                <div className="animate-fade-in space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Session 34</span>
                  <div className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">Upper Push & Core Longevity</div>
                  <div className="text-xs font-mono text-charcoal/60">4 Movements • 45 Mins • RPE 8.0</div>
                  <div className="p-4 bg-champagne/60 border border-[#343630]/[0.08] text-xs font-mono space-y-2 mt-4">
                    <div className="flex justify-between text-charcoal font-medium">
                      <span>1. Incline Barbell Press</span>
                      <span>4 × 8 @ 85kg</span>
                    </div>
                    <div className="flex justify-between text-charcoal/70">
                      <span>2. Overhead Neutral Press</span>
                      <span>3 × 10 @ 28kg</span>
                    </div>
                    <div className="flex justify-between text-charcoal/70">
                      <span>3. Weighted Dips</span>
                      <span>3 × 12 @ +10kg</span>
                    </div>
                  </div>
                </div>
              )}

              {activeItem === 1 && (
                <div className="animate-fade-in space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Nutritional Framework</span>
                  <div className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">2,450 KCAL • 195G PROTEIN</div>
                  <div className="text-xs font-mono text-charcoal/60">Calculated for metabolic density & lean recomposition</div>
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="p-3 bg-champagne/60 border border-[#343630]/[0.08] text-center">
                      <span className="text-[10px] font-mono text-charcoal/50 block">Protein</span>
                      <span className="text-base font-serif text-charcoal font-semibold">195g</span>
                    </div>
                    <div className="p-3 bg-champagne/60 border border-[#343630]/[0.08] text-center">
                      <span className="text-[10px] font-mono text-charcoal/50 block">Carbs</span>
                      <span className="text-base font-serif text-charcoal font-semibold">230g</span>
                    </div>
                    <div className="p-3 bg-champagne/60 border border-[#343630]/[0.08] text-center">
                      <span className="text-[10px] font-mono text-charcoal/50 block">Fats</span>
                      <span className="text-base font-serif text-charcoal font-semibold">65g</span>
                    </div>
                  </div>
                </div>
              )}

              {activeItem === 2 && (
                <div className="animate-fade-in space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Daily Discipline Index</span>
                  <div className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">34 CONSECUTIVE DAYS</div>
                  <div className="text-xs font-mono text-charcoal/60">98.2% Adherence to Core Non-Negotiables</div>
                  <div className="space-y-2 pt-2 text-xs font-mono">
                    <div className="p-2.5 bg-champagne/60 border border-[#343630]/[0.08] flex items-center justify-between text-charcoal">
                      <span>Morning Sunlight & Hydration</span>
                      <span className="text-charcoal/60">Completed</span>
                    </div>
                    <div className="p-2.5 bg-champagne/60 border border-[#343630]/[0.08] flex items-center justify-between text-charcoal">
                      <span>Training Session</span>
                      <span className="text-charcoal/60">Completed</span>
                    </div>
                  </div>
                </div>
              )}

              {activeItem === 3 && (
                <div className="animate-fade-in space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Member Sanctum</span>
                  <div className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">DISTRACTION-FREE PLATFORM</div>
                  <div className="text-xs font-mono text-charcoal/60">Seamless across mobile, tablet and desktop</div>
                  <div className="p-4 bg-champagne/60 border border-[#343630]/[0.08] text-xs font-mono text-charcoal/80 leading-relaxed">
                    Zero advertisements. Zero noisy forums. Direct, quiet access to your daily curriculum, 4K movement tutorials, and progress records.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-[#343630]/[0.08] flex items-center justify-between text-[11px] font-mono text-charcoal/50">
              <span>Instant Digital Delivery Upon Enrollment</span>
              <span>iOS & Android Compatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


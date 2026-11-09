import React, { useState } from 'react';
import { Dumbbell, Utensils, CheckCircle2, TrendingUp, Sparkles, Clock, Flame } from 'lucide-react';
import { AmbientGradients } from './AmbientGradients';

interface ExperienceInclusion {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: any;
}

const INCLUSIONS: ExperienceInclusion[] = [
  {
    id: "workouts",
    number: "01",
    title: "Structured Workouts",
    summary: "A 12-week periodized curriculum for premier gym facilities or private home setups with exact tempos, sets, and rest intervals.",
    deliverables: [
      "Gym & Home tracks with dumbbell & bodyweight scaling",
      "Over 120+ 4K biomechanical video masterclasses",
      "Dynamic warm-up & post-session mobility flows"
    ],
    icon: Dumbbell
  },
  {
    id: "nutrition",
    number: "02",
    title: "Nutrition Guidance",
    summary: "Science-grounded nutritional architecture providing personalized caloric and macronutrient targets matched to your metabolic rate.",
    deliverables: [
      "High-protein gourmet recipe vault (prep under 20 mins)",
      "Executive dining-out and international travel playbooks",
      "Blood sugar stabilization & metabolic flexibility"
    ],
    icon: Utensils
  },
  {
    id: "habits",
    number: "03",
    title: "Daily Habits",
    summary: "Proprietary habit operating system designed to build non-negotiable consistency across morning light, focus, and sleep.",
    deliverables: [
      "Morning 15-minute physiological priming protocol",
      "Daily Habit Scorecard with real-time streak tracker",
      "Evening circadian alignment to deepen parasympathetic recovery"
    ],
    icon: CheckCircle2
  },
  {
    id: "tracking",
    number: "04",
    title: "Progress Tracking",
    summary: "Data-driven accountability logging body recomposition metrics, strength progression PRs, and weekly milestone audits.",
    deliverables: [
      "Bi-weekly biometric checks and adjustment algorithms",
      "Private visual progress comparison vault",
      "Strength PR tracking across key compound movement benchmarks"
    ],
    icon: TrendingUp
  }
];

export const WarmExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = INCLUSIONS[activeTab];

  return (
    <section id="experience" className="relative py-28 sm:py-44 bg-champagne-soft border-t border-delicate overflow-hidden">
      {/* Soft Moving Ambient Background Gradients */}
      <AmbientGradients variant="section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-4">
            The Deliverables
          </p>
          <h2 className="font-serif text-4xl sm:text-7xl text-charcoal uppercase tracking-tight font-normal">
            THE FIT90 <span className="italic font-light text-charcoal/70">EXPERIENCE.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 font-light mt-4 font-sans">
            Every component is engineered to eliminate guesswork and build sustainable physical excellence.
          </p>
        </div>

        {/* Asymmetrical Layout: Interactive Inclusions Left, Floating Mockup Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Inclusions */}
          <div className="lg:col-span-6 space-y-6">
            {INCLUSIONS.map((item, idx) => {
              const isActive = idx === activeTab;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 sm:p-8 rounded-sm border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-ivory border-delicate-darker shadow-card-warm translate-x-2'
                      : 'bg-ivory/40 border-delicate hover:bg-ivory/70 hover:border-delicate-darker'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-taupe tracking-luxury">
                      INCLUSION {item.number}
                    </span>
                    <span className={`text-xs font-mono transition-colors ${isActive ? 'text-charcoal font-bold' : 'text-charcoal/40'}`}>
                      {isActive ? 'Active View' : 'Select'}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed font-sans mb-4">
                    {item.summary}
                  </p>

                  {/* Bullet Highlights */}
                  {isActive && (
                    <div className="pt-4 border-t border-delicate space-y-2 animate-fade-in">
                      {item.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-charcoal/80 font-light font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Premium Floating Digital Mockup Canvas */}
          <div className="lg:col-span-6 bg-ivory border border-delicate-darker p-6 sm:p-10 shadow-elevated relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-delicate text-xs font-mono text-charcoal/50">
              <span className="tracking-luxury uppercase">FIT90 OS • Member Sanctum</span>
              <span className="flex items-center gap-1.5 text-taupe font-semibold">
                <Flame className="w-3.5 h-3.5" />
                Day 34 / 90
              </span>
            </div>

            {/* Dynamic Mockup Viewport */}
            <div className="py-8 min-h-[380px] flex flex-col justify-between">
              {activeTab === 0 && (
                <div className="animate-fade-in space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Session 34</span>
                      <h4 className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">Upper Push & Core Longevity</h4>
                    </div>
                    <span className="text-xs font-mono text-taupe font-semibold">45 Mins • RPE 8.0</span>
                  </div>

                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 bg-champagne-light/70 border border-delicate flex items-center justify-between">
                      <div>
                        <span className="text-charcoal font-semibold block">1. Incline Barbell Press</span>
                        <span className="text-[11px] text-charcoal/60">Tempo: 3-0-1-0 • 120s Rest</span>
                      </div>
                      <span className="text-charcoal font-bold">4 × 8 @ 85kg</span>
                    </div>

                    <div className="p-3 bg-champagne-light/70 border border-delicate flex items-center justify-between">
                      <div>
                        <span className="text-charcoal font-semibold block">2. Standing Neutral DB Press</span>
                        <span className="text-[11px] text-charcoal/60">Tempo: 2-0-1-0 • 90s Rest</span>
                      </div>
                      <span className="text-charcoal font-bold">3 × 10 @ 28kg</span>
                    </div>

                    <div className="p-3 bg-champagne-light/70 border border-delicate flex items-center justify-between">
                      <div>
                        <span className="text-charcoal font-semibold block">3. Half-Kneeling Pallof Press</span>
                        <span className="text-[11px] text-charcoal/60">3s Isometric Brace Hold</span>
                      </div>
                      <span className="text-charcoal font-bold">3 × 12 / Side</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="animate-fade-in space-y-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Nutrition Blueprint</span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">2,450 KCAL • 195G PROTEIN</h4>
                    <p className="text-xs font-mono text-charcoal/60 mt-1">Caloric equilibrium calibrated for lean recomposition</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-champagne-light/70 border border-delicate text-center">
                      <span className="text-[10px] font-mono text-charcoal/50 block">Target Protein</span>
                      <span className="text-lg font-serif text-charcoal font-semibold">195g</span>
                    </div>
                    <div className="p-3 bg-champagne-light/70 border border-delicate text-center">
                      <span className="text-[10px] font-mono text-charcoal/50 block">Complex Carbs</span>
                      <span className="text-lg font-serif text-charcoal font-semibold">230g</span>
                    </div>
                    <div className="p-3 bg-champagne-light/70 border border-delicate text-center">
                      <span className="text-[10px] font-mono text-charcoal/50 block">Healthy Fats</span>
                      <span className="text-lg font-serif text-charcoal font-semibold">65g</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-champagne-light/70 border border-delicate text-xs font-mono space-y-1">
                    <span className="text-taupe font-semibold block text-[10px] uppercase">Featured Vault Recipe:</span>
                    <span className="text-charcoal font-medium">Pan-Seared Sea Bass with Asparagus & Roasted Sweet Potato (54g Protein)</span>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="animate-fade-in space-y-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Daily Discipline Scorecard</span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">34 CONSECUTIVE DAYS</h4>
                    <p className="text-xs font-mono text-charcoal/60 mt-1">98.2% Adherence to Core Non-Negotiables</p>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-3 bg-champagne-light/70 border border-delicate flex items-center justify-between">
                      <span className="text-charcoal font-medium">Morning 15-Min Circadian Light & Electrolytes</span>
                      <span className="text-sage font-semibold">06:45 AM</span>
                    </div>
                    <div className="p-3 bg-champagne-light/70 border border-delicate flex items-center justify-between">
                      <span className="text-charcoal font-medium">Upper Push Protocol Executed</span>
                      <span className="text-sage font-semibold">01:15 PM</span>
                    </div>
                    <div className="p-3 bg-champagne-light/70 border border-delicate flex items-center justify-between">
                      <span className="text-charcoal font-medium">Target 195g Protein Completed</span>
                      <span className="text-sage font-semibold">Completed</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="animate-fade-in space-y-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 block">Biometric Progression Vault</span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-charcoal uppercase">MEASURED RECOMPOSITION</h4>
                    <p className="text-xs font-mono text-charcoal/60 mt-1">Day 01 Baseline vs Day 34 Progression</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-champagne-light/70 border border-delicate">
                      <span className="text-[10px] text-charcoal/50 uppercase block">Weight Delta</span>
                      <span className="text-lg font-serif font-bold text-charcoal">-14.2 lbs</span>
                    </div>
                    <div className="p-3 bg-champagne-light/70 border border-delicate">
                      <span className="text-[10px] text-charcoal/50 uppercase block">Body Fat Delta</span>
                      <span className="text-lg font-serif font-bold text-charcoal">-4.6%</span>
                    </div>
                    <div className="p-3 bg-champagne-light/70 border border-delicate col-span-2">
                      <span className="text-[10px] text-charcoal/50 uppercase block">Strength Total Increase</span>
                      <span className="text-base font-serif font-semibold text-charcoal">+55 kg Compound Total (PR Tested)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-delicate flex items-center justify-between text-[11px] font-mono text-charcoal/50">
              <span>Instant Digital Portal Access Upon Enrollment</span>
              <span>Mobile & Desktop Synchronized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


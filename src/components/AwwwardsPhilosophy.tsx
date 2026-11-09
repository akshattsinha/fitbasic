import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { Quote, Sparkles, Activity, ShieldCheck, Heart, Moon } from 'lucide-react';

const PRINCIPLES = [
  {
    number: "01",
    tag: "Physical",
    title: "Movement Architecture",
    description: "Periodized compound resistance, rotational core stability and joint longevity protocols that build athletic confidence without exhaustion.",
    accent: "bg-sage/40 text-forest border-sage",
    icon: Activity
  },
  {
    number: "02",
    tag: "Metabolic",
    title: "Conscious Fuel",
    description: "Calibrated macronutrient distribution that fuels demanding careers, executive dining, and social events without neurotic restriction.",
    accent: "bg-powder/40 text-forest border-powder",
    icon: Sparkles
  },
  {
    number: "03",
    tag: "Neurological",
    title: "Trained Discipline",
    description: "Replacing erratic emotional motivation with daily non-negotiable rituals that make consistent physical execution automatic.",
    accent: "bg-peach/40 text-forest border-peach",
    icon: ShieldCheck
  },
  {
    number: "04",
    tag: "Circadian",
    title: "Parasympathetic Recovery",
    description: "Morning light synchronization, evening digital sunsets, and sleep architecture calibrated for deep cellular and cognitive repair.",
    accent: "bg-lavender/40 text-forest border-lavender",
    icon: Moon
  }
];

export const AwwwardsPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-28 sm:py-44 bg-cream-50 border-t border-forest/10 overflow-hidden">
      {/* Animated Background Mesh (Sage & Powder Blue) */}
      <AnimatedBackground theme="sage-blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20 sm:mb-28">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono uppercase tracking-luxury text-forest/50 block mb-4">
              02 • The Core Philosophy
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-forest uppercase tracking-tight leading-[0.95] font-normal">
              A BETTER YOU <br />
              <span className="italic font-light text-forest/75">IS BUILT DAILY.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg text-forest/75 font-light leading-relaxed font-sans text-pretty">
              FIT90 is not a frantic temporary sprint. It is an intentional 90-day architecture that aligns how you move, nourish, think and recover into an effortless permanent standard.
            </p>
          </div>
        </div>

        {/* Overlapping Editorial Image Composition */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-elevated mb-20 sm:mb-28 border border-white/60">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2400&q=90"
            alt="Tranquil Athletic Posture in Warm Light"
            className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98] hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-forest/10 to-transparent pointer-events-none" />

          {/* Floating Translucent Quote Card */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-lg p-6 sm:p-8 rounded-xl glass-panel shadow-glass border border-white/80">
            <Quote className="w-5 h-5 text-peach-dark mb-2" />
            <p className="font-serif text-lg sm:text-2xl text-forest italic font-normal leading-snug">
              "Transformation is not an emotional breakthrough. It is the cumulative grace of daily physical consistency."
            </p>
            <span className="text-[10px] font-mono uppercase tracking-luxury text-forest/50 block mt-3">
              The FIT90 Manifesto
            </span>
          </div>
        </div>

        {/* 4 Structured Interactive Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="p-8 rounded-xl glass-panel shadow-glass hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 border border-white/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-forest/40 tracking-luxury">
                      {p.number}
                    </span>
                    <span className={`text-[10px] font-mono uppercase tracking-luxury px-2.5 py-0.5 rounded-full border ${p.accent}`}>
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-forest uppercase tracking-tight mb-3 group-hover:text-forest transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-forest/75 font-light leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-forest/10 flex items-center justify-between text-[11px] font-mono text-forest/50">
                  <span>Integrated Daily</span>
                  <Icon className="w-4 h-4 text-forest/40 group-hover:text-forest transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


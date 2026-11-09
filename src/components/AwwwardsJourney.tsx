import React, { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { ShieldCheck, Dumbbell, Utensils, Brain, ArrowRight } from 'lucide-react';

interface Chapter {
  number: string;
  days: string;
  title: string;
  tagline: string;
  summary: string;
  theme: 'butter-warm' | 'sage-blue' | 'rose-sunset';
  accentColor: string;
  badgeBg: string;
  deliverables: {
    training: string;
    nutrition: string;
    mindset: string;
  };
  milestone: string;
  image: string;
}

const CHAPTERS: Chapter[] = [
  {
    number: "01",
    days: "DAYS 01–30",
    title: "FOUNDATION",
    tagline: "Attune the physical baseline.",
    summary: "Establish biomechanical competence, calibrate baseline metabolic energy, and anchor non-negotiable daily morning and evening rituals.",
    theme: 'butter-warm',
    accentColor: "border-butter text-forest",
    badgeBg: "bg-butter/30 text-forest border-butter",
    deliverables: {
      training: "3–4 Days/Week: Compound movement mechanics, joint stabilization & posture.",
      nutrition: "Calibrate baseline caloric equilibrium & 1.8g protein per kg.",
      mindset: "Habit anchoring: Morning 15-min sunlight and parasympathetic wind-down."
    },
    milestone: "Day 30 Biometric Baseline Audit",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "02",
    days: "DAYS 31–60",
    title: "PROGRESSION",
    tagline: "Elevate capacity through consistency.",
    summary: "Advance physical output through periodized overload, metabolic density, and nutrient timing that sustains executive stamina.",
    theme: 'sage-blue',
    accentColor: "border-powder text-forest",
    badgeBg: "bg-powder/30 text-forest border-powder",
    deliverables: {
      training: "4 Days/Week: Push / Pull / Legs split + Dedicated Zone 2 conditioning.",
      nutrition: "Strategic nutrient timing around workouts & executive dining matrices.",
      mindset: "Overcoming plateau resistance and locking in automatic execution."
    },
    milestone: "Day 60 Mid-Point Composition & Strength Benchmark",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=85"
  },
  {
    number: "03",
    days: "DAYS 61–90",
    title: "TRANSFORMATION",
    tagline: "Make the new standard permanent.",
    summary: "Consolidate peak athletic stamina and intuitive nourishment into an autonomic lifestyle that continues far beyond Day 90.",
    theme: 'rose-sunset',
    accentColor: "border-rose text-forest",
    badgeBg: "bg-rose/30 text-forest border-rose",
    deliverables: {
      training: "4–5 Days/Week: High-density athletic conditioning & muscular definition.",
      nutrition: "Shift from strict tracking to intuitive macronutrient mastery.",
      mindset: "Autonomic identity: Living the standard effortlessly without willpower drain."
    },
    milestone: "Day 90 Comprehensive Transformation Audit & Alumni Induction",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=85"
  }
];

export const AwwwardsJourney: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeChapter = CHAPTERS[activeIdx];

  return (
    <section id="journey" className="relative py-28 sm:py-44 bg-cream border-t border-forest/10 overflow-hidden">
      {/* Dynamic Animated Background changing with active chapter theme */}
      <AnimatedBackground theme={activeChapter.theme} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-luxury text-forest/50 block mb-4">
              03 • The 90-Day Curriculum
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-forest uppercase tracking-tight leading-[0.95] font-normal">
              THREE STAGES <br />
              <span className="italic font-light text-forest/75">OF MASTERY.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-forest/75 font-light font-sans leading-relaxed">
            Progress is not accidental; it is engineered. The curriculum transitions through three distinct phases to ensure zero burnout and permanent physical adaptation.
          </p>
        </div>

        {/* Interactive Horizontal Timeline Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CHAPTERS.map((ch, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={ch.number}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-6 sm:p-8 rounded-2xl transition-all duration-500 border relative group ${
                  isActive
                    ? 'glass-panel shadow-glass border-white scale-[1.02]'
                    : 'bg-white/40 border-white/60 hover:bg-white/60'
                }`}
              >
                {/* Active Top Gradient Pill */}
                {isActive && (
                  <div className="absolute -top-1 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-peach via-lavender to-powder" />
                )}

                <div className="flex items-center justify-between text-xs font-mono tracking-luxury text-forest/50 mb-3">
                  <span>STAGE {ch.number}</span>
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${ch.badgeBg}`}>
                    {ch.days}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-forest uppercase tracking-tight mb-1">
                  {ch.title}
                </h3>
                <p className="font-serif text-xs italic text-forest/60">
                  "{ch.tagline}"
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Visual Canvas */}
        <div className="glass-panel rounded-3xl border border-white/80 shadow-elevated overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Canvas (5 cols) */}
            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-white/60 bg-cream-200">
              <img
                key={activeChapter.image}
                src={activeChapter.image}
                alt={activeChapter.title}
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95] transition-all duration-700 animate-scale-gentle"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-panel shadow-sm border border-white/80">
                <div className="flex items-center gap-2 text-forest text-xs font-mono uppercase tracking-luxury mb-1">
                  <ShieldCheck className="w-4 h-4 text-peach-dark" />
                  <span>Milestone Target</span>
                </div>
                <div className="text-xs font-serif font-bold text-forest">
                  {activeChapter.milestone}
                </div>
              </div>
            </div>

            {/* Strategic Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className={`text-[11px] font-mono uppercase tracking-luxury px-3 py-1 rounded-full border inline-block mb-3 ${activeChapter.badgeBg}`}>
                  {activeChapter.days} • Phase Architecture
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-forest uppercase tracking-tight mb-3">
                  {activeChapter.title}: {activeChapter.tagline}
                </h3>
                <p className="text-sm sm:text-base text-forest/75 font-light leading-relaxed font-sans">
                  {activeChapter.summary}
                </p>
              </div>

              {/* 3 Pillar Dimension Cards */}
              <div className="space-y-3 font-sans">
                <div className="p-4 rounded-xl bg-white/50 border border-white/70 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-peach/30 border border-peach flex items-center justify-center shrink-0 text-forest">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-luxury text-forest/50 block">Movement Protocol</span>
                    <span className="text-xs sm:text-sm text-forest font-light">{activeChapter.deliverables.training}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/50 border border-white/70 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-powder/30 border border-powder flex items-center justify-center shrink-0 text-forest">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-luxury text-forest/50 block">Nutrition Strategy</span>
                    <span className="text-xs sm:text-sm text-forest font-light">{activeChapter.deliverables.nutrition}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/50 border border-white/70 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-lavender/30 border border-lavender flex items-center justify-center shrink-0 text-forest">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-luxury text-forest/50 block">Mindset & Habits</span>
                    <span className="text-xs sm:text-sm text-forest font-light">{activeChapter.deliverables.mindset}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-forest/10 flex items-center justify-between text-[11px] font-mono text-forest/50">
                <span>Adaptive progression calibrated bi-weekly</span>
                <span className="text-forest font-medium flex items-center gap-1">
                  View Full Protocol <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


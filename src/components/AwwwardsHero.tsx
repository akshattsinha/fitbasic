import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, Flame, Award } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface AwwwardsHeroProps {
  onOpenCheckout: () => void;
}

export const AwwwardsHero: React.FC<AwwwardsHeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-cream">
      {/* Animated Multi-Colour Mesh Gradient Background */}
      <AnimatedBackground theme="hero" />

      {/* Decorative Oversized Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.035] whitespace-nowrap">
        <span className="font-serif text-[28vw] leading-none text-forest font-bold tracking-tighter">
          FIT90
        </span>
      </div>

      {/* Main Layered Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Animated Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-peach-dark" />
              <span className="text-[11px] font-mono uppercase tracking-luxury text-forest/80 font-medium">
                The Premier 90-Day Lifestyle Architecture
              </span>
            </div>

            {/* Oversized Layered Display Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-forest tracking-tight uppercase leading-[0.9] font-normal">
              <span className="block font-sans font-light tracking-tight text-forest">
                90 DAYS.
              </span>
              <span className="block italic font-light text-forest/80">
                A DIFFERENT YOU.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-2xl text-forest/75 font-light tracking-wide max-w-xl font-sans leading-relaxed text-pretty">
              Transform the way you move, live and feel. An intentional 90-day architecture built on science, structured movement and daily discipline.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onOpenCheckout}
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:shadow-glass-hover hover:scale-[1.02] shadow-elevated"
              >
                <span>BEGIN YOUR JOURNEY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href="#philosophy"
                className="inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-luxury font-medium text-forest/70 hover:text-forest px-7 py-4 rounded-full glass-panel-subtle hover:bg-white/80 transition-all duration-300"
              >
                <span>DISCOVER FIT90</span>
                <ArrowDown className="w-4 h-4 text-forest/50" />
              </a>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-forest/10 text-xs font-mono text-forest/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage-dark" />
                <span>98.4% Completion Adherence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-powder-dark" />
                <span>04 Synchronized Pillars</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-peach-dark" />
                <span>Global Cohort (14 Countries)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Image & Floating UI Elements (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Main Editorial Photographic Canvas with Gradient Frame */}
              <div className="gradient-border rounded-2xl shadow-elevated">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-cream-200">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=90"
                    alt="FIT90 Athletic Form Campaign"
                    className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] hover:scale-105 transition-transform duration-1000 ease-out"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 text-[10px] font-mono tracking-luxury text-white/90 uppercase">
                    Plate 01 — Architectural Wellness
                  </div>
                </div>
              </div>

              {/* FLOATING ELEMENT 1: 90-Day Live Program Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 p-4 sm:p-5 rounded-xl glass-panel shadow-glass border border-white/80 max-w-[260px] animate-float-card">
                <div className="flex items-center justify-between text-[10px] font-mono text-forest/50 mb-1.5">
                  <span className="uppercase tracking-luxury">Today's Protocol</span>
                  <span className="flex items-center gap-1 text-peach-dark font-bold">
                    <Flame className="w-3 h-3 fill-peach" /> Day 34
                  </span>
                </div>
                <div className="font-serif text-lg font-normal text-forest leading-tight mb-1">
                  Upper Body Push & Core Density
                </div>
                <div className="text-[11px] font-mono text-forest/70 flex items-center justify-between pt-2 border-t border-forest/10">
                  <span>48 Mins</span>
                  <span className="text-sage-dark font-semibold">Target RPE 8.0</span>
                </div>
              </div>

              {/* FLOATING ELEMENT 2: Circular Progress Ring Indicator */}
              <div className="absolute -top-6 -left-6 sm:-left-10 p-3.5 sm:p-4 rounded-xl glass-panel shadow-glass border border-white/80 flex items-center gap-3 animate-float-card [animation-delay:2s]">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      className="stroke-forest/10"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="url(#progressGrad)"
                      strokeWidth="3"
                      strokeDasharray="94.2"
                      strokeDashoffset="26.3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E9BFAF" />
                        <stop offset="100%" stopColor="#A9C7CE" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-[11px] font-mono font-bold text-forest">
                    72%
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-luxury text-forest/50">Curriculum</div>
                  <div className="text-xs font-serif font-bold text-forest">34 / 90 Days</div>
                </div>
              </div>

              {/* FLOATING ELEMENT 3: Translucent Badge (Top Right) */}
              <div className="absolute top-6 -right-4 px-3 py-1 rounded-full glass-pill shadow-sm text-[10px] font-mono text-forest/80 border border-white/80 hidden sm:block">
                Metabolic Calibration
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Banner across the bottom */}
      <div className="relative z-10 w-full overflow-hidden py-3 border-y border-forest/10 bg-white/20 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-[11px] uppercase tracking-luxury text-forest/60">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 mx-4">
              <span>90 Days. A Different You</span>
              <span>•</span>
              <span className="text-forest font-semibold">Structured Movement</span>
              <span>•</span>
              <span>Metabolic Nutrition</span>
              <span>•</span>
              <span className="text-forest font-semibold">Daily Habit Operating System</span>
              <span>•</span>
              <span>Restorative Sleep Recovery</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};


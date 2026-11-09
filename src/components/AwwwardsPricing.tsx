import React, { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { ArrowUpRight, ShieldCheck, Check, Sparkles, Lock } from 'lucide-react';

interface AwwwardsPricingProps {
  onOpenCheckout: (currency: 'USD' | 'INR') => void;
}

export const AwwwardsPricing: React.FC<AwwwardsPricingProps> = ({ onOpenCheckout }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const priceString = currency === 'USD' ? '$297' : '₹14,999';

  return (
    <section id="pricing" className="relative py-28 sm:py-44 bg-cream border-t border-forest/10 overflow-hidden">
      {/* Animated Mesh Background (Butter Yellow & Warm Cream) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-noise opacity-40 z-10 pointer-events-none" />
        <div className="absolute top-10 left-10 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-butter/70 via-peach-light/40 to-transparent blur-[120px] animate-mesh-4" />
        <div className="absolute -bottom-30 right-10 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-sage/65 via-cream-200/50 to-transparent blur-[125px] animate-mesh-1" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        {/* Eyebrow */}
        <span className="text-[11px] font-mono uppercase tracking-luxury text-forest/50 block mb-4">
          06 • Program Investment
        </span>

        {/* Title */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-forest uppercase tracking-tight leading-[0.95] font-normal mb-6">
          THE 90-DAY <br />
          <span className="italic font-light text-forest/75">TRANSFORMATION.</span>
        </h2>

        <p className="text-base sm:text-xl text-forest/75 font-light max-w-xl mx-auto mb-10 font-sans leading-relaxed">
          Ninety days of structured movement, personalized metabolic fuel and autonomic daily discipline. Single one-time tuition.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center p-1.5 rounded-full glass-panel shadow-sm mb-12 border border-white/80">
          <button
            onClick={() => setCurrency('USD')}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-luxury transition-all ${
              currency === 'USD'
                ? 'bg-forest text-cream font-bold shadow-sm'
                : 'text-forest/60 hover:text-forest'
            }`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('INR')}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-luxury transition-all ${
              currency === 'INR'
                ? 'bg-forest text-cream font-bold shadow-sm'
                : 'text-forest/60 hover:text-forest'
            }`}
          >
            INR (₹)
          </button>
        </div>

        {/* Price Display */}
        <div className="mb-12">
          <div className="font-serif text-6xl sm:text-8xl lg:text-9xl text-forest tracking-tight font-normal leading-none">
            {priceString}
          </div>
          <div className="text-xs font-mono uppercase tracking-luxury text-forest/50 mt-3">
            One-Time Investment • Complete 90-Day Experience
          </div>
        </div>

        {/* Inclusions Card */}
        <div className="max-w-xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 text-left border border-white/80 shadow-elevated mb-12 relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-forest/10 mb-6">
            <span className="text-xs font-mono uppercase tracking-luxury text-forest/60 font-medium">
              Complete Curriculum Deliverables
            </span>
            <span className="text-[10px] font-mono uppercase tracking-luxury px-2.5 py-0.5 rounded-full bg-butter/30 text-forest border border-butter">
              All Inclusive
            </span>
          </div>

          <div className="space-y-4">
            {[
              'Complete 90-day periodized training system (Gym & Home tracks)',
              'Personalized metabolic nutrition & macro architecture',
              'Full 120+ 4K movement instructional video masterclass vault',
              'Proprietary daily habit & recovery scorecard',
              'Private digital member sanctum & lifetime updates',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-forest/85 font-light font-sans">
                <div className="w-5 h-5 rounded-full bg-sage/30 border border-sage flex items-center justify-center shrink-0 mt-0.5 text-forest">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-forest/10 flex items-center justify-between text-[11px] font-mono text-forest/50">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-forest/40" />
              <span>Encrypted 256-Bit SSL Checkout</span>
            </span>
            <span>Instant Access</span>
          </div>
        </div>

        {/* Purchase CTA */}
        <div>
          <button
            onClick={() => onOpenCheckout(currency)}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:shadow-glass-hover hover:scale-[1.02] shadow-elevated"
          >
            <span>BEGIN YOUR 90-DAY JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Guarantee Note */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-forest/50 tracking-luxury uppercase mt-8">
          <ShieldCheck className="w-4 h-4 text-forest/60" />
          <span>Protected by 14-Day Protocol Adherence Guarantee</span>
        </div>
      </div>
    </section>
  );
};

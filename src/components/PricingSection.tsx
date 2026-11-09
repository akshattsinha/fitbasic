import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowUpRight, Crown, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingSectionProps {
  onSelectPlan: (planId: 'standard' | 'concierge', currency: 'USD' | 'INR') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-brand-950 border-b border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-radial-glow pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
              <span className="w-6 h-px bg-accent-gold" />
              <span>Investment Architecture</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
              THE 90-DAY <br />
              <span className="font-serif italic font-normal gold-gradient-text">
                TRANSFORMATION OFFER.
              </span>
            </h2>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center p-1 rounded-sm bg-brand-900 border border-white/10 self-start md:self-end">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
                currency === 'USD'
                  ? 'bg-white text-brand-950 font-bold shadow'
                  : 'text-brand-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
                currency === 'INR'
                  ? 'bg-white text-brand-950 font-bold shadow'
                  : 'text-brand-400 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isStandard = plan.id === 'standard';
            const price = currency === 'USD' ? `$${plan.priceUSD}` : `₹${plan.priceINR.toLocaleString('en-IN')}`;
            const colSpan = isStandard ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={plan.id}
                className={`${colSpan} relative rounded-sm border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isStandard
                    ? 'bg-gradient-to-b from-brand-900/90 to-brand-950 border-accent-gold/40 shadow-2xl shadow-black ring-1 ring-accent-gold/30'
                    : 'bg-brand-900/50 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-sm border ${
                        isStandard
                          ? 'bg-accent-gold text-brand-950 font-bold border-accent-gold'
                          : 'bg-white/5 text-accent-champagne border-white/10 flex items-center gap-1.5'
                      }`}
                    >
                      {!isStandard && <Crown className="w-3 h-3 text-accent-gold" />}
                      {plan.badge}
                    </span>
                    <span className="text-xs font-mono text-brand-400">
                      {plan.period}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight mb-2">
                    {plan.name}
                  </h3>

                  <p className="font-serif italic text-accent-champagne text-sm mb-6">
                    {plan.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-300 font-light leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="border-y border-white/10 py-6 mb-8 flex items-baseline gap-3">
                    <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight">
                      {price}
                    </span>
                    <div className="text-xs font-mono text-brand-400">
                      <span className="block text-white font-medium">Single One-Time Investment</span>
                      <span>Full 90-Day Access & Resources</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-4">
                      Complete Program Deliverables:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-200">
                        <Check className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purchase CTA */}
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <button
                    onClick={() => onSelectPlan(plan.id, currency)}
                    className={`w-full py-4 px-6 rounded-sm text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl ${
                      isStandard
                        ? 'bg-white text-brand-950 hover:bg-accent-champagne hover:shadow-accent-gold/20'
                        : 'bg-brand-850 hover:bg-brand-800 text-white border border-white/20 hover:border-accent-gold'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-brand-400 mt-4">
                    <ShieldCheck className="w-4 h-4 text-accent-gold" />
                    <span>14-Day Protocol Adherence Guarantee</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Guarantee Block */}
        <div className="mt-16 p-8 rounded-sm bg-brand-900/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-accent-gold" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white uppercase text-base">
                The FIT90 14-Day Protocol Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-brand-300 font-light mt-1 max-w-2xl">
                Test the curriculum, access the portal, review the recipe vault, and execute the first 14 days. If you do not believe FIT90 is the most thorough lifestyle transformation experience you have ever encountered, simply email us within 14 days for a prompt 100% refund.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-brand-400 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 shrink-0">
            <span className="block text-white font-semibold">Immediate Portal Access</span>
            <span>Zero Long-Term Lock-in</span>
          </div>
        </div>
      </div>
    </section>
  );
};


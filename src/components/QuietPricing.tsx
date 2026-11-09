import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface QuietPricingProps {
  onOpenCheckout: (currency: 'USD' | 'INR') => void;
}

export const QuietPricing: React.FC<QuietPricingProps> = ({ onOpenCheckout }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const priceString = currency === 'USD' ? '$297' : '₹14,999';

  return (
    <section id="pricing" className="relative py-28 sm:py-44 bg-ivory border-t border-[#343630]/[0.08] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
        {/* Eyebrow */}
        <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-4">
          The Investment
        </p>

        {/* Title */}
        <h2 className="font-serif text-5xl sm:text-7xl text-charcoal uppercase tracking-tight font-normal mb-6">
          FIT<span className="italic font-light text-charcoal/70">90</span>
        </h2>

        <p className="text-base sm:text-xl text-charcoal/70 font-light max-w-xl mx-auto mb-10 font-sans leading-relaxed">
          Ninety days of structured movement, nutrition architecture and daily discipline. Single one-time investment.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center p-1 border border-[#343630]/[0.1] mb-12 bg-champagne">
          <button
            onClick={() => setCurrency('USD')}
            className={`px-4 py-1.5 text-xs font-mono uppercase tracking-luxury transition-colors ${
              currency === 'USD' ? 'bg-charcoal text-ivory font-medium' : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('INR')}
            className={`px-4 py-1.5 text-xs font-mono uppercase tracking-luxury transition-colors ${
              currency === 'INR' ? 'bg-charcoal text-ivory font-medium' : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            INR (₹)
          </button>
        </div>

        {/* Price Display */}
        <div className="mb-12">
          <div className="font-serif text-6xl sm:text-8xl text-charcoal tracking-tight font-normal">
            {priceString}
          </div>
          <div className="text-xs font-mono uppercase tracking-luxury text-charcoal/50 mt-2">
            One-Time Investment • Complete 90-Day Program
          </div>
        </div>

        {/* Main Inclusions */}
        <div className="max-w-md mx-auto text-left space-y-4 mb-14 py-8 border-y border-[#343630]/[0.1]">
          {[
            'Complete 90-day periodized training system (Gym & Home)',
            'Personalized metabolic nutrition & macro architecture',
            'Full 120+ 4K movement instructional video masterclasses',
            'Proprietary daily habit & recovery scorecard',
            'Private digital member sanctum & lifetime updates',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/80 font-light font-sans">
              <span className="text-charcoal font-mono text-xs mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Purchase CTA */}
        <div>
          <button
            onClick={() => onOpenCheckout(currency)}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-charcoal text-ivory text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-charcoal/90 shadow-elevated"
          >
            <span>BEGIN YOUR 90-DAY JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Protocol Guarantee */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-charcoal/50 tracking-luxury uppercase mt-8">
          <ShieldCheck className="w-4 h-4 text-charcoal/70" />
          <span>Protected by 14-Day Protocol Guarantee</span>
        </div>
      </div>
    </section>
  );
};


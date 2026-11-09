import React, { useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';

interface MinimalOfferProps {
  onOpenCheckout: (currency: 'USD' | 'INR') => void;
}

export const MinimalOffer: React.FC<MinimalOfferProps> = ({ onOpenCheckout }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const priceString = currency === 'USD' ? '$297' : '₹14,999';

  return (
    <section id="offer" className="relative py-28 sm:py-44 bg-noir border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
        {/* Eyebrow */}
        <p className="text-[11px] font-mono uppercase tracking-luxury text-ivory/40 mb-4">
          The Investment
        </p>

        {/* Title */}
        <h2 className="font-serif text-4xl sm:text-7xl text-ivory uppercase tracking-tight font-normal mb-6">
          FIT<span className="italic font-light">90</span>
        </h2>

        <p className="text-base sm:text-xl text-ivory/70 font-light max-w-xl mx-auto mb-12 font-sans">
          Ninety days of structured movement, nutrition architecture and daily discipline. Single one-time investment.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center p-1 border border-white/[0.08] mb-12 bg-surface">
          <button
            onClick={() => setCurrency('USD')}
            className={`px-4 py-1.5 text-xs font-mono uppercase tracking-luxury transition-colors ${
              currency === 'USD' ? 'bg-ivory text-noir font-medium' : 'text-ivory/50 hover:text-ivory'
            }`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('INR')}
            className={`px-4 py-1.5 text-xs font-mono uppercase tracking-luxury transition-colors ${
              currency === 'INR' ? 'bg-ivory text-noir font-medium' : 'text-ivory/50 hover:text-ivory'
            }`}
          >
            INR (₹)
          </button>
        </div>

        {/* Price Display */}
        <div className="mb-12">
          <div className="font-serif text-6xl sm:text-8xl text-ivory tracking-tight">
            {priceString}
          </div>
          <div className="text-xs font-mono uppercase tracking-luxury text-ivory/40 mt-2">
            One-Time Investment • Complete 90 Days
          </div>
        </div>

        {/* Concise List of Inclusions */}
        <div className="max-w-md mx-auto text-left space-y-4 mb-14 py-8 border-y border-white/[0.08]">
          {[
            'Complete 90-day periodized training system (Gym & Home)',
            'Personalized metabolic nutrition & macro architecture',
            'Full 120+ 4K movement instruction video masterclasses',
            'Proprietary daily habit & recovery scorecard',
            'Private digital member sanctum & lifetime updates',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/80 font-light font-sans">
              <span className="text-ivory font-mono text-xs mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Prominent Purchase Button */}
        <div>
          <button
            onClick={() => onOpenCheckout(currency)}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-ivory text-noir text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-white shadow-2xl"
          >
            <span>ENROLL IN FIT90</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Guarantee */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-ivory/40 tracking-luxury uppercase mt-8">
          <ShieldCheck className="w-4 h-4 text-ivory/60" />
          <span>Protected by 14-Day Protocol Guarantee</span>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { Check, Crown, Sparkles } from 'lucide-react';
import { PROGRAM_FEATURES } from '../data/content';

export const ProgramIncluded: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'core' | 'vip'>('all');

  const filteredFeatures = PROGRAM_FEATURES.filter((feat) => {
    if (filter === 'core') return feat.tier === 'all';
    if (filter === 'vip') return feat.tier === 'vip';
    return true;
  });

  return (
    <section id="included" className="relative py-24 sm:py-32 bg-brand-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
              <span className="w-6 h-px bg-accent-gold" />
              <span>Program Architecture</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
              WHAT IS <br />
              <span className="font-serif italic font-normal gold-gradient-text">
                INCLUDED IN FIT90.
              </span>
            </h2>
          </div>

          {/* Interactive Tier Filter */}
          <div className="flex items-center p-1 rounded-sm bg-brand-900 border border-white/10 self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
                filter === 'all'
                  ? 'bg-white text-brand-950 font-bold shadow'
                  : 'text-brand-400 hover:text-white'
              }`}
            >
              All Systems ({PROGRAM_FEATURES.length})
            </button>
            <button
              onClick={() => setFilter('core')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
                filter === 'core'
                  ? 'bg-white text-brand-950 font-bold shadow'
                  : 'text-brand-400 hover:text-white'
              }`}
            >
              Core Digital
            </button>
            <button
              onClick={() => setFilter('vip')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5 ${
                filter === 'vip'
                  ? 'bg-accent-gold text-brand-950 font-bold shadow'
                  : 'text-brand-400 hover:text-accent-gold'
              }`}
            >
              <Crown className="w-3 h-3" />
              <span>VIP Tier</span>
            </button>
          </div>
        </div>

        {/* Editorial Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFeatures.map((item) => {
            const isVIP = item.tier === 'vip';
            return (
              <div
                key={item.number}
                className={`relative p-7 rounded-sm border flex flex-col justify-between transition-all duration-300 ${
                  isVIP
                    ? 'bg-gradient-to-b from-brand-900 via-brand-900 to-brand-950 border-accent-gold/40 ring-1 ring-accent-gold/20'
                    : 'bg-brand-900/50 border-white/10 hover:border-white/25 hover:bg-brand-900/80'
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono tracking-widest text-brand-500">
                      SYS {item.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-sm border ${
                        isVIP
                          ? 'bg-accent-gold/10 text-accent-gold border-accent-gold/30'
                          : 'bg-white/5 text-brand-300 border-white/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-300 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="border-t border-white/10 pt-5 mt-auto">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-brand-400 mb-3">
                    Included Components:
                  </div>
                  <ul className="space-y-2">
                    {item.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-brand-200">
                        <Check className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                        <span className="font-light">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee / Distinction Banner */}
        <div className="mt-12 p-6 rounded-sm bg-brand-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-gold" />
            <span>Core Digital includes all 7 core modules with lifetime update access.</span>
          </div>
          <span className="text-brand-300">
            VIP 1-on-1 Concierge strictly capped to maintain exceptional coach-to-member ratio.
          </span>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [category, setCategory] = useState<'all' | 'program' | 'nutrition' | 'logistics' | 'results'>('all');

  const filteredItems = FAQ_ITEMS.filter((item) => {
    if (category === 'all') return true;
    return item.category === category;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-brand-950 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Clarity & Transparency</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[1.05] mb-5">
            FREQUENTLY ASKED <br />
            <span className="font-serif italic font-normal gold-gradient-text">
              QUESTIONS.
            </span>
          </h2>
          <p className="text-base text-brand-300 font-light leading-relaxed">
            Everything you need to know about the FIT90 curriculum, commitments, equipment, and access.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Inquiries' },
            { id: 'program', label: 'Program & Training' },
            { id: 'nutrition', label: 'Nutrition Strategy' },
            { id: 'results', label: 'Tracking & Results' },
            { id: 'logistics', label: 'Access & Guarantees' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all border ${
                category === cat.id
                  ? 'bg-white text-brand-950 font-bold border-white shadow'
                  : 'bg-brand-900/60 text-brand-400 border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-sm border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-900/90 border-accent-gold/40 shadow-xl'
                    : 'bg-brand-900/40 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-sm border border-white/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-white/10 text-accent-gold' : 'text-brand-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-300 font-light leading-relaxed border-t border-white/5 animate-fade-in">
                    <p className="max-w-3xl">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Help Prompt */}
        <div className="mt-14 p-6 rounded-sm bg-brand-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-accent-gold shrink-0 hidden sm:block" />
            <div>
              <div className="font-display font-semibold text-white text-sm">
                Have a bespoke executive inquiry or specific medical condition?
              </div>
              <div className="text-xs text-brand-400 font-mono mt-0.5">
                Our performance advisory team is available for confidential consultations.
              </div>
            </div>
          </div>
          <a
            href="mailto:concierge@fit90.com"
            className="text-xs font-mono uppercase tracking-widest text-white hover:text-accent-gold border-b border-white/30 hover:border-accent-gold pb-0.5 whitespace-nowrap"
          >
            Contact Advisory Team →
          </a>
        </div>
      </div>
    </section>
  );
};


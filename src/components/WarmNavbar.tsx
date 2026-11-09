import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WarmNavbarProps {
  onOpenCheckout: () => void;
}

export const WarmNavbar: React.FC<WarmNavbarProps> = ({ onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-md py-4 border-b border-delicate shadow-soft-luxury'
          : 'bg-transparent py-7 sm:py-9'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* FIT90 Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl sm:text-3xl tracking-tight text-charcoal font-normal">
            FIT<span className="italic font-light text-charcoal/70">90</span>
          </span>
        </a>

        {/* Minimal Navigation */}
        <div className="flex items-center gap-6 sm:gap-10">
          <a
            href="#philosophy"
            className="text-xs uppercase tracking-luxury text-charcoal/60 hover:text-charcoal transition-colors hidden md:inline-block font-sans"
          >
            Philosophy
          </a>
          <a
            href="#journey"
            className="text-xs uppercase tracking-luxury text-charcoal/60 hover:text-charcoal transition-colors hidden md:inline-block font-sans"
          >
            The 90 Days
          </a>
          <a
            href="#experience"
            className="text-xs uppercase tracking-luxury text-charcoal/60 hover:text-charcoal transition-colors hidden md:inline-block font-sans"
          >
            The System
          </a>
          <a
            href="#stories"
            className="text-xs uppercase tracking-luxury text-charcoal/60 hover:text-charcoal transition-colors hidden md:inline-block font-sans"
          >
            Results
          </a>

          {/* One Elegant Right CTA */}
          <button
            onClick={onOpenCheckout}
            className="group relative text-xs uppercase tracking-luxury font-medium px-5 py-2.5 bg-charcoal text-ivory rounded-none hover:bg-charcoal/90 transition-all duration-300 flex items-center gap-1.5 shadow-soft-luxury"
          >
            <span>JOIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};


import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MinimalNavbarProps {
  onOpenCheckout: () => void;
}

export const MinimalNavbar: React.FC<MinimalNavbarProps> = ({ onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/85 backdrop-blur-md py-4 border-b border-white/[0.06]'
          : 'bg-transparent py-7 sm:py-9'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* FIT90 Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl sm:text-3xl tracking-tight text-ivory font-normal">
            FIT<span className="italic font-light">90</span>
          </span>
        </a>

        {/* Navigation Actions */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="#journey"
            className="text-xs uppercase tracking-luxury text-ivory/60 hover:text-ivory transition-colors hidden sm:inline-block font-sans"
          >
            The Journey
          </a>
          <a
            href="#experience"
            className="text-xs uppercase tracking-luxury text-ivory/60 hover:text-ivory transition-colors hidden sm:inline-block font-sans"
          >
            The System
          </a>
          
          {/* Only One Prominent Purchase Button */}
          <button
            onClick={onOpenCheckout}
            className="group relative text-xs uppercase tracking-luxury font-medium px-5 py-2.5 bg-ivory text-noir rounded-none hover:bg-white transition-all duration-300 flex items-center gap-1.5"
          >
            <span>JOIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};


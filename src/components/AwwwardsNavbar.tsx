import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface AwwwardsNavbarProps {
  onOpenCheckout: () => void;
}

export const AwwwardsNavbar: React.FC<AwwwardsNavbarProps> = ({ onOpenCheckout }) => {
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
          ? 'py-3.5 sm:py-4'
          : 'py-6 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div
          className={`flex items-center justify-between px-6 sm:px-8 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? 'glass-panel shadow-glass border border-white/80'
              : 'bg-white/35 backdrop-blur-md border border-white/50 shadow-soft-luxury'
          }`}
        >
          {/* FIT90 Brand Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-forest font-normal">
              FIT<span className="italic font-light text-forest/70">90</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sage/30 text-[10px] font-mono tracking-wider text-forest font-medium border border-sage/40">
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
              SPRING COHORT
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-luxury text-forest/70">
            <a href="#philosophy" className="hover:text-forest transition-colors">
              Philosophy
            </a>
            <a href="#journey" className="hover:text-forest transition-colors">
              The 90 Days
            </a>
            <a href="#experience" className="hover:text-forest transition-colors">
              The System
            </a>
            <a href="#stories" className="hover:text-forest transition-colors">
              Results
            </a>
            <a href="#pricing" className="hover:text-forest transition-colors">
              Tuition
            </a>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCheckout}
              className="group relative px-5 sm:px-6 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:shadow-glass-hover hover:scale-[1.02] flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">JOIN COHORT</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-gradient-to-r from-peach to-lavender opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


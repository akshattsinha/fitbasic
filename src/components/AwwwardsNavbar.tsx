import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';

interface AwwwardsNavbarProps {
  onOpenCheckout: () => void;
  onOpenEmergencyFile: () => void;
  onNavigateHome?: () => void;
  currentPage?: 'home' | 'emergency-file';
}

export const AwwwardsNavbar: React.FC<AwwwardsNavbarProps> = ({ 
  onOpenCheckout, 
  onOpenEmergencyFile,
  onNavigateHome,
  currentPage = 'home'
}) => {
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
          {/* REVERZN Brand Mark */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-forest font-normal">
              REVER<span className="italic font-light text-forest/70">ZN</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sage/30 text-[10px] font-mono tracking-wider text-forest font-medium border border-sage/40">
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
              SPRING COHORT
            </span>
          </button>

          {/* Action CTAs: ONLY Emergency File and Join REVERZN */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href="/emergency-file.html"
              className={`group relative px-3.5 sm:px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-luxury font-medium transition-all duration-300 border flex items-center gap-1.5 sm:gap-2 shadow-sm hover:scale-[1.02] cursor-pointer ${
                currentPage === 'emergency-file'
                  ? 'bg-peach text-forest border-peach-dark/40 shadow-md font-bold'
                  : 'bg-peach/25 hover:bg-peach/45 text-forest border-peach/50'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-peach-dark" />
              <span>EMERGENCY FILE</span>
            </a>

            <button
              type="button"
              onClick={onOpenCheckout}
              className="group relative px-5 sm:px-6 py-2.5 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:shadow-glass-hover hover:scale-[1.02] flex items-center gap-2 overflow-hidden shadow-elevated cursor-pointer"
            >
              <span className="relative z-10">JOIN REVERZN</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-gradient-to-r from-peach to-lavender opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

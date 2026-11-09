import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: (planId?: 'standard' | 'concierge') => void;
  onOpenPortalDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenPortalDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'The 90 Days', href: '#journey' },
    { name: 'What’s Included', href: '#included' },
    { name: 'Platform', href: '#experience' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Investment', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-brand-900 border-b border-white/5 py-2 px-4 text-center text-xs tracking-widest text-brand-400 uppercase font-mono flex items-center justify-center gap-3 relative z-50">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-gold"></span>
        </span>
        <span className="truncate">
          Spring 2026 Cohort Enrollment Active <span className="hidden sm:inline">— Strictly Limited to 150 Members</span>
        </span>
        <button
          onClick={() => onOpenCheckout('standard')}
          className="hidden md:inline-flex items-center gap-1 text-white hover:text-accent-gold transition-colors font-medium border-b border-white/30 hover:border-accent-gold pb-0.5 ml-2"
        >
          Secure Seat <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Luxury Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-950/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-sm bg-brand-850 border border-white/15 flex items-center justify-center transition-transform duration-300 group-hover:border-accent-gold/50">
              <span className="font-display font-bold text-lg tracking-wider text-accent-champagne">F</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.25em] text-lg font-bold text-white group-hover:text-accent-champagne transition-colors">
                FIT<span className="text-accent-gold">90</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-brand-400 uppercase -mt-1">
                Lifestyle Architecture
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] tracking-wider uppercase text-brand-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenPortalDemo}
              className="text-xs uppercase tracking-wider font-mono px-3.5 py-2 text-brand-300 hover:text-white border border-white/10 hover:border-white/25 rounded-sm transition-all duration-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>Preview App</span>
            </button>

            <button
              onClick={() => onOpenCheckout('standard')}
              className="relative group overflow-hidden bg-white text-brand-950 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-sm hover:bg-accent-champagne transition-all duration-300 shadow-lg hover:shadow-accent-gold/20 flex items-center gap-1.5"
            >
              <span className="relative z-10">Start Transformation</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-30 bg-brand-950/98 backdrop-blur-2xl border-t border-white/10 lg:hidden flex flex-col p-6 animate-fade-in">
          <div className="flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-brand-200 hover:text-accent-gold transition-colors font-medium border-b border-white/5 pb-3"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortalDemo();
              }}
              className="w-full py-3 text-center uppercase tracking-widest font-mono text-xs text-brand-200 border border-white/15 rounded-sm"
            >
              Preview Member App
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout('standard');
              }}
              className="w-full py-3.5 text-center uppercase tracking-widest font-bold text-xs bg-white text-brand-950 hover:bg-accent-champagne rounded-sm flex items-center justify-center gap-2"
            >
              Start Your Transformation
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-brand-400 font-mono pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
              <span>14-Day Protocol Guarantee</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


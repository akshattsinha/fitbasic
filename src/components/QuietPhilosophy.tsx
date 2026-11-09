import React from 'react';

export const QuietPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-28 sm:py-44 bg-champagne border-t border-[#343630]/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Editorial Statement */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-charcoal/50 mb-6">
            The Philosophy
          </p>

          <h2 className="font-serif text-4xl sm:text-7xl lg:text-8xl text-charcoal uppercase tracking-tight leading-[1] mb-8 font-normal">
            THE BEST INVESTMENT <br />
            <span className="italic font-light text-charcoal/70">IS YOURSELF.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-charcoal/75 font-light max-w-2xl leading-relaxed tracking-wide font-sans text-pretty">
            True transformation is quiet. It is the cumulative grace of deliberate movement, conscious nourishment and restorative rituals.
          </p>
        </div>

        {/* Full-Width Luxury Photography in Natural Light */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-ivory shadow-elevated">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2400&q=90"
            alt="Tranquil Movement in Natural Morning Light"
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-[11px] font-mono uppercase tracking-luxury text-white/90">
            Plate 02 — Quiet Sovereignty
          </div>
        </div>
      </div>
    </section>
  );
};


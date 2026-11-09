import React from 'react';

export const MinimalPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-28 sm:py-44 bg-noir border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Editorial Headline & Supporting Line */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <p className="text-[11px] font-mono uppercase tracking-luxury text-ivory/40 mb-6">
            The Philosophy
          </p>
          
          <h2 className="font-serif text-4xl sm:text-7xl lg:text-8xl text-ivory uppercase tracking-tight leading-[1] mb-8 font-normal">
            CHANGE DOESN'T HAPPEN <br />
            <span className="italic font-light text-ivory/80">BY CHANCE.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-ivory/70 font-light max-w-2xl leading-relaxed tracking-wide font-sans text-pretty">
            It is built through deliberate daily architecture: structured movement, conscious fuel and the quiet repetition of discipline.
          </p>
        </div>

        {/* Single Powerful High-Fashion Photography */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-surface">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
            alt="FIT90 Physical Focus"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.25] brightness-[0.75] hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-[11px] font-mono uppercase tracking-luxury text-ivory/50">
            Plate 01 — Physical Sovereignty
          </div>
        </div>
      </div>
    </section>
  );
};


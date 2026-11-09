import React from 'react';

interface AmbientGradientsProps {
  variant?: 'hero' | 'section' | 'subtle';
  className?: string;
}

export const AmbientGradients: React.FC<AmbientGradientsProps> = ({ variant = 'section', className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {variant === 'hero' && (
        <>
          {/* Peach & Champagne Warm Orb (Top Right) */}
          <div
            className="absolute -top-24 -right-24 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-gradient-to-br from-peach-subtle/80 via-champagne/60 to-transparent blur-[120px] opacity-70 animate-gradient-float-1"
          />
          {/* Sage Mist Soft Orb (Bottom Left) */}
          <div
            className="absolute -bottom-32 -left-28 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-gradient-to-tr from-sage-mist/75 via-champagne-light/65 to-transparent blur-[130px] opacity-65 animate-gradient-float-2"
          />
          {/* Central Pale Stone Ambient Glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-stone-pale/40 blur-[100px] opacity-50 animate-gradient-float-3"
          />
        </>
      )}

      {variant === 'section' && (
        <>
          {/* Champagne & Sage Soft Float */}
          <div
            className="absolute top-10 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-champagne/60 via-sage-mist/40 to-transparent blur-[130px] opacity-60 animate-gradient-float-2"
          />
          {/* Peach Warmth (Bottom Right) */}
          <div
            className="absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-peach-subtle/70 via-stone-light/50 to-transparent blur-[120px] opacity-55 animate-gradient-float-1"
          />
        </>
      )}

      {variant === 'subtle' && (
        <>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-champagne-soft/70 via-peach-subtle/40 to-sage-mist/40 blur-[140px] opacity-60 animate-gradient-float-3"
          />
        </>
      )}
    </div>
  );
};


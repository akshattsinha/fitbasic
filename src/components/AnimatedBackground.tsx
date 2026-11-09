import React from 'react';

interface AnimatedBackgroundProps {
  theme?: 'hero' | 'sage-blue' | 'lavender-peach' | 'butter-warm' | 'rose-sunset';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  theme = 'hero', 
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {/* Noise Texture Overlay for Editorial Grain */}
      <div className="absolute inset-0 bg-noise opacity-40 z-10 pointer-events-none" />

      {/* THEME: HERO (Multicolour vibrant & dynamic mesh) */}
      {theme === 'hero' && (
        <div className="absolute inset-0">
          {/* Orb 1: Radiant Peach (Top Right) */}
          <div
            className="absolute -top-32 -right-32 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full bg-gradient-to-br from-peach/80 via-peach-light/50 to-transparent blur-[110px] animate-mesh-1"
          />

          {/* Orb 2: Ethereal Lavender (Bottom Left) */}
          <div
            className="absolute -bottom-40 -left-36 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full bg-gradient-to-tr from-lavender/85 via-lavender-light/45 to-transparent blur-[120px] animate-mesh-2"
          />

          {/* Orb 3: Butter Yellow Glow (Center Right) */}
          <div
            className="absolute top-1/4 right-1/4 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-l from-butter/65 via-butter-light/35 to-transparent blur-[100px] animate-mesh-3"
          />

          {/* Orb 4: Fresh Sage & Powder Blue (Center Left) */}
          <div
            className="absolute top-1/3 -left-20 w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] rounded-full bg-gradient-to-r from-sage/75 via-powder/60 to-transparent blur-[115px] animate-mesh-4"
          />

          {/* Floating Rotating Ambient Ring (Center) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/20 rounded-full animate-spin-slow opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-peach/20 rounded-full animate-spin-reverse opacity-25" />
        </div>
      )}

      {/* THEME: SAGE-BLUE (Philosophy / Balance) */}
      {theme === 'sage-blue' && (
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sage/80 via-powder-light/50 to-transparent blur-[120px] animate-mesh-2" />
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-powder/75 via-butter-light/40 to-transparent blur-[110px] animate-mesh-1" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cream-300/40 blur-[130px] animate-mesh-4" />
        </div>
      )}

      {/* THEME: LAVENDER-PEACH (Experience / Creative) */}
      {theme === 'lavender-peach' && (
        <div className="absolute inset-0">
          <div className="absolute -top-32 right-10 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-lavender/85 via-rose-light/50 to-transparent blur-[120px] animate-mesh-1" />
          <div className="absolute bottom-10 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-peach/80 via-butter-light/45 to-transparent blur-[115px] animate-mesh-3" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-powder/40 blur-[130px] animate-mesh-2" />
        </div>
      )}

      {/* THEME: BUTTER-WARM (Pricing / Achievement) */}
      {theme === 'butter-warm' && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-butter/75 via-peach-light/40 to-transparent blur-[120px] animate-mesh-4" />
          <div className="absolute -bottom-30 right-10 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-sage/70 via-cream-200/50 to-transparent blur-[125px] animate-mesh-1" />
        </div>
      )}

      {/* THEME: ROSE-SUNSET (Final Statement / Climax) */}
      {theme === 'rose-sunset' && (
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-rose/70 via-lavender/60 to-transparent blur-[130px] animate-mesh-2" />
          <div className="absolute bottom-0 left-0 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-peach/75 via-powder/55 to-transparent blur-[125px] animate-mesh-1" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-butter/45 blur-[110px] animate-mesh-3" />
        </div>
      )}
    </div>
  );
};


import React from 'react';
import { X, Clock, Flame, Utensils, Check, Sparkles } from 'lucide-react';

export interface RecipeDetail {
  title: string;
  category: string;
  prepTime: string;
  calories: string;
  macros: {
    protein: string;
    carbs: string;
    fats: string;
  };
  ingredients: string[];
  instructions: string[];
  chefNote: string;
  image: string;
}

interface RecipeModalProps {
  recipe: RecipeDetail | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-brand-950 border border-white/20 rounded-lg shadow-2xl overflow-hidden my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-brand-400 hover:text-white rounded-full bg-black/70 hover:bg-black transition-colors"
          aria-label="Close Recipe Breakdown"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header */}
        <div className="relative h-56 sm:h-64 w-full bg-brand-900 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-black/60" />

          <div className="absolute top-4 left-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent-champagne bg-black/60 px-3 py-1 rounded-sm border border-white/10">
              {recipe.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
              {recipe.title}
            </h3>
            <div className="flex items-center gap-4 text-xs font-mono text-brand-300 mt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-accent-gold" />
                {recipe.prepTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-accent-champagne" />
                {recipe.calories}
              </span>
            </div>
          </div>
        </div>

        {/* Body Details */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Macro Breakdown */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-brand-900 rounded-sm border border-white/10 text-center">
              <span className="text-[10px] font-mono text-brand-400 uppercase">Protein</span>
              <div className="text-xl font-display font-bold text-accent-champagne mt-0.5">{recipe.macros.protein}</div>
            </div>
            <div className="p-3 bg-brand-900 rounded-sm border border-white/10 text-center">
              <span className="text-[10px] font-mono text-brand-400 uppercase">Carbohydrates</span>
              <div className="text-xl font-display font-bold text-brand-200 mt-0.5">{recipe.macros.carbs}</div>
            </div>
            <div className="p-3 bg-brand-900 rounded-sm border border-white/10 text-center">
              <span className="text-[10px] font-mono text-brand-400 uppercase">Healthy Fats</span>
              <div className="text-xl font-display font-bold text-brand-200 mt-0.5">{recipe.macros.fats}</div>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-3 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-accent-gold" />
              <span>Gourmet Ingredients:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-brand-200 p-2 rounded-sm bg-brand-900/40 border border-white/5">
                  <Check className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                  <span className="font-light">{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Directives */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-3">
              Preparation Directives (Under 15 Mins):
            </h4>
            <div className="space-y-2">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="p-3 rounded-sm bg-brand-900/40 border border-white/5 text-xs text-brand-300 flex items-start gap-2.5">
                  <span className="font-mono text-accent-gold font-bold">Step {idx + 1}:</span>
                  <span className="font-light leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chef Note */}
          <div className="p-4 rounded-sm bg-accent-gold/10 border border-accent-gold/30 text-xs text-brand-200 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-mono uppercase block text-[10px] mb-0.5">FIT90 Culinary Advisory Note:</strong>
              <span className="font-light">{recipe.chefNote}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-brand-900 border-t border-white/10 flex items-center justify-between text-xs font-mono text-brand-400">
          <span>From the FIT90 90-Day Recipe Vault</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white text-brand-950 font-bold uppercase rounded-sm hover:bg-accent-champagne transition-colors"
          >
            Close Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

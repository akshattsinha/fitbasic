import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AssessmentCalculatorProps {
  onApplyToCheckout: (goal: string) => void;
}

export const AssessmentCalculator: React.FC<AssessmentCalculatorProps> = ({ onApplyToCheckout }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<'recomp' | 'strength' | 'longevity'>('recomp');
  const [activity, setActivity] = useState<'desk' | 'moderate' | 'active'>('desk');
  const [weightKg, setWeightKg] = useState<number>(82);

  // Dynamic calculations based on science
  const estimatedMaintenanceCal = Math.round(weightKg * (activity === 'desk' ? 29 : activity === 'moderate' ? 33 : 36));
  const targetCalories = goal === 'recomp' 
    ? Math.round(estimatedMaintenanceCal * 0.82) 
    : goal === 'strength' 
    ? Math.round(estimatedMaintenanceCal * 1.08) 
    : estimatedMaintenanceCal;

  const targetProteinGrams = Math.round(weightKg * 2.1);
  const trainingDays = goal === 'recomp' ? '4 Days / Week' : goal === 'strength' ? '4–5 Days / Week' : '3–4 Days / Week';

  const goalTitles = {
    recomp: 'Lean Body Recomposition & Fat Loss',
    strength: 'Hypertrophy & Athletic Power',
    longevity: 'Metabolic Longevity & Executive Stamina',
  };

  return (
    <section className="relative py-20 sm:py-28 bg-brand-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
            <Calculator className="w-4 h-4" />
            <span>Interactive Assessment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[1.05] mb-4">
            CALCULATE YOUR <br />
            <span className="font-serif italic font-normal gold-gradient-text">
              90-DAY PROTOCOL BLUEPRINT.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-brand-300 font-light leading-relaxed">
            Enter your baseline parameters to preview your personalized FIT90 metabolic targets, training split, and progression schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-brand-950 border border-white/10 flex flex-col justify-between space-y-6">
            {/* Gender Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-brand-400 block mb-2.5">
                Biological Focus:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-sm border transition-all ${
                      gender === g
                        ? 'bg-white text-brand-950 font-bold border-white'
                        : 'bg-brand-900/60 text-brand-400 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {g === 'male' ? 'Men’s Architecture' : 'Women’s Architecture'}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Goal */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-brand-400 block mb-2.5">
                Primary 90-Day Target:
              </label>
              <div className="space-y-2">
                {[
                  { id: 'recomp', label: 'Lean Body Recomposition', desc: 'Reduce visceral fat while building dense lean muscle tissue' },
                  { id: 'strength', label: 'Athletic Strength & Power', desc: 'Maximal progressive overload, athletic density, and strength PRs' },
                  { id: 'longevity', label: 'Longevity & Executive Stamina', desc: 'Sustained cognitive energy, joint health, and metabolic flexibility' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setGoal(item.id as any)}
                    className={`p-3.5 rounded-sm border cursor-pointer transition-all ${
                      goal === item.id
                        ? 'bg-brand-900 border-accent-gold text-white'
                        : 'bg-brand-900/40 border-white/5 text-brand-400 hover:border-white/15'
                    }`}
                  >
                    <div className="font-display font-semibold text-sm text-white">{item.label}</div>
                    <div className="text-xs text-brand-400 font-mono mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Weight Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-widest text-brand-400">
                  Current Body Weight:
                </label>
                <span className="font-mono text-sm font-bold text-accent-champagne">
                  {weightKg} kg / {Math.round(weightKg * 2.20462)} lbs
                </span>
              </div>
              <input
                type="range"
                min="45"
                max="140"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-accent-gold cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-brand-500 mt-1">
                <span>45 kg (99 lbs)</span>
                <span>90 kg (198 lbs)</span>
                <span>140 kg (308 lbs)</span>
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-brand-400 block mb-2.5">
                Daily Occupation Activity:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'desk', label: 'Desk-Bound' },
                  { id: 'moderate', label: 'Moderate' },
                  { id: 'active', label: 'High Activity' },
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => setActivity(act.id as any)}
                    className={`py-2 px-3 text-xs font-mono rounded-sm border transition-all text-center ${
                      activity === act.id
                        ? 'bg-white text-brand-950 font-bold border-white'
                        : 'bg-brand-900/60 text-brand-400 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {act.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Generated Blueprint (Right Column) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-gradient-to-b from-brand-950 via-brand-950 to-brand-900 border border-accent-gold/30 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-champagne">
                    Your Personalized 90-Day Blueprint
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/5 text-brand-400 border border-white/10">
                  Algorithmic Estimate
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-400 block mb-1">
                  Target Trajectory:
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  {goalTitles[goal]}
                </h3>
              </div>

              {/* Calculated Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-brand-900/80 rounded-sm border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-brand-400 block">Daily Caloric Target</span>
                  <div className="text-2xl font-display font-bold text-accent-champagne mt-0.5">
                    {targetCalories.toLocaleString()} <span className="text-xs font-mono font-normal text-brand-400">kcal</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-500 mt-0.5 block">
                    {goal === 'recomp' ? 'Targeted -18% deficit' : goal === 'strength' ? 'Metabolic surplus +8%' : 'Caloric equilibrium'}
                  </span>
                </div>

                <div className="p-3.5 bg-brand-900/80 rounded-sm border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-brand-400 block">Optimal Daily Protein</span>
                  <div className="text-2xl font-display font-bold text-white mt-0.5">
                    {targetProteinGrams} <span className="text-xs font-mono font-normal text-brand-400">g/day</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-500 mt-0.5 block">
                    2.1g per kg bodyweight
                  </span>
                </div>

                <div className="p-3.5 bg-brand-900/80 rounded-sm border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase text-brand-400 block">Training Frequency</span>
                  <div className="text-lg font-display font-bold text-white mt-1">
                    {trainingDays}
                  </div>
                  <span className="text-[10px] font-mono text-brand-500 mt-0.5 block">
                    45–50 min sessions
                  </span>
                </div>
              </div>

              {/* 3-Phase Milestone Roadmap */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-brand-400">
                  Projected 3-Phase Transformation Milestones:
                </div>
                <div className="p-3 bg-brand-900/40 rounded-sm border border-white/5 text-xs text-brand-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Days 01–30 (Foundation):</strong> Establish habit baseline, eliminate fluid retention, restore sleep quality, and master compound biomechanics.
                  </div>
                </div>
                <div className="p-3 bg-brand-900/40 rounded-sm border border-white/5 text-xs text-brand-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Days 31–60 (Progression):</strong> Visceral fat reduction accelerates, progressive overload increases load by 15–25%, visible muscular tone emerges.
                  </div>
                </div>
                <div className="p-3 bg-brand-900/40 rounded-sm border border-white/5 text-xs text-brand-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Days 61–90 (Mastery):</strong> Consolidation of athletic physique, peak metabolic rate, autonomic habits that require zero cognitive willpower.
                  </div>
                </div>
              </div>
            </div>

            {/* Apply to Enrollment CTA */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <button
                onClick={() => onApplyToCheckout(goalTitles[goal])}
                className="w-full py-4 px-6 bg-white hover:bg-accent-champagne text-brand-950 font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Apply This Blueprint to Enrollment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] font-mono text-brand-500 mt-2">
                Pre-configures your onboarding intake profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


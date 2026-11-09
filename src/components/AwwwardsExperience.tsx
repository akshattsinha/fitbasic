import React, { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { Dumbbell, Utensils, CheckCircle2, TrendingUp, Flame, Play, Pause, RotateCcw, Clock, Sparkles } from 'lucide-react';

export const AwwwardsExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workout' | 'nutrition' | 'habits' | 'tracking'>('workout');

  // Interactive Workout Rest Timer
  const [timerSeconds, setTimerSeconds] = useState(90);
  const [timerRunning, setTimerRunning] = useState(false);

  // Interactive Habits List
  const [habits, setHabits] = useState([
    { id: 1, title: 'Morning 15-Min Circadian Sunlight & Electrolytes', done: true, tag: 'Prime' },
    { id: 2, title: 'Upper Body Heavy Push Protocol (45 mins)', done: true, tag: 'Train' },
    { id: 3, title: 'Target 195g High-Bioavailability Protein Met', done: true, tag: 'Fuel' },
    { id: 4, title: 'Digital Sunset: Zero Screen Glare 60 Mins Before Sleep', done: false, tag: 'Recover' },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  return (
    <section id="experience" className="relative py-28 sm:py-44 bg-cream-100 border-t border-forest/10 overflow-hidden">
      {/* Animated Background Mesh (Lavender & Peach) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-noise opacity-40 z-10 pointer-events-none" />
        <div className="absolute -top-32 right-10 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-lavender/75 via-rose-light/45 to-transparent blur-[120px] animate-mesh-1" />
        <div className="absolute bottom-10 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-peach/70 via-butter-light/40 to-transparent blur-[115px] animate-mesh-3" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-powder/40 blur-[130px] animate-mesh-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <span className="text-[11px] font-mono uppercase tracking-luxury text-forest/50 block mb-4">
            04 • The Digital Experience
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-forest uppercase tracking-tight leading-[0.95] font-normal">
            THE FIT90 <br />
            <span className="italic font-light text-forest/75">SANCTUM.</span>
          </h2>
          <p className="text-base sm:text-lg text-forest/75 font-light mt-4 font-sans">
            A distraction-free digital ecosystem engineered for clarity, progressive overload and daily adherence.
          </p>
        </div>

        {/* Asymmetrical Layout: Interactive Inclusions Left, Layered Device Mockup Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Inclusions List */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                id: 'workout',
                num: '01',
                title: 'Workout Planning',
                desc: '12-week progressive resistance, exact tempos, load tracking, and 120+ 4K form tutorials.',
                tag: 'Movement Architecture',
                color: 'border-peach text-peach-dark'
              },
              {
                id: 'nutrition',
                num: '02',
                title: 'Nutrition Guidance',
                desc: 'Science-backed macro blueprints, chef-engineered recipes, and executive dining strategies.',
                tag: 'Metabolic Architecture',
                color: 'border-powder text-powder-dark'
              },
              {
                id: 'habits',
                num: '03',
                title: 'Daily Habits',
                desc: 'Proprietary habit operating system with daily streaks, circadian alignment and sleep scores.',
                tag: 'Discipline Architecture',
                color: 'border-sage text-sage-dark'
              },
              {
                id: 'tracking',
                num: '04',
                title: 'Progress Tracking',
                desc: 'Objective data logging covering compound strength PRs, body composition, and bi-weekly audits.',
                tag: 'Progression Vault',
                color: 'border-lavender text-lavender-dark'
              },
            ].map((item) => {
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'glass-panel shadow-glass border-white scale-[1.02] translate-x-2'
                      : 'bg-white/40 border-white/60 hover:bg-white/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-forest/50 tracking-luxury">
                      INCLUSION {item.num}
                    </span>
                    <span className={`text-[10px] font-mono uppercase tracking-luxury px-2.5 py-0.5 rounded-full border bg-white/70 ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-forest uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-forest/75 font-light leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Layered Premium Device Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="gradient-border rounded-3xl shadow-elevated">
              <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-white/80 overflow-hidden relative">
                {/* Titlebar */}
                <div className="flex items-center justify-between pb-5 border-b border-forest/10 text-xs font-mono text-forest/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-peach" />
                    <div className="w-2.5 h-2.5 rounded-full bg-butter" />
                    <div className="w-2.5 h-2.5 rounded-full bg-sage" />
                    <span className="ml-2 uppercase tracking-luxury hidden sm:inline">FIT90 OS v3.8</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach/20 border border-peach/40 text-forest font-semibold">
                    <Flame className="w-3.5 h-3.5 text-peach-dark" />
                    <span>Day 34 / 90</span>
                  </div>
                </div>

                {/* Viewport Content */}
                <div className="py-6 min-h-[420px]">
                  {/* WORKOUT TAB */}
                  {activeTab === 'workout' && (
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl glass-panel-subtle border border-white/80">
                        <div>
                          <span className="text-[10px] font-mono text-forest/50 uppercase tracking-luxury">Day 34 • Upper Body</span>
                          <h4 className="font-serif text-2xl text-forest uppercase">Compound Push & Core</h4>
                          <span className="text-xs font-mono text-forest/60">48 Mins • Target RPE 8.0</span>
                        </div>

                        {/* Interactive Rest Timer */}
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-forest/10 self-start sm:self-center shadow-sm">
                          <Clock className="w-4 h-4 text-peach-dark" />
                          <span className="font-mono text-base font-bold text-forest">
                            0{Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                          </span>
                          <button
                            onClick={() => setTimerRunning(!timerRunning)}
                            className="p-1.5 rounded-md bg-forest text-cream hover:bg-forest/80 transition-colors"
                            aria-label="Toggle Rest Timer"
                          >
                            {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => { setTimerSeconds(90); setTimerRunning(false); }}
                            className="p-1.5 rounded-md bg-cream text-forest hover:bg-cream-200 transition-colors"
                            aria-label="Reset Timer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2.5 font-mono text-xs">
                        {[
                          { name: '1. Incline Barbell Press', sets: '4 × 8 Reps', tempo: 'Tempo: 3-0-1-0', weight: '85 kg', done: true },
                          { name: '2. Standing Neutral DB Press', sets: '3 × 10 Reps', tempo: 'Tempo: 2-0-1-0', weight: '28 kg/hand', done: true },
                          { name: '3. Half-Kneeling Pallof Press', sets: '3 × 12 Reps', tempo: '3s Isometric Hold', weight: 'Cable Pin 4', done: false },
                        ].map((ex, i) => (
                          <div key={i} className="p-3.5 rounded-xl bg-white/70 border border-white flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${ex.done ? 'bg-sage border-sage text-forest' : 'border-forest/20'}`}>
                                {ex.done && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                              <div>
                                <span className="font-medium text-forest block">{ex.name}</span>
                                <span className="text-[10px] text-forest/50">{ex.tempo}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-forest font-bold block">{ex.sets}</span>
                              <span className="text-[10px] text-peach-dark font-medium">{ex.weight}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NUTRITION TAB */}
                  {activeTab === 'nutrition' && (
                    <div className="space-y-5 animate-fade-in">
                      <div>
                        <span className="text-[10px] font-mono text-forest/50 uppercase tracking-luxury">Macro Distribution</span>
                        <h4 className="font-serif text-2xl text-forest uppercase">2,450 KCAL • 195G PROTEIN</h4>
                      </div>

                      <div className="grid grid-cols-3 gap-3 font-mono text-center">
                        <div className="p-4 rounded-xl bg-peach/20 border border-peach/40">
                          <span className="text-[10px] uppercase text-forest/60 block">Protein Target</span>
                          <span className="text-2xl font-serif font-bold text-forest mt-1 block">195g</span>
                          <span className="text-[10px] text-peach-dark font-medium">88% Logged</span>
                        </div>
                        <div className="p-4 rounded-xl bg-powder/20 border border-powder/40">
                          <span className="text-[10px] uppercase text-forest/60 block">Complex Carbs</span>
                          <span className="text-2xl font-serif font-bold text-forest mt-1 block">230g</span>
                          <span className="text-[10px] text-powder-dark font-medium">Fuel for Training</span>
                        </div>
                        <div className="p-4 rounded-xl bg-butter/20 border border-butter/40">
                          <span className="text-[10px] uppercase text-forest/60 block">Healthy Fats</span>
                          <span className="text-2xl font-serif font-bold text-forest mt-1 block">65g</span>
                          <span className="text-[10px] text-butter-dark font-medium">Hormonal Balance</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl glass-panel-subtle border border-white space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between">
                          <span className="text-peach-dark font-bold uppercase text-[10px]">Today's Featured Recipe:</span>
                          <span className="text-forest/50 text-[10px]">15 Min Prep Time</span>
                        </div>
                        <div className="text-sm font-serif font-semibold text-forest">
                          Grilled Flank Steak with Chimichurri, Wild Rice & Charred Asparagus
                        </div>
                        <div className="text-[11px] text-forest/70">
                          55g Protein • 62g Carbs • 18g Fats • 630 kcal
                        </div>
                      </div>
                    </div>
                  )}

                  {/* HABITS TAB */}
                  {activeTab === 'habits' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-forest/50 uppercase tracking-luxury">Discipline Operating System</span>
                          <h4 className="font-serif text-2xl text-forest uppercase">Daily Non-Negotiables</h4>
                        </div>
                        <div className="text-right font-mono">
                          <span className="text-forest font-bold text-lg block flex items-center gap-1 justify-end">
                            <Flame className="w-4 h-4 text-peach-dark" /> 34 Days
                          </span>
                          <span className="text-[10px] text-forest/50">98.2% Adherence</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {habits.map((h) => (
                          <div
                            key={h.id}
                            onClick={() => toggleHabit(h.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                              h.done ? 'bg-white border-sage/60 shadow-sm' : 'bg-white/40 border-forest/10'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${h.done ? 'bg-sage border-sage text-forest' : 'border-forest/20'}`}>
                                {h.done && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                              <span className={`text-xs font-sans ${h.done ? 'text-forest font-medium' : 'text-forest/60'}`}>
                                {h.title}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cream-200 text-forest/70">
                              {h.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PROGRESS TRACKING TAB */}
                  {activeTab === 'tracking' && (
                    <div className="space-y-5 animate-fade-in font-mono">
                      <div>
                        <span className="text-[10px] text-forest/50 uppercase tracking-luxury">Objective Progress Vault</span>
                        <h4 className="font-serif text-2xl text-forest uppercase">Biometric Recomposition</h4>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-4 rounded-xl bg-white border border-white shadow-sm">
                          <span className="text-[10px] text-forest/50 uppercase block">Total Weight Shift</span>
                          <span className="text-2xl font-serif font-bold text-forest mt-1 block">-14.2 lbs</span>
                          <span className="text-[10px] text-sage-dark font-medium">198.4 lbs → 184.2 lbs</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white border border-white shadow-sm">
                          <span className="text-[10px] text-forest/50 uppercase block">Body Fat Delta</span>
                          <span className="text-2xl font-serif font-bold text-forest mt-1 block">-4.6%</span>
                          <span className="text-[10px] text-sage-dark font-medium">21.8% → 17.2%</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/70 border border-white space-y-2 text-xs">
                        <span className="text-[10px] uppercase text-forest/50 block">Compound Strength Gains</span>
                        <div className="flex justify-between text-forest">
                          <span>Barbell Romanian Deadlift</span>
                          <span className="font-bold">+30 kg (100kg → 130kg)</span>
                        </div>
                        <div className="flex justify-between text-forest">
                          <span>Incline Dumbbell Press</span>
                          <span className="font-bold">+8 kg/hand (32kg → 40kg)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer of Device */}
                <div className="pt-4 border-t border-forest/10 flex items-center justify-between text-[11px] font-mono text-forest/50">
                  <span>Available on Web, iOS & Android</span>
                  <span className="text-forest font-semibold">Live Simulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

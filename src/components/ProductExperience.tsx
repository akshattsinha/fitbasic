import React, { useState } from 'react';
import { 
  Dumbbell, 
  Utensils, 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles,
  Flame,
  Award,
  ChevronRight,
  Eye
} from 'lucide-react';
import { ExerciseModal, ExerciseDetail } from './ExerciseModal';
import { RecipeModal, RecipeDetail } from './RecipeModal';

interface ProductExperienceProps {
  onOpenPortalDemo?: () => void;
}

export const ProductExperience: React.FC<ProductExperienceProps> = ({ onOpenPortalDemo }) => {
  const [activeTab, setActiveTab] = useState<'workout' | 'nutrition' | 'habits' | 'calendar' | 'metrics'>('workout');

  // Interactive Rest Timer State
  const [timerSeconds, setTimerSeconds] = useState(90);
  const [timerRunning, setTimerRunning] = useState(false);

  // Selected Modal States
  const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetail | null>(null);

  // Interactive Habit Checkbox State
  const [habits, setHabits] = useState([
    { id: 1, title: 'Morning 15-Min Circadian Sunlight & 500ml Electrolytes', done: true, category: 'Prime' },
    { id: 2, title: 'Upper Body Heavy Push Protocol (45 mins)', done: true, category: 'Train' },
    { id: 3, title: 'Target 195g High-Bioavailability Protein Met', done: true, category: 'Fuel' },
    { id: 4, title: 'Digital Sunset: Zero Blue Light 60 Mins Before Sleep', done: false, category: 'Recover' },
  ]);

  // Interactive Water Intake State
  const [waterCups, setWaterCups] = useState(6);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  const exerciseDetailsMap: Record<string, ExerciseDetail> = {
    'Incline Barbell Bench Press': {
      name: 'Incline Barbell Bench Press',
      category: 'Compound Upper Push • Clavicular Head Focus',
      primaryMuscles: ['Upper Pectoralis Major', 'Anterior Deltoids'],
      secondaryMuscles: ['Triceps Brachii', 'Serratus Anterior', 'Core Stabilizers'],
      tempo: '3-0-1-0 (3s controlled descent, explosive press)',
      cues: [
        'Set bench incline to exactly 30 degrees to minimize shoulder impingement.',
        'Retract and depress scapulae firmly into the bench pad before un-racking.',
        'Lower bar to the upper sternum just below clavicles under full 3-second control.',
        'Drive through heels and push bar straight up without flaring elbows past 70 degrees.'
      ],
      commonFaults: [
        'Flaring elbows out to 90 degrees (strains the rotators).',
        'Bouncing bar off chest instead of loading muscular elastic tension.',
        'Lifting glutes off the bench to compensate for excessive load.'
      ],
      videoThumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    },
    'Standing Neutral Dumbbell Overhead Press': {
      name: 'Standing Neutral Dumbbell Overhead Press',
      category: 'Vertical Shoulder Press & Scapular Elevation',
      primaryMuscles: ['Anterior & Lateral Deltoids'],
      secondaryMuscles: ['Upper Trapezius', 'Triceps', 'Transverse Abdominis'],
      tempo: '2-0-1-0',
      cues: [
        'Brace glutes and core to establish a rigid neutral spine.',
        'Palms face inward (neutral grip) to optimize shoulder subacromial clearance.',
        'Press weights overhead in a natural upward arc until arms are locked out over ears.',
        'Do not lean backward or hyperextend lumbar spine.'
      ],
      commonFaults: [
        'Hyperextending lower back to compensate for lack of shoulder flexion.',
        'Dropping elbows below parallel on the descent without tension control.'
      ],
      videoThumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
    },
    'Weighted Chest Dips / Neutral Grip Push-ups': {
      name: 'Weighted Chest Dips / Neutral Push-ups',
      category: 'Metabolic Chest & Triceps Finisher',
      primaryMuscles: ['Lower Pectoralis Major', 'Triceps'],
      secondaryMuscles: ['Anterior Deltoids', 'Pectoralis Minor'],
      tempo: '2-1-1-0',
      cues: [
        'Lean torso forward 15–20 degrees to bias chest recruitment over triceps.',
        'Lower body until elbows reach a 90-degree angle; do not overstretch anterior capsule.',
        'Push forcefully upward, locking out triceps smoothly without joint slamming.'
      ],
      commonFaults: [
        'Excessive swinging or using leg momentum.',
        'Dropping too deep when shoulder mobility is inadequate.'
      ],
      videoThumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    },
    'Half-Kneeling Cable Pallof Press': {
      name: 'Half-Kneeling Cable Pallof Press',
      category: 'Anti-Rotation Core & Postural Bracing',
      primaryMuscles: ['Internal & External Obliques', 'Transverse Abdominis'],
      secondaryMuscles: ['Gluteus Medius', 'Quadratus Lumborum'],
      tempo: '3-second isometric lockout hold',
      cues: [
        'Drop inside knee to pad, maintain 90-degree angles in both knees.',
        'Hold cable handle at center sternum, exhale and brace stomach tight.',
        'Press hands straight out in front of chest resisting lateral cable rotation.',
        'Hold lockout for 3 complete seconds before bringing back to chest.'
      ],
      commonFaults: [
        'Allowing torso or hips to twist toward the cable stack.',
        'Rushing the repetition without holding the isometric brace.'
      ],
      videoThumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85',
    }
  };

  const recipeDetailsMap: Record<string, RecipeDetail> = {
    meal1: {
      title: 'Organic Pasture Eggs, Smoked Salmon & Sourdough Avocado',
      category: 'Morning High-Protein Metabolic Priming',
      prepTime: '12 Mins',
      calories: '540 kcal',
      macros: { protein: '48g', carbs: '38g', fats: '22g' },
      ingredients: [
        '3 large pasture-raised organic eggs (soft-scrambled with grass-fed butter)',
        '100g wild Norwegian smoked salmon',
        '1 slice authentic artisanal sourdough (fermented 24h)',
        '1/2 ripe Haas avocado seasoned with sea salt & red chili flakes',
        'Organic microgreens and fresh lemon squeeze'
      ],
      instructions: [
        'Toast the artisan sourdough slice until golden and firm.',
        'Gently scramble pasture eggs on low heat with grass-fed butter until soft curds form.',
        'Layer sliced avocado on toast, top with smoked salmon and warm scrambled eggs.',
        'Finish with Maldon flaky salt, cracked black pepper, microgreens, and a dash of lemon juice.'
      ],
      chefNote: 'High omega-3 fatty acids and choline support neurotransmitter synthesis and sustained mental clarity throughout demanding morning meetings.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85'
    },
    meal2: {
      title: 'Grilled Grass-Fed Flank Steak Bowl with Wild Rice & Asparagus',
      category: 'Midday Power & Nutrient Density',
      prepTime: '15 Mins (or Batch Prepped)',
      calories: '630 kcal',
      macros: { protein: '55g', carbs: '62g', fats: '18g' },
      ingredients: [
        '180g grass-fed flank steak (grilled medium-rare)',
        '150g steamed wild rice with fresh herbs',
        '120g grilled young asparagus spears',
        '1 tbsp chimichurri sauce (parsley, garlic, olive oil, red wine vinegar)',
        'Roasted cherry tomatoes'
      ],
      instructions: [
        'Season flank steak with coarse sea salt, black pepper, and garlic powder.',
        'Sear in hot cast-iron skillet for 3 minutes per side; rest for 5 minutes before slicing against grain.',
        'Assemble bowl with warm wild rice and charred asparagus.',
        'Top with steak slices and generous drizzle of herb chimichurri.'
      ],
      chefNote: 'Rich in bio-available heme iron, zinc, and B-vitamins to replenish cellular energy and sustain physical output.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85'
    }
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-brand-950 border-b border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-accent-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-accent-gold text-xs uppercase font-mono tracking-widest mb-4">
            <span className="w-6 h-px bg-accent-gold" />
            <span>Interactive Product Tour</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[1.05] mb-5">
            THE DIGITAL <br />
            <span className="font-serif italic font-normal gold-gradient-text">
              MEMBER EXPERIENCE.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-300 font-light leading-relaxed">
            Eliminate friction with an interface engineered for clarity. Before joining, interact directly with our member architecture below.
          </p>
        </div>

        {/* Realistic Dashboard Mockup Container */}
        <div className="bg-brand-900 border border-white/15 rounded-lg shadow-2xl shadow-black overflow-hidden backdrop-blur-2xl">
          {/* Top Browser / App Titlebar */}
          <div className="bg-brand-950 px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-brand-400 pl-3 border-l border-white/10 hidden sm:inline">
                FIT90 OS v3.8 — Member Sanctum
              </span>
            </div>

            {/* User Profile Pill */}
            <div className="flex items-center gap-3 text-xs font-mono text-brand-300">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                <Flame className="w-3.5 h-3.5 text-accent-gold" />
                <span>Day 34 / 90</span>
              </span>
              <span className="hidden md:inline px-2.5 py-1 rounded-full bg-accent-gold/10 text-accent-champagne border border-accent-gold/30">
                Chapter 02: Progression
              </span>
            </div>
          </div>

          {/* Interface Screen Navigation Tabs */}
          <div className="bg-brand-900/90 px-4 sm:px-6 border-b border-white/10 flex overflow-x-auto scrollbar-none gap-2 py-2">
            {[
              { id: 'workout', label: 'Workout Protocol', icon: Dumbbell },
              { id: 'nutrition', label: 'Nutrition & Macros', icon: Utensils },
              { id: 'habits', label: 'Daily Scorecard', icon: CheckCircle2 },
              { id: 'calendar', label: '90-Day Roadmap', icon: CalendarIcon },
              { id: 'metrics', label: 'Progress Vault', icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-brand-950 font-bold shadow'
                      : 'text-brand-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Display Area */}
          <div className="p-6 sm:p-10 min-h-[460px] bg-brand-950/60">
            {/* SCREEN 1: DAILY WORKOUT */}
            {activeTab === 'workout' && (
              <div className="animate-fade-in space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-sm bg-brand-900 border border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-accent-gold uppercase tracking-wider mb-1">
                      <span>Day 34</span>
                      <span>•</span>
                      <span>Phase 2: Progression</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                      Upper Body Heavy Push & Postural Core
                    </h3>
                    <p className="text-xs text-brand-400 font-mono mt-1">
                      Estimated Duration: 48 Mins • Target RPE: 8.5 • 4 Compound Movements
                    </p>
                  </div>

                  {/* Rest Timer Widget */}
                  <div className="flex items-center gap-3 p-3 rounded-sm bg-brand-950 border border-white/10 self-start sm:self-center">
                    <div className="text-center font-mono">
                      <div className="text-[10px] text-brand-500 uppercase tracking-widest">Rest Timer</div>
                      <div className="text-lg font-bold text-accent-champagne">
                        0{Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                      </div>
                    </div>
                    <button
                      onClick={() => setTimerRunning(!timerRunning)}
                      className="p-2 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Toggle Rest Timer"
                    >
                      {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => { setTimerSeconds(90); setTimerRunning(false); }}
                      className="p-2 rounded-sm bg-white/5 hover:bg-white/10 text-brand-400 hover:text-white transition-colors"
                      aria-label="Reset Timer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Exercises Table / Cards */}
                <div className="space-y-3">
                  {[
                    {
                      name: 'Incline Barbell Bench Press',
                      focus: 'Pectoralis Major & Anterior Deltoid',
                      sets: '4 Sets',
                      reps: '6-8 Reps',
                      tempo: '3-0-1-0 (Eccentric Control)',
                      rest: '120s',
                      completed: true,
                    },
                    {
                      name: 'Standing Neutral Dumbbell Overhead Press',
                      focus: 'Shoulder Stability & Scapular Elevation',
                      sets: '3 Sets',
                      reps: '8-10 Reps',
                      tempo: '2-0-1-0',
                      rest: '90s',
                      completed: true,
                    },
                    {
                      name: 'Weighted Chest Dips / Neutral Grip Push-ups',
                      focus: 'Triceps Brachii & Chest Squeeze',
                      sets: '3 Sets',
                      reps: '10-12 Reps',
                      tempo: '2-1-1-0',
                      rest: '75s',
                      completed: false,
                    },
                    {
                      name: 'Half-Kneeling Cable Pallof Press',
                      focus: 'Rotational Anti-Extension & Core Brace',
                      sets: '3 Sets',
                      reps: '12 Reps / Side',
                      tempo: '3-second isometric hold',
                      rest: '60s',
                      completed: false,
                    },
                  ].map((ex, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-sm bg-brand-900/60 border border-white/5 hover:border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-sm border flex items-center justify-center mt-0.5 ${
                            ex.completed
                              ? 'bg-accent-gold/20 border-accent-gold text-accent-gold'
                              : 'border-white/20 text-transparent'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-white text-base">
                            {ex.name}
                          </div>
                          <div className="text-xs text-brand-400 font-mono mt-0.5">
                            {ex.focus} • Tempo: {ex.tempo}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 font-mono text-xs text-brand-300 self-end md:self-center">
                        <div className="text-right">
                          <span className="text-brand-500 uppercase text-[10px] block">Sets & Reps</span>
                          <span className="text-white font-semibold">{ex.sets} × {ex.reps}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-brand-500 uppercase text-[10px] block">Rest Interval</span>
                          <span className="text-accent-champagne">{ex.rest}</span>
                        </div>
                        <button 
                          onClick={() => setSelectedExercise(exerciseDetailsMap[ex.name] || exerciseDetailsMap['Incline Barbell Bench Press'])}
                          className="px-2.5 py-1 rounded-sm bg-white/5 hover:bg-white/10 text-brand-300 hover:text-white border border-white/10 text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Play className="w-3 h-3 text-accent-gold" />
                          <span>4K Form</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 2: NUTRITION & MACROS */}
            {activeTab === 'nutrition' && (
              <div className="animate-fade-in space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-sm bg-brand-900 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400">Daily Calorie Target</span>
                    <div className="text-2xl font-display font-bold text-white mt-1">2,450 kcal</div>
                    <div className="text-xs text-brand-400 font-mono mt-1">1,780 consumed • 670 remaining</div>
                  </div>
                  <div className="p-4 rounded-sm bg-brand-900 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400">Target Protein</span>
                    <div className="text-2xl font-display font-bold text-accent-champagne mt-1">195g</div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-accent-gold h-full w-[88%]" />
                    </div>
                  </div>
                  <div className="p-4 rounded-sm bg-brand-900 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400">Carbohydrates</span>
                    <div className="text-2xl font-display font-bold text-brand-200 mt-1">230g</div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-brand-400 h-full w-[70%]" />
                    </div>
                  </div>
                  <div className="p-4 rounded-sm bg-brand-900 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400">Healthy Fats</span>
                    <div className="text-2xl font-display font-bold text-brand-200 mt-1">65g</div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-brand-500 h-full w-[62%]" />
                    </div>
                  </div>
                </div>

                {/* Daily Meal Architecture */}
                <div className="p-5 rounded-sm bg-brand-900/70 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-white uppercase text-base">
                      Today’s Gourmet Meal Architecture
                    </h4>
                    <span className="text-xs font-mono text-accent-gold">High-Protein Performance Protocol</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        time: '08:30 AM',
                        name: 'Meal 1: Organic Pasture Eggs, Smoked Salmon & Sourdough Avocado',
                        macros: '48g Protein • 38g Carbs • 22g Fats',
                        cal: '540 kcal',
                      },
                      {
                        time: '01:00 PM',
                        name: 'Meal 2: Grilled Grass-Fed Flank Steak Bowl with Wild Rice & Asparagus',
                        macros: '55g Protein • 62g Carbs • 18g Fats',
                        cal: '630 kcal',
                      },
                      {
                        time: '04:30 PM',
                        name: 'Pre-Session: Cold-Brew Whey Isolate Shake & Medjool Dates',
                        macros: '35g Protein • 30g Carbs • 3g Fats',
                        cal: '280 kcal',
                      },
                      {
                        time: '08:00 PM',
                        name: 'Dinner: Pan-Seared Chilean Sea Bass, Roasted Sweet Potato & Garlic Greens',
                        macros: '57g Protein • 52g Carbs • 16g Fats',
                        cal: '580 kcal',
                      },
                    ].map((meal, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedRecipe(i === 0 ? recipeDetailsMap.meal1 : recipeDetailsMap.meal2)}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-brand-950/60 hover:bg-brand-900/90 hover:border-accent-gold/40 cursor-pointer rounded-sm border border-white/5 gap-2 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-accent-gold uppercase mr-2">{meal.time}</span>
                          <span className="text-xs sm:text-sm text-white font-medium group-hover:text-accent-champagne transition-colors">{meal.name}</span>
                          <span className="text-[10px] font-mono text-accent-gold hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">View Recipe →</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-mono text-brand-400 self-end sm:self-center">
                          <span>{meal.macros}</span>
                          <span className="text-white font-semibold">{meal.cal}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Water Tracker Interaction */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-brand-300">Hydration Target (3.5L):</span>
                      <div className="flex gap-1">
                        {[...Array(8)].map((_, idx) => (
                          <div
                            key={idx}
                            onClick={() => setWaterCups(idx + 1)}
                            className={`w-5 h-7 rounded-sm border cursor-pointer transition-all ${
                              idx < waterCups
                                ? 'bg-sky-500/30 border-sky-400 text-sky-300'
                                : 'bg-white/5 border-white/10'
                            }`}
                            title={`Cup ${idx + 1}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-mono text-brand-400">{waterCups * 450}ml logged</span>
                    </div>

                    <button
                      onClick={() => setWaterCups(prev => Math.min(8, prev + 1))}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-sm font-mono text-xs transition-colors"
                    >
                      + Add 450ml
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: HABITS & SCORECARD */}
            {activeTab === 'habits' && (
              <div className="animate-fade-in space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-sm bg-brand-900 border border-white/10">
                  <div>
                    <span className="text-xs font-mono text-accent-gold uppercase tracking-wider">
                      Daily Discipline Index
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight mt-0.5">
                      Non-Negotiable Habit Architecture
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 font-mono text-xs">
                    <div>
                      <span className="text-brand-500 uppercase text-[10px] block">Streak</span>
                      <span className="text-xl font-bold text-accent-champagne flex items-center gap-1">
                        <Flame className="w-4 h-4 text-accent-gold fill-accent-gold" />
                        34 Days
                      </span>
                    </div>
                    <div>
                      <span className="text-brand-500 uppercase text-[10px] block">Adherence Rate</span>
                      <span className="text-xl font-bold text-white">98.2%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-400">
                    Click to toggle today's execution:
                  </div>
                  {habits.map((habit) => (
                    <div
                      key={habit.id}
                      onClick={() => toggleHabit(habit.id)}
                      className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                        habit.done
                          ? 'bg-brand-900/80 border-accent-gold/40'
                          : 'bg-brand-950 border-white/10 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-sm border flex items-center justify-center transition-all ${
                            habit.done
                              ? 'bg-accent-gold text-brand-950 border-accent-gold'
                              : 'border-white/30 text-transparent'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className={`text-xs font-mono uppercase px-2 py-0.5 rounded-sm mr-2.5 ${
                            habit.category === 'Prime' ? 'bg-amber-500/20 text-amber-300' :
                            habit.category === 'Train' ? 'bg-rose-500/20 text-rose-300' :
                            habit.category === 'Fuel' ? 'bg-emerald-500/20 text-emerald-300' :
                            'bg-indigo-500/20 text-indigo-300'
                          }`}>
                            {habit.category}
                          </span>
                          <span className={`text-sm ${habit.done ? 'text-white font-medium' : 'text-brand-400'}`}>
                            {habit.title}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-brand-400">
                        {habit.done ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sleep & Recovery Biometrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-sm bg-brand-900/60 border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-brand-400">Restorative Sleep</span>
                    <div className="text-xl font-display font-bold text-white mt-1">8h 12m</div>
                    <span className="text-xs font-mono text-emerald-400">92% Deep & REM Quality</span>
                  </div>
                  <div className="p-4 rounded-sm bg-brand-900/60 border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-brand-400">Resting HRV Score</span>
                    <div className="text-xl font-display font-bold text-accent-champagne mt-1">78 ms</div>
                    <span className="text-xs font-mono text-brand-400">Optimal recovery capacity</span>
                  </div>
                  <div className="p-4 rounded-sm bg-brand-900/60 border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-brand-400">Mental Clarity Rating</span>
                    <div className="text-xl font-display font-bold text-white mt-1">9.4 / 10</div>
                    <span className="text-xs font-mono text-brand-400">Peak cognitive focus</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: 90-DAY CALENDAR */}
            {activeTab === 'calendar' && (
              <div className="animate-fade-in space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-sm bg-brand-900 border border-white/10">
                  <div>
                    <span className="text-xs font-mono text-accent-gold uppercase tracking-wider">
                      Macro Roadmap
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight mt-0.5">
                      The 90-Day Progression Calendar
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-brand-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-accent-gold" />
                      <span>Completed (34)</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-white" />
                      <span>Current Day (34)</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-brand-800" />
                      <span>Scheduled (56)</span>
                    </span>
                  </div>
                </div>

                {/* 90-Day Visual Grid Preview */}
                <div className="p-6 rounded-sm bg-brand-900/70 border border-white/10">
                  <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-18 gap-1.5">
                    {[...Array(90)].map((_, i) => {
                      const dayNumber = i + 1;
                      const isCompleted = dayNumber < 34;
                      const isToday = dayNumber === 34;
                      const isAudit = dayNumber === 30 || dayNumber === 60 || dayNumber === 90;

                      return (
                        <div
                          key={dayNumber}
                          className={`aspect-square rounded-xs border text-[9px] font-mono flex items-center justify-center transition-all ${
                            isToday
                              ? 'bg-white text-brand-950 font-bold border-white ring-2 ring-accent-gold scale-110 z-10'
                              : isAudit
                              ? 'bg-accent-gold/20 text-accent-champagne border-accent-gold/50 font-bold'
                              : isCompleted
                              ? 'bg-accent-gold/15 text-accent-gold/90 border-accent-gold/20'
                              : 'bg-brand-950/60 text-brand-600 border-white/5'
                          }`}
                          title={`Day ${dayNumber}${isAudit ? ' - Milestone Audit' : ''}`}
                        >
                          {dayNumber}
                        </div>
                      );
                    })}
                  </div>

                  {/* Calendar Key Milestones */}
                  <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-3 bg-brand-950 rounded-sm border border-white/5">
                      <span className="text-accent-gold block text-[10px] uppercase">Day 30 Milestone</span>
                      <span className="text-white font-semibold">Foundation Audit Completed</span>
                      <span className="text-brand-400 block text-[11px] mt-0.5">Biometrics logged • -6.8 lbs • 100% adherence</span>
                    </div>
                    <div className="p-3 bg-brand-950 rounded-sm border border-accent-gold/30">
                      <span className="text-accent-champagne block text-[10px] uppercase">Day 60 Milestone (In 26 Days)</span>
                      <span className="text-white font-semibold">Progression Benchmark Audit</span>
                      <span className="text-brand-400 block text-[11px] mt-0.5">Mid-program DEXA/scan calibration & strength PR test</span>
                    </div>
                    <div className="p-3 bg-brand-950 rounded-sm border border-white/5">
                      <span className="text-brand-500 block text-[10px] uppercase">Day 90 Milestone</span>
                      <span className="text-brand-300 font-semibold">Final Transformation Audit</span>
                      <span className="text-brand-500 block text-[11px] mt-0.5">Lifetime exit roadmap & alumni induction</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 5: PROGRESS VAULT */}
            {activeTab === 'metrics' && (
              <div className="animate-fade-in space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-sm bg-brand-900 border border-white/10">
                    <span className="text-xs font-mono uppercase text-brand-400">Total Body Recomposition</span>
                    <div className="text-3xl font-display font-bold text-accent-champagne mt-2">-14.2 lbs</div>
                    <p className="text-xs font-mono text-brand-300 mt-1">Starting: 198.4 lbs → Current: 184.2 lbs</p>
                  </div>
                  <div className="p-5 rounded-sm bg-brand-900 border border-white/10">
                    <span className="text-xs font-mono uppercase text-brand-400">Body Fat Delta</span>
                    <div className="text-3xl font-display font-bold text-white mt-2">-4.6%</div>
                    <p className="text-xs font-mono text-brand-300 mt-1">21.8% → 17.2% (Calculated via 7-point caliper)</p>
                  </div>
                  <div className="p-5 rounded-sm bg-brand-900 border border-white/10">
                    <span className="text-xs font-mono uppercase text-brand-400">Compound Strength Total</span>
                    <div className="text-3xl font-display font-bold text-white mt-2">+55 kg</div>
                    <p className="text-xs font-mono text-brand-300 mt-1">Aggregate increase across Deadlift, Squat, Bench</p>
                  </div>
                </div>

                <div className="p-6 rounded-sm bg-brand-900/80 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-white uppercase text-base">
                      Strength Progression Benchmarks (Day 01 vs Day 34)
                    </h4>
                    <span className="text-xs font-mono text-accent-gold">Progressive Overload Verified</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {[
                      { lift: 'Barbell Romanian Deadlift', before: '100 kg (220 lbs)', now: '130 kg (286 lbs)', diff: '+30 kg (+30%)' },
                      { lift: 'Incline Dumbbell Press', before: '32 kg per hand', now: '40 kg per hand', diff: '+8 kg/hand (+25%)' },
                      { lift: 'Strict Weighted Pull-Ups', before: 'Bodyweight × 4 reps', now: 'Bodyweight + 12 kg × 6 reps', diff: '+12 kg Load' },
                      { lift: 'Bulgarian Split Squat', before: '16 kg dumbbells', now: '26 kg dumbbells', diff: '+10 kg/hand (+62%)' },
                    ].map((row, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-brand-950/60 rounded-sm border border-white/5 gap-2">
                        <span className="text-white font-medium">{row.lift}</span>
                        <div className="flex items-center gap-6 text-brand-400">
                          <span>Baseline: {row.before}</span>
                          <span>→</span>
                          <span className="text-white font-bold">{row.now}</span>
                          <span className="text-accent-gold font-bold">{row.diff}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar inside Mockup */}
          <div className="bg-brand-950 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-400">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent-gold" />
              <span>Full platform access unlocked immediately upon cohort enrollment.</span>
            </div>
            {onOpenPortalDemo && (
              <button
                onClick={onOpenPortalDemo}
                className="text-white hover:text-accent-gold transition-colors flex items-center gap-1 font-semibold"
              >
                <span>Launch Full Screen Demo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Movement Biomechanics Masterclass Modal */}
      <ExerciseModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />

      {/* Gourmet Recipe Architecture Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </section>
  );
};


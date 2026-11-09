import React, { useState } from 'react';
import { 
  X, 
  Dumbbell, 
  Utensils, 
  CheckCircle2, 
  Calendar, 
  TrendingUp, 
  User, 
  Flame, 
  Award, 
  Clock, 
  Sparkles,
  Play,
  RotateCcw,
  Check
} from 'lucide-react';

interface PortalDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const PortalDemoModal: React.FC<PortalDemoModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'workout' | 'nutrition' | 'habits'>('workout');
  const [completedExercises, setCompletedExercises] = useState<number[]>([1]);

  const toggleExercise = (id: number) => {
    if (completedExercises.includes(id)) {
      setCompletedExercises(completedExercises.filter(x => x !== id));
    } else {
      setCompletedExercises([...completedExercises, id]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-brand-950 border border-white/20 rounded-lg shadow-2xl overflow-hidden my-auto">
        {/* Top Header */}
        <div className="bg-brand-900 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-sm bg-brand-800 border border-white/15 flex items-center justify-center">
              <span className="font-display font-bold text-xs text-accent-champagne">F</span>
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wider text-white">
                FIT90 MEMBER SANCTUM
              </span>
              <span className="text-[10px] font-mono text-accent-gold ml-2 uppercase px-1.5 py-0.5 rounded-sm bg-accent-gold/10 border border-accent-gold/20">
                Live Simulation
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-accent-champagne text-brand-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>Enroll Now</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-brand-400 hover:text-white transition-colors"
              aria-label="Close Portal Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Member Status Banner */}
        <div className="bg-brand-900/60 px-6 py-3 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-brand-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-accent-champagne font-semibold">
              <Flame className="w-4 h-4 text-accent-gold" />
              Day 34 / 90
            </span>
            <span>•</span>
            <span className="text-white">Chapter 02: Progression</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Overall Adherence: <strong className="text-white">98.2%</strong></span>
            <span>•</span>
            <span>Next Check-In: <strong className="text-accent-gold">Day 60 Audit</strong></span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-white/10 bg-brand-950 flex gap-2 pt-3">
          {[
            { id: 'workout', label: 'Today’s Workout', icon: Dumbbell },
            { id: 'nutrition', label: 'Nutritional Protocol', icon: Utensils },
            { id: 'habits', label: 'Habit Architecture', icon: CheckCircle2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all ${
                  isActive
                    ? 'border-accent-gold text-white font-bold bg-white/5'
                    : 'border-transparent text-brand-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          {activeTab === 'workout' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-brand-900 rounded-sm border border-white/10">
                <div>
                  <div className="text-xs font-mono text-accent-gold uppercase">Session 34 • Upper Body Hypertrophy & Posture</div>
                  <h4 className="font-display text-xl font-bold uppercase text-white mt-0.5">
                    Compound Push & Shoulder Stability Protocol
                  </h4>
                </div>
                <div className="text-xs font-mono text-brand-400">
                  Target Duration: 45 Mins • 4 Exercises
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { id: 1, name: 'Incline Barbell Bench Press', sets: '4 × 6-8 Reps', tempo: '3-0-1-0', load: '85 kg' },
                  { id: 2, name: 'Standing Neutral Dumbbell Press', sets: '3 × 8-10 Reps', tempo: '2-0-1-0', load: '28 kg / hand' },
                  { id: 3, name: 'Weighted Dips / Deficit Push-Ups', sets: '3 × 10-12 Reps', tempo: '2-1-1-0', load: '+10 kg' },
                  { id: 4, name: 'Half-Kneeling Pallof Anti-Rotation Press', sets: '3 × 12 Reps', tempo: '3s hold', load: 'Setting 4' },
                ].map((item) => {
                  const isDone = completedExercises.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleExercise(item.id)}
                      className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                        isDone
                          ? 'bg-brand-900/90 border-accent-gold/40 text-white'
                          : 'bg-brand-900/40 border-white/10 text-brand-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-sm border flex items-center justify-center transition-all ${
                            isDone
                              ? 'bg-accent-gold text-brand-950 border-accent-gold'
                              : 'border-white/20 text-transparent'
                          }`}
                        >
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <div>
                          <span className="font-display font-bold text-sm block">{item.name}</span>
                          <span className="text-xs font-mono text-brand-400">Tempo: {item.tempo} • Recommended Load: {item.load}</span>
                        </div>
                      </div>

                      <div className="font-mono text-xs text-right">
                        <span className="text-accent-champagne font-bold block">{item.sets}</span>
                        <span className="text-brand-500 text-[10px] uppercase">
                          {isDone ? 'Logged' : 'Click to log'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-brand-900 rounded-sm border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-brand-400">Caloric Budget</span>
                  <div className="text-2xl font-display font-bold text-white mt-1">2,450 kcal</div>
                  <span className="text-xs font-mono text-accent-gold">High Performance Fuel</span>
                </div>
                <div className="p-4 bg-brand-900 rounded-sm border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-brand-400">Protein Target</span>
                  <div className="text-2xl font-display font-bold text-accent-champagne mt-1">195 g</div>
                  <span className="text-xs font-mono text-emerald-400">170g currently logged</span>
                </div>
                <div className="p-4 bg-brand-900 rounded-sm border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-brand-400">Hydration Target</span>
                  <div className="text-2xl font-display font-bold text-white mt-1">3.5 Litres</div>
                  <span className="text-xs font-mono text-brand-400">Electrolytes Added</span>
                </div>
              </div>

              <div className="p-5 bg-brand-900/60 rounded-sm border border-white/10">
                <h4 className="font-display font-bold text-white uppercase text-sm mb-3">
                  Recipe Vault Spotlight: Executive Quick Prep
                </h4>
                <p className="text-xs sm:text-sm text-brand-300 font-light leading-relaxed">
                  Every week, receive 5 chef-engineered recipes designed for prep times under 20 minutes with guaranteed 45g+ protein per serving.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'habits' && (
            <div className="space-y-4">
              <div className="p-4 bg-brand-900 rounded-sm border border-white/10 text-xs font-mono text-brand-300">
                The FIT90 Habit Scorecard converts conscious effort into autonomic identity. Track morning, noon, and evening compliance daily.
              </div>

              <div className="space-y-2.5">
                {[
                  { title: 'Morning 15-Min Circadian Light & 500ml Electrolytes', status: 'Completed at 06:45 AM' },
                  { title: 'Resistance Training Protocol Executed', status: 'Completed at 01:15 PM' },
                  { title: 'Target 195g Protein Consumption Reached', status: '92% of target logged' },
                  { title: 'Digital Sunset: Zero Screen Luminescence 60 Mins Before Sleep', status: 'Scheduled for 10:00 PM' },
                ].map((h, i) => (
                  <div key={i} className="p-3.5 bg-brand-900/60 rounded-sm border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-white font-medium">{h.title}</span>
                    <span className="text-accent-gold font-mono">{h.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-brand-900 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-brand-400">
            Real FIT90 accounts include full progress graphs, video vault, and coach messaging.
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-accent-champagne text-brand-950 font-bold text-xs uppercase tracking-widest rounded-sm transition-all"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
};


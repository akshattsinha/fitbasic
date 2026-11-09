import { Chapter, PhilosophyPillar, ProgramFeature, TransformationStory, FAQItem, PricingPlan } from '../types';

export const HERO_DATA = {
  announcement: "SPRING 2026 COHORT ENROLLMENT ACTIVE — STRICTLY LIMITED TO 150 MEMBERS",
  titleLine1: "90 DAYS.",
  titleLine2: "A DIFFERENT YOU.",
  supportingCopy: "Your next chapter starts with a decision. Build strength, discipline and habits that transform the way you live.",
  primaryCTA: "START YOUR TRANSFORMATION",
  secondaryCTA: "DISCOVER FIT90",
  stats: [
    { label: "Duration", value: "90 Days" },
    { label: "Core Pillars", value: "04 Systems" },
    { label: "Completion Rate", value: "98.2%" },
    { label: "Community", value: "14 Countries" },
  ]
};

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    number: "01",
    title: "MOVE BETTER",
    subtitle: "Build strength, endurance and physical confidence",
    description: "Physical training should build you up, not break you down. FIT90 integrates progressive resistance, joint mobility, cardiovascular conditioning, and biomechanical precision designed for sustained athletic longevity.",
    takeaways: [
      "Periodized resistance training for metabolic density and posture",
      "Dynamic mobility protocols to unlock hips, thoracic spine, and ankles",
      "High-output conditioning intervals that elevate VO2 max without exhaustion"
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
  },
  {
    number: "02",
    title: "EAT BETTER",
    subtitle: "Develop sustainable nutrition habits",
    description: "Eliminate the cycle of extreme deficits and rebound weight gain. Learn nutritional mechanics that fuel demanding careers, social dinners, and lean recomposition without neurotic obsession.",
    takeaways: [
      "Protein-centric macronutrient architecture matched to your metabolic rate",
      "Executive dining-out and travel frameworks for zero social compromise",
      "Microbiome optimization and blood sugar stabilization for sustained energy"
    ],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85"
  },
  {
    number: "03",
    title: "THINK BETTER",
    subtitle: "Build consistency, focus and discipline",
    description: "Motivation is an unreliable emotion; discipline is a trained neurological reflex. FIT90 restructures your decision architecture, eliminating friction and making daily execution effortless.",
    takeaways: [
      "Daily friction reduction systems to protect high-leverage willpower",
      "Mental framing techniques to eliminate self-sabotage under stress",
      "Accountability architecture that converts intention into non-negotiable habit"
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85"
  },
  {
    number: "04",
    title: "LIVE BETTER",
    subtitle: "Create routines that support long-term wellbeing",
    description: "Transformation happens in the 23 hours outside the gym. Master circadian rhythm calibration, restorative sleep architecture, stress modulation, and autonomic habits that last a lifetime.",
    takeaways: [
      "Sleep hygiene and sleep cycle optimization for profound recovery",
      "Morning activation protocols that prime cognitive clarity in under 15 minutes",
      "Evening wind-down rituals to lower cortisol and deepen parasympathetic recovery"
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
  }
];

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: "chapter-1",
    chapterNumber: "01",
    days: "DAYS 01–30",
    title: "FOUNDATION",
    tagline: "Build the foundation.",
    description: "Introduce consistent routines, movement proficiency, nutrition awareness, and sustainable habit anchors. The goal is zero burnout and absolute adherence.",
    objective: "Establish unbreakable daily anchors, baseline movement competence, and metabolic balance.",
    trainingSplit: "3–4 Days/Week: Compound movement mechanics, postural stabilization & core activation.",
    nutritionFocus: "Baseline caloric equilibrium, 1.8g protein per kg, hydration calibration & sleep synchronization.",
    mindsetProtocol: "Habit stacking: attaching new disciplines to pre-existing daily rituals.",
    milestoneAudit: "Day 30 Biometric Baseline & Movement Competency Review.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Establish 4 daily non-negotiable lifestyle habits",
      "Full biomechanical movement screening & video form analysis",
      "Calibrate baseline metabolic expenditure and meal timing",
      "Eliminate decision fatigue through pre-planned daily schedules"
    ]
  },
  {
    id: "chapter-2",
    chapterNumber: "02",
    days: "DAYS 31–60",
    title: "PROGRESSION",
    tagline: "Become stronger through consistency.",
    description: "With habits locked in, we increase mechanical tension and metabolic output. You will notice significant shifts in physical stamina, body composition, and cognitive endurance.",
    objective: "Progressive overload, lean tissue stimulus, enhanced aerobic capacity, and metabolic flexibility.",
    trainingSplit: "4 Days/Week: Push / Pull / Legs + Dedicated High-Performance Mobility & Zone 2 session.",
    nutritionFocus: "Targeted nutrient timing around workouts, strategic carbohydrate cycling, restaurant playbooks.",
    mindsetProtocol: "Overcoming plateau resistance and reinforcing identity-level discipline.",
    milestoneAudit: "Day 60 Mid-Point Composition & Strength Benchmark Audit.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Increase training volume with progressive overload protocols",
      "Introduce advanced nutrient timing for optimal training recovery",
      "Executive dining guidelines: maintaining adherence during travel",
      "Mid-program full visual and metric calibration review"
    ]
  },
  {
    id: "chapter-3",
    chapterNumber: "03",
    days: "DAYS 61–90",
    title: "TRANSFORMATION",
    tagline: "Make the new standard yours.",
    description: "Consolidate your physical adaptations into permanent identity shifts. By Day 90, disciplined training and conscious nutrition are no longer things you do—they are who you are.",
    objective: "Peak physical conditioning, metabolic optimization, and building a self-sustaining lifetime protocol.",
    trainingSplit: "4–5 Days/Week: High-density athletic conditioning, peak muscular definition & strength consolidation.",
    nutritionFocus: "Intuitive macro regulation, long-term maintenance blueprints, sustainable lifestyle balance.",
    mindsetProtocol: "Autonomic execution: living the standard effortlessly without external friction.",
    milestoneAudit: "Day 90 Comprehensive Transformation Audit & Lifetime Transition Roadmap.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Culmination of peak physical stamina, strength and definition",
      "Shift from structured tracking to intuitive long-term mastery",
      "Lifetime exit strategy to prevent reversion or post-program slump",
      "Final transformation documentation & alumni society induction"
    ]
  }
];

export const PROGRAM_FEATURES: ProgramFeature[] = [
  {
    number: "01",
    title: "Periodized 90-Day Training Curriculum",
    badge: "Core Protocol",
    description: "A meticulously engineered 12-week progression tailored for both premier gym environments and high-end home setups. Eliminates all guesswork with exact sets, reps, tempos, and rest intervals.",
    deliverables: [
      "Gym & Home Dumbbell/Kettlebell tracks included",
      "Targeted splits: Hypertrophy, metabolic density, and joint longevity",
      "Dynamic warm-ups and post-session restorative sequences"
    ],
    tier: "all"
  },
  {
    number: "02",
    title: "Precision Nutrition & Metabolic Architecture",
    badge: "Nutrition System",
    description: "No starvation, no arbitrary food bans. A flexible, science-grounded nutrition playbook that provides macro targets calibrated to your metabolic rate and daily lifestyle demands.",
    deliverables: [
      "Personalized macro & calorie calculation framework",
      "Luxury 90-Day Recipe Vault (High-protein gourmet options)",
      "Executive travel, fine dining, and alcohol navigation matrix"
    ],
    tier: "all"
  },
  {
    number: "03",
    title: "Daily Habit & Discipline Operating System",
    badge: "Behavioral Science",
    description: "Transforming the mind and daily rhythm. Our proprietary habit architecture builds non-negotiable consistency across morning routines, hydration, focus, and restorative sleep.",
    deliverables: [
      "Morning 15-minute cognitive and physiological priming",
      "Daily Habit Scorecard with real-time consistency tracking",
      "Evening wind-down and circadian alignment protocols"
    ],
    tier: "all"
  },
  {
    number: "04",
    title: "HD Video Movement & Biomechanics Masterclasses",
    badge: "Form Library",
    description: "Over 120+ high-definition movement tutorials breaking down every exercise with multi-angle camera shots, cue points, common compensations, and anatomical mechanics.",
    deliverables: [
      "Multi-angle 4K instructional breakdown of every movement",
      "Common fault analysis to protect lower back and shoulders",
      "Scaling progressions for beginners through advanced lifters"
    ],
    tier: "all"
  },
  {
    number: "05",
    title: "Weekly Milestone Audits & Progress Tracking",
    badge: "Accountability",
    description: "Objective data-driven accountability. Log progress across weight, tape measurements, workout volume, sleep scores, and habit adherence with guided weekly review milestones.",
    deliverables: [
      "Bi-weekly metric check-ins and adjustment prompts",
      "Visual progress photo comparison vault (strictly private)",
      "Self-audit reflection prompts to lock in psychological growth"
    ],
    tier: "all"
  },
  {
    number: "06",
    title: "The FIT90 Member Portal & Mobile Application",
    badge: "Digital Platform",
    description: "Clean, distraction-free digital ecosystem accessible from any mobile browser or desktop. Real-time workout logging, timer integration, calendar sync, and resource library.",
    deliverables: [
      "Offline workout mode with built-in rest interval timer",
      "Sync seamlessly with Apple Health, Google Fit, and calendars",
      "Instant resource vault with downloadable PDF guides"
    ],
    tier: "all"
  },
  {
    number: "07",
    title: "Executive 1-on-1 Performance Concierge",
    badge: "VIP Tier Only",
    description: "For leaders, executives, and high-performers seeking white-glove personal oversight. A dedicated FIT90 performance coach monitors your progress daily, adjusting parameters in real-time.",
    deliverables: [
      "Weekly private video check-in and technique review with head coach",
      "Direct private WhatsApp / Telegram concierge access",
      "Custom nutrition and schedule adaptation for international travel"
    ],
    tier: "vip"
  },
  {
    number: "08",
    title: "Lifetime Post-90-Day Transition Blueprint",
    badge: "Alumni Vault",
    description: "Most fitness programs end with a void. FIT90 provides a structured year-round lifestyle blueprint so your Day 90 standard remains your permanent baseline forever.",
    deliverables: [
      "Year-round maintenance macro and caloric adjustment formula",
      "Seasonal 4-week training cycle templates to prevent stagnation",
      "Permanent access to the FIT90 alumni updates and masterclasses"
    ],
    tier: "all"
  }
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: "marcus-v",
    name: "Marcus Vance",
    role: "Managing Director, Private Equity",
    location: "London, UK",
    age: 39,
    program: "FIT90 Executive Concierge",
    summary: "High stress, constant transatlantic travel, and inconsistent workouts left Marcus exhausted. In 90 days, he rebuilt athletic conditioning, dropped 19 lbs of fat, and increased deadlift by 35kg.",
    quote: "FIT90 transformed how I operate in the boardroom and with my family. The daily habit framework made discipline automatic even when living out of hotels.",
    metrics: {
      weightDelta: "-19.2 lbs",
      bodyFatDelta: "-7.4%",
      habitScore: "96.4%",
      strengthMetric: "+35kg Deadlift"
    },
    beforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    duration: "Day 01 vs Day 90",
    verificationBadge: "Verified Client Transformation"
  },
  {
    id: "elena-r",
    name: "Elena Rostova",
    role: "Creative Director & Mother of 2",
    location: "Zurich, Switzerland",
    age: 35,
    program: "FIT90 Digital Experience",
    summary: "Frustrated by years of extreme calorie restriction and chronic fatigue, Elena learned sustainable nutritional mechanics, built lean core definition, and restored deep sleep.",
    quote: "No food guilt, no two-hour gym sessions. The clarity and strength I built during these 90 days completely transformed my energy and physical confidence.",
    metrics: {
      weightDelta: "-13.5 lbs",
      bodyFatDelta: "-5.8%",
      habitScore: "98.1%",
      strengthMetric: "+25kg Hip Thrust"
    },
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    duration: "Day 01 vs Day 90",
    verificationBadge: "Verified Client Transformation"
  },
  {
    id: "david-c",
    name: "David Chen",
    role: "Fintech Co-Founder",
    location: "Singapore",
    age: 43,
    program: "FIT90 Executive Concierge",
    summary: "Suffered from chronic desk posture and high blood pressure. FIT90 restructured his circadian rhythm, introduced progressive barbell work, and reduced body fat from 23.5% to 15.2%.",
    quote: "The system is engineered for busy professionals who demand results without fluff. It is easily the highest-ROI investment I made in my health.",
    metrics: {
      weightDelta: "-22.0 lbs",
      bodyFatDelta: "-8.3%",
      habitScore: "95.0%",
      strengthMetric: "+40kg Squat"
    },
    beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    duration: "Day 01 vs Day 90",
    verificationBadge: "Verified Client Transformation"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: "THE 90-DAY DIGITAL EXPERIENCE",
    badge: "Core Program",
    priceUSD: 297,
    priceINR: 14999,
    period: "Single Investment for 90 Days",
    tagline: "The complete self-guided transformation architecture.",
    description: "Designed for ambitious individuals who want the complete, step-by-step FIT90 curriculum, digital portal, nutrition blueprints, and daily habit tracking.",
    popular: true,
    features: [
      "Complete 90-Day Periodized Workout System (Gym & Home Tracks)",
      "Precision Nutrition & Macro Calculation Framework",
      "Full 120+ 4K Movement Video Form Masterclass Library",
      "Proprietary Daily Habit & Discipline Scorecard",
      "Private Member Web App Portal & Progress Tracking Vault",
      "Weekly Guided Self-Audit & Progression Calibration Milestones",
      "Executive Travel & Fine Dining Playbooks",
      "Lifetime Post-90-Day Transition Maintenance Blueprint",
      "14-Day Protocol Adherence Guarantee"
    ],
    ctaText: "BEGIN YOUR 90-DAY JOURNEY"
  },
  {
    id: "concierge",
    name: "THE 90-DAY EXECUTIVE CONCIERGE",
    badge: "VIP 1-on-1 Coaching",
    priceUSD: 749,
    priceINR: 37999,
    period: "Strictly Limited to 15 Members per Cohort",
    tagline: "White-glove 1-on-1 coaching for executives & leaders.",
    description: "The complete FIT90 experience elevated with dedicated 1-on-1 coaching, personalized form audits, weekly video check-ins, and direct VIP coach access.",
    popular: false,
    features: [
      "Everything included in The 90-Day Digital Experience",
      "Dedicated 1-on-1 Senior Performance Coach assigned to you",
      "Weekly Private Video Check-In & Comprehensive Form Audits",
      "Bespoke Macro & Caloric Re-calibration every 14 days",
      "Direct WhatsApp / Telegram Concierge Access for daily questions",
      "Custom workout schedule adjustments for high-frequency travel",
      "Priority onboarding call before Day 01 kickoff",
      "Complimentary FIT90 Premium Welcome Kit & Habit Journal"
    ],
    ctaText: "ENROLL IN EXECUTIVE CONCIERGE"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "program",
    question: "What exactly is FIT90?",
    answer: "FIT90 is a comprehensive 90-day lifestyle transformation architecture. It is not an arbitrary workout PDF or a restrictive diet fad. It combines progressive periodized training, sustainable nutrition systems, behavioral habit science, and daily accountability to help you build physical strength, metabolic resilience, and lifelong discipline."
  },
  {
    id: "faq-2",
    category: "program",
    question: "Who is this program designed for?",
    answer: "FIT90 is built for busy professionals, entrepreneurs, creatives, and ambitious men and women who demand a structured, intelligent approach to physical excellence. Whether you need to rebuild your foundational fitness after years of neglect or take your physical performance to peak levels, FIT90 scales to your starting baseline."
  },
  {
    id: "faq-3",
    category: "program",
    question: "Do I need full gym access, or can I do this at home?",
    answer: "Both tracks are fully included. When you access the member portal, you can select either the Premier Gym Track (barbells, dumbbells, cables, machines) or the High-End Home Track (dumbbells, resistance bands, adjustable bench, or bodyweight progressions). Both tracks adhere to the exact same periodization principles."
  },
  {
    id: "faq-4",
    category: "program",
    question: "Is FIT90 suitable for complete beginners?",
    answer: "Yes. Every movement is accompanied by 4K biomechanical video masterclasses showing correct cues, tempo, and regressions. The first 30 days (Chapter 01 — Foundation) are specifically engineered to build movement proficiency, joint stability, and progressive tolerance before high-intensity loads are introduced."
  },
  {
    id: "faq-5",
    category: "program",
    question: "What equipment do I need if training at home?",
    answer: "If following the home track, you only need: a set of adjustable dumbbells (or a light and medium pair), resistance bands, and an exercise mat. An adjustable bench or pull-up bar is beneficial but optional."
  },
  {
    id: "faq-6",
    category: "nutrition",
    question: "How does the nutrition guidance work?",
    answer: "We reject dogmatic crash diets. FIT90 provides you with a personalized caloric and macronutrient roadmap calculated from your body metrics and daily energy expenditure. You receive our gourmet high-protein recipe vault, practical grocery blueprints, and executive dining-out strategies so you can thrive socially without derailing your goals."
  },
  {
    id: "faq-7",
    category: "results",
    question: "How do I track my progress over the 90 days?",
    answer: "Inside the private FIT90 member portal, you will log your daily workouts, weights lifted, habit adherence score, and weekly biometrics. You will participate in formal milestone audits at Day 30, Day 60, and Day 90 to calibrate your trajectory and document real progress."
  },
  {
    id: "faq-8",
    category: "results",
    question: "What happens after the 90 days conclude?",
    answer: "You do not simply lose access or rebound. You receive our Post-90-Day Lifetime Transition Blueprint, detailing maintenance caloric adjustments, seasonal training splits, and strategies to make your Day 90 standard your permanent way of living. You also retain lifetime access to all core materials."
  },
  {
    id: "faq-9",
    category: "logistics",
    question: "How and when do I receive access after purchasing?",
    answer: "Immediately upon completing your checkout, you will receive your personal login credentials to the FIT90 Member Portal, along with our Step-by-Step Day 0 Preparation Guide, printable habit scorecards, and calendar sync links. If enrolled in Executive Concierge, your coach contacts you within 6 business hours."
  },
  {
    id: "faq-10",
    category: "logistics",
    question: "What is the refund policy?",
    answer: "We stand behind our work with our 14-Day Protocol Guarantee. If you log into the member portal, review the materials, follow the first 14 days of habit tracking, and genuinely believe FIT90 is not the most thorough lifestyle transformation system you have experienced, notify us within 14 days for a prompt, courteous 100% refund."
  }
];


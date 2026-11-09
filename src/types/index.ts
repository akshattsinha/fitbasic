export interface Chapter {
  id: string;
  chapterNumber: string;
  days: string;
  title: string;
  tagline: string;
  description: string;
  objective: string;
  trainingSplit: string;
  nutritionFocus: string;
  mindsetProtocol: string;
  milestoneAudit: string;
  image: string;
  highlights: string[];
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  takeaways: string[];
  image: string;
}

export interface ProgramFeature {
  number: string;
  title: string;
  badge?: string;
  description: string;
  deliverables: string[];
  tier: 'all' | 'vip';
}

export interface TransformationStory {
  id: string;
  name: string;
  role: string;
  location: string;
  age: number;
  program: string;
  summary: string;
  quote: string;
  metrics: {
    weightDelta: string;
    bodyFatDelta: string;
    habitScore: string;
    strengthMetric: string;
  };
  beforeImg: string;
  afterImg: string;
  duration: string;
  verificationBadge: string;
}

export interface FAQItem {
  id: string;
  category: 'program' | 'nutrition' | 'logistics' | 'results';
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: 'standard' | 'concierge';
  name: string;
  badge: string;
  priceUSD: number;
  priceINR: number;
  period: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  goal: string;
  planId: 'standard' | 'concierge';
  currency: 'USD' | 'INR';
  paymentMethod: 'card' | 'applepay' | 'upi';
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  upiId: string;
}


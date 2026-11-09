import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Smartphone, 
  QrCode, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Calendar, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS } from '../data/content';
import { CheckoutFormData } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: 'standard' | 'concierge';
  initialCurrency?: 'USD' | 'INR';
  initialGoal?: string;
  onOpenPortalDemo: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  initialPlanId = 'standard',
  initialCurrency = 'USD',
  initialGoal = 'Lean Body Recomposition & Fat Loss',
  onOpenPortalDemo,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'processing' | 'confirmed'>('form');
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    goal: initialGoal,
    planId: initialPlanId,
    currency: initialCurrency,
    paymentMethod: initialCurrency === 'INR' ? 'upi' : 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    upiId: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [orderId, setOrderId] = useState<string>('');

  const selectedPlan = PRICING_PLANS.find((p) => p.id === formData.planId) || PRICING_PLANS[0];
  const priceDisplay = formData.currency === 'USD' 
    ? `$${selectedPlan.priceUSD}` 
    : `₹${selectedPlan.priceINR.toLocaleString('en-IN')}`;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full legal name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid corporate or personal email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Valid contact phone number is required';

    if (formData.paymentMethod === 'card') {
      const cleanCard = formData.cardNumber.replace(/\s+/g, '');
      if (cleanCard.length < 15) newErrors.cardNumber = 'Valid 15 or 16-digit card number required';
      if (!formData.cardExpiry.includes('/')) newErrors.cardExpiry = 'MM/YY required';
      if (formData.cardCvc.length < 3) newErrors.cardCvc = '3-digit CVC required';
    } else if (formData.paymentMethod === 'upi') {
      if (!formData.upiId.includes('@') && formData.upiId.length < 5) {
        newErrors.upiId = 'Valid UPI ID required (e.g., name@okaxis or name@upi)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStep('processing');

    // Simulate real gateway handshake (Stripe / Razorpay)
    setTimeout(() => {
      const generatedOrderId = `FIT90-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderId(generatedOrderId);
      setStep('confirmed');

      // Luxury celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#E5D3B3', '#C5A880', '#FFFFFF', '#94A3B8'],
        });
      } catch (err) {
        // fallback
      }
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl bg-brand-950 border border-white/15 rounded-md shadow-2xl overflow-hidden my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 text-brand-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close Checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: CHECKOUT FORM */}
        {step === 'form' && (
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-2 text-accent-gold text-xs font-mono uppercase tracking-widest mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Encrypted Checkout Portal • 256-Bit SSL</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight mb-2">
              ENROLL IN FIT90
            </h3>
            <p className="text-xs sm:text-sm text-brand-400 font-light mb-8">
              Spring 2026 Cohort • Instant Member Portal Credentials Delivered Upon Confirmation.
            </p>

            <form onSubmit={handleProcessPayment} className="space-y-6">
              {/* Plan Selection Radio */}
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-brand-400 block mb-2">
                  Select Program Tier:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRICING_PLANS.map((plan) => {
                    const isSelected = formData.planId === plan.id;
                    const price = formData.currency === 'USD' ? `$${plan.priceUSD}` : `₹${plan.priceINR.toLocaleString('en-IN')}`;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setFormData({ ...formData, planId: plan.id })}
                        className={`p-4 rounded-sm border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-brand-900 border-accent-gold text-white shadow-md'
                            : 'bg-brand-900/40 border-white/10 text-brand-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display text-sm font-bold uppercase">{plan.name}</span>
                          <span className="text-xs font-mono text-accent-champagne font-bold">{price}</span>
                        </div>
                        <p className="text-[11px] text-brand-400 font-mono">{plan.tagline}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-brand-400">
                  Member Contact Details:
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-300 mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Wright"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-brand-900 border border-white/15 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent-gold"
                  />
                  {errors.fullName && <p className="text-xs text-red-400 mt-1 font-mono">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-brand-300 mb-1">Corporate or Personal Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-900 border border-white/15 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent-gold"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brand-300 mb-1">Contact Phone (with Country Code)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834 / +91 98..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-900 border border-white/15 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent-gold"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1 font-mono">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-300 mb-1">Primary Transformation Focus</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-brand-900 border border-white/15 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent-gold"
                  >
                    <option value="Lean Body Recomposition & Fat Loss">Lean Body Recomposition & Fat Loss</option>
                    <option value="Athletic Strength & Muscular Hypertrophy">Athletic Strength & Muscular Hypertrophy</option>
                    <option value="Metabolic Longevity & Executive Stamina">Metabolic Longevity & Executive Stamina</option>
                    <option value="Habit Architecture & Postural Restoration">Habit Architecture & Postural Restoration</option>
                  </select>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-400">
                    Payment Architecture:
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, currency: 'USD', paymentMethod: 'card' })}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-sm border ${
                        formData.currency === 'USD' ? 'bg-white text-brand-950 font-bold border-white' : 'text-brand-400 border-white/10'
                      }`}
                    >
                      USD ($)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, currency: 'INR', paymentMethod: 'upi' })}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-sm border ${
                        formData.currency === 'INR' ? 'bg-white text-brand-950 font-bold border-white' : 'text-brand-400 border-white/10'
                      }`}
                    >
                      INR (₹ / Razorpay)
                    </button>
                  </div>
                </div>

                {/* Gateway Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3 rounded-sm border flex items-center justify-center gap-2 text-xs font-mono uppercase ${
                      formData.paymentMethod === 'card'
                        ? 'bg-white text-brand-950 font-bold border-white'
                        : 'bg-brand-900/60 text-brand-400 border-white/10'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'applepay' })}
                    className={`p-3 rounded-sm border flex items-center justify-center gap-2 text-xs font-mono uppercase ${
                      formData.paymentMethod === 'applepay'
                        ? 'bg-white text-brand-950 font-bold border-white'
                        : 'bg-brand-900/60 text-brand-400 border-white/10'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Apple / GPay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    className={`p-3 rounded-sm border flex items-center justify-center gap-2 text-xs font-mono uppercase ${
                      formData.paymentMethod === 'upi'
                        ? 'bg-white text-brand-950 font-bold border-white'
                        : 'bg-brand-900/60 text-brand-400 border-white/10'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>UPI / Razorpay</span>
                  </button>
                </div>

                {/* Card Fields */}
                {formData.paymentMethod === 'card' && (
                  <div className="p-4 rounded-sm bg-brand-900/80 border border-white/10 space-y-3">
                    <div>
                      <label className="block text-[11px] font-mono text-brand-400 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="4242 •••• •••• 4242"
                        maxLength={19}
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                          setFormData({ ...formData, cardNumber: val });
                        }}
                        className="w-full bg-brand-950 border border-white/15 rounded-sm px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-accent-gold"
                      />
                      {errors.cardNumber && <p className="text-xs text-red-400 mt-1 font-mono">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-brand-400 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          className="w-full bg-brand-950 border border-white/15 rounded-sm px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-accent-gold"
                        />
                        {errors.cardExpiry && <p className="text-xs text-red-400 mt-1 font-mono">{errors.cardExpiry}</p>}
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-brand-400 mb-1">CVC / Security Code</label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength={4}
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          className="w-full bg-brand-950 border border-white/15 rounded-sm px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-accent-gold"
                        />
                        {errors.cardCvc && <p className="text-xs text-red-400 mt-1 font-mono">{errors.cardCvc}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI Fields */}
                {formData.paymentMethod === 'upi' && (
                  <div className="p-4 rounded-sm bg-brand-900/80 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-accent-champagne">
                      <span>Supported: GPay, PhonePe, Paytm, Cred, BHIM</span>
                      <span className="text-[10px] text-brand-400">Razorpay Verified</span>
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-brand-400 mb-1">Virtual Payment Address (VPA / UPI ID)</label>
                      <input
                        type="text"
                        placeholder="yourname@okaxis or yourname@upi"
                        value={formData.upiId}
                        onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                        className="w-full bg-brand-950 border border-white/15 rounded-sm px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-accent-gold"
                      />
                      {errors.upiId && <p className="text-xs text-red-400 mt-1 font-mono">{errors.upiId}</p>}
                    </div>
                  </div>
                )}

                {/* Apple Pay / GPay notice */}
                {formData.paymentMethod === 'applepay' && (
                  <div className="p-4 rounded-sm bg-brand-900/80 border border-white/10 text-xs font-mono text-brand-300">
                    <p>Instant biometric authorization will be prompted on submission via your device’s Secure Enclave.</p>
                  </div>
                )}
              </div>

              {/* Order Summary & Submit Button */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-400">Total Investment (All 90 Days):</span>
                  <span className="text-2xl font-display font-bold text-white">{priceDisplay}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-white hover:bg-accent-champagne text-brand-950 font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-accent-gold/20"
                >
                  <Lock className="w-4 h-4" />
                  <span>AUTHORIZE INVESTMENT — {priceDisplay}</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-brand-400">
                  <ShieldCheck className="w-4 h-4 text-accent-gold" />
                  <span>Protected by 14-Day Protocol Adherence Guarantee</span>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: PROCESSING STATE */}
        {step === 'processing' && (
          <div className="p-16 sm:p-20 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-white/10 border-t-accent-gold animate-spin" />
              <div className="absolute inset-2 rounded-full border-2 border-white/5 border-b-accent-champagne animate-spin [animation-direction:reverse]" />
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                AUTHORIZING ENROLLMENT
              </h4>
              <p className="text-xs font-mono text-brand-400">
                Establishing encrypted gateway handshake and generating member credentials...
              </p>
            </div>

            <div className="text-[11px] font-mono text-accent-gold px-3 py-1 rounded-sm bg-accent-gold/10 border border-accent-gold/20">
              Transaction ID: TX-{Date.now().toString().slice(-8)}
            </div>
          </div>
        )}

        {/* STEP 3: ORDER CONFIRMED & ONBOARDING PORTAL */}
        {step === 'confirmed' && (
          <div className="p-6 sm:p-10 animate-fade-in space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Enrollment Confirmed & Verified</span>
              </div>
              <span className="text-xs font-mono text-brand-400">{orderId}</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-3xl font-bold uppercase text-white tracking-tight">
                WELCOME TO FIT90, <br />
                <span className="gold-gradient-text">{formData.fullName.split(' ')[0] || 'MEMBER'}</span>.
              </h3>
              <p className="text-xs sm:text-sm text-brand-300 font-light leading-relaxed">
                Your place in the Spring 2026 Cohort is secured. Your confirmation and receipt have been dispatched to <strong className="text-white">{formData.email}</strong>.
              </p>
            </div>

            {/* Next Steps Onboarding Checklist */}
            <div className="p-5 rounded-sm bg-brand-900/80 border border-accent-gold/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-white uppercase text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                  Day 00 Onboarding Directives:
                </span>
                <span className="text-xs font-mono text-accent-champagne">Immediate Action Required</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-brand-950/80 rounded-sm border border-white/5 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">1</span>
                  <div>
                    <span className="text-white font-semibold block">Access the Member Sanctum</span>
                    <span className="text-brand-400 text-[11px]">Your unique authentication token has been initialized. Launch the portal below to begin.</span>
                  </div>
                </div>

                <div className="p-3 bg-brand-950/80 rounded-sm border border-white/5 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">2</span>
                  <div>
                    <span className="text-white font-semibold block">Complete 10-Minute Biometric Intake</span>
                    <span className="text-brand-400 text-[11px]">Calibrates your starting macros, movement baseline, and schedule split.</span>
                  </div>
                </div>

                <div className="p-3 bg-brand-950/80 rounded-sm border border-white/5 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">3</span>
                  <div>
                    <span className="text-white font-semibold block">Download Day 00 Orientation & Recipe Vault</span>
                    <span className="text-brand-400 text-[11px]">Comprehensive 64-page PDF containing all grocery blueprints and culinary playbooks.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenPortalDemo();
                }}
                className="py-3.5 px-5 bg-white hover:bg-accent-champagne text-brand-950 font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Member Portal</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  alert(`FIT90 Welcome Kit and Receipt PDF downloaded for Order #${orderId}`);
                }}
                className="py-3.5 px-5 bg-brand-900 hover:bg-brand-850 text-white border border-white/15 text-xs uppercase tracking-widest font-mono rounded-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-accent-gold" />
                <span>Download Welcome Kit (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


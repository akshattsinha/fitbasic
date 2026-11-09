import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MinimalCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'USD' | 'INR';
}

export const MinimalCheckout: React.FC<MinimalCheckoutProps> = ({ isOpen, onClose, currency }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'processing' | 'confirmed'>('form');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'upi'>(
    currency === 'INR' ? 'upi' : 'card'
  );
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [upiId, setUpiId] = useState('');
  const [error, setError] = useState('');
  const [orderCode, setOrderCode] = useState('');

  const priceString = currency === 'USD' ? '$297' : '₹14,999';

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !email.includes('@')) {
      setError('Please provide your full name and valid email address.');
      return;
    }

    if (paymentMethod === 'card') {
      const clean = cardNumber.replace(/\s+/g, '');
      if (clean.length < 15 || !cardExpiry.includes('/') || cardCvc.length < 3) {
        setError('Please check your card details.');
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId.includes('@')) {
        setError('Please enter a valid UPI address (e.g. name@upi).');
        return;
      }
    }

    setError('');
    setStep('processing');

    setTimeout(() => {
      const code = `FIT90-${Date.now().toString().slice(-6)}`;
      setOrderCode(code);
      setStep('confirmed');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F5F2EB', '#A39E93', '#FFFFFF'],
        });
      } catch (e) {
        // quiet
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-cinematic overflow-y-auto">
      <div className="relative w-full max-w-xl bg-noir border border-white/[0.12] p-8 sm:p-12 shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-ivory/40 hover:text-ivory transition-colors"
          aria-label="Close Checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-luxury text-ivory/40 mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Encrypted Transaction • 256-Bit</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-ivory uppercase tracking-tight mb-2">
              ENROLL IN FIT<span className="italic">90</span>
            </h3>
            <p className="text-xs font-mono uppercase tracking-luxury text-ivory/50 mb-8">
              Total Investment: <span className="text-ivory font-bold">{priceString}</span>
            </p>

            {error && (
              <div className="p-3 bg-red-950/40 border border-red-500/20 text-xs font-mono text-red-300 mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handlePay} className="space-y-6">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-1.5">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alexander Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-surface border border-white/[0.1] px-4 py-3 text-sm text-ivory font-sans focus:outline-none focus:border-ivory transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface border border-white/[0.1] px-4 py-3 text-sm text-ivory font-sans focus:outline-none focus:border-ivory transition-colors"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-ivory text-noir font-medium border-ivory'
                        : 'bg-surface text-ivory/50 border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2.5 text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'applepay'
                        ? 'bg-ivory text-noir font-medium border-ivory'
                        : 'bg-surface text-ivory/50 border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2.5 text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-ivory text-noir font-medium border-ivory'
                        : 'bg-surface text-ivory/50 border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    UPI
                  </button>
                </div>
              </div>

              {/* Card Inputs */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-1.5">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="•••• •••• •••• ••••"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                        setCardNumber(val);
                      }}
                      className="w-full bg-surface border border-white/[0.1] px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-ivory"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-1.5">
                        MM / YY
                      </label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-surface border border-white/[0.1] px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-ivory"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-1.5">
                        CVC
                      </label>
                      <input
                        type="password"
                        placeholder="•••"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-surface border border-white/[0.1] px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-ivory"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Inputs */}
              {paymentMethod === 'upi' && (
                <div className="pt-2">
                  <label className="block text-[11px] font-mono uppercase tracking-luxury text-ivory/50 mb-1.5">
                    UPI Virtual Payment Address
                  </label>
                  <input
                    type="text"
                    placeholder="name@okaxis"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full bg-surface border border-white/[0.1] px-4 py-3 text-sm text-ivory font-mono focus:outline-none focus:border-ivory"
                  />
                </div>
              )}

              {/* Apple Pay Notice */}
              {paymentMethod === 'applepay' && (
                <div className="pt-2 text-xs font-mono text-ivory/60">
                  Biometric authorization will prompt on submission via your Apple device.
                </div>
              )}

              {/* Authorize Button */}
              <div className="pt-4 border-t border-white/[0.08]">
                <button
                  type="submit"
                  className="w-full py-4 bg-ivory text-noir text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-white"
                >
                  AUTHORIZE INVESTMENT — {priceString}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PROCESSING */}
        {step === 'processing' && (
          <div className="py-16 text-center space-y-6 animate-cinematic">
            <div className="w-12 h-12 border-2 border-ivory/20 border-t-ivory rounded-full animate-spin mx-auto" />
            <h4 className="font-serif text-2xl uppercase tracking-tight text-ivory">
              SECURING ENROLLMENT
            </h4>
            <p className="text-xs font-mono uppercase tracking-luxury text-ivory/50">
              Generating your FIT90 Member Credentials...
            </p>
          </div>
        )}

        {/* CONFIRMED */}
        {step === 'confirmed' && (
          <div className="space-y-8 animate-cinematic">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-luxury text-ivory/70">
              <CheckCircle2 className="w-4 h-4 text-ivory" />
              <span>Enrollment Verified • Reference {orderCode}</span>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl text-ivory uppercase tracking-tight leading-[1]">
              WELCOME TO FIT<span className="italic font-light">90.</span>
            </h3>

            <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed font-sans">
              Your ninety-day transformation protocol is initialized. Full onboarding credentials and curriculum access have been dispatched to <strong className="text-white font-medium">{email}</strong>.
            </p>

            <div className="p-6 bg-surface border border-white/[0.08] space-y-4 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-luxury text-ivory/40 block">
                Immediate Next Directives:
              </span>
              <div className="space-y-2 text-ivory/80">
                <div>01. Check your inbox for the FIT90 Member Portal access key.</div>
                <div>02. Complete your 10-minute baseline intake and movement profile.</div>
                <div>03. Calibrate Day 01 starting equipment and grocery framework.</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-4 bg-ivory text-noir text-xs uppercase tracking-luxury font-medium hover:bg-white transition-colors"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


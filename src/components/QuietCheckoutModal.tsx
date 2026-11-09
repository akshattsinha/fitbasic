import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuietCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'USD' | 'INR';
}

export const QuietCheckoutModal: React.FC<QuietCheckoutModalProps> = ({ isOpen, onClose, currency }) => {
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
      setError('Please provide your legal name and valid email address.');
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
        setError('Please enter a valid UPI address (e.g. name@okaxis).');
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
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#343630', '#B9A58A', '#A7AD99', '#EEEAE0'],
        });
      } catch (e) {
        // quiet
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/40 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-ivory border border-[#343630]/[0.12] p-8 sm:p-12 shadow-2xl my-auto text-charcoal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors"
          aria-label="Close Checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-luxury text-charcoal/50 mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Encrypted Transaction • 256-Bit</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal uppercase tracking-tight mb-2 font-normal">
              ENROLL IN FIT<span className="italic font-light text-charcoal/70">90</span>
            </h3>
            <p className="text-xs font-mono uppercase tracking-luxury text-charcoal/60 mb-8">
              Total Investment: <span className="text-charcoal font-bold">{priceString}</span>
            </p>

            {error && (
              <div className="p-3 bg-red-100 border border-red-300 text-xs font-mono text-red-800 mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handlePay} className="space-y-6">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-1.5">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alexander Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-champagne/50 border border-[#343630]/[0.15] px-4 py-3 text-sm text-charcoal font-sans focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/30"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-champagne/50 border border-[#343630]/[0.15] px-4 py-3 text-sm text-charcoal font-sans focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/30"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-charcoal text-ivory font-medium border-charcoal'
                        : 'bg-champagne/60 text-charcoal/60 border-[#343630]/[0.1] hover:border-[#343630]/[0.25]'
                    }`}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2.5 text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'applepay'
                        ? 'bg-charcoal text-ivory font-medium border-charcoal'
                        : 'bg-champagne/60 text-charcoal/60 border-[#343630]/[0.1] hover:border-[#343630]/[0.25]'
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2.5 text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-charcoal text-ivory font-medium border-charcoal'
                        : 'bg-champagne/60 text-charcoal/60 border-[#343630]/[0.1] hover:border-[#343630]/[0.25]'
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
                    <label className="block text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-1.5">
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
                      className="w-full bg-champagne/50 border border-[#343630]/[0.15] px-4 py-3 text-sm text-charcoal font-mono focus:outline-none focus:border-charcoal placeholder:text-charcoal/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-1.5">
                        MM / YY
                      </label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-champagne/50 border border-[#343630]/[0.15] px-4 py-3 text-sm text-charcoal font-mono focus:outline-none focus:border-charcoal placeholder:text-charcoal/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-1.5">
                        CVC
                      </label>
                      <input
                        type="password"
                        placeholder="•••"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-champagne/50 border border-[#343630]/[0.15] px-4 py-3 text-sm text-charcoal font-mono focus:outline-none focus:border-charcoal placeholder:text-charcoal/30"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Inputs */}
              {paymentMethod === 'upi' && (
                <div className="pt-2">
                  <label className="block text-[11px] font-mono uppercase tracking-luxury text-charcoal/60 mb-1.5">
                    UPI Virtual Payment Address
                  </label>
                  <input
                    type="text"
                    placeholder="name@okaxis"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full bg-champagne/50 border border-[#343630]/[0.15] px-4 py-3 text-sm text-charcoal font-mono focus:outline-none focus:border-charcoal placeholder:text-charcoal/30"
                  />
                </div>
              )}

              {/* Apple Pay Notice */}
              {paymentMethod === 'applepay' && (
                <div className="pt-2 text-xs font-mono text-charcoal/60">
                  Biometric authorization will prompt on submission via your Apple device.
                </div>
              )}

              {/* Authorize Button */}
              <div className="pt-4 border-t border-[#343630]/[0.1]">
                <button
                  type="submit"
                  className="w-full py-4 bg-charcoal text-ivory text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:bg-charcoal/90 shadow-elevated"
                >
                  AUTHORIZE INVESTMENT — {priceString}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PROCESSING */}
        {step === 'processing' && (
          <div className="py-16 text-center space-y-6 animate-fade-in">
            <div className="w-12 h-12 border-2 border-charcoal/20 border-t-charcoal rounded-full animate-spin mx-auto" />
            <h4 className="font-serif text-2xl uppercase tracking-tight text-charcoal">
              SECURING ENROLLMENT
            </h4>
            <p className="text-xs font-mono uppercase tracking-luxury text-charcoal/60">
              Generating your FIT90 Member Credentials...
            </p>
          </div>
        )}

        {/* CONFIRMED */}
        {step === 'confirmed' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-luxury text-charcoal/70">
              <CheckCircle2 className="w-4 h-4 text-charcoal" />
              <span>Enrollment Verified • Reference {orderCode}</span>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl text-charcoal uppercase tracking-tight leading-[1] font-normal">
              WELCOME TO FIT<span className="italic font-light text-charcoal/70">90.</span>
            </h3>

            <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed font-sans">
              Your ninety-day transformation protocol is initialized. Full onboarding credentials and curriculum access have been dispatched to <strong className="text-charcoal font-medium">{email}</strong>.
            </p>

            <div className="p-6 bg-champagne/70 border border-[#343630]/[0.1] space-y-4 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-luxury text-charcoal/60 block font-semibold">
                Immediate Next Directives:
              </span>
              <div className="space-y-2 text-charcoal/80">
                <div>01. Check your inbox for the FIT90 Member Portal access key.</div>
                <div>02. Complete your 10-minute baseline intake and movement profile.</div>
                <div>03. Calibrate Day 01 starting equipment and grocery framework.</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-4 bg-charcoal text-ivory text-xs uppercase tracking-luxury font-medium hover:bg-charcoal/90 transition-colors"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


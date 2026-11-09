import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AwwwardsCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'USD' | 'INR';
}

export const AwwwardsCheckoutModal: React.FC<AwwwardsCheckoutModalProps> = ({ 
  isOpen, 
  onClose, 
  currency 
}) => {
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E9BFAF', '#C6D5BC', '#D6C6E8', '#E8D58E', '#353A34'],
        });
      } catch (e) {
        // quiet
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest/40 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl border border-white/90 p-8 sm:p-12 shadow-2xl my-auto text-forest">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass-pill text-forest/50 hover:text-forest transition-colors"
          aria-label="Close Checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-luxury text-forest/50 mb-3">
              <Lock className="w-3.5 h-3.5 text-sage-dark" />
              <span>Encrypted Transaction • 256-Bit SSL</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-forest uppercase tracking-tight mb-2 font-normal">
              ENROLL IN FIT<span className="italic font-light text-forest/70">90</span>
            </h3>
            <p className="text-xs font-mono uppercase tracking-luxury text-forest/60 mb-8">
              Tuition: <span className="text-forest font-bold">{priceString}</span> • Spring Cohort
            </p>

            {error && (
              <div className="p-3 bg-rose/20 border border-rose text-xs font-mono text-rose-dark mb-6 rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handlePay} className="space-y-6">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/60 mb-1.5">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alexander Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-3 text-sm text-forest font-sans focus:outline-none focus:border-forest transition-colors placeholder:text-forest/30"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/60 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-3 text-sm text-forest font-sans focus:outline-none focus:border-forest transition-colors placeholder:text-forest/30"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/60 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 rounded-xl text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-forest text-cream font-medium border-forest shadow-sm'
                        : 'bg-white/50 text-forest/60 border-forest/10 hover:border-forest/30'
                    }`}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2.5 rounded-xl text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'applepay'
                        ? 'bg-forest text-cream font-medium border-forest shadow-sm'
                        : 'bg-white/50 text-forest/60 border-forest/10 hover:border-forest/30'
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2.5 rounded-xl text-xs font-mono uppercase tracking-luxury border transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-forest text-cream font-medium border-forest shadow-sm'
                        : 'bg-white/50 text-forest/60 border-forest/10 hover:border-forest/30'
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
                    <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/60 mb-1.5">
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
                      className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-3 text-sm text-forest font-mono focus:outline-none focus:border-forest placeholder:text-forest/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/60 mb-1.5">
                        MM / YY
                      </label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-3 text-sm text-forest font-mono focus:outline-none focus:border-forest placeholder:text-forest/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/60 mb-1.5">
                        CVC
                      </label>
                      <input
                        type="password"
                        placeholder="•••"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-3 text-sm text-forest font-mono focus:outline-none focus:border-forest placeholder:text-forest/30"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Inputs */}
              {paymentMethod === 'upi' && (
                <div className="pt-2">
                  <label className="block text-[11px] font-mono uppercase tracking-luxury text-forest/60 mb-1.5">
                    UPI Address
                  </label>
                  <input
                    type="text"
                    placeholder="name@okaxis"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full bg-white/70 border border-forest/15 rounded-xl px-4 py-3 text-sm text-forest font-mono focus:outline-none focus:border-forest placeholder:text-forest/30"
                  />
                </div>
              )}

              {/* Apple Pay Notice */}
              {paymentMethod === 'applepay' && (
                <div className="pt-2 text-xs font-mono text-forest/60">
                  Biometric authorization will prompt on submission via your Apple device.
                </div>
              )}

              {/* Authorize Button */}
              <div className="pt-4 border-t border-forest/10">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:shadow-glass-hover hover:scale-[1.01] shadow-elevated"
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
            <div className="w-12 h-12 border-2 border-forest/20 border-t-forest rounded-full animate-spin mx-auto" />
            <h4 className="font-serif text-2xl uppercase tracking-tight text-forest">
              SECURING ENROLLMENT
            </h4>
            <p className="text-xs font-mono uppercase tracking-luxury text-forest/60">
              Generating your FIT90 Member Credentials...
            </p>
          </div>
        )}

        {/* CONFIRMED */}
        {step === 'confirmed' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-luxury text-forest/70">
              <CheckCircle2 className="w-4 h-4 text-forest" />
              <span>Enrollment Verified • Reference {orderCode}</span>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl text-forest uppercase tracking-tight leading-[1] font-normal">
              WELCOME TO FIT<span className="italic font-light text-forest/70">90.</span>
            </h3>

            <p className="text-sm sm:text-base text-forest/80 font-light leading-relaxed font-sans">
              Your ninety-day transformation protocol is initialized. Full onboarding credentials and curriculum access have been dispatched to <strong className="text-forest font-medium">{email}</strong>.
            </p>

            <div className="p-6 rounded-2xl glass-panel-subtle border border-white/80 space-y-4 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-luxury text-forest/60 block font-semibold">
                Immediate Next Directives:
              </span>
              <div className="space-y-2 text-forest/80">
                <div>01. Check your inbox for the FIT90 Member Portal access key.</div>
                <div>02. Complete your 10-minute baseline intake and movement profile.</div>
                <div>03. Calibrate Day 01 starting equipment and grocery framework.</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-4 rounded-full bg-forest text-cream text-xs uppercase tracking-luxury font-medium hover:bg-forest/90 transition-colors shadow-elevated"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


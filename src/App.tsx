import React, { useState } from 'react';
import { AwwwardsNavbar } from './components/AwwwardsNavbar';
import { AwwwardsHero } from './components/AwwwardsHero';
import { AwwwardsPhilosophy } from './components/AwwwardsPhilosophy';
import { AwwwardsJourney } from './components/AwwwardsJourney';
import { AwwwardsExperience } from './components/AwwwardsExperience';
import { AwwwardsStories } from './components/AwwwardsStories';
import { AwwwardsPricing } from './components/AwwwardsPricing';
import { AwwwardsFinal } from './components/AwwwardsFinal';
import { AwwwardsCheckoutModal } from './components/AwwwardsCheckoutModal';

export const App: React.FC = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutCurrency, setCheckoutCurrency] = useState<'USD' | 'INR'>('USD');

  const handleOpenCheckout = (currency: 'USD' | 'INR' = 'USD') => {
    setCheckoutCurrency(currency);
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col font-sans selection:bg-peach selection:text-forest relative">
      {/* Navigation */}
      <AwwwardsNavbar onOpenCheckout={() => handleOpenCheckout('USD')} />

      <main className="flex-1">
        {/* Section 01: Hero */}
        <AwwwardsHero onOpenCheckout={() => handleOpenCheckout('USD')} />

        {/* Section 02: Philosophy */}
        <AwwwardsPhilosophy />

        {/* Section 03: The 90-Day Journey */}
        <AwwwardsJourney />

        {/* Section 04: The FIT90 Experience */}
        <AwwwardsExperience />

        {/* Section 05: Transformation Stories */}
        <AwwwardsStories />

        {/* Section 06: Pricing and Purchase */}
        <AwwwardsPricing onOpenCheckout={handleOpenCheckout} />

        {/* Section 07: Final CTA & Minimal Footer */}
        <AwwwardsFinal onOpenCheckout={() => handleOpenCheckout('USD')} />
      </main>

      {/* Frictionless Luxury Checkout Drawer */}
      <AwwwardsCheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        currency={checkoutCurrency}
      />
    </div>
  );
};

export default App;

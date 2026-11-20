import React, { useState, useEffect } from 'react';
import { AwwwardsNavbar } from './components/AwwwardsNavbar';
import { AwwwardsHero } from './components/AwwwardsHero';
import { AwwwardsPhilosophy } from './components/AwwwardsPhilosophy';
import { AwwwardsJourney } from './components/AwwwardsJourney';
import { AwwwardsExperience } from './components/AwwwardsExperience';
import { AwwwardsStories } from './components/AwwwardsStories';
import { AwwwardsPricing } from './components/AwwwardsPricing';
import { AwwwardsFinal } from './components/AwwwardsFinal';
import { AwwwardsCheckoutModal } from './components/AwwwardsCheckoutModal';
import { EmergencyFilePage } from './components/EmergencyFilePage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'emergency-file'>(() => {
    return window.location.hash === '#emergency-file' ? 'emergency-file' : 'home';
  });

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutCurrency, setCheckoutCurrency] = useState<'USD' | 'INR'>('USD');

  // Handle hash change for browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#emergency-file') {
        setCurrentPage('emergency-file');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'emergency-file') => {
    setCurrentPage(page);
    if (page === 'emergency-file') {
      window.location.hash = '#emergency-file';
    } else {
      // Remove hash cleanly without scrolling jump
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCheckout = (currency: 'USD' | 'INR' = 'USD') => {
    setCheckoutCurrency(currency);
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col font-sans selection:bg-peach selection:text-forest relative">
      {currentPage === 'emergency-file' ? (
        /* DEDICATED FULL-PAGE EMERGENCY FILE EXPERIENCE (NO POPUP) */
        <EmergencyFilePage
          onBackToHome={() => navigateTo('home')}
          onOpenCheckout={() => handleOpenCheckout('USD')}
        />
      ) : (
        /* MAIN REVERZN HOME EXPERIENCE */
        <>
          {/* Streamlined Top Navigation Bar: ONLY REVERZN Brand, Emergency File, and Join REVERZN */}
          <AwwwardsNavbar
            currentPage="home"
            onOpenCheckout={() => handleOpenCheckout('USD')}
            onOpenEmergencyFile={() => navigateTo('emergency-file')}
            onNavigateHome={() => navigateTo('home')}
          />

          <main className="flex-1">
            {/* Section 01: Hero */}
            <AwwwardsHero onOpenCheckout={() => handleOpenCheckout('USD')} />

            {/* Section 02: Philosophy */}
            <AwwwardsPhilosophy />

            {/* Section 03: The 90-Day Journey */}
            <AwwwardsJourney />

            {/* Section 04: The REVERZN Experience */}
            <AwwwardsExperience />

            {/* Section 05: Transformation Stories */}
            <AwwwardsStories />

            {/* Section 06: Pricing and Purchase */}
            <AwwwardsPricing onOpenCheckout={handleOpenCheckout} />

            {/* Section 07: Final CTA & Minimal Footer */}
            <AwwwardsFinal
              onOpenCheckout={() => handleOpenCheckout('USD')}
              onOpenEmergencyFile={() => navigateTo('emergency-file')}
            />
          </main>
        </>
      )}

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

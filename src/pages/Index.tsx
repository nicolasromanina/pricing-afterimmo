import React, { useState } from 'react';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingTiers from '@/components/pricing/PricingTiers';
import ComparisonTable from '@/components/pricing/ComparisonTable';
import AddOnFeatures from '@/components/pricing/AddOnFeatures';
import MonthlyRetainers from '@/components/pricing/MonthlyRetainers';
import HybridOption from '@/components/pricing/HybridOption';
import FoundingOffer from '@/components/pricing/FoundingOffer';
import { Currency } from '@/lib/currency';

/**
 * Index — Main pricing landing page.
 * Assembles all pricing sections in order matching the design.
 */
const Index: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('EURO');
  const [projectCount, setProjectCount] = useState(3);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased selection:bg-[#171717] selection:text-white">
      <PricingHeader
        currency={currency}
        onCurrencyChange={setCurrency}
        projectCount={projectCount}
        onProjectCountChange={setProjectCount}
      />
      <PricingTiers currency={currency} projectCount={projectCount} />
      <ComparisonTable currency={currency} />
      <AddOnFeatures currency={currency} />
      <MonthlyRetainers currency={currency} />
      <HybridOption currency={currency} />
      <FoundingOffer currency={currency} />
    </div>
  );
};

export default Index;

import React, { useState } from 'react';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingTiers from '@/components/pricing/PricingTiers';
import ComparisonTable from '@/components/pricing/ComparisonTable';
import AddOnFeatures from '@/components/pricing/AddOnFeatures';
import MonthlyRetainers from '@/components/pricing/MonthlyRetainers';
import HybridOption from '@/components/pricing/HybridOption';
import FoundingOffer from '@/components/pricing/FoundingOffer';

/**
 * Index — Main pricing landing page.
 * Assembles all pricing sections in order matching the design.
 */
const Index: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'EURO' | 'FCA'>('EURO');
  const [projectCount, setProjectCount] = useState(3);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased selection:bg-[#171717] selection:text-white">
      {/* Header controls */}
      <PricingHeader
        currency={currency}
        onCurrencyChange={setCurrency}
        projectCount={projectCount}
        onProjectCountChange={setProjectCount}
      />

      {/* Main pricing cards */}
      <PricingTiers />

      {/* Detailed comparison table */}
      <ComparisonTable />

      {/* Add-on features */}
      <AddOnFeatures />

      {/* Monthly retainers */}
      <MonthlyRetainers />

      {/* Hybrid option */}
      <HybridOption />

      {/* Founding offer */}
      <FoundingOffer />
    </div>
  );
};

export default Index;

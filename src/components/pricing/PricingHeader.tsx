import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

/**
 * PricingHeader — Currency selector (USD/EURO/FCA) and project count stepper.
 * Matches the top bar from the design with pill-shaped selectors.
 */

type Currency = 'USD' | 'EURO' | 'FCA';

interface PricingHeaderProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  projectCount: number;
  onProjectCountChange: (n: number) => void;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({
  currency,
  onCurrencyChange,
  projectCount,
  onProjectCountChange,
}) => {
  const currencies: Currency[] = ['USD', 'EURO', 'FCA'];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-8">
      {/* Currency Selector */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm font-medium text-[#171717] tracking-wide">Prix en</span>
        <div className="flex items-center bg-[#f5f5f5] rounded-full p-1">
          {currencies.map((c) => (
            <button
              key={c}
              onClick={() => onCurrencyChange(c)}
              className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                currency === c
                  ? 'bg-[#171717] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#171717]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Project Count Stepper */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm font-medium text-[#171717] tracking-wide">Nombre de projets</span>
        <div className="flex items-center bg-[#f5f5f5] rounded-full overflow-hidden">
          <button
            onClick={() => onProjectCountChange(Math.max(1, projectCount - 1))}
            className="w-10 h-10 flex items-center justify-center text-[#171717] hover:bg-[#e5e5e5] transition-colors"
          >
            <Minus className="w-4 h-4" strokeWidth={2.5} />
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-sm font-bold text-[#171717] tabular-nums">
            {String(projectCount).padStart(2, '0')}
          </span>
          <button
            onClick={() => onProjectCountChange(projectCount + 1)}
            className="w-10 h-10 flex items-center justify-center text-[#171717] hover:bg-[#e5e5e5] transition-colors"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;

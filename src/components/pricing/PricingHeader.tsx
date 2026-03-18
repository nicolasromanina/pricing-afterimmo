import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { Currency } from '@/lib/currency';

/**
 * PricingHeader — Currency selector (USD/EURO/FCA) and project count stepper.
 * Matches the top bar from the design with pill-shaped selectors.
 */

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
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(String(projectCount));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(String(projectCount).padStart(2, '0'));
  }, [projectCount]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleInputBlur = () => {
    setIsEditing(false);
    const num = parseInt(inputValue, 10);
    if (!isNaN(num) && num >= 1 && num <= 99) {
      onProjectCountChange(num);
    } else {
      setInputValue(String(projectCount).padStart(2, '0'));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setInputValue(String(projectCount).padStart(2, '0'));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-8">
      {/* Currency Selector */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm font-medium text-[#171717] tracking-wide">Prix en</span>
        <div className="relative flex items-center bg-[#f5f5f5] rounded-full p-1">
          {currencies.map((c) => (
            <button
              key={c}
              onClick={() => onCurrencyChange(c)}
              className={`relative z-10 px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                currency === c
                  ? 'text-white'
                  : 'text-[#666666] hover:text-[#171717]'
              }`}
            >
              {c}
            </button>
          ))}
          {/* Animated pill background */}
          <motion.div
            className="absolute top-1 bottom-1 rounded-full bg-[#171717] shadow-sm"
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{
              left: `calc(${currencies.indexOf(currency) * (100 / 3)}% + 2px)`,
              width: `calc(${100 / 3}% - 4px)`,
              marginLeft: 0,
              marginRight: 0,
            }}
          />
        </div>
      </div>

      {/* Project Count Stepper */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm font-medium text-[#171717] tracking-wide">Nombre de projets</span>
        <div className="flex items-center bg-[#f5f5f5] rounded-full overflow-hidden">
          <button
            onClick={() => onProjectCountChange(Math.max(1, projectCount - 1))}
            disabled={projectCount <= 1}
            className="w-10 h-10 flex items-center justify-center text-[#171717] hover:bg-[#e5e5e5] transition-colors disabled:opacity-30 disabled:cursor-not-allowed active:scale-90"
          >
            <Minus className="w-4 h-4" strokeWidth={2.5} />
          </button>
          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '').slice(0, 2);
                setInputValue(val);
              }}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              className="w-10 h-10 text-center text-sm font-bold text-[#171717] tabular-nums bg-white rounded-md outline-none ring-2 ring-[#3B98F5]"
            />
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-10 h-10 flex items-center justify-center text-sm font-bold text-[#171717] tabular-nums hover:bg-[#e5e5e5] transition-colors rounded-md cursor-text"
              title="Cliquer pour éditer"
            >
              {String(projectCount).padStart(2, '0')}
            </button>
          )}
          <button
            onClick={() => onProjectCountChange(Math.min(99, projectCount + 1))}
            disabled={projectCount >= 99}
            className="w-10 h-10 flex items-center justify-center text-[#171717] hover:bg-[#e5e5e5] transition-colors disabled:opacity-30 disabled:cursor-not-allowed active:scale-90"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;

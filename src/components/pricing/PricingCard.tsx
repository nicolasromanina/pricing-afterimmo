import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

/**
 * PricingCard — Individual pricing tier card.
 * Displays tier icon, name, subtitle, price, CTA, and feature list.
 * Supports included (blue check) and excluded (red X) features.
 */

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTierData {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  priceUnit: string;
  cta: string;
  ctaVariant: 'black' | 'red';
  features: PricingFeature[];
  recommended?: boolean;
}

interface PricingCardProps {
  tier: PricingTierData;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col bg-white rounded-2xl p-6 lg:p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow duration-300"
    >
      {/* Recommended Badge */}
      {tier.recommended && (
        <div className="absolute top-4 right-4 bg-[#FF4B26] text-white text-[11px] font-bold px-3 py-1 rounded-full">
          Recommandé
        </div>
      )}

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[#f5f5f5] flex items-center justify-center mb-5">
        {tier.icon}
      </div>

      {/* Name */}
      <h3 className="text-lg font-extrabold tracking-wide uppercase text-[#171717] mb-3">
        {tier.name}
      </h3>

      {/* Subtitle & Description */}
      <p className="text-sm font-bold text-[#171717] leading-snug">{tier.subtitle}</p>
      <p className="text-xs text-[#888888] leading-relaxed mt-1 min-h-[36px]">{tier.description}</p>

      {/* Separator */}
      <div className="w-full h-px bg-[#f0f0f0] my-5" />

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-4xl font-extrabold tracking-tight text-[#171717] tabular-nums">{tier.price}</span>
        <span className="text-sm text-[#999999] font-medium">{tier.priceUnit}</span>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] mb-6 ${
          tier.ctaVariant === 'red'
            ? 'bg-[#FF4B26] text-white hover:bg-[#e5421f] shadow-[0_2px_8px_-2px_rgba(255,75,38,0.4)]'
            : 'bg-[#171717] text-white hover:bg-[#333333] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.3)]'
        }`}
      >
        {tier.cta}
      </button>

      {/* Features List */}
      <div className="flex-1 space-y-3">
        {tier.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            {feature.included ? (
              <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-[#3B98F5] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
            ) : (
              <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-[#FF4B26] flex items-center justify-center">
                <X className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
            )}
            <span className={`text-sm leading-snug ${feature.included ? 'text-[#333333]' : 'text-[#bbbbbb]'}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;

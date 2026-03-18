import React from 'react';
import { motion } from 'framer-motion';
import { Currency, formatPrice } from '@/lib/currency';

import Retainer1Pricing from '@/assets/retainer-1-pricing.png';
import Retainer2Pricing from '@/assets/retainer-2-pricing.png';
import Retainer3Pricing from '@/assets/retainer-3-pricing.png';
import Retainer4Pricing from '@/assets/retainer-4-pricing.png';
import Retainer5Pricing from '@/assets/retainer-5-pricing.png';

/**
 * MonthlyRetainers — "Retainers mensuels" section.
 * Prices converted based on selected currency.
 */

interface RetainerBase {
  icon: React.ReactNode;
  name: string;
  eurPrice: number;
  unit: string;
  description: string;
}

const retainersBase: RetainerBase[] = [
  { icon: <img src={Retainer1Pricing} alt="CADENCE MANAGER" className="w-full h-full object-contain" />, name: 'CADENCE MANAGER', eurPrice: 300, unit: '/mois', description: 'Relances avant deadline, vérif qualité updates' },
  { icon: <img src={Retainer2Pricing} alt="LEAD NURTURING" className="w-full h-full object-contain" />, name: 'LEAD NURTURING', eurPrice: 250, unit: '/mois', description: 'Relances leads B/C, templates WhatsApp, SLA 48h' },
  { icon: <img src={Retainer3Pricing} alt="ADS MANAGEMENT" className="w-full h-full object-contain" />, name: 'ADS MANAGEMENT', eurPrice: 500, unit: '/mois', description: 'Gestion campagnes Meta/Google (budget séparé)' },
  { icon: <img src={Retainer4Pricing} alt="ACCOUNT MANAGER DÉDIÉ" className="w-full h-full object-contain" />, name: 'ACCOUNT MANAGER DÉDIÉ', eurPrice: 400, unit: '/mois', description: 'Interlocuteur unique, pilotage + recommandations' },
  { icon: <img src={Retainer5Pricing} alt="PACK REPORTING EXÉCUTIF" className="w-full h-full object-contain" />, name: 'PACK REPORTING EXÉCUTIF', eurPrice: 200, unit: '/mois', description: 'Rapport PDF mensuel complet envoyé à la direction' },
];

interface MonthlyRetainersProps {
  currency: Currency;
}

const MonthlyRetainers: React.FC<MonthlyRetainersProps> = ({ currency }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 bg-[#F8F9FA]">
      <h2 className="text-[32px] md:text-4xl font-semibold text-center text-black tracking-tight mb-4">
        Retainers mensuels
      </h2>
      <p className="text-[17px] text-[#333333] text-center mb-12 max-w-sm mx-auto leading-snug">
        Services mensuels récurrents pour externaliser les opérations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {retainersBase.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-[24px] border-[6px] border-[#FFE6E0] p-5 flex flex-col hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-3 mb-4 min-h-[48px]">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                {r.icon}
              </div>
              <h3 className="text-[13px] font-bold uppercase tracking-tight text-black leading-tight">
                {r.name}
              </h3>
            </div>

            {/* Ligne de séparation */}
            <div className="w-full h-[1px] bg-[#FFD5CC] mb-5"></div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[34px] font-bold text-black tabular-nums tracking-tight">
                {formatPrice(r.eurPrice, currency, '')}
              </span>
              <span className="text-[13px] font-semibold text-black">{r.unit}</span>
            </div>

            {/* Description */}
            <p className="text-[14px] text-[#333333] leading-snug">
              {r.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MonthlyRetainers;
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Shield } from 'lucide-react';
import { Currency, formatPrice, getCurrencySymbol } from '@/lib/currency';

import ArrowBlue from '@/assets/arrow-blue.png';
import ArrowRed from '@/assets/arrow-red.png';
import VerifieHybridIcon from '@/assets/veriifie-hybride-icon.png';
import VerifieHybridBlue from '@/assets/verifie-hybrid-blue.png';
import VerifieStandard from '@/assets/verifie-standard-icon.png';
/**
 * HybridOption — "Option Hybride - Success Fee" section.
 * Prices converted based on selected currency.
 */

interface HybridOptionProps {
  currency: Currency;
}

const HybridOption: React.FC<HybridOptionProps> = ({ currency }) => {
  const sym = getCurrencySymbol(currency);
  const base = formatPrice(1800, currency, '');
  const perLead = formatPrice(150, currency, '');
  const cap = formatPrice(3000, currency, '');
  const stdPrice = formatPrice(5000, currency, '');

  // Simulation values
  const sim3 = `${base} + ${formatPrice(5400, currency, '')} = ${formatPrice(7200, currency, '')}`;
  const sim5 = `${base} + ${formatPrice(9000, currency, '')} = plafond ${formatPrice(4800, currency, '')}`;
  const sim10 = `Plafonné à ${formatPrice(4800, currency, '')}`;
  const sim0 = `${base} seulement`;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-4">
            Option Hybride - Success Fee
          </h2>
          <p className="text-sm text-[#666666] leading-relaxed max-w-lg">
            Pour les promoteurs qui hésitent sur le plan Vérifié, une alternative hybride est proposée.
            Le promoteur paie moins à l'entrée mais First Immo est aligné sur son succès.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-white rounded-2xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_12px_-4px_rgba(0,0,0,0.08)] max-w-md"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <img src={VerifieHybridIcon} alt="Vérifié Hybride" className="" />
            </div>
            <h3 className="text-base font-extrabold uppercase tracking-wide text-[#171717] mb-3">
              VÉRIFIÉ HYBRIDE
            </h3>
            <p className="text-lg font-bold text-[#171717] mb-3">
              {base} / an + {perLead} par lead qualifié A livré
            </p>
            <p className="text-xs text-[#888888] leading-relaxed">
              Même fonctionnalités que le plan Vérifié. Le coût variable est plafonné à {cap}/an maximum.
            </p>
          </motion.div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#171717] mb-6">
            Simulation économique pour le promoteur
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_-2px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <img src={VerifieHybridBlue} alt="Vérifié Hybride" className="" />
                <span className="text-sm font-bold text-[#3B98F5] uppercase tracking-wide">Vérifié Hybride</span>
              </div>
              <p className="text-xs font-semibold text-[#171717] mb-3">Coût total annuel Hybride :</p>
              <div className="space-y-2.5">
                {[
                  { leads: '3 leads/mois', calc: sim3 },
                  { leads: '5 leads/mois', calc: sim5 },
                  { leads: '10 leads/mois', calc: sim10 },
                  { leads: '0 lead A', calc: sim0 },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <img src={ArrowBlue} alt="PACK REPORTING EXÉCUTIF" className="w-4 h-4" />
                    <div>
                      <p className="text-xs font-semibold text-[#171717]">{item.leads}</p>
                      <p className="text-[11px] text-[#888]">{item.calc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_-2px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <img src={VerifieStandard} alt="Vérifié Standard" className="" />
                <span className="text-sm font-bold text-[#FF4B26] uppercase tracking-wide">Vérifié Standard</span>
              </div>
              <p className="text-xs font-semibold text-[#171717] mb-3">Vérifié Standard ({stdPrice})</p>
              <div className="space-y-2.5">
                {[
                  'Plus cher si bons résultats',
                  'Avantageux',
                  'Très avantageux',
                  'Risque minimal',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <img src={ArrowRed} alt="PACK REPORTING EXÉCUTIF" className="w-4 h-4" />
                    <p className="text-xs text-[#555]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridOption;

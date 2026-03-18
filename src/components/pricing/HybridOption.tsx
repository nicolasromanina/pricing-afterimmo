import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Shield } from 'lucide-react';

/**
 * HybridOption — "Option Hybride - Success Fee" section.
 * Shows the hybrid Vérifié plan and economic simulation comparison.
 */

const HybridOption: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      {/* Top section: description + hybrid card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left: description */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-4">
            Option Hybride - Success Fee
          </h2>
          <p className="text-sm text-[#666666] leading-relaxed max-w-lg">
            Pour les promoteurs qui hésitent sur le plan Vérifié, une alternative hybride est proposée.
            Le promoteur paie moins à l'entrée mais First Immo est aligné sur son succès.
          </p>

          {/* Hybrid card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-white rounded-2xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_12px_-4px_rgba(0,0,0,0.08)] max-w-md"
          >
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-[#171717]" />
            </div>
            <h3 className="text-base font-extrabold uppercase tracking-wide text-[#171717] mb-3">
              VÉRIFIÉ HYBRIDE
            </h3>
            <p className="text-lg font-bold text-[#171717] mb-3">
              1 800€ / an + 150€ par lead qualifié A livré
            </p>
            <p className="text-xs text-[#888888] leading-relaxed">
              Même fonctionnalités que le plan Vérifié. Le coût variable est plafonné à 3 000€/an maximum.
            </p>
          </motion.div>
        </div>

        {/* Right: Economic simulation */}
        <div>
          <h3 className="text-xl font-bold text-[#171717] mb-6">
            Simulation économique pour le promoteur
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Vérifié Hybride simulation */}
            <div className="bg-white rounded-2xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_-2px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#3B98F5]" />
                <span className="text-sm font-bold text-[#3B98F5] uppercase tracking-wide">Vérifié Hybride</span>
              </div>
              <p className="text-xs font-semibold text-[#171717] mb-3">Coût total annuel Hybride :</p>
              <div className="space-y-2.5">
                {[
                  { leads: '3 leads/mois', calc: '1 800 + 5 400 = 7 200€' },
                  { leads: '5 leads/mois', calc: '1 800 + 9 000 = plafond 4 800€' },
                  { leads: '10 leads/mois', calc: 'Plafonné à 4 800€' },
                  { leads: '0 lead A', calc: '1 800€ seulement' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#3B98F5] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#171717]">{item.leads}</p>
                      <p className="text-[11px] text-[#888]">{item.calc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vérifié Standard comparison */}
            <div className="bg-white rounded-2xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_-2px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-[#FF4B26]" />
                <span className="text-sm font-bold text-[#FF4B26] uppercase tracking-wide">Vérifié Standard</span>
              </div>
              <p className="text-xs font-semibold text-[#171717] mb-3">Vérifié Standard (5 000€)</p>
              <div className="space-y-2.5">
                {[
                  'Plus cher si bons résultats',
                  'Avantageux',
                  'Très avantageux',
                  'Risque minimal',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#FF4B26] mt-0.5 flex-shrink-0" />
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

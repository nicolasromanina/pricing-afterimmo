import React from 'react';
import { motion } from 'framer-motion';
import { Clock, UserCheck, Megaphone, UserCog, FileBarChart } from 'lucide-react';

/**
 * MonthlyRetainers — "Retainers mensuels" section.
 * Monthly recurring services to outsource operations.
 */

interface Retainer {
  icon: React.ReactNode;
  name: string;
  price: string;
  unit: string;
  description: string;
}

const retainers: Retainer[] = [
  {
    icon: <Clock className="w-5 h-5 text-[#FF4B26]" />,
    name: 'CADENCE MANAGER',
    price: '300€',
    unit: '/mois',
    description: 'Relances avant deadline, vérif qualité updates',
  },
  {
    icon: <UserCheck className="w-5 h-5 text-[#FF4B26]" />,
    name: 'LEAD NURTURING',
    price: '250€',
    unit: '/mois',
    description: 'Relances leads B/C, templates WhatsApp, SLA 48h',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-[#FF4B26]" />,
    name: 'ADS MANAGEMENT',
    price: '500€',
    unit: '/mois',
    description: 'Gestion campagnes Meta/Google (budget séparé)',
  },
  {
    icon: <UserCog className="w-5 h-5 text-[#FF4B26]" />,
    name: 'ACCOUNT MANAGER DÉDIÉ',
    price: '400€',
    unit: '/mois',
    description: 'Interlocuteur unique, pilotage + recommandations',
  },
  {
    icon: <FileBarChart className="w-5 h-5 text-[#FF4B26]" />,
    name: 'PACK REPORTING EXÉCUTIF',
    price: '200€',
    unit: '/mois',
    description: 'Rapport PDF mensuel complet envoyé à la direction',
  },
];

const MonthlyRetainers: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#171717] tracking-tight mb-3">
        Retainers mensuels
      </h2>
      <p className="text-sm text-[#888888] text-center mb-12">
        Services mensuels récurrents pour externaliser les opérations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {retainers.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-[0_0_0_1px_rgba(255,75,38,0.12),0_2px_8px_-2px_rgba(255,75,38,0.08)] hover:shadow-[0_0_0_1px_rgba(255,75,38,0.2),0_6px_16px_-4px_rgba(255,75,38,0.12)] transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] flex items-center justify-center mb-4">
              {r.icon}
            </div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#171717] mb-3 min-h-[32px]">
              {r.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl font-extrabold text-[#171717] tabular-nums">{r.price}</span>
              <span className="text-sm text-[#999]">{r.unit}</span>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MonthlyRetainers;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, X, Smartphone, FileText, ShieldCheck, Heart, Building2 } from 'lucide-react';
import { Currency, formatPrice } from '@/lib/currency';
import StarterIconPricing from '@/assets/starter-icon-pricing.png';
import PublieIconPricing from '@/assets/publie-icon-pricing.png';
import VerifieIconPricing from '@/assets/verifie-icon-pricing.png';
import PremiumIconPricing from '@/assets/premium-icon-pring.png';
import EntrepriseIconPricing from '@/assets/entreprise-icon-pricing.png';
/**
 * ComparisonTable — Detailed feature comparison across all 5 tiers.
 * Collapsible category sections with a grid layout.
 */

type CellValue = string | boolean | { checked: boolean; label?: string };

interface ComparisonCategory {
  name: string;
  features: {
    name: string;
    values: CellValue[];
  }[];
}

const plans = [
  { name: 'STARTER', icon: <img src={StarterIconPricing} alt="Starter" className="" />, cta: 'Commencer', ctaBg: 'bg-[#171717]' },
  { name: 'PUBLIÉ', icon: <img src={PublieIconPricing} alt="Publié" className="" />, cta: 'Choisir Publié', ctaBg: 'bg-[#171717]' },
  { name: 'VÉRIFIÉ', icon: <img src={VerifieIconPricing} alt="Vérifié" className="" />, cta: 'Choisir Vérifié', ctaBg: 'bg-[#171717]' },
  { name: 'PREMIUM', icon: <img src={PremiumIconPricing} alt="Premium" className="" />, cta: 'Choisir Premium', ctaBg: 'bg-[#FF4B26]' },
  { name: 'ENTERPRISE', icon: <img src={EntrepriseIconPricing} alt="Enterprise" className="" />, cta: 'Nous contacter', ctaBg: 'bg-[#171717]' },
];

/** Base EUR prices for bottom row */
const basePrices = [
  { eurPrice: 0, icon: <img src={StarterIconPricing} alt="Starter" className="" />, name: 'STARTER' },
  { eurPrice: 900, icon: <img src={PublieIconPricing} alt="Publié" className="" />, name: 'PUBLIÉ' },
  { eurPrice: 3500, icon: <img src={VerifieIconPricing} alt="Vérifié" className="" />, name: 'VÉRIFIÉ' },
  { eurPrice: 6000, icon: <img src={PremiumIconPricing} alt="Premium" className="" />, name: 'PREMIUM' },
  { eurPrice: null, icon: <img src={EntrepriseIconPricing} alt="Enterprise" className="" />, name: 'ENTERPRISE' },
];

const categories: ComparisonCategory[] = [
  {
    name: 'Projets & Pages',
    features: [
      { name: 'Projets actifs simultanés', values: ['1', '1', '2', '3', 'Illimité'] },
      { name: 'Page projet complète', values: ['Standard', { checked: true }, 'Optimisée', { checked: true, label: 'Managée' }, { checked: true }] },
      { name: 'Médias (photos, rendus)', values: ['5 max', '15 max', '30 max', 'Illimité', 'Illimité'] },
      { name: 'Vidéos projet', values: [false, '1 vidéo', '2 Vidéos', 'Illimité', 'Illimité'] },
      { name: 'Journal des changements', values: [false, { checked: true }, 'Complet', { checked: true, label: 'Managé' }, { checked: true }] },
    ],
  },
  {
    name: 'Conformité & Vérification',
    features: [
      { name: 'KYC / Documents société', values: ['Light', 'Complet', 'Complet + Audit', { checked: true, label: 'Managée' }, { checked: true, label: 'Managée' }] },
      { name: 'Badge Vérifié Plateforme', values: [false, false, { checked: true }, { checked: true }, { checked: true }] },
      { name: 'Score Transparence /100 public', values: [false, false, { checked: true }, { checked: true, label: '+Coaching' }, { checked: true }] },
      { name: 'Checklist conformité', values: ['Basique', { checked: true }, { checked: true }, { checked: true, label: 'Managé' }, { checked: true }] },
      { name: 'Preuve capacité financière', values: [false, { checked: true }, { checked: true }, { checked: true }, { checked: true }] },
    ],
  },
  {
    name: 'Updates & Transparence',
    features: [
      { name: 'Updates format imposé', values: [false, { checked: true }, { checked: true, label: 'Illimité' }, { checked: true, label: 'Managé (8/mois)' }, { checked: true, label: 'Illimité' }] },
      { name: 'Rappels automatiques', values: [false, false, { checked: true }, { checked: true }, { checked: true }] },
      { name: 'Déclaration retard justifié', values: [false, false, { checked: true }, { checked: true, label: 'Managé' }, { checked: true }] },
      { name: 'Déclaration risques + mitigation', values: [false, false, { checked: true }, { checked: true, label: 'Managé' }, { checked: true }] },
      { name: 'Timeline jalons complète', values: [false, false, { checked: true }, { checked: true }, { checked: true }] },
    ],
  },
  {
    name: 'Doc Vault',
    features: [
      { name: 'Upload documents', values: ['3 docs', '20 docs', 'Illimité', 'Illimité', { checked: true, label: 'Illimité' }] },
      { name: 'Catégorisation par types', values: [false, { checked: true }, { checked: true, label: 'Managé' }, { checked: true, label: 'Complet' }, { checked: true }] },
      { name: 'Versioning documents', values: [false, 'Basique', 'Complet', { checked: true, label: 'Complet' }, { checked: true }] },
      { name: 'Data-room privée partageable', values: [false, false, { checked: true }, { checked: true }, { checked: true, label: 'Multiple' }] },
      { name: 'Statut fourni/manquant/expiré', values: [false, { checked: true }, { checked: true, label: '+ Alertes' }, { checked: true, label: '+ Alertes' }, { checked: true }] },
    ],
  },
  {
    name: 'Leads & Conversion',
    features: [
      { name: 'Formulaire lead', values: ['Basique', 'Standard', 'Qualifiant', 'Optimisé (CRO)', 'Consolidé'] },
      { name: 'Réception leads', values: ['Email', 'Email + WA', 'Tous canaux', 'Tous canaux', 'Dashboard'] },
      { name: 'Scoring leads A/B/C', values: [false, false, { checked: true }, { checked: true }, { checked: true }] },
      { name: 'Pipeline lead complet', values: [false, false, { checked: true }, { checked: true }, { checked: true }] },
      { name: 'Relance automatique leads', values: [false, false, { checked: true }, { checked: true, label: '+ SLA' }, { checked: true, label: '+ SLA' }] },
      { name: 'Export leads CSV', values: [false, false, { checked: true }, { checked: true }, { checked: true }] },
      { name: 'Templates WhatsApp diaspora', values: [false, false, { checked: true }, { checked: true, label: 'Perso' }, { checked: true, label: 'Custom' }] },
      { name: 'Prise de RDV calendrier', values: [false, false, { checked: true }, { checked: true }, { checked: true }] },
    ],
  },
  {
    name: 'Score & Réputation',
    features: [
      { name: 'Badges de confiance', values: [false, false, { checked: true }, { checked: true, label: 'Managé' }, { checked: true, label: 'Managé' }] },
      { name: 'Trafic prioritaire / ranking', values: [false, false, { checked: true }, 'Tous canaux', { checked: true }] },
      { name: 'Homepage / Top Verified', values: [false, false, 'Tous canaux', 'Tous canaux', { checked: true }] },
      { name: 'Appeal process', values: [false, false, { checked: true }, { checked: true, label: 'Managé' }, { checked: true, label: 'Managé' }] },
    ],
  },
  {
    name: 'Reporting & Support',
    features: [
      { name: 'Reporting mensuel', values: [false, false, { checked: true }, 'Managé', 'Exécutif'] },
      { name: 'Point pilotage visio', values: [false, false, false, { checked: true, label: 'Mensuel' }, { checked: true, label: 'Régulier' }] },
      { name: 'Support', values: ['Email 72h', 'Email 48h', 'Prioritaire 24h', 'Dédié 12h', 'SLA contractuel'] },
    ],
  },
  {
    name: 'Équipe & Accès',
    features: [
      { name: 'Utilisateurs promoteur', values: ['1', '2', '3', '3', '3 docs'] },
      { name: 'Assignation membres', values: [false, 'Basique', { checked: true, label: 'Par projet' }, { checked: true }, { checked: true, label: 'Avancé' }] },
      { name: 'Multi-projets', values: [false, false, 'Option', { checked: true, label: '3 inclus' }, { checked: true, label: 'Illimité' }] },
      { name: 'API / Webhooks / CRM', values: [false, false, false, 'Option', { checked: true }] },
    ],
  },
];

interface ComparisonTableProps {
  currency: Currency;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ currency }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((c) => [c.name, true]))
  );

  const toggle = (name: string) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#171717] tracking-tight mb-16">
        Comparer les plans
      </h2>

      {/* Plans header — sticky on desktop */}
      <div className="hidden lg:grid grid-cols-6 gap-4 mb-8 sticky top-0 bg-[#fafafa] z-10 py-4">
        <div className="flex items-end">
          <span className="text-lg font-bold text-[#171717]">Fonctionnalités</span>
        </div>
        {plans.map((p) => (
          <div key={p.name} className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
              {p.icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-wide text-[#171717]">{p.name}</span>
            <button className={`${p.ctaBg} text-white text-xs font-semibold px-4 py-2 rounded-lg w-full max-w-[140px] hover:opacity-90 transition-opacity`}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.name} className="mb-6">
          <button
            onClick={() => toggle(cat.name)}
            className="flex items-center gap-2 mb-4 group"
          >
            <span className="text-base font-bold text-[#171717]">{cat.name}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#999] transition-transform duration-200 ${
                openSections[cat.name] ? 'rotate-0' : '-rotate-90'
              }`}
            />
          </button>

          <AnimatePresence>
            {openSections[cat.name] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                {/* Desktop grid */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="bg-white rounded-2xl p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] space-y-5">
                      {cat.features.map((f, i) => (
                        <p key={i} className="text-sm font-medium text-[#171717] leading-snug min-h-[24px] flex items-center">
                          {f.name}
                        </p>
                      ))}
                    </div>
                    {[0, 1, 2, 3, 4].map((colIdx) => (
                      <div
                        key={colIdx}
                        className="bg-[#F0F7FF] rounded-2xl p-4 space-y-5 flex flex-col items-center"
                      >
                        {cat.features.map((f, i) => (
                          <div key={i} className="min-h-[24px] flex items-center justify-center">
                            <CellRenderer value={f.values[colIdx]} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile: cards per feature */}
                <div className="lg:hidden space-y-4">
                  {cat.features.map((f, fi) => (
                    <div key={fi} className="bg-white rounded-xl p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                      <p className="text-sm font-semibold text-[#171717] mb-3">{f.name}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {plans.map((p, pi) => (
                          <div key={pi} className="bg-[#F0F7FF] rounded-lg p-2 text-center flex flex-col items-center gap-1">
                            <p className="text-[10px] font-bold text-[#999] uppercase mb-1">{p.name}</p>
                            <CellRenderer value={f.values[pi]} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Bottom price row */}
      <div className="hidden lg:grid grid-cols-5 gap-4 mt-12 max-w-[calc(100%*5/6)] ml-auto">
        {basePrices.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] flex items-center justify-center">{p.icon}</div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wide text-[#171717]">{p.name}</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-2xl font-extrabold text-[#171717] tabular-nums">
                {p.eurPrice === null ? 'SUR DEVIS' : formatPrice(p.eurPrice, currency, '')}
              </span>
              {p.eurPrice !== null && <span className="text-sm text-[#999]">/an</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/** Renders a single cell value with guaranteed icon sizes */
const CellRenderer: React.FC<{ value: CellValue }> = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <div className="w-5 h-5 min-w-[20px] min-h-[20px] rounded-md bg-[#3B98F5] flex items-center justify-center shrink-0">
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </div>
    ) : (
      <div className="w-5 h-5 min-w-[20px] min-h-[20px] rounded-md bg-[#FF4B26] flex items-center justify-center shrink-0">
        <X className="w-3 h-3 text-white" strokeWidth={3} />
      </div>
    );
  }
  if (typeof value === 'string') {
    return <span className="text-xs text-[#555] font-medium text-center">{value}</span>;
  }
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className={`w-5 h-5 min-w-[20px] min-h-[20px] rounded-md ${value.checked ? 'bg-[#3B98F5]' : 'bg-[#FF4B26]'} flex items-center justify-center shrink-0`}>
        {value.checked ? (
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        ) : (
          <X className="w-3 h-3 text-white" strokeWidth={3} />
        )}
      </div>
      {value.label && <span className="text-[10px] text-[#555] font-medium text-center">{value.label}</span>}
    </div>
  );
};

export default ComparisonTable;

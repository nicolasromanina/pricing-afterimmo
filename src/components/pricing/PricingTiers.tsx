import React from 'react';
import PricingCard, { PricingTierData } from './PricingCard';
import { Smartphone, FileText, ShieldCheck, Heart, Building2 } from 'lucide-react';
import { Currency, formatPrice, getCurrencySymbol } from '@/lib/currency';

/**
 * PricingTiers — Grid of the 5 main pricing cards.
 * Prices dynamically converted based on selected currency.
 */

interface PricingTiersProps {
  currency: Currency;
  projectCount: number;
}

/** Base prices in EUR */
const tierBaseData = [
  {
    icon: <Smartphone className="w-5 h-5 text-[#171717]" strokeWidth={2} />,
    name: 'STARTER',
    subtitle: 'Sans onboarding fee',
    description: 'Entrée découverte pour les très petits opérateurs et nouveaux entrants.',
    eurPrice: 0,
    cta: 'Commencer',
    ctaVariant: 'black' as const,
    features: [
      { text: '1 projet actif', included: true },
      { text: 'Page projet standard', included: true },
      { text: '5 médias max (Photos et rendus)', included: true },
      { text: '3 documents max', included: true },
      { text: 'Formulaire lead basique', included: true },
      { text: 'Dashboard leads simple', included: true },
      { text: 'KYC light (email + ID)', included: true },
      { text: 'Support email (SLA 72h)', included: true },
      { text: 'Score Transparence public', included: false },
      { text: 'Badge Vérifié', included: false },
      { text: 'Scoring leads A/B/C', included: false },
    ],
  },
  {
    icon: <FileText className="w-5 h-5 text-[#171717]" strokeWidth={2} />,
    name: 'PUBLIÉ',
    subtitle: 'Onboarding bundlé (inclus)',
    description: 'Base structurée pour construire votre historique de transparence.',
    eurPrice: 900,
    cta: 'Choisir Publié',
    ctaVariant: 'black' as const,
    features: [
      { text: '1 projet actif', included: true },
      { text: 'Page projet complète', included: true },
      { text: '15 médias max + 1 vidéo', included: true },
      { text: '20 documents max (Catégorisation incluse)', included: true },
      { text: 'Formulaire lead standard', included: true },
      { text: 'Onboarding guidé 7 jours', included: true },
      { text: 'KYC complet', included: true },
      { text: 'Updates format imposé', included: true },
      { text: '2 utilisateurs', included: true },
      { text: 'Support email (SLA 48h)', included: true },
      { text: 'Badge Vérifié', included: false },
      { text: 'Scoring leads A/B/C', included: false },
    ],
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#171717]" strokeWidth={2} />,
    name: 'VÉRIFIÉ',
    subtitle: '+ 600€ onboarding one-shot',
    description: "L'offre principale. Badge Vérifié, leads qualifiés A/B/C et pipeline complet.",
    eurPrice: 3500,
    cta: 'Choisir Vérifié',
    ctaVariant: 'black' as const,
    recommended: true,
    features: [
      { text: '2 projets actifs', included: true },
      { text: 'Médias & vidéos illimités', included: true },
      { text: 'Badge Vérifié Plateforme (Selon Charte)', included: true },
      { text: 'Score Transparence /100 public', included: true },
      { text: 'Scoring leads A/B/C', included: true },
      { text: 'Pipeline lead complet', included: true },
      { text: 'Doc Vault illimité + Data-room', included: true },
      { text: 'Relance auto leads + SLA', included: true },
      { text: 'Trafic prioritaire / ranking', included: true },
      { text: 'Export leads CSV', included: true },
      { text: '3 utilisateurs', included: true },
      { text: 'Support prioritaire (SLA 24h)', included: true },
    ],
  },
  {
    icon: <Heart className="w-5 h-5 text-[#FF4B26]" strokeWidth={2} />,
    name: 'PREMIUM',
    subtitle: '+ 1 500€ onboarding one-shot',
    description: 'Service managé pages, cadence et pilotage mensuel par First Immo.',
    eurPrice: 6000,
    cta: 'Choisir Premium',
    ctaVariant: 'red' as const,
    features: [
      { text: '3 projets inclus', included: true },
      { text: 'Mise en forme premium des pages (Copy + structure managée)', included: true },
      { text: 'Tout le plan Vérifié inclus', included: true },
      { text: "Jusqu'à 8 updates accompagnées/mois", included: true },
      { text: 'Coaching score + conformité', included: true },
      { text: 'Spotlight newsletter (1/trimestre)', included: true },
      { text: 'Point pilotage mensuel (visio)', included: true },
      { text: 'Reporting mensuel avancé', included: true },
      { text: 'Support dédié (SLA 12h)', included: true },
      { text: 'Formation équipe commerciale (1 session incluse)', included: true },
    ],
  },
  {
    icon: <Building2 className="w-5 h-5 text-[#171717]" strokeWidth={2} />,
    name: 'ENTERPRISE',
    subtitle: 'Onboarding sur devis',
    description: 'Groupes multi-projets, équipes avancées et intégrations sur mesure.',
    eurPrice: null, // Sur devis
    cta: 'Nous contacter',
    ctaVariant: 'black' as const,
    features: [
      { text: 'Projets illimités', included: true },
      { text: 'Multi-équipes / multi-rôles', included: true },
      { text: 'Workflow validation interne', included: true },
      { text: 'API / Webhooks / CRM', included: true },
      { text: 'Déploiement multi-pays', included: true },
      { text: 'Dashboard exécutif consolidé', included: true },
      { text: 'Référent de compte dédié', included: true },
      { text: 'SLA contractuel sur mesure', included: true },
      { text: 'SSO / authentification entreprise (Sur devis)', included: true },
      { text: 'Utilisateurs illimités', included: true },
    ],
  },
];

const PricingTiers: React.FC<PricingTiersProps> = ({ currency, projectCount }) => {
  const symbol = getCurrencySymbol(currency);

  const tiers: PricingTierData[] = tierBaseData.map((t) => {
    let price: string;
    let priceUnit: string;
    if (t.eurPrice === null) {
      price = 'SUR DEVIS';
      priceUnit = '';
    } else if (t.eurPrice === 0) {
      price = `0${symbol}`;
      priceUnit = '/an';
    } else {
      price = formatPrice(t.eurPrice * projectCount, currency, '');
      priceUnit = projectCount > 1 ? `/an (${projectCount} projets)` : '/an';
    }

    return {
      icon: t.icon,
      name: t.name,
      subtitle: t.subtitle,
      description: t.description,
      price,
      priceUnit,
      cta: t.cta,
      ctaVariant: t.ctaVariant,
      features: t.features,
      recommended: t.recommended,
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* First row: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {tiers.slice(0, 3).map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>
      {/* Second row: 2 cards + info section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.slice(3, 5).map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} index={i + 3} />
        ))}
        {/* Info cards */}
        <div className="flex flex-col gap-4">
          <InfoCard
            icon={<ShieldCheck className="w-5 h-5 text-[#FF4B26]" />}
            title="Confiance visible"
            description="Score /100, badges, historique d'avancement, preuves documentaires."
          />
          <InfoCard
            icon={<span className="text-[#3B98F5] text-lg">👤</span>}
            title="Leads qualifiés"
            description="Des acheteurs avec budget, délai, type de bien et intention réelle."
          />
          <InfoCard
            icon={<FileText className="w-5 h-5 text-[#3B98F5]" />}
            title="Distribution méritocratique"
            description="Le ranking est lié à la discipline, pas au budget pub."
          />
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white rounded-2xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_6px_-2px_rgba(0,0,0,0.05)] text-center flex flex-col items-center gap-2">
    <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] flex items-center justify-center">{icon}</div>
    <h4 className="text-sm font-bold text-[#171717]">{title}</h4>
    <p className="text-xs text-[#888888] leading-relaxed">{description}</p>
  </div>
);

export default PricingTiers;

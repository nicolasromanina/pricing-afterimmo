import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, FileCheck, Database, Mail, RotateCcw, MessageCircle, FileEdit, Users } from 'lucide-react';
import { Currency } from '@/lib/currency';

import f1Pricing from '@/assets/f1-pricing.png';
import f2Pricing from '@/assets/f2-pricing.png';
import f3Pricing from '@/assets/f3-pricing.png';
import f4Pricing from '@/assets/f4-pricing.png';
import f5Pricing from '@/assets/f5-pricing.png';
import f6Pricing from '@/assets/f6-pricing.png';
import f7Pricing from '@/assets/f7-pricing.png';
import f8Pricing from '@/assets/f8-pricing.png';
/**
 * AddOnFeatures — "Fonctionnalités" section showing add-on features.
 * Currency prop accepted for future price display.
 */

interface AddOn {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  price: string;
}

const addOns: AddOn[] = [
  { icon: <img src={f1Pricing} alt="Projet supplémentaire (Publié)" className="" />, iconBg: 'bg-[#E8F4FD]', title: 'Projet supplémentaire (Publié)', description: '1 projet additionnel sans priorité', price: 'À DÉFINIR / AN' },
  { icon: <img src={f2Pricing} alt="Projet supplémentaire (Vérifié)" className="" />, iconBg: 'bg-[#E8F4FD]', title: 'Projet supplémentaire (Vérifié)', description: '+800€ onboarding par projet sup', price: 'À DÉFINIR / AN' },
  { icon: <img src={f3Pricing} alt="Data Room Premium" className="" />, iconBg: 'bg-[#FFF3E0]', title: 'Data Room Premium', description: 'Partage sécurisé docs acheteurs diaspora', price: 'À DÉFINIR / AN' },
  { icon: <img src={f4Pricing} alt="Spotlight Newsletter" className="" />, iconBg: 'bg-[#E8F4FD]', title: 'Spotlight Newsletter', description: 'Mise en avant email à toute la base acheteurs', price: 'À DÉFINIR / ONE-SHOT' },
  { icon: <img src={f5Pricing} alt="Homepage Rotation 30 jours" className="" />, iconBg: 'bg-[#E8F4FD]', title: 'Homepage Rotation 30 jours', description: 'Visibilité max, rotation homepage', price: 'À DÉFINIR / AN' },
  { icon: <img src={f6Pricing} alt="WhatsApp Pack" className="" />, iconBg: 'bg-[#E8F8F0]', title: 'WhatsApp Pack', description: 'Templates relances + gestion objections diaspora', price: 'À DÉFINIR / AN' },
  { icon: <img src={f7Pricing} alt="Pack Lancement Projet" className="" />, iconBg: 'bg-[#E8F4FD]', title: 'Pack Lancement Projet', description: 'Rédaction page projet + optimisation CTA', price: 'À DÉFINIR / AN' },
  { icon: <img src={f8Pricing} alt="Formation Équipe" className="" />, iconBg: 'bg-[#E8F4FD]', title: 'Formation Équipe', description: 'Onboarding équipe commerciale (visio 2h)', price: 'À DÉFINIR / AN' },
];

interface AddOnFeaturesProps {
  currency: Currency;
}

const AddOnFeatures: React.FC<AddOnFeaturesProps> = ({ currency }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#171717] tracking-tight mb-3">
        Fonctionnalités
      </h2>
      <p className="text-sm text-[#888888] text-center mb-12">
        Ajoutables à n'importe quel plan. Facturées séparément.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {addOns.map((addon, i) => (
          <motion.div
            key={addon.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_6px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_6px_16px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className={`w-10 h-10 rounded-xl ${addon.iconBg} flex items-center justify-center mb-4`}>
              {addon.icon}
            </div>
            <h3 className="text-sm font-bold text-[#171717] mb-1">{addon.title}</h3>
            <p className="text-xs text-[#888888] leading-relaxed mb-4">{addon.description}</p>
            <p className="text-xs font-bold text-[#171717] uppercase tracking-wide">{addon.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AddOnFeatures;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';

/**
 * FoundingOffer — "Offre Founding Lancement Côte d'Ivoire" section.
 * Two special founding plans: Founding Publié and Founding Vérifié.
 */

const conditions = [
  'Protocole strict accepté et signé',
  "Cadence d'updates respectée dès le 1er mois",
  'Accord pour retour produit mensuel (15 min)',
  "Acceptation d'être mis en avant comme 'Founding Partner'",
  'Pas de tarif Founding sur renouvellement',
];

const FoundingOffer: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#171717] tracking-tight mb-2">
        Offre Founding
      </h2>
      <h3 className="text-xl md:text-2xl font-bold text-center text-[#171717] tracking-tight mb-4">
        Lancement Côte d'Ivoire
      </h3>
      <p className="text-sm text-[#888888] text-center mb-12 max-w-xl mx-auto leading-relaxed">
        Réservée aux 15 premiers promoteurs sérieux. Non publique.
        Utilisable en salon (ARCHIBAT, SIA Abidjan) ou en approche directe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Founding Publié */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)]"
        >
          <div className="w-10 h-10 rounded-xl bg-[#3B98F5] flex items-center justify-center mb-4">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-[#3B98F5] mb-1">Founding Publié</h4>
          <div className="w-full h-0.5 bg-[#3B98F5] mb-5" />
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-extrabold text-[#171717] tabular-nums">600€</span>
            <span className="text-sm text-[#999]">/an</span>
            <span className="text-sm text-[#999] ml-2">(au lieu de 1 500€)</span>
          </div>
          <p className="text-xs text-[#888] mb-6 leading-relaxed">
            Onboarding light inclus. Valable en 1ère année uniquement.
          </p>
          <p className="text-xs font-bold text-[#171717] mb-3">Conditions pour les deux offres Founding</p>
          <div className="space-y-2.5">
            {conditions.map((c, i) => (
              <div key={i} className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#3B98F5] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-[#555] leading-snug">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Founding Vérifié */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)]"
        >
          <div className="w-10 h-10 rounded-xl bg-[#FF4B26] flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-[#FF4B26] mb-1">Founding Vérifié</h4>
          <div className="w-full h-0.5 bg-[#FF4B26] mb-5" />
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-extrabold text-[#171717] tabular-nums">2 800€</span>
            <span className="text-sm text-[#999]">/an</span>
          </div>
          <p className="text-xs text-[#FF4B26] font-bold mb-1">+800€ setup (au lieu de 5 000€)</p>
          <p className="text-xs text-[#888] mb-6 leading-relaxed">
            Renouvelé à 4 200€ an 2. Accès prioritaire dès J+1.
          </p>
          <p className="text-xs font-bold text-[#171717] mb-3">Conditions pour les deux offres Founding</p>
          <div className="space-y-2.5">
            {conditions.map((c, i) => (
              <div key={i} className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#FF4B26] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-[#555] leading-snug">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundingOffer;

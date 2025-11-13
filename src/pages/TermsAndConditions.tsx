import { FileText, ShieldCheck, Lock, Globe, Scale, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Conditions Générales - ChineLogistique"
        description="Consultez les conditions générales d'utilisation et de services de ChineLogistique. Transparence, conformité et responsabilités." 
        keywords="conditions générales, termes et conditions, chinelogistique, politique d'utilisation"
        canonical="https://chinelogistique.com/terms-and-conditions"
      />
      <Header />

      <section className="relative bg-red-600 text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1505839673365-e3971f8d9184?q=80&w=2100)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 text-sm font-medium">
              <FileText size={16} className="text-white" />
              <span>Conditions Générales</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Termes & Conditions d'Utilisation
            </h1>
            <p className="text-xl text-red-100 mb-6 max-w-3xl">
              Merci de lire attentivement ces conditions générales qui régissent l'utilisation de notre site web et de nos services logistiques internationaux.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-red-100">
              <span className="font-medium">Dernière mise à jour : 05 novembre 2025</span>
              <span className="hidden md:inline">•</span>
              <span className="font-medium">ChineLogistique SARL</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-16 -left-16 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
      </section>

      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                <ShieldCheck className="text-red-600 mb-4" size={36} />
                <h2 className="text-xl font-bold mb-2">Confiance & Transparence</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nous nous engageons à fournir des informations claires sur nos services, tarifs, délais et politiques afin de garantir une relation durable avec nos clients.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                <Lock className="text-red-600 mb-4" size={36} />
                <h2 className="text-xl font-bold mb-2">Protection des Données</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Toutes les données collectées sont traitées conformément aux réglementations en vigueur (RGPD) et utilisées uniquement pour la gestion de vos expéditions.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                <Globe className="text-red-600 mb-4" size={36} />
                <h2 className="text-xl font-bold mb-2">Responsabilité Globale</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nos services couvrent plus de 200 pays avec des standards de qualité uniformes et des partenaires soigneusement sélectionnés.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <article className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <header className="flex items-center gap-3 mb-6">
                <Scale className="text-red-600" size={32} />
                <div>
                  <h3 className="text-2xl font-semibold">1. Acceptation des Conditions</h3>
                  <p className="text-gray-500 text-sm">Application à tous les utilisateurs et clients de ChineLogistique</p>
                </div>
              </header>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  En accédant à notre plateforme ou en utilisant nos services, vous acceptez pleinement ces conditions générales. Si vous n'êtes pas d'accord, veuillez ne pas utiliser nos services.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Les conditions peuvent être mises à jour sans préavis, la version la plus récente prévalant.</li>
                  <li>Les clients professionnels peuvent signer un contrat spécifique complétant ces conditions.</li>
                  <li>Les traductions sont fournies à titre informatif ; la version française fait foi.</li>
                </ul>
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <header className="flex items-center gap-3 mb-6">
                <FileText className="text-red-600" size={32} />
                <div>
                  <h3 className="text-2xl font-semibold">2. Prestations Logistiques</h3>
                  <p className="text-gray-500 text-sm">Description des services fournis par ChineLogistique</p>
                </div>
              </header>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ChineLogistique offre des services de transport international, de dédouanement, de stockage et de conseil logistique. Chaque prestation est encadrée par des procédures internes certifiées.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Les délais sont donnés à titre indicatif et peuvent varier selon les formalités douanières.</li>
                  <li>Les marchandises prohibées ou dangereuses nécessitent une validation préalable.</li>
                  <li>Les assurances complémentaires peuvent être proposées sur demande.</li>
                </ul>
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <header className="flex items-center gap-3 mb-6">
                <Lock className="text-red-600" size={32} />
                <div>
                  <h3 className="text-2xl font-semibold">3. Confidentialité & Données</h3>
                  <p className="text-gray-500 text-sm">Traitement sécurisé et confidentialité</p>
                </div>
              </header>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nous limitons la collecte des données aux informations nécessaires au traitement des expéditions et à la conformité légale. Les données sont conservées pour la durée strictement nécessaire.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conformité totale au RGPD avec délégué à la protection des données.</li>
                  <li>Accès restreint aux données personnelles aux seuls employés habilités.</li>
                  <li>Possibilité de demander l'effacement ou la portabilité de vos données via notre support.</li>
                </ul>
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <header className="flex items-center gap-3 mb-6">
                <Globe className="text-red-600" size={32} />
                <div>
                  <h3 className="text-2xl font-semibold">4. Responsabilités & Limites</h3>
                  <p className="text-gray-500 text-sm">Engagements de ChineLogistique et obligations du client</p>
                </div>
              </header>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ChineLogistique s'engage à mettre en œuvre tous les moyens nécessaires pour le bon acheminement des marchandises. Notre responsabilité est limitée conformément aux conventions internationales en vigueur.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Le client doit fournir des informations exactes sur la nature, le poids et la valeur des marchandises.</li>
                  <li>En cas de litige, les parties privilégient la résolution amiable avant toute action judiciaire.</li>
                  <li>Les tribunaux compétents sont ceux du siège social de ChineLogistique.</li>
                </ul>
              </div>
            </article>
          </section>

          <section className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Contact & Support</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pour toute question relative à ces conditions ou pour exercer vos droits, notre équipe est à votre disposition. Nous répondons généralement sous 24 heures ouvrées.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <Phone className="text-red-600" size={28} />
                <div>
                  <div className="text-sm text-gray-500">Service Client</div>
                  <a href="tel:+85252089745" className="text-lg font-semibold text-gray-900 hover:text-red-600 transition">
                    +85 252 089 745
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <Mail className="text-red-600" size={28} />
                <div>
                  <div className="text-sm text-gray-500">Assistance Email</div>
                  <a href="mailto:info@chinelogistique.com" className="text-lg font-semibold text-gray-900 hover:text-red-600 transition">
                    info@chinelogistique.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

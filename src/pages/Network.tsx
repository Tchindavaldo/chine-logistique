import { Globe, MapPin, Users, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CounterAnimation from '../components/CounterAnimation';

export default function Network() {
  const regions = [
    {
      name: 'Asie-Pacifique',
      countries: 45,
      offices: 28,
      description: 'Notre base principale avec des bureaux dans toutes les grandes villes chinoises',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800',
    },
    {
      name: 'Afrique',
      countries: 32,
      offices: 18,
      description: 'Réseau en expansion rapide couvrant toutes les capitales africaines',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800',
    },
    {
      name: 'Europe',
      countries: 28,
      offices: 15,
      description: 'Partenariats stratégiques avec les principaux ports européens',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800',
    },
    {
      name: 'Amériques',
      countries: 22,
      offices: 12,
      description: 'Couverture complète de l\'Amérique du Nord et du Sud',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800',
    },
  ];

  const keyLocations = [
    { city: 'Guangzhou', country: 'Chine', type: 'Siège Principal' },
    { city: 'Shanghai', country: 'Chine', type: 'Hub Maritime' },
    { city: 'Douala', country: 'Cameroun', type: 'Bureau Régional' },
    { city: 'Lagos', country: 'Nigeria', type: 'Bureau Régional' },
    { city: 'Nairobi', country: 'Kenya', type: 'Bureau Régional' },
    { city: 'Abidjan', country: 'Côte d\'Ivoire', type: 'Bureau Régional' },
    { city: 'Dakar', country: 'Sénégal', type: 'Bureau Régional' },
    { city: 'Accra', country: 'Ghana', type: 'Bureau Régional' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Notre Réseau Mondial - ChineLogistique | Présence Internationale"
        description="Découvrez notre réseau mondial de 207+ pays avec des bureaux en Asie, Afrique, Europe et Amériques. ChineLogistique, votre partenaire logistique international."
        keywords="réseau mondial, présence internationale, bureaux chine, bureaux afrique, logistique internationale, partenaire mondial, réseau logistique"
        canonical="https://chinelogistique.com/network"
      />
      <Header />

      <section className="relative bg-red-600 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-medium">🌍 Présence Mondiale</p>
            </div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Notre Réseau Mondial
            </h1>
            <p className="text-2xl text-red-50 mb-6">Une couverture internationale pour vos expéditions</p>
            <div className="flex items-center gap-2 text-red-100">
              <span className="font-medium">Home</span>
              <span>/</span>
              <span className="text-white font-semibold">Réseau Mondial</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                <Globe size={40} className="text-red-600" />
              </div>
              <CounterAnimation end={207} suffix="+" />
              <div className="text-gray-600 font-medium">Pays Couverts</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                <MapPin size={40} className="text-red-600" />
              </div>
              <CounterAnimation end={73} />
              <div className="text-gray-600 font-medium">Bureaux dans le Monde</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                <Users size={40} className="text-red-600" />
              </div>
              <CounterAnimation end={2500} suffix="+" />
              <div className="text-gray-600 font-medium">Employés</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                <TrendingUp size={40} className="text-red-600" />
              </div>
              <CounterAnimation end={98} suffix="%" />
              <div className="text-gray-600 font-medium">Taux de Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NOTRE COUVERTURE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              4 Continents, 207 Pays
            </h2>
            <p className="text-xl text-gray-600">
              Un réseau mondial pour garantir la livraison de vos marchandises partout dans le monde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-96">
                  {/* Image de fond */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${region.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-bold mb-3">{region.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span className="text-sm">{region.countries} pays</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={18} />
                        <span className="text-sm">{region.offices} bureaux</span>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NOS IMPLANTATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Bureaux Principaux
            </h2>
            <p className="text-xl text-gray-600">
              Nos implantations stratégiques pour un service de proximité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyLocations.map((location, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-600"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={24} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{location.city}</h3>
                    <p className="text-gray-600 text-sm mb-2">{location.country}</p>
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {location.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Expédier avec ChineLogistique ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Profitez de notre réseau mondial pour vos expéditions internationales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Demander un Devis
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

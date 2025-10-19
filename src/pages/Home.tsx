import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CloudRain, Clock, Plane, Ship, Truck, TrainFront, PackageCheck, Zap, MapPin, Search } from 'lucide-react';
import SEO from '../components/SEO';
import OrganizationSchema from '../components/OrganizationSchema';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CounterAnimation from '../components/CounterAnimation';
import { useSiteSettings } from '../hooks/useSiteSettings';

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();
  const { settings } = useSiteSettings();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?tracking=${trackingNumber.trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="ChineLogistique - Transport et Logistique Internationale depuis la Chine"
        description="Service de transport maritime, aérien, routier et ferroviaire depuis la Chine vers l'Afrique et le monde entier. Suivi en temps réel, tarifs compétitifs, livraison sécurisée."
        keywords="transport chine afrique, logistique internationale, fret maritime chine, fret aérien chine, expédition marchandise chine, cargo chine cameroun, transport conteneur, douane chine"
        canonical="https://chinelogistique.com"
      />
      <OrganizationSchema />
      <Header />

      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">WE DELIVER ON TIME</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 px-4">
            Join the millions getting bargain deals on shipping cars, furniture, freight, and more..
          </p>
          <form onSubmit={handleTrack} className="max-w-2xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your tracking number (e.g., CC-10-751490)"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-900 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
              >
                <Search size={20} className="sm:w-6 sm:h-6" />
                Track
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Shield size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Safe Delivery</h3>
              <p className="text-gray-600">Your cargo is fully protected with our comprehensive insurance coverage</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <CloudRain size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Weather Insurance</h3>
              <p className="text-gray-600">Complete protection against weather-related delays and damages</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Clock size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast & On Time Delivery</h3>
              <p className="text-gray-600">Guaranteed delivery within the promised timeframe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Welcome to {settings.company_name}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {settings.company_description || `${settings.company_name} is a global supplier of transport and logistics solutions.`}
              We ensure the safe delivery of packages is our top priority.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <CounterAnimation end={61} suffix="+" />
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={2500} suffix="+" />
              <div className="text-gray-600 text-sm">Professional Workers</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={79} suffix="%" />
              <div className="text-gray-600 text-sm">Areas Covered</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={207} suffix="+" />
              <div className="text-gray-600 text-sm">Countries Covered</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={186} suffix="+" />
              <div className="text-gray-600 text-sm">Corporate Clients</div>
            </div>
            <div className="text-center">
              <CounterAnimation end={450} suffix="+" />
              <div className="text-gray-600 text-sm">Owned Vehicles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive logistics solutions tailored to meet your shipping needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-8 text-white h-64 flex flex-col justify-end">
                <Plane size={48} className="text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Book Your Air Freight</h3>
                <p className="text-gray-200 mb-4">
                  Fast and reliable air cargo services for urgent shipments worldwide
                </p>
                <button className="text-white font-semibold hover:text-red-300 self-start">Learn More →</button>
              </div>
            </div>

            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-8 text-white h-64 flex flex-col justify-end">
                <Ship size={48} className="text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Book Your Sea Freight</h3>
                <p className="text-gray-200 mb-4">
                  Cost-effective ocean freight solutions for large volume shipments
                </p>
                <button className="text-white font-semibold hover:text-red-300 self-start">Learn More →</button>
              </div>
            </div>

            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-8 text-white h-64 flex flex-col justify-end">
                <Truck size={48} className="text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Book Your Road Freight</h3>
                <p className="text-gray-200 mb-4">
                  Flexible ground transportation for regional and cross-border delivery
                </p>
                <button className="text-white font-semibold hover:text-red-300 self-start">Learn More →</button>
              </div>
            </div>

            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-8 text-white h-64 flex flex-col justify-end">
                <TrainFront size={48} className="text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Book Your Train Freight</h3>
                <p className="text-gray-200 mb-4">
                  Efficient rail transport connecting China to Europe and beyond
                </p>
                <button className="text-white font-semibold hover:text-red-300 self-start">Learn More →</button>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <PackageCheck size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Courier Services</h3>
              <p className="text-gray-600 mb-4">
                Express door-to-door delivery for documents and small packages
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Zap size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fast Freight</h3>
              <p className="text-gray-600 mb-4">
                Expedited shipping solutions with guaranteed delivery times
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition duration-300">
              <MapPin size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Track Cargo</h3>
              <p className="text-gray-600 mb-4">
                Real-time tracking system to monitor your shipment 24/7
              </p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More →</button>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-3 text-center">Need Custom Solutions?</h3>
              <p className="text-center mb-4">Contact us for tailored logistics services</p>
              <button className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              POURQUOI NOUS CHOISIR
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Votre Partenaire de Confiance pour la Logistique Internationale
            </h2>
            <p className="text-xl text-gray-600">
              Des années d'expérience et des milliers de clients satisfaits à travers le monde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sécurité Garantie */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Sécurité Garantie</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    Vos marchandises sont protégées par une assurance complète. Nous prenons en charge tous les risques pour votre tranquillité d'esprit.
                  </p>
                </div>
              </div>
            </div>

            {/* Livraison Rapide */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <Clock size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Livraison Rapide</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    Délais respectés à 100%. Notre réseau optimisé garantit des livraisons express dans les meilleurs délais.
                  </p>
                </div>
              </div>
            </div>

            {/* Suivi en Temps Réel */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <MapPin size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Suivi en Temps Réel</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    Suivez votre colis 24h/24 et 7j/7 grâce à notre système de tracking avancé. Soyez toujours informé de la position de vos marchandises.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarifs Compétitifs */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1554224311-beee315c201b?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Tarifs Compétitifs</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    Les meilleurs prix du marché sans compromettre la qualité. Devis gratuits et transparents sans frais cachés.
                  </p>
                </div>
              </div>
            </div>

            {/* Équipe Professionnelle */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Équipe Professionnelle</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    Plus de 2500 experts dévoués à votre service. Formation continue et expertise reconnue dans le secteur.
                  </p>
                </div>
              </div>
            </div>

            {/* Support 24/7 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Support 24/7</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    Notre équipe est disponible jour et nuit pour répondre à toutes vos questions. Assistance multilingue et réactive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              COMMENT ÇA MARCHE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Un Processus Simple et Efficace
            </h2>
            <p className="text-xl text-gray-600">
              Expédiez vos marchandises en 4 étapes simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">Demande de Devis</h3>
                  <p className="text-gray-200 text-center leading-relaxed text-sm">
                    Remplissez notre formulaire en ligne avec les détails de votre expédition
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
                    <PackageCheck size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">Enlèvement</h3>
                  <p className="text-gray-200 text-center leading-relaxed text-sm">
                    Nous récupérons votre marchandise directement chez votre fournisseur en Chine
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Ship size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">Expédition</h3>
                  <p className="text-gray-200 text-center leading-relaxed text-sm">
                    Votre colis est expédié via le mode de transport le plus adapté
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    4
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">Livraison</h3>
                  <p className="text-gray-200 text-center leading-relaxed text-sm">
                    Réception de votre colis à l'adresse indiquée, en parfait état
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg">
              Démarrer Mon Expédition
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Questions Fréquemment Posées
            </h2>
            <p className="text-xl text-gray-600">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-gray-900">
                <span>Quels sont vos délais de livraison depuis la Chine ?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Nos délais varient selon le mode de transport choisi : 3-5 jours pour le fret aérien express, 7-15 jours pour le fret aérien standard, 25-35 jours pour le fret maritime, et 15-25 jours pour le fret ferroviaire. Nous garantissons des délais précis et un suivi en temps réel.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-gray-900">
                <span>Comment calculez-vous les frais de transport ?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Les frais sont calculés en fonction du poids, du volume, de la destination et du mode de transport. Nous offrons des devis gratuits et transparents sans frais cachés. Contactez-nous pour obtenir un devis personnalisé pour votre expédition.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-gray-900">
                <span>Proposez-vous une assurance pour les marchandises ?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Oui, nous proposons une assurance complète pour toutes vos expéditions. Cette assurance couvre les dommages, les pertes et les retards. Vous pouvez avoir l'esprit tranquille sachant que vos marchandises sont protégées tout au long du trajet.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-gray-900">
                <span>Puis-je suivre mon colis en temps réel ?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Absolument ! Notre système de suivi avancé vous permet de localiser votre colis 24h/24 et 7j/7. Vous recevrez un numéro de suivi unique que vous pourrez utiliser sur notre plateforme pour connaître l'état et la position exacte de votre expédition.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-gray-900">
                <span>Gérez-vous les formalités douanières ?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Oui, nous gérons toutes les formalités douanières pour vous. Notre équipe d'experts s'occupe de tous les documents nécessaires et facilite le dédouanement de vos marchandises, vous évitant ainsi les complications administratives.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-gray-900">
                <span>Quels types de marchandises pouvez-vous transporter ?</span>
                <span className="text-red-600 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Nous transportons une large gamme de marchandises : produits électroniques, textiles, pièces automobiles, matériaux de construction, mobilier, et bien plus. Pour les marchandises spéciales (dangereuses, périssables, surdimensionnées), contactez-nous pour des solutions sur mesure.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Trusted by businesses worldwide for reliable shipping solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-200 mb-4">
                "Excellent service! My cargo arrived on time and in perfect condition.
                Highly recommend for anyone shipping from China."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  WJ
                </div>
                <div>
                  <div className="font-bold text-white">William John</div>
                  <div className="text-sm text-gray-300">Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-200 mb-4">
                "Professional team with great customer support. They handled my shipment
                with care and kept me updated throughout the process."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  KH
                </div>
                <div>
                  <div className="font-bold text-white">Kristie Hans</div>
                  <div className="text-sm text-gray-300">Import Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-200 mb-4">
                "Best logistics company I've worked with. Competitive rates and
                reliable delivery times. Will definitely use again."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <div className="font-bold text-white">Mylie Joseph</div>
                  <div className="text-sm text-gray-300">E-commerce Entrepreneur</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Outstanding service from start to finish. Their tracking system
                is excellent and communication is top-notch."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  DM
                </div>
                <div>
                  <div className="font-bold">David Mark</div>
                  <div className="text-sm text-gray-500">Retail Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

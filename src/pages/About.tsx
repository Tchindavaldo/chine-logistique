import { Shield, CloudRain, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="À Propos - ChineLogistique | Solutions de Transport International"
        description="Découvrez ChineLogistique, votre partenaire de confiance pour le transport international depuis la Chine. Plus de 60 ans d'expérience en logistique mondiale."
        keywords="à propos chinelogistique, transport international chine, logistique expérience, partenaire transport, solutions logistiques professionnelles"
        canonical="https://chinelogistique.com/about"
      />
      <Header />

      <section className="relative bg-red-600 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-medium">🏛️ Depuis 1963</p>
            </div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              About Us
            </h1>
            <p className="text-2xl text-red-50 mb-6">Plus de 60 ans d'excellence en logistique internationale</p>
            <div className="flex items-center gap-2 text-red-100">
              <span className="font-medium">Home</span>
              <span>/</span>
              <span className="text-white font-semibold">About Us</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Welcome to ChineLogistique</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ChineLogistique is a global supplier of transport and logistics solutions.
              With over six decades of experience, we have established ourselves as a trusted partner
              for businesses worldwide seeking reliable shipping services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We ensure the safe delivery of packages is our top priority. Our commitment to excellence,
              combined with cutting-edge technology and a dedicated team of professionals, makes us
              the preferred choice for international logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Shield size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Safe Delivery</h3>
              <p className="text-gray-600">Your cargo is fully protected with our comprehensive insurance coverage and security protocols</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <CloudRain size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Weather Insurance</h3>
              <p className="text-gray-600">Complete protection against weather-related delays and damages with our specialized coverage</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <Clock size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast & On Time Delivery</h3>
              <p className="text-gray-600">Guaranteed delivery within the promised timeframe with our efficient logistics network</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Building trust through excellence and dedication to our customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-red-600 mb-2">61</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-red-600 mb-2">2500+</div>
              <div className="text-gray-600 font-medium">Professional Workers</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-red-600 mb-2">79%</div>
              <div className="text-gray-600 font-medium">Areas Covered</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-red-600 mb-2">207+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-red-600 mb-2">186+</div>
              <div className="text-gray-600 font-medium">Corporate Clients</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-red-600 mb-2">450+</div>
              <div className="text-gray-600 font-medium">Owned Vehicles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border-l-4 border-red-600 bg-gray-50">
                <h3 className="text-xl font-bold mb-3">Global Network</h3>
                <p className="text-gray-600">
                  With operations spanning across 207+ countries, we provide seamless international shipping solutions.
                </p>
              </div>
              <div className="p-6 border-l-4 border-red-600 bg-gray-50">
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team of 2500+ professionals brings decades of logistics expertise to every shipment.
                </p>
              </div>
              <div className="p-6 border-l-4 border-red-600 bg-gray-50">
                <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
                <p className="text-gray-600">
                  Real-time tracking and automated systems ensure transparency and efficiency in every delivery.
                </p>
              </div>
              <div className="p-6 border-l-4 border-red-600 bg-gray-50">
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We work closely with clients to meet their unique logistics needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

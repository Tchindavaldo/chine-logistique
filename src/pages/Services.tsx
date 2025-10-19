import { Plane, Ship, PackageCheck, Warehouse, Zap, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-red-600 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-medium">🚚 Solutions Complètes</p>
            </div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Our Services
            </h1>
            <p className="text-2xl text-red-50 mb-6">Des solutions logistiques adaptées à tous vos besoins</p>
            <div className="flex items-center gap-2 text-red-100">
              <span className="font-medium">Home</span>
              <span>/</span>
              <span className="text-white font-semibold">Services</span>
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
            <h2 className="text-4xl font-bold mb-6">Comprehensive Logistics Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer a complete range of shipping and logistics services tailored to meet
              your business needs. From air to sea freight, we ensure your cargo reaches its
              destination safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Ship size={56} className="text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sea Freight</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Shipping goods by sea through cargo ships or freighters. This is a cost-effective
                method for transporting large quantities of goods internationally.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>FCL & LCL shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Door-to-door service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Customs clearance</span>
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
                Get Quote
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Plane size={56} className="text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Air Freight</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Transportation of goods by air via cargo planes. This is the fastest method for
                international shipping, ideal for time-sensitive and high-value cargo.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Express & standard options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Real-time tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Priority handling</span>
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
                Get Quote
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition duration-300">
              <PackageCheck size={56} className="text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Courier Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fast and reliable delivery of packages and documents. Ideal for businesses and
                individuals requiring quick, time-sensitive deliveries domestically and internationally.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Same-day delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Document shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Express pickup</span>
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
                Get Quote
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Warehouse size={56} className="text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Storage Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Secure temporary and long-term storage solutions for inventory, equipment, and
                personal belongings. Climate-controlled facilities with 24/7 security.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Climate control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>24/7 security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Inventory management</span>
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
                Get Quote
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition duration-300">
              <Zap size={56} className="text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Fast Freight</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Expedited delivery services for urgent shipments. Perfect for time-critical cargo
                including perishable goods and high-value items requiring swift transit.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Guaranteed delivery times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Priority customs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
                Get Quote
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition duration-300">
              <MapPin size={56} className="text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Cargo Tracking</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Advanced real-time shipment monitoring system. Track your cargo's location and
                status 24/7, helping you manage your logistics operations efficiently.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Real-time updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>SMS notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Detailed reporting</span>
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
                Track Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Every business has unique logistics needs. Our team is ready to design a
              tailored shipping solution that fits your specific requirements and budget.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

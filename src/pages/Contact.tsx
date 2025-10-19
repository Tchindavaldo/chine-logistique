import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteSettings } from '../hooks/useSiteSettings';

export default function Contact() {
  const { settings } = useSiteSettings();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact - ChineLogistique | Demande de Devis Transport International"
        description="Contactez ChineLogistique pour vos besoins de transport international depuis la Chine. Demandez un devis gratuit pour vos expéditions maritimes, aériennes, routières ou ferroviaires."
        keywords="contact chinelogistique, devis transport chine, contact logistique, demande devis, transport international contact, expédition chine contact"
        canonical="https://chinelogistique.com/contact"
      />
      <Header />

      <section className="relative bg-red-600 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-medium">📞 Nous sommes à votre écoute</p>
            </div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Contact Us
            </h1>
            <p className="text-2xl text-red-50 mb-6">Parlons de votre prochain projet logistique</p>
            <div className="flex items-center gap-2 text-red-100">
              <span className="font-medium">Home</span>
              <span>/</span>
              <span className="text-white font-semibold">Contact Us</span>
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
            <h2 className="text-4xl font-bold mb-6">We Value Your Feedback, Comments & Queries</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              ChineLogistique is a global supplier of transport and logistics solutions.
              Get in touch with us for any inquiries or to request a quote for your shipping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin size={28} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg mb-1">Our Location</div>
                    <div className="text-gray-600">{settings.site_address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Phone size={28} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg mb-1">Phone Number</div>
                    <div className="text-gray-600">{settings.site_phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Mail size={28} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg mb-1">Email Address</div>
                    <div className="text-gray-600">{settings.site_email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Clock size={28} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg mb-1">Business Hours</div>
                    <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</div>
                    <div className="text-gray-600">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Request a Quote / Give Feedback</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Email *</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message *</label>
                  <textarea
                    placeholder="Enter your message or inquiry"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 resize-none"
                    required
                  ></textarea>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Are You A Sender?</h2>
            <p className="text-gray-600 text-lg text-center mb-8 leading-relaxed">
              Whether you're shipping personal items, business cargo, or need regular freight services,
              we're here to help. Our team of logistics experts will work with you to find the best
              shipping solution that meets your timeline and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">1</div>
                <h3 className="font-bold mb-2">Request a Quote</h3>
                <p className="text-gray-600 text-sm">Fill out our contact form with your shipping details</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">2</div>
                <h3 className="font-bold mb-2">Get Custom Solution</h3>
                <p className="text-gray-600 text-sm">Receive a tailored shipping plan and competitive pricing</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">3</div>
                <h3 className="font-bold mb-2">Ship with Confidence</h3>
                <p className="text-gray-600 text-sm">Track your shipment in real-time until delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-red-600 text-white rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Ship Your Cargo?</h2>
            <p className="text-xl mb-8 text-red-100">
              Contact us today and get a free quote for your shipping needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+85252089745" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
                Call Us Now
              </a>
              <a href="mailto:info@chinecargologistique.com" className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition inline-block">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

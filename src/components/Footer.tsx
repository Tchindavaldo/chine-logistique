import { Link } from 'react-router-dom';
import { Ship, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6">Get the latest updates on shipping rates and logistics news</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-600 text-white"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Ship size={32} className="text-red-600" />
                <div className="font-bold text-xl">ChineLogistique</div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for international shipping solutions from China to worldwide destinations.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-red-600 transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-red-600 transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-red-600 transition">Services</Link></li>
                <li><Link to="/contact" className="hover:text-red-600 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-red-600 transition">Air Freight</Link></li>
                <li><Link to="/services" className="hover:text-red-600 transition">Sea Freight</Link></li>
                <li><Link to="/services" className="hover:text-red-600 transition">Road Freight</Link></li>
                <li><Link to="/services" className="hover:text-red-600 transition">Train Freight</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 ChineLogistique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

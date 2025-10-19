import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Ship,
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSiteSettings();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b border-red-500">
          <div className="flex items-center gap-2 md:gap-6 text-xs md:text-sm overflow-hidden">
            <a href={`tel:${settings.site_phone || '+85252089745'}`} className="flex items-center gap-1 md:gap-2 hover:text-red-200 transition whitespace-nowrap">
              <Phone size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">{settings.site_phone || '+85252089745'}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href={`mailto:${settings.site_email || 'info@chinelogistique.com'}`} className="flex items-center gap-1 md:gap-2 hover:text-red-200 transition whitespace-nowrap">
              <Mail size={14} className="md:w-4 md:h-4" />
              <span className="hidden lg:inline">{settings.site_email || 'info@chinelogistique.com'}</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="#" className="hover:text-red-200 transition"><Facebook size={16} className="md:w-[18px] md:h-[18px]" /></a>
            <a href="#" className="hover:text-red-200 transition"><Twitter size={16} className="md:w-[18px] md:h-[18px]" /></a>
            <a href="#" className="hover:text-red-200 transition"><Instagram size={16} className="md:w-[18px] md:h-[18px]" /></a>
            <a href="#" className="hover:text-red-200 transition"><Linkedin size={16} className="md:w-[18px] md:h-[18px]" /></a>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink">
            <Ship size={32} className="text-white md:w-10 md:h-10 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-lg md:text-2xl font-bold truncate">{settings.company_name || 'ChineLogistique'}</h1>
              <p className="text-xs text-red-100 hidden sm:block">{settings.company_description || 'International Shipping Solutions'}</p>
            </div>
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`hover:text-red-200 transition font-medium pb-1 border-b-2 ${
                isActive('/') ? 'border-white' : 'border-transparent'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-red-200 transition font-medium pb-1 border-b-2 ${
                isActive('/about') ? 'border-white' : 'border-transparent'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`hover:text-red-200 transition font-medium pb-1 border-b-2 ${
                isActive('/services') ? 'border-white' : 'border-transparent'
              }`}
            >
              Services
            </Link>
            <Link
              to="/network"
              className={`hover:text-red-200 transition font-medium pb-1 border-b-2 ${
                isActive('/network') ? 'border-white' : 'border-transparent'
              }`}
            >
              Réseau
            </Link>
            <Link
              to="/blog"
              className={`hover:text-red-200 transition font-medium pb-1 border-b-2 ${
                isActive('/blog') ? 'border-white' : 'border-transparent'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`hover:text-red-200 transition font-medium pb-1 border-b-2 ${
                isActive('/contact') ? 'border-white' : 'border-transparent'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/track"
              className={`px-6 py-2 rounded-md font-semibold transition ${
                isActive('/track')
                  ? 'bg-white text-red-600'
                  : 'bg-white/90 text-red-600 hover:bg-white'
              }`}
            >
              Track & Trace
            </Link>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-red-700 border-t border-red-500">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`hover:text-red-200 transition font-medium ${
                isActive('/') ? 'text-white font-bold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-red-200 transition font-medium ${
                isActive('/about') ? 'text-white font-bold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`hover:text-red-200 transition font-medium ${
                isActive('/services') ? 'text-white font-bold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/network"
              className={`hover:text-red-200 transition font-medium ${
                isActive('/network') ? 'text-white font-bold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Réseau Mondial
            </Link>
            <Link
              to="/blog"
              className={`hover:text-red-200 transition font-medium ${
                isActive('/blog') ? 'text-white font-bold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`hover:text-red-200 transition font-medium ${
                isActive('/contact') ? 'text-white font-bold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/track"
              className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Track & Trace
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

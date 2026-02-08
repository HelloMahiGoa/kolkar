import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_NUMBERS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Aarav Cabs
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted taxi service in Goa. We provide reliable, comfortable, and safe transportation with our fleet of 30+ vehicles.
            </p>
            <p className="text-gray-400">
              Serving Goa with excellence since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-gray-400 hover:text-white transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400" />
                <div>
                  <a href={`tel:${PHONE_NUMBERS.primary}`} className="text-gray-400 hover:text-white transition-colors">
                    {PHONE_NUMBERS.primary}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400" />
                <div>
                  <a href={`tel:${PHONE_NUMBERS.secondary}`} className="text-gray-400 hover:text-white transition-colors">
                    {PHONE_NUMBERS.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1" />
                <div className="text-gray-400">
                  Goa, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aarav Cabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

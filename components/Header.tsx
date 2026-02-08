'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_NUMBERS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-heading font-bold text-lg sm:text-xl shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
              Aarav Cabs
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_NUMBERS.primary}`}
              className="ml-4 bg-gradient-to-r from-whatsapp to-[#20ba5a] text-white px-6 py-2.5 rounded-xl flex items-center space-x-2 hover:shadow-lg transition-all transform hover:scale-105 font-semibold"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE_NUMBERS.primary}`}
                className="mt-2 bg-gradient-to-r from-whatsapp to-[#20ba5a] text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg transition-all font-semibold"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

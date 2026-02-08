'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Sparkles, Shield, Clock, MessageCircle } from 'lucide-react';
import { PHONE_NUMBERS } from '@/lib/constants';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">Goa's Most Trusted Taxi Service</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Your Journey,
              <br />
              <span className="bg-gradient-to-r from-accent-300 to-yellow-300 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-2xl">
              Experience premium taxi service in Goa with our fleet of 30+ vehicles. 
              From airport transfers to city tours, we make every ride comfortable and memorable.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield size={18} />
                <span className="text-sm font-medium">Insured & Licensed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock size={18} />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/contact"
                className="group bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
              >
                <span>Book Your Ride</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${PHONE_NUMBERS.primary}`}
                  className="bg-primary-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/91${PHONE_NUMBERS.secondary}?text=${encodeURIComponent("Hi, I'd like to book a taxi with Aarav Cabs. Please help me with the booking.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-whatsapp text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#20ba5a] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-primary-200">Vehicles</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm text-primary-200">Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-primary-200">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative hidden lg:block">
            <HeroImage />
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

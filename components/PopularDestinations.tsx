'use client';

import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  { name: 'Goa Airport', icon: '✈️', popular: true },
  { name: 'Calangute Beach', icon: '🏖️', popular: true },
  { name: 'Baga Beach', icon: '🌊', popular: true },
  { name: 'Anjuna Beach', icon: '🏝️', popular: false },
  { name: 'Fort Aguada', icon: '🏰', popular: false },
  { name: 'Dudhsagar Falls', icon: '🌊', popular: false },
];

export default function PopularDestinations() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl min-w-0">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          Popular Destinations
        </h3>
        <p className="text-gray-600">Quick booking for popular spots in Goa</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {destinations.map((dest, index) => (
          <Link
            key={index}
            href={`/contact?destination=${encodeURIComponent(dest.name)}`}
            className="group bg-white p-3 sm:p-4 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-all hover:shadow-lg transform hover:-translate-y-1 min-w-0"
          >
            <div className="text-3xl mb-2">{dest.icon}</div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900 text-xs sm:text-sm line-clamp-2 break-words">{dest.name}</span>
              <ArrowRight size={16} className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {dest.popular && (
              <span className="inline-block mt-2 text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full">
                Popular
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

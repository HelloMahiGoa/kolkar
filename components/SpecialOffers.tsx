import { Sparkles, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

const offers = [
  {
    title: 'Airport Transfer Special',
    description: 'Flat ₹500 off on airport transfers',
    discount: '15% OFF',
    icon: <Sparkles className="text-yellow-500" size={32} />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Weekend Package',
    description: '8-hour rental at special rates',
    discount: '20% OFF',
    icon: <Calendar className="text-pink-500" size={32} />,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Group Booking',
    description: 'Special rates for 3+ bookings',
    discount: '25% OFF',
    icon: <Tag className="text-green-500" size={32} />,
    color: 'from-green-500 to-emerald-500',
  },
];

export default function SpecialOffers() {
  return (
    <div className="py-16 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-4">
            <Sparkles className="text-yellow-500" size={20} />
            <span className="font-semibold text-gray-900">Special Offers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Limited Time Deals
          </h2>
          <p className="text-xl text-gray-600">
            Don't miss out on these exclusive offers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-primary-500 transition-all transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${offer.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
              <div className="relative">
                <div className="mb-4">{offer.icon}</div>
                <div className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                  {offer.discount}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Claim Offer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';
import { CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Kolkar Taxi',
  description: 'Comprehensive taxi services in Goa including airport transfers, city tours, and more.',
};

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive transportation solutions for all your needs in Goa
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide reliable, comfortable, and affordable transportation solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Airport Transfers</h3>
              <p className="text-gray-700 mb-4">
                Start or end your journey stress-free with our reliable airport transfer service. We monitor flight schedules to ensure timely pickup, even for delayed flights.
              </p>
              <ul className="space-y-2">
                {['Flight monitoring', 'Meet & greet service', 'Luggage assistance', 'Fixed pricing'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="text-primary-600 mr-2" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">City Tours</h3>
              <p className="text-gray-700 mb-4">
                Explore Goa's beautiful beaches, historic churches, spice plantations, and vibrant markets with our knowledgeable drivers who know all the best spots.
              </p>
              <ul className="space-y-2">
                {['Customizable routes', 'Local insights', 'Flexible timing', 'Photo stops'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="text-accent-600 mr-2" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Long Distance</h3>
              <p className="text-gray-700 mb-4">
                Comfortable long-distance travel across Goa and neighboring states. Perfect for inter-city travel, business trips, or family visits.
              </p>
              <ul className="space-y-2">
                {['Comfortable vehicles', 'Rest stops', 'Experienced drivers', 'Competitive rates'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="text-primary-600 mr-2" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Hourly Rentals</h3>
              <p className="text-gray-700 mb-4">
                Need a taxi for a few hours? Our hourly rental packages are perfect for shopping, multiple stops, or business meetings.
              </p>
              <ul className="space-y-2">
                {['Flexible packages', 'Multiple stops', 'Wait time included', 'Best value'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="text-accent-600 mr-2" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Need a Custom Service?
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                We're flexible and can accommodate special requests. Contact us to discuss your specific needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors text-center"
              >
                Contact Us
              </Link>
              <a
                href="tel:7522928277"
                className="bg-whatsapp text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#20ba5a] transition-colors text-center flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

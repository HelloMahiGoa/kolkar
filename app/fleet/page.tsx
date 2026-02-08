import FleetCard from '@/components/FleetCard';
import { FLEET_TYPES } from '@/lib/constants';
import { Car, Users, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet - Aarav Cabs',
  description: 'Explore our fleet of 30+ vehicles including Hatchback, Sedan, and SUV options.',
};

export default function Fleet() {
  const totalVehicles = FLEET_TYPES.reduce((sum, vehicle) => sum + vehicle.count, 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Fleet
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Choose from our diverse range of well-maintained vehicles
          </p>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary-600 mb-2">{totalVehicles}+</div>
              <div className="text-gray-600">Total Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600">Vehicle Types</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Vehicle Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All our vehicles are regularly maintained and equipped with modern amenities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET_TYPES.map((vehicle) => (
              <FleetCard
                key={vehicle.type}
                type={vehicle.type}
                count={vehicle.count}
                seats={vehicle.seats}
                image={vehicle.image}
                features={vehicle.features}
                description={vehicle.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every vehicle in our fleet comes with these standard features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Air Conditioning',
              'Clean & Comfortable',
              'GPS Navigation',
              'Experienced Drivers',
              'Regular Maintenance',
              'Insurance Covered',
              'Child Seats Available',
              'Luggage Space',
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4">
                <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Choose your preferred vehicle and book your ride today!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}

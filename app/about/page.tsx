import Image from 'next/image';
import { CheckCircle, Users, Car, Award } from 'lucide-react';
import { FLEET_TYPES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Kolkar Taxi',
  description: 'Learn about Kolkar Taxi, your trusted taxi service in Goa with 30+ vehicles.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Kolkar Taxi
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted partner for reliable and comfortable transportation in beautiful Goa
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Kolkar Taxi was founded with a simple mission: to provide reliable, comfortable, and affordable taxi services to residents and visitors of Goa. We understand that transportation is a crucial part of your journey, whether you're exploring the beautiful beaches, visiting historic sites, or traveling for business.
                </p>
                <p>
                  With our fleet of 30+ well-maintained vehicles, including Hatchbacks, Sedans, and SUVs, we cater to all your transportation needs. Our experienced drivers know Goa like the back of their hand, ensuring you reach your destination safely and on time.
                </p>
                <p>
                  We take pride in our commitment to customer satisfaction, offering 24/7 service, competitive pricing, and a friendly, professional approach to every ride.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white p-3 rounded-lg">
                    <Car size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">30+ Vehicles</h3>
                    <p className="text-gray-700">A diverse fleet ready to serve you</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 text-white p-3 rounded-lg">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Experienced Team</h3>
                    <p className="text-gray-700">Professional drivers with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white p-3 rounded-lg">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Trusted Service</h3>
                    <p className="text-gray-700">Reliable transportation you can count on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Goa Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Goa-Beach.jpg"
            alt="Beautiful Goa"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Goa? Why Kolkar Taxi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Goa is a paradise for travelers, and we're here to make your journey seamless
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Beautiful Goa</h3>
              <p className="text-gray-700 mb-4">
                Goa is known for its stunning beaches, vibrant culture, historic churches, and delicious cuisine. Whether you're here for a relaxing vacation, adventure sports, or business, Goa has something for everyone.
              </p>
              <ul className="space-y-2">
                {['Beautiful beaches', 'Historic sites', 'Vibrant nightlife', 'Delicious food', 'Adventure activities'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="text-primary-600 mr-2" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <p className="text-gray-700 mb-4">
                At Kolkar Taxi, we understand the unique transportation needs of Goa. Our local expertise, combined with our commitment to service excellence, makes us the perfect choice for your travel needs.
              </p>
              <ul className="space-y-2">
                {['Local expertise', '24/7 availability', 'Competitive prices', 'Well-maintained vehicles', 'Professional drivers'].map((item, index) => (
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

      {/* Fleet Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain a diverse fleet to meet all your transportation needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLEET_TYPES.map((vehicle) => (
              <div key={vehicle.type} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{vehicle.type}</h3>
                <p className="text-primary-600 font-semibold mb-2">{vehicle.count} Vehicles</p>
                <p className="text-gray-700">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Experience the Best?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Book your ride with Kolkar Taxi today and experience reliable, comfortable transportation in Goa.
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

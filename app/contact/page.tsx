import BookingForm from '@/components/BookingForm';
import { PHONE_NUMBERS } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Aarav Cabs',
  description: 'Contact Aarav Cabs for bookings and inquiries. Call us or use our WhatsApp booking form.',
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get in touch with us for bookings, inquiries, or any assistance you need
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <BookingForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  We're here to help! Reach out to us through any of the following ways:
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="text-primary-600 mr-2" size={24} />
                  Phone Numbers
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${PHONE_NUMBERS.primary}`}
                    className="block text-lg text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    {PHONE_NUMBERS.primary}
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBERS.secondary}`}
                    className="block text-lg text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    {PHONE_NUMBERS.secondary}
                  </a>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${PHONE_NUMBERS.primary}`}
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                  >
                    Call Primary
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBERS.secondary}`}
                    className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors text-center"
                  >
                    Call Secondary
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="text-primary-600 mr-2" size={24} />
                  Location
                </h3>
                <p className="text-gray-700">
                  Goa, India
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Serving all areas of Goa including North Goa, South Goa, and surrounding regions.
                </p>
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="text-primary-600 mr-2" size={24} />
                  Operating Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">24/7 Available</p>
                  <p className="text-sm text-gray-600">
                    We're available round the clock to serve you. Book anytime, anywhere in Goa.
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-gradient-to-br from-whatsapp to-[#20ba5a] rounded-xl p-6 text-white">
                <h3 className="text-xl font-heading font-bold mb-2">
                  Quick WhatsApp Booking
                </h3>
                <p className="mb-4 opacity-90">
                  Prefer WhatsApp? Use our booking form above or message us directly!
                </p>
                <a
                  href={`https://wa.me/91${PHONE_NUMBERS.primary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-whatsapp px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
              <p className="text-gray-600 text-lg">Goa, India</p>
              <p className="text-gray-500 text-sm mt-2">
                Map integration can be added here (Google Maps)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

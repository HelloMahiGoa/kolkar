import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import PriceCalculator from '@/components/PriceCalculator';
import PopularDestinations from '@/components/PopularDestinations';
import StatsCounter from '@/components/StatsCounter';
import TrustBadges from '@/components/TrustBadges';
import FleetCard from '@/components/FleetCard';
import ServiceCard from '@/components/ServiceCard';
import SpecialOffers from '@/components/SpecialOffers';
import FAQ from '@/components/FAQ';
import { FLEET_TYPES, SERVICES, TESTIMONIALS } from '@/lib/constants';
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aarav Cabs Goa - Best Taxi Service in Goa | Airport Transfer & City Tours',
  description: 'Aarav Cabs offers reliable taxi services in Goa with 30+ vehicles (Hatchback, Sedan, SUV). Book airport transfers, city tours, and long-distance rides. Available 24/7. Call 7522928277 or 9822164507.',
  keywords: [
    'taxi Goa',
    'taxi service Goa',
    'Goa taxi booking',
    'airport transfer Goa',
    'Dabolim airport taxi',
    'Mopa airport taxi',
    'Goa taxi service',
    'taxi in Goa',
    'Goa cab service',
    'Aarav Cabs',
    'Goa car rental',
    'Goa sightseeing taxi',
    'Goa city tour',
    'Goa taxi rates',
    'best taxi Goa',
  ],
  authors: [{ name: 'Aarav Cabs' }],
  creator: 'Aarav Cabs',
  publisher: 'Aarav Cabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aaravcabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aarav Cabs Goa - Best Taxi Service in Goa | Airport Transfer & City Tours',
    description: 'Reliable taxi service in Goa with 30+ vehicles. Book airport transfers, city tours, and long-distance rides. Available 24/7.',
    url: '/',
    siteName: 'Aarav Cabs',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/goa-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Aarav Cabs - Taxi Service in Goa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aarav Cabs Goa - Best Taxi Service in Goa',
    description: 'Reliable taxi service in Goa with 30+ vehicles. Book airport transfers, city tours, and long-distance rides.',
    images: ['/images/goa-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aarav Cabs',
    image: '/images/goa-hero.jpg',
    '@id': 'https://aaravcabs.com',
    url: 'https://aaravcabs.com',
    telephone: ['+917522928277', '+919822164507'],
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Goa',
      addressRegion: 'Goa',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '15.2993',
      longitude: '74.1240',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '5000',
    },
    sameAs: [
      // Add social media links when available
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Taxi Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Aarav Cabs',
    },
    areaServed: {
      '@type': 'State',
      name: 'Goa',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Taxi Services',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aaravcabs.com',
      },
    ],
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aarav Cabs',
    url: 'https://aaravcabs.com',
    logo: 'https://aaravcabs.com/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+917522928277',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Konkani'],
    },
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div>
        {/* Hero Section */}
        <Hero />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Stats Counter */}
        <section className="py-16 bg-white" aria-label="Company Statistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatsCounter />
          </div>
        </section>

        {/* Quick Booking & Price Calculator */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-label="Book Your Ride">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
              <BookingForm />
              <PriceCalculator />
            </div>
            <PopularDestinations />
          </div>
        </section>

        {/* Special Offers */}
        <SpecialOffers />

        {/* Fleet Overview */}
        <section className="py-20 bg-white" aria-label="Our Fleet">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Fleet
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Choose Your Perfect Ride
              </h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                From compact hatchbacks to spacious SUVs, we have the perfect vehicle for every journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
            <div className="text-center mt-12">
              <Link
                href="/fleet"
                className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                aria-label="View all vehicles in our fleet"
              >
                Explore All Vehicles
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50" aria-label="Our Services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Comprehensive Transportation Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We offer a wide range of services to meet all your travel needs in Goa
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SERVICES.slice(0, 6).map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                aria-label="View all our taxi services"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white" aria-label="Customer Testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Aarav Cabs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <article
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1 min-w-0"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex items-center mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="text-primary-300 mb-4" size={32} aria-hidden="true" />
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic" itemProp="reviewBody">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900 text-lg" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{testimonial.name}</span>
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-label="Frequently Asked Questions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden" aria-label="Book Your Ride">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Experience the Best?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-2xl mx-auto">
              Book your ride today and discover why thousands of customers choose Aarav Cabs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                aria-label="Book your taxi ride now"
              >
                Book Now
              </Link>
              <a
                href="tel:7522928277"
                className="bg-whatsapp text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#20ba5a] transition-all transform hover:scale-105 shadow-2xl"
                aria-label="Call us at 7522928277"
              >
                Call 7522928277
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

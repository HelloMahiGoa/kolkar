import GalleryGrid from '@/components/GalleryGrid';
import { GALLERY_IMAGES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Aarav Cabs',
  description: 'View our fleet of taxis in Goa. Hatchback, Sedan, and SUV vehicles.',
};

export default function Gallery() {
  const galleryImages = GALLERY_IMAGES;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Take a look at our well-maintained fleet of vehicles
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Book your ride today and experience the comfort of our vehicles!
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

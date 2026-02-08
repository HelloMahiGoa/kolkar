'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface GalleryGridProps {
  images: Array<{ src: string; alt: string; category: string }>;
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image.src)}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-white text-sm font-medium">{image.alt}</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 font-medium bg-black/50 px-4 py-2 rounded-lg">Click to view</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-h-[90vh]">
              <Image
                src={selectedImage}
                alt={images.find(img => img.src === selectedImage)?.alt || 'Aarav Cabs Gallery - Taxi vehicle image'}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg inline-block">
                  {images.find(img => img.src === selectedImage)?.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

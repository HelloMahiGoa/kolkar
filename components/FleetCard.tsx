import Image from 'next/image';
import { Users, Car, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface FleetCardProps {
  type: string;
  count: number;
  seats: number;
  image: string;
  features: string[];
  description: string;
}

export default function FleetCard({ type, count, seats, image, features, description }: FleetCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={`${type} taxi in Goa - ${description}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
          {count} Available
        </div>

        {/* Type Label */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg z-10">
          <span className="text-xl font-heading font-bold text-gray-900">{type}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex items-center space-x-2 text-primary-600 mb-5">
          <Users size={20} />
          <span className="font-semibold">{seats} Seats</span>
        </div>

        <div className="border-t border-gray-200 pt-5">
          <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-center">
                <CheckCircle2 className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="mt-6 block w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02]"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

import { MapPin, Plane, Route, Clock, Briefcase, Heart } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  plane: <Plane size={32} />,
  map: <MapPin size={32} />,
  route: <Route size={32} />,
  clock: <Clock size={32} />,
  briefcase: <Briefcase size={32} />,
  heart: <Heart size={32} />,
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
      
      <div className="relative">
        <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg" aria-hidden="true">
          {iconMap[icon] || <MapPin size={32} />}
        </div>
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link
          href="/contact"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-sm group-hover:translate-x-2 transition-transform"
          aria-label={`Book ${title} service`}
        >
          Book Now
          <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

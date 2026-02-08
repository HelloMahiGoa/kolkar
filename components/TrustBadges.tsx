import { Shield, Award, Clock, CheckCircle } from 'lucide-react';

const badges = [
  { icon: Shield, text: 'Fully Insured', color: 'text-blue-600' },
  { icon: Award, text: 'Licensed & Certified', color: 'text-green-600' },
  { icon: Clock, text: '24/7 Available', color: 'text-orange-600' },
  { icon: CheckCircle, text: 'Verified Drivers', color: 'text-purple-600' },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 py-6 sm:py-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-2 sm:space-x-3 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <Icon className={`${badge.color} flex-shrink-0`} size={20} />
            <span className="font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
}

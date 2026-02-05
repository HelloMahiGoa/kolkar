'use client';

import { useEffect, useState } from 'react';
import { Car, Users, Star, Award } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { icon: <Car size={32} />, value: 30, label: 'Vehicles', suffix: '+' },
  { icon: <Users size={32} />, value: 5000, label: 'Happy Customers', suffix: '+' },
  { icon: <Star size={32} />, value: 4.8, label: 'Average Rating', suffix: '/5' },
  { icon: <Award size={32} />, value: 10, label: 'Years Experience', suffix: '+' },
];

export default function StatsCounter() {
  const [counters, setCounters] = useState(stats.map(s => s.value));

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(current, stat.value);
          return newCounters;
        });
      }, duration / steps);
      
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-xl text-white">
              {stat.icon}
            </div>
          </div>
          <div className="text-4xl font-heading font-bold text-gray-900 mb-2">
            {typeof counters[index] === 'number' && counters[index] % 1 !== 0
              ? counters[index].toFixed(1)
              : Math.floor(counters[index])}
            {stat.suffix}
          </div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

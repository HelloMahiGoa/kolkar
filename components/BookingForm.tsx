'use client';

import { useState } from 'react';
import { Send, Phone, Sparkles } from 'lucide-react';
import { PHONE_NUMBERS, FLEET_TYPES } from '@/lib/constants';
import GoogleMapsAutocomplete from './GoogleMapsAutocomplete';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    vehicleType: 'Sedan',
  });

  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [dropLocation, setDropLocation] = useState<Location | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePickupChange = (value: string) => {
    setFormData({ ...formData, pickup: value });
  };

  const handleDropChange = (value: string) => {
    setFormData({ ...formData, drop: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi, I'd like to book a taxi:
Name: ${formData.name}
Phone: ${formData.phone}
Pickup Location: ${formData.pickup}
Drop Location: ${formData.drop}
Date: ${formData.date}
Time: ${formData.time}
Vehicle Type: ${formData.vehicleType}`;

    const whatsappUrl = `https://wa.me/91${PHONE_NUMBERS.primary}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100 relative overflow-hidden min-w-0">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full -ml-24 -mb-24 opacity-50"></div>
      
      <div className="relative">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-xl shadow-lg">
            <Sparkles className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Book Your Ride
            </h2>
            <p className="text-gray-600 text-sm">Quick & Easy Booking</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="Enter your phone"
              />
            </div>
          </div>

          <div>
            <label htmlFor="pickup" className="block text-sm font-semibold text-gray-700 mb-2">
              Pickup Location *
            </label>
            <GoogleMapsAutocomplete
              value={formData.pickup}
              onChange={handlePickupChange}
              placeholder="Enter pickup location"
              onLocationSelect={setPickupLocation}
              allowCurrentLocation={true}
            />
          </div>

          <div>
            <label htmlFor="drop" className="block text-sm font-semibold text-gray-700 mb-2">
              Drop Location *
            </label>
            <GoogleMapsAutocomplete
              value={formData.drop}
              onChange={handleDropChange}
              placeholder="Enter drop location"
              onLocationSelect={setDropLocation}
              allowCurrentLocation={true}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                Time *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Type *
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                required
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white"
              >
                {FLEET_TYPES.map((type) => (
                  <option key={type.type} value={type.type}>
                    {type.type} (₹{type.type === 'Hatchback' ? '30' : type.type === 'Sedan' ? '35' : '45'}/km)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-whatsapp to-[#20ba5a] text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Send via WhatsApp</span>
          </button>

          <div className="text-center pt-4 border-t-2 border-gray-100">
            <p className="text-sm text-gray-600 mb-3 font-medium">Or call us directly:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE_NUMBERS.primary}`}
                className="text-primary-600 hover:text-primary-700 font-bold flex items-center justify-center space-x-2 text-lg"
              >
                <Phone size={18} />
                <span>{PHONE_NUMBERS.primary}</span>
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href={`tel:${PHONE_NUMBERS.secondary}`}
                className="text-primary-600 hover:text-primary-700 font-bold flex items-center justify-center space-x-2 text-lg"
              >
                <Phone size={18} />
                <span>{PHONE_NUMBERS.secondary}</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

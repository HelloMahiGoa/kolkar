'use client';

import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBERS } from '@/lib/constants';

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'd like to book a taxi with Aarav Cabs. Please help me with the booking.`;
    const whatsappUrl = `https://wa.me/91${PHONE_NUMBERS.primary}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-50 bg-whatsapp text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 hover:-translate-y-1 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        1
      </span>
      <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        Chat on WhatsApp
      </div>
    </button>
  );
}

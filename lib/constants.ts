export const PHONE_NUMBERS = {
  primary: '7522928277',
  secondary: '9822164507',
};

export const GOOGLE_MAPS_API_KEY = 'AIzaSyDtg1wZejjQNOxun9rZoBrlxYDHryv0euU';

export const PRICING_PER_KM = {
  Hatchback: 30,
  Sedan: 35,
  SUV: 45,
};

export const AIRPORT_TOLL_CHARGE = 80;

export const GOA_AIRPORTS = [
  'Dabolim',
  'Mopa',
  'Dabolim Airport',
  'Mopa Airport',
  'Goa International Airport',
  'Dabolim International Airport',
  'Mopa International Airport',
];

export const FLEET_TYPES = [
  {
    type: 'Hatchback',
    count: 10,
    seats: 4,
    image: '/images/hatchback.jpg',
    features: ['AC', 'Comfortable Seats', 'Fuel Efficient', 'Perfect for City Rides'],
    description: 'Compact and efficient, perfect for short city trips and solo travelers.',
  },
  {
    type: 'Sedan',
    count: 12,
    seats: 4,
    image: '/images/sedan.jpg',
    features: ['AC', 'Spacious Interior', 'Premium Comfort', 'Ideal for Families'],
    description: 'Comfortable and spacious, ideal for families and airport transfers.',
  },
  {
    type: 'SUV',
    count: 8,
    seats: 6,
    image: '/images/suv.jpg',
    features: ['AC', 'Extra Space', 'Premium Interior', 'Perfect for Groups'],
    description: 'Spacious and luxurious, perfect for groups and long-distance travel.',
  },
];

export const GALLERY_IMAGES = [
  // Hatchback images
  { src: '/images/cars/Maruti-Baleno.jpg', alt: 'Maruti Baleno - Hatchback', category: 'Hatchback' },
  { src: '/images/cars/Maruti-Suzuki-Swift-Dzire.jpg', alt: 'Maruti Swift Dzire - Hatchback', category: 'Hatchback' },
  { src: '/images/cars/Hyundai-i20.jpg', alt: 'Hyundai i20 - Hatchback', category: 'Hatchback' },
  { src: '/images/cars/Tata-Altroz.jpg', alt: 'Tata Altroz - Hatchback', category: 'Hatchback' },
  { src: '/images/cars/tata-tiago.jpg', alt: 'Tata Tiago - Hatchback', category: 'Hatchback' },
  // Sedan images
  { src: '/images/cars/Maruti-Suzuki-Ciaz.jpg', alt: 'Maruti Suzuki Ciaz - Sedan', category: 'Sedan' },
  { src: '/images/cars/hyundai-xcent.jpg', alt: 'Hyundai Xcent - Sedan', category: 'Sedan' },
  { src: '/images/cars/Tata-Tigor.jpg', alt: 'Tata Tigor - Sedan', category: 'Sedan' },
  // SUV images
  { src: '/images/cars/Toyota-Innova.jpg', alt: 'Toyota Innova - SUV', category: 'SUV' },
  { src: '/images/cars/toyota-innova-crysta.jpg', alt: 'Toyota Innova Crysta - SUV', category: 'SUV' },
  { src: '/images/cars/Mahindra-XUV300.jpg', alt: 'Mahindra XUV300 - SUV', category: 'SUV' },
  { src: '/images/cars/Mahindra-Marazzo.jpg', alt: 'Mahindra Marazzo - SUV', category: 'SUV' },
];

// Additional images for various sections
export const ABOUT_IMAGES = {
  goaBeach: '/images/Goa-Beach.jpg',
  taxiService: '/images/about-story.jpg',
  goaLandscape: '/images/goa.jpg',
};

export const SERVICES = [
  {
    title: 'Airport Transfers',
    description: 'Reliable airport pickup and drop services to and from Goa International Airport. Available 24/7.',
    icon: 'plane',
  },
  {
    title: 'City Tours',
    description: 'Explore Goa\'s beautiful beaches, historic sites, and vibrant markets with our guided city tours.',
    icon: 'map',
  },
  {
    title: 'Long Distance Rides',
    description: 'Comfortable long-distance travel across Goa and neighboring states. Safe and reliable.',
    icon: 'route',
  },
  {
    title: 'Hourly Rentals',
    description: 'Flexible hourly rental packages for shopping, sightseeing, or business meetings.',
    icon: 'clock',
  },
  {
    title: 'Corporate Services',
    description: 'Professional transportation for corporate events, meetings, and business travel.',
    icon: 'briefcase',
  },
  {
    title: 'Wedding & Events',
    description: 'Special arrangements for weddings, parties, and special occasions with decorated vehicles.',
    icon: 'heart',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    text: 'Excellent service! The driver was punctual and very professional. Highly recommend Kolkar Taxi for Goa trips.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    text: 'Clean cars, friendly drivers, and great prices. Made our Goa vacation stress-free!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    location: 'Bangalore',
    text: 'Best taxi service in Goa. Always on time and very reliable. Will use again!',
    rating: 5,
  },
];

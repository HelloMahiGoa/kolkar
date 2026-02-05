# Kolkar Taxi Website

A modern, responsive Next.js website for Kolkar Taxi - your trusted taxi service in Goa.

## Features

- 🚗 **Fleet Showcase** - Display of 30+ vehicles (Hatchback, Sedan, SUV)
- 📱 **WhatsApp Integration** - Easy booking via WhatsApp with pre-filled messages
- 📄 **Multiple Pages** - Home, About, Fleet, Services, Contact, Gallery
- 🎨 **Modern Design** - Beautiful UI with Goa-inspired color scheme
- 📱 **Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast & Optimized** - Built with Next.js 14+ for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
kolkar/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── fleet/             # Fleet showcase
│   ├── services/          # Services page
│   ├── contact/           # Contact & booking
│   └── gallery/           # Photo gallery
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── BookingForm.tsx
│   ├── FleetCard.tsx
│   ├── ServiceCard.tsx
│   └── GalleryGrid.tsx
├── lib/
│   └── constants.ts      # Phone numbers, fleet data
└── public/
    └── images/           # Taxi images (add your images here)
```

## Customization

### Phone Numbers
Edit `lib/constants.ts` to update phone numbers:
```typescript
export const PHONE_NUMBERS = {
  primary: '7522928277',
  secondary: '9822164507',
};
```

### Fleet Information
Update fleet details in `lib/constants.ts`:
```typescript
export const FLEET_TYPES = [
  { type: 'Hatchback', count: 10, seats: 4, ... },
  // ...
];
```

### Adding Images
1. Add taxi images to `public/images/` directory
2. Name them according to the fleet types (hatchback.jpg, sedan.jpg, suv.jpg)
3. Update image paths in `lib/constants.ts` if needed

## Technologies Used

- **Next.js 14+** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Contact Information

- Primary: 7522928277
- Secondary: 9822164507
- Location: Goa, India

## License

This project is private and proprietary.

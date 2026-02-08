import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative hidden lg:block h-full min-h-[500px]">
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Image
          src="/images/goa-hero.jpg"
          alt="Aarav Cabs - Professional taxi service in Goa with modern vehicles"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 0vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-transparent"></div>
      </div>
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 bg-accent-400 rounded-2xl p-4 shadow-xl animate-bounce z-10">
        <div className="text-white font-bold text-sm">Best Price</div>
      </div>
      <div className="absolute -bottom-4 -left-4 bg-primary-500 rounded-2xl p-4 shadow-xl animate-pulse z-10">
        <div className="text-white font-bold text-sm">24/7 Service</div>
      </div>
    </div>
  );
}

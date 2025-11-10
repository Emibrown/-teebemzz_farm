import Link from 'next/link';
import Image from 'next/image';
import { HERO_CONTENT } from '@/constants';

export default function Hero() {
  return (
    <section className="bg-green-dark relative">
      <div className="container mx-auto px-6 pt-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              fresh from <br /> farm to table
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              {HERO_CONTENT.description}
            </p>
            <Link
              href={HERO_CONTENT.ctaLink}
              className="inline-block bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-orange-700 transition-colors"
            >
              {HERO_CONTENT.ctaText}
            </Link>
          </div>

          <div className="hidden md:block">
            <Image
              alt="Smiling farmer holding fresh produce in a sunny field"
              className="rounded-2xl w-full h-auto object-cover"
              src={HERO_CONTENT.image}
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-background-light"
        style={{ clipPath: 'ellipse(80% 100% at 50% 100%)' }}
      />
    </section>
  );
}


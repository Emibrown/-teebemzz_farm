import Image from 'next/image';
import { ABOUT_CONTENT, FEATURES } from '@/constants';

export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              alt="Farmer tending to his flock of chickens outdoors"
              className="rounded-xl w-full h-auto object-cover z-10 relative shadow-xl"
              src={ABOUT_CONTENT.image}
              width={600}
              height={600}
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-xl hidden md:block" />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4 text-text-light">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="text-subtle-light mb-6">
              {ABOUT_CONTENT.description}
            </p>

            <div className="space-y-4">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <span className="material-icons-outlined text-primary text-2xl mt-1 mr-3">
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg text-text-light">
                      {feature.title}
                    </h4>
                    <p className="text-subtle-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


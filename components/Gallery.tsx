import Image from 'next/image';
import { GALLERY_ITEMS } from '@/constants';

export default function Gallery() {
  return (
    <section className="py-24" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-text-light">
            A Glimpse of Our Farm
          </h2>
          <p className="text-subtle-light max-w-2xl mx-auto">
            Take a look behind the scenes at GreenHarvest Farms, where quality and care come first.
          </p>
        </div>

        <div className="space-y-16">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {item.order === 'reverse' ? (
                <>
                  <div className="md:order-last flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 text-text-light">
                      {item.title}
                    </h3>
                    <p className="text-subtle-light mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary">
                      <span className="material-icons-outlined mr-2">{item.featureIcon}</span>
                      <span>{item.feature}</span>
                    </div>
                  </div>
                  <div className="md:order-first">
                    <Image
                      alt={item.title}
                      className="h-auto w-full rounded-xl shadow-lg object-cover"
                      src={item.image}
                      width={600}
                      height={400}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 text-text-light">
                      {item.title}
                    </h3>
                    <p className="text-subtle-light mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary">
                      <span className="material-icons-outlined mr-2">{item.featureIcon}</span>
                      <span>{item.feature}</span>
                    </div>
                  </div>
                  <div>
                    <Image
                      alt={item.title}
                      className="h-auto w-full rounded-xl shadow-lg object-cover"
                      src={item.image}
                      width={600}
                      height={400}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import Image from 'next/image';
import { PRODUCTS } from '@/constants';

export default function Products() {
  return (
    <section className="py-24" id="products">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 text-text-light">
              Our Products
            </h2>
            <p className="text-subtle-light max-w-2xl mx-auto">
              From our pastures and ponds to your plate, discover the exceptional quality of
              Teebemzz Farms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg">
                <Image
                  alt={product.name}
                  className="rounded-md w-full h-48 object-cover mb-4"
                  src={product.image}
                  width={400}
                  height={192}
                />
                <h3 className="text-xl font-semibold mb-2 text-text-light">
                  {product.name}
                </h3>
                <p className="text-subtle-light">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


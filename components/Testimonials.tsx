'use client';

import Image from 'next/image';
import { useState } from 'react';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <span className="material-icons-outlined text-primary text-4xl mb-4">
              format_quote
            </span>
            <h2 className="text-4xl font-bold mb-4 text-text-light">
              What Our Customers Say
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-subtle-light italic mb-6">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold text-text-light">
                  {testimonial.author}
                </p>
                <p className="text-sm text-subtle-light">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="flex space-x-2 mt-6">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? 'bg-primary'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 relative mt-10 lg:mt-0">
            <Image
              alt="Happy customer"
              className="rounded-2xl w-full h-auto object-cover relative z-10 shadow-xl"
              src={testimonial.image}
              width={400}
              height={500}
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-dark/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}


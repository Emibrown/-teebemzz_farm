'use client';

import { CONTACT_INFO } from '@/constants';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="py-24 bg-background-light" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-text-light">
            Get in Touch
          </h2>
          <p className="text-subtle-light max-w-2xl mx-auto">
            We&apos;re here to answer any questions you may have. Reach out to us and we&apos;ll respond as
            soon as we can.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-1 bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-text-light">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-subtle-light mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full h-12 px-4 py-3 bg-background-light border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-subtle-light mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full h-12 px-4 py-3 bg-background-light border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-subtle-light mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-background-light border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-text-light">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <span className="material-icons-outlined text-primary text-2xl mt-1 mr-4">
                    location_on
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg text-text-light">
                      Our Address
                    </h4>
                    <p className="text-subtle-light">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="material-icons-outlined text-primary text-2xl mt-1 mr-4">
                    phone
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg text-text-light">
                      Phone
                    </h4>
                    <p className="text-subtle-light">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="material-icons-outlined text-primary text-2xl mt-1 mr-4">
                    email
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg text-text-light">
                      Email
                    </h4>
                    <p className="text-subtle-light">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center text-subtle-light">
              <div className="text-center">
                <span className="material-icons-outlined text-5xl mb-2">map</span>
                <p className="font-semibold">Location Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


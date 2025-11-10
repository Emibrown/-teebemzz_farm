import { BENEFITS } from '@/constants';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white" id="why-choose-us">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-text-light">
            Why Choose Us?
          </h2>
          <p className="text-subtle-light max-w-2xl mx-auto">
            We are dedicated to providing you with the freshest, highest-quality products, straight
            from our farm to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-background-light p-8 rounded-xl"
            >
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="material-icons-outlined text-primary text-4xl">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-light">
                {benefit.title}
              </h3>
              <p className="text-subtle-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


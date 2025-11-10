import { FAQ_ITEMS } from '@/constants';

export default function FAQ() {
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-text-light">
            Frequently Asked Questions
          </h2>
          <p className="text-subtle-light max-w-2xl mx-auto">
            Have questions? We've got answers. Here are some of the most common questions we
            receive.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <details
                key={item.id}
                className="group bg-background-light p-6 rounded-lg"
                open={index === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-text-light">
                    {item.question}
                  </h3>
                  <span className="material-icons-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="mt-4 text-subtle-light">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


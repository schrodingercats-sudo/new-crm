import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed">
          "{quote}"
        </h3>
        <p className="mt-6 text-gray-500">- {author}</p>
      </div>
    </section>
  );
};
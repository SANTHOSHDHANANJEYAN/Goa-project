import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative text-center py-16 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#150e70]">
          Testimonials
        </h2>
        <h3 className="text-sm sm:text-base md:text-lg mb-8 text-[#150e70]">
          View the self-transformation stories of our students
        </h3>

        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/du3cYEhd19o"
            title="Student Testimonial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

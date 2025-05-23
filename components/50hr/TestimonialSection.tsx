import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative text-center py-20 bg-transparent pt-8">
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#150e70]">
        Testimonials
      </h2>
      <h3 className="text-sm md:text-lg mb-8 text-[#150e70]">
        View the self-transformation stories of our students
      </h3>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <iframe
            className="w-full h-full"
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

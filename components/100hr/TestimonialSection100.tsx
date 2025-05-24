import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative text-center py-12 sm:py-20 bg-transparent px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-10 text-[#150e70]">
        Testimonials
      </h2>
      <h3 className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-[#150e70] max-w-xl mx-auto">
        View the self-transformation stories of our students
      </h3>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your actual YouTube video ID
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

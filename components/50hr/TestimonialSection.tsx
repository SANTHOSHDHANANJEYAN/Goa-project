import React from 'react';
const TestimonialSection: React.FC = () => {
  const videos = [
    'https://www.youtube.com/embed/1oxK0cYax9s?si=VdURMf5zk-gvMX9-', // Replace/add more IDs as needed
    'https://www.youtube.com/embed/1oxK0cYax9s?si=VdURMf5zk-gvMX9-',
    'https://www.youtube.com/embed/1oxK0cYax9s?si=VdURMf5zk-gvMX9-',
  ];

  return (
    <section className="relative text-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#150e70]">
        Testimonials
      </h2>
      <h3 className="text-base sm:text-lg md:text-xl mb-10 text-[#150e70] max-w-xl mx-auto">
        View the self-transformation stories of our students
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="aspect-video rounded-xl border-4  overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-full"
              src={video}
              title={`Testimonial Video ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

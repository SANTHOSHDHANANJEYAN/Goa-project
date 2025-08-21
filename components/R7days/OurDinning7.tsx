'use client';

export default function OurDinning7() {
  return (
    <section className="relative text-white py-16 sm:py-20 md:py-24 mb-12 md:mb-20 h-[350px] sm:h-[400px] md:h-[450px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/dinning.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-sm sm:text-base md:text-lg uppercase tracking-wide text-gray-200 mb-2">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Our Dining
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
          At Rishikul Yogshala Goa, food is more than fuel – it’s part of your healing journey.
          Our dining experience follows sattvic principles, offering freshly prepared vegetarian meals
          that nourish the body, calm the mind, and uplift the spirit.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

const InstructorSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Your Instructors</h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6">
        Our experienced team brings decades of collective practice from multiple yoga
        disciplines. They’re dedicated to helping you grow — physically, mentally, and
        spiritually — in a supportive, inclusive environment.
      </p>
      <div className="w-full h-80 relative rounded-xl overflow-hidden shadow">
        <Image
          src="/yoga-instructors.jpg"
          alt="House of Om instructors"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default InstructorSection;
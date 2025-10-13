import React from 'react';
import Image from 'next/image';

const ActivitiesSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-8 lg:px-16 text-[#262626] font-sans">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#150e70] leading-snug">
          How Different is it from Yoga Teacher Training Course?
        </h2>

        <div className="text-left space-y-6 mt-8 text-base sm:text-lg text-gray-800">
          <p>
            <strong>Focus:</strong> Yoga TTC (Teacher Training Certification) focuses on training individuals to teach yoga, 
            while a 21-day Intensive Yoga Immersion Program focuses on personal growth and transformation 
            — helping participants become better practitioners rather than teachers.
          </p>

          <p>
            <strong>Duration:</strong> Yoga TTC courses typically last for 23 to 50 days depending on the curriculum you choose, 
            whereas the 21-Day Intensive Yoga Immersion Program offers a more concise, short-term commitment.
          </p>

          <p>
            <strong>Curriculum:</strong> Yoga TTC covers teaching methodology, anatomy, and philosophy, while the 21-Day Intensive Yoga Immersion 
            Program explores Yoga TTC concepts during the first two weeks and then progresses to deeper yogic practices, meditation, 
            and breath awareness enhancement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

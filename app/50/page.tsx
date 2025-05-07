import React from "react";

const FiftyHourMultiPage = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        50 Hr Multi-Style Yoga Teacher Training
      </h1>
      <p className="text-lg mb-6 text-center">
        An introductory immersion into the foundations of yoga.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What You'll Learn</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Basics of Hatha, Vinyasa, and Yin yoga</li>
          <li>Foundational alignment and anatomy</li>
          <li>Introduction to pranayama and meditation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Who It’s For</h2>
        <p>
          Perfect for beginners or anyone looking to refresh their practice in a focused setting.
        </p>
      </section>
    </div>
  );
};

export default FiftyHourMultiPage;
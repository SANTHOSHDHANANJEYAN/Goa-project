import React from "react";

const TwoHundredHourMultiPage = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        200 Hr Multi-Style Yoga Teacher Training
      </h1>
      <p className="text-lg mb-6 text-center">
        Become a certified yoga teacher with our immersive 200-hour training.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Course Content</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Multi-style practice: Hatha, Vinyasa, Yin & Restorative</li>
          <li>Advanced anatomy and physiology</li>
          <li>Yoga philosophy, ethics & lifestyle</li>
          <li>Teaching practicum & feedback</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Certification</h2>
        <p>
          Upon completion, you'll receive a Yoga Alliance-certified 200-hour certificate to teach worldwide.
        </p>
      </section>
    </div>
  );
};

export default TwoHundredHourMultiPage;

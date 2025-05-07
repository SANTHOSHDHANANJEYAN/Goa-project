import React from "react";


const TwentyOneDaysPage = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        21-Day Yoga Retreat in Goa
      </h1>
      <p className="text-lg mb-6 text-center">
        Flow, relax, and renew—immerse yourself in a 3-week transformational
        journey.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What to Expect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Daily yoga sessions (Hatha, Vinyasa, and Yin)</li>
          <li>Meditation, breathwork, and mindfulness practices</li>
          <li>Workshops on yoga philosophy, lifestyle, and self-care</li>
          <li>Local excursions and time to unwind</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Location & Accommodation</h2>
        <p>
          Nestled in the serene beaches of Goa, our retreat offers private
          cottages, nourishing vegetarian meals, and a supportive community
          space.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Who It's For</h2>
        <p>
          Open to all levels. Whether you're new to yoga or seeking space to
          reconnect, this retreat invites you to slow down and come home to
          yourself.
        </p>
      </section>
    </div>
  );
};

export default TwentyOneDaysPage;
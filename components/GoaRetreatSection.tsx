import React from 'react';

const GoaRetreatSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Content */}
        <div className="md:col-span-2">
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-2">
            Experience Tranquility Among Goa's Natural Beauty
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Experience Transformation at Rishikul Yogshala's 7-Day Yoga Retreat in Goa
          </h1>
          <p className="text-gray-800 mb-6 leading-relaxed">
            If you’re seeking a transformative escape that nurtures both your body and mind, Rishikul Yogshala’s 
            <strong> 7-day yoga retreat in Goa</strong> offers the perfect opportunity to reset, rejuvenate, and rediscover your inner peace. Goa, 
            known for its stunning beaches and serene atmosphere, is home to some of the 
            <strong> best retreats in Goa</strong>, offering an ideal destination for anyone looking to deepen their yoga practice.
            This <strong>Goa yoga retreat</strong> is designed to offer a comprehensive yoga experience, blending traditional practices with modern wellness techniques.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Whether you’re new to yoga or an experienced practitioner, the 
            <strong> 7-day yoga retreat Goa</strong> offers an enriching journey, focusing on physical strength, mental clarity, and emotional balance.
            Led by highly skilled and experienced instructors, the retreat features daily sessions in 
            <strong> Hatha, Vinyasa, and Ashtanga yoga</strong>, ensuring that every participant, regardless of their level, receives the guidance they need to grow in their practice.
            In addition to yoga, participants will engage in daily meditation, mindfulness workshops, and breathing exercises, helping to reduce stress and enhance focus. 
            This retreat is perfect for anyone looking to unwind and rejuvenate, with a focus on holistic wellness and personal development.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md">
            READ MORE
          </button>
        </div>

        {/* Retreat Details Card */}
        <div className="border border-green-700 rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Retreat Details</h3>
          <div className="text-gray-800 space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="font-semibold">Duration:</span>
              <span>7 Days</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Check in:</span>
              <span>7th of Every Month</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Check out:</span>
              <span>14th of Every Month</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Fees:</span>
              <span>$800</span>
            </div>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md">
            APPLY NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default GoaRetreatSection;

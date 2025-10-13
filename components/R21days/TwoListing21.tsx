'use client';

import Image from 'next/image';

export default function TwoListing7() {
  return (
    <section className="bg-white px-4 md:px-16 py-16 text-[#262626] font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section 1: Why Should You Pursue */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/aboutpics/why.jpg"
              alt="Yoga Practice Transformation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#150e70] mb-6 leading-snug">
              Why Should You Pursue the 21 Days Intensive Yoga Immersion Program?
            </h2>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>✔️ <strong>Physical Transformation:</strong> Improves flexibility, strength, and stamina.</li>
              <li>✔️ <strong>Mental Clarity:</strong> Enhances focus, concentration, and mental well-being.</li>
              <li>✔️ <strong>Emotional Balance:</strong> Reduces stress and anxiety, promoting emotional stability.</li>
              <li>✔️ <strong>Spiritual Growth:</strong> Deepens self-awareness, compassion, and inner peace.</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Who Should Pursue */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#150e70] mb-6 leading-snug">
              Who Should Pursue the 21 Days Intensive Yoga Immersion Program?
            </h2>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>✔️ Ideal for those seeking a holistic approach to wellness.</li>
              <li>✔️ Individuals desiring physical, mental, and spiritual growth.</li>
              <li>✔️ Suitable for beginners and experienced practitioners alike.</li>
              <li>✔️ Perfect for those aiming to establish a consistent yoga practice.</li>
              <li>✔️ Helps deepen understanding of yoga and its profound benefits.</li>
              <li>✔️ Can assist in alleviating anxiety, depression, PTSD, and cardiovascular issues.</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/aboutpics/who.jpg"
              alt="Yoga Practitioners in Retreat"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

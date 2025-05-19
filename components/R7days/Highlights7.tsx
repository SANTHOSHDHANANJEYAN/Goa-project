'use client';
import Image from 'next/image';

export default function Highlights7() {
  return (
    <section className="bg-[#eaf8f8] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-12 text-center md:text-right">
          <div>
            <h3 className="text-xl font-semibold mb-2">Dining</h3>
            <p>
              Wholesome, flavour-rich meals served by the sea—nourishment designed to
              restore energy, delight the senses, and honour wellness through every bite.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Yoga Shala</h3>
            <p>
              Purpose-built spaces for mindful movement and stillness—designed for focus,
              flow, and transformation, with every detail supporting your inner and outer
              alignment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Nalanda Teachers</h3>
            <p>
              Practice with experienced teachers who lead with clarity, depth, and care—
              mentors committed to your personal growth and professional evolution at the
              best wellness centers in India.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center ">
          <div className="rounded-full overflow-hidden w-[300px] h-[420px] md:w-[400px] md:h-[560px] bg-[url('/gallery/11.WEBP')] bg-cover bg-center ">

          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Nalanda Online</h3>
            <p>
              Practice anywhere, anytime. Access trusted guidance through online yoga,
              meditation, and wellness courses rooted in Nalanda’s philosophy of precision
              and care.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>
              Tucked along Mandrem Beach in North Goa—where stillness, beauty, and natural
              rhythm offer the perfect setting for deep rest and renewal.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Offers</h3>
            <p>
              Explore thoughtfully timed offers and seasonal specials—pathways to engage
              more deeply and experience Nalanda with added ease and flexibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

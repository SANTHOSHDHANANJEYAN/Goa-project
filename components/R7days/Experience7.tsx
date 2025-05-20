'use client';
import Image from 'next/image';

export default function Experience7() {
  return (
    <section className="relative bg-[#eaf8f8] py-20 px-6 text-center overflow-hidden">
      {/* Decorative background flower */}
      <div className="absolute top-0 right-0 w-1/2 max-w-[400px] opacity-30 pointer-events-none">
        <Image
          src="/yogabg-removebg-preview.png"
          alt="Decorative Flower"
          width={400}
          height={400}
        />
      </div>

      {/* Enquire Now Button */}
      {/* <div className="fixed right-0 top-1/3 z-50 rotate-90 origin-bottom-right">
        <button className="bg-teal-500 text-white px-4 py-2 rounded-l-full shadow-lg hover:bg-teal-600 transition">
          ENQUIRE NOW
        </button>
      </div> */}

      {/* WhatsApp Button
      <div className="fixed right-4 bottom-6 z-50">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/gallery/1.WEBP"
            alt="WhatsApp"
            width={48}
            height={48}
          />
        </a>
      </div> */}

      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/YA2.png"
          alt="Nalanda Logo"
          width={120}
          height={150}
          className="mx-auto"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-serif font-medium mb-6">
        Rishikul Yogshala Goa
      </h2>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-800">
        Rishikul Yogshala is more than a{' '}
        <strong className="font-semibold">wellness resort in Goa</strong>—it’s a
        space where transformation is woven into every detail. Set along the
        tranquil shores of Mandrem in North Goa, it blends tradition with quiet
        innovation, offering space to pause, reset, and grow.
        <br />
        <br />
        Explore a collection of curated offerings—each one purposeful, distinct,
        and designed to support how you move, nourish, rest, and learn. These
        aren’t add-ons—they are the essence of Nalanda. Crafted with care.
        Rooted in meaning. Ready to be experienced.
      </p>
    </section>
  );
}

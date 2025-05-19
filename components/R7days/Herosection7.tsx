export default function HeroSection7() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-12 mt-[4rem]">
      {/* Left Side - Logo and Title */}
      <div className="text-center lg:text-left max-w-md">
        <img src="/gallery/1.WEBP" alt="Logo" className="mx-auto lg:mx-0 mb-6 w-48" />
        <h2 className="text-2xl font-light tracking-wide">DESTINATION WELLNESS AND</h2>
        <h2 className="text-2xl font-light tracking-wide">YOGA RESORT IN INDIA</h2>
      </div>

      {/* Right Side - Text Content */}
      <div className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-serif mb-6">
          A Beachside Sanctuary In Goa To Reset, Realign & Grow
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Oceanfront bliss, a sanctuary for growth. Nalanda is more than a retreat—
          it’s a world-class yoga resort in Goa, blending deep practice, holistic healing,
          and coastal serenity for an immersive wellness experience.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Arrive. Breathe. Transform. Set along the serene shores of Mandrem Beach,
          Nalanda Retreat invites you into a world of refined renewal and transformation...
        </p>
        <a href="#about" className="inline-flex items-center text-lg font-medium hover:underline">
          <span className="mr-2 inline-block w-5 h-5 rounded-full border border-black flex items-center justify-center">
            <span className="block w-1.5 h-1.5 bg-black rounded-full"></span>
          </span>
          ABOUT NALANDA
        </a>
      </div>
    </section>
  );
}

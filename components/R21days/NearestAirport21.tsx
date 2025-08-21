export default function NearestAirport21() {
  return (
    <section
      className="bg-white py-16 px-4 text-center"
      role="region"
      aria-label="Nearest Airport Location"
    >
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70]">
          Nearest Airport
        </h2>
      </div>

      <div className="w-full h-80 sm:h-96 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3840.7496538103755!2d73.7032!3d15.711433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef00335f248f%3A0xa96dc6480dde342e!2sRishikul%20Yogshala!5e0!3m2!1sen!2sin!4v1746891791703!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </section>
  );
}

export default function NearestAirport7() {
  return (
    <section className="bg-white pb-[3rem]  px-4 sm:px-6 md:px-10 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#150e70]">
          Nearest Airport
        </h2>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg aspect-[16/5]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3840.7496538103755!2d73.7032!3d15.711433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef00335f248f%3A0xa96dc6480dde342e!2sRishikul%20Yogshala!5e0!3m2!1sen!2sin!4v1746891791703!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </section>
  );
}

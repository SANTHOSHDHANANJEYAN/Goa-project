export default function NearestAirport14() {
  return (
    <section className="bg-white py-12 px-6 lg:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#150e70] mb-6">Nearest Airport</h2>
      
      <div className="max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3840.7496538103755!2d73.7032!3d15.711433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef00335f248f%3A0xa96dc6480dde342e!2sRishikul%20Yogshala!5e0!3m2!1sen!2sin!4v1746891791703!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border rounded shadow-md"
        ></iframe>
      </div>
    </section>
  );
}

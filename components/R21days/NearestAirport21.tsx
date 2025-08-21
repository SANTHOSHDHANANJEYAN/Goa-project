'use client';

export default function NearestAirport7() {
  return (
    <section className="bg-white pb-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#150e70]">
          Rishikul Yogshala Location
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - How to Reach */}
        <div className="text-left flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#150e70] mb-5">
            How to Reach Us
          </h3>
          <p className="text-gray-700 mb-5 leading-relaxed">
            The nearest airport to <span className="font-semibold">Rishikul Yogshala</span> is
            <span className="font-semibold"> Goa International Airport (Dabolim)</span>, approximately
            <span className="font-semibold"> 54 km</span> away. You can reach us via:
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-xl">🚕</span>
              <p>
                <span className="font-semibold text-[#150e70]">By Taxi:</span>  
                Available 24/7 at the airport, approx <span className="font-semibold">1.5 hours</span>.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🛵</span>
              <p>
                <span className="font-semibold text-[#150e70]">Rental Scooter/Car:</span>  
                Flexible option to explore Goa.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🚌</span>
              <p>
                <span className="font-semibold text-[#150e70]">By Bus:</span>  
                Budget-friendly, but may take longer with multiple changes.
              </p>
            </li>
          </ul>

          <p className="text-gray-700 mt-6">
            For airport transfer assistance,{" "}
            <a
              href="#contact"
              className="text-[#150e70] font-semibold underline hover:text-[#0d0a52] transition"
            >
              contact us
            </a>.
          </p>
        </div>

        {/* Right Side - Google Map */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg h-[350px] sm:h-[400px] lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3840.7496538103755!2d73.7032!3d15.711433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef00335f248f%3A0xa96dc6480dde342e!2sRishikul%20Yogshala!5e0!3m2!1sen!2sin!4v1746891791703!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            title="Rishikul Yogshala Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

'use client'; // only if you're using App Router and client-side behavior

import Image from "next/image";

export default function OurDinning14() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-[750px]"
      style={{
        backgroundImage: "url('/dinning.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dinning</h1>
        <p className="text-lg mb-10">
          Savor delicious meals in a warm, welcoming atmosphere at Palm Paradise Resort.
        </p>

        <div className="flex flex-col text-left max-w-3xl mx-auto gap-12 items-center pt-[2rem]">
          <div className="flex items-start space-x-4 gap-[1rem]">
            <img
              src="/Accomdation/Fresh healthy logo 1.png"
              alt="Waterfalls"
              className="w-[5rem] h-[5rem] mt-1"
            />
            <p>
              <strong>Fresh & Healthy:</strong>
              <br />
              Enjoy wholesome dishes made from fresh, local ingredients to nourish your body.
            </p>
          </div>

          <div className="flex items-start space-x-4 gap-[1rem]">
            <img
              src="/Accomdation/Variety of flavours.png"
              alt="Nature parks"
              className="w-[5rem] h-[5rem] mt-1"
            />
            <p>
              <strong>Variety of Flavors:</strong>
              <br />
              Taste a mix of traditional Goan specialties and international cuisine.
            </p>
          </div>

          <div className="flex items-start space-x-4 pl-[3rem] gap-[1rem]">
            <img
              src="/Accomdation/Relaxed Setting 1.png"
              alt="Beaches"
              className="w-[5rem] h-[5rem] mt-1"
            />
            <p>
              <strong>Relaxed Setting:</strong>
              <br />
              Dine indoors or outdoors while soaking in the peaceful of jungle<br/>surroundings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

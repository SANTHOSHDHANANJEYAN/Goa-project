import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    image: "/excursion/7.jpg",
  },
  {
    id: 2,
    image: "/excursion/6.jpg",
  },
  {
    id: 3,
    image: "/excursion/3.jpg",
  },
];

export default function OurExcursions7() {
  return (
    <section className="bg-[#fff8f5] py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#4c2a65] mb-4">
        Our Excursions
      </h2>
      <p className="text-lg text-[#3d3d3d] max-w-2xl mx-auto mb-12">
        These are real stories from our Yoga Teacher Training students — raw, honest, and deeply
        moving. See how yoga has helped them heal, grow, and reconnect with themselves.
      </p>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-3xl overflow-hidden group shadow-md">
              <Image
                src={item.image}
                alt={`Testimonial ${item.id}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

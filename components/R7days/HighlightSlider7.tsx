'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const slides = [
  { src: '/Restorarion.jpg', label: 'Restorative Vibes' },
  { src: '/teacher training.jpg', label: 'Teacher Training' },
  { src: '/tranquil.jpg', label: 'Tranquil Stay' },
  { src: '/sunset.jpg', label: 'Sunset Bliss' },
];

export default function HighlightSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
  });

  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;

    timer.current = setInterval(() => {
      slider.next();
    }, 3000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  return (
    <div className="px-4 py-10">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide relative h-[300px] rounded overflow-hidden shadow-lg"
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-2xl font-medium drop-shadow-lg">
                {slide.label}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

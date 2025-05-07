import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const CommunitySection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative w-full h-[600px] text-white text-center flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/your-image-path.jpg" // <-- replace with your image URL or path
            alt="Yoga group"
            layout="fill"
            objectFit="cover"
            className="brightness-[0.45] z-0"
          />

          {/* Overlay Content */}
          <div className="z-10 max-w-4xl px-6">
            <h4 className="text-lg font-semibold mb-2">House of Om</h4>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Join our life-changing community of over 34,000 students.<br />
              Become part of our family at one of the leading accredited<br />
              schools in Bali and India!
            </h2>

            {/* Play Button and Stats */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
              {/* Play Button */}
              <button
                onClick={() => setShowVideo(true)}
                className="relative w-20 h-20 rounded-full border-2 border-white flex items-center justify-center group hover:bg-white hover:text-black transition"
              >
                <FaPlay className="text-xl z-10" />
                <span className="absolute text-xs rotate-90 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest text-white group-hover:text-black">
                  WATCH VIDEO
                </span>
              </button>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm md:text-base text-white">
                <div>
                  <p className="text-2xl font-bold">33%</p>
                  <p>graduates return to sign up<br />for new programs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">10.000+</p>
                  <p>graduated online</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">6.000+</p>
                  <p>graduated in Bali</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">18.000+</p>
                  <p>graduated in India</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">5★</p>
                  <p>Google and Facebook</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">200k+</p>
                  <p>Instagram & Facebook<br />community</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-[90%] md:w-[800px] h-[450px]">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Yoga Video"
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunitySection;

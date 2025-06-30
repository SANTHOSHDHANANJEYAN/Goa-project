'use client';

import Image from 'next/image';
import { useState, memo } from 'react';
import {
  FaCertificate,
  FaClock,
  FaVideo,
  FaChalkboardTeacher,
  FaBroadcastTower,
  FaUsers,
  FaPlayCircle,
} from 'react-icons/fa';

type VideoCardProps = {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
};

const VideoCard = memo(({ title, videoUrl, thumbnailUrl }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-sm cursor-pointer group">
      <div
        className="relative rounded-lg overflow-hidden shadow-lg"
        onClick={() => setIsPlaying(!isPlaying)}
        role="button"
        tabIndex={0}
        aria-label={`Play video: ${title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setIsPlaying(!isPlaying);
        }}
      >
        {!isPlaying ? (
          <>
            <Image
              src={thumbnailUrl}
              alt={title}
              width={400}
              height={192}
              loading="lazy"
              className="object-cover w-full group-hover:brightness-90 transition"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <FaPlayCircle className="absolute top-1/2 left-1/2 text-white text-6xl opacity-80 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          </>
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-auto rounded-lg"
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>
      <h3 className="mt-2 text-gray-900 font-semibold text-lg line-clamp-2">{title}</h3>
    </div>
  );
});
VideoCard.displayName = 'VideoCard';

type YouTubeCardProps = {
  title: string;
  youtubeId: string;
  thumbnailUrl: string;
};

const YouTubeCard = memo(({ title, youtubeId, thumbnailUrl }: YouTubeCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-sm cursor-pointer group">
      <div
        className="relative rounded-lg overflow-hidden shadow-lg"
        onClick={() => setIsPlaying(true)}
        role="button"
        tabIndex={0}
        aria-label={`Play YouTube video: ${title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setIsPlaying(true);
        }}
      >
        {!isPlaying ? (
          <>
            <Image
              src={thumbnailUrl}
              alt={title}
              width={400}
              height={192}
              loading="lazy"
              className="object-cover w-full group-hover:brightness-90 transition"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <FaPlayCircle className="absolute top-1/2 left-1/2 text-white text-6xl opacity-80 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          </>
        ) : (
          <iframe
            width="400"
            height="200"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg w-full h-[200px]"
          />
        )}
      </div>
      <h3 className="mt-2 text-gray-900 font-semibold text-lg line-clamp-2">{title}</h3>
    </div>
  );
});
YouTubeCard.displayName = 'YouTubeCard';

const features = [
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '100-Hour Multi-Style Yoga TTC',
    description:
      'Deepen your foundation with Hatha, Vinyasa, and Ashtanga styles. This compact 100-hour course enhances personal practice and clarity.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '200-Hour Multi-Style Yoga TTC',
    description:
      'Become a certified yoga teacher with our Yoga Alliance-approved training. Master key techniques, philosophy, and teaching skills.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '300-Hour Multi-Style Yoga TTC',
    description:
      'Advance your knowledge in multi-style yoga and refine your teaching. This course is ideal for deepening your expertise and confidence.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '21 Days Immersion Yoga',
    description:
      'Immerse in 21 days of intense yoga, healing, and transformation. A complete journey for body, mind, and soul renewal.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '7 Days Yoga Retreat',
    description:
      'Recharge with daily yoga, nature, and mindful activities. A perfect getaway to relax, unwind, and reconnect.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '14 Days Yoga Retreat',
    description:
      'Enjoy deeper relaxation and self-care in this 2-week retreat. Balance your lifestyle with yoga, meditation, and wellness.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '21 Days Yoga Retreat',
    description:
      'Go inward with a soulful 3-week yoga journey of growth. Experience lasting peace, strength, and spiritual clarity.',
  },
];

const CodeOfConduct = () => {
  return (
    <section className="bg-white px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16 pb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#150e70] mb-4">
            Empowering global yoga teachers through transformative courses & retreats
          </h1>
          <p className="text-lg text-[#150e70] max-w-2xl mx-auto">
            At Rishikul Yogshala Goa, we uphold a tradition of respect, responsibility, and discipline
            in our yoga training journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left: Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <VideoCard
            title="Rishikul Yogshala Venue"
            videoUrl="/Videos/venuevc.mov"
            thumbnailUrl="/Thumbnail/venue.png"
          />
          <VideoCard
            title="Rishikul Yogshala Meals"
            videoUrl="/Videos/foodvc.mp4"
            thumbnailUrl="/Thumbnail/food.png"
          />
          <VideoCard
            title="Rishikul Yogshala Opening Ceremony"
            videoUrl="/Videos/openingvc.mp4"
            thumbnailUrl="/Thumbnail/Opening ceremony .png"
          />
          <VideoCard
            title="Rishikul Yogshala Closing Ceremony"
            videoUrl="/Videos/closingvc.mp4"
            thumbnailUrl="/Thumbnail/Closing  .png"
          />
          <YouTubeCard
            title="Rishikul Yogshala Review-1"
            youtubeId="1oxK0cYax9s"
            thumbnailUrl="/Thumbnail/review1.png"
          />
          <YouTubeCard
            title="Rishikul Yogshala Review-2"
            youtubeId="s6VazbcpPko"
            thumbnailUrl="/Thumbnail/review2.png"
          />
        </div>

        {/* Right: Features */}
        <div className="space-y-10 mt-4">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;

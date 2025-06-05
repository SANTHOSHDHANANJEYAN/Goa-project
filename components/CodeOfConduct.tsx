"use client";
import Image from "next/image";
import {
  FaCertificate,
  FaClock,
  FaVideo,
  FaChalkboardTeacher,
  FaBroadcastTower,
  FaUsers,
  FaPlayCircle,
} from 'react-icons/fa';
// Updated component to accept thumbnailUrl
const VideoYoutubeCard = ({
  title,
  embedId,
  thumbnailUrl,
}: {
  title: string;
  embedId: string;
  thumbnailUrl: string;
}) => {
  return (
    <div
      className="cursor-pointer group max-w-sm"
      onClick={() => window.open(`https://www.youtube.com/watch?v=${embedId}`, '_blank')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') window.open(`https://www.youtube.com/watch?v=${embedId}`, '_blank');
      }}
    >
      <div className="relative rounded-lg overflow-hidden shadow-lg">
      <Image
        src={thumbnailUrl}
        alt={title}
        width={400}    // or any desired width in px
        height={192}   // 48 * 4 = 192px height
        className="object-cover group-hover:brightness-90 transition"
      />

        <FaPlayCircle className="absolute top-1/2 left-1/2 text-white text-6xl opacity-80 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
      <h3 className="mt-2 text-gray-900 font-semibold text-lg line-clamp-2">{title}</h3>
    </div>
  );
};

const features = [
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '100-Hour Multi-Style Yoga TTC',
    description: 'Deepen your practice and understanding with a compact, immersive 100-hour course.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '200-Hour Multi-Style Yoga TTC',
    description: 'Become a certified teacher through our comprehensive, Yoga Alliance-approved training.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '300-Hour Multi-Style Yoga TTC',
    description: 'Advance your skills and teaching with deeper knowledge in multi-style yoga.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '21 Days Immersion Yoga',
    description: 'Transform your life through 21 days of immersive yoga, healing, and self-growth.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '7 Days Yoga Retreat',
    description: 'Rejuvenate your body and mind with a blissful 7-day yoga escape.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '14 Days Yoga Retreat',
    description: 'Experience peace and wellness in this 14-day journey of yoga and relaxation.',
  },
    {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '21 Days Yoga Retreat',
    description: 'Go deep within on a 21-day soulful retreat for complete mind-body renewal.',
  },
];

const CodeOfConduct = () => {
  return (
    <section className="bg-white px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16 pb-[3rem]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#150e70] mb-4">
            Empowering global yoga teachers through transformative courses and retreats
          </h1>
          <p className="text-lg text-[#150e70] max-w-2xl mx-auto">
            At Rishikul Yogshala Goa, we uphold a tradition of respect, responsibility, and discipline
            in our yoga training journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left Side: YouTube Video Cards */}
        <div>
          <div className="flex items-center gap-2 text-green-700 font-semibold text-xl mb-[2rem]">
            <FaVideo className="text-green-600" />
            <span>Yoga TTC Videos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3.5rem]">
            <VideoYoutubeCard
              title="Rishikul Yogshala Goa"
              embedId="wFNmPHrxVZo?si=as8F1q3BWOjweDmi"
              thumbnailUrl="/Thumbnail/2.png"
            />
            <VideoYoutubeCard
              title="Guru Mantra – Yoga TTC"
              embedId="ZefriV55M-A?si=UZ4PM3XbLCJKKzxR"
              thumbnailUrl="/Thumbnail/3.png"
            />
            <VideoYoutubeCard
              title="Student’s Review – Yoga TTC"
              embedId="1oxK0cYax9s?si=MMqH1kM2Kcp0_6_z"
              thumbnailUrl="/Thumbnail/5.png"
            />
            <VideoYoutubeCard
              title="Additional Yoga Session"
              embedId="5o9pIWEC2eE?si=6TDXmlDFRE-WuojI"
              thumbnailUrl="/Thumbnail/4.png"
            />
          </div>
        </div>

        {/* Right Side: Feature List */}
        <div className="space-y-10  mt-[1rem] ">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1">{item.icon}</div>
              <div className='mt-[0]'>
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

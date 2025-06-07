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
    description: 'Deepen your foundation with Hatha, Vinyasa, and Ashtanga styles. This compact 100-hour course enhances personal practice and clarity.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '200-Hour Multi-Style Yoga TTC',
    description: 'Become a certified yoga teacher with our Yoga Alliance-approved training. Master key techniques, philosophy, and teaching skills.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '300-Hour Multi-Style Yoga TTC',
    description: 'Advance your knowledge in multi-style yoga and refine your teaching. This course is ideal for deepening your expertise and confidence.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '21 Days Immersion Yoga',
    description: 'Immerse in 21 days of intense yoga, healing, and transformation. A complete journey for body, mind, and soul renewal.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '7 Days Yoga Retreat',
    description: 'Recharge with daily yoga, nature, and mindful activities. A perfect getaway to relax, unwind, and reconnect.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '14 Days Yoga Retreat',
    description: 'Enjoy deeper relaxation and self-care in this 2-week retreat. Balance your lifestyle with yoga, meditation, and wellness.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: '21 Days Yoga Retreat',
    description: 'Go inward with a soulful 3-week yoga journey of growth. Experience lasting peace, strength, and spiritual clarity.',
  },
];


const CodeOfConduct = () => {
  return (
    <section className="bg-white px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16 pb-[3rem]">
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
        {/* Left Side: YouTube Video Cards */}
        <div>
          <div className="flex items-center gap-2 text-green-700 font-semibold text-xl mb-[2rem]">
            <FaVideo className="text-green-600" />
            <span>Yogashala Videos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3.5rem]">
            <VideoYoutubeCard
              title="Rishikul Yogshala Venue"
              embedId="wFNmPHrxVZo?si=as8F1q3BWOjweDmi"
              thumbnailUrl="/Thumbnail/venue.png"
            />
            <VideoYoutubeCard
              title="Rishikul Yogshala Meals "
              embedId="ZefriV55M-A?si=UZ4PM3XbLCJKKzxR"
              thumbnailUrl="/Thumbnail/food.png"
            />
            <VideoYoutubeCard
              title="Rishikul Yogshala Opening Ceremony"
              embedId="1oxK0cYax9s?si=MMqH1kM2Kcp0_6_z"
              thumbnailUrl="/Thumbnail/opening.png"
            />
            <VideoYoutubeCard
              title="Rishikul Yogshala Closing Ceremony"
              embedId="5o9pIWEC2eE?si=6TDXmlDFRE-WuojI"
              thumbnailUrl="/Thumbnail/closing.png"
            />
            <VideoYoutubeCard
              title="Rishikul Yogshala Review-1"
              embedId="1oxK0cYax9s?si=VdURMf5zk-gvMX9-"
              thumbnailUrl="/Thumbnail/review1.png"
            />
            <VideoYoutubeCard
              title="Rishikul Yogshala Review-2"
              embedId="1oxK0cYax9s?si=VdURMf5zk-gvMX9-"
              thumbnailUrl="/Thumbnail/review2.png"
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

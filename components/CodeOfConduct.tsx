"use client";
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
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:brightness-90 transition"
        />
        <FaPlayCircle className="absolute top-1/2 left-1/2 text-white text-6xl opacity-80 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
      <h3 className="mt-2 text-gray-900 font-semibold text-lg line-clamp-2">{title}</h3>
    </div>
  );
};

const features = [
  {
    icon: <FaCertificate className="text-green-600 text-3xl" />,
    title: '500-Hour Yoga Alliance Certification',
    description: 'Gain two certifications (200-Hour YTTC and 300-Hour YTTC) that prove you’re qualified to teach yoga worldwide.',
  },
  {
    icon: <FaClock className="text-green-600 text-3xl" />,
    title: '500+ Hours of Self-Paced Training',
    description: 'Learn yoga at your own speed with over 500 hours of flexible lessons that fit your schedule.',
  },
  {
    icon: <FaVideo className="text-green-600 text-3xl" />,
    title: '500+ Video Lessons',
    description: 'Access easy-to-follow videos covering poses, philosophy, and more to deepen your understanding.',
  },
  {
    icon: <FaChalkboardTeacher className="text-green-600 text-3xl" />,
    title: 'World Renowned Yoga Gurus from India',
    description: 'Learn from top teachers from India known for their deep knowledge and expertise in yoga.',
  },
  {
    icon: <FaBroadcastTower className="text-green-600 text-3xl" />,
    title: 'Daily Live Sessions',
    description: 'Attend live classes daily for real-time learning and direct interaction with instructors.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: 'Supportive Community',
    description: 'Join a vibrant community of fellow students to share, grow, and stay inspired.',
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
              embedId="D3qUjvOPxak"
              thumbnailUrl="/Thumbnail/2.png"
            />
            <VideoYoutubeCard
              title="Guru Mantra – Yoga TTC"
              embedId="tgbNymZ7vqY"
              thumbnailUrl="/Thumbnail/3.png"
            />
            <VideoYoutubeCard
              title="Student’s Review – Yoga TTC"
              embedId="C0DPdy98e4c"
              thumbnailUrl="/Thumbnail/4.png"
            />
            <VideoYoutubeCard
              title="Additional Yoga Session"
              embedId="YOUR_NEW_VIDEO_ID"
              thumbnailUrl="/Thumbnail/5.png"
            />
          </div>
        </div>

        {/* Right Side: Feature List */}
        <div className="space-y-10 pt-[3rem]">
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

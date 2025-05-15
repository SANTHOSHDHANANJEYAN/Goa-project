import {
  FaCertificate,
  FaClock,
  FaVideo,
  FaChalkboardTeacher,
  FaBroadcastTower,
  FaUsers,
  FaBookOpen,
  FaMoneyCheckAlt,
  FaCheckCircle,
} from 'react-icons/fa';

const VideoCard = ({ title, embedId }: { title: string; embedId: string }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 border border-gray-100">
    <iframe
      className="w-full h-56 md:h-64"
      src={`https://www.youtube.com/embed/${embedId}`}
      title={title}
      allowFullScreen
    ></iframe>
    <div className="p-4 text-center font-semibold text-gray-800">{title}</div>
  </div>
);

const features = [
  {
    icon: <FaCertificate className="text-green-600 text-3xl" />,
    title: '500-Hour Yoga Alliance Certification',
    description:
      'Gain two certifications (200-Hour YTTC and 300-Hour YTTC) that prove you’re qualified to teach yoga worldwide.',
  },
  {
    icon: <FaClock className="text-green-600 text-3xl" />,
    title: '500+ Hours of Self-Paced Training',
    description:
      'Learn yoga at your own speed with over 500 hours of flexible lessons that fit your schedule.',
  },
  {
    icon: <FaVideo className="text-green-600 text-3xl" />,
    title: '500+ Video Lessons',
    description:
      'Access easy-to-follow videos covering poses, philosophy, and more to deepen your understanding.',
  },
  {
    icon: <FaChalkboardTeacher className="text-green-600 text-3xl" />,
    title: 'World Renowned Yoga Gurus from India',
    description:
      'Learn from top teachers from India known for their deep knowledge and expertise in yoga.',
  },
  {
    icon: <FaBroadcastTower className="text-green-600 text-3xl" />,
    title: 'Daily Live Sessions',
    description:
      'Attend live classes daily for real-time learning and direct interaction with instructors.',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: 'Supportive Community',
    description:
      'Join a vibrant community of fellow students to share, grow, and stay inspired.',
  },
];

const CodeOfConduct = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-8 lg:px-20 mb-16">
      <div className="max-w-7xl mx-auto space-y-16 pb-[3rem]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#150e70] mb-4">
            Code of Conduct
          </h1>
          <p className="text-lg text-[#150e70] max-w-2xl mx-auto">
            At Rishikul Yogshala Goa, we uphold a tradition of respect, responsibility, and discipline in our yoga training journey.
          </p>
        </div>
        </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left Side: Videos (unchanged) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-green-700 font-semibold text-xl mb-2">
            <FaVideo className="text-green-600" />
            <span>Yoga TTC Videos</span>
          </div>

          <VideoCard title="Rishikul Yogshala Goa" embedId="dQw4w9WgXcQ" />
          <VideoCard title="Guru Mantra – Yoga TTC" embedId="tgbNymZ7vqY" />
          <VideoCard title="Student’s Review – Yoga TTC" embedId="C0DPdy98e4c" />
        </div>

        {/* Right Side: Features (updated) */}
        <div className="space-y-10 pt-[3rem]">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
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

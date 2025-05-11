// components/CodeOfConduct.tsx
import { FaCheckCircle, FaBookOpen, FaVideo, FaMoneyCheckAlt } from 'react-icons/fa';

const conductPoints = [
  "Participation in all classes is mandatory, with exceptions made only for emergencies.",
  "Unnotified absences will negatively impact the student's monthly evaluation.",
  "Students are expected to dedicate at least two hours daily to study.",
  "Teaching materials are protected by copyright and must not be misused.",
  "Classes have designated start times that must be adhered to consistently.",
  "Tobacco and alcohol are strictly forbidden on school premises.",
  "Inform kitchen staff in advance if you do not require meals.",
  "Maintain discipline and respect towards instructors.",
  "Settle all accounts before leaving Rishikul Yogshala Goa.",
  "Return all school property (books, mats) before departure.",
  "Accommodation is exclusively for students.",
  "Family members may be accommodated in a separate room for an additional fee.",
  "Attend all scheduled events at Rishikul Yogshala Goa.",
];

const feeConditions = [
  "The advance booking fee is non-refundable and non-transferable.",
  "To change the course month, a notice of 45 days is required to facilitate adjustments.",
];

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

const CodeOfConduct = () => {
  return (
    <section className="bg-transparent py-20 px-6 sm:px-8 lg:px-20 mb-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#150e70] mb-4">
            Code of Conduct
          </h1>
          <p className="text-lg text-[#150e70] max-w-2xl mx-auto">
            At Rishikul Yogshala Goa, we uphold a tradition of respect, responsibility, and discipline in our yoga training journey.
          </p>
        </div>

        {/* Section: Videos and Conduct */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Videos */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-green-700 font-semibold text-xl mb-2">
              <FaVideo className="text-green-600" />
              <span>Yoga TTC Videos</span>
            </div>

            <VideoCard title="Rishikul Yogshala Goa" embedId="dQw4w9WgXcQ" />
            <VideoCard title="Guru Mantra – Yoga TTC" embedId="tgbNymZ7vqY" />
            <VideoCard title="Student’s Review – Yoga TTC" embedId="C0DPdy98e4c" />
          </div>

          {/* Conduct + Fees */}
          <div className="space-y-12">
            {/* Guidelines */}
            <div>
              <div className="flex items-center gap-2 text-green-700 font-semibold text-xl mb-4">
                <FaBookOpen className="text-green-600" />
                <span>Guidelines & Code of Conduct</span>
              </div>
              <ul className="space-y-3 text-gray-700 text-base">
                {conductPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fees */}
            <div>
              <div className="flex items-center gap-2 text-yellow-600 font-semibold text-xl mb-4">
                <FaMoneyCheckAlt className="text-yellow-500" />
                <span>Course Fees Terms</span>
              </div>
              <ul className="space-y-3 text-gray-700 text-base">
                {feeConditions.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-yellow-500 mt-1 mr-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;

'use client';

export default function AboutTraining() {
  const youtubeUrl = "https://www.youtube.com/watch?v=8AveOsMT7-A";

  return (
    <>
      {/* Section 1 - Best 100 Hour Yoga Teacher Training */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12 text-center">
            Best 100 Hour Yoga Teacher Training in Goa
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Text */}
            <div className="flex flex-col h-full">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  If you want a course as a stepping stone into the world of Yoga, then the 100 Hour Yoga Teacher Training Program in Goa is the best way to initiate yourself into the yogic wisdom and practices. This course is ideally suited for those who are absolute beginners or who have some yoga session experience.
                </p>

                <p>
                  This course will enhance your yogic knowledge from scratch, including practical asanas, and will help you gain a head-start experience on the diverse yogic techniques such as Hatha Yoga, Alignment, Pranayama & breath work, Meditation, Mantra Chanting, Mudra, the Philosophy of Yoga, and Anatomy & Physiology Structure.
                </p>

                <p>
                  Our goal at Rishikul Yogshala Goa is to make the students acquainted with in-depth Yoga Philosophy and other multi-dimensions of Yoga too. The 100 Hour Yoga Teacher Training Program in Goa is crafted with the aim of fine-tuning your yogic asana postures in sync with alignment; besides offering you the holistic knowledge of yoga, which includes Pranayama or breath work practices and meditative practices to calm the emotions.
                </p>

                <p>
                  This will equip you with the foundational yogic aspects and dimensions and will help you take a step up and enhance your yogic lifestyle and practices.
                </p>
              </div>
            </div>

            {/* Right Media */}
            <div className="flex flex-col h-full gap-10">
              <div className="relative w-full flex justify-center">
                <a
                  href="https://www.instagram.com/reel/DF5UVRfIkRy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100 bg-black rounded-xl"
                  aria-label="Open the Instagram Reel in a new tab"
                >
                  <img
                    src="/aboutpics/Rishikul Yogshala Goa 1.jpg"
                    alt="Instagram Reel: 100 Hour Yoga Teacher Training in Goa"
                    className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md transition duration-300 group-hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#E1306C"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Curriculum */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/aboutpics/curriculambg.png')",
        }}
      >
        <div className="relative max-w-4xl mx-auto py-16 px-4 md:px-10 text-center">
          {/* Changed background from semi-transparent to solid white */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide uppercase">
              100 Hour Yoga Teacher Training Curriculum
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
              The 100 Hour Yoga Teacher Training in Goa is designed to establish a strong foundation in yoga practice and philosophy. 
              Ideal for beginners and yoga enthusiasts, this course guides you into the yogic path while deepening your self-awareness 
              and understanding of traditional yoga teachings.
            </p>

            {/* Detailed Curriculum */}
            <div className="mt-10 text-left text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                Detailed Curriculum:
              </h3>
              <p>
                The 100 Hour Yoga Teacher Training in Goa is created to establish a foundational yoga practice 
                for beginners and guide them on to the Yogic Path. If you want to deepen your practice or embark 
                on the journey to becoming a yoga instructor, then this 100 Hour Yoga Teacher Training program 
                offers a valuable opportunity.
              </p>
              <p>
                To ensure you are well-versed in the fundamentals of Yoga, this program follows the same curriculum 
                as the 200 Hour Yoga Teacher Training Program. The first 11 days of the 200 Hour course form the 
                100 Hour program, making it perfect for those who may not have enough time to complete the full training at once.
              </p>
              <p>
                Upon successful completion, you will receive a Participation Certificate. Later, you can complete 
                the remaining 100 hours at your convenience to earn the internationally recognized 
                <strong> 200 Hour Yoga Alliance USA Certification</strong>.
              </p>
            </div>

            {/* What Will You Learn */}
            <div className="mt-10 text-left text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                What Will You Learn:
              </h3>

              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Asana Sessions (Hatha and Ashtanga Vinyasa Yoga):</strong>{" "}
                  Study fundamental asanas with proper alignment, breath coordination, and benefits for body and mind.
                </li>
                <li>
                  <strong>Pranayama (Breath Control):</strong>{" "}
                  Learn traditional breathing practices to enhance energy flow, focus, and relaxation.
                </li>
                <li>
                  <strong>Meditation Techniques:</strong>{" "}
                  Practice guided meditations, mindfulness methods, and seated postures to cultivate inner stillness and peace.
                </li>
                <li>
                  <strong>Anatomy & Physiology:</strong>{" "}
                  Explore how yoga impacts muscles, joints, and internal systems, and understand body mechanics during asana practice.
                </li>
                <li>
                  <strong>Mantra Chanting & Sound Healing:</strong>{" "}
                  Experience the power of Sanskrit mantras and sound vibrations to elevate consciousness and spiritual awareness.
                </li>
              </ul>
            </div>

            <div className="mt-10 text-center">
              <button className="px-6 py-2.5 bg-[#16a34a] text-white text-sm font-medium rounded-md shadow-md hover:bg-[#e6a823] transition-all duration-300">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
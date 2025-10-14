'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface CurriculumItem {
  title: string;
  content: string[];
}

const curriculumData: CurriculumItem[] = [
  {
    title: 'Hatha Yoga – Classical Asana Secondary Series',
    content: [
      'Hatha Yoga – Intermediate Series and its Variations',
      'Chandra Namaskar (Moon salutation)',
      'Advance Series Of Joints And Glands Exercise',
      'Twisting Series Of Asana',
      'Restorative asanas practices',
      'Workshop on Inversion Asana',
      'Asana classes according to Patanjali',
      'List of asana to explore:',
      'Surya Namaskar',
      'Chandra Namaskar',
      'Tadasana',
      'Triyak Tadasana',
      'Kati Chakrasana',
      'Trikonasana',
      'Sarpasana',
      'Shalabhasana',
      'Dhanurasana',
      'Paschimottanasana',
      'Janu Sirsasana',
      'Parivrtta Janu Sirsasana',
      'Sarvangasana',
      'Sirsasana',
      'Natarajasana',
      'Naukasana',
      'Mayurasana',
      'Kurmasana',
      'Chakrasana',
      'Hanumanasana',
      'Agnistambhasana',
      'Eka Pada Sirsasana',
      'Chaturanga Dandasana',
      'Pincha Mayurasana',
      'Adho Mukha Vrksasana',
      'Bakasana',
      'Eka Pada Bakasana',
      'Parsva Bakasana',
      'Galavasana',
      'Raja Kapotasana',
      'Ustrasana',
      'Anantasana',
      'Parighasana',
      'Mandukasana',
      'Supta Padangusthasana',
      'Setu Bandhasana',
      'Padma Mayurasana',
      'Virabhadrasana I',
      'Virabhadrasana II',
      'Virabhadrasana III',
      'Ardha Chandrasana',
      'Poorna Shalabhasana',
      'Purna Natarajasana',
      'Dwi Pada Viparita Dandasana',
      'Vrikshasana',
      'Niralamba Sirsasana',
      'Uttana Padasana',
      'Supta Virasana',
    ],
  },
  {
    title: 'Ashtanga Vinyasa Yoga',
    content: [
      'Vinyasa workshop',
      'Guidelines for each asana',
      'Why No Practice on Full & New Moon day',
      'Intense primary series practice (Mysore and lead class)',
      'Surya Namaskar A',
      'Surya Namaskar B',
      'Padangusthasana',
      'Padahastasana',
      'Utthita Trikonasana',
      'Parivrtta Trikonasana',
      'Utthita Parsvakonasana',
      'Parivrtta Parsvakonasana',
      'Prasarita Padottanasana A B C & D',
      'Parsvottanasana',
      'Utthita Hasta Padangusthasana A B C & D',
      'Ardha Baddha Padmottanasana',
      'Utkatasana',
      'Virabhadrasana A & B',
      'Dandasana',
      'Paschimottanasana A B & C',
      'Purvottanasana',
      'Ardha Baddha Padma Paschimottanasana',
      'Triang Mukhaikapada Paschimottanasana',
      'Janu Sirsasana A B & C',
      'Marichyasana A B C & D',
      'Navasana',
      'Bhujapidasana',
      'Kurmasana',
      'Supta Kurmasana',
      'Garbha Pindasana',
      'Kukkutasana',
      'Baddha Konasana A B & C',
      'Upavistha Konasana A & B',
      'Supta Konasana A & B',
      'Supta Padangusthasana A B & C',
      'Ubhaya Padangusthasana A & B',
      'Urdhva Mukha Paschimottanasana',
      'Setu Bandhasana',
      'Urdhva Dhanurasana',
      'Salamba Sarvangasana',
      'Halasana',
      'Karnapidasana',
      'Urdhva Padmasana',
      'Pindasana',
      'Matsyasana',
      'Uttana Padasana',
      'Sirsasana',
      'Urdhva Dandasana',
      'Yoga Mudra',
    ],
  },
  {
    title: 'Introduction to Intermediate series',
    content: [
      '1. STANDING POSTURES',
      'Samasthiti',
      'Surya Namaskara (A & B)',
      'Padangusthasana',
      'Pada Hastasana',
      'Utthita Trikonasana',
      'Parivrtta Trikonasana',
      'Utthita Parshvakonasana',
      'Parivrtta Parshvakonasana',
      'Prasarita Padottanasana (A, B, C & D)',
      'Parshvottanasana',
      'Utthita Hasta Padangusthasana A B C & D',
      'Ardha Baddha Padmottanasana',
      '2. INTERMEDIATE POSTURES',
      'Pashasana',
      'Krounchasana',
      'Shalabhasana A, B',
      'Bhekasana',
      'Dhanurasana',
      'Parsvadhanurasana',
      'Ustrasana',
      'Laghu Vajrasana',
      'Kapotasana A & B',
      'Supta Vajrasana',
      'Bakasana A & B',
      'Bharadvajasana',
      'Ardha Matsyendrasana',
      'Ekapada Sirsasana',
      'Dvipada Sirsasana',
      'Yoga Nidrasana',
      'Tittibhasana A, B, C',
      'Pincha Mayurasana',
      'Karandavasana',
      'Mayurasana',
      'Nakrasana',
      'Vatayanasana',
      'Parighasana',
      'Gomukhasana A, B',
      'Supta Urdhva Pada Vajrasana',
      'Mukta Hasta Sirsasana A, B, C',
      'Baddha Hasta Sirsasana A, B, C, D',
      '3. FINISHING POSES',
      'Salamba Sarvangasana',
      'Halasana',
      'Karnapidasana',
      'Urdhva Padmasana',
      'Pindasana',
      'Matsyasana',
      'Uttana Padasana',
      'Sirsasana',
      'Urdhva Dandasana',
      'Yoga Mudra',
      'Padmasana',
      'Uth Pluthi (Tolasana)',
      'Savasana',
    ],
  },
  {
    title: 'Pranayama and Mudras',
    content: [
      'Introduction of bandhas and its application in Pranayama',
      'Practicum of four bandhas',
      'Mula Bandha',
      'Uddiyan Bandha',
      'Jalandhara Bandha',
      'Maha Bandha',
      'Seven pranayama practices (advance practice)',
      'Kapalbhati Pranayama',
      'Sheetali Pranayama',
      'Bhastrika Pranayama',
      'Sheetkari Pranayama',
      'Ujjayi Pranayama',
      'Bhramari Pranayama',
      'Nadi Shodhana Pranayama',
      'Intensity of Kumbhaka (Breath Retention)',
      'Importance of Sushumna',
      'Nature and activities of Ida, Pingala & Sushumna',
    ],
  },
  {
    title: 'Mudras',
    content: [
      'Introduction to Mudras',
      'Practicum of Prana Mudra',
      'Practicum of Psychic Mudra',
      'Preparation of Mudra for Bandha',
      'Meaning of Yoga Mudra',
    ],
  },
  {
    title: 'Bhagavad Gita – Philosophy',
    content: [
      'Study of Yoga in connection with Gita',
      'Study of Karma Yoga, Bhakti Yoga, Raja Yoga, Jnana Yoga',
      'Karma and Non-Attachment in Yogic Dimensions',
      'Four Levels of Consciousness',
      'Keys to Successful Living in Yogic Science',
      'The state of 3 Gunas and its impact on us',
      '6 Main Obstacles in the Path of Yoga',
      'Samadhi and its Study',
    ],
  },
  {
    title: 'Anatomy and Physiology of Yogic Practices',
    content: [
      'What is Yogic Anatomy and Physiology?',
      'Understanding Anatomy in respect to Yoga',
      'Introduction of 10 major systems in the Human Body',

      'Introduction to Skeletal System and its Significance (recap of 200 hr YTTC)',
      'Bones & Remodeling of Bones in Human Body',
      'How yogic practices can help improve bone health',
      'Anatomy of Joint',
      'Types of Joints',
      'Cartilage, Ligaments & Tendons',
      'How to protect the joints while practicing',
      'Yogic practices that improve joint health',
      'Conclusion',

      'Introduction to Muscular System and its Significance (recap of 200 hr YTTC)',
      'Anatomy & Physiology of Muscles',
      'How muscles are built and yogic viewpoint',
      'Types of Muscles',
      'Movements of Muscles',
      'Muscle Contractions',
      'Muscle Respiration & Muscle Fatigue',
      'Conclusion',

      'Introduction of the Respiratory System and yogic breathing (recap of 200 hr YTTC)',
      'Anatomy & Physiology of the Respiratory System',
      'Types of Breathing and their importance',
      'Composition of Breath and its importance',
      'TLC and how it is in actual scenario',
      'Gas Exchange process and factors that impact it',
      'Respiratory diseases and yogic applications to help improve the condition',
      'General FAQ for students’ understanding',
      'Conclusion',

      'Introduction of the Digestive System',
      'Anatomy & Physiology of the Digestive System',
      'Parts of the digestive system and how Yoga can improve function',
      'How yogic practices can help improve digestion',
      'Composition of digestive system: glands, hormones, enzymes and their function',
      'Digestive disorders and yogic applications to help improve the condition',
      'Conclusion',

      'Introduction of the Nervous System',
      'Anatomy & Physiology of the Nervous System',
      'Function of the nervous system and its major role in the human system',
      'Autonomic nervous system (Nerve, Pranayama, Mudra, Meditation & Bandha) and how to improve',
      'How the nervous system relates to Yoga Nidra',
      'Conclusion',

      'Introduction of the Endocrine System & Chakras',
      'Anatomy & Physiology of the Endocrine System',
      'Understanding the glands and their impact',
      'Yogic viewpoint',
      'Introduction of Chakras with respect to glands and yogic solutions',
      'How Chakras impact glands',
      'Common disorders and yogic applications',
      'Conclusion',

      'Introduction of the Cardiovascular System (Circulatory System)',
      'Anatomy & Physiology of the Cardiovascular System',
      'Parts of the cardiovascular system and their functions',
      'How yogic practices can help improve function',
      'Yogic lifestyle & diet and heart health',
      'Understanding types of blood pressure and their impact on overall health',
      'Cardiovascular disorders and yogic applications to help improve the condition',
      'Conclusion',
    ],
  },
  {
    title: 'Concentration and Meditation Practices',
    content: [
      'What is Meditation?',
      'Obstacles in Meditation',
      'Withdrawing Meditation (Pratyahara)',
      'Chakra Awareness Meditation',
      'Root Mantra Awareness Meditation',
      'Third Eye Meditation',
      'Different types of meditation postures',
      'Introduction of Ajapa Japa',
    ],
  },
  {
    title: 'Yoga Nidra (Conscious Yogic Sleep)',
    content: [
      'Role of Yoga Nidra in developing intuition',
      'Yoga Nidra practices from Satyananda tradition',
      'How Yoga Nidra practices address common assumptions',
      'Adjusting in Shavasana',
    ],
  },
  {
    title: 'Principle of Teaching Asana (Adjustment and Alignment)',
    content: [
      'Ashtanga Primary Series Workshop -',
      'Workshop on Standing Asana',
      'Workshop on Sitting Asana',
      'Workshop on Core Series',
      'Workshop on Backbending Asana',
      'Workshop on Closing Series',
      'Hands-on Adjustment and Modification of Asana – Primary Series',
    ],
  },
  {
    title: 'Shat Kriya (Yogic Purification for Body Preparation and Self-Healing)',
    content: [
      'Practicum of Trataka (Cleansing) and preparation for concentration; improving eyesight through candle light',
      'Practicum and discussion on Shankhaprakshalana for cleansing of lower abdomen',
      'Practicum of Kunjal Kriya',
      'Practicum of Jal Neti and Sutra Neti',
    ],
  },
  {
    title: 'Mantra Yoga',
    content: [
      'About mantra opening and closing mantra',
      'Mantra for OM (AUM) between teachers and students',
      'Mantra for blessings to masters',
      'Wellbeing mantra',
    ],
  },
  {
    title: 'Teaching Methodology',
    content: [
      'Building a social relationship between teacher and students',
      'Inspiring and motivating in difficult situations',
      'Developing confidence while teaching and sharing the yogic practices',
      'Including a multi-style lesson plan and instructing skills',
      'Benefits and limitations',
      'Delivering effective feedback to aspirants',
    ],
  },
];

export default function AboutTraining() {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Section 1 - Overview */}
<section className="py-16 px-6 md:px-20 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12 text-center">
      Best 300 Hour Yoga Teacher Training in Goa
    </h2>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      {/* Left Text Content */}
      <div className="flex flex-col h-full">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to the Advanced Curriculum of Yoga. Once you have completed the foundational concepts of yoga from the 200 hours Yoga Teacher Training Program, you have indeed reached one step closer to pursuing your dreams to be one of the best yoga teachers out there by pursuing the 300 hours Yoga Teacher Training Program.
          </p>

          <p>
            Rishikul Yogshala offers the 300 Hour Yoga Teacher Training in Goa, India, to students who practice or teach yoga and desire to be master practitioners and career-oriented professional yoga teachers themselves. This is an intensive, 28-day program in which you'll be completely immersed in multi-style study and practice of yoga from different dimensions.
          </p>

          <p>
            Immerse yourself in intensive asana sessions, or advance breath awareness practices, intense meditative sessions, in-depth alignment and anatomy physiology sessions, and extensive teaching methodology sessions and many more.
          </p>

          <p>
            Apart from the above, Rishikul Yogshala welcomes you to Goa's picturesque towns, where you can be in complete serenity and at peace of mind.
          </p>
        </div>
      </div>

      {/* Right Media Section */}
      <div className="flex flex-col h-full gap-16 md:gap-10">
        {/* Instagram Reel Portrait Frame */}
        <div className="relative w-full flex justify-center">
          <a
            href="https://www.instagram.com/reel/DF5UVRfIkRy/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100 bg-black rounded-xl"
            aria-label="Open the Instagram Reel in a new tab"
          >
            {/* Portrait Thumbnail */}
            <img
              src="/aboutpics/Rishikul Yogshala Goa 1.jpg"
              alt="Instagram Reel: 300 Hour Yoga Teacher Training in Goa"
              className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />

            {/* Centered Play Button */}
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
        style={{ backgroundImage: "url('/aboutpics/curriculambg.png')" }}
      >
        <div className="relative max-w-4xl mx-auto py-16 px-4 md:px-10 text-center">
          <div className="bg-white/50 rounded-lg shadow-md p-8 md:p-12 backdrop-blur-md">
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide uppercase">
              300 Hour Yoga Teacher Training Curriculum
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
              Explore our in-depth yoga curriculum designed to enhance your practice,
              teaching methodology, and spiritual journey.
            </p>

            <div className="space-y-3 text-left">
              {curriculumData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-50 rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full px-5 py-3 bg-white hover:bg-gray-50 transition-colors duration-50 flex justify-between items-center text-left"
                  >
                    <span className="text-base font-medium text-gray-800">
                      {item.title}
                    </span>
                    {openDropdowns[index] ? (
                      <FaChevronUp className="text-gray-600 flex-shrink-0" size={16} />
                    ) : (
                      <FaChevronDown className="text-gray-600 flex-shrink-0" size={16} />
                    )}
                  </button>

                  {openDropdowns[index] && item.content.length > 0 && (
                    <div className="px-5 py-3 bg-gray-50 border-t border-gray-50">
                      <ul className="space-y-1.5">
                        {item.content.map((contentItem, contentIndex) => (
                          <li
                            key={contentIndex}
                            className="text-gray-700 flex items-start text-sm"
                          >
                            <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                            <span>{contentItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {openDropdowns[index] && item.content.length === 0 && (
                    <div className="px-5 py-3 bg-gray-50 border-t border-gray-50">
                      <p className="text-gray-500 italic text-sm">
                        Content coming soon...
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
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
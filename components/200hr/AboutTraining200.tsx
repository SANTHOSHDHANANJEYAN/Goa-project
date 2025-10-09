'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface CurriculumItem {
  title: string;
  content: string[];
}

const curriculumData: CurriculumItem[] = [
  {
    title: "Hatha Yoga – Primary series",
    content: [
      "What is Hatha yoga?",
      "Surya Namaskar with mantra awareness",
      "Sukshma Vyama (joints and glands exercise)",
      "Standing series of asana",
      "Kneeling series of asana",
      "Sitting series of asana",
      "Lying on stomach series of Asana",
      "Supine series of asana",
      "Inversion series of asana",
      "Asana benefits and its contra-indications",
      "List of Asana to Explore:",
      "Pawanmuktasana Series 1, 2 & 3",
      "Surya Namaskar",
      "Tadasana, Triyak Tadasana, Kati Chakrasana",
      "Trikonasana, Utkatasana, Virabhadrasana 2",
      "Vrikshasana, Parvatasana, Malasana, Garudasana",
      "Baddha Konasana, Rajakapotasana",
      "Bhujangasana, Urdhva Mukha Svanasana",
      "Matsyasana, Setu Bandhasana, Ustrasana",
      "Dhanurasana, Salabhasana, Gomukhasana",
      "Balasana, Dandasana, Ardha Matsyendrasana",
      "Sarpasana, Sirsasana, Halasana, Sarvangasana",
      "Vajrasana, Adho Mukha Svanasana",
      "Adho mukha vrksh asana, Pincha mayurasna",
      "Hanuman asana, Eka Pada Setu Bandhasana",
      "Vipritkarniasana, Mandukasan",
      "Parivrtta Marjaryasana asana, Tiger posture",
      "Uttanasana, Ananda balasana, Supta kapot asana",
      "Ajnyaasana, Parsva sukhasana, Parvirta sukhasana"
    ]
  },
  {
    title: "Ashtanga Yoga – Primary series",
    content: [
      "What is Vinyasa?",
      "9 Drishti in Ashtanga series",
      "Importance of Ujjai and Bandhas in series",
      "Primary Series explanation",
      "Surya Namaskar A & B",
      "Padangusthasana, Padahastasana",
      "Utthita Trikonasana, Parivrtta Trikonasana",
      "Utthita Parsvakonasana, Parivrtta Parsvakonasana",
      "Prasarita Padottanasana A B C & D",
      "Parsvottanasana",
      "Utthita Hasta Padangusthasana A B C & D",
      "Ardha Baddha Padmottanasana",
      "Utkatasana, Virabhadrasana A & B",
      "Dandasana, Paschimottanasana A B & C",
      "Purvottanasana",
      "Ardha Baddha Padma Paschimottanasana",
      "Triang Mukhaikapada Paschimottanasana",
      "Janu Sirsasana A B & C",
      "Marichyasana A B C & D",
      "Navasana, Bhujapidasana",
      "Kurmasana, Supta Kurmasana",
      "Garbha Pindasana, Kukkutasana",
      "Baddha Konasana A B & C",
      "Upavistha Konasana A & B",
      "Supta Konasana A & B",
      "Supta Padangusthasana A B & C",
      "Ubhaya Padangusthasana A & B",
      "Urdhva Mukha Paschimottanasana",
      "Setu Bandhasana, Urdhva Dhanurasana",
      "Salamba Sarvangasana, Halasana",
      "Karnapidasana, Urdhva Padmasana",
      "Pindasana, Matsyasana, Uttana Padasana",
      "Sirsasana, Urdhva Dandasana",
      "Yoga Mudra, Uttplutih"
    ]
  },
  {
    title: "Pranayama and Mudras",
    content: [
      "Chest breathing v/s diaphragmatic breathing",
      "What are Prana and Pranayama mean?",
      "Types of Pranayama practice",
      "What is Nadi?",
      "What are Ida, Pingala and Sushmana?",
      "Seven main practices of Pranayama",
      "Kapalbhati Pranayama",
      "Sheetali Pranayama",
      "Bhastrika Pranayama",
      "Sheetkari Pranayama",
      "Ujjai Pranayama",
      "Brahmari Pranayama",
      "Nadi Shodhna Pranayama",
      "Importance of Mudra according to Hatha Yoga",
      "Types of Mudra",
      "Practicum of Gyana & Chin Mudra",
      "Practicum of Ashwini Mudra",
      "Physical, Mental and Spiritual Benefits of Mudra"
    ]
  },
  {
    title: "Yoga Darshanam – Philosophy",
    content: [
      "What is Darshanam?",
      "What is Yoga?",
      "The five kosha (bodies)",
      "The four faculties of mind-field",
      "Five Stages of Mind-Field",
      "The four foundational Pillars of life",
      "Eight limbs of Yoga of Patanjali",
      "What is waking state in Yogic Science?",
      "What is dreaming state in Yogic Science?",
      "What is Deep sleep state in Yogic Science?"
    ]
  },
  {
    title: "Anatomy and physiology of Yogic practices",
    content: [
      "What is Yogic Anatomy and physiology?",
      "Understanding Anatomy in respect to Yoga",
      "Introduction of 10 major System in the Human Body",
      "Introduction to Skeletal System and its Significance",
      "Bones & Remodeling of Bones in Human Body",
      "How the Yogic Practices can help to improve the bone health",
      "Anatomy of Joint",
      "Types of Joints",
      "Cartilage, Ligaments & Tendons",
      "How to Protect the Joint while doing Practices",
      "Yogic Practices that improves Joint Health",
      "Introduction to Muscular System and its Significance",
      "Anatomy & Physiology of Muscles",
      "How the Muscles are build and Yogic view point",
      "Types of Muscles",
      "Movements of Muscles",
      "Muscle Contractions",
      "Muscle Movements",
      "Muscle Respiration & Muscle Fatigue",
      "Introduction of the Respiratory System and yogic breathing",
      "Anatomy & Physiology of Respiratory System",
      "Types of Breathing and its Importance",
      "Composition of Breath and its importance",
      "TLC and how its in actual scenario",
      "Gas Exchange Process and factor which impacts it",
      "Respiratory Diseases and Yogic Applications to help in improve the condition",
      "General FAQ for Students understanding"
    ]
  },
  {
    title: "Concentration and Meditation practices",
    content: [
      "What is Meditation?",
      "What is the difference between Dharana and Dhyana?",
      "What are types of Meditation",
      "Breath Awareness Meditation",
      "Mantra Awareness Meditation",
      "Candle and Inner Light Meditation",
      "Full moon Meditation"
    ]
  },
  {
    title: "Yoga Nidra (Conscious Yogic sleep)",
    content: [
      "What is Yoga Nidra?",
      "What is sleep?",
      "Four states of consciousness",
      "Benefits of deep sleep",
      "Yoga Nidra practices from Satyananda tradition",
      "How Yoga Nidra practices cure insomnia problems?",
      "Adjusting in Shavansana"
    ]
  },
  {
    title: "Principle of teaching Asana (Adjustment and Alignment)",
    content: [
      "Six steps of doing Asana correctly",
      "The fundamentals of practicing side extension, forward extension, backward extension and revolving action",
      "1. Side Extension",
      "Open pelvic",
      "Trikonasana",
      "Utthita parsvakonasana",
      "Close pelvic",
      "Parivritta trikonasana",
      "Virbhadrasana A",
      "2. Forward Bending",
      "Padangusthasana",
      "Paschimotanasana",
      "Janu Sirsasana",
      "Adho Mukha Swanasna",
      "3. Backward Bending",
      "Chakrasana",
      "Dhanurasana",
      "Urdhva Mukha Swanasna",
      "4. Revolving",
      "Twisting",
      "Ardha Matsyendrasana",
      "Vakrasana",
      "Marichyasana C",
      "5. Inversions",
      "Salamba Sarvangasana",
      "Shirshasana",
      "Viparita Karani",
      "Halasana",
      "6. Centering Posture",
      "Tadasana",
      "Dandasana",
      "How to correct postures verbally and by hands on adjustments",
      "Modifying the asana",
      "Various limitation, contra-indications and benefits of yoga asana"
    ]
  },
  {
    title: "Shat karma philosophy and practice",
    content: [
      "Introduction of Shat Kriya according to Hatha Yoga",
      "Practicum of Jal Neti and Sutra Neti (Cleansing Mucus or blockages from nasal passages and sinus)"
    ]
  },
  {
    title: "Mantra Yoga",
    content: [
      "Introduction of Mantra yoga",
      "Significance of (OM)-AUM",
      "Mantra for Meal Purification",
      "Mantra for Obstacles",
      "Mantra for universal masters to bless",
      "Mantra for Realization",
      "Mantra for well being"
    ]
  },
  {
    title: "Teaching Methodology",
    content: [
      "Disciplines of yoga teachers and students in yoga ashrams",
      "The scope of listening, presence, directive and non-directive dialogue",
      "How important is demonstration?",
      "What are the preparations for classroom?",
      "How to sequence the class?",
      "How to describe the practice, techniques, and delivery in teaching a class?",
      "Discussion on different types of lesson planning"
    ]
  }
];

export default function AboutTraining() {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const youtubeUrl = "https://www.youtube.com/watch?v=8AveOsMT7-A";

  return (
    <>
      {/* Section 1 - Best 200 Hour Yoga Teacher Training */}
<section className="py-16 px-6 md:px-20 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12 text-center">
      Best 200 Hour Yoga Teacher Training in Goa
    </h2>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      {/* Left Text Content */}
      <div className="flex flex-col h-full">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Our 200 Hour Yoga Teacher Training Program in Goa is a wonderful opportunity for beginner Yoga Practitioners. 
            We at Rishikul Yogshala offer a comprehensive 200 Hour Yoga Teacher Training Course in Goa for students who 
            want to begin their Yogic Journey. The 200 hours Yoga Teacher Training Program is a Multi Style - Multi Faceted 
            one combining the Classical Hatha Yoga to Dynamic Ashtanga Vinyasa Yoga as primary fields.
          </p>

          <p>
            Our yoga school offers holistic yoga program under the guidance of competent teachers who have International 
            teaching experience and value personal attention to students for better learning. The Yoga Philosophy taught 
            brings in different dimensions of Yoga into understanding and the Teaching Methodology sessions will equip 
            the students with technique, alignment, and modifications suited to be qualified and a good practitioner.
          </p>

          <p>
            Though participants who arrive at the course, belong to various physical and mental capabilities; nevertheless, 
            our 200 hour Yoga Alliance teacher training in Goa, is curated in such a way, that it may stand out from others 
            and become the best platform for the beginners and the intermediate practitioners.
          </p>

          <p>
            While you dedicate your valuable time in 200 Hour Yoga Teacher Training Course, it becomes our responsibility 
            to meet your needs with the best learning environment be it with facilities or staff too. If you seek the Best 
            Yoga School in Goa, your search ends at Rishikul Yogshala. We offer you an intensive curriculum, exposure to 
            yogic culture, picturesque landscape, and yogic food, which form your one-stop solution for classical learning 
            and discovery of yogic dimension within you.
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
            className="group block relative w-[550px] h-[630px]  overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-200 bg-black"
            aria-label="Open the Instagram Reel in a new tab"
          >
            {/* Portrait Thumbnail */}
            <img
              src="/aboutpics/Rishikul Yogshala Goa 1.jpg"
              alt="Instagram Reel: 200 Hour Yoga Teacher Training in Goa"
              className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105"
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
  style={{
    backgroundImage: "url('/aboutpics/curriculambg.png')",
  }}
>
  <div className="relative max-w-4xl mx-auto py-16 px-4 md:px-10 text-center">
    <div className="bg-white/50 rounded-lg shadow-md p-8 md:p-12 backdrop-blur-md">
      <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide uppercase">
        200 Hour Yoga Teacher Training Curriculum
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
        Explore our in-depth yoga curriculum designed to enhance your practice,
        teaching methodology, and spiritual journey.
      </p>

      <div className="space-y-3 text-left">
        {curriculumData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full px-5 py-3 bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center text-left"
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
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
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
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
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

'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface CurriculumItem {
  title: string;
  content: string[];
}

const curriculumData: CurriculumItem[] = [
  {
    title: "Hatha Yoga (Primary Series - Secondary Series)",
    content: [
      "Part-1",
      "What is Hatha Yoga?",
      "Surya Namaskar (with mantra awareness)",
      "Sukshma Vyayama (joint and gland exercises)",
      "Standing series of asana",
      "Kneeling series of asana",
      "Sitting series of asana",
      "Lying on stomach series of asana",
      "Lying on back series of asana",
      "Supine series of asana",
      "Asana benefits and contra-indications",
      "Asana list (examples): Tadasana; Triyak Tadasana; Parivrtta Tadasana; Trikonasana; Parivrtta Trikonasana; Parsvakonasana; Parivrtta Parsvakonasana; Virabhadrasana I & II; Utkatasana; Padangusthasana; Padahastasana; Prasarita Padottanasana A–D; Parsvottanasana; Vajrasana; Ustrasana; Paschimottanasana; Purvottanasana; Janu Sirsasana series; Marichyasana series; Bhujangasana; Shalabhasana; Dhanurasana; Setu Bandhasana; Urdhva Dhanurasana; Sarvangasana; Halasana; Karnapidasana; Sirsasana (as appropriate); Baddha Konasana; Upavistha Konasana; Supta Konasana; Supta Padangusthasana; Ubhaya Padangusthasana; Yoga Mudra; Padmasana; Utpluthi; Savasana",
      "Part-2",
      "Hatha Yoga — Intermediate sequence",
      "Chandra Namaskar (Moon salutation)",
      "Advanced series of joint and gland exercises",
      "Twisting series of asana",
      "Restorative asana",
      "Workshop on inversion asana",
      "Asana classes according to Patanjali (standing, seated, twists, backbends, inversions, pranayama and closing)"
    ]
  },
  {
    title: "Ashtanga Vinyasa Yoga (Primary Series - Secondary Series)",
    content: [
      "Part-1",
      "Primary Series explanation",
      "What is Vinyasa?",
      "9 Drishti in Ashtanga series",
      "Importance of Ujjayi and Bandhas in series",
      "Surya Namaskara A",
      "Surya Namaskara B",
      "Padangusthasana",
      "Padahastasana",
      "Utthita Trikonasana",
      "Parivrtta Trikonasana",
      "Utthita Parsvakonasana",
      "Parivrtta Parsvakonasana",
      "Prasarita Padottanasana A, B, C, D",
      "Parsvottanasana",
      "Utthita Hasta Padangusthasana A, B, C, D",
      "Ardha Baddha Padmottanasana",
      "Utkatasana",
      "Virabhadrasana A & B",
      "Dandasana",
      "Paschimottanasana (variations)",
      "Purvottanasana",
      "Ardha Baddha Padma Paschimottanasana",
      "Triang Mukha Eka Pada Paschimottanasana",
      "Janu Sirsasana A, B, C",
      "Marichyasana A, B, C, D",
      "Navasana",
      "Bhujapidasana",
      "Kurmasana",
      "Supta Kurmasana",
      "Garbha Pindasana",
      "Kukkutasana",
      "Baddha Konasana A & B",
      "Upavistha Konasana",
      "Supta Konasana",
      "Supta Padangusthasana A & B",
      "Ubhaya Padangusthasana",
      "Urdhva Mukha Paschimottanasana A & B",
      "Setu Bandhasana",
      "Urdhva Dhanurasana",
      "Paschimottanasana",
      "Salamba Sarvangasana",
      "Halasana",
      "Karnapidasana",
      "Urdhva Padmasana",
      "Pindasana",
      "Matsyasana",
      "Uttana Padasana",
      "Sirsasana",
      "Yoga Mudra",
      "Padmasana",
      "Utpluthi (Tolasana)",
      "Savasana",
      "Part-2",
      "Intense primary series practice (Mysore and lead class)",
      "Introduction to Intermediate Series (sample): Pashasana, Krounchasana, Salabhasana A & B, Bhekasana, Dhanurasana, Parsva Dhanurasana, Ustrasana, Laghu Vajrasana, Kapotasana A & B, Supta Vajrasana, Bakasana A & B, Bharadvajasana, Ardha Matsyendrasana, Eka Pada Sirsasana, Dwi Pada Sirsasana, Yoga Nidrasana, Tittibhasana A/B/C, Pincha Mayurasana, Karandavasana, Vatayanasana, Parighasana, Gomukhasana, Supta Urdhva Pada Vajrasana, Mukta Hasta Sirsasana A/B/C, Baddha Hasta Sirsasana A/B/C/D, Urdhva Dandasana, Viparita Dandasana",
      "Finishing Postures / Closing sequence",
      "Vinyasa workshop",
      "Guidelines for each asana",
      "Why no practice on Full & New Moon day"
    ]
  },
  {
    title: "Yoga Philosophy / Yoga Lifestyle (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "What is Darshanam?",
      "What is Yoga?",
      "The five Koshas (sheaths)",
      "The four faculties of mind-field",
      "The four foundational pillars of life",
      "Eight Limbs of Yoga of Patanjali",
      "What is waking state in Yogic Science?",
      "What is dreaming state in Yogic Science?",
      "What is deep sleep state in Yogic Science?",
      "Part-2",
      "Study of Yoga in connection with Bhagavad Gita",
      "Study of Karma Yoga, Bhakti Yoga, Raja Yoga, Jnana Yoga",
      "Study of Yoga in connection with Gita (applications)",
      "Karma and non-attachment with Yogic dimension",
      "Four levels of consciousness",
      "Keys for successful living in Yogic Science",
      "The Solar 24 Courses and their impact on us",
      "Obstacles in the path of Yoga",
      "Samkhya and its study"
    ]
  },
  {
    title: "Meditation",
    content: [
      "Part-1",
      "What is Meditation?",
      "What is the difference between Dharana and Dhyana?",
      "Types of Meditation",
      "Breath Awareness Meditation",
      "Contemplative Walking Meditation",
      "Mantra Awareness Meditation",
      "Candle and Inner Light Meditation",
      "Full Moon Meditation",
      "Part-2",
      "Obstacles in Meditation",
      "Witnessing Meditation",
      "Chakra Awareness Meditation",
      "Root Mantra Awareness Meditation",
      "Third Eye Meditation",
      "Meditation and meditative postures",
      "Introduction of Japa Yoga"
    ]
  },
  {
    title: "Pranayama and Bandhas (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "Chest breathing vs diaphragmatic breathing",
      "What do Prana and Pranayama mean?",
      "Types of Pranayama practices",
      "What is Kriya?",
      "What are Ida and Pingala?",
      "Seven main practices of Pranayama",
      "Part-2",
      "Introduction of Bandhas and their application in Pranayama",
      "Practicum: Mula Bandha, Uddiyana Bandha, Jalandhara Bandha, Maha Bandha",
      "Intensity of Kumbhaka (breath retention) and its importance",
      "Nadis and activities of Ida, Pingala & Sushumna",
      "Seven advanced practices: Sheetali, Sheetkari, Bhastrika, Bhramari, Ujjayi, Surya/Chandra Bhedana (as applicable), Nadi Shodhana"
    ]
  },
  {
    title: "Yoga Anatomy and Physiology (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "What is Yogic Anatomy and Physiology?",
      "Understanding Anatomy in respect to Yoga",
      "Introduction of 09 major systems in the human body",
      "Skeletal System: bones & remodeling; how yogic practices help bone health; types of joints; cartilage, ligaments & tendons; yogic practices that improve joint health; conclusion",
      "Muscular System: anatomy & physiology; how muscles are built (yogic view); types of muscles; movements & contractions; relaxation & fatigue; conclusion",
      "Respiratory System & yogic breathing: anatomy & physiology; types of breathing; composition of breath; CO₂ (TLC) in actual scenario; gas exchange & impact factors; respiratory diseases and yogic applications; conclusion",
      "Digestive System: anatomy & physiology; the 3 facts of the digestive system and how yoga improves them; yogic understanding; glands/hormones/enzyme secretion; common disorders and yogic applications; conclusion",
      "Nervous System: anatomy & physiology; behavior from a yogic lens; sympathetic & parasympathetic functions; role of stress management, meditation & asana; conclusion",
      "Endocrine System (Chakras): glands and chakra relation; 7 major glands; how hormones work; common endocrine disorders and yogic solutions; conclusion",
      "Cardiovascular System: anatomy & physiology of the heart; cardio‑respiratory coordination; blood and its yogic significance; how energies and blood flow affect function; common issues and yogic applications; conclusion",
      "General FAQs for students’ understanding",
      "Part-2",
      "Recap and continued study of Skeletal, Muscular, Respiratory, Digestive, Nervous, Endocrine and Cardiovascular systems with practical yogic applications"
    ]
  },
  {
    title: "Adjustment and Alignment (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "5 steps of doing asana correctly",
      "Fundamentals of side/forward/backward extension and revolving actions",
      "Side extension — Open pelvic: Utthita Parsvakonasana, Utthita Trikonasana, Prasarita Padottanasana A",
      "Side extension — Close pelvic: Parivrtta Trikonasana, Virabhadrasana A (examples)",
      "Forward bending: Padangusthasana, Paschimottanasana, Janu Sirsasana, Adho Mukha Svanasana",
      "Backward bending: Chakrasana, Dhanurasana, Urdhva Mukha Svanasana",
      "Revolving/Twisting: Ardha Matsyendrasana, Vakrasana, Marichyasana C",
      "Inversions: Sarvangasana, Sirsasana, Viparita Karani, Halasana",
      "Centering postures: Tadasana, Dandasana",
      "How to correct postures verbally and by hands-on adjustments",
      "Modifying the asana",
      "Limitations, contra-indications and benefits of yoga asana",
      "Part-2 (Ashtanga Primary Series Workshop)",
      "Workshop on Standing Asana",
      "Workshop on Seated Asana",
      "Workshop on Core Series",
      "Workshop on Back Bends",
      "Workshop on Closing Series",
      "Hands-on adjustments and modifications of Asana — Primary Series"
    ]
  },
  {
    title: "Mantra (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "Introduction of Mantra Yoga",
      "Importance of OM/AUM",
      "Mantra for mind purification",
      "Mantra for obstacles",
      "Mantra for unavoidable miseries in life",
      "Mantra for well-being",
      "Part-2",
      "Introduction of Ajapa Japa",
      "Importance of So‑Hum",
      "Invocation Mantra for Patanjali",
      "Bija Mantra",
      "Mantra for awakening wisdom",
      "Correct chanting and accent of Mantra",
      "Mantra for divine love between teacher and student"
    ]
  },
  {
    title: "Mudra (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "Importance of Mudra according to Hatha Yoga",
      "Types of Mudra",
      "Practicum of Gyana & Chin Mudra",
      "Practicum of Ashwini Mudra",
      "Physical, mental and spiritual benefits of Mudra",
      "Part-2",
      "Practicum of Asana Mudra",
      "Practicum on Prana Mudra",
      "Practicum on Psychic Mudra",
      "Preparation of Mudra for Bandhas",
      "Meaning of Yoga Mudra"
    ]
  },
  {
    title: "Yoga Nidra (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "What is sleep?",
      "Three states of consciousness",
      "Benefits of deep sleep",
      "What is Yoga Nidra?",
      "Yoga Nidra practices from Satyananda tradition",
      "Yoga Nidra practices from Bihar School of Yoga and Himalayan Tradition",
      "Part-2",
      "Role of Yoga Nidra in developing intuition",
      "Yoga Nidra practices from Satyananda Tradition",
      "Yoga Nidra and its common assumptions",
      "Adjusting in Savasana"
    ]
  },
  {
    title: "Shatkriya (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "Introduction of Shat Kriya according to classical Hatha Yoga",
      "Introduction of Jala Neti and Sutra Neti (cleaning mucus or blockages from nasal passages and sinus)",
      "Part-2",
      "Introduction to Trataka (preparation and technique; concentration and improving eyesight with candle gazing)",
      "Introduction and discussion on Shankhaprakshalana (for cleansing of lower abdomen)",
      "Practicum on Agnisar Kriya and Nauli Kriya",
      "Practicum of Kapalbhati"
    ]
  },
  {
    title: "Teaching Methodology (Beginner Level - Advanced Level)",
    content: [
      "Part-1",
      "Disciplines of yoga teachers and students",
      "The scope of listening, presence, directive and non-directive dialogue",
      "How important is demonstration?",
      "What are the preparations for classroom?",
      "How to describe the practice, technique, and delivery in teaching a class?",
      "Discussion on different types of lesson planning",
      "Part-2",
      "Building a social relationship between Teachers and Students",
      "Inspiring and motivating in difficult situations",
      "Developing confidence while teaching and sharing the Yogic Practices",
      "Teaching with multi‑style lesson plan and instructing skills",
      "Benefits and limitations",
      "Delivering effective feedback to aspirants"
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
      {/* Section 1 - Best 50 Hour Yoga Teacher Training */}
<section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12 text-center">
          Best 500 Hour Yoga Teacher Training in Goa
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Text Content */}
          <div className="flex flex-col h-full">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Rishikul Yogshala Goa provides every student an opportunity for a profound learning and a journey of
                self-exploration with a curriculum connecting different dimensions of Yoga — from Hatha Yoga and Ashtanga
                Vinyasa to Pranayama, Meditation, and many more.
              </p>

              <p>
                As a Yoga Alliance International accredited centre, Rishikul Yogshala ensures a high level of
                professionalism in yoga teaching, guided by well-experienced trainers dedicated to your growth as a
                skilled yogi. So, let Rishikul Yogshala be by your side during this holistic journey.
              </p>

              <p>
                Our 500 Hour Yoga Teacher Training in Rishikesh basically involves two parts — the first month covers the
                foundational 200 Hour Yoga Teacher Training syllabus, and the second month continues with the intensive
                300 Hour Yoga Teacher Training.
              </p>

              <p>
                The 500 Hour program is an immersive course that guides students from their initial understanding of the
                core yoga concepts through theory and practical sessions, progressively shaping them into skilled
                practitioners and competent yoga teachers.
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
                className="group block relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-500 bg-black rounded-xl"
                aria-label="Open the Instagram Reel in a new tab"
              >
                {/* Portrait Thumbnail */}
                <img
                  src="/aboutpics/about500.jpg"
                  alt="Instagram Reel: 500 Hour Yoga Teacher Training in Goa"
                  className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Centered Play Button */}
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md transition duration-500 group-hover:bg-gray-500">
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
        500 Hour Yoga Teacher Training Curriculum
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

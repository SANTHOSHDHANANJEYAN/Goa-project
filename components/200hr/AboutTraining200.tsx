'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const curriculumData = [
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
    content: []
  },
  {
    title: "Concentration and Meditation practices",
    content: []
  },
  {
    title: "Yoga Nidra (Conscious Yogic sleep)",
    content: []
  },
  {
    title: "Principle of teaching Asana (Adjustment and Alignment)",
    content: []
  },
  {
    title: "Shat karma philosophy and practice",
    content: []
  },
  {
    title: "Mantra Yoga",
    content: []
  },
  {
    title: "Teaching Methodology",
    content: []
  }
];

export default function AboutTraining() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      {/* Section 1 - Best 200 Hour Yoga Teacher Training */}
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-8 text-center">
            Best 200 Hour Yoga Teacher Training in Goa
          </h2>
          
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
      </section>

      {/* Section 2 - Curriculum */}
      <section className="py-16 px-6 md:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-8 text-center">
            200 Hour Yoga Teacher Training Curriculum
          </h2>
          
          <div className="space-y-4">
            {curriculumData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors duration-200 
                           flex justify-between items-center text-left"
                >
                  <span className="text-lg font-medium text-[#150e70]">{item.title}</span>
                  {openDropdowns[index] ? (
                    <FaChevronUp className="text-[#150e70] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-[#150e70] flex-shrink-0" />
                  )}
                </button>
                
                {openDropdowns[index] && item.content.length > 0 && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <ul className="space-y-2">
                      {item.content.map((contentItem, contentIndex) => (
                        <li key={contentIndex} className="text-gray-700 flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span>{contentItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {openDropdowns[index] && item.content.length === 0 && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-500 italic">Content coming soon...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

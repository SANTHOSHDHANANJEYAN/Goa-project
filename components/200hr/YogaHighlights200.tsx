'use client';
import React from 'react';
import { FaLeaf, FaStar } from 'react-icons/fa';

const idealFor: string[] = [
  "Yoga enthusiast who wants to deepen your practice and understand yoga on a more meaningful level.",
  "If you’re considering becoming a certified yoga instructor, but want to ease into the training with a shorter course.",
  "If you’re a practicing instructor seeking ways to refine your teaching techniques, refresh knowledge, or explore a new yoga style.",
  "If you’re looking for personal growth and an immersive yoga experience in a supportive community.",
];

const trainingHighlights: string[] = [
  "Equal emphasis on philosophy, anatomy, and physical practice",
  "Yoga Sutras, Vedanta, Samkhya, and other modern philosophies",
  "Traditional Ashtanga Vinyasa yoga course",
  "Primary series taught with Sanskrit counting",
  "An intensive course hosted by an international team of yogis and yoga masters",
  "Practice yoga in the land of its origin and experience true Vedic culture",

];

const YogaHighlights: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white to-[#4377B2]/10 py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-14">
        Discover What Makes Our 24-Days YTTC Special
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Ideal For */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-[#150e70]">
          <h3 className="text-2xl font-semibold text-[#150e70] mb-6">Who Is This Course For?</h3>
          <ul className="space-y-4">
            {idealFor.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaLeaf className="text-[#150e70] mt-1" />
                <span className="text-[#150e70]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Training Highlights */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-[#150e70]">
          <h3 className="text-2xl font-semibold text-[#150e70] mb-6">Training Highlights</h3>
          <ul className="space-y-4">
            {trainingHighlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaStar className="text-[#150e70] mt-1" />
                <span className="text-[#150e70]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YogaHighlights;

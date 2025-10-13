import React from 'react';

export default function DailySchedule21() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 text-[#262626] font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#150e70] text-center leading-snug">
          Here's a Sample Curriculum and Syllabus for a 21-Day Intensive Yoga Immersion Program
        </h2>

        {/* Week 1 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#150e70] mb-4">Week 1: Foundations</h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-800">
            <li>Introduction to Yoga Philosophy</li>
            <li>Basic Asanas (postures)</li>
            <li>Pranayama (breathing techniques)</li>
            <li>Meditation and Relaxation</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#150e70] mb-4">Week 2: Balance and Alignment</h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-800">
            <li>Dynamic Flow Sequences</li>
            <li>Balancing and Alignment Techniques</li>
            <li>Yin Yoga for Deep Relaxation</li>
            <li>Mindfulness and Self-Awareness</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#150e70] mb-4">Week 3: Inner Transformation</h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-800">
            <li>Advanced Asanas and Variations</li>
            <li>Kundalini Awakening and Energy Work</li>
            <li>Yoga Nidra for Deep Relaxation</li>
            <li>Meditation and Inner Reflection</li>
          </ul>
        </div>

        {/* Special Sessions */}
        <div>
          <h3 className="text-2xl font-semibold text-[#150e70] mb-4">Special Sessions</h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-800">
            <li>Yoga and Ayurveda</li>
            <li>Yoga and Emotional Intelligence</li>
            <li>Yoga and Mindful Living</li>
          </ul>
        </div>

        {/* Syllabus */}
        <div>
          <h3 className="text-2xl font-semibold text-[#150e70] mb-4">Syllabus</h3>

          <div className="space-y-6 text-gray-800 text-base sm:text-lg">
            <div>
              <h4 className="font-semibold text-[#150e70] mb-2">Day 1–3: Introduction and Foundations</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Introduction to yoga philosophy and history</li>
                <li>Basic asanas and pranayama techniques</li>
                <li>Meditation and relaxation practices</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#150e70] mb-2">Day 4–7: Balance and Alignment</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Dynamic flow sequences and balancing techniques</li>
                <li>Yin yoga for deep relaxation</li>
                <li>Mindfulness and self-awareness practices</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#150e70] mb-2">Day 8–14: Inner Transformation</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Advanced asanas and variations</li>
                <li>Yoga Nidra for deep relaxation</li>
                <li>Meditation and inner reflection</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#150e70] mb-2">Day 15–21: Integration and Application</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Applying yoga principles to daily life</li>
                <li>Kundalini awakening and energy work</li>
                <li>Yoga and Ayurveda</li>
                <li>Yoga and emotional intelligence</li>
                <li>Final project and reflection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

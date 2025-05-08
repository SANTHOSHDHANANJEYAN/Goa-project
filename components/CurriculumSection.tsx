import React from "react";

const CurriculumSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">Curriculum Overview</h2>
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        <ul className="space-y-2">
          <li>✓ Asana techniques & alignment</li>
          <li>✓ Yoga philosophy & ethics</li>
          <li>✓ Teaching methodology</li>
          <li>✓ Anatomy & physiology</li>
        </ul>
        <ul className="space-y-2">
          <li>✓ Meditation & pranayama</li>
          <li>✓ Practice teaching sessions</li>
          <li>✓ Class sequencing & theming</li>
          <li>✓ Business of yoga</li>
        </ul>
      </div>
    </section>
  );
};

export default CurriculumSection;

import React from 'react';

const Program: React.FC = () => {
  const scheduleData = [
    {
      day: "Day 1",
      title: "Arrival & Introduction",
      activities: [
        "Welcome ceremony and orientation",
        "Introduction to yoga philosophy",
        "Gentle evening yoga session",
        "Welcome dinner and social gathering"
      ]
    },
    {
      day: "Day 2",
      title: "Foundation of Asanas",
      activities: [
        "Morning meditation and pranayama",
        "Hatha yoga fundamentals",
        "Ayurvedic lunch and nutrition talk",
        "Evening restorative yoga practice"
      ]
    },
    {
      day: "Day 3",
      title: "Deepening the Practice",
      activities: [
        "Sunrise beach meditation",
        "Ashtanga yoga primary series",
        "Free time for beach relaxation",
        "Evening yoga nidra session"
      ]
    },
    {
      day: "Day 4",
      title: "Mindfulness & Balance",
      activities: [
        "Morning pranayama techniques",
        "Balancing poses workshop",
        "Mindful walking meditation",
        "Evening Yin yoga practice"
      ]
    },
    {
      day: "Day 5",
      title: "Cultural Immersion",
      activities: [
        "Morning vinyasa flow",
        "Visit to local temple",
        "Traditional Indian cooking class",
        "Kirtan and chanting session"
      ]
    },
    {
      day: "Day 6",
      title: "Self-Discovery",
      activities: [
        "Sunrise self-practice",
        "Chakra balancing workshop",
        "Personal reflection time",
        "Candlelight meditation"
      ]
    },
    {
      day: "Day 7",
      title: "Integration & Departure",
      activities: [
        "Final group yoga practice",
        "Closing ceremony and sharing circle",
        "Personal practice planning session",
        "Farewell lunch and departures"
      ]
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 mt-[3rem]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Retreat Program
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            A transformative 7-day journey of yoga, meditation, and self-discovery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-emerald-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Daily Schedule</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">6:00 AM</span>
                  <span className="text-gray-700">Morning bell & tea</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">6:30 AM</span>
                  <span className="text-gray-700">Meditation & pranayama</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">7:30 AM</span>
                  <span className="text-gray-700">Yoga asana practice</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">9:30 AM</span>
                  <span className="text-gray-700">Breakfast</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">11:00 AM</span>
                  <span className="text-gray-700">Workshop / Activity</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">1:00 PM</span>
                  <span className="text-gray-700">Lunch</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">2:00 PM</span>
                  <span className="text-gray-700">Free time / Beach</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">4:30 PM</span>
                  <span className="text-gray-700">Evening yoga session</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">6:30 PM</span>
                  <span className="text-gray-700">Dinner</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-emerald-700 w-24">8:00 PM</span>
                  <span className="text-gray-700">Evening program / Meditation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">What to Bring</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Comfortable yoga clothes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Yoga mat (or rent one from us)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Sunscreen and insect repellent</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Light, breathable clothing for warm weather</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Notebook and pen for reflections</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Reusable water bottle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Swimwear and beach towel</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed mb-8">
              Our program is carefully designed to provide a balanced experience of yoga practice, meditation, relaxation, and cultural immersion. Each day brings new learnings and experiences that build upon each other.
            </p>
            
            <div className="space-y-8">
              {scheduleData.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-emerald-800">{item.day}</h3>
                    <span className="text-sm font-medium text-white bg-emerald-600 px-3 py-1 rounded-full">
                      {item.title}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
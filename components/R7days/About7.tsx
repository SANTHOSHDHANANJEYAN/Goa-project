import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 ">
      <div className="container mx-auto pr-[3.5rem] pl-[3.5rem] ">
        <div className="max-w-3xl mx-auto text-center mb-[3rem] mt-[3rem]">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            About Our Retreat
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Discover tranquility and inner harmony in the beautiful coastal paradise of Goa, India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Rishikul Yogshala's 7-Day Yoga Retreat in Goa, where ancient yogic wisdom meets the serene beauty of India's coastal paradise. Our retreat is designed to help you disconnect from the stresses of daily life and reconnect with your inner self.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This transformative week combines traditional Hatha and Ashtanga yoga practices with meditation, pranayama, and Ayurvedic therapies. Whether you're a beginner or an experienced practitioner, our skilled instructors will guide you through a journey of self-discovery and holistic wellbeing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Set against the backdrop of Goa's stunning beaches, our retreat offers the perfect environment for deepening your practice while enjoying the natural beauty of your surroundings. Join us for a week of renewal, growth, and blissful relaxation.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Key Benefits:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Stress reduction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Improved flexibility</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Enhanced mindfulness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Better sleep quality</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Increased energy levels</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Holistic healing</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/schedule.jpg" 
              alt="Yoga practice by the beach in Goa" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-10 -left-10 hidden md:block">
              <img 
                src="https://images.pexels.com/photos/8436612/pexels-photo-8436612.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Meditation at sunrise" 
                className="rounded-lg shadow-lg w-48 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
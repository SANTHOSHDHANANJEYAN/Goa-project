"use client"


import React, { useState } from 'react';

const Accommodation7: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'accommodation' | 'facilities' | 'meals'>('accommodation');
  
  const accommodationOptions = [
    {
      title: "Shared Room",
      description: "Comfortable shared accommodation with 2-3 people per room, perfect for those looking to connect with fellow yogis.",
      image: "https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1600",
      features: ["Twin/triple beds", "Shared bathroom", "Fan cooling", "Daily housekeeping"]
    },
    {
      title: "Private Room",
      description: "Peaceful private rooms for those seeking solitude and personal space during their retreat journey.",
      image: "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=1600",
      features: ["Queen bed", "Private bathroom", "Air conditioning", "Work desk", "Daily housekeeping"]
    },
    {
      title: "Beachfront Cottage",
      description: "Premium beachfront cottages with stunning ocean views, offering the ultimate retreat experience.",
      image: "https://images.pexels.com/photos/4577272/pexels-photo-4577272.jpeg?auto=compress&cs=tinysrgb&w=1600",
      features: ["King bed", "Private bathroom", "Air conditioning", "Private veranda", "Ocean view", "Premium amenities"]
    }
  ];

  return (
    <section id="accommodation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Your Stay in Paradise
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Comfortable accommodations in a tranquil setting for your perfect yoga getaway
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <button
            className={`px-6 py-3 font-medium rounded-t-lg transition-colors mr-1 ${
              activeTab === 'accommodation' 
                ? 'bg-white text-emerald-700 border-t border-l border-r border-gray-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('accommodation')}
          >
            Accommodation
          </button>
          <button
            className={`px-6 py-3 font-medium rounded-t-lg transition-colors mr-1 ${
              activeTab === 'facilities' 
                ? 'bg-white text-emerald-700 border-t border-l border-r border-gray-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('facilities')}
          >
            Facilities
          </button>
          <button
            className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
              activeTab === 'meals' 
                ? 'bg-white text-emerald-700 border-t border-l border-r border-gray-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('meals')}
          >
            Meals & Cuisine
          </button>
        </div>
        
        {/* Accommodation content */}
        {activeTab === 'accommodation' && (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accommodationOptions.map((option, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.title} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <h4 className="font-medium text-emerald-700 mb-2">Amenities:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Facilities content */}
        {activeTab === 'facilities' && (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Yoga retreat facilities" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-emerald-800 mb-6">Resort Facilities</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Yoga Spaces</h4>
                    <p className="text-gray-700">
                      Our retreat features multiple yoga spaces, including a beachfront shala with ocean views and an indoor air-conditioned studio. All spaces are fully equipped with mats, blocks, straps, and bolsters.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Swimming Pool</h4>
                    <p className="text-gray-700">
                      Relax and rejuvenate in our freshwater swimming pool surrounded by tropical gardens, perfect for cooling off between sessions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Spa & Wellness</h4>
                    <p className="text-gray-700">
                      Indulge in therapeutic treatments at our on-site Ayurvedic spa, offering massages, body scrubs, and traditional healing therapies.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Meditation Garden</h4>
                    <p className="text-gray-700">
                      Find peace in our dedicated meditation garden with secluded seating areas perfect for personal practice and reflection.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Beach Access</h4>
                    <p className="text-gray-700">
                      Direct access to the pristine beach is just steps away from your accommodation, offering opportunities for sunrise meditation and sunset walks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Meals content */}
        {activeTab === 'meals' && (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-emerald-800 mb-6">Nourishing Cuisine</h3>
                <p className="text-gray-700 mb-6">
                  At our retreat, food is considered medicine for the body and soul. We serve fresh, locally-sourced vegetarian and vegan meals that support your yoga practice and overall wellbeing.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Sattvic Cooking</h4>
                    <p className="text-gray-700">
                      Our meals follow sattvic principles, focusing on fresh fruits, vegetables, whole grains, legumes, nuts, seeds, and dairy. These pure foods promote clarity of mind and lightness in body.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Dietary Accommodations</h4>
                    <p className="text-gray-700">
                      We happily accommodate various dietary needs including gluten-free, dairy-free, and vegan requirements. Please inform us of any special dietary needs upon registration.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Sample Menu</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-medium">Breakfast:</span> Fresh fruit, herbal tea, porridge, homemade granola with yogurt, fresh juices</li>
                      <li><span className="font-medium">Lunch:</span> Rice, dal, mixed vegetable curry, chapati, salad, pickle</li>
                      <li><span className="font-medium">Dinner:</span> Quinoa salad, vegetable soup, steamed vegetables, tofu curry</li>
                      <li><span className="font-medium">Snacks:</span> Fresh fruits, nuts, herbal teas, coconut water</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/5956353/pexels-photo-5956353.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Healthy vegetarian food" 
                  className="rounded-lg shadow-md w-full h-auto mb-6"
                />
                <img 
                  src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Fresh fruit and breakfast" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Accommodation7;
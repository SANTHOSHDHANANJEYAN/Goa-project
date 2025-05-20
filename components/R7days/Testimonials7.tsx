import React, { useState } from 'react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;
}

const Testimonials7: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      quote: "The 7-day yoga retreat in Goa was truly transformative. The instructors were knowledgeable and supportive, the location was paradise, and I left feeling renewed in body and spirit. I've already booked for next year!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Michael Chen",
      location: "Vancouver, Canada",
      quote: "As a beginner to yoga, I was nervous about attending a retreat, but the team at Rishikul Yogshala made me feel welcome from day one. The pace was perfect, and I learned so much about not just yoga, but mindful living.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Priya Sharma",
      location: "Melbourne, Australia",
      quote: "This was my third retreat with Rishikul Yogshala, and it was the best yet. The combination of yoga, meditation, and being steps away from the beach created the perfect environment for deepening my practice.",
      image: "https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Thomas Mueller",
      location: "Berlin, Germany",
      quote: "The retreat offered the perfect balance of structured practice and free time. I particularly enjoyed the Ayurvedic consultations and treatments that complemented the yoga sessions. A holistic experience I would recommend to anyone.",
      image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Emma Wilson",
      location: "New York, USA",
      quote: "I came to the retreat burnt out from my corporate job and left with renewed energy and practical tools to maintain balance in my daily life. The beachfront location and delicious vegetarian food were incredible bonuses!",
      image: "https://images.pexels.com/photos/4551058/pexels-photo-4551058.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Transformative Experiences
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Hear what our past participants have to say about their retreat experience
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg p-8 md:p-10 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-emerald-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <blockquote className="relative">
                      <svg className="absolute left-0 top-0 w-10 h-10 text-emerald-200 -ml-6 -mt-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                      </svg>
                      <p className="text-gray-700 text-lg italic leading-relaxed ml-4">{testimonial.quote}</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md text-emerald-700 hover:text-emerald-500  focus:outline-none md:-translate-x-6"
            onClick={prev}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md text-emerald-700 hover:text-emerald-500  focus:outline-none md:translate-x-6"
            onClick={next}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full  ${
                  active === index ? 'bg-emerald-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActive(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials7;
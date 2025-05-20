"use client"

import React, { useState } from 'react';

interface PricingOption {
  title: string;
  price: string;
  accommodation: string;
  features: string[];
  popular?: boolean;
}

const Pricing7: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'INR'>('USD');
  
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    INR: 83.5
  };
  
  const symbols = {
    USD: '$',
    EUR: '€',
    INR: '₹'
  };
  
  const formatPrice = (usdPrice: number): string => {
    const price = usdPrice * exchangeRates[selectedCurrency];
    
    if (selectedCurrency === 'INR') {
      return `${symbols[selectedCurrency]}${Math.round(price).toLocaleString()}`;
    }
    
    return `${symbols[selectedCurrency]}${price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };
  
  const pricingOptions: PricingOption[] = [
    {
      title: "Basic Package",
      price: formatPrice(699),
      accommodation: "Shared Room",
      features: [
        "All yoga and meditation classes",
        "Shared accommodation (2-3 per room)",
        "3 vegetarian meals daily",
        "Daily morning tea/coffee",
        "Welcome kit with yoga essentials",
        "Beach excursion",
        "Airport transfers"
      ]
    },
    {
      title: "Standard Package",
      price: formatPrice(999),
      accommodation: "Private Room",
      features: [
        "All yoga and meditation classes",
        "Private room accommodation",
        "3 vegetarian meals daily",
        "Daily morning tea/coffee",
        "Welcome kit with yoga essentials",
        "Beach excursion",
        "1 Ayurvedic massage session",
        "Cooking class",
        "Airport transfers"
      ],
      popular: true
    },
    {
      title: "Premium Package",
      price: formatPrice(1499),
      accommodation: "Beachfront Cottage",
      features: [
        "All yoga and meditation classes",
        "Luxury beachfront cottage",
        "3 vegetarian meals daily",
        "Daily morning tea/coffee",
        "Welcome kit with premium yoga essentials",
        "Beach excursion",
        "2 Ayurvedic massage sessions",
        "Personal yoga consultation",
        "Cooking class",
        "Local cultural tour",
        "Airport transfers with premium service"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Retreat Packages
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-6">
            Choose the perfect package for your yoga journey
          </p>
          
          {/* Currency selector */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
              {(['USD', 'EUR', 'INR'] as const).map((currency) => (
                <button
                  key={currency}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    selectedCurrency === currency
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCurrency(currency)}
                >
                  {currency}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                option.popular ? 'border-2 border-emerald-500 md:scale-105' : 'border border-gray-200'
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-2 -translate-y-1">
                    POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.accommodation}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-emerald-700">{option.price}</span>
                  <span className="text-gray-500 ml-2">/ person</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                    option.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Upcoming Retreat Dates</h3>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                <p className="text-emerald-800 font-medium mb-1">January 15-21, 2025</p>
                <p className="text-gray-600 text-sm">New Year Rejuvenation</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                <p className="text-emerald-800 font-medium mb-1">February 10-16, 2025</p>
                <p className="text-gray-600 text-sm">Heart Opening Journey</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                <p className="text-emerald-800 font-medium mb-1">March 5-11, 2025</p>
                <p className="text-gray-600 text-sm">Spring Awakening</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                <p className="text-emerald-800 font-medium mb-1">April 20-26, 2025</p>
                <p className="text-gray-600 text-sm">Earth Day Special</p>
              </div>
            </div>
            
            <div className="mt-6 text-gray-700">
              <p>Custom dates available for groups of 8 or more. Contact us for details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing7;
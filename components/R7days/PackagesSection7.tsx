const packages = [
  {
    title: "Stress Management Through Yoga & Meditation",
    description:
      "Step away from the noise and return to calm. This healing programme blends yoga, mindfulness, breathwork, and energy therapies to soothe the nervous system, ease emotional tension, and help you reconnect with clarity, resilience, and inner peace.",
    image: "/images/stress-mgmt.jpg",
  },
  {
    title: "Panchkarma Detox Programme",
    description:
      "Rooted in Ayurvedic tradition, this personalised panchakarma cleanse offers deep purification through daily treatments, sattvic meals, and coastal calm. Whether for detox or full rejuvenation, experience balance, clarity, and renewal—guided by nature and crafted with care.",
    image: "/images/panchkarma.jpg",
  },
];

const PackagesSection7 = () => {
  return (
    <section className="bg-[#f9f6ef] py-20 px-6 lg:px-16">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Column */}
        <div className="md:col-span-1">
          <h4 className="text-sm uppercase text-gray-700 mb-2">
            Find your experience. Book your journey.
          </h4>
          <h2 className="text-4xl font-serif mb-4">Packages</h2>
          <p className="text-gray-700 mb-6">
            Tailored wellness packages in Goa for all. Nalanda’s retreats offer effortless luxury,
            expert guidance, and transformative journeys—designed for you.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-black font-semibold"
          >
            <span className="border border-black rounded-full w-7 h-7 flex items-center justify-center">
              →
            </span>
            BOOK PACKAGES
          </a>
        </div>

        {/* Package Cards */}
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold font-serif mb-3">{pkg.title}</h3>
              <p className="text-gray-700 mb-6">{pkg.description}</p>
              <div className="flex gap-4">
                <button className="bg-[#f8e7d5] text-black px-4 py-2 rounded-full text-sm font-semibold">
                  ← MORE DETAILS
                </button>
                <button className="bg-[#f8e7d5] text-black px-4 py-2 rounded-full text-sm font-semibold">
                  → BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection7;

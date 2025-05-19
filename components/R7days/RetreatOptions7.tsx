const RetreatOptions7 = () => {
  const retreats = [
    {
      title: "Host A Retreat",
      description:
        "Host a yoga retreat where wisdom thrives. Nalanda offers a seamless, oceanfront sanctuary for teachers to inspire, transform, and elevate.",
      image: "/images/host-retreat.jpg", // Place your image in /public/images/
      link: "#",
    },
    {
      title: "Join a Retreat",
      description:
        "Step into a sanctuary of growth with our yoga and meditation courses in India. At Nalanda, expert-led retreats guide you to clarity, mastery, and transformation.",
      image: "/images/join-retreat.jpg", // Place your image in /public/images/
      link: "#",
    },
  ];

  return (
    <section className="bg-[#f9f6ef] py-16 px-6 lg:px-20">
      <div className="grid md:grid-cols-2 gap-8">
        {retreats.map((retreat, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden h-[400px] group"
          >
            <img
              src={retreat.image}
              alt={retreat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex flex-col justify-end text-white">
              <div className="text-3xl font-serif mb-2">{retreat.title}</div>
              <p className="text-sm mb-4">{retreat.description}</p>
              <a href={retreat.link} className="inline-flex items-center gap-2 font-medium text-white hover:underline">
                <span className="inline-block border border-white rounded-full w-6 h-6 flex items-center justify-center">
                  →
                </span>
                DISCOVER MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetreatOptions7;

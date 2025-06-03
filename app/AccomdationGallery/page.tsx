"use client"

export default function AccomdationGallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    // Add more image URLs
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

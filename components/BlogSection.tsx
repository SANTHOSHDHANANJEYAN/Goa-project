'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allPosts = [
  {
    title: "Ultimate Guide to 200-Hour Yoga TTC in Goa",
    excerpt:
      "Goa, known for its stunning beaches, vibrant culture, and laid-back vibe, is also a haven for those looking to deepen their yoga journey.",
    image: "/b2.jpg",
    date: "December 10, 2024",
    link: "/blogs/C2",
  },
  {
    title: "11 Reasons Why You Should Start Fasting",
    excerpt:
      "When we wake up, we step into a new chance to live healthy. Learn how fasting transforms your mind and body.",
    image: "/b1.jpg",
    date: "December 10, 2024",
    link: "/blogs/C3",
  },
  {
    title: "Healing Through Sound: A Beginner’s Guide",
    excerpt:
      "Sound therapy uses vibrations to heal the mind and body. Discover how it can create harmony within.",
    image: "/b3.jpg",
    date: "December 10, 2024",
    link: "/blogs/CD",
  },
  {
    title: "Benefits of Daily Meditation",
    excerpt: "Daily meditation helps manage stress, increase focus, and improve overall wellbeing.",
    image: "/b4.jpg",
    date: "December 9, 2024",
    link: "/blogs/B1",
  },
  {
    title: "Yoga for Beginners: Common Mistakes to Avoid",
    excerpt: "Starting yoga? Here are the 5 beginner mistakes that could slow your growth.",
    image: "/b5.jpg",
    date: "December 8, 2024",
    link: "/blogs/B2",
  },
  {
    title: "Spiritual Retreats in Rishikesh",
    excerpt: "Explore the peaceful world of spiritual retreats and their benefits.",
    image: "/b6.jpg",
    date: "December 7, 2024",
    link: "/blogs/B3",
  },
];

const POSTS_PER_PAGE = 3;

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-20 bg-transparent mt-[4rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#150e70] mb-4">
            From Our Blog
          </h2>
          <p className="text-lg text-[#150e70] max-w-2xl mx-auto">
            Insights, stories, and guidance from our community to inspire your yoga journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {selectedPosts.map((post) => (
            <div
              key={post.title}
              className="rounded-2xl overflow-hidden shadow-lg bg-white group transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="transition-transform duration-500 group-hover:scale-105 object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-400">{post.date}</span>
                <h3 className="mt-2 text-2xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                {post.link ? (
                  <Link
                    href={post.link}
                    className="inline-block mt-4 text-[#150e70] hover:underline font-medium"
                  >
                    Read More »
                  </Link>
                ) : (
                  <span className="inline-block mt-4 text-gray-400 cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center gap-2 text-indigo-800 font-medium">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === 1
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-indigo-100 hover:bg-indigo-200'
            }`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded-full ${
                currentPage === i + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-100 hover:bg-indigo-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === totalPages
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-indigo-100 hover:bg-indigo-200'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

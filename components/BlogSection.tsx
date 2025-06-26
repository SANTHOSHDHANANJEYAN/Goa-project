import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  link?: string;
}

const posts: BlogPost[] = [
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
];

const BlogSection: React.FC = () => {
  return (
    <section className="pt-[3rem] pb-[3rem] bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#150e70] mb-4">
            Our Journal
          </h2>
          <p className="text-lg text-[#150e70] max-w-2xl mx-auto">
            Insights, stories, and guidance from our community to inspire your yoga journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.title}
              className="rounded-2xl overflow-hidden shadow-lg bg-white group transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
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
      </div>
    </section>
  );
};

export default BlogSection;

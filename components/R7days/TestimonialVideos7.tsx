'use client';
import { useState } from 'react';
import Image from "next/image";
import { Dialog } from '@headlessui/react';

const videos = [
  {
    thumbnail: '/videos/thumb1.jpg',
    videoUrl: 'https://www.youtube.com/embed/0L8pv3fixrg?si=FKn7QFeH2gm6uCVu" ',
  },
  {
    thumbnail: '/videos/thumb2.jpg',
    videoUrl: 'https://www.youtube.com/embed/1oxK0cYax9s?si=t7mJlSOHdRUnXDTC',
  },
  {
    thumbnail: '/videos/thumb3.jpg',
    videoUrl: 'https://www.youtube.com/embed/s6VazbcpPko?si=IQLhIaErC_bu9dYC',
  },
   {
    thumbnail: '/videos/thumb3.jpg',
    videoUrl: 'https://www.youtube.com/embed/s6VazbcpPko?si=IQLhIaErC_bu9dYC',
  },
   {
    thumbnail: '/videos/thumb3.jpg',
    videoUrl: 'https://www.youtube.com/embed/s6VazbcpPko?si=IQLhIaErC_bu9dYC',
  },
   {
    thumbnail: '/videos/thumb3.jpg',
    videoUrl: 'https://www.youtube.com/embed/s6VazbcpPko?si=IQLhIaErC_bu9dYC',
  },
];

export default function TestimonialVideos7() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  return (
    <section className="bg-[#f9f5f1] py-12 text-center">
      <h2 className="text-3xl font-serif mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
            onClick={() => {
              setActiveVideo(video.videoUrl);
              setOpen(true);
            }}
          >
            <Image
              src={video.thumbnail}
              alt="Video thumbnail"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
              <div className="w-14 h-14 border-4 border-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-black w-full max-w-3xl aspect-video relative">
            <iframe
              src={activeVideo}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Testimonial Video"
            />
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}

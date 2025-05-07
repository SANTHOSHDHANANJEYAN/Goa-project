"use client";

import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

const Gallery: React.FC = () => {
  const images: { src: string; title: string }[] = [
    { src: "/images/image1.jpg", title: "Sunrise Yoga" },
    { src: "/images/image2.jpg", title: "Beach Session" },
    { src: "/images/image3.jpg", title: "Group Meditation" },
    { src: "/images/image4.jpg", title: "Asana Practice" },
    { src: "/images/image5.jpg", title: "Chanting Circle" },
    { src: "/images/image6.jpg", title: "Peaceful Retreat" },
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-5xl font-extrabold text-center text-yellow-500 mb-16 tracking-tight drop-shadow-lg">
          ✨ Gallery ✨
        </h2>

        <ImageList
          sx={{
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            height: "auto",
            gap: 16,
          }}
          variant="standard"
          cols={3}
          rowHeight={240}
        >
          {images.map((item, index) => (
            <ImageListItem key={index}>
              <div className="relative w-full h-[240px] overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-white text-lg font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
};

export default Gallery;

import { FaCertificate, FaUtensils } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdOnlinePrediction } from "react-icons/md";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutTraining() {
  const ref = useRef(null);
  const controls = useAnimation();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const iconList = [
    {
      Icon: GiMeditation,
      text: "Yoga Alliance Accredited Certificate (valid worldwide)",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "7-Days / 6-Nights in a luxurious boutique resort in Goa",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "Three healthy vegan/vegetarian buffet meals daily.",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "Teaching Methodology & Hands-on Teaching Practice",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "Comfortable accommodation in a peaceful, nature-filled setting",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "Small Group Size for personalized attention and guidance",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "Personal Growth & Transformation in a supportive community ",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "Daily Asana Practice, Meditation & Pranayama Sessions",
      size: 20,
    },
  ];

  return (
    <section className="relative py-16 px-6 md:px-24 bg-white overflow-hidden">
      <div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10"
        ref={sectionRef}
      >
        {/* Left Text Content */}
        <div className="pb-[4rem]">
          <p className="uppercase text-indigo-900 font-medium tracking-wide flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-indigo-900 rounded-full inline-block" />
            About the Training
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-6">
            Join us for  <br />
            50 Hrs Multi Style Yoga  <br />
            Teacher  Training
          </h2>

          <ul className="space-y-4 text-[#150e70]">
            {iconList.map(({ Icon, text, size }, i) => (
              <motion.li
                className="flex items-start gap-3"
                key={i}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
              >
                <Icon className="text-[#150e70] mt-1" size={size} />
                {text}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Image Content */}
             <div className="grid grid-cols-2 gap-4 pb-[2rem]">
               <div className="col-span-2">
                 <Image
                   src="/aboutpics/AB1.png"
                   alt="Yoga Group"
                   className="rounded-xl object-cover w-full h-[325px]"
                   width={600}
                   height={300}
                 />
               </div>
               <div>
                 <Image
                   src="/aboutpics/AB2.png"
                   alt="Vegan Food"
                   className="rounded-xl object-cover w-full h-[160px]"
                   width={300}
                   height={200}
                 />
               </div>
               <div>
                 <Image
                   src="/aboutpics/AB3.png"
                   alt="Resort Room"
                   className="rounded-xl object-cover w-full h-[160px]"
                   width={300}
                   height={200}
                 />
               </div>
             </div>
      </div>
    </section>
  );
}

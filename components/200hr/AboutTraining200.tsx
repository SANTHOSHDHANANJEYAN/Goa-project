// components/AboutTraining.tsx
import { FaCertificate, FaUtensils, FaLeaf, FaPeopleCarry } from "react-icons/fa";
import { GiMeditation, GiTeacher, GiLotus } from "react-icons/gi";
import { MdHotelClass } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import Image from "next/image";

export default function AboutTraining() {
  return (
    <section className="relative py-16 px-6 md:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Text Content */}
        <div className="pb-[4rem]">
          <p className="uppercase text-indigo-900 font-medium tracking-wide flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-indigo-900 rounded-full inline-block" />
            About the Training
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-6">
            Join us for  <br />
            200 Hrs Multi Style Yoga Teacher Training
          </h2>

          <ul className="space-y-4 text-[#150e70]">
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={20} />
              Yoga Alliance Accredited Certificate (valid worldwide)
            </li>
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={22} />
              24-Days / 23-Nights in a luxurious boutique resort in Goa
            </li>
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={20} />
              Three healthy vegan/vegetarian buffet meals daily
            </li>
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={22} />
              Daily Asana Practice, Meditation & Pranayama Sessions
            </li>
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={22} />
              Teaching Methodology & Hands-on Teaching Practice
            </li>
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={20} />
              Comfortable accommodation in a peaceful, nature-filled setting
            </li>
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={22} />
              Small Group Size for personalized attention and guidance
            </li>
            <li className="flex items-start gap-3">
              <MdHotelClass className="text-[#150e70] mt-1" size={22} />
              Personal Growth & Transformation in a supportive community
            </li>
          </ul>
        </div>

        {/* Right Image Content */}
        <div className="grid grid-cols-2 gap-4 pb-[2rem]">
          <div className="col-span-2">
            <Image
              src="/aboutpics/2422.jpg"
              alt="Yoga Group"
              className="rounded-xl object-cover w-full h-[325px]"
              width={600}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/aboutpics/333.jpg"
              alt="Vegan Food"
              className="rounded-xl object-cover w-full h-[160px]"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/aboutpics/444.jpg"
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

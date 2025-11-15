"use client";

import Image from "next/image";
import img1 from "../../../public/nature.jpg";
import img2 from "../../../public/gym.jpg";
import img3 from "../../../public/culture.jpg";
import img4 from "../../../public/campfire.jpg";
import { useState } from "react";
import { Great_Vibes } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});



export default function ActivitiesHighlight() {
  const [showMore, setShowMore] = useState(false);
  const activities = [
    {
      image: img1,
      title: "Hiking Adventures",
      desc: "Explore scenic trails and breathtaking mountain views.",
    },
    {
      image: img2,
      title: "Spa & Wellness",
      desc: "Relax and rejuvenate with soothing spa treatments and wellness therapies designed for complete relaxation.",
    },
    {
      image: img3,
      title: "Cultural Performances",
      desc: "Enjoy mesmerizing cultural performances and artistic showcases.",
    },
    {
      image: img4,
      title: "Campfire Nights",
      desc: "Share stories under the stars by a warm and inviting campfire.",
    },
  ];

  const handleButton = () => {
    setShowMore(true);
  }


  return (
    <div className="w-full bg-white h-lvh flex gap-10 flex-col items-center justify-center">


      <div className="w-full relative flex flex-col items-center justify-center">
        <h1
          className={`${greatVibes.className} lg:text-7xl text-5xl absolute text-red-800 -top-6 lg:-top-10 italic`}
        >
          Highlights
        </h1>
        <h2
          className="text-4xl text-gray-400"
          style={{ fontFamily: "Times New Roman, Times, serif" }}

        >
          Activities Highlights
        </h2>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-10/12 mx-auto">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative h-[450px] rounded-2xl overflow-hidden group shadow-lg"
          >

            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />


            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-4 items-center justify-center text-center text-white px-4">
              <h3 className="text-2xl font-semibold mb-2">
                {activity.title}
              </h3>
              <p className="text-sm leading-relaxed">{activity.desc}</p>
              <button className="w-fit h-fit py-2 px-3 underline underline-offset-4 cursor-pointer">
                view more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

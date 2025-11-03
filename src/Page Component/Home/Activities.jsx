"use client";

import Image from "next/image";
import img1 from "../../../public/decoration.jpg";
import img2 from "../../../public/blackbg.jpg";
import img3 from "../../../public/pool.jpg";
import img4 from "../../../public/bg.jpg";

export default function ActivitiesHighlight() {
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

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-12">
        Activities Highlight
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-10/12 mx-auto">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative h-[450px] rounded-2xl overflow-hidden group shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay (appears on hover) */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center text-white px-4">
              <h3 className="text-2xl font-semibold mb-2">
                {activity.title}
              </h3>
              <p className="text-sm leading-relaxed">{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

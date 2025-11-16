"use client";

import Image from "next/image";
import { useState } from "react";
import { Great_Vibes } from "next/font/google";

import img1 from "../../../public/nature.jpg";
import img2 from "../../../public/gym.jpg";
import img3 from "../../../public/culture.jpg";
import img4 from "../../../public/campfire.jpg";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ActivitiesHighlight() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    {
      image: img1,
      title: "Hiking Adventures",
      desc: "Explore scenic trails and breathtaking mountain views.",
      details:
        "Join guided hiking tours suitable for all skill levels. Learn about local flora and fauna while enjoying the serenity of nature. Each hike includes safety equipment, snacks, and expert guidance.",
    },
    {
      image: img2,
      title: "Spa & Wellness",
      desc: "Relax and rejuvenate with soothing spa treatments and wellness therapies designed for complete relaxation.",
      details:
        "Our spa offers massages, aromatherapy sessions, and wellness therapies to reduce stress and rejuvenate your mind and body. Personal consultations are available to customize your wellness journey.",
    },
    {
      image: img3,
      title: "Cultural Performances",
      desc: "Enjoy mesmerizing cultural performances and artistic showcases.",
      details:
        "Experience live traditional dances, music, and theater that reflect the rich local culture. Workshops are available to learn the art forms yourself, perfect for families and culture enthusiasts.",
    },
    {
      image: img4,
      title: "Campfire Nights",
      desc: "Share stories under the stars by a warm and inviting campfire.",
      details:
        "Gather around the campfire in the evening, enjoy storytelling sessions, roasted marshmallows, and live acoustic music. It's a perfect way to unwind and connect with fellow guests.",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen flex gap-10 flex-col items-center justify-center py-16">
      {/* Header */}
      <div className="w-full relative flex flex-col items-center justify-center mb-12">
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
              <h3 className="text-2xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-sm leading-relaxed">{activity.desc}</p>
              <button
                onClick={() => setSelectedActivity(activity)}
              className="w-fit h-fit py-2 px-3 underline underline-offset-4 cursor-pointer"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

    
      {selectedActivity && (
        <>
        
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />

        
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 relative">
            
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-red-600 text-2xl"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
                  <Image
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="flex flex-col text-left w-full">
                  <h3 className="text-3xl font-bold text-[#0B0C28] mb-3">
                    {selectedActivity.title}
                  </h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {selectedActivity.desc}
                  </p>
                  <p className="text-gray-700">{selectedActivity.details}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

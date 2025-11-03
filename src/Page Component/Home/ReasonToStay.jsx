"use client";

import Image from "next/image";
import img1a from "../../../public/bg.jpg";
import img1b from "../../../public/bg3.jpg";

import img2a from "../../../public/room3.jpg";
import img2b from "../../../public/room2.jpg";

import img3a from "../../../public/fooditem1.jpg";
import img3b from "../../../public/food1.jpg";

export default function ReasonToStay() {
  const cards = [
    {
      image: img1a,
      hoverImage: img1b,
      title: "Prime location",
      desc: "Surrounded by lush greenery and breathtaking mountain views, Arambha offers the perfect blend of peace and natural beauty.",
    },
    {
      image: img2a,
      hoverImage: img2b,
      title: "Luxury and comfort",
      desc: "Elegant rooms and suites designed for total relaxation.",
    },
    {
      image: img3a,
      hoverImage: img3b,
      title: "Exquisite Dining",
      desc: "Savor fresh, flavorful cuisine prepared with care.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-red-800 tracking-widest uppercase">
          STAY
        </h1>
        <h2
          className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          Your Perfect Stay, Our Promise
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group h-[450px]"
          >

            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />


            <Image
              src={card.hoverImage}

              fill
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

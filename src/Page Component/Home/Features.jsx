import Image from "next/image";
import room from "../../../public/room3.jpg";
import pool from "../../../public/pool.jpg";
import restaurant from "../../../public/fooditem1.jpg";
import decoration from "../../../public/decoration.jpg";


export default function Features() {
  const features = [
    { img: room, title: "SPECIAL ROOMS" },
    { img: pool, title: "SWIMMING POOL" },
    { img: restaurant, title: "RESTAURANT" },
    { img: decoration, title: "EVENT" },

  ];

  return (
    <div className="w-screen  ">
      <div className="flex items-center justify-center">
        {features.map((feature, index) => (
          <div key={index} className="relative group overflow-hidden">
            <Image
              src={feature.img}
              alt={feature.title}
              className="w-80 h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h2 className="text-white text-xl font-semibold tracking-wide">
                {feature.title}
              </h2>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

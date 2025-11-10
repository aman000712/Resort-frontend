"use client"
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ExploreRoom() {
  const images = [
    {
      image: '/room3.jpg',
      title: "Deluxe King Room",
      description: "Spacious room with a king-sized bed, modern decor, city view, and complimentary breakfast.",
      cost: "$180 / night"
    },
    {
      image: '/room2.jpg',
      title: "Executive Suite",
      description: "Luxurious suite featuring a private lounge area, balcony, and access to the executive club.",
      cost: "$250 / night"
    },
    {
      image: '/room3.jpg',
      title: "Family Room",
      description: "Perfect for families, offering two queen beds, a large seating area, and a scenic pool view.",
      cost: "$210 / night"
    },
    {
      image: '/room4.jpg',
      title: "Ocean View Room",
      description: "Enjoy breathtaking ocean views from this elegant room with a private balcony and cozy interiors.",
      cost: "$230 / night"
    },
    {
      image: '/room3.jpg',
      title: "Presidential Suite",
      description: "The ultimate luxury experience with a private jacuzzi, dining area, and panoramic city views.",
      cost: "$480 / night"
    },
    {
      image: '/room4.jpg',
      title: "Standard Twin Room",
      description: "Comfortable and affordable option with twin beds, modern bathroom, and all essential amenities.",
      cost: "$140 / night"
    },
  ];

  return (
    <div className='bg-white h-full flex flex-col justify-center items-center py-22 p-8'>

      <div className="w-full relative flex flex-col items-center justify-center">
        <h1
          className={`${greatVibes.className} lg:text-7xl text-5xl absolute text-red-800 -top-6 lg:-top-10 italic`}
        >
          Explore
        </h1>
        <h2
          className="text-4xl text-gray-600"
          style={{ fontFamily: "Times New Roman, Times, serif" }}

        >
          Hotel Master's Rooms
        </h2>
      </div>

      <div className='grid lg:p-4 mb-12 sm:grid-cols-3 lg:grid-cols-2 w-11/12 lg:gap-0 gap-10 lg:w-10/12 mx-auto mt-12'>
        {images.map((val, i) => (
          <div key={i} className='group rounded-xl lg:rounded-none overflow-hidden hover:border-gray-400 transition-all duration-300'>
            <div className={`grid lg:grid-cols-2 gap-10 lg:gap-0 justify-center bg-gray-100 items-center`}>
              <div className={`flex flex-col ${i < 2 || (i > 3 && i < 6) ? "lg:order-first" : "lg:order-last"} justify-center items-start p-4 gap-3`}>
                <div className='text-lg font-serif font-bold'>{val.title}</div>
                <div className='text-gray-500'>{val.description}</div>
                <div className='text-red-800 text-3xl font-medium'>{val.cost}</div>
              </div>

              <div className='h-64 overflow-hidden w-full'>
                <Image
                  className='w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110'
                  src={val.image}
                  alt={val.title}
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

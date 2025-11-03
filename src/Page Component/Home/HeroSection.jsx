

"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  const images = [
    { image: "bg-2.webp" },
    { image: "pool.jpg" },
    { image: "hotelview2.jpg" },
    { image: "bg-2.webp" },
  ];

  return (
    <section className="relative w-full h-lvh overflow-hidden">
   
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-black/70 z-10"></div>

        <Carousel
          autoPlay
          interval={5000}
          showStatus={false}
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          animationHandler="fade"
        >
          {images.map((val, index) => (
            <div key={index}>
              <img
                src={val.image}
                alt={`Slide ${index}`}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </Carousel>

     
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1
            className="text-7xl md:text-8xl font-bold  mb-4"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Aarambha
          </h1>
          <h2 className="text-2xl md:text-3xl tracking-[0.2em] font-semibold text-white">
            BEST RESORT
          </h2>
        </div>
      </div>

  
      <div className="lg:absolute bottom-0 left-0 w-full px-4 md:px-12 py-10 z-30">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-6">
      
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Check-in
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

      
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Check-out
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

      
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Room Type
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-red-800 outline-none">
              <option>Suite</option>
              <option>Deluxe</option>
              <option>Standard</option>
            </select>
          </div>

         
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Guests
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-red-800 outline-none">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>Family</option>
            </select>
          </div>

       
          <div className="flex items-end">
            <button className="w-full bg-red-800 text-white font-bold rounded-lg py-3 shadow-md hover:bg-red-700 transition-all duration-200">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


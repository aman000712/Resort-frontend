"use client";
import Image from "next/image";
import { FaArrowLeft, FaStar, FaWifi, FaTv, FaCoffee, FaSwimmingPool, FaBed } from "react-icons/fa";
import room1 from "../../../public/room1.jpg";
import room2 from "../../../public/room2.jpg";

export default function DeluxeRoom({ onBack }) {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Video Banner */}
      <div className="relative w-full h-[500px]">
        <video
          src="/videos/deluxe.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-semibold tracking-wider">Deluxe Room</h1>
          <p className="text-lg mt-2 text-gray-200">Luxury, comfort, and style redefined.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Experience Pure Comfort</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Deluxe Rooms offer a warm and modern atmosphere, complete with oak wood flooring and elegant finishes.
            Perfect for both leisure and business travelers, each room features a king-sized bed, high-speed Wi-Fi,
            flat-screen TV, mini-bar, and a private balcony overlooking the resort gardens.
          </p>

          <div className="flex items-center gap-6 mt-6">
            <div className="text-yellow-500 flex gap-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-500">(4.9/5 based on 237 reviews)</p>
          </div>

          <div className="mt-6 text-2xl text-[#B69100] font-semibold">Rs. 12,500 / Night</div>
          <p className="mt-2 text-green-600 font-medium">Available Now</p>

          <button className="mt-6 bg-[#B69100] text-white px-8 py-3 rounded-xl hover:bg-[#967a00] transition">
            Book Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Image src={room1} alt="Deluxe" className="rounded-xl object-cover" />
          <Image src={room2} alt="Deluxe" className="rounded-xl object-cover" />
        </div>
      </div>
    </div>
  );
}

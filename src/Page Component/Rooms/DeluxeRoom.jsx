"use client";
import Image from "next/image";
import { FaBed, FaUsers, FaExpand } from "react-icons/fa";
import room1 from "../../../public/room1.jpg";
import room2 from "../../../public/room2.jpg";
import room3 from "../../../public/room3.jpg";

export default function DeluxeRoom() {
  return (
    <div className="bg-[#f9f7f1] min-h-screen px-6 py-10">
      {/* Top Section: Room Details + Booking Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left: Room Description */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-serif font-semibold">DELUXE TRIPLE ROOM</h1>
          <p className="text-gray-700 leading-relaxed">
            Our Deluxe Triple Rooms offer a comfortable and inviting space for double occupancy. 
            With amenities like an LCD TV with 24-hour cable access, Wi-Fi, data port connectivity, 
            a tea/coffee maker, and two complimentary bottles of water, guests can relax and enjoy 
            their stay in a cozy environment. A warm welcome drink awaits guests upon arrival, 
            setting the tone for a pleasant and memorable experience.
          </p>

          <h2 className="font-semibold text-lg">Details</h2>
          <div className="flex flex-wrap gap-6 mt-2 text-gray-700">
            <div className="flex items-center gap-2">
              <FaExpand /> <span>105mm²</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers /> <span>up to 3 guests</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBed /> <span>Double bed</span>
            </div>
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">YOUR STAY</h2>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Select Branch"
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Select Date Range"
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="1 Adults, 0 Children, 1 Rooms"
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <button className="bg-[#6b5800] text-white rounded-lg py-2 mt-2 hover:bg-[#4d3e00] transition">
              See Availability
            </button>
          </div>
        </div>
      </div>

      {/* Video / Image Gallery Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <video
          src="/videos/pool.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[500px] object-cover rounded-xl mb-4"
        />
        <div className="grid grid-cols-3 gap-4">
          <Image src={room1} alt="Room 1" className="rounded-lg object-cover" />
          <Image src={room2} alt="Room 2" className="rounded-lg object-cover" />
          <Image src={room3} alt="Room 3" className="rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}

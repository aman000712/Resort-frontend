"use client";

import {
  FaWifi, FaDoorOpen, FaBolt, FaPhone, FaBell,
  FaConciergeBell, FaUtensils, FaSnowflake, FaTshirt,
  FaCar, FaCoffee, FaClock
} from "react-icons/fa";

const amenities = [
  { icon: <FaWifi />, name: "Free WiFi" },
  { icon: <FaDoorOpen />, name: "Private Balcony" },
  { icon: <FaBolt />, name: "Electric Kettle" },
  { icon: <FaPhone />, name: "Telephone" },
  { icon: <FaBell />, name: "Wake-up Service" },
  { icon: <FaConciergeBell />, name: "24/7 Room Service" },
  { icon: <FaUtensils />, name: "Dining Area" },
  { icon: <FaSnowflake />, name: "Air Conditioning" },
  { icon: <FaTshirt />, name: "Laundry Service" },
  { icon: <FaCar />, name: "Parking" },
  { icon: <FaCoffee />, name: "Tea/Coffee Maker" },
  { icon: <FaClock />, name: "24-Hour Reception" },
];

export default function Amenities() {
  return (
    <section className="py-12  w-full h-auto flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-red-800 mb-8">Amenities & Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities.map((val, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
          >
            <span className="text-red-600 text-xl">{val.icon}</span>
            <span className="text-gray-700 font-medium">{val.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

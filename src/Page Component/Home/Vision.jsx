"use client";
import { FaBell, FaConciergeBell, FaCar, FaSpa, FaBed } from 'react-icons/fa';

export default function Vision() {
  const data = [
    { icon: <FaBell />, name: "Friendly Service" },
    { icon: <FaConciergeBell />, name: "Get Breakfast" },
    { icon: <FaCar />, name: "Transfer Services" },
    { icon: <FaSpa />, name: "Suits & SPA" },
    { icon: <FaBed />, name: "Cozy Rooms" }
  ];

  return (
    <div className="h-2/3 bg-gray-100 py-20 w-full flex flex-col items-center justify-center gap-10">
      
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-red-800 tracking-widest uppercase">
          Welcome to Aarambha Resort
        </h1>
        <h2
          className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          A New Vision of Luxury Hotel
        </h2>
      </div>

    
      <div className="grid grid-cols-5 gap-6 w-9/12 items-center justify-center p-4">
        {data.map((val, i) => (
          <div
            key={i}
            className="flex flex-col w-40 h-40 items-center justify-center bg-gray-50 text-red-800 
                       hover:bg-red-800 hover:text-white transition-all duration-300 rounded-lg shadow-md"
          >
            <div className="text-5xl mb-3 transition-all duration-300">
              {val.icon}
            </div>
            <div className="text-lg font-medium">{val.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { FaBell, FaConciergeBell, FaCar, FaSpa, FaBed } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { Great_Vibes } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});


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

      {/* <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className=" text-sm  text-red-800 font-semibold tracking-widest uppercase">
          Welcome to Aarambha Resort
        </h1>
        <h2
          className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          A New Vision of Luxury Hotel
        </h2>
      </div> */}


    

         <div className="w-full relative flex flex-col items-center justify-center">
      <h1
        className={`${greatVibes.className} lg:text-7xl text-5xl absolute text-red-800 -top-6 lg:-top-10 italic`}
      >
       Welcome 
      </h1>
      <h2
        className="text-4xl text-gray-400"
        style={{ fontFamily: "Times New Roman, Times, serif" }}
        
      >
        A New Vision of Luxury Hotel
      </h2>
    </div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-5 gap-6 w-9/12 items-center justify-center p-4">
        {data.map((val, i) => (
          <div
            key={i}
            className="flex flex-col w-40 h-40 items-center justify-center bg-gray-50 text-red-800 
                       hover:bg-red-800 hover:text-white transition-all duration-300 rounded-lg shadow-lg shadow-red-200"
          >
            <div className="text-5xl mb-3 transition-all duration-300">
              {val.icon}
            </div>
            <div className="text-lg font-medium">{val.name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

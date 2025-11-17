"use client";
import Image from "next/image";
import Link from "next/link";
import room4 from "../../../../../public/room1.jpg";

export default function Suggestions({ roomData, slug }) {
  return (
    <section className=" w-full h-auto flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-red-800 mb-6">You May Also Like</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {Object.entries(roomData)
                 .filter(([key]) => key !== slug)
                 .map(([key, r]) => (
                   <div key={key} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                     <div className="relative h-48 overflow-hidden">
                       <Image
                         src={room4}
                         alt={r.title}
                         fill
                         className="object-cover group-hover:scale-105 transition-transform duration-500"
                         sizes="(max-width: 768px) 100vw, 400px"
                       />
                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                         <span className="font-bold text-red-600">{r.price}</span>
                       </div>
                     </div>
                     <div className="p-6">
                       <div className="flex justify-between items-start gap-4 mb-3">
                         <h3 className="text-xl font-bold text-gray-900">{r.title}</h3>
                       </div>
                       <p className="text-gray-600 text-sm mb-4 line-clamp-2">{r.description}</p>
                       <div className="flex items-center justify-between mb-6">
                         <span className="text-sm text-gray-500 font-medium">{r.size} • {r.guests}</span>
     
                       </div>
                       <Link
                         href={`/accomodation/${key}`}
                         className="block w-full text-center bg-red-800 text-white py-3 rounded-xl font-semibold hover:bg-red-900 transition-colors duration-200"
                       >
                         View Details
                       </Link>
                     </div>
                   </div>
                 ))}
             </div>
    </section>
  );
}

import Image from "next/image";

export default function BlogSection() {
  return (
    <div className="bg-gray-100 py-16 flex flex-col items-center justify-center h-lvh">
     
      <h2 className="text-4xl  font-bold mb-12 text-center">
        Aarambha Resort's Core Programs
      </h2>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 md:w-9/12">
       
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src="/pool.jpg"
            alt="Swimming Pool"
            width={400}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Swimming Pool
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enjoy our luxurious infinity pool with scenic views and a peaceful
              atmosphere, perfect for relaxation or a quick swim on a sunny day.
            </p>
          </div>
        </div>

       
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src="/hotelview2.jpg"
            alt="Marriage Events"
            width={400}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Marriage Events
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Host your dream wedding in our stunning resort venue — with lush
              gardens, elegant halls, and top-tier event management services.
            </p>
          </div>
        </div>

      
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src="/blackbg.jpg"
            alt="Food & Dining"
            width={400}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Food & Dining
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Savor exquisite local and international cuisines prepared by our
              world-class chefs — offering freshness, flavor, and style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import image from "../../../public/hotelview2.jpg";
import { FaWifi, FaCoffee, FaPhone, FaParking, FaSnowflake } from "react-icons/fa";
import { MdRoomService, MdBalcony, MdOutlineDryCleaning, MdElectricBolt } from "react-icons/md";
import { TbAirConditioning, TbClock24 } from "react-icons/tb";
import { IoMdSunny } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";

export default function ResortInfo() {
  const amenities = [
    { icon: <FaWifi/>, name: "Wifi" },
    { icon: <IoMdSunny/>, name: "Wakeup Service" },
    { icon: <MdOutlineDryCleaning />, name: "Tumble Dryer" },
    { icon: <MdBalcony />, name: "Balcony" },
    { icon: <MdRoomService />, name: "Room Service" },
    { icon: <FaParking />, name: "Parking" },
    { icon: <MdElectricBolt />, name: "Electric Kettle" },
    { icon: <BiSolidDish />, name: "Dining Area" },
    { icon: <FaCoffee />, name: "Tea/Coffee Maker" },
    { icon: <FaPhone/>, name: "Telephone" },
    { icon: <TbAirConditioning />, name: "Air Conditioning" },
    { icon: <TbClock24 />, name: "24-Hour Guest Reception" },
  ];

  return (
    <section className="bg-white py-10 lg:py-20 flex flex-col items-center justify-center gap-10 lg:gap-14 px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 w-full max-w-6xl">
    
       
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src={image}
            alt="Aarambha Hotel View"
            fill
             className="object-cover rounded-2xl shadow-lg transition-all duration-700 ease-in-out 
               group-hover:scale-110 group-hover:brightness-75"
            priority
          />
        </div>

      
        <div className="flex flex-col gap-4 lg:gap-6 justify-center p-4 lg:p-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-red-800"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Aarambha Hotel
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Nestled amidst the breathtaking beauty of nature, Arambha Resort is a sanctuary
            for those seeking both relaxation and adventure. Located in the heart of Butwal,
            we offer a unique blend of modern comfort and traditional charm. From the moment
            you arrive, you are greeted with warm hospitality, serene surroundings, and the
            gentle touch of mountain air.
            <br />
            <br />
            Every corner of Arambha Resort reflects our commitment to quality, comfort, and
            care. Whether you are here to indulge in a peaceful getaway or immerse yourself
            in local culture, we ensure your experience is personalized to your needs.
          </p>
        </div>
      </div>

     
      <div className="w-full max-w-6xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 lg:mb-8 text-red-800 text-center sm:text-left">
          Amenities
        </h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 text-gray-700">
          {amenities.map((val, i) => (
            <div key={i} className="flex items-center gap-3 text-sm sm:text-base">
              <span className="text-lg sm:text-xl text-red-800">{val.icon}</span>
              <span>{val.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
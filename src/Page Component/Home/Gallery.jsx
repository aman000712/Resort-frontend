import Image from "next/image";
import image1 from "../../../public/food1.jpg";
import image2 from "../../../public/decoration.jpg";
import image3 from "../../../public/pool.jpg";
import image4 from "../../../public/fooditem1.jpg";
import { BsCameraFill } from "react-icons/bs";

export default function Gallery() {
  const items = [
    { imgs: image1, caption: "@AARAMBHARESORT" },
    { imgs: image2, caption: "@AARAMBHARESORT" },
    { imgs: image3, caption: "@AARAMBHARESORT" },
    { imgs: image4, caption: "@AARAMBHARESORT" },
  ];

  return (
    <div className="bg-white w-full py-16 flex flex-col items-center text-center">
    
      
      <p className="text-gray-600 mb-2 text-base md:text-lg">
        Visit <span className="font-semibold">@AarambhaResort</span> and{" "}
        <span className="font-semibold">#AarambhaResort</span> to discover
        unforgettable guest experiences at Aarambha Resort.
      </p>

    
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-11/12 md:w-9/12">
        {items.map((val, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={val.imgs}
                alt="Gallery"
                width={300}
                height={300}
                className="w-72 h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-700 text-sm mt-3 tracking-widest flex items-center gap-1">
              <span className="text-lg"><BsCameraFill /></span> {val.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hum1 from "../../../public/Person1.jpg";
import hum2 from "../../../public/Person2.jpg";
import hum3 from "../../../public/Person5.jpg";
import hum4 from "../../../public/Person4.jpg";
import Image from "next/image";

export default function Testimony() {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
      name: "Robert Spears",
      image: hum1,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
      name: "Jane Doe",
      image: hum2,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
      name: "Sam Smith",
      image: hum3,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
      name: "Emily Clark",
      image: hum4,
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full flex flex-col items-center py-18 gap-8  bg-gray-100">
     <div className="flex flex-col items-center gap-2">
         <h1 className="text-red-800 tracking-widest uppercase">REVIEWS</h1>
      <h2 className="text-5xl mb-12 text-center"
       style={{ fontFamily: "Times New Roman, Times, serif" }}>
       Customer's Review
      </h2>
        <p className="text-center text-lg text-gray-700 w-11/12 sm:w-3/4">
        Hear what our guests have to say about their unforgettable experiences at our resort.
        From breathtaking views to exceptional service, our customers share their genuine
        stories and satisfaction that make us proud to be their favorite getaway destination.
      </p>
     </div>


      <div className="w-11/12 ">
        <Carousel
          arrows={false}
          autoPlay
          autoPlaySpeed={1500}
          infinite
          responsive={responsive}
          draggable
          swipeable
          pauseOnHover
          keyBoardControl
          className="w-full"
          slidesToSlide={1}
        >
          {testimonials.map((val, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between bg-white rounded-2xl shadow-sm m-6 p-6 min-h-[24rem] group"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-4  transition-transform duration-700 group-hover:scale-115">
                <Image
                  src={val.image}
                  alt={val.name}
                  width={128}
                  height={132}
                  className="rounded-full object-cover  w-full h-full "
                />
              </div>

              <h3 className="text-lg font-semibold mb-4 text-gray-600 transition-colors duration-300 group-hover:text-[#0B0C28]">
                {val.name}
              </h3>

              <p className="italic text-gray-700 text-center flex-1 leading-relaxed mx-2 transition-transform duration-700 group-hover:scale-[1.10]">
                “{val.quote}”
              </p>
            </div>
          ))}
        </Carousel>
      
      </div>
    </section>
  );
}



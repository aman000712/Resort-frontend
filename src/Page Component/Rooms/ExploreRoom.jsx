"use client"
import Image from "next/image";

export default function ExploreRoom() {
  const images = [
    {
      image: '/room1.jpg',
      title: "Grilled Beef with potatoes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: '/room2.jpg',
      title: "Grilled Beef with potatoes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: '/room3.jpg',
      title: "Grilled Beef with potatoes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: '/room4.jpg',
      title: "Baked New Zealand Mussels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
     {
      image: '/room3.jpg',
      title: "Grilled Beef with potatoes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
    {
      image: '/room4.jpg',
      title: "Baked New Zealand Mussels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00"
    },
  
  ];

  return (
    <div className=' bg-white h-auto flex flex-col justify-center items-center py-16 p-8'>
       <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className=" text-[#B69100] tracking-widest"></h1>
                <h2
                    className="text-4xl"
                    style={{ fontFamily: "Times New Roman, Times, serif" }}
                >
                    Hotel Master's Rooms
                </h2>
            </div>

      <div className='grid lg:p-4 mb-12 sm:grid-cols-3 lg:grid-cols-2 w-11/12 lg:gap-0 gap-10 lg:w-10/12 mx-auto mt-12  '>
        {images.map((val, i) => (
          <div key={i} className='group rounded-xl lg:rounded-none overflow-hidden hover:border-gray-400 transition-all duration-300'>
            <div className={`grid lg:grid-cols-2 gap-10 lg:gap-0 justify-center items-center`}>
              <div className={`flex flex-col ${i < 2 || (i > 3 && i < 6) ? "lg:order-first" : "lg:order-last"} justify-center items-start p-4 gap-3`}>
                <div className='text-lg font-serif font-bold'>{val.title}</div>
                <div className='text-gray-400'>{val.description}</div>
                <div className='text-orange-400 text-3xl font-medium'>{val.cost}</div>
              </div>

              <div className='h-64 overflow-hidden w-full'>
                <Image
                  className='w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110'
                  src={val.image}
                  alt="Menu Item"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

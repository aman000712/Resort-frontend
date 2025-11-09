"use client";

import Image from "next/image";
import Link from "next/link";
import room4 from "../../../public/room4.jpg";

export default function RoomDetails() {
  const rooms = [
    {
      name: "Deluxe Rooms",
      slug: "deluxe-room",
      description:
        "Feel right at home in our cosy 33.5m2 standard rooms with oak wood flooring and modern-yet-simple finishes.",
      total: 28,
      image: room4,
    },
    {
      name: "Deluxe Suite Rooms",
      slug: "deluxe-suite-room",
      description:
        "Our deluxe rooms offer a stylish place to stay that doesn’t compromise on comfort and quality.",
      total: 16,
      image: room4,
    },
    {
      name: "Aarambha (Presidential) Suite King",
      slug: "presidential-suite-king",
      description:
        "With a north-facing terrace area that’s perfect for outdoor lounging and dining, as well as an outdoor jacuzzi, you might be tempted to extend your stay indefinitely.",
      total: 2,
      image: room4,
    },
  ];

  return (
    <div className="bg-white h-auto py-10">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-[#B69100] tracking-widest uppercase">Explore</h1>
        <h2
          className="text-5xl text-center"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          Hotel Master's Rooms
        </h2>
      </div>

      <div className="flex flex-col gap-20 w-9/12 mx-auto mt-20 py-10">
        {rooms.map((room, index) => (
          <div
            key={room.slug}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } gap-10 items-center`}
          >
            <Image
              src={room.image}
              alt={room.name}
              width={800}
              height={500}
              className="rounded-xl"
            />
            <div className="flex flex-col gap-6 px-4 justify-center">
              <div
                className="text-5xl"
                style={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                {room.name}
              </div>
              <div className="text-gray-500">{room.description}</div>
              <div className="text-gray-500 font-semibold">
                Total No. of Rooms: {room.total}
              </div>

             
              <Link
                href={`/accomodation/${room.slug}`}
                className="border border-gray-500 text-gray-500 w-fit px-4 py-2 hover:bg-gray-100 transition-all"
              >
                View this room
              </Link>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

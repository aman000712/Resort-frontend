"use client";

import Image from "next/image";

export default function Banner({ room }) {
  return (
    <section className="relative h-96 md:h-[500px]">
      <Image
        src={room.banner}
        alt="room banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">{room.title}</h1>
          <p className="text-xl opacity-90">Luxury accommodation</p>
        </div>
      </div>
    </section>
  );
}

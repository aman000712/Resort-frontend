"use client";
import Image from "next/image";

export default function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((val, i) => (
        <Image
          key={i}
          src={val.image}
          alt="room"
          className="rounded-lg object-cover h-40"
        />
      ))}
    </div>
  );
}

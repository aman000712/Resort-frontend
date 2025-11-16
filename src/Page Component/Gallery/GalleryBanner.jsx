import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutBanner() {
  return (
    <div className="relative w-screen h-[70vh]">

      <div className="absolute inset-0 bg-black/50"></div>

     
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-4 px-5">
        <h1 className="text-5xl md:text-6xl font-bold">Gallery</h1>
        <p className="max-w-lg text-sm md:text-base">
          For over a century, we've been committed to academic excellence, innovation, and student success.
        </p>
      </div>

     
      <div className="absolute bg-black/50 w-full p-2 bottom-0 pl-28 flex items-center gap-2 text-white text-sm md:text-md">
        <FaArrowLeft />
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <span className="underline underline-offset-2">Gallery</span>
      </div>
    </div>
  );
}
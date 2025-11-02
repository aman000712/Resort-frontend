"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Rooms", path: "/rooms" },
    { title: "Blog", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-16 py-6 transition-all duration-500 ${
        scrolled ? "bg-[#B69100] backdrop-blur-md shadow-lg" : "bg-transparent"
      } text-white`}
    >
      <div className="text-xl font-semibold tracking-wide">Aarambha</div>

      <div className="flex gap-10 text-sm uppercase font-medium">
        {pages.map((val, i) => (
          <Link key={i} href={val.path} className="hover:text-yellow-400 transition">
            {val.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

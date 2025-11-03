"use client"
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/logo.jpg'

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const clickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Page = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Rooms", path: "/rooms" },
    { title: "Blog", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`w-full z-10 overflow-hidden text-white  flex items-center justify-center h-16 py-4  transition-all duration-300 ${isFixed ? "fixed top-0 left-0 right-0 h-20 border-none bg-gray-700 shadow-lg" : "absolute"}`}>
      <div className="flex w-11/12  mt-2 lg:w-10/12 justify-between">
        <Image
          src={logo}
          width={48}
          height={40} />

        <div className="flex text-3xl md:hidden cursor-pointer" onClick={clickMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>

        <div className="md:flex gap-10 hidden">
          {Page.map((val, i) => (
            <div key={i}>
              <Link key={i} href={val.path} className="hover:text-red-800 transition">
                {val.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-64 bg-black bg-opacity-90 rounded-lg shadow-lg transition-all duration-300 transform scale-100 opacity-100">
          <div className="flex flex-col items-center w-full gap-4 py-4 text-white">
            {Page.map((val, i) => (
              <div key={i} className="w-full text-center py-3 hover:bg-gray-800 rounded-lg transition-all">
                <Link to={val.path} className="w-full block py-2 hover:text-orange-600" onClick={() => setIsMenuOpen(false)} onBlur={() => { setIsMenuOpen(false) }}>
                  {val.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



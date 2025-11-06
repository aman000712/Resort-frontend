"use client";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-removebg-preview.png";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const clickMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const homePage = [
  //   { title: "Deluxe", path: "/deluxe" },
  //   { title: "Standard", path: "/standard" },
  //   { title: "King", path: "/king" },
  // ];
  const homePage = [
  { title: "Deluxe", path: "/blogs" },
  { title: "Standard", path: "/rooms/standard" },
  { title: "King", path: "/rooms/king" },
];


  const Page = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Rooms", path: "/rooms" },
    { title: "Blog", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`w-full z-10 text-white flex items-center justify-center h-16 py-12 transition-all duration-300 ${
        isFixed
          ? "fixed top-0 left-0 right-0 h-20 bg-gray-700 shadow-lg"
          : "absolute"
      }`}
    >
      <div className="flex w-11/12 lg:w-10/12 items-center justify-between">
      
        <div className="flex-shrink-0">
          <Image alt="logo" src={logo} className="w-20 h-20 object-contain" />
        </div>

       
        <div className="hidden md:flex items-center gap-10 text-lg font-medium justify-end relative">
          {Page.map((val, i) => (
            <div key={i} className="relative">
              {val.title === "Rooms" ? (
                <div
                  className="relative"
                  tabIndex={0}
                  onBlur={() => setIsHomeDropdownOpen(false)} 
                >
                  <button
                    onClick={() =>
                      setIsHomeDropdownOpen(!isHomeDropdownOpen)
                    }
                    className="hover:text-red-800 transition focus:outline-none"
                  >
                    {val.title}
                  </button>

                  {isHomeDropdownOpen && (
                    <div className="absolute top-8 left-0 bg-gray-800 text-white rounded-md shadow-lg flex flex-col w-40 py-2 z-20">
                      {homePage.map((homeItem, j) => (
                        <Link
                          key={j}
                          href={homeItem.path}
                          className="px-4 py-2 hover:bg-gray-700 hover:text-orange-400 transition"
                          onClick={() => setIsHomeDropdownOpen(true)}
                        >
                          {homeItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={val.path} className="hover:text-red-800 transition">
                  {val.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="flex text-3xl md:hidden cursor-pointer"
          onClick={clickMenu}
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-64 bg-black bg-opacity-90 rounded-lg shadow-lg transition-all duration-300">
          <div className="flex flex-col items-center w-full gap-4 py-4 text-white">
            {Page.map((val, i) => (
              <div key={i} className="w-full text-center">
                {val.title === "Rooms" ? (
                  <div
                    tabIndex={0}
                    onBlur={() => setIsHomeDropdownOpen(false)}
                    className="relative"
                  >
                    <button
                      onClick={() =>
                        setIsHomeDropdownOpen(!isHomeDropdownOpen)
                      }
                      className="w-full py-2 hover:bg-gray-800 rounded-lg transition-all hover:text-orange-500"
                    >
                      {val.title}
                    </button>
                    {isHomeDropdownOpen && (
                      <div className="flex flex-col w-full mt-2 bg-gray-800 rounded-md">
                        {homePage.map((homeItem, j) => (
                          <Link
                            key={j}
                            href={homeItem.path}
                            className="py-2 hover:bg-gray-700 hover:text-orange-400 rounded-md"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsHomeDropdownOpen(false);
                            }}
                          >
                            {homeItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={val.path}
                    className="w-full text-center py-2 hover:bg-gray-800 rounded-lg transition-all hover:text-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {val.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

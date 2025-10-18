"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {


    const mapping = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Resturant",
            path: "/resturant"
        }
    ]





    return (
        <div className="fixed top-0  left-0 w-full z-50 flex justify-between items-center px-16 py-6 bg-transparent text-white">

            <div>Aarambha</div>

            <ul className="flex gap-10 text-sm uppercase font-medium">
                <li>
                    <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
                </li>
                <li>
                    <Link href="/rooms" className="hover:text-yellow-400 transition">Rooms</Link>
                </li>
              
                <li>
                    <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
                </li>
                <li>
                    <Link href="/blogs" className="hover:text-yellow-400 transition">Blog</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

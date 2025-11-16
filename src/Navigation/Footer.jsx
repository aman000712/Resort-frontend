import { IoHeartSharp } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import logo from '../../public/logo.jpg'
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function Footer() {
    const links = [
        { name: "About", href: "/about" },
        { name: "Accomodation", href: "/accomodation" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blogs" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <div className="w-full bg-gray-800 text-white py-10 h-2/3">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center ">
                        <Image src={logo} alt="" className="w-16 h-16 " />
                        <div className="text-3xl font-semibold text-white">Aarambha</div>
                    </div>
                    <div className="text-gray-400 text-sm">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </div>
                    <div className="flex gap-4 mt-4 text-gray-300">
                        <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full">

                            <span><BsFacebook /></span>
                        </div>
                        <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full">

                            <span><FaInstagram /></span>
                        </div>
                        <div className="w-8 h-8 bg-gray-600 flex items-center justify-center rounded-full">

                            <span><FaTwitter /></span>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4 items-center">
                    <div className="text-lg font-semibold text-white">Useful Links</div>
                    <div className="text-gray-400 text-sm flex flex-col gap-2 cursor-pointer items-start  w-3/12">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 hover:text-white"
                            >
                                <GoDotFill /> {link.name}
                            </Link>
                        ))}
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <div className="text-lg font-semibold text-white">Have a Question?</div>
                    <div className="text-gray-400 text-sm">
                        <div className="flex gap-4 items-center">
                            <div className="w-6 h-6 bg-gray-600 flex items-center justify-center rounded-full">

                                <span className="text-red-600"><GrLocationPin /></span>
                            </div>
                            <div>Dhawaha Butwal-15</div>
                        </div>
                        <div className="flex gap-4 items-center mt-2">
                            <div className="w-6 h-6 bg-gray-600 flex items-center justify-center rounded-full">

                                <span><IoCall /></span>
                            </div>
                            <div>9865475235</div>
                        </div>
                        <div className="flex gap-4 items-center mt-2">
                            <div className="w-6 h-6 bg-gray-600 flex items-center justify-center rounded-full">

                                <span><IoIosMailUnread /></span>
                            </div>
                            <div>info@yourdomain.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t pt-4 flex items-center justify-center gap-2">
                Copyright ©2025 All rights reserved | This template is made with <span className="text-red-600"><IoHeartSharp /></span> by Apsana
            </div>
        </div>
    );
}

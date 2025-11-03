import { IoHeartSharp } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import logo from '../../public/logo.jpg'
import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-gray-800 text-white py-10 h-[90vh]">
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

             
                <div className="flex flex-col gap-4  items-center ">
                    <div className="text-lg font-semibold text-white">Useful Links</div>
                    <div className="text-gray-400 text-sm flex flex-col gap-2 cursor-pointer w-3/12">
                        <div className="hover:text-white">Blog</div>
                        <div className="hover:text-white">Rooms</div>
                        <div className="hover:text-white">Amenities</div>
                        <div className="hover:text-white">Gift Card</div>
                    </div>
                </div>

             
                <div className="flex flex-col gap-4">
                    <div className="text-lg font-semibold text-white">Have a Question?</div>
                    <div className="text-gray-400 text-sm">
                        <div className="flex gap-4 items-center">
                            <div className="w-6 h-6 bg-gray-600 flex items-center justify-center rounded-full">
                             
                                <span className="text-red-600"><GrLocationPin /></span>
                            </div>
                            <div>203 Fake St. Mountain View, San Francisco, California, USA</div>
                        </div>
                        <div className="flex gap-4 items-center mt-2">
                            <div className="w-6 h-6 bg-gray-600 flex items-center justify-center rounded-full">
                              
                                <span><IoCall /></span>
                            </div>
                            <div>+2 392 3929 210</div>
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

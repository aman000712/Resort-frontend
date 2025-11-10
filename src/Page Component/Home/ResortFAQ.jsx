"use client";
import backgroundImage from "../../../public/redbg.jpg";
import bdy1 from "../../../public/hotelview2.jpg";
import Image from "next/image";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function ResortFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What amenities are available at the resort?",
      answer:
        "Our resort offers luxurious rooms, a swimming pool, spa services, fine dining, fitness center, and guided local tours to enhance your stay.",
    },
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in starts at 2:00 PM and check-out is until 12:00 PM. Early check-in and late check-out are available upon request.",
    },
    {
      question: "Do you provide airport transfer services?",
      answer:
        "Yes, we offer both one-way and round-trip airport transfer services at an additional cost. Please contact our reception for arrangements.",
    },
    {
      question: "Are pets allowed at the resort?",
      answer:
        "We love pets, but currently, our resort does not accommodate animals for the comfort of all our guests.",
    },
  ];

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
    
      {/* <Image
        src={backgroundImage}
        alt="Resort Background"
        fill
        className="object-cover brightness-75"
      /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

     
      <div className="relative z-10 w-11/12 md:w-10/12 lg:w-9/12 grid md:grid-cols-2 gap-10 py-16">
   
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={bdy1}
            alt="Resort Image"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

  
        <div className="flex flex-col items-center justify-center rounded-3xl p-8 md:p-10 text-white ">
          <h1
            style={{ fontFamily: "Times New Roman, Times, serif" }}
            className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-wide text-center"
          >
            Frequently Asked Questions
          </h1>

          <div className="divide-y divide-gray-400/30">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none transition-all"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <IoChevronUp className="text-2xl text-amber-400" />
                  ) : (
                    <IoChevronDown className="text-2xl text-amber-400" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-200 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

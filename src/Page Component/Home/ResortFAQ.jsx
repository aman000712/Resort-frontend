"use client";

import Image from "next/image";
import { useState } from "react";
import resortImg from "../../../public/meeting1.jpg"; 
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function ResortFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12 bg-white">
    
      <div className="md:w-1/2 w-full">
        <Image
          src={resortImg}
          alt="Resort"
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Right: FAQ Section */}
      <div className="md:w-1/2 w-full">
        <p className="text-red-800 font-semibold uppercase text-sm tracking-wide">
          Frequently Asked
        </p>
        <h2 className="text-3xl font-bold mb-6"
        style={{ fontFamily: "Times New Roman, Times, serif" }}>
          Everything You Need to Know
        </h2>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <IoChevronUp className="text-xl text-gray-600" />
                ) : (
                  <IoChevronDown className="text-xl text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

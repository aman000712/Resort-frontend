"use client";
import backgroundImage from "../../../public/redbg.jpg";
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
    <div className="w-full min-h-[80vh] relative flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Resort Background"
        className="absolute w-full h-full object-cover brightness-[0.4]"
      />

      <div className="relative z-10 flex flex-col items-center text-white text-center px-4">
        <h1
          style={{ fontFamily: "Times New Roman, Times, serif" }}
          className="text-4xl md:text-5xl font-bold mb-10 tracking-wide"
        >
          Frequently Asked Questions
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full md:w-2/4 shadow-2xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-500/40 py-4 ${
                index === faqs.length - 1 ? "border-none" : ""
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none transition-all duration-300"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <IoChevronUp className="text-2xl text-amber-400 transition-transform duration-300" />
                ) : (
                  <IoChevronDown className="text-2xl text-amber-400 transition-transform duration-300" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

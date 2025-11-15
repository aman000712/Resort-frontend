"use client";
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
    <div className="w-full h-[70vh] flex flex-col items-center justify-center px-4 bg-black/50 py-8">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md lg:max-w-lg">
              <Image
                src={bdy1}
                alt="Resort Image"
                className="w-full h-auto rounded-2xl object-cover"
                style={{
                  display: "block",
                  transform: "none",
                  transition: "none",
                }}
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="rounded-3xl p-6 md:p-8 text-white w-full max-w-lg">
              <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center font-serif text-amber-300">
                Frequently Asked Questions
              </h1>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-white/30 pb-4 last:border-b-0"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex justify-between items-center w-full text-left font-semibold text-lg py-2 hover:text-amber-300 transition-colors"
                    >
                      <span className="text-white pr-4">{faq.question}</span>
                      {openIndex === index ? (
                        <IoChevronUp className="text-2xl text-amber-400 flex-shrink-0" />
                      ) : (
                        <IoChevronDown className="text-2xl text-amber-400 flex-shrink-0" />
                      )}
                    </button>

                    {/* Smooth dropdown */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openIndex === index
                          ? "max-h-[500px] opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-white/80 text-base">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

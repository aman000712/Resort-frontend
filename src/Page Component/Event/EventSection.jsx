"use client";
import { useState } from "react";
import { Great_Vibes } from "next/font/google";
import { MdOutlineMessage } from "react-icons/md";
import Link from "next/link";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function EventSection() {
  const events = [
    {
      image: "/Marriage1.jpg",
      category: "Current",
      title: "Marriage",
      description:
        "The Culinary Arts program is designed to provide students with knowledge and skills in the art of cooking.",
      author: "Rahul Ghimire",
      date: "2025 Jan 02",
      slug: "marriage-event",
    },
    {
      image: "/decoration.jpg",
      category: "Past",
      title: "College Program",
      description:
        "As part of the training for Hotel Management students, we organize a field visit to a renowned hotel.",
      author: "Sangam GC",
      date: "2025 March 02",
      slug: "college-program-event",
    },
    {
      image: "/fooditem1.jpg",
      category: "Upcoming",
      title: "Meeting",
      description:
        "An insight into how professional housekeeping maintains comfort and cleanliness in hospitality.",
      author: "Aarav KC",
      date: "2025 Feb 10",
      slug: "meeting-event",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter(
    (ev) =>
      ev.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["All", "Marriage", "College Program", "Meeting"];

  return (
    <div className="bg-gray-100 h-auto py-16">
      <div className="w-full relative flex flex-col items-center justify-center">
        <h1
          className={`${greatVibes.className} lg:text-7xl text-5xl absolute text-red-800 -top-6 lg:-top-10 italic`}
        >
          Events
        </h1>
        <h2
          className="text-4xl text-gray-400"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          Different Events
        </h2>
      </div>

      <div className="flex flex-col md:flex-row mt-12 w-11/12 mx-auto gap-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full md:w-3/4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((ev, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative w-full h-64">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {ev.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {ev.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{ev.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>
                      {ev.author} • {ev.date}
                    </span>

                    {/* ✅ Correct Read More Slug */}
                    <Link
                      href={`/events/${ev.slug}`}
                      className="text-red-600 flex items-center hover:underline"
                    >
                      Read more <MdOutlineMessage className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-2 text-center">
              No events found.
            </p>
          )}
        </div>

       
        <div className="w-full md:w-1/4 flex flex-col gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search any event"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-gray-600">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setSearchTerm(cat === "All" ? "" : cat.toLowerCase())
                  }
                  className="cursor-pointer hover:text-red-600 transition-colors"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

const eventsData = {
  "marriage-event": {
    title: "Beautiful Marriage Ceremony at Our Resort",
    category: "Current",
    date: "January 02, 2025",
    author: "Aarambha Resort Team",
    image: "/Marriage1.jpg",
    content: `
      Our resort recently had the honor of hosting a breathtaking marriage ceremony.  
      The event featured stunning floral decorations, elegant seating arrangements,  
      and a romantic outdoor setup perfect for capturing lifetime memories. 

      Guests enjoyed a luxurious buffet, live music, and warm hospitality  
      that made the celebration unforgettable.

      We take pride in providing a serene and scenic location for weddings  
      that blend tradition, beauty, and comfort.
    `,
  },

  "college-program-event": {
    title: "College Gathering & Decoration Setup at the Resort",
    category: "Past",
    date: "March 02, 2025",
    author: "Event Coordination Team",
    image: "/decoration.jpg",
    content: `
      The resort recently hosted a vibrant college program filled with energy,  
      creativity, and joyful moments. Our event team arranged a beautifully  
      decorated outdoor space perfect for group activities, performances,  
      and celebration. 

      Students enjoyed a full day of entertainment, photoshoots,  
      delicious food, and a relaxing environment surrounded by nature.

      The event was a wonderful blend of fun, learning, and togetherness.
    `,
  },

  "meeting-event": {
    title: "Corporate Meeting & Conference at the Resort",
    category: "Upcoming",
    date: "February 10, 2026",
    author: "Corporate Events Desk",
    image: "/fooditem1.jpg",
    content: `
      Our resort is preparing to host an important corporate meeting, offering  
      a peaceful environment ideal for discussions, presentations, and planning.  

      The conference setup will include modern audio-visual equipment,  
      comfortable seating, refreshing beverages, and a professional ambiance.

      Attendees will also enjoy a curated lunch prepared by our experienced chefs.

      We aim to provide the perfect combination of productivity, luxury,  
      and hospitality for business gatherings.
    `,
  },
};

export default function EventPage({ params }) {
  const { slug } = params;
  const events = eventsData[slug];

  if (!events) {
    return (
      <div className="text-center text-xl py-20 text-gray-600">
        Events not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0B0C28] flex flex-col items-center pt-28 pb-12 px-6 lg:px-2 ">
      <div className="w-11/12  bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="relative w-full bg-red-200 h-96">
          <Image
            src={events.image}
            alt={events.title}
            fill
            className="object-cover"
          />
          <span className="absolute top-4 right-4 bg-[#0B0C28]/70 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {events.category}
          </span>
        </div>

        <div className="p-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#0B0C28]">{events.title}</h1>
          <div className="text-gray-500 text-sm flex justify-between">
            <span>{events.author}</span>
            <span>{events.date}</span>
          </div>
          <hr className="my-4 border-gray-200" />

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {events.content}
          </p>

          <div className="mt-8">
            <Link
              href="/events"
              className="inline-block bg-[#0B0C28] text-white px-6 py-2 rounded-lg hover:bg-[#0B0C28]/80 transition"
            >
              ← Back to Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

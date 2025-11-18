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
  const event = eventsData[slug];

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">❌</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h1>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist.</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-red-300 py-30 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Event Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Category Badge */}
              <span className={`absolute top-4 right-4 text-white text-sm font-semibold px-3 py-1 rounded-full ${
                event.category === "Current" ? "bg-green-600" :
                event.category === "Upcoming" ? "bg-blue-600" :
                "bg-gray-600"
              }`}>
                {event.category}
              </span>
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{event.date}</span>
                <span>•</span>
                <span>By {event.author}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {event.title}
              </h1>

              {/* Content */}
              <div className="flex-grow">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                  {event.content}
                </p>
              </div>

            
            </div>
          </div>
        </div>

        {/* Related Actions */}
        <div className="flex justify-between items-center mt-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← All Events
          </Link>
         
        </div>
      </div>
    </div>
  );
}
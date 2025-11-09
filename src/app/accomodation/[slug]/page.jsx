import Image from "next/image";
import room4 from "../../../../public/room4.jpg";
import Link from "next/link";

const roomData = {
  "deluxe-room": {
    title: "Deluxe Room",
    description: `Our Deluxe Rooms are designed for comfort with elegant decor and modern amenities. With features such as complimentary Wi-Fi, tea/coffee maker, and cozy interiors, guests can relax and enjoy a peaceful stay.`,
    size: "105 m²",
    guests: "Up to 2 guests",
    bed: "Queen bed",
  },
  "deluxe-suite-room": {
    title: "Deluxe Suite Room",
    description: `Spacious suite with a private lounge, ideal for guests who value luxury and space. Enjoy premium furnishings, modern lighting, and personalized hospitality for a truly comfortable stay.`,
    size: "135 m²",
    guests: "Up to 3 guests",
    bed: "King bed",
  },
  "presidential-suite-king": {
    title: "Aarambha (Presidential) Suite King",
    description: `Experience unmatched luxury in our Presidential Suite featuring a private jacuzzi, terrace view, and premium amenities. Perfect for guests seeking a lavish, serene, and memorable experience.`,
    size: "180 m²",
    guests: "Up to 4 guests",
    bed: "King bed",
  },
};

export default function RoomPage({ params }) {
  const { slug } = params;
  const room = roomData[slug];

  if (!room) {
    return <div className="text-center text-xl py-20">Room not found.</div>;
  }

  return (
    <div className="bg-[#faf9f7] min-h-screen py-30">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <Link href="/rooms" className="text-gray-500 hover:text-gray-700 mb-6 inline-block">
            ← Back to Rooms
          </Link>

          <Image
            src={room4}
            alt={room.title}
            width={900}
            height={600}
            className="rounded-xl mb-8"
          />

          <h1
            className="text-5xl font-semibold mb-4"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            {room.title}
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {room.description}
          </p>

          <div className="mt-6 text-gray-700">
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <ul className="space-y-2">
              <li>📏 {room.size}</li>
              <li>👥 {room.guests}</li>
              <li>🛏️ {room.bed}</li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar – Booking Form */}
        <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-center">Your Stay</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Select Branch</label>
              <select className="w-full border border-gray-300 rounded-md p-3">
                <option>Select Branch</option>
                <option>Downtown</option>
                <option>City View</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Select Date Range</label>
              <input
                type="text"
                placeholder="Check-in - Check-out"
                className="w-full border border-gray-300 rounded-md p-3"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Guests</label>
              <input
                type="text"
                placeholder="1 Adult, 0 Children"
                className="w-full border border-gray-300 rounded-md p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-700 text-white py-3 rounded-md hover:bg-yellow-800 transition"
            >
              See Availability
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

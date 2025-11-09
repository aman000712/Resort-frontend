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

// ✅ FACILITIES DATA (mapped like roomData)
const facilitiesData = [
  "Slipper",
  "Shower",
  "Tea | Coffee Maker",
  "IDD Telephone",
  "Daily Housekeeping",
  "2 Bottle Water",
  "Ironing (On Request)",
  "Newspaper | Magazine",
  "Mini Bar (Limited)",
  "In Room Safe",
  "Toiletries",
  "High speed WIFI",
  "Desk",
  "Bathtub (Limited)",
  "Hair Dryer (Limited)",
  "Satellite | Cable TV",
  "Seating Area",
  "Air conditioner",
];

export default function RoomPage({ params }) {
  const { slug } = params;
  const room = roomData[slug];

  if (!room) {
    return <div className="text-center text-xl py-20">Room not found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col gap-8 items-center justify-center py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl py-20 overflow-hidden">
        {/* Room Info */}
        <div className="p-10 flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-red-800"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            {room.title}
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {room.description}
          </p>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold mb-3 text-red-800">
              Room Details
            </h2>
            <ul className="space-y-2 text-gray-700">
              {[
                { label: "📏 Size", value: room.size },
                { label: "👥 Guests", value: room.guests },
                { label: "🛏️ Bed Type", value: room.bed },
              ].map((detail, idx) => (
                <li key={idx}>
                  {detail.label}: {detail.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-900">
            Book Your Stay
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Branch
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-800 focus:outline-none">
                <option>Select Branch</option>
                <option>Downtown</option>
                <option>City View</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <input
                type="text"
                placeholder="Check-in - Check-out"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guests
              </label>
              <input
                type="text"
                placeholder="1 Adult, 0 Children"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-800 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-800 text-white py-3 rounded-lg font-medium hover:bg-red-900 transition"
            >
              See Availability
            </button>
          </form>
        </div>
      </div>

      {/* ✅ FACILITIES SECTION (mapped from facilitiesData) */}
      <section className="bg-white py-16 px-6 w-full">
        <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
          FACILITIES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-gray-700">
          {facilitiesData.map((facility, idx) => (
            <div
              key={idx}
              className="flex items-center justify-start gap-3 border-b border-gray-200 pb-2"
            >
              <span className="text-red-800 text-2xl">★</span>
              <span>{facility}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <video
        className="w-full h-[70vh] object-cover"
        src="/poolvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

    

     {/* You May Also Like Section */}
<div className="w-full bg-gray-100 py-16 px-8">
  <h2 className="text-2xl font-semibold mb-10 text-gray-800">You may also like</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {Object.entries(roomData)
      .filter(([key]) => key !== slug) 
      .map(([key, value], idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <Image
            src={room4}
            alt={value.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-red-800">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {value.description}
            </p>

            <p className="text-red-700 font-semibold mb-3">
              {value.size} • {value.guests}
            </p>

            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg">★★★★★</span>
            </div>

            <Link
              href={`/accomodation/${key}`}
              className="text-white bg-red-800 px-4 py-2 rounded-md hover:bg-red-900 transition text-sm"
            >
              View This Room
            </Link>
          </div>
        </div>
      ))}
  </div>
</div>

    </div>
  );
}

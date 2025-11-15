"use client";
import Image from "next/image";
import room4 from "../../../../public/room4.jpg";
import Link from "next/link";
import {
  FaWifi,
  FaConciergeBell,
  FaCoffee,
  FaPhone,
  FaSnowflake,
  FaCar,
  FaBell,
  FaClock,
  FaUtensils,
  FaMugHot,
  FaTshirt,
  FaWater,
  FaDoorOpen,
  FaNewspaper,
  FaBed,
  FaBolt,
  FaRuler,
  FaUser,
  FaCalendar,
  FaUsers,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import { useState } from "react";

import room1 from "../../../../public/room1.jpg";
import room2 from "../../../../public/room2.jpg";
import room3 from "../../../../public/room3.jpg";

const roomData = {
  "deluxe-room": {
    title: "Deluxe Room",
    banner: "/room1.jpg",
    description: `Our Deluxe Rooms are designed for travelers seeking a balance of comfort, style, and modern living. Each room features elegant interiors with soft lighting, premium furnishings, and contemporary amenities to ensure a pleasant and relaxing experience.`,
    size: "105 m²",
    guests: "Up to 2 guests",
    bed: "Queen bed",
    images: [room1, room2, room3, room1, room2, room3, room1],
    price: "$199",
    rating: 4.8,
  },
  "deluxe-suite-room": {
    title: "Deluxe Suite Room",
    banner: "/bg2.jpg",
    description: `Our Deluxe Suite Room is a spacious sanctuary designed for guests who appreciate privacy, sophistication, and superior comfort.`,
    size: "135 m²",
    guests: "Up to 3 guests",
    bed: "King bed",
    images: [room1, room2, room3, room1, room2, room3, room1],
    price: "$299",
    rating: 4.9,
  },
  "presidential-suite-king": {
    title: "Aarambha Suite King",
    banner: "/bg3.jpg",
    description: `Experience the pinnacle of luxury in our Aarambha Presidential Suite. This opulent space offers a private jacuzzi, terrace with panoramic views, and premium interiors crafted for an unforgettable stay.`,
    size: "180 m²",
    guests: "Up to 4 guests",
    bed: "King bed",
    images: [room1, room2, room3, room1, room2, room3, room1],
    price: "$499",
    rating: 5.0,
  },
};

const amenities = [
  { icon: <FaWifi />, name: "Free WiFi" },
  { icon: <FaDoorOpen />, name: "Private Balcony" },
  { icon: <FaBolt />, name: "Electric Kettle" },
  { icon: <FaPhone />, name: "Telephone" },
  { icon: <FaBell />, name: "Wake-up Service" },
  { icon: <FaConciergeBell />, name: "24/7 Room Service" },
  { icon: <FaUtensils />, name: "Dining Area" },
  { icon: <FaSnowflake />, name: "Air Conditioning" },
  { icon: <FaTshirt />, name: "Laundry Service" },
  { icon: <FaCar />, name: "Complimentary Parking" },
  { icon: <FaCoffee />, name: "Tea/Coffee Maker" },
  { icon: <FaClock />, name: "24-Hour Reception" },
];

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    comment: "Absolutely stunning room! The attention to detail and luxury amenities made our stay unforgettable. Will definitely come back!",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "2024-01-10",
    comment: "Great experience overall. The room was spacious and clean. Service was excellent. Minor issue with WiFi but was resolved quickly.",
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    date: "2024-01-08",
    comment: "Perfect getaway! The bed was incredibly comfortable and the view was breathtaking. Highly recommend this room for couples.",
    avatar: "/avatar3.jpg",
  },
];

export default function RoomPage({ params }) {
  const { slug } = params;
  const room = roomData[slug];

  const [showAllImages, setShowAllImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h1>
          <Link href="/accomodation" className="text-red-600 hover:text-red-800">
            Return to Accommodations
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const navigateImage = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
    }
  };

  const displayedImages = showAllImages ? room.images : room.images.slice(0, 4);
  const remainingCount = room.images.length - 4;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"} />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* BANNER */}
      <section className="relative h-96 md:h-[500px]">
        <Image src={room.banner || room4} alt={room.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{room.title}</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Luxury accommodation with premium amenities for an unforgettable stay
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY + FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Image Gallery */}
          <div>
            <div
              className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden mb-6 relative cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={room.images[0]}
                alt="Main Image"
                
                className="object-cover hover:scale-105 transition-transform duration-300 w-full "
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {displayedImages.slice(1).map((img, idx) => (
                <div
                  key={idx + 1}
                  className="relative h-32 md:h-40 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(idx + 1)}
                >
                  <Image
                    src={img}
                    alt={`Room Image ${idx + 2}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}

              {!showAllImages && remainingCount > 0 && (
                <button
                  onClick={() => setShowAllImages(true)}
                  className="relative h-20 md:h-40 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center group hover:bg-gray-300 transition-colors duration-200"
                >
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gray-700 group-hover:text-gray-900">
                      +{remainingCount}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">View All</p>
                  </div>
                </button>
              )}

              {showAllImages &&
                room.images.slice(4).map((img, idx) => (
                  <div
                    key={idx + 4}
                    className="relative h-32 md:h-40 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(idx + 4)}
                  >
                    <Image
                      src={img}
                      alt={`Room Image ${idx + 5}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                ))}
            </div>
            

            {showAllImages && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllImages(false)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Show Less
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Booking Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Book Your Stay</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-red-600" />
                    Select Branch
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option>Choose a branch</option>
                    <option>Downtown Main</option>
                    <option>City View</option>
                    <option>Riverside</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCalendar className="inline mr-2 text-red-600" />
                    Check-in & Check-out
                  </label>
                  <input
                    type="text"
                    placeholder="Select dates"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2 text-red-600" />
                    Guests
                  </label>
                  <input
                    type="text"
                    placeholder="Number of guests"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Total</span>
                    <span className="text-xl font-bold text-red-600">{room.price}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                  >
                    Check Availability
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ROOM OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Room Overview</h2>
        <p className="text-gray-600 leading-relaxed mb-8">{room.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <FaRuler className="text-red-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Size</p>
              <p className="font-semibold">{room.size}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <FaUsers className="text-red-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Guests</p>
              <p className="font-semibold">{room.guests}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <FaBed className="text-red-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Bed Type</p>
              <p className="font-semibold">{room.bed}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {amenities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-red-600 text-lg">{item.icon}</span>
              <span className="text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <FaUser className="text-gray-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED ROOMS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(roomData)
              .filter(([key]) => key !== slug)
              .map(([key, room]) => (
                <div key={key} className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow bg-gray-100">
                  <div className="relative h-48">
                    <Image src={room4} alt={room.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg font-semibold text-gray-900">{room.title}</h3>
                      <span className="text-red-600 font-bold">{room.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{room.size} • {room.guests}</span>
                      <span className="flex items-center text-sm">★ {room.rating}</span>
                    </div>
                    <Link
                      href={`/accomodation/${key}`}
                      className="block w-full text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

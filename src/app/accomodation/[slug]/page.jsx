"use client";

import React from "react";
import room1 from "../../../../public/room1.jpg";
import room2 from "../../../../public/room2.jpg";
import room3 from "../../../../public/room3.jpg";
import room4 from "../../../../public/room1.jpg";
import person1 from "../../../../public/Person1.jpg";
import person2 from "../../../../public/Person2.jpg";
import person3 from "../../../../public/Person4.jpg";
import person4 from "../../../../public/Person5.jpg";
import Banner from "./components/Banner";
import ImageGallery from "./components/ImageGallery";

import Amenities from "./components/Amenities";
import Reviews from "./components/Reviews";
import Suggestions from "./components/Suggestions";
import OverviewAndForm from "./components/OverviewAndForm"

const images = [
  { image: room1 },
  { image: room2 },
  { image: room3 },
  { image: room4 }
];

const roomData = {
  "deluxe-room": {
    title: "Deluxe Room",
    banner: "/room1.jpg",
    description: `Experience comfort and luxury in our well-appointed rooms, designed for relaxation and tranquility.
Each room features modern amenities, cozy furnishings, and stunning views of the surroundings.
Perfect for a peaceful getaway, our rooms ensure a memorable stay for every guest.`,
    size: "105 m²",
    guests: "Up to 2 guests",
    bed: "Queen bed",
    images: [room1, room2, room3],
    price: "3000",
    rating: 4.8,
  },
  "deluxe-suite-room": {
    title: "Deluxe Suite Room",
    banner: "/bg2.jpg",
    description: `Our Deluxe Suite Room is a...`,
    size: "135 m²",
    guests: "Up to 3 guests",
    bed: "King bed",
    images: [room1, room2, room3],
    price: "3000",
    rating: 4.9,
  },
  "presidential-suite-king": {
    title: "Aarambha Suite King",
    banner: "/bg3.jpg",
    description: `Experience the pinnacle of luxury...`,
    size: "180 m²",
    guests: "Up to 4 guests",
    bed: "King bed",
    images: [room1, room2, room3],
    price: "3000",
    rating: 5.0,
  },
};

const reviews = [
  {
    image: person1,
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    comment: "Absolutely stunning room!"
  },
  {
    image:person2,
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "2024-01-10",
    comment: "Great experience overall."
  },
  {
    image: person3,
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    comment: "Absolutely stunning room!"
  },
  {
    image: person4,
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "2024-01-10",
    comment: "Great experience overall."
  },
   {
    image: person1,
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    comment: "Absolutely stunning room!"
  },
  {
    image: person4,
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "2024-01-10",
    comment: "Great experience overall."
  },
];

export default function RoomPage({ params }) {
  const { slug } = React.use(params);
  const room = roomData[slug];

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Room Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Banner room={room} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ImageGallery images={images} />
      <OverviewAndForm room={room} />
        <Amenities />
        <Reviews reviews={reviews} rating={room.rating} />
        <Suggestions roomData={roomData} slug={slug} />
        
      </div>
    </div>
  );
}


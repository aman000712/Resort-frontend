"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendar,
  FaUser,
  FaUsers,
  FaRuler,
  FaBed,
  FaStar,
  FaWifi,
  FaDoorOpen,
  FaBolt,
  FaPhone,
  FaBell,
  FaConciergeBell,
  FaUtensils,
  FaSnowflake,
  FaTshirt,
  FaCar,
  FaClock,
  FaCoffee,
} from "react-icons/fa";
import * as Yup from "yup";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";

import room1 from "../../../../public/room1.jpg";
import room2 from "../../../../public/room2.jpg";
import room3 from "../../../../public/room3.jpg";
import room4 from "../../../../public/room1.jpg";

const images = [
  {
    "image": room1
  },
  {
    "image": room2
  },
  {
    "image": room3
  },
  {
    "image": room4
  }
  ,]

const roomData = {
  "deluxe-room": {
    title: "Deluxe Room",
    banner: "/room1.jpg",
    description: `Our Deluxe Rooms are designed for travelers seeking a balance of comfort, style, and modern living. Each room features elegant interiors with soft lighting, premium furnishings, and contemporary amenities to ensure a pleasant and relaxing experience.`,
    size: "105 m²",
    guests: "Up to 2 guests",
    bed: "Queen bed",
    images: [room1, room2, room3, room1, room2, room3, room1],
    price: "3000",
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
    price: "3000",
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
    price: "3000",
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
    comment:
      "Absolutely stunning room! The attention to detail and luxury amenities made our stay unforgettable. Will definitely come back!",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great experience overall. The room was spacious and clean. Service was excellent. Minor issue with WiFi but was resolved quickly.",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    date: "2024-01-08",
    comment:
      "Perfect getaway! The bed was incredibly comfortable and the view was breathtaking. Highly recommend this room for couples.",
  },
];
const validationSchema = Yup.object({
  FullName: Yup.string().required("Required"),
  Email: Yup.string().email("Invalid email").required("Required"),
  Phone: Yup.string()
    .matches(/^\d+$/, "Must be a number")
    .min(10, "At least 10 digits")
    .required("Required"),
  CheckIn: Yup.string().required("Required"),
  CheckOut: Yup.string().required("Required"),
  Guests: Yup.number().min(1, "At least 1 guest").required("Required"),
  RoomType: Yup.string().required("Required"),
});
const handleSubmit = (values) => {
  console.log("Form Values:", values);
};

export default function RoomPage({ params }) {

  const reviewItems = [...reviews, ...reviews];



  const { slug } = React.use(params);
  const room = roomData[slug];



  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h1>
          <Link
            href="/accomodation"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Return to Accommodations
          </Link>
        </div>
      </div>
    );
  }


  const renderStars = (rating) => {
    const full = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < full ? "text-yellow-400" : "text-gray-300"} />
    ));
  };

  return (
    <div className="min-h-screen bg-white">

      <section className="relative h-96 md:h-[500px]">
        <Image
          src={room.banner || room4}
          alt="room"
          fill
          className="object-cover"

        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">

            <h1 className="text-4xl md:text-6xl font-bold mb-4">{room.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Luxury accommodation with premium amenities for an unforgettable stay
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3">
          {
            images.map((val, i) => {
              return (
                <div key={i}>
                  <Image
                    src={val.image}
                    alt="here"
                    className="object-cover w-64 h-64"
                  />
                </div>
              )
            })
          }
        </div>

       

        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

          <div className="bg-white rounded-lg p-6  ">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">Room Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{room.description}</p>

            <div className="grid grid-rows-1 md:grid-rows-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-red-50 rounded-md">
                  <FaRuler className="text-red-800 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-semibold text-gray-800">{room.size}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-red-50 rounded-md">
                  <FaUsers className="text-red-800 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Guests</p>
                  <p className="font-semibold text-gray-800">{room.guests}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-red-50 rounded-md">
                  <FaBed className="text-red-800 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bed Type</p>
                  <p className="font-semibold text-gray-800">{room.bed}</p>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">
              Book Your Stay
            </h3>

            <Formik
              initialValues={{
                FullName: "",
                Email: "",
                Phone: "",
                CheckIn: "",
                CheckOut: "",
                Adults: 1,
                Children: 0,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaMapMarkerAlt className="inline mr-1 text-red-800" />
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="FullName"
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-800 focus:border-red-800"
                    />
                    <ErrorMessage
                      name="FullName"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="Email"
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-800 focus:border-red-800"
                    />
                    <ErrorMessage
                      name="Email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Field
                      type="text"
                      name="Phone"
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-800 focus:border-red-800"
                    />
                    <ErrorMessage
                      name="Phone"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaCalendar className="inline mr-1 text-red-800" />
                        Check-in
                      </label>
                      <Field
                        type="date"
                        name="CheckIn"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-800 focus:border-red-800"
                      />
                      <ErrorMessage
                        name="CheckIn"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaCalendar className="inline mr-1 text-red-800" />
                        Check-out
                      </label>
                      <Field
                        type="date"
                        name="CheckOut"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-800 focus:border-red-800"
                      />
                      <ErrorMessage
                        name="CheckOut"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaUser className="inline mr-1 text-red-800" />
                        Adults
                      </label>
                      <Field
                        type="number"
                        name="Adults"
                        min={1}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-800 focus:border-red-800"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaUsers className="inline mr-1 text-red-800" />
                        Children
                      </label>
                      <Field
                        type="number"
                        name="Children"
                        min={0}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-800 focus:border-red-800"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-3 bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition duration-200 shadow-sm hover:shadow-md"
                  >
                    Check Availability
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </section>


        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-red-800 mb-8">Amenities & Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group">
                  <span className="text-red-600 text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Guest Reviews</h2>
              <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full">
                <IoIosStar className="text-yellow-400 text-xl" />
                <span className="font-bold text-gray-900">{room.rating}</span>
                <span className="text-gray-600">({reviews.length} reviews)</span>
              </div>
            </div>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shadow-sm">
                      <FaUser className="text-red-600 text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                        <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">You May Also Like</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover other luxurious accommodations that might suit your preferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(roomData)
              .filter(([key]) => key !== slug)
              .map(([key, r]) => (
                <div key={key} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={room4}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="font-bold text-red-600">{r.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{r.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{r.description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-gray-500 font-medium">{r.size} • {r.guests}</span>
                      <span className="flex items-center gap-1 text-sm font-semibold">
                        <IoIosStar className="text-yellow-400" />
                        {r.rating}
                      </span>
                    </div>
                    <Link
                      href={`/accomodation/${key}`}
                      className="block w-full text-center bg-red-800 text-white py-3 rounded-xl font-semibold hover:bg-red-900 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
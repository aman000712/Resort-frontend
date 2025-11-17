"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRuler, FaUsers, FaBed, FaMapMarkerAlt, FaCalendar, FaUser } from "react-icons/fa";

export default function RoomBooking({ room }) {
  const validationSchema = Yup.object({
    FullName: Yup.string().required("Full name is required"),
    Email: Yup.string().email("Invalid email").required("Email is required"),
    Phone: Yup.string().required("Phone number is required"),
    CheckIn: Yup.string().required("Check-in date is required"),
    CheckOut: Yup.string().required("Check-out date is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-auto">
      
    
      <div className="bg-white rounded-lg p-6">
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

      {/* RIGHT SIDE : BOOKING FORM */}
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

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaMapMarkerAlt className="inline mr-1 text-red-800" />
                  Full Name
                </label>
                <Field
                  type="text"
                  name="FullName"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
                <ErrorMessage
                  name="FullName"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Field
                  type="text"
                  name="Phone"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
                <ErrorMessage
                  name="Phone"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Check-in / Check-out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FaCalendar className="inline mr-1 text-red-800" />
                    Check-in
                  </label>
                  <Field
                    type="date"
                    name="CheckIn"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <ErrorMessage
                    name="CheckOut"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              </div>

              {/* Adults / Children */}
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              {/* Submit Button */}
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
  );
}

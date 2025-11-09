"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ReservationForm() {
  const formFields = [
    { name: "FullName", type: "text", placeholder: "Full Name" },
    { name: "Email", type: "email", placeholder: "Email" },
    { name: "Phone", type: "number", placeholder: "Phone Number" },
    { name: "CheckIn", type: "date", placeholder: "Check-In Date" },
    { name: "CheckOut", type: "date", placeholder: "Check-Out Date" },
    { name: "Guests", type: "number", placeholder: "Number of Guests" },
    {
      name: "RoomType",
      type: "select",
      placeholder: "Select Room Type",
      options: [
        "Deluxe Room",
        "Deluxe Suite Room",
        "Presidential Suite",
        "Family Room",
      ],
    },
    { name: "SpecialRequests", type: "textarea", placeholder: "Special Requests (optional)" },
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

  return (
    <div className="flex flex-col items-center justify-center py-24 w-full">
    
      <div className="w-11/12 md:w-10/12 bg-red-800 text-white text-2xl font-semibold px-6 py-3 rounded-t-md">
        Resort Booking Form
      </div>

      {/* Form Body */}
      <div className="w-11/12 md:w-10/12 bg-white shadow-md rounded-b-md p-8">
        <Formik
          initialValues={{
            FullName: "",
            Email: "",
            Phone: "",
            CheckIn: "",
            CheckOut: "",
            Guests: "",
            RoomType: "",
            SpecialRequests: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Booking Details:", values);
            alert("Your booking request has been submitted successfully!");
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              {formFields.map((field, i) => (
                <div
                  key={i}
                  className={`${
                    field.name === "SpecialRequests" ? "md:col-span-2" : ""
                  } flex flex-col`}
                >
                  <label className="text-gray-900 font-semibold">
                    {field.placeholder}
                  </label>

                  {field.type === "select" ? (
                    <Field
                      as="select"
                      name={field.name}
                      className={`w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 ${
                        errors[field.name] && touched[field.name]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-red-800"
                      }`}
                    >
                      <option value="">Select Room Type</option>
                      {field.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  ) : (
                    <Field
                      as={field.type === "textarea" ? "textarea" : "input"}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 ${
                        errors[field.name] && touched[field.name]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-red-800"
                      }`}
                    />
                  )}

                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              ))}

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-red-800 text-white px-8 py-2 cursor-pointer font-semibold w-full rounded-md hover:bg-gray-700 transition"
                >
                  Submit Booking
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";

// export default function ContactSection() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent!");
//     setForm({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
//       <div className="bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl">
       
//         <div className="w-full h-[450px] bg-gray-200">
//           <iframe
//             className="w-full h-full border-0"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0124098439163!2d85.31879157454894!3d27.71724598278954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1910b35b2bcd%3A0x74d1e7a2a87536b8!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>

   
//         <div className="p-8 flex flex-col justify-center">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//             Send us a Message
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-600 outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-600 outline-none"
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={form.subject}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-600 outline-none"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Message"
//               value={form.message}
//               onChange={handleChange}
//               rows="5"
//               className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-600 outline-none resize-none"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 rounded-md transition-all"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const forming = [
    { name: "Name", type: "text", placeholder: "Your Name" },
    { name: "Phone", type: "number", placeholder: "Your Number" },
    { name: "Email", type: "email", placeholder: "Your Email" },
    { name: "WriteMessage", type: "textarea", placeholder: "Write a message" },
  ];

  const logos = [
    <FaFacebook />,
    <AiFillInstagram />,
    <FaYoutube />,
    <FaLinkedin />,
  ];

  const contact = [
    {
      logo: <FaLocationArrow />,
      title: "Dhawaha Butwal-15, Rupandehi, Nepal",
    },
    {
      logo: <IoIosCall />,
      title: "071562537, 9857034838, 9857043464, 9846970252",
    },
    { logo: <MdEmail />, title: "aarambharesort@gmail.com" },
  ];

  const validationSchema = Yup.object({
    Name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    Phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone must be a valid number")
      .min(10, "Phone number must be at least 10 digits"),
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    WriteMessage: Yup.string()
      .required("Message is required")
      .min(30, "Message must be at least 30 characters"),
  });

  return (
    <div className="h-full bg-gray-100 py-12 w-full flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row  py-12 gap-12 mx-auto w-10/12 h-full">
       
        <div className=" gap-6  rounded-md w-full md:w-1/2">
          <h1 className="text-3xl  font-semibold pb-3 text-red-800"
          style={{ fontFamily: "Times New Roman, Times, serif" }}>
            Send us a message
          </h1>
          <Formik
            initialValues={{ Name: "", Phone: "", Email: "", WriteMessage: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form Submitted:", values);
              alert("Form submitted successfully!");
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-4">
                {forming.map((field, i) => (
                  <div key={i}>
                    <Field
                      as={field.type === "textarea" ? "textarea" : "input"}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`w-full resize-none border text-sm p-2 mt-2 rounded-md focus:outline-none focus:ring-2 ${
                        errors[field.name] && touched[field.name]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-400 focus:ring-blue-400"
                      }`}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="bg-red-800 font-semibold text-white py-2 px-3 rounded-md hover:bg-gray-700 transition duration-300 w-full cursor-pointer"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>

          <div className="flex flex-col py-5 gap-4">
            <div className="flex justify-between items-center w-full gap-2 ">
              <div className="bg-gray-400 w-full h-0.5"></div>
              <h1 className="font-light text-gray-600 text-sm ">FindUs</h1>
              <div className="bg-gray-400 w-full h-0.5"></div>
            </div>
            <div className="flex justify-center items-center gap-3 text-xl">
              {logos.map((val, i) => (
                <div key={i} className="cursor-pointer">
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full h-full ">
          <div className=" w-9/10 h-96 flex flex-col text-red-800 justify-center items-start gap-7 mx-auto py-12 px-6">
            <div className="text-4xl font-medium">Contact Information</div>
            {contact.map((val, i) => (
              <div
                key={i}
                className="flex gap-2 items-start  justify-center"
              >
                <div>{val.logo}</div>
                <div>{val.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-10/12 shadow-2xl shadow-red-100 object-cover  h-[70vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3532.8658961844417!2d83.45987317491965!3d27.690539376192216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1762065893461!5m2!1sen!2snp"
          className="h-full w-full border-0 rounded-md"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
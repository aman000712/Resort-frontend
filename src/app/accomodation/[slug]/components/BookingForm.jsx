"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  FullName: Yup.string().required("Required"),
  Email: Yup.string().email("Invalid email").required("Required"),
  Phone: Yup.string().required("Required"),
});

export default function BookingForm() {
  const handleSubmit = (values) => console.log(values);

  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold text-red-800 mb-4">Book Your Stay</h3>

      <Formik
        initialValues={{
          FullName: "",
          Email: "",
          Phone: "",
          CheckIn: "",
          CheckOut: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-5">
            <Input name="FullName" label="Full Name" />
            <Input name="Email" label="Email" />
            <Input name="Phone" label="Phone" />
            <Input name="CheckIn" type="date" label="Check In" />
            <Input name="CheckOut" type="date" label="Check Out" />

            <button className="bg-red-800 text-white py-3 rounded-lg">
              Check Availability
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function Input({ label, name, type = "text" }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <Field
        type={type}
        name={name}
        className="w-full border rounded-lg px-3 py-2"
      />
      <ErrorMessage name={name} component="div" className="text-red-600 text-sm" />
    </div>
  );
}

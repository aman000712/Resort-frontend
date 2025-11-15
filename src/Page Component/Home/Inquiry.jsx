"use client"

import { useState } from "react";
import ReservationForm from "./ReservationForm";


export default function Inquiry() {
  const [openForm, setOpenForm] = useState(false);

  const handleButton = () => {
    setOpenForm(true);
  }

  if(openForm){
    return(
      <ReservationForm
       blured={() => setOpenForm(false)}
                setOpenForm={setOpenForm}
      />
    )
  }
  return (
    <div className="relative w-screen h-[60vh] flex items-center justify-center text-white overflow-hidden">
     
    

   
      <div className="absolute inset-0 bg-black/60"></div>

    
      <div className="relative z-10 text-center  ">
        <h2 className="text-5xl font-serif mb-6">Make a Reservation</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-200">
          If you have any queries or would like to make a reservation, please don’t hesitate to contact us.
        </p>

        <button onClick={handleButton}
        className="bg-red-800 cursor-pointer text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-200 hover:text-red-800 transition">
          BOOK NOW
        </button>

        <div className="mt-10 text-gray-300">
          <p className="text-lg">
            Or call us directly <span className="font-semibold">+977 9802322755</span>
          </p>
          <p className="mt-2 text-gray-400">info@aarambharesort.com</p>
        </div>
      </div>
    </div>
  );
}

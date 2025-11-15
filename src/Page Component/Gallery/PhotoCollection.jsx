"use client";
import Image from "next/image";
import { useState } from "react";

// Marriage Images
import mimage1 from "../../../public/marriage1.jpg";
import mimage2 from "../../../public/marriage2.jpg";
import mimage3 from "../../../public/marriage3.jpg";
import mimage4 from "../../../public/marriage4.jpg";
import mimage5 from "../../../public/marriage5.jpg";
import mimage6 from "../../../public/marriage6.jpg";
import mimage7 from "../../../public/marriage7.jpg";
import mimage8 from "../../../public/marriage8.jpg";
import mimage9 from "../../../public/marriage9.jpg";
import mimage10 from "../../../public/marriage10.jpg";

// Birthday
import bimage1 from "../../../public/bdy1.jpg";
import bimage2 from "../../../public/bdy2.jpg";
import bimage3 from "../../../public/bdy3.jpg";
import bimage4 from "../../../public/bdy4.jpg";
import bimage5 from "../../../public/bdy5.jpg";
import bimage6 from "../../../public/bdy6.jpg";
import bimage7 from "../../../public/bdy7.jpg";
import bimage8 from "../../../public/bdy8.jpg";
import bimage9 from "../../../public/decoration.jpg";

// Meetings
import meet1 from "../../../public/meeting1.jpg";
import meet2 from "../../../public/meeting2.jpg";
import meet3 from "../../../public/meeting3.jpg";
import meet4 from "../../../public/meeting4.jpg";

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function BlogCategory() {
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    mimage1, mimage2, mimage3, mimage4, mimage5,
    mimage6, mimage7, mimage8, mimage9, mimage10,
    bimage1, bimage2, bimage3, bimage4, bimage5,
    bimage6, bimage7, bimage8, bimage9,
    meet1, meet2, meet3, meet4,
  ];

  const imagesToShow = showAll ? allImages : allImages.slice(0, 9);

  return (
    <div className="w-full min-h-lvh bg-white flex flex-col gap-10 items-center py-16">

      <div className="w-full relative flex flex-col items-center justify-center">
        <h1
          className={`${greatVibes.className} lg:text-7xl text-5xl absolute text-red-800 -top-6 lg:-top-10 italic`}
        >
          Gallery
        </h1>

        <h2
          className="text-4xl text-gray-400"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          Photo's Collection
        </h2>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {imagesToShow.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="Gallery Image"
            className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            priority
          />
        ))}
      </div>

   
      {!showAll && (
        <div className="w-10/12  flex justify-end px-6">
          <button
            onClick={() => setShowAll(true)}
            className="text-red-800 border border-red-800 px-4 py-2 cursor-pointer rounded-lg hover:bg-red-800 hover:text-white transition"
          >
            Show More
          </button>
        </div>
      )}

    </div>
  );
}

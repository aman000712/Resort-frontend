"use client";
import Image from "next/image";
import { useState } from "react";

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

import bimage1 from "../../../public/bdy1.jpg";
import bimage2 from "../../../public/bdy2.jpg";
import bimage3 from "../../../public/bdy3.jpg";
import bimage4 from "../../../public/bdy4.jpg";
import bimage5 from "../../../public/bdy5.jpg";
import bimage6 from "../../../public/bdy6.jpg";
import bimage7 from "../../../public/bdy7.jpg";
import bimage8 from "../../../public/bdy8.jpg";
import bimage9 from "../../../public/decoration.jpg";

import meet1 from "../../../public/meeting1.jpg";
import meet2 from "../../../public/meeting2.jpg";
import meet3 from "../../../public/meeting3.jpg";
import meet4 from "../../../public/meeting4.jpg";

export default function BlogCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Marriage");

  const categories = {
    Marriage: [mimage1, mimage2, mimage3, mimage4, mimage5, mimage6, mimage7, mimage8, mimage9, mimage10],
    Birthday: [bimage1, bimage2, bimage3, bimage4, bimage5, bimage6, bimage7, bimage8, bimage9],
    Meetings: [meet1, meet2, meet3, meet4],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const imagesToDisplay = categories[selectedCategory];

  return (
    <div className="w-full min-h-lvh bg-white flex flex-col gap-10 items-center py-10">
    
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-red-800 tracking-widest uppercase">EVENTS</h1>
        <h2
          className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          Categories of Events
        </h2>
      </div>

      <div className="flex gap-8 text-lg font-semibold text-red-800">
        {Object.keys(categories).map((cat) => (
          <div
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`cursor-pointer px-2 pb-1 border-b-2 transition-all duration-200 ${
              selectedCategory === cat
                ? "border-red-800 text-red-800"
                : "border-transparent text-gray-500 hover:text-red-800"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>


      <div className="flex flex-wrap justify-center gap-8">
        {imagesToDisplay.map((img, i) => (
          <div key={i}>
            <Image
              src={img}
              alt={selectedCategory}
              className="w-64 h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

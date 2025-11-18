"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Reviews({ reviews }) {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col gap-8">
        {reviews.map((rev, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-2">
              {/* Name and Education */}
              <div>
                <h3 className="text-gray-900 font-bold text-lg"># {rev.name}</h3>
                <p className="text-gray-600 font-medium text-sm">{rev.education}</p>
              </div>
              
              {/* Review Content */}
              <p className="text-gray-700 leading-relaxed text-base">
                {rev.comment}
              </p>
              
              {/* Read More Link */}
              <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors duration-200 self-start">
                Read More
              </button>
            </div>
            
            {/* Separator - only show if not last item */}
            {i < reviews.length - 1 && (
              <div className="border-t border-gray-300 mt-6"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
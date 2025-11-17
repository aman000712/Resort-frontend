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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Reviews({ reviews }) {
  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {reviews.map((rev, i) => (
        <motion.div
          key={i}
          className="flex gap-4 p-4 w-11/12 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex-shrink-0">
            <Image
              src={rev.image}
              alt={rev.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-900 font-semibold text-lg">{rev.name}</p>
              <p className="text-yellow-500 font-medium mt-1">{rev.rating} ★</p>
            </div>
            <p className="text-gray-600 mt-2">{rev.comment}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

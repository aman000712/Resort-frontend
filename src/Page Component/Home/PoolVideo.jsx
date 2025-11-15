"use client";

import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PoolVideo() {
  const [showIcon, setShowIcon] = useState(true);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Hide the play icon with animation
    setShowIcon(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-[70vh] object-cover"
        src="/poolvideo.mp4"
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Play Icon */}
      {showIcon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.85, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
            onClick={handlePlay}
            className="p-8 bg-white/30 backdrop-blur-lg rounded-full cursor-pointer shadow-xl"
          >
            <FaPlay className="text-white text-5xl" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

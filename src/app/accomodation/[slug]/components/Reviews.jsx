// "use client";
// import { motion } from "framer-motion";
// import { IoIosStar } from "react-icons/io";

// export default function Reviews({ reviews }) {
  
//   const rating =
//     reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

//   return (
//     <section className="flex flex-col w-full py-12 h-[70vh]">
//       <div className="flex items-center justify-between mb-8 px-4 md:px-0">
//         <h2 className="text-2xl font-bold text-red-800">Guest Reviews</h2>
//         <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
//           <IoIosStar className="text-yellow-400 text-xl" />
//           <span className="font-bold text-gray-900 ml-2">{rating.toFixed(1)}</span>
//           <span className="text-gray-600 ml-1">({reviews.length} reviews)</span>
//         </div>
//       </div>

//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {reviews.map((review, index) => (
//           <motion.div
//             key={review.id + index}
//             className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={review.image}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full object-cover shadow-sm"
//               />
//               <div className="flex-1">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
//                   <span className="text-sm text-gray-500">
//                     {new Date(review.date).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-1 mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <IoIosStar
//                       key={i}
//                       className={`text-xl ${
//                         i < review.rating ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <p className="text-gray-600 leading-relaxed text-sm">{review.comment}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";

export default function Reviews({ reviews }) {
  
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="flex flex-col w-full py-12 h-[50vh] overflow-hidden">
      <div className="flex items-center justify-between mb-8 px-4 md:px-0">
        <h2 className="text-2xl font-bold text-red-800">Guest Reviews</h2>
        <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
          <IoIosStar className="text-yellow-400 text-xl" />
          <span className="text-gray-600 ml-1">({reviews.length} reviews)</span>
        </div>
      </div>

      <motion.div
        className="flex gap-6"
        style={{ display: "flex" }}
        animate={{ x: [-0, -window.innerWidth] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div
            key={review.id + index}
            className="min-w-[300px] bg-gray-100 rounded-xl p-6 shadow-md flex-shrink-0"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt="person"
                className="w-14 h-14 rounded-full object-cover shadow-sm"
              />
              <div className="flex-1">
                <div className="flex flex-col items-start justify-between">
                  <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                  <span className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar
                      key={i}
                      className={`text-xl ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{review.comment}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

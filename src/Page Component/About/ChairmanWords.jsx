import Image from "next/image";
import Pandey from "../../../public/Pandeysir.jpeg";
import signature from "../../../public/signature.png";

export default function ChairmanWords() {
  return (
    <section className="py-12 md:py-20 ">
      <div className="container mx-auto px-4">
      
       
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto max-h-[90vh] md:max-h-[80vh]">
          <div className="grid md:grid-cols-2 gap-0 h-full">
           
            <div className="relative h-64 md:h-full min-h-[300px] max-h-[40vh] md:max-h-full">
              <Image
                src={Pandey}
                alt="Aayush Pandey - Chairman"
                fill
                className="object-cover"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

           
            <div className="p-6 md:p-8 flex flex-col justify-center overflow-y-auto max-h-[50vh] md:max-h-full">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                 Aayush Pandey
                </h2>
                <p className="text-lg text-red-600 font-semibold mt-1">
                  Chairman & Founder
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Rupakot Resort is the result of a long-held dream. Even while
                  living in Belgium and running several restaurants, my thoughts
                  were always with Nepal — especially Rupakot. I had always imagined
                  building something meaningful here, something that would showcase
                  the natural beauty of the region.
                </p>

                <p>
                  Eventually, I made the decision to return. The transition from
                  life in Europe back to Nepal wasn't easy, but it felt right. I
                  wanted to create a destination that felt peaceful, authentic, and
                  close to nature.
                </p>

                <p>
                  Today, Rupakot Resort stands as a testament to that vision — 
                  a place where guests can experience the serene beauty of Nepal 
                  while enjoying world-class hospitality.
                </p>
              </div>

              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="italic text-gray-600 mb-3">Warm regards,</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={signature}
                    alt="Signature"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
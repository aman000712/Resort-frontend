import Image from "next/image";
import image from "../../../public/hotelview2.jpg";

export default function ResortInfo() {
    return (
        <section className="bg-white py-16 flex items-center h-lvh justify-center">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-10/12 max-w-6xl h-8/12 overflow-hidden ">

                <div className="relative w-full h-[400px] md:h-auto">
                    <Image
                        src={image}
                        alt="Aarambha Hotel View"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>


                <div className="flex flex-col gap-6 justify-center p-10 ">
                    <h2
                        className="text-5xl text-red-800"
                        style={{ fontFamily: "Times New Roman, Times, serif" }}
                    >
                        Aarambha Hotel
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        Here's the text from the image you uploaded:

                        ---

                        Nestled amidst the breathtaking beauty of nature, Arambha Resort is a sanctuary for those seeking both relaxation and adventure. Located in the heart of Butwal, we offer a unique blend of modern comfort and traditional charm. From the moment you arrive, you are greeted with warm hospitality, serene surroundings, and the gentle touch of mountain air. Our resort is designed to be more than just a place to stay — it is a place where unforgettable memories are made.

                        Every corner of Arambha Resort reflects our commitment to quality, comfort, and care. Whether you are here to indulge in a peaceful getaway, explore scenic hiking trails, or immerse yourself in local culture, we ensure your experience is personalized to your needs. With luxurious rooms, mouth-watering cuisine, and a wide range of activities, we invite you to escape the ordinary and embrace the magic of our mountain retreat.

                        ---

                    </p>
                </div>
            </div>
        </section>
    );
}

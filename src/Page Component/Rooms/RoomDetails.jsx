import Image from "next/image";
import room from "../../../public/room2.jpg"

export default function RoomDetails(){
    return(
        <div className="bg-white h-auto py-10">
             <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-[#B69100] tracking-widest uppercase">Explore</h1>
        <h2
          className="text-5xl text-center"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          Hotel Master's Rooms
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-10 w-9/12 mx-auto  mt-20 py-10 items-center justify-center">
        <div className="flex flex-col gap-6 px-4  justify-center">
            <div  className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}>Superior Suite Rooms</div>
            <div className="text-gray-500">
                Feel right at home in our cosy 33.5m2 standard rooms with oak wood flooring and modern-yet-simple finishes.
            </div>
            <div className="text-gray-500 font-semibold">Total No.of Rooms : 28</div>
            <button className=" border-1 border-gray-500 text-gray-500 w-fit h-fit px-4 py-2">view this room</button>
        </div>
        <Image
        src={room}
        alt="superior rooms"
        width={800}
        height={500}
        />

      </div>

       <div className="flex  gap-10  w-9/12 mx-auto  items-center justify-center mt-20 py-10">
        <Image
        src={room}
        alt="superior rooms"
        width={800}
        height={500}
        className=""
        />
        <div className="flex flex-col gap-6 px-4  w-full justify-center">
            <div  className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}>Deluxe Suite Rooms</div>
            <div className="text-gray-500">
              Our deluxe rooms offer a stylish place to stay that doesn’t compromise on comfort and quality.
            </div>
            <div className="text-gray-500 font-semibold">Total No.of Rooms : 16</div>
            <button className=" border-1 border-gray-500 text-gray-500 w-fit h-fit px-4 py-2">view this room</button>
        </div>
       

      </div>



       <div className="grid grid-cols-2 gap-10 w-9/12 mx-auto  mt-20 py-10">
        <div className="flex flex-col gap-6 px-4  justify-center">
            <div  className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}>Aarambha (Presidential) Suite King</div>
            <div className="text-gray-500">
                With a north-facing terrace area that’s perfect for outdoor lounging and dining, as well as an outdoor jacuzzi, you might be tempted to extend your stay indefinitely
            </div>
            <div className="text-gray-500 font-semibold">Total No.of Rooms : 2</div>
            <button className=" border-1 border-gray-500 text-gray-500 w-fit h-fit px-4 py-2">view this room</button>
        </div>
        <Image
        src={room}
        alt="superior rooms"
        width={800}
        height={500}
        />

      </div>
        </div>
    )
}



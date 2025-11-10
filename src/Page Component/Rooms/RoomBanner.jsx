import Link from "next/link";

export default function RoomBanner() {
    return(
        <div className=" w-full h-[60vh] flex items-center justify-center bg-black/50 opacity-80">
            <div className="flex flex-col gap-2 items-center  text-white justify-center">
                <div className="text-8xl  font-bold"
                    style={{ fontFamily: "Times New Roman, Times, serif" }}
            >Rooms</div>
        
            <Link href={"/"} className="underline text-white text-2xl cursor-pointer hover:text-[#B69100]">Home</Link>

            </div>
        </div>
    )
}
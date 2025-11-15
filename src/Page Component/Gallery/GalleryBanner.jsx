import Link from "next/link";

export default function GalleryBanner() {
    return (
        <div className=" opacity-80 bg-black/50  w-screen h-[60vh] flex items-center justify-center">
            <div className="flex flex-col gap-2 items-center  text-white justify-center">
                <div className="text-8xl  font-bold"
                    style={{ fontFamily: "Times New Roman, Times, serif" }}
                >Gallery</div>
                <div className="flex  items-center justify-center gap-2">
                    <Link href={"/"} className=" text-white text-lg cursor-pointer hover:text-[#B69100]">Home</Link>
                    <div> / </div>
                    <div className="underline text-lg">Event</div>
                </div>
            </div>
        </div>
    )
}
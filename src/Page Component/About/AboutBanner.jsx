import Link from "next/link";

export default function AboutBanner() {
    return(
        <div className="bg-transparent w-screen h-[60vh] flex items-center justify-center">
            <div className="flex flex-col gap-2 items-center  text-white justify-center">
                <div className="text-8xl  font-bold"
                    style={{ fontFamily: "Times New Roman, Times, serif" }}
            >About</div>
            <Link href={"/"} className="underline text-white text-2xl cursor-pointer hover:text-[#B69100]">Home</Link>
            </div>
        </div>
    )
}
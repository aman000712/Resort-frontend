"use client";

export default function PoolVideo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/poolvideo.mp4" 
        autoPlay
        loop
        muted
        playsInline
      ></video>

 
      <div className="absolute inset-0 bg-black/40"></div>


      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-serif">
        Relax by the Pool
      </div>
    </div>
  );
}

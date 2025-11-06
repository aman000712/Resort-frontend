"use client";

export default function PoolVideo() {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        className="w-full h-[70vh] object-cover"
        src="/poolvideo.mp4" 
        autoPlay
        loop
        muted
        playsInline
      ></video>

 
      <div className="absolute inset-0 bg-black/40"></div>


      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-serif">
        
      </div>
    </div>
  );
}

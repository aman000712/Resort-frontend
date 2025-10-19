import AboutSection from "@/Page Component/About/AboutSection";
import BlogSection from "@/Page Component/Blogs/BlogSection";
import Gallery from "@/Page Component/Home/Gallery";
import HeroSection from "@/Page Component/Home/HeroSection";
import Inquiry from "@/Page Component/Home/Inquiry";
import PoolVideo from "@/Page Component/Home/PoolVideo";
import Vision from "@/Page Component/Home/Vision";
import ExploreRoom from "@/Page Component/Rooms/ExploreRoom";

export default function Home(){
  return(
    <div>
    <HeroSection/>
     <Vision/>
     <ExploreRoom/>
     <AboutSection/>
     <BlogSection/>
    <PoolVideo/>
    <Inquiry/>
     <Gallery/>
    </div>
  )
}
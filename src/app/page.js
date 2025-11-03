import AboutSection from "@/Page Component/About/AboutSection";
import BlogSection from "@/Page Component/Blogs/BlogSection";
import ActivitiesHighlight from "@/Page Component/Home/Activities";
import Gallery from "@/Page Component/Home/Gallery";
import HeroSection from "@/Page Component/Home/HeroSection";
import Inquiry from "@/Page Component/Home/Inquiry";
import PoolVideo from "@/Page Component/Home/PoolVideo";
import ReasonToStay from "@/Page Component/Home/ReasonToStay";
import Testimony from "@/Page Component/Home/Testimony";
import Vision from "@/Page Component/Home/Vision";
import ExploreRoom from "@/Page Component/Rooms/ExploreRoom";

export default function Home(){
  return(
    <div>
    <HeroSection/>
     <Vision/>
     <ReasonToStay/>
     <ExploreRoom/>
     <AboutSection/>
     <Testimony/>
    <PoolVideo/>
    <ActivitiesHighlight/>
    <BlogSection/>
    <Inquiry/>
     <Gallery/>
    </div>
  )
}
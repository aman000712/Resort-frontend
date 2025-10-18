import AboutSection from "@/Page Component/About/AboutSection";
import BlogSection from "@/Page Component/Blogs/BlogSection";
// import Blogs from "@/Page Component/Blogs/Blogs";
// import Features from "@/Page Component/Home/Features";
import Gallery from "@/Page Component/Home/Gallery";
import HeroSection from "@/Page Component/Home/HeroSection";
import Vision from "@/Page Component/Home/Vision";
// import RestroAndBar from "@/Page Component/Resturant/RestroAndBar";
import ExploreRoom from "@/Page Component/Rooms/ExploreRoom";

export default function Home(){
  return(
    <div>
    <HeroSection/>
     <Vision/>
     <ExploreRoom/>
     <AboutSection/>
     <BlogSection/>
     <Gallery/>
    </div>
  )
}
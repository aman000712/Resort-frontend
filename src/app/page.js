import AboutSection from "@/Page Component/About/AboutSection";
// import BlogCategory from "@/Page Component/Blogs/BlogCategory";
import BlogStories from "@/Page Component/Blogs/BlogStories";
// import BlogSection from "@/Page Component/Blogs/BlogSection";
import ActivitiesHighlight from "@/Page Component/Home/Activities";
import Gallery from "@/Page Component/Home/Gallery";
import HeroSection from "@/Page Component/Home/HeroSection";
import Inquiry from "@/Page Component/Home/Inquiry";
import PoolVideo from "@/Page Component/Home/PoolVideo";
import ReasonToStay from "@/Page Component/Home/ReasonToStay";
import ResortFAQ from "@/Page Component/Home/ResortFAQ";
import Testimony from "@/Page Component/Home/Testimony";
import Vision from "@/Page Component/Home/Vision";
import ExploreRoom from "@/Page Component/Rooms/ExploreRoom";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Vision />
      <ReasonToStay />
      <AboutSection />
      <ExploreRoom />
      <Testimony />
      <PoolVideo />
      <ActivitiesHighlight />
      {/* <BlogCategory/> */}
      {/* <BlogSection /> */}
      <Inquiry />
      <BlogStories/>
      <ResortFAQ/>
      <Gallery />
    </>
  )
}
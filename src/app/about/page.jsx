import AboutBanner from "@/Page Component/About/AboutBanner";
import AboutSection from "@/Page Component/About/AboutSection";
import ResortInfo from "@/Page Component/About/ResortInfo";
import ActivitiesHighlight from "@/Page Component/Home/Activities";
import ResortFAQ from "@/Page Component/Home/ResortFAQ";
import Vision from "@/Page Component/Home/Vision";

export default function About(){
    return(
        <div>
            <AboutBanner/>
            <Vision/>
            <ResortInfo/>
            <AboutSection/>
            <ActivitiesHighlight/>
            <ResortFAQ/>
            
        </div>
    )
}
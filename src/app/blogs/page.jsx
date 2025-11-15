import BlogBanner from "@/Page Component/Blogs/BlogBanner";
import BlogSection from "@/Page Component/Blogs/BlogSection";
// import BlogStories from "@/Page Component/Blogs/BlogStories";

export default function Blogs(){
    return(
        <div>
            <BlogBanner/>
            {/* <BlogStories/> */}
            <BlogSection/>
            
        </div>
    )
}
import { MdOutlineMessage } from 'react-icons/md';
import { Great_Vibes } from "next/font/google";
import Link from 'next/link'; 
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function BlogStories() {
    const images = [
        {
            image: '/marriage1.jpg',
            slug: "marriage-blog",
            date: 'Sept 6, 2019 Admin',
            Title: 'Discover the most beautiful resorts in Asia',
            Button: 'Read more',
        },
        {
            image: '/marriage2.jpg',
            slug: "birthday-blog",
            date: 'Sept 6, 2019 Admin',
            Title: 'Relax and unwind at top luxury resorts',
            Button: 'Read more',
        },
        {
            image: '/marriage3.jpg',
            slug: "meeting-blog",
            date: 'Sept 6, 2019 Admin',
            Title: 'Experience the charm of seaside resorts',
            Button: 'Read more',
        },
    ];

    return (
        <div className="flex flex-col bg-gray-100 items-center justify-center h-lvh py-20 ">
            <div className="w-full relative flex flex-col items-center justify-center  ">
                <h1
                    className={`${greatVibes.className} lg:text-7xl text-5xl absolute text-red-800 -top-6 lg:-top-10 italic`}
                >
                    Blogs
                </h1>
                <h2
                    className="text-4xl text-gray-600"
                    style={{ fontFamily: "Times New Roman, Times, serif" }}
                >
                    Recent Blogs
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8 w-11/12 md:w-3/4 mx-auto">
                {images.map((val, i) => {
                    return (
                        <div key={i} className="flex flex-col gap-4 hover:bg-white cursor-pointer group transition-all duration-700 delay-75 ease-in-out p-4 hover:shadow-lg hover:rounded-lg">
                            <div className='h-80 overflow-clip w-full rounded-lg'>
                                <img
                                    src={val.image}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:rotate-3 delay-75 group-hover:scale-110"
                                    alt="Blog Thumbnail"
                                />
                            </div>
                            <div className="text-sm text-gray-500">{val.date}</div>
                            <div className="text-2xl font-bold sm:text-xl md:text-2xl">{val.Title}</div>
                    
                            <Link 
                                href={`/blogs/${val.slug}`} 
                                className="flex justify-between items-center hover:text-red-600 text-sm sm:text-base"
                            >
                                {val.Button}
                                <span className="text-gray-400 ml-2">
                                    <MdOutlineMessage />
                                </span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
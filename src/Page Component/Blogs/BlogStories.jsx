
import { MdOutlineMessage } from 'react-icons/md';

export default function BlogStories() {
     const images = [
        {
            image: '/marriage1.jpg',
            date: 'Sept 6, 2019 Admin',
            Title: 'Discover the most beautiful resorts in Asia',
            Button: 'Read more',
        },
        {
            image: '/marriage2.jpg',
            date: 'Sept 6, 2019 Admin',
            Title: 'Relax and unwind at top luxury resorts',
            Button: 'Read more',
        },
        {
            image: '/marriage3.jpg',
            date: 'Sept 6, 2019 Admin',
            Title: 'Experience the charm of seaside resorts',
            Button: 'Read more',
        },
    ];

    return (
        <div className="flex flex-col bg-gray-100 items-center justify-center h-auto py-16">

            <div className='flex flex-col items-center justify-center'>
                <div className='font-bold text-red-800'>Stories</div>
                <div
                className="text-5xl"
          style={{ fontFamily: "Times New Roman, Times, serif" }}>Recent Blogs</div>
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
                            <button className="flex justify-between items-center hover:text-red-600 text-sm sm:text-base">
                                {val.Button}
                                <span className="text-gray-400 ml-2">
                                    <MdOutlineMessage />
                                </span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}




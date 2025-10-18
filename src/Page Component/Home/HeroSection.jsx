"use client"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Banner() {
    const images = [
        {image: 'bg-2.webp' },
        { image: 'pool.jpg' },
        { image: 'hotelview2.jpg' },
        { image: 'bg-2.webp' }
    ];



    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const foodItems = [
        {
            foodPic: 'fooditem1.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        },
        {
            foodPic: 'decoration.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        },
        {
            foodPic: 'room3.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        },
        {
            foodPic: 'food1.jpg',
            Title: 'Grilled Beef with Potatoes',
            subTitle: 'Meat, Potatoes, Rice, Tomato'
        }
    ];

    return (
        <div className='relative'>

            <div className="relative h-screen w-full mx-auto">
                <div className='absolute h-full w-full z-10 bg-gradient-to-r from-gray-950 via-transparent to-black opacity-55  object-cover  top-0 left-0'></div>


                <Carousel
                    responsive={responsive}
                    autoPlay
                    interval={5000}
                    showStatus={false}
                    infiniteLoop
                    showThumbs={false}
                    renderIndicator={false}
                    showArrows={false}
                >
                    {
                        images.map((val, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <img src={val.image} alt='xaina bak' className='w-screen h-screen object-cover' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-8xl font-medium mb-4 font-cursive text-white"
                     style={{ fontFamily: "Times New Roman, Times, serif" }} >Aarambha</h1>
                    <h2 className="text-3xl">BEST RESORT</h2>
                </div>

            </div>

            <div className='lg:absolute bg-gray-100 lg:bg-transparent bottom-0 w-full px-12  border-gray-900 py-10  text-white object-cover'>

                <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Check-in</label>
                        <input type="date" className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Check-out</label>
                        <input type="date" className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Room</label>
                        <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none">
                            <option>Suite</option>
                            <option>Deluxe</option>
                            <option>Standard</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Guests</label>
                        <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none">
                            <option>1 Adult</option>
                            <option>2 Adults</option>
                            <option>Family</option>
                        </select>
                    </div>

                    <div className="flex items-end">
                        <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
                            Check Availability
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}





"use client";
import Image from "next/image";
import Link from "next/link";

const blogData = {
  "marriage-blog": {
    title: "Discover the most beautiful resorts in Asia",
    image: "/marriage1.jpg",
    date: "Sept 6, 2019",
    author: "Admin",
    content: `
Full blog content about discovering beautiful resorts in Asia...

Asia is home to some of the world's most mesmerizing resorts surrounded by lush forests, pristine beaches, and breathtaking landscapes.
Whether you're planning a honeymoon, family vacation, or a peaceful retreat, Asia offers countless luxurious and eco-friendly options.

From overwater villas in the Maldives to heritage stays in Bali and nature resorts in Bhutan, this continent never disappoints.
    `,
    description:
      "Explore Asia's stunning resort destinations offering breathtaking views, cultural charm, and world-class hospitality.",
  },

  "birthday-blog": {
    title: "Relax and unwind at top luxury resorts",
    image: "/marriage2.jpg",
    date: "Sept 6, 2019",
    author: "Admin",
    content: `
Full blog content about luxury resort experiences...

Luxury resorts are designed to offer the ultimate escape with serene views, world-class spas, fine dining, and personalized experiences.
Whether it's a birthday celebration or a romantic getaway, these resorts offer unmatched comfort and elegance.

Enjoy infinity pools, private beaches, scenic mountain views, and exclusive wellness programs crafted for complete relaxation.
    `,
    description:
      "Find your perfect luxury escape with peaceful views, premium amenities, and unforgettable relaxation experiences.",
  },

  "meeting-blog": {
    title: "Experience the charm of seaside resorts",
    image: "/marriage3.jpg",
    date: "Sept 6, 2019",
    author: "Admin",
    content: `
Full blog content about charming seaside resorts...

Seaside resorts offer the perfect escape for travelers seeking peace, scenic beauty, and refreshing coastal winds.
From hidden gems in Thailand to luxury coastal stays in Sri Lanka, these resorts provide unforgettable experiences by the water.

Enjoy the soothing sound of waves, beach activities, seafood delicacies, and spectacular sunrise views right from your balcony.
    `,
    description:
      "Discover calming seaside retreats with ocean views, fresh coastal air, and relaxing beachside experiences.",
  },
};

export default function BlogPage({ params }) {
  const blog = blogData[params.slug];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">❌</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-200 py-32 px-4">
      <div className="max-w-6xl mx-auto">


        {/* Blog Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{blog.date}</span>
                <span>•</span>
                <span>By {blog.author}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Content */}
              <div className="flex-grow">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                  {blog.content}
                </p>
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-6">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  {blog.description}
                </p>
              </div>


            </div>
          </div>
        </div>


        <div className="flex justify-between items-center mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← All Blogs
          </Link>

        </div>
      </div>
    </div>
  );
}